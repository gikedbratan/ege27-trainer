// API соревновательного режима: классы, рейтинг, спринт дня, чат, облачный прогресс.
import { getStore } from "@netlify/blobs";
import { createHash, randomBytes } from "node:crypto";

const st = () => getStore({ name: "ege27", consistency: "strong" });
const H = (s) => createHash("sha256").update(String(s)).digest("hex");
const rnd = (n) => randomBytes(n).toString("base64url");
const J = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { "content-type": "application/json", "cache-control": "no-store" } });
const E = (m, s = 400) => J({ error: m }, s);
const clean = (s, n) => String(s ?? "").replace(/[\u0000-\u001f<>]/g, " ").replace(/\s+/g, " ").trim().slice(0, n);
const today = () => new Date(Date.now() + 3 * 3600e3).toISOString().slice(0, 10); // МСК
const CODE = /^[A-Z0-9]{6}$/;

async function me(req, db) {
  const [id, tok] = (req.headers.get("authorization") || "").replace(/^Bearer /, "").split(".");
  if (!id || !tok) return null;
  const u = await db.get(`u/${id}`, { type: "json" });
  return u && u.th === H(tok) ? { id, ...u } : null;
}
const pub = (u, id) => ({ id, name: u.name, klass: u.klass, pts: u.pts || 0, acc: u.acc || 0, vbest: u.vbest || 0, upd: u.upd || 0, admin: !!u.admin });

async function newUser(db, code, name, klass, admin) {
  const id = rnd(9), tok = rnd(24);
  await db.setJSON(`u/${id}`, { code, name, klass, th: H(tok), admin, at: Date.now() });
  await db.setJSON(`c/${code}/m/${id}`, { name, klass, admin, pts: 0, acc: 0, upd: Date.now() });
  return { id, token: `${id}.${tok}`, code };
}

export default async (req) => {
  const db = st(), url = new URL(req.url), p = url.pathname.replace(/^\/api\/?/, "");
  const body = req.method === "POST" ? await req.json().catch(() => ({})) : {};
  try {
    // создать класс (учитель) / войти в класс по коду
    if (p === "class" && req.method === "POST") {
      const name = clean(body.name, 40), who = clean(body.who, 40);
      if (!name || !who) return E("Нужны название класса и имя");
      let code; do { code = rnd(6).toUpperCase().replace(/[^A-Z0-9]/g, "7").slice(0, 6) } while (await db.get(`c/${code}/info`));
      await db.setJSON(`c/${code}/info`, { name, at: Date.now() });
      return J(await newUser(db, code, who, "учитель", true));
    }
    if (p === "join" && req.method === "POST") {
      const code = clean(body.code, 6).toUpperCase(), name = clean(body.name, 40), klass = clean(body.klass, 10);
      if (!CODE.test(code) || !name) return E("Проверь код класса и имя");
      if (!(await db.get(`c/${code}/info`))) return E("Класс с таким кодом не найден", 404);
      return J(await newUser(db, code, name, klass, false));
    }
    const u = await me(req, db);
    if (!u) return E("Нужно войти", 401);
    const C = `c/${u.code}`;

    if (p === "me") { const info = await db.get(`${C}/info`, { type: "json" }); return J({ ...pub(u, u.id), code: u.code, cls: info?.name }) }

    // облачная копия прогресса
    if (p === "progress" && req.method === "GET") return J({ S: await db.get(`p/${u.id}`, { type: "json" }) });
    if (p === "progress" && req.method === "POST") {
      const S = body.S; if (!S || typeof S !== "object") return E("Нет данных");
      const raw = JSON.stringify(S); if (raw.length > 3e6) return E("Слишком большой прогресс", 413);
      await db.set(`p/${u.id}`, raw);
      const sts = Object.values(S.st || {}), ok = sts.reduce((a, s) => a + (s.ok || 0), 0), tot = sts.reduce((a, s) => a + (s.tot || 0), 0);
      const vbest = Math.max(0, ...(S.vars || []).map((v) => +v.test || +v.score || 0));
      const m = { name: u.name, klass: u.klass, admin: !!u.admin, pts: ok, acc: tot ? Math.round((ok / tot) * 100) : 0, vbest, upd: Date.now() };
      await db.setJSON(`${C}/m/${u.id}`, m);
      return J({ ok: true });
    }

    // рейтинг класса + результаты спринта дня
    if (p === "board") {
      const d = clean(url.searchParams.get("d") || today(), 10);
      const [{ blobs: ms }, { blobs: ss }] = await Promise.all([db.list({ prefix: `${C}/m/` }), db.list({ prefix: `${C}/s/${d}/` })]);
      const members = (await Promise.all(ms.map(async (b) => ({ id: b.key.split("/").pop(), ...(await db.get(b.key, { type: "json" })) })))).filter((m) => m.name);
      const sprint = (await Promise.all(ss.map(async (b) => ({ id: b.key.split("/").pop(), ...(await db.get(b.key, { type: "json" })) }))));
      return J({ day: d, members: members.map((m) => pub(m, m.id)), sprint });
    }
    if (p === "sprint" && req.method === "POST") {
      const d = today(), k = `${C}/s/${d}/${u.id}`;
      if (await db.get(k)) return E("Спринт дня уже пройден", 409);
      const r = { name: u.name, ok: Math.max(0, Math.min(10, body.ok | 0)), ms: Math.max(0, Math.min(36e5, body.ms | 0)), at: Date.now() };
      await db.setJSON(k, r); return J(r);
    }

    // чат класса
    if (p === "chat" && req.method === "GET") {
      const since = +url.searchParams.get("since") || 0;
      const { blobs } = await db.list({ prefix: `${C}/chat/` });
      const keys = blobs.map((b) => b.key).sort().slice(-150).filter((k) => +k.split("/").pop().split("-")[0] > since);
      const msgs = (await Promise.all(keys.map((k) => db.get(k, { type: "json" })))).filter(Boolean);
      return J({ msgs: u.admin ? msgs : msgs.filter((m) => !m.del).map(({ rep, ...m }) => m) });
    }
    if (p === "chat" && req.method === "POST") {
      const text = String(body.text ?? "").replace(/[\u0000-\u0008\u000b-\u001f]/g, "").trim().slice(0, 500);
      if (!text) return E("Пустое сообщение");
      const last = await db.get(`${C}/rl/${u.id}`, { type: "json" });
      if (last && Date.now() - last.t < 2500) return E("Не так быстро", 429);
      await db.setJSON(`${C}/rl/${u.id}`, { t: Date.now() });
      const ts = Date.now(), key = `${C}/chat/${ts}-${rnd(4)}`, m = { k: key.split("/").pop(), ts, uid: u.id, name: u.name, admin: !!u.admin, text };
      await db.setJSON(key, m); return J(m);
    }
    if (p === "chat/mod" && req.method === "POST") { // report: любой; del: учитель
      const k = `${C}/chat/${clean(body.k, 40)}`, m = await db.get(k, { type: "json" }); if (!m) return E("Нет сообщения", 404);
      if (body.act === "del") { if (!u.admin && m.uid !== u.id) return E("Нельзя", 403); m.del = 1 } else m.rep = [...new Set([...(m.rep || []), u.id])];
      await db.setJSON(k, m); return J({ ok: true });
    }
    if (p === "kick" && req.method === "POST" && u.admin) { const id = clean(body.id, 20); await db.delete(`${C}/m/${id}`); await db.delete(`u/${id}`); return J({ ok: true }) }
    return E("Не найдено", 404);
  } catch (e) { return E("Ошибка сервера: " + e.message, 500) }
};
export const config = { path: "/api/*" };
