/* v4: входной тест, режимы вариантов, варианты ФИПИ по уровням, плашка теории, статистика, счётчики, «Сегодня», учитель */
(()=>{if(window.__v4||typeof GEN==='undefined')return;window.__v4=1;
const B=window.FIPI_BANK||{},META=window.BANK_META||{};window.SOL=window.SOL||{};window.THEO=window.THEO||{};
document.head.insertAdjacentHTML('beforeend',`<style id="v4">
.v4sh{position:fixed;inset:0;z-index:150;display:flex;justify-content:flex-end}
.v4sh .bk{position:absolute;inset:0;background:rgba(0,0,0,.5);opacity:0;transition:opacity .2s}
.v4sh .pn{position:relative;width:min(520px,100%);height:100%;background:var(--panel);border-left:1px solid var(--line);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .22s ease}
.v4sh.in .bk{opacity:1}.v4sh.in .pn{transform:none}
.v4sh .hd{display:flex;align-items:center;gap:10px;padding:14px 18px;border-bottom:1px solid var(--line)}.v4sh .hd b{flex:1;font-size:16px}
.v4sh .bd{overflow-y:auto;padding:16px 20px 40px;overscroll-behavior:contain}
.v4sh .x{background:var(--grid);border:0;border-radius:999px;width:36px;height:36px;color:var(--muted)}
@media (max-width:700px){.v4sh{align-items:flex-end}.v4sh .pn{height:86vh;width:100%;border-left:0;border-radius:22px 22px 0 0;transform:translateY(100%)}}
.v4t h3{font:600 15px var(--ui);color:var(--ink);margin:20px 0 6px}.v4t .alg{counter-reset:a;list-style:none;padding:0}.v4t .alg>li{counter-increment:a;position:relative;padding:8px 0 8px 36px;border-top:1px solid var(--line)}
.v4t .alg>li::before{content:counter(a);position:absolute;left:0;top:8px;width:24px;height:24px;border-radius:50%;background:var(--ink-2);color:var(--ink);font:600 13px/24px var(--hand);text-align:center}
.v4t .tp{margin:6px 0 0;padding:8px 12px;border-left:3px solid var(--l2);background:var(--l2b);border-radius:0 10px 10px 0;font-size:14.5px}
.v4t .ex{margin:12px 0;padding:14px 16px;border:1px solid var(--line);border-radius:14px}.v4t .ex>summary{cursor:pointer;font-weight:600}
.v4t .cheat{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px}.v4t .cheat>div{padding:10px 12px;background:var(--bg);border-radius:12px;overflow-x:auto}
.v4c{display:flex;align-items:center;gap:6px;font:500 11.5px var(--hand);color:var(--muted);white-space:nowrap}
.v4c .bar{width:44px;height:4px;border-radius:2px;background:var(--line);overflow:hidden}.v4c .bar i{display:block;height:100%;background:var(--ink)}
.row .v4c{grid-column:2/4;margin-top:-2px}.row{grid-template-columns:34px 1fr}.row>.pg{display:none}
.tile .v4c{margin-top:6px}.tile>.pg{display:none}
.v4seg{display:grid;grid-template-columns:1fr 1fr;gap:8px}.v4seg button{text-align:left;padding:14px 16px;border-radius:16px;border:1px solid var(--line);background:var(--panel);color:var(--text)}
.v4seg button b{display:block;font-size:15.5px}.v4seg button span{display:block;font-size:13px;color:var(--muted);margin-top:4px;line-height:1.4}
.v4seg button.on{border-color:var(--ink);background:var(--ink-2)}
.vcards .vc.on{border-color:var(--ink);background:var(--ink-2)}
.v4today{border-color:var(--ink)}.v4today .ch{display:flex;justify-content:space-between;gap:10px;align-items:center}
.v4list{list-style:none;padding:0;margin:8px 0 0}.v4list li{display:flex;gap:10px;align-items:center;justify-content:space-between;padding:10px 0;border-top:1px solid var(--line)}
.v4list li>span{flex:1;min-width:0}.v4list small{display:block;color:var(--muted);font-size:12.5px}
.v4kpi{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px}.v4kpi>div{padding:12px 14px;border-radius:14px;background:var(--bg)}
.v4kpi b{display:block;font:600 26px/1.1 var(--hand);color:var(--text);letter-spacing:-.03em}.v4kpi span{font-size:12.5px;color:var(--muted)}
.v4up{color:var(--ok)!important}.v4dn{color:var(--bad)!important}
.v4grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:6px}
.v4grid button{display:flex;flex-direction:column;gap:2px;text-align:left;padding:8px 10px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--text)}
.v4grid button b{font:600 15px var(--hand)}.v4grid button span{font-size:12px;color:var(--muted)}
.v4grid .c1{box-shadow:inset 0 -3px 0 var(--ok)}.v4grid .c2{box-shadow:inset 0 -3px 0 var(--l2)}.v4grid .c3{box-shadow:inset 0 -3px 0 var(--bad)}.v4grid .on{border-color:var(--ink)}
.v4tb{width:100%;border-collapse:collapse;font-size:14px}.v4tb td,.v4tb th{padding:8px 6px;border-bottom:1px solid var(--line);text-align:left}.v4tb .r{text-align:right;font-family:var(--hand);white-space:nowrap}.v4tb th{color:var(--muted);font-weight:500;font-size:12.5px}
.v4bars{display:grid;gap:6px}.v4bar{display:grid;grid-template-columns:34px 1fr 64px;gap:8px;align-items:center;font-size:13px}
.v4bar .tr{position:relative;height:10px;background:var(--grid);border-radius:5px}.v4bar .tr i{position:absolute;left:0;top:0;bottom:0;border-radius:5px;background:var(--ink)}
.v4bar .tr i.slow{background:var(--l2)}.v4bar .tr u{position:absolute;top:-3px;bottom:-3px;width:2px;background:var(--text);opacity:.6}
.v4bar b{font-family:var(--hand)}.v4bar span{text-align:right;color:var(--muted);font-family:var(--hand)}
.v4ln{width:100%;height:auto;display:block}.v4ln .g{stroke:var(--line)}.v4ln .l{fill:none;stroke:var(--ink);stroke-width:2}.v4ln .d{fill:var(--ink);stroke:var(--panel);stroke-width:2}.v4ln .d.o{fill:var(--panel);stroke:var(--ink)}
.v4ln text{fill:var(--muted);font:11px var(--hand)}
.v4tip{list-style:none;padding:0;margin:0}.v4tip li{padding:10px 0 10px 28px;border-top:1px solid var(--line);position:relative;font-size:15px;line-height:1.5}.v4tip li::before{content:"→";position:absolute;left:4px;color:var(--ink)}
.dgtop{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap}.dgtop .qbar{flex:1 1 200px;margin:0}
.v4mode{display:inline-flex;align-items:center;gap:6px;font:600 12px var(--hand);padding:4px 10px;border-radius:999px;background:var(--ink-2);color:var(--ink)}
.v4mode.ex{background:var(--l3b);color:var(--l3)}
.v4ac{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}
.solx>summary{cursor:pointer;color:var(--ink);font-weight:600;margin-top:8px}
.sol .st{margin:10px 0;padding:10px 0 0;border-top:1px solid var(--line)}.sol .st:first-of-type{border-top:0;padding-top:0}.sol .why{display:block;font-size:14px;color:var(--muted);margin-top:4px}
.sol .clean{margin-top:12px;padding:12px 14px;border:1px dashed var(--line);border-radius:12px;background:var(--panel)}
.sol .pts{margin-top:12px;padding:10px 14px;border-radius:12px;background:var(--okb);font-size:14.5px}
.v4day{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin:14px 0 8px}.v4day label{display:flex;align-items:center;gap:8px}.v4day .csel{width:96px}.v4day .cst{min-height:36px;padding:6px 10px}.row .v4c{margin-top:4px}
#axd,#axt{max-width:320px;width:100%}
.v4note{font-size:13.5px;color:var(--muted);padding:10px 14px;border-radius:12px;background:var(--bg);margin:10px 0}
</style>`);

/* ===== банк ФИПИ: индекс, уровни, решённые ===== */
const BI={};for(const n in B)B[n].forEach(t=>{t.n=+n;t.sub=t.id.split('.').slice(0,2).join('.');BI[t.id]=t});
const bLv=t=>(ST.cal&&ST.cal[t.id])||(META[t.id]&&META[t.id][0])||2;
const bSize=n=>(B[n]||[]).length,bOk=id=>S.bk&&S.bk[id]===1;
const bSolved=n=>(B[n]||[]).reduce((a,t)=>a+(bOk(t.id)?1:0),0);
const RIX=n=>GS[n]?GS[n].indexOf('R'):-1;
const fa=a=>a==null?'':String(+(+a).toFixed(6)).replace('.',',').replace('-','−');
const tex=h=>{if(!window.katex||!/\\\(|\\\[/.test(h))return h;return h.replace(/\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)/g,(m,d,i)=>{try{return katex.renderToString(d||i,{displayMode:!!d,output:'mathml',throwOnError:false})}catch(e){return m}})};
window.v4tex=tex;
/* решение: часть 1 коротко + «подробнее», часть 2 по шагам с пояснениями, чистовик и баллы */
function solHtml(t){const z=window.SOL[t.id];
 if(!z)return t.n>13?`Ответ: ${t.ans}. Подробный разбор этой задачи готовится. Пока сверь решение с критериями ФИПИ и с теорией типа (кнопка «Теория»).`:`Ответ: ${fa(t.a)}. Подробный разбор этой задачи готовится, алгоритм есть в теории типа (кнопка «Теория»).`;
 if(t.n<=13)return tex(`${z.s||''}${z.f?`<details class="solx"><summary>Раскрыть подробнее</summary>${z.f}</details>`:''}`);
 return tex(`${(z.st||[]).map((x,k)=>`<div class="st"><b>Шаг ${k+1}.</b> ${x[0]}${x[1]?`<span class="why">Почему: ${x[1]}</span>`:''}</div>`).join('')}${z.alt?`<details class="solx"><summary>Другой способ</summary>${z.alt}</details>`:''}${z.c?`<div class="clean"><b>Чистовик, как на бланке</b><br>${z.c}</div>`:''}${z.p?`<div class="pts"><b>Баллы по критериям.</b> ${z.p}</div>`:''}<p><b>Ответ:</b> ${t.ans}</p>`)}
window.v4sol=solHtml;
const bImg=t=>t.f?`<img class="bfig" alt="Рисунок к задаче" src="data:image/webp;base64,${t.f}" style="width:${Math.round(t.w*1.6)}px">`:'';
const bQ=t=>`<span class="bq" data-id="${t.id}">${t.q}</span>`;
const bSrc=t=>`Источник: открытый банк заданий ЕГЭ ФИПИ, задача ${t.id} по сборнику А. Д. Остромогильского (обновление 28.08.26). Условие и числа не изменены.`;
function bItem(t){return t.n>13?{n:t.n,q:bQ(t),a:null,ans:t.ans,p2:1,fig:bImg(t),s:solHtml(t),bid:t.id,src:bSrc(t)}:{n:t.n,q:bQ(t),a:t.a,ans:null,fig:bImg(t),s:solHtml(t),bid:t.id,src:bSrc(t)}}
/* выбор задачи банка: по уровню, сначала не решённые и не встречавшиеся */
function bPick(n,lv,personal,r){r=r||Math.random;if(window.__bkForce&&BI[window.__bkForce]){const t=BI[window.__bkForce];window.__bkForce=null;return t}
 let L=(B[n]||[]).filter(t=>!lv||bLv(t)===lv);if(!L.length)L=B[n]||[];
 if(personal&&S.bk){const nw=L.filter(t=>!(t.id in S.bk)),wr=L.filter(t=>S.bk[t.id]===0);if(nw.length)L=nw;else if(wr.length)L=wr}
 return L[Math.floor(r()*L.length)]}
window.v4b={B,BI,bLv,bPick,bItem,bSize,bSolved};
for(const n in B){const j=RIX(n);if(j<0)continue;GEN[n][j]=()=>{const t=bPick(+n,S.lvl||0,true);window.__bk=t;const it=bItem(t);return{q:it.q,a:it.a,ans:it.ans,p2:it.p2,fig:it.fig,s:it.s}}}

/* ===== учёт попыток: решённые задачи банка, точность и время по типам, задачи за день ===== */
const tyKey=(n,bid,i)=>bid?'b:'+BI[bid].sub:'g:'+n+':'+i;
function rec(n,bid,i,ok,ms,src){S.bk=S.bk||{};if(bid){if(ok)S.bk[bid]=1;else if(!(bid in S.bk))S.bk[bid]=0}
 const cap=SPEC[n][0]*3*6e4;ms=Math.max(0,Math.min(cap,ms||0));
 S.ty=S.ty||{};const k=tyKey(n,bid,i),y=S.ty[k]||(S.ty[k]={ok:0,tot:0,ms:0,c:0});y.tot++;if(ok)y.ok++;if(ms>3000){y.ms+=ms;y.c++}
 S.tm=S.tm||{};const m=S.tm[n]||(S.tm[n]={ms:0,c:0});if(ms>3000){m.ms+=ms;m.c++}
 if(src==='p'){S.dd=S.dd||{};const d=dkey(),dd=S.dd[d]||(S.dd[d]={});const x=dd[n]||(dd[n]=[0,0]);x[1]++;if(ok)x[0]++;
 const ks=Object.keys(S.dd).sort();if(ks.length>150)ks.slice(0,ks.length-150).forEach(z=>delete S.dd[z])}
 if(bid){S.bkx=S.bkx||{};const z=S.bkx[bid]||(S.bkx[bid]=[0,0]);z[1]++;if(ok)z[0]++}}
window.v4rec=rec;
/* практика: id задачи банка, время, кнопка теории */
const _rp=renderProb;renderProb=function(){_rp();if(!prob)return;const m=/data-id="([^"]+)"/.exec(prob.q||'');prob.bid=m&&GS[prob.n][prob.i]==='R'?m[1]:null;prob._t0=Date.now();
 const tl=document.querySelector('#pb .ptools');if(tl&&!tl.querySelector('#thd')){tl.insertAdjacentHTML('beforeend','<button class="lnk" id="thd" type="button">теория типа</button>');tl.querySelector('#thd').onclick=()=>thOpen(prob.n,prob.bid,prob.i)}
 const sr=document.querySelector('#pb .srcd .src');if(sr&&prob.bid)sr.textContent=bSrc(BI[prob.bid])};
const _rv=reveal;reveal=function(ok,answered){const p=prob;_rv(ok,answered);if(!p||p._rec)return;p._rec=1;rec(p.n,p.bid,p.i,ok,Date.now()-(p._t0||Date.now()),'p');save();side();
 const th=$('#th');if(th){th.textContent='Теория типа';th.onclick=()=>thOpen(p.n,p.bid,p.i)}};
const _eu=errUpd;errUpd=function(ok){_eu(ok);if(prob&&prob.bid&&!ok){const e=(S.err||[]).find(x=>x.k===pkey(prob));if(e)e.bid=prob.bid}};
const _rpl=replay;replay=function(e){if(e.bid)window.__bkForce=e.bid;_rpl(e);window.__bkForce=null};
const _tw=toolsWire;toolsWire=function(){_tw();const f=$('#fav');if(f)f.addEventListener('click',()=>{if(!prob||!prob.bid)return;const e=(S.fav||[]).find(x=>x.k===pkey(prob));if(e)e.bid=prob.bid;save()})};
/* фильтр уровня в практике: задачи ФИПИ теперь имеют свой уровень */
const _pool=pool;pool=function(){const out=_pool();if(!S.lvl&&!(S.src==='R'))return out;
 const ns=cur.mix?Array.from({length:20},(_,i)=>i+1).filter(n=>(S.part===0||(S.part===1?n<=13:n>13))&&(!(S.mixNs||[]).length||S.mixNs.includes(n))):[cur.n];
 ns.forEach(n=>{const j=RIX(n);if(j<0||out.some(([a,b])=>a===n&&b===j))return;if(!cur.mix&&(S.typ[n]??-1)>=0&&S.typ[n]!==j)return;if(S.src&&S.src!=='R')return;if(S.lvl&&!(B[n]||[]).some(t=>bLv(t)===S.lvl))return;out.push([n,j])});
 return S.src==='R'?out.filter(([n,i])=>GS[n][i]==='R'):out};
const _pr=practice;practice=function(){_pr();const s=$('#src');if(s&&!s.querySelector('option[value="R"]')){s.insertAdjacentHTML('beforeend',`<option value="R"${S.src==='R'?' selected':''}>Только реальные задачи ФИПИ</option>`);if(S.src==='R')s.value='R'}};
/* слияние прогресса с разных устройств: решённые задачи объединяем */
const _ms=mergeS;mergeS=function(a,b){const r=_ms(a,b);r.bk=Object.assign({},a.bk||{},b.bk||{});for(const k in r.bk)if((a.bk||{})[k]===1||(b.bk||{})[k]===1)r.bk[k]=1;
 const h={};[...(a.dgh||[]),...(b.dgh||[])].forEach(x=>{if(x&&x.t)h[x.t]=x});r.dgh=Object.values(h).sort((x,y)=>x.t-y.t).slice(-12);return r};

/* ===== шторка теории: теория именно этого типа ===== */
function thFind(n,bid,i){const X=window.THEO[n];if(!X||!X.types)return null;const sub=bid&&BI[bid]?BI[bid].sub:null;
 return X.types.find(y=>sub?(y.subs||[]).includes(sub):(y.gens||[]).includes(i))||null}
function typeHtml(n,y){const X=window.THEO[n];
 return `${y.th?`<h3>Теория</h3>${y.th}`:''}${y.f?`<h3>Формулы</h3><div class="cheat">${y.f.map(x=>`<div>${x}</div>`).join('')}</div>`:''}
 ${y.alg?`<h3>Алгоритм</h3><ol class="alg">${y.alg.map(s=>`<li>${s[0]}${s[1]?`<p class="tp">${s[1]}</p>`:''}</li>`).join('')}</ol>`:''}
 ${(y.ex||[]).map((e,k)=>`<details class="ex"${k?'':' open'}><summary>Пример ${k+1}${e.lv?`, ${LV[e.lv]}`:''}</summary><div class="prob sm">${e.q}</div><div class="sol">${e.s}</div></details>`).join('')}
 <p class="hint">Вся теория №${n}: вкладка «Теория» в задании.${X&&X.src?' '+X.src:''}</p>`}
function sheet(title,html,onClose){const w=document.createElement('div');w.className='v4sh';
 w.innerHTML=`<div class="bk"></div><div class="pn" role="dialog" aria-modal="true" aria-label="${escH(title)}"><div class="hd"><b>${escH(title)}</b><button class="x" type="button" aria-label="Закрыть">✕</button></div><div class="bd theory v4t">${html}</div></div>`;
 const close=()=>{w.classList.remove('in');document.removeEventListener('keydown',key);setTimeout(()=>w.remove(),220);onClose&&onClose()};const key=e=>{if(e.key==='Escape')close()};
 w.querySelector('.bk').onclick=close;w.querySelector('.x').onclick=close;document.addEventListener('keydown',key);document.body.appendChild(w);requestAnimationFrame(()=>w.classList.add('in'));w.querySelector('.x').focus();return w}
function thOpen(n,bid,i){const y=thFind(n,bid,i);const nm=y?y.t:(bid?'':(GT[n][i]||[''])[0]);
 const body=y?tex(typeHtml(n,y)):`<p class="v4note">Теория по каждому типу №${n} с двумя разобранными задачами появится по мере заполнения (номера идут по порядку с первого). Пока здесь вся теория номера.</p>${T[n].h}${TX[n]||''}`;
 sheet(`№${n}. ${nm||T[n].t}`,body)}
window.thOpen=thOpen;window.v4sheet=sheet;

/* ===== варианты: режим (тренировочный / зачётный), уровень, ФИПИ в приоритете ===== */
Object.assign(EXK,{fe:'Вариант ФИПИ, лёгкий',fm:'Вариант ФИПИ, средний',fh:'Вариант ФИПИ, сложный',fa:'Вариант под мои слабые места'});
const MODEN={train:'Тренировочный',exam:'Зачётный'};
const genLv=(n,lv,r)=>{const ok=GT[n].map((_,i)=>i).filter(i=>GS[n][i]!=='X'&&GS[n][i]!=='R');let L=ok.filter(i=>GT[n][i][1]===lv);if(!L.length)L=ok;return L[Math.floor(r()*L.length)]};
/* уровень номера в адаптивном варианте: задачи там, где шанс решить около 60-70 % */
function adaptLv(n){const p=sig(thN(n));return p>.85?3:p>.55?2:1}
function fBuild(kind,seed,personal){const out=[],refs=[];
 for(let n=1;n<=20;n++){const sd=seed*31+n*977,r=rng(sd),lv=kind==='fe'?1:kind==='fh'?3:kind==='fa'?adaptLv(n):2;
  if(bSize(n)>=3){const t=bPick(n,lv,personal,r);out.push(bItem(t));refs.push({n,b:t.id})}
  else{const i=genLv(n,lv,r);out.push(genItem(n,i,sd));out[out.length-1].i=i;refs.push({n,i,sd})}}
 return{items:out,refs}}
const refItems=refs=>refs.map(x=>{if(x.b&&BI[x.b])return bItem(BI[x.b]);const it=genItem(x.n,x.i,x.sd);it.i=x.i;return it});
const _bi=buildItems;buildItems=function(kind,seed){return /^f[emha]$/.test(kind)?fBuild(kind,seed,false).items:_bi(kind,seed)};
const _es=exSave;exSave=function(){_es();if(EX&&S.exam){S.exam.mode=EX.mode||'exam';S.exam.refs=EX.refs||null;S.exam.asg=EX.asg||null;S.exam.tm=EX.tm||{};S.exam.thv=EX.thv||{};S.exam.k1=EX.k1||0;S.exam.k2=EX.k2||{};S.exam.pers=EX.pers||0;save()}};
const _el=exLoad;exLoad=function(){const r=_el();if(r&&S.exam&&S.exam.refs)r.items=refItems(S.exam.refs);return r};
function fStart(kind,mode,sd,asg){const personal=sd==null;const seed=sd!=null?sd>>>0:Math.floor(Math.random()*1e9);
 EX={kind,seed,t0:Date.now(),ans:{},self:{},ai:{},done:false,vid:'v'+Date.now().toString(36),i:0,mode:mode||'exam',asg:asg||null,tm:{},thv:{},k2:{},pers:personal&&/^f/.test(kind)?1:0};
 if(/^f/.test(kind)){const b=fBuild(kind,seed,personal);EX.items=b.items;EX.refs=b.refs}else EX.items=buildItems(kind,seed);
 EX.running=true;exSave();exView()}
window.fStart=fStart;
/* время на каждую задачу варианта */
function tmTick(){if(!EX||!EX._ti)return;const n=EX._tn;EX.tm=EX.tm||{};EX.tm[n]=(EX.tm[n]||0)+Math.min(Date.now()-EX._ti,2*36e5);EX._ti=0}
const _ev=exView;exView=function(){tmTick();_ev();if(!EX||!EX.running)return;const it=EX.items[EX.i],n=it.n,tr=EX.mode==='train';EX._ti=Date.now();EX._tn=n;
 const h1=document.querySelector('.exhead h1');if(h1)h1.insertAdjacentHTML('beforeend',` <span class="v4mode${tr?'':' ex'}">${MODEN[EX.mode||'exam']}</span>`);
 const hp=document.querySelector('.exhead .hint');if(hp&&tr)hp.textContent='20 заданий, 3 ч 55 мин. Можно открыть теорию типа задачи, подсказки появятся сами, если долго думаешь. Результат идёт в прогресс, но не в оценку знаний.';
 if(!tr)return;
 const pt=document.querySelector('#view .card .ptop');if(pt)pt.insertAdjacentHTML('beforeend',`<button class="btn ghost sm" id="exth" type="button">Теория</button>`);
 const tb=$('#exth');if(tb)tb.onclick=()=>{EX.thv=EX.thv||{};EX.thv[n]=1;exSave();thOpen(n,it.bid,it.i)};
 const ar=document.querySelector('#view .ansrow');if(ar){ar.insertAdjacentHTML('afterend',hintBar());prob={n,s:it.s||'',i:it.i,q:it.q};checked=false;hintWire()}};
const _ef=exFinish;exFinish=function(auto){tmTick();if(EX&&!EX.done&&!EX.api)exApply1();_ef(auto)};
/* после завершения: часть 1 в прогресс, а в зачётном ещё и в оценку знаний */
function exApply1(){if(EX.k1)return;EX.k1=1;const ex=EX.mode!=='train';
 EX.items.forEach(it=>{if(it.n>13)return;const ok=exOk(it,EX.ans[it.n]);const tried=String(EX.ans[it.n]||'').trim();
  if(!tried&&!ok)return;rec(it.n,it.bid,it.i,ok,(EX.tm||{})[it.n],'v');
  if(ex){const n=it.n,i=it.bid?RIX(n):it.i;S.st[n]=S.st[n]||{ok:0,tot:0};S.st[n].tot++;if(ok)S.st[n].ok++;if(i!=null&&i>=0)irtUpd(n,i,ok?1:0);memUpd(n,ok)}});save()}
function exApply2(){EX.k2=EX.k2||{};const ex=EX.mode!=='train';EX.items.forEach(it=>{const n=it.n;if(n<=13||EX.self[n]==null||EX.k2[n])return;EX.k2[n]=1;const ok=+EX.self[n]===SPEC[n][1];
  rec(n,it.bid,it.i,ok,(EX.tm||{})[n],'v');if(ex){S.st[n]=S.st[n]||{ok:0,tot:0};S.st[n].tot++;if(ok)S.st[n].ok++;const i=it.bid?RIX(n):it.i;if(i!=null&&i>=0)irtUpd(n,i,ok?1:0);memUpd(n,ok)}})}
const _er=exRecord;exRecord=function(){if(EX&&EX.done)exApply2();_er();const v=(S.vars||[]).find(x=>x.id===EX.vid);if(v){v.mode=EX.mode||'exam';v.asg=EX.asg||null;v.thv=Object.keys(EX.thv||{}).length;v.tm=EX.tm||{}}save()};
/* экран разбора: теория и похожая задача у каждого номера */
function similar(n,bid){S.typ[n]=bid?RIX(n):-1;S.lvl=bid?bLv(BI[bid]):0;S.src='';save();open(n,'practice')}
window.v4similar=similar;
const _rs=exResults;exResults=function(auto){_rs(auto);if(!EX)return;const tr=EX.mode==='train';
 const mt=document.querySelector('.head .meta');if(mt)mt.insertAdjacentHTML('afterbegin',`<span class="v4mode${tr?'':' ex'}">${MODEN[EX.mode||'exam']}</span>`);
 if(tr){const h=document.querySelector('#view > .hint');if(h)h.insertAdjacentHTML('beforeend',` Это тренировочный вариант: решённые задачи засчитаны в прогресс, в оценку знаний и прогноз он не идёт.${Object.keys(EX.thv||{}).length?` Теорию открывал в №${Object.keys(EX.thv).join(', ')}.`:''}`)}
 const tm=EX.tm||{},mm=n=>tm[n]?`${Math.max(1,Math.round(tm[n]/6e4))} мин`:'';
 document.querySelectorAll('[data-sol]').forEach(b=>{const n=+b.dataset.sol,it=EX.items.find(x=>x.n===n);b.parentElement.insertAdjacentHTML('beforeend',` <button class="lnk" data-th="${n}">теория</button> <button class="lnk" data-sim="${n}">похожая</button>${mm(n)?` <small class="hint">${mm(n)}</small>`:''}`)});
 document.querySelectorAll('.p2c').forEach(c=>{const p=c.querySelector('.pill');const n=p?+p.textContent.replace(/\D/g,''):0;if(!n)return;c.insertAdjacentHTML('beforeend',`<div class="actions"><button class="btn ghost sm" data-th="${n}">Теория типа</button><button class="btn ghost sm" data-sim="${n}">Похожая задача</button>${mm(n)?`<span class="hint">время: ${mm(n)}</span>`:''}</div>`)});
 document.querySelectorAll('[data-th]').forEach(b=>b.onclick=()=>{const it=EX.items.find(x=>x.n===+b.dataset.th);thOpen(it.n,it.bid,it.i)});
 document.querySelectorAll('[data-sim]').forEach(b=>b.onclick=()=>{const it=EX.items.find(x=>x.n===+b.dataset.sim);similar(it.n,it.bid)})};

/* код варианта: буква уровня + зерно (старые коды без буквы открывают прежний случайный вариант) */
const KCODE={fe:'E',fm:'M',fh:'H'},KBY={E:'fe',M:'fm',H:'fh'};
const vCode=(kind,sd)=>(KCODE[kind]?KCODE[kind]+'-':'')+exCode(sd);
varsView=function(){hintStop();cur={n:null,tab:'vars',mix:false};RS_.on=false;S.now={vars:1};save();side();ttl('<span>✎</span>Варианты');
 const cont=S.exam&&!S.exam.done,hist=(S.vars||[]).slice().reverse(),md=S.vmode||'train',lv=S.vlv||'fm';
 const lvls=[['fe','Лёгкий','Задачи ФИПИ попроще: проверить базу и набрать уверенность'],['fm','Средний','Как на реальном экзамене: задачи ФИПИ среднего уровня'],['fh','Сложный','Самые трудные прототипы банка в каждом номере'],['fa','Под мои слабые места','В каждом номере уровень, где ты решаешь примерно 2 из 3']];
 const asg=v4asg();
 $('#view').innerHTML=`<div class="head keep"><div class="big" aria-hidden="true">✎</div><div><h1>Варианты целиком</h1><div class="meta"><span class="pill">20 заданий</span><span class="pill">3 ч 55 мин</span><span class="pill">33 первичных балла</span></div></div></div>
 ${cont?`<div class="card resume"><p><b>Есть незавершённый вариант:</b> ${EXK[S.exam.kind]}, ${MODEN[S.exam.mode||'exam'].toLowerCase()}.</p><div class="actions"><button class="btn" id="excont">Продолжить</button></div></div>`:''}
 ${asg?`<div class="card resume"><p><b>Учитель назначил зачётный вариант</b>${asg.title?`: ${escH(asg.title)}`:''}${asg.due?`, до ${new Date(asg.due).toLocaleDateString('ru-RU',{day:'numeric',month:'long'})}`:''}.${(S.vars||[]).some(v=>v.asg===asg.id)?' Ты его уже решил.':''}</p><div class="actions"><button class="btn" id="asgo">${(S.vars||[]).some(v=>v.asg===asg.id)?'Решить ещё раз':'Начать'}</button></div></div>`:''}
 <div class="card"><h3 class="ch">Режим</h3><div class="v4seg" id="vmode">
 <button data-m="train" class="${md==='train'?'on':''}"><b>Тренировочный</b><span>Можно открыть теорию типа задачи, подсказки по таймеру. Идёт в прогресс, но не в оценку знаний.</span></button>
 <button data-m="exam" class="${md==='exam'?'on':''}"><b>Зачётный</b><span>Как на ЕГЭ: без теории, подсказок и чата, результат в конце. Идёт в оценку знаний и статистику.</span></button></div>
 <h3 class="ch" style="margin-top:18px">Сложность</h3><div class="vcards" id="vlv">${lvls.map(([k,t,d])=>`<button class="vc${lv===k?' on':''}" data-k="${k}"><b>${t}</b><span>${d}</span></button>`).join('')}</div>
 <p class="hint">Все задачи из открытого банка ФИПИ без изменений. Авторские только в №6 и №17: для них в банке пока 1-2 задачи. Уровни предварительные и уточняются по результатам класса.</p>
 <div class="actions"><button class="btn" id="vgo1">Начать: ${lvls.find(x=>x[0]===lv)[1].toLowerCase()}, ${MODEN[md].toLowerCase()}</button></div></div>
 <div class="card"><h3 class="ch">Демоверсия 2027</h3><div class="vcards">${['demoA','demoB','demoC'].map((k,j)=>`<button class="vc" data-d="${k}"><b>${EXK[k]}</b><span>${['Первые примеры','Вторые примеры («ИЛИ»)','Третьи примеры'][j]} из проекта демоверсии ФИПИ</span></button>`).join('')}<button class="vc" data-d="rand"><b>Случайный авторский</b><span>Генераторы по типам банка: числа свои, задача каждый раз новая</span></button></div><p class="hint">Режим берётся из переключателя выше.</p></div>
 <div class="card"><h3 class="ch">Вариант по коду</h3><p class="hint">Одинаковый код даёт одинаковый вариант на любом устройстве. Код показан после завершения варианта.</p><div class="codebox"><input class="ans" id="vcode" maxlength="9" autocomplete="off" placeholder="например, M-5K3QZ" aria-label="Код варианта"><button class="btn" id="vgo">Открыть</button></div></div>
 <div class="card"><h3 class="ch">Мои результаты</h3>${hist.length?`<ul class="log">${hist.map(v=>`<li><span class="lt">${new Date(v.t).toLocaleDateString('ru-RU',{day:'numeric',month:'short'})}</span><span>${EXK[v.kind]||v.kind} <span class="v4mode${v.mode==='train'?'':' ex'}">${MODEN[v.mode||'exam']}</span>${v.code?` <small class="hint">код ${v.code}</small>`:''}</span><span class="${v.test>=80?'lok':''}"><b>${v.test}</b> (${v.prim} перв.)</span></li>`).join('')}</ul>`:'<p class="hint">Пока нет решённых вариантов.</p>'}</div>`;
 const guard=async()=>!cont||await uiAsk('Незавершённый вариант будет потерян. Начать новый?',{ok:'Начать новый',danger:true});
 document.querySelectorAll('#vmode button').forEach(b=>b.onclick=()=>{S.vmode=b.dataset.m;save();varsView()});
 document.querySelectorAll('#vlv .vc').forEach(b=>b.onclick=()=>{S.vlv=b.dataset.k;save();varsView()});
 $('#vgo1').onclick=async()=>{if(await guard())fStart(lv,md)};
 document.querySelectorAll('[data-d]').forEach(b=>b.onclick=async()=>{if(await guard())fStart(b.dataset.d,md)});
 if(asg)$('#asgo').onclick=async()=>{if(await guard())fStart(asg.kind||'fm','exam',asg.seed,asg.id)};
 if(cont)$('#excont').onclick=exResume;
 $('#vgo').onclick=async()=>{let c=$('#vcode').value.trim().toUpperCase().replace(/\s/g,'');let k='rand';const m=/^([EMH])-?([0-9A-Z]{1,7})$/.exec(c);if(m){k=KBY[m[1]];c=m[2]}
  const sd=parseInt(c,36);if(!/^[0-9A-Z]{1,7}$/.test(c)||!(sd>=0&&sd<4294967296)){uiNote('Код состоит из букв латиницы и цифр, например M-5K3QZ.');return}if(await guard())fStart(k,md,sd)};
 toTop('varsView')};
/* код в истории и на экране результата */
const _er2=exRecord;exRecord=function(){_er2();const v=(S.vars||[]).find(x=>x.id===EX.vid);if(v&&KCODE[EX.kind]&&!EX.pers){v.code=vCode(EX.kind,EX.seed);save()}};
const _rs2=exResults;exResults=function(a){_rs2(a);if(EX&&KCODE[EX.kind]&&!EX.pers){const m=document.querySelector('.head .meta');if(m)m.insertAdjacentHTML('beforeend',`<span class="pill">код ${vCode(EX.kind,EX.seed)}</span>`)}};

/* ===== входной тест: адаптивный, 33 задачи, один заход, таймер, без возврата ===== */
const DGN=33,DGLIM=235*60e3;
const pFrom=(a,b)=>a===1&&b===1?.95:a===1?.75:b===1?.45:a===-1&&b===-1?.05:.12;
function dgSpec(k,q){if(k<13)return{n:k+1,st:'A',lv:2};if(k<26){const a=q[k-13];return{n:k-12,st:'B',lv:a&&a.r===1?3:1}}
 const good=q.slice(0,13).filter(x=>x.r===1).length;return{n:k-12,st:'C',lv:good>=9?2:1}}
function dgMake(sp,q){const used=new Set(q.map(x=>x.b).filter(Boolean));
 if(bSize(sp.n)>=3){let t;for(let j=0;j<12;j++){t=bPick(sp.n,sp.lv,true);if(!used.has(t.id))break}return Object.assign(sp,{b:t.id})}
 const i=genLv(sp.n,sp.lv,Math.random),sd=Math.floor(Math.random()*4294967295);return Object.assign(sp,{i,sd})}
const dgItem=x=>{if(x.b)return bItem(BI[x.b]);const it=genItem(x.n,x.i,x.sd);it.i=x.i;return it};
let DGT=null;
function dgLeft(){return Math.max(0,DGLIM-(Date.now()-S.dg.t0))}
function dgView(){hintStop();cur={n:null,tab:'diag',mix:false};RS_.on=false;S.now={diag:1};side();ttl('<span>◉</span>Входной тест');clearInterval(DGT);DGT=null;
 const g=S.dg;if(!g)return dgIntro();if(g.ph==='self'||dgLeft()<=0){if(g.ph!=='self'){g.ph='self';save()}return dgSelf()}
 if(!g.q[g.i])g.q[g.i]=dgMake(dgSpec(g.i,g.q),g.q),save();
 const x=g.q[g.i],it=dgItem(x),p2=x.n>13;g.ts=Date.now();
 $('#view').innerHTML=`<div class="head keep"><div class="big" aria-hidden="true">${g.i+1}</div><div><h1>Входной тест</h1><div class="meta"><span class="pill">задача ${g.i+1} из ${DGN}</span><span class="pill">№${x.n}, ${p2?'часть 2':'часть 1'}</span><span class="pill" id="dgtm">--:--</span></div></div></div>
 <div class="card"><div class="dgtop"><div class="qbar"><i style="width:${g.i/DGN*100}%"></i></div><span class="hint">Назад вернуться нельзя</span></div>
 <div class="prob" style="margin-top:14px">${it.q}</div>${it.fig?`<div class="fig">${it.fig}</div>`:''}
 ${p2?'<p class="hint">Реши на листе с полным обоснованием. Ответ можно записать. В конце теста сравнишь с эталоном и оценишь себя по критериям ФИПИ.</p>':''}
 <div class="ansrow"><input class="ans" id="dga" autocomplete="off" inputmode="${p2?'text':'decimal'}" placeholder="${p2?'Ответ (необязательно)':'Ответ'}" aria-label="Ответ"><button class="btn" id="dgok">${p2?'Дальше':'Ответить'}</button><button class="btn ghost" id="dgno">Не знаю</button></div>
 <p class="hint" id="dge"></p></div>
 <div class="actions"><button class="btn ghost" id="dgstop">Прервать тест</button></div>`;
 const go=r=>{const v=$('#dga').value.trim();x.ans=v;x.ms=Date.now()-g.ts;
  if(r!==-1&&!p2){if(!exFmt(v)){$('#dge').textContent=v?'На ЕГЭ ответ пишут целым числом или десятичной дробью, например 12 или −0,25.':'Введи ответ или нажми «Не знаю».';return}r=exOk(it,v)?1:0}
  if(p2)r=r===-1?-1:(v?0:0);x.r=r;if(r===-1)x.ans='';g.i++;save();if(g.i>=DGN){g.ph='self';save()}dgView()};
 $('#dgok').onclick=()=>go(0);$('#dgno').onclick=()=>go(-1);$('#dga').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();go(0)}};
 $('#dgstop').onclick=async()=>{if(await uiAsk('Прервать тест? Ответы не сохранятся, начать можно будет заново.',{ok:'Прервать',danger:true})){S.dg=null;save();dgView()}};
 const tick=()=>{const e=$('#dgtm');if(!e||!S.dg||S.dg.ph==='self'){clearInterval(DGT);DGT=null;return}const s=dgLeft()/1e3;e.textContent=`${Math.floor(s/3600)}:${String(Math.floor(s%3600/60)).padStart(2,'0')}:${String(Math.floor(s%60)).padStart(2,'0')}`;if(s<=0){S.dg.ph='self';save();dgView()}};
 DGT=setInterval(tick,1000);tick();if(matchMedia('(min-width:861px)').matches)$('#dga').focus({preventScroll:true});toTop('dg'+g.i)}
function dgIntro(){const h=S.dgh||[],last=h[h.length-1];const days=last?Math.floor((Date.now()-last.t)/864e5):null;
 $('#view').innerHTML=`<div class="head keep"><div class="big" aria-hidden="true">◉</div><div><h1>Входной тест</h1><div class="meta"><span class="pill">${DGN} задачи</span><span class="pill">до 3 ч 55 мин</span><span class="pill">части 1 и 2</span></div></div></div>
 <div class="card"><p>Тест подстраивается под тебя: решил задачу верно, следующая в этом номере будет сложнее, ошибся, будет проще. Так за один заход видно, что ты знаешь уверенно, а что нужно повторить.</p>
 <ul class="v4tip"><li>Сначала 13 задач части 1, потом ещё 13 (сложнее или проще), потом 7 задач части 2.</li><li>Один заход, общий таймер. Вернуться к прошлой задаче нельзя.</li><li>Не знаешь, как решать, жми «Не знаю»: это честнее угадывания и точнее покажет пробелы.</li><li>Часть 2 решаешь на листе, в конце оцениваешь себя по критериям ФИПИ.</li><li>Результат: прогноз балла, что повторить, план по дням и разбор каждой ошибки. Повторный тест через 2 недели покажет рост.</li></ul>
 <div class="actions"><button class="btn" id="dggo">${h.length?'Пройти повторный тест':'Начать тест'}</button></div>${last&&days<14?`<p class="hint">Прошлый тест был ${days?days+' дн. назад':'сегодня'}. Для честного сравнения лучше выждать 2 недели, но можно и раньше.</p>`:''}</div>
 ${h.length?`<div class="card"><h3 class="ch">Мои тесты</h3><ul class="log">${h.slice().reverse().map((x,j)=>`<li><span class="lt">${new Date(x.t).toLocaleDateString('ru-RU',{day:'numeric',month:'short'})}</span><span><button class="lnk" data-dgr="${h.length-1-j}">прогноз ${x.test} баллов</button></span><span>${x.prim} перв.</span></li>`).join('')}</ul></div>`:''}`;
 $('#dggo').onclick=()=>{S.dg={t0:Date.now(),q:[],i:0,ph:'run'};save();dgView()};
 document.querySelectorAll('[data-dgr]').forEach(b=>b.onclick=()=>dgResult(+b.dataset.dgr));toTop('dgIntro')}
function dgSelf(){const g=S.dg,P=g.q.filter(x=>x&&x.n>13&&x.r!==-1);
 if(!P.length)return dgFinish();
 $('#view').innerHTML=`<div class="head keep"><div class="big" aria-hidden="true">✓</div><div><h1>Оцени часть 2</h1><div class="meta"><span class="pill">${P.length} ${P.length===1?'задача':'задачи'}</span></div></div></div>
 <p class="hint">Сравни своё решение с эталонным ответом и критериями ФИПИ. Ставь балл честно: от этого зависит план подготовки.</p>
 ${P.map(x=>{const it=dgItem(x),cr=CRIT[x.n]||[[SPEC[x.n][1],'Полное верное решение'],[0,'Нет решения']];return `<div class="card p2c"><div class="meta"><span class="pill">№${x.n}</span><span class="pill">до ${SPEC[x.n][1]} б.</span></div>
 <details><summary>Условие</summary><div class="prob sm">${it.q}</div>${it.fig?`<div class="fig">${it.fig}</div>`:''}</details>
 <p><b>Эталонный ответ:</b> ${it.ans||fa(it.a)}${x.ans?`. <b>Твой:</b> ${escH(x.ans)}`:''}</p><details><summary>Решение</summary><div class="sol">${it.s}</div></details>
 <div class="crit">${cr.map(([b,t])=>`<label class="cr${x.self===b?' on':''}"><input type="radio" name="d${x.n}" value="${b}"${x.self===b?' checked':''}><b>${b}</b><span>${t}</span></label>`).join('')}</div></div>`}).join('')}
 <div class="actions"><button class="btn" id="dgfin">Показать результат</button></div>`;
 document.querySelectorAll('.crit input').forEach(i=>i.onchange=()=>{const x=g.q.find(z=>z&&z.n===+i.name.slice(1)&&z.st==='C');x.self=+i.value;save();i.closest('.crit').querySelectorAll('.cr').forEach(l=>l.classList.toggle('on',l.contains(i)))});
 $('#dgfin').onclick=async()=>{const un=P.filter(x=>x.self==null).length;if(un&&!await uiAsk(`Не оценено задач: ${un}. Они пойдут как 0 баллов. Продолжить?`,{ok:'Продолжить'}))return;dgFinish()};toTop('dgSelf')}
function dgFinish(){const g=S.dg;if(!g)return dgView();const p={},res={},lvx={};
 for(let n=1;n<=13;n++){const a=g.q[n-1],b=g.q[n+12];p[n]=pFrom(a?a.r:0,b?b.r:0);res[n]=[a?a.r:0,b?b.r:0]}
 for(let n=14;n<=20;n++){const x=g.q[n+12];const s=x&&x.r!==-1?+(x.self||0):0;p[n]=Math.round(s/SPEC[n][1]*(x&&x.lv===1?.8:1)*100)/100;res[n]=[x?(x.r===-1?-1:s):0];lvx[n]=x?x.lv:1}
 g.q.forEach(x=>{if(!x)return;const ok=x.n<=13?x.r===1:x.r!==-1&&+(x.self||0)===SPEC[x.n][1];if(x.r!==-1||x.ans)rec(x.n,x.b,x.i,ok,x.ms,'d')});
 /* тест идёт в оценку знаний: уровень по номеру сдвигается к результату теста */
 S.irt=S.irt||{};S.irt.th=S.irt.th||{};for(let n=1;n<=20;n++){const t=logit(Math.max(.05,Math.min(.95,p[n]||.05)));S.irt.th[n]=S.irt.th[n]!=null&&S.irt.k&&S.irt.k[n]>5?(S.irt.th[n]+t)/2:t}
 const prim=Math.round(Object.keys(p).reduce((a,n)=>a+p[n]*SPEC[n][1],0)*10)/10;
 const h={t:Date.now(),p,res,prim,test:toTest(Math.round(prim)),min:Math.round((Date.now()-g.t0)/6e4),q:g.q.map(x=>x&&{n:x.n,st:x.st,lv:x.lv,b:x.b||null,i:x.i,sd:x.sd,r:x.r,ans:x.ans||'',self:x.self,ms:x.ms})};
 S.dgh=(S.dgh||[]).concat([h]).slice(-12);S.dg=null;S.dplan=null;save();dgResult(S.dgh.length-1)}
const lvName=p=>p>=.85?['уверенно','c1']:p>=.6?['почти','c2']:p>=.35?['нестабильно','c2']:['пробел','c3'];
function dgRepeat(h){return Array.from({length:20},(_,k)=>k+1).filter(n=>h.p[n]<.85).map(n=>({n,pr:SPEC[n][1]*(.85-h.p[n])/SPEC[n][0]*(n<=13?2:1)})).sort((a,b)=>b.pr-a.pr)}
const P2G={70:[14],80:[14,16,17],90:[14,15,16,17,18],95:[14,15,16,17,18,19,20]};
function dgPlan(h,min,goal){const allow=new Set([...Array.from({length:13},(_,k)=>k+1),...(P2G[goal]||P2G[95])]);
 const weak=dgRepeat(h).filter(x=>allow.has(x.n)).map(x=>x.n),strong=Array.from({length:20},(_,k)=>k+1).filter(n=>allow.has(n)&&!weak.includes(n));
 const days=[];let w=0;for(let d=0;d<7;d++){let left=min;const day=[];
  if(d===6&&min>=120){days.push([{n:0,c:1,v:1}]);continue}
  if(d%2===1&&strong.length){const n=strong[(d>>1)%strong.length];const c=Math.max(2,Math.min(4,Math.floor(min*.2/(SPEC[n][0]*1.5))));day.push({n,c});left-=c*SPEC[n][0]*1.5}
  for(let k=0;k<3&&weak.length&&left>=SPEC[weak[w%weak.length]][0]*1.5;k++){const n=weak[w%weak.length];w++;if(day.some(x=>x.n===n))break;const per=SPEC[n][0]*1.5;const c=Math.max(1,Math.min(10,Math.floor(left/(3-k)/per)));day.push({n,c});left-=c*per}
  if(!day.length&&strong.length)day.push({n:strong[d%strong.length],c:3});days.push(day)}
 return{min,goal,t0:new Date().setHours(0,0,0,0),days}}
function dgResult(j){hintStop();cur={n:null,tab:'diag',mix:false};S.now={diag:1};side();ttl('<span>◉</span>Результат теста');
 const H=S.dgh||[],h=H[j];if(!h)return dgView();const pv=H[j-1];
 const rep=dgRepeat(h),pot=Math.round(Array.from({length:20},(_,k)=>k+1).reduce((a,n)=>a+Math.max(h.p[n],rep.slice(0,6).some(x=>x.n===n)?.8:0)*SPEC[n][1],0));
 const wrong=h.q.filter(x=>x&&(x.n<=13?x.r!==1:(x.self||0)<SPEC[x.n][1]));
 const dl=pv?h.test-pv.test:0,dd=pv?Math.max(1,Math.round((h.t-pv.t)/864e5)):0;
 const goal=S.goal||95,pl=S.dplan&&S.dplan.ref===h.t?S.dplan:null;
 $('#view').innerHTML=`<div class="head keep"><div class="big" aria-hidden="true">${h.test}</div><div><h1>Результат входного теста</h1><div class="meta"><span class="pill">${new Date(h.t).toLocaleDateString('ru-RU',{day:'numeric',month:'long'})}</span><span class="pill">прогноз ${String(h.prim).replace('.',',')} перв.</span><span class="pill">${h.min} мин</span></div></div></div>
 ${pv?`<div class="card v4today"><h3 class="ch">Рост за ${dd} ${dd%10===1&&dd%100!==11?'день':dd%10>=2&&dd%10<=4&&(dd%100<10||dd%100>=20)?'дня':'дней'}</h3><div class="v4kpi"><div><b>${pv.test}</b><span>${dd} дн. назад</span></div><div><b>${h.test}</b><span>сегодня</span></div><div><b class="${dl>0?'v4up':dl<0?'v4dn':''}">${dl>0?'+':''}${dl}</b><span>баллов</span></div></div>
 <p>${dl>=5?'Молодец, прогресс идёт! Работа над слабыми местами даёт результат.':dl>0?'Есть рост. Продолжай в том же темпе, и он станет заметнее.':dl===0?'Результат на прежнем уровне. Посмотри план ниже: он нацелен на номера, которые тянут вниз.':'Чуть ниже прошлого раза. Так бывает: другой набор задач, усталость. Посмотри, какие номера просели.'}</p>
 <div class="tscroll"><table class="v4tb"><tr><th>№</th><th class="r">было</th><th class="r">стало</th></tr>${Array.from({length:20},(_,k)=>k+1).filter(n=>Math.abs(h.p[n]-pv.p[n])>=.15).map(n=>`<tr><td>№${n} ${T[n].t}</td><td class="r">${Math.round(pv.p[n]*100)}%</td><td class="r ${h.p[n]>pv.p[n]?'v4up':'v4dn'}">${Math.round(h.p[n]*100)}%</td></tr>`).join('')||'<tr><td colspan="3" class="hint">Заметных изменений по отдельным номерам нет.</td></tr>'}</table></div></div>`:''}
 <div class="card"><h3 class="ch">Прогноз</h3><div class="v4kpi"><div><b>${h.test}</b><span>баллов сейчас</span></div><div><b>${toTest(pot)}</b><span>если подтянешь 6 главных номеров до 80%</span></div><div><b>${needP(goal)}</b><span>первичных нужно для ${goal}+</span></div></div>
 <p class="hint">Прогноз по ответам теста: в каждом номере учитывается, решил ли ты задачу среднего уровня и следующую, сложнее или проще. Шкала ориентировочная.</p>
 <div class="v4grid">${Array.from({length:20},(_,k)=>k+1).map(n=>{const[l,c]=lvName(h.p[n]);return `<button class="${c}" data-o="${n}" title="${T[n].t}"><b>№${n}</b><span>${l}, ${Math.round(h.p[n]*100)}%</span></button>`}).join('')}</div></div>
 <div class="card"><h3 class="ch">Что повторить</h3>${rep.length?`<ul class="v4list">${rep.slice(0,8).map(x=>{const w=wrong.filter(z=>z.n===x.n);return `<li><span><b>№${x.n} ${T[x.n].t}</b><small>${lvName(h.p[x.n])[0]}, ${Math.round(h.p[x.n]*100)}%. ${x.n<=13?'1 балл, решается быстро.':`до ${SPEC[x.n][1]} баллов.`}${w.length?` Ошибка в задаче ${w.map(z=>z.b?z.b:'авторской').join(', ')}.`:''}</small></span><span class="v4ac"><button class="btn ghost sm" data-sim="${x.n}" data-b="${(w[0]&&w[0].b)||''}">Похожие</button><button class="btn sm" data-p="${x.n}">Решать</button></span></li>`}).join('')}</ul>`:'<p>Пробелов не видно. Переходи к полным вариантам в зачётном режиме.</p>'}</div>
 <div class="card" id="plan"><h3 class="ch">План на неделю</h3><div class="filters"><div class="lab">Сколько времени в день</div><select class="sel" id="pmin" aria-label="Минут в день">${[30,45,60,90,120,180].map(v=>`<option value="${v}"${(pl?pl.min:60)===v?' selected':''}>${v} мин</option>`).join('')}</select><div class="lab">Цель</div><select class="sel" id="pgoal" aria-label="Цель">${[70,80,90,95].map(v=>`<option value="${v}"${(pl?pl.goal:goal)===v?' selected':''}>${v}+</option>`).join('')}</select></div>
 <div class="actions"><button class="btn" id="pmk">${pl?'Пересоставить план':'Составить план'}</button></div>${pl?planHtml(pl):''}</div>
 <div class="card"><h3 class="ch">Разбор ошибок (${wrong.length})</h3>${wrong.length?wrong.map(x=>{const it=dgItem(x);return `<details class="ex"><summary>№${x.n}: ${x.r===-1?'«не знаю»':x.n<=13?`твой ответ ${escH(x.ans)}`:`самооценка ${x.self||0} из ${SPEC[x.n][1]}`}</summary><div class="prob sm">${it.q}</div>${it.fig?`<div class="fig">${it.fig}</div>`:''}<p><b>Верный ответ:</b> ${it.ans||fa(it.a)}</p><div class="sol">${it.s}</div><div class="actions"><button class="btn ghost sm" data-th="${x.n}" data-b="${x.b||''}" data-i="${x.i??''}">Теория типа</button><button class="btn ghost sm" data-sim="${x.n}" data-b="${x.b||''}">Похожая задача</button></div></details>`}).join(''):'<p>Ошибок нет.</p>'}</div>
 <div class="actions"><button class="btn ghost" id="dgback">Все тесты</button></div>`;
 document.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>open(+b.dataset.o,'theory'));
 document.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>open(+b.dataset.p,'practice'));
 document.querySelectorAll('[data-sim]').forEach(b=>b.onclick=()=>similar(+b.dataset.sim,b.dataset.b||null));
 document.querySelectorAll('[data-th]').forEach(b=>b.onclick=()=>thOpen(+b.dataset.th,b.dataset.b||null,b.dataset.i===''?null:+b.dataset.i));
 $('#pmk').onclick=()=>{const g=+$('#pgoal').value;S.goal=g;S.dplan=Object.assign(dgPlan(h,+$('#pmin').value,g),{ref:h.t});save();dgResult(j);setTimeout(()=>$('#plan').scrollIntoView({block:'start'}),50)};
 planWire();$('#dgback').onclick=()=>dgIntro();toTop('dgr'+j)}
const DN=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
function planDay(pl){return Math.floor((new Date().setHours(0,0,0,0)-pl.t0)/864e5)}
function planHtml(pl){const td=planDay(pl);return `<p class="hint">План на 7 дней с ${new Date(pl.t0).toLocaleDateString('ru-RU',{day:'numeric',month:'long'})}: ${pl.min} мин в день, цель ${pl.goal}+. Задачи: верно решённые в практике.</p><div class="tscroll"><table class="v4tb">${pl.days.map((d,k)=>{const dt=new Date(pl.t0+k*864e5);return `<tr${k===td?' style="background:var(--ink-2)"':''}><td>${k===td?'<b>Сегодня</b>':DN[(dt.getDay()+6)%7]+', '+dt.getDate()}</td><td>${d.map(x=>x.v?'<button class="lnk" data-pv="1">тренировочный вариант целиком</button>':`<button class="lnk" data-pp="${x.n}">№${x.n}</button> × ${x.c}`).join(', ')}</td></tr>`}).join('')}</table></div>`}
function planWire(){document.querySelectorAll('[data-pp]').forEach(b=>b.onclick=()=>open(+b.dataset.pp,'practice'));document.querySelectorAll('[data-pv]').forEach(b=>b.onclick=()=>{S.vmode='train';varsView()})}
window.dgView=dgView;window.dgResult=dgResult;

/* ===== счётчики «решено / в банке» у каждого номера ===== */
const cnt=n=>{const z=bSize(n);if(z>=3){const s=bSolved(n);return{t:`${s} из ${z}`,w:s/z*100,h:`Решено задач открытого банка ФИПИ: ${s} из ${z}`}}const o=(S.st[n]||{}).ok||0;return{t:`${o} верно`,w:Math.min(100,o*10),h:'В банке ФИПИ пока мало задач этого номера, считаются все верные'}};
const cntHtml=n=>{const c=cnt(n);return `<span class="v4c" title="${c.h}"><span class="bar"><i style="width:${c.w}%"></i></span>${c.t}</span>`};
const _sd=side;side=function(){_sd();document.querySelectorAll('#side .row[data-n]').forEach(r=>{const nm=r.querySelector('.nm');if(nm&&!nm.querySelector('.v4c'))nm.insertAdjacentHTML('beforeend',cntHtml(+r.dataset.n))});
 const bot=document.querySelector('#side .side-bot');if(bot&&!bot.querySelector('[data-v4]'))bot.insertAdjacentHTML('afterbegin','<div class="botrow"><button class="mix m2" data-v4="diag">Входной тест</button><button class="mix m2" data-v4="stats">Статистика</button></div>')};
document.getElementById('side').addEventListener('click',e=>{const b=e.target.closest('[data-v4]');if(!b)return;drawer(false);b.dataset.v4==='diag'?dgView():statsView()});
const _hm=home;home=function(){_hm();document.querySelectorAll('#view .tile[data-n]').forEach(t=>{const sp=t.querySelector('.tb span:last-child');if(sp)sp.remove();t.insertAdjacentHTML('beforeend',cntHtml(+t.dataset.n))});asgLoad()};

/* ===== блок «Сегодня» на главной ===== */
const plural=(k,a,b,c)=>k%10===1&&k%100!==11?a:k%10>=2&&k%10<=4&&(k%100<10||k%100>=20)?b:c;
dayCard=function(){const g=S.dgoal||10,dn=(S.days||{})[dkey()]||0,st=dayStreak(),H=S.dgh||[],last=H[H.length-1],pl=S.dplan,td=pl?planDay(pl):-1,dd=(S.dd||{})[dkey()]||{},asg=v4asg();
 const ago=last?Math.floor((Date.now()-last.t)/864e5):null;let rows='';
 if(asg&&!(S.vars||[]).some(v=>v.asg===asg.id))rows+=`<li><span><b>Зачётный вариант от учителя</b><small>${asg.title?escH(asg.title)+'. ':''}${asg.due?'До '+new Date(asg.due).toLocaleDateString('ru-RU',{day:'numeric',month:'long'})+'.':''} Как на ЕГЭ, 3 ч 55 мин.</small></span><button class="btn sm" data-t="asg">Начать</button></li>`;
 if(S.dg)rows+=`<li><span><b>Тест не закончен</b><small>Задача ${Math.min(DGN,S.dg.i+1)} из ${DGN}. Таймер идёт.</small></span><button class="btn sm" data-t="dg">Продолжить</button></li>`;
 else if(!last)rows+=`<li><span><b>Пройди входной тест</b><small>${DGN} задачи, до 3 ч 55 мин. Узнаешь прогноз балла, что повторить, и получишь план по дням.</small></span><button class="btn sm" data-t="dg">Начать</button></li>`;
 else if(ago>=14)rows+=`<li><span><b>Пора повторить тест</b><small>Прошло ${ago} ${plural(ago,'день','дня','дней')}. Сравним с прошлым результатом (${last.test} баллов).</small></span><button class="btn sm" data-t="dg">Пройти</button></li>`;
 if(pl&&td>=0&&td<7){const d=pl.days[td];rows+=d.map(x=>{if(x.v)return `<li><span><b>Тренировочный вариант целиком</b><small>По плану на сегодня</small></span><button class="btn ghost sm" data-t="var">Открыть</button></li>`;const done=Math.min(x.c,(dd[x.n]||[0])[0]);
  return `<li><span><b>№${x.n} ${T[x.n].t}</b><small>${done>=x.c?'Готово ✓':`Реши верно ${x.c}: сделано ${done}`}</small><span class="dbar" style="margin-top:6px"><i style="width:${done/x.c*100}%"></i></span></span><button class="btn ${done>=x.c?'ghost ':''}sm" data-pp="${x.n}">${done>=x.c?'Ещё':'Решать'}</button></li>`}).join('')}
 else if(last&&!S.dg)rows+=`<li><span><b>${pl?'Неделя плана закончилась':'Составь план на неделю'}</b><small>${pl?'Пройди повторный тест или составь новый план по последнему тесту.':'По результатам теста: сколько минут в день и какая цель.'}</small></span><button class="btn ghost sm" data-t="plan">${pl?'Новый план':'Составить'}</button></li>`;
 const grow=H.length>=2?`<span class="pill">тест: ${H[H.length-2].test} → ${last.test}</span>`:last?`<span class="pill">прогноз ${last.test}</span>`:'';
 return `<div class="card v4today"><h3 class="ch"><span>Сегодня</span><span class="meta">${grow}<span class="pill">${st?`серия ${st} ${plural(st,'день','дня','дней')}`:'начни серию'}</span></span></h3>${rows?`<ul class="v4list">${rows}</ul>`:''}
 <div class="v4day"><span class="hint">Решено сегодня: <b>${dn} из ${g}</b></span><label class="hint">цель в день <select class="sel" id="dgoal" aria-label="Цель на день">${[5,10,15,20,30].map(v=>`<option${v===g?' selected':''}>${v}</option>`).join('')}</select></label></div><div class="dbar"><i style="width:${Math.min(100,dn/g*100)}%"></i></div></div>`};
const _dw=dayWire;dayWire=function(){_dw();const box=document.querySelector('.v4today');if(!box)return;planWire();
 box.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{const t=b.dataset.t,a=v4asg();if(t==='dg')dgView();else if(t==='var'){S.vmode='train';varsView()}else if(t==='plan'){const H=S.dgh||[];dgResult(H.length-1);setTimeout(()=>{const p=$('#plan');if(p)p.scrollIntoView({block:'start'})},60)}else if(t==='asg'&&a)fStart(a.kind||'fm','exam',a.seed,a.id)})};

/* ===== статистика ===== */
const accTxt=(ok,tot)=>tot?Math.round(ok/tot*100)+'%':'нет';
const mins=ms=>ms<6e4?Math.round(ms/1e3)+' с':(Math.round(ms/6e3)/10+'').replace('.',',')+' мин';
function pNow(n){const H=S.dgh||[],l=H[H.length-1];const s=S.st[n];if(s&&s.tot>=5)return sig(thN(n));if(l)return l.p[n];return s&&s.tot?s.ok/s.tot:null}
function tips(){const out=[],st=S.st,tm=S.tm||{},H=S.dgh||[],V=(S.vars||[]);
 const weak=Object.keys(st).map(Number).filter(n=>st[n].tot>=5&&st[n].ok/st[n].tot<.7).sort((a,b)=>st[a].ok/st[a].tot-st[b].ok/st[b].tot);
 weak.slice(0,2).forEach(n=>out.push([`В №${n} точность ${accTxt(st[n].ok,st[n].tot)}. Открой теорию типа, где ошибаешься, и реши 5 похожих задач подряд.`,n]));
 const slow=Object.keys(tm).map(Number).filter(n=>tm[n].c>=3&&tm[n].ms/tm[n].c>SPEC[n][0]*6e4*1.4).sort((a,b)=>tm[b].ms/tm[b].c/SPEC[b][0]-tm[a].ms/tm[a].c/SPEC[a][0]);
 slow.slice(0,2).forEach(n=>out.push([`На №${n} уходит в среднем ${mins(tm[n].ms/tm[n].c)} при норме ФИПИ ${SPEC[n][0]} мин. Реши несколько лёгких задач этого номера на время, чтобы алгоритм стал автоматическим.`,n]));
 const ex=V.filter(v=>v.mode!=='train').slice(-5),miss={};ex.forEach(v=>(v.miss||[]).forEach(n=>miss[n]=(miss[n]||0)+1));
 const mm=Object.keys(miss).filter(n=>miss[n]>=2).sort((a,b)=>miss[b]-miss[a]);if(mm.length)out.push([`В зачётных вариантах ты чаще всего теряешь баллы в №${mm.slice(0,3).join(', №')}. Это задачи части 1: каждая ошибка стоит 1 первичного балла, а на уровне 80+ это 2-4 тестовых.`,+mm[0]]);
 const tr=V.filter(v=>v.mode==='train').slice(-3),exm=V.filter(v=>v.mode!=='train').slice(-3);if(tr.length&&exm.length){const g=Math.round(tr.reduce((a,v)=>a+v.test,0)/tr.length-exm.reduce((a,v)=>a+v.test,0)/exm.length);
  if(g>=8)out.push([`В тренировочных вариантах ты набираешь в среднем на ${g} баллов больше, чем в зачётных. Теория выручает, но на экзамене её не будет: повтори алгоритмы и реши зачётный вариант.`,0])}
 const nev=Array.from({length:13},(_,k)=>k+1).filter(n=>!(st[n]&&st[n].tot));if(nev.length&&nev.length<13)out.push([`Ещё не решал №${nev.join(', №')}. Это задачи части 1: начни с теории и вопросов.`,nev[0]]);
 const old=Array.from({length:20},(_,k)=>k+1).filter(n=>{const r=retOf(n);return r!=null&&r<.6});if(old.length)out.push([`Давно не решал №${old.slice(0,3).join(', №')}: навык забывается. 3 задачи освежат его.`,old[0]]);
 const l=H[H.length-1];if(!l)out.push(['Пройди входной тест: он покажет пробелы точнее, чем отдельные задачи.',-1]);else if((Date.now()-l.t)/864e5>=14)out.push(['Прошло больше двух недель с теста. Пройди повторный, чтобы увидеть рост.',-1]);
 return out}
function strategy(){const L=Array.from({length:20},(_,k)=>k+1).map(n=>({n,p:pNow(n)??(PCT[n]!=null?PCT[n]/100:.3),t:SPEC[n][0],b:SPEC[n][1]}));
 const p1=L.filter(x=>x.n<=13),p2=L.filter(x=>x.n>13).map(x=>Object.assign(x,{v:x.p*x.b/x.t})).sort((a,b)=>b.v-a.v);
 let tm=p1.reduce((a,x)=>a+x.t,0)+15;const plan=[],skip=[];p2.forEach(x=>{if(x.p<.15||tm+x.t>235){skip.push(x);return}tm+=x.t;plan.push(x)});
 const exp=Math.round((p1.reduce((a,x)=>a+x.p,0)+plan.reduce((a,x)=>a+x.p*x.b,0))*10)/10;
 return{p1,plan,skip,exp,tm}}
function lineChart(V){if(V.length<2)return '<p class="hint">График появится после двух решённых вариантов.</p>';const W=600,Hh=180,pl=34,pb=24,pt=12,xs=k=>pl+(W-pl-12)*k/(V.length-1),ys=v=>pt+(Hh-pt-pb)*(1-v/100);
 let s=`<svg class="v4ln" viewBox="0 0 ${W} ${Hh}" role="img" aria-label="Тестовый балл по вариантам">`;[0,50,100].forEach(v=>s+=`<line class="g" x1="${pl}" x2="${W-12}" y1="${ys(v)}" y2="${ys(v)}"/><text x="${pl-6}" y="${ys(v)+4}" text-anchor="end">${v}</text>`);
 s+=`<polyline class="l" points="${V.map((v,k)=>xs(k)+','+ys(v.test)).join(' ')}"/>`;
 V.forEach((v,k)=>{s+=`<circle class="d${v.mode==='train'?' o':''}" cx="${xs(k)}" cy="${ys(v.test)}" r="5"><title>${new Date(v.t).toLocaleDateString('ru-RU',{day:'numeric',month:'short'})}: ${v.test} баллов, ${MODEN[v.mode||'exam'].toLowerCase()}</title></circle>`;if(k===0||k===V.length-1)s+=`<text x="${xs(k)}" y="${Hh-6}" text-anchor="${k?'end':'start'}">${new Date(v.t).toLocaleDateString('ru-RU',{day:'numeric',month:'short'})}</text>`});
 return s+'</svg><p class="hint">● зачётный вариант, ○ тренировочный. Наведи на точку, чтобы увидеть дату и балл.</p>'}
function typeRows(n){const ty=S.ty||{},rows=[];
 Object.keys(ty).filter(k=>k.startsWith('g:'+n+':')).forEach(k=>{const i=+k.split(':')[2],y=ty[k];if(GT[n][i])rows.push([GT[n][i][0]+' (авторская)',y])});
 const grp={};Object.keys(ty).filter(k=>k.startsWith('b:'+n+'.')).forEach(k=>{const sub=k.slice(2),y=ty[k],t=(B[n]||[]).find(z=>z.sub===sub);const th=t&&thFind(n,t.id);const nm=th?th.t:`Задачи ФИПИ, ${t?LV[bLv(t)]:'уровень ?'}`;const g=grp[nm]||(grp[nm]={ok:0,tot:0,ms:0,c:0});['ok','tot','ms','c'].forEach(f=>g[f]+=y[f])});
 Object.keys(grp).forEach(k=>rows.push([k,grp[k]]));return rows.sort((a,b)=>a[1].ok/a[1].tot-b[1].ok/b[1].tot)}
function statsView(sel){hintStop();cur={n:null,tab:'stats',mix:false};RS_.on=false;S.now={stats:1};save();side();ttl('<span>▦</span>Статистика');
 const st=S.st,ok=Object.values(st).reduce((a,s)=>a+s.ok,0),tot=Object.values(st).reduce((a,s)=>a+s.tot,0),bk=Object.values(S.bk||{}).filter(x=>x===1).length,bt=Object.keys(B).reduce((a,n)=>a+bSize(n),0);
 const V=(S.vars||[]).slice().sort((a,b)=>a.t-b.t),H=S.dgh||[],tm=S.tm||{};
 const dacc=(a,b)=>{let o=0,t=0;Object.keys(S.dd||{}).forEach(d=>{const age=(Date.now()-new Date(d).getTime())/864e5;if(age>=a&&age<b)Object.values(S.dd[d]).forEach(x=>{o+=x[0];t+=x[1]})});return[o,t]};
 const[o1,t1]=dacc(0,14),[o2,t2]=dacc(14,28);const S_=strategy();
 $('#view').innerHTML=`<div class="head keep"><div class="big" aria-hidden="true">▦</div><div><h1>Статистика</h1><div class="meta"><span class="pill">практика, варианты, тест</span></div></div></div>
 <div class="card"><div class="v4kpi"><div><b>${bk}<small style="font-size:14px;color:var(--muted)">/${bt}</small></b><span>задач банка ФИПИ решено</span></div><div><b>${accTxt(ok,tot)}</b><span>точность в практике и зачётных</span></div><div><b>${t1?accTxt(o1,t1):'нет'}</b><span>точность за 2 недели${t2?`, до этого ${accTxt(o2,t2)}`:''}</span></div><div><b>${H.length?H[H.length-1].test:'нет'}</b><span>прогноз по последнему тесту</span></div></div></div>
 <div class="card"><h3 class="ch">На что обратить внимание</h3><ul class="v4tip">${tips().map(([t,n])=>`<li>${t}${n>0?` <button class="lnk" data-go="${n}">к №${n}</button>`:n<0?' <button class="lnk" data-dg="1">к тесту</button>':''}</li>`).join('')||'<li>Пока мало данных. Реши задачи в нескольких номерах или пройди входной тест.</li>'}</ul></div>
 <div class="card"><h3 class="ch">Точность по номерам</h3><div class="v4grid">${Array.from({length:20},(_,k)=>k+1).map(n=>{const s=st[n]||{ok:0,tot:0},a=s.tot?s.ok/s.tot:-1;return `<button class="${a<0?'':a>=.8?'c1':a>=.5?'c2':'c3'}${sel===n?' on':''}" data-n="${n}"><b>№${n}</b><span>${accTxt(s.ok,s.tot)}${s.tot?` · ${s.ok} из ${s.tot}`:''}</span></button>`}).join('')}</div>
 <p class="hint">Нажми на номер, чтобы увидеть точность и время по типам задач. Тренировочные варианты сюда не входят.</p><div id="tyx">${sel?tyCard(sel):''}</div></div>
 <div class="card"><h3 class="ch">Время на задачу</h3><div class="v4bars">${Array.from({length:20},(_,k)=>k+1).filter(n=>tm[n]&&tm[n].c).map(n=>{const a=tm[n].ms/tm[n].c/6e4,nr=SPEC[n][0],mx=Math.max(nr*2,a)*1.05;return `<div class="v4bar" title="Среднее ${mins(a*6e4)}, норма ${nr} мин"><b>№${n}</b><span class="tr"><i class="${a>nr*1.4?'slow':''}" style="width:${a/mx*100}%"></i><u style="left:${nr/mx*100}%"></u></span><span>${mins(a*6e4)}</span></div>`}).join('')||'<p class="hint">Время появится, когда решишь задачи в практике или варианте.</p>'}</div><p class="hint">Черта: норма ФИПИ по спецификации. Жёлтым: дольше нормы в 1,4 раза и больше.</p></div>
 <div class="card"><h3 class="ch">Динамика по вариантам</h3>${lineChart(V)}${H.length?`<p class="hint">Входные тесты: ${H.map(h=>`${new Date(h.t).toLocaleDateString('ru-RU',{day:'numeric',month:'short'})}: ${h.test}`).join(' → ')}.</p>`:''}</div>
 <div class="card"><h3 class="ch">Стратегия на экзамен</h3><p>Ожидаемо около <b>${String(S_.exp).replace('.',',')}</b> первичных, это примерно <b>${toTest(Math.floor(S_.exp))}</b> баллов. Порядок с учётом твоих шансов и времени:</p>
 <ol class="rl"><li><b>Часть 1 целиком</b><span>около ${S_.p1.reduce((a,x)=>a+x.t,0)} мин. Сначала то, что решаешь уверенно, сомнительные отметь и вернись в конце.${S_.p1.filter(x=>x.p<.6).length?` Слабые места: №${S_.p1.filter(x=>x.p<.6).map(x=>x.n).join(', №')}.`:''}</span></li>
 ${S_.plan.map(x=>`<li><b>№${x.n} ${T[x.n].t}</b><span>${x.t} мин, шанс около ${Math.round(x.p*100)}%, до ${x.b} ${plural(x.b,'балла','баллов','баллов')}</span></li>`).join('')}
 <li><b>15 минут на проверку</b><span>перенос ответов, подстановка в часть 1</span></li></ol>${S_.skip.length?`<p class="hint">Оставь на самый конец: №${S_.skip.map(x=>x.n).join(', №')}. Шанс сейчас низкий или не хватает времени, но в 19 и 20 даже 1 балл за пункт а заметно поднимает результат.</p>`:''}</div>`;
 document.querySelectorAll('.v4grid [data-n]').forEach(b=>b.onclick=()=>statsView(+b.dataset.n===sel?0:+b.dataset.n));
 document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>open(+b.dataset.go,'practice'));document.querySelectorAll('[data-dg]').forEach(b=>b.onclick=dgView);
 if(sel){const tx=$('#tyx');tx.querySelector('[data-pr]')&&(tx.querySelector('[data-pr]').onclick=()=>open(sel,'practice'));tx.scrollIntoView({block:'nearest'})}else toTop('stats')}
function tyCard(n){const r=typeRows(n),tm=(S.tm||{})[n];return `<div class="v4note" style="margin-top:12px"><b>№${n} ${T[n].t}</b>${tm&&tm.c?`, в среднем ${mins(tm.ms/tm.c)} на задачу (норма ${SPEC[n][0]} мин)`:''}.
 ${r.length?`<div class="tscroll"><table class="v4tb"><tr><th>Тип</th><th class="r">верно</th><th class="r">время</th></tr>${r.map(([nm,y])=>`<tr><td>${escH(nm)}</td><td class="r">${y.ok} из ${y.tot} · ${accTxt(y.ok,y.tot)}</td><td class="r">${y.c?mins(y.ms/y.c):'нет'}</td></tr>`).join('')}</table></div>`:'<p>По типам пока нет данных.</p>'}
 <div class="actions"><button class="btn sm" data-pr="1">Решать №${n}</button></div></div>`}
window.statsView=statsView;

/* ===== зачётный вариант от учителя, калибровка уровней по классу ===== */
function v4asg(){return ST.hwx&&ST.hwx.id?ST.hwx:(typeof AR!=='undefined'&&AR.ex&&AR.ex.id?AR.ex:null)}
function asgLoad(){if(ST.db&&ST.mode==='db'&&!ST.hwxL){ST.hwxL=1;Promise.all([ST.db.doc('hw/exam').get().then(d=>{ST.hwx=d.exists?d.data():null}).catch(()=>{}),ST.db.doc('hw/calib').get().then(d=>{ST.cal=d.exists?(d.data().m||null):null}).catch(()=>{})]).then(()=>{if(S.now&&S.now.home&&v4asg())home()})}
 if(typeof arTok==='function'&&arTok()&&!AR.exL){AR.exL=1;arApi('exam').then(d=>{AR.ex=d.exam;if(d.exam&&S.now&&S.now.home)home()}).catch(()=>{})}}
const _sum=summary;summary=function(){const o=_sum();o.dg=(S.dgh||[]).slice(-2).map(h=>({t:h.t,test:h.test,prim:h.prim,p:h.p}));o.bkx=S.bkx||{};return o};
const dgCell=r=>{const d=r.dg||[];if(!d.length)return'нет';const a=d[d.length-1],b=d[d.length-2];return `${a.test}${b?` <span class="${a.test>b.test?'v4up':a.test<b.test?'v4dn':''}">(${a.test>=b.test?'+':''}${a.test-b.test})</span>`:''}`};
function asgTeacher(L){const h=ST.hwx||{};const res=h.id?L.map(r=>{const v=(r.vars||[]).filter(x=>x.asg===h.id).sort((a,b)=>b.test-a.test)[0];return `<tr><td>${escH(r.last)} ${escH(r.first)}</td><td class="r">${v?`<b>${v.test}</b> (${v.prim} перв., ${v.min} мин)${exFlags(v)}`:'не решал'}</td><td class="r">${dgCell(r)}</td></tr>`}).join(''):'';
 return `<div class="card"><h3 class="ch">Зачётный вариант классу</h3><p class="hint">Одинаковый для всех вариант из задач ФИПИ, как на ЕГЭ: без теории и подсказок. Ученики увидят его на главной.</p>
 ${h.id?`<p><b>Сейчас назначен:</b> ${escH(EXK[h.kind]||'')}${h.title?`, «${escH(h.title)}»`:''}${h.due?`, до ${new Date(h.due).toLocaleDateString('ru-RU',{day:'numeric',month:'long'})}`:''}.</p>`:''}
 <div class="filters"><div class="lab">Сложность</div><select class="sel" id="axk" aria-label="Сложность">${['fe','fm','fh'].map(k=>`<option value="${k}"${(h.kind||'fm')===k?' selected':''}>${EXK[k].replace('Вариант ФИПИ, ','')}</option>`).join('')}</select>
 <div class="lab">Срок</div><input class="ans" type="date" id="axd" value="${escH(h.due||'')}" aria-label="Срок"><div class="lab">Название</div><input class="ans" id="axt" maxlength="60" value="${escH(h.title||'')}" placeholder="Пробник 1, необязательно" aria-label="Название"></div>
 <div class="actions"><button class="btn" id="axgo">${h.id?'Назначить новый':'Назначить'}</button>${h.id?'<button class="btn ghost" id="axoff">Снять</button>':''}<button class="btn ghost" id="axcal">Уточнить уровни задач по классу</button></div>
 <div class="tscroll"><table class="v4tb"><tr><th>Ученик</th><th class="r">${h.id?'зачётный':''}</th><th class="r">входной тест</th></tr>${res||L.map(r=>`<tr><td>${escH(r.last)} ${escH(r.first)}</td><td></td><td class="r">${dgCell(r)}</td></tr>`).join('')}</table></div></div>`}
/* уровень задачи по ответам класса: решают почти все, уровень ниже; почти никто, выше (от 5 попыток) */
function calib(L){const agg={};L.forEach(r=>{for(const id in r.bkx||{}){const z=r.bkx[id],a=agg[id]||(agg[id]=[0,0]);a[0]+=z[0];a[1]+=z[1]}});const m={};let c=0;
 for(const id in agg){const[o,t]=agg[id];if(t<5||!BI[id])continue;const base=(META[id]&&META[id][0])||2,r=o/t;const lv=r>.85?Math.max(1,base-1):r<.35?Math.min(3,base+1):base;if(lv!==base){m[id]=lv;c++}}return{m,c,n:Object.keys(agg).length}}
const _rv2=rosterView;rosterView=function(keep){_rv2(keep);if(!ST.owner||ST.mode!=='db')return;asgLoad();const L=RS_.list||[];document.querySelector('#view').insertAdjacentHTML('beforeend',asgTeacher(L));
 const put=async(path,d,msg)=>{try{await ST.db.doc(path).set(d);uiNote(msg)}catch(e){uiNote('Не удалось сохранить.')}};
 $('#axgo').onclick=async()=>{const h={id:'x'+Date.now().toString(36),kind:$('#axk').value,seed:Math.floor(Math.random()*4294967295),title:$('#axt').value.trim().slice(0,60),due:$('#axd').value||'',t:Date.now()};await put('hw/exam',h,'Вариант назначен. Ученики увидят его на главной.');ST.hwx=h;rosterView(true)};
 const off=$('#axoff');if(off)off.onclick=async()=>{await put('hw/exam',{id:null,t:Date.now()},'Вариант снят.');ST.hwx=null;rosterView(true)};
 $('#axcal').onclick=async()=>{const c=calib(L);if(!c.c){uiNote(`Пока уточнять нечего: задач с 5+ попытками класса ${Object.keys(c.m).length||0}. Нужно больше решённых задач.`);return}await put('hw/calib',{m:c.m,t:Date.now()},`Уровень уточнён: ${c.c} ${plural(c.c,"задача","задачи","задач")}. Ученики получат его при следующем входе.`);ST.cal=c.m}};
const _stv=studentView;studentView=function(id,keep){_stv(id,keep);const r=(RS_.list||[]).find(x=>x.id===id);if(!r)return;const d=r.dg||[];
 const html=`<div class="card"><h3 class="ch">Входной тест</h3>${d.length?`<div class="v4kpi">${d.map(h=>`<div><b>${h.test}</b><span>${new Date(h.t).toLocaleDateString('ru-RU',{day:'numeric',month:'short'})}, ${h.prim} перв.</span></div>`).join('')}</div><div class="v4grid" style="margin-top:10px">${Array.from({length:20},(_,k)=>k+1).map(n=>{const p=d[d.length-1].p[n];const[l,c]=lvName(p);return `<button class="${c}" type="button" tabindex="-1"><b>№${n}</b><span>${l}</span></button>`}).join('')}</div>`:'<p class="hint">Ещё не проходил.</p>'}</div>`;
 const bk=$('#bk');if(bk)bk.closest('.actions').insertAdjacentHTML('beforebegin',html)};
/* сайт: учитель класса назначает вариант и видит результаты теста */
if(typeof arMe==='function'){const _am=arMe;arMe=async function(){await _am();const M=AR.me;if(!M||!M.admin)return;const b=$('#arb');let ex=null,ms=[];try{ex=(await arApi('exam')).exam;ms=(await arApi('board')).members.filter(m=>!m.admin)}catch(e){}
 b.insertAdjacentHTML('afterbegin',`<div class="card"><h3>Зачётный вариант классу</h3><p class="hint">Одинаковый для всех вариант из задач ФИПИ, как на ЕГЭ. Ученики увидят его на главной.</p>${ex?`<p><b>Сейчас назначен:</b> ${escH(EXK[ex.kind]||'')}${ex.title?`, «${escH(ex.title)}»`:''}${ex.due?`, до ${ex.due.split('-').reverse().join('.')}`:''}.</p>`:''}
 <div class="filters"><div class="lab">Сложность</div><select class="sel" id="axk" aria-label="Сложность">${['fe','fm','fh'].map(k=>`<option value="${k}"${k==='fm'?' selected':''}>${EXK[k].replace('Вариант ФИПИ, ','')}</option>`).join('')}</select>
 <div class="lab">Срок</div><input class="ans" type="date" id="axd" aria-label="Срок"><div class="lab">Название</div><input class="ans" id="axt" maxlength="60" placeholder="Пробник 1, необязательно" aria-label="Название"></div>
 <div class="actions"><button class="btn" id="axgo" type="button">${ex?'Назначить новый':'Назначить'}</button>${ex?'<button class="btn ghost" id="axoff" type="button">Снять</button>':''}</div>
 <div class="tscroll"><table class="ar-t"><tr><th>Ученик</th><th class="r">${ex?'зачётный':''}</th><th class="r">входной тест</th></tr>${ms.map(m=>`<tr><td>${escH(m.name)}</td><td class="r">${ex?(m.ex&&m.ex.id===ex.id?`<b>${m.ex.test}</b> (${m.ex.prim} перв.)`:'не решал'):''}</td><td class="r">${dgCell(m)}</td></tr>`).join('')||'<tr><td colspan="3" class="hint">Пока никто не вошёл.</td></tr>'}</table></div></div>`);
 $('#axgo').onclick=async()=>{try{await arApi('exam',{on:1,kind:$('#axk').value,due:$('#axd').value,title:$('#axt').value});uiNote('Вариант назначен.');arenaView()}catch(e){uiNote(e.message)}};
 const off=$('#axoff');if(off)off.onclick=async()=>{try{await arApi('exam',{on:0});uiNote('Вариант снят.');arenaView()}catch(e){uiNote(e.message)}}}}
/* текущий экран после перезагрузки */
if(S.now&&S.now.stats&&ST.uid)statsView();else if(S.now&&S.now.diag&&ST.uid)dgView();else if(S.now&&S.now.home&&ST.uid)home();
})();
