/* v3: мобильная вёрстка, выбор без системного списка, формулы, кнопка минуса, банк ФИПИ (части 1 и 2) */
document.head.insertAdjacentHTML('beforeend',`<style id="v3">:root:not([data-theme="light"]){--chip:#1C1E23}:root[data-theme="light"]{--chip:#ECECE8}
.nsel button.on,.seg button.on,.seg button.l1.on,.seg button.l2.on,.seg button.l3.on{color:var(--on)!important}
.btn{max-width:100%;white-space:normal;text-align:center}
.seg,.nsel,.filters,.actions,.ansrow,.qtop{flex-wrap:wrap;min-width:0}
.sel-n{position:absolute!important;width:1px!important;height:1px!important;opacity:0;pointer-events:none;overflow:hidden}
.csel{min-width:0;max-width:100%}
.csel.chips{display:flex;flex-wrap:wrap;gap:4px;background:var(--grid);padding:4px;border-radius:14px}
.csel.chips button{flex:1 1 auto;min-height:40px;padding:8px 12px;border:0;border-radius:10px;background:none;color:var(--muted);font:500 14px var(--ui);transition:background .15s,color .15s}
.csel.chips button.on{background:var(--panel);color:var(--text);box-shadow:0 1px 0 var(--line)}
.cst{display:flex;align-items:center;gap:10px;width:100%;min-height:44px;padding:10px 14px;background:var(--bg);border:1px solid var(--line);border-radius:12px;color:var(--text);font:500 15px var(--ui);text-align:left;transition:border-color .15s}
.cst span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cst i{font-style:normal;color:var(--ink);line-height:1}
.cst:hover,.cst:focus-visible{border-color:var(--ink);outline:0}
.csheet{position:fixed;inset:0;z-index:200;display:flex;align-items:flex-end;justify-content:center}
.csb{position:absolute;inset:0;background:rgba(0,0,0,.55);opacity:0;transition:opacity .18s}
.csp{position:relative;width:min(560px,100%);max-height:78vh;display:flex;flex-direction:column;background:var(--panel);border:1px solid var(--line);border-radius:22px 22px 0 0;padding:6px 0 calc(10px + env(safe-area-inset-bottom,0px));transform:translateY(100%);transition:transform .2s ease}
.csheet.in .csb{opacity:1}.csheet.in .csp{transform:none}
.csh{display:flex;align-items:center;justify-content:space-between;padding:12px 18px}.csh b{font-size:16px}
.csx{background:var(--grid);border:0;border-radius:999px;width:34px;height:34px;color:var(--muted)}
.csl{overflow-y:auto;padding:0 10px;overscroll-behavior:contain}
.csl button{display:block;width:100%;text-align:left;min-height:48px;padding:12px 14px;border:0;border-radius:12px;background:none;color:var(--text);font:15px var(--ui)}
.csl button:hover,.csl button:focus-visible{background:var(--grid);outline:0}.csl button.on{background:var(--ink-2);color:var(--ink);font-weight:600}
.csl button.on::after{content:"✓";float:right}.csl button:disabled{opacity:.4}
.csg{margin:12px 14px 4px;font:600 11px var(--hand);text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}
@media (min-width:700px){.csheet{align-items:center}.csp{border-radius:22px;transform:translateY(16px) scale(.98);opacity:0;transition:transform .18s,opacity .18s}.csheet.in .csp{transform:none;opacity:1}}
.btn,.ans,.gform input,.cst,.csel,.card,.tile{box-sizing:border-box}
.actions{display:flex;gap:8px}.actions .btn{flex:1 1 160px}
.seg{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(76px,1fr));gap:6px}.seg button{min-width:0}
label.btn{font:600 16px var(--ui);display:flex;align-items:center;justify-content:center;cursor:pointer}
/* формулы */
.fr{display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;font-size:.92em;line-height:1.15;margin:0 .12em}
.fr>span{padding:0 .15em}.fr>.fn{border-bottom:1.5px solid currentColor;padding-bottom:.08em}.fr>.fd{padding-top:.08em}
.rt{white-space:nowrap;display:inline-flex;align-items:flex-end}.rt>i{font-style:normal;font-size:1.12em;line-height:1;margin-right:-.02em}
.rt>.rc{border-top:1.5px solid currentColor;padding:.06em .12em 0;line-height:1.15}
/* ввод ответа: кнопка минуса */
.answ{position:relative;display:block;flex:1;min-width:0}.answ>.ans{width:100%;padding-right:58px!important}
.answ>.pm{position:absolute;right:6px;top:50%;transform:translateY(-50%);min-width:44px;height:36px;border-radius:10px;border:1px solid var(--line);background:var(--chip);color:var(--text);font:600 18px var(--hand);cursor:pointer;touch-action:manipulation}
.answ>.pm:active{background:var(--ink-2);border-color:var(--ink)}
.bfig{display:block;max-width:100%;height:auto;margin:12px 0;border-radius:10px;background:#fff;padding:6px}
:root:not([data-theme="light"]) .bfig{filter:invert(.92) hue-rotate(180deg);background:#fff}
.bq .fr,.bq .rt{font-size:inherit}.bq .rt sup{font-size:.6em;margin-right:-.3em;vertical-align:.9em}
.pill.srcR{background:var(--ink-2)!important;color:var(--ink)!important}
.sys{display:inline-flex;flex-direction:column;vertical-align:middle;padding:.1em 0 .1em .6em;margin:.15em .2em;border-left:1.5px solid currentColor;border-radius:.7em 0 0 .7em;line-height:1.55}
.p2b{margin:10px 0}.crit{display:grid;gap:8px;margin-top:8px}
.critb{display:flex;gap:12px;align-items:flex-start;text-align:left;padding:12px 14px;border:1px solid var(--line);border-radius:14px;background:var(--panel);color:var(--text);font:14px/1.4 var(--ui);cursor:pointer}
.critb b{font:600 18px var(--hand);color:var(--ink);min-width:1.2em}.critb:hover{border-color:var(--ink);background:var(--ink-2)}</style>`);
/* ===== свой выбор вместо системного <select>: чипы (до 4 коротких вариантов) или нижняя шторка ===== */
function cselLabel(s){const l=s.getAttribute('aria-label');if(l)return l;const p=s.previousElementSibling;return p&&/lab/.test(p.className)?p.textContent:(s.closest('label')?.firstChild?.textContent||'Выбор')}
function cselSync(s){const w=s._cs;if(!w)return;if(w.dataset.k==='chips')w.querySelectorAll('button').forEach(b=>{const on=b.dataset.v===s.value;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
 else w.querySelector('span').textContent=s.selectedOptions[0]?.text||''}
function cselPick(s,v){if(s.value===v)return cselSync(s);s.value=v;cselSync(s);s.dispatchEvent(new Event('input',{bubbles:true}));s.dispatchEvent(new Event('change',{bubbles:true}))}
function cselOpen(s){const sh=document.createElement('div');sh.className='csheet';const items=[...s.children].map(ch=>ch.tagName==='OPTGROUP'?`<p class="csg">${escH(ch.label)}</p>`+[...ch.children].map(o=>cselOpt(o,s)).join(''):cselOpt(ch,s)).join('');
 sh.innerHTML=`<div class="csb"></div><div class="csp" role="dialog" aria-modal="true" aria-label="${escH(cselLabel(s))}"><div class="csh"><b>${escH(cselLabel(s))}</b><button type="button" class="csx" aria-label="Закрыть">✕</button></div><div class="csl" role="listbox">${items}</div></div>`;
 const close=()=>{sh.classList.remove('in');setTimeout(()=>sh.remove(),180);document.removeEventListener('keydown',key);s._cs.querySelector('button').focus()};
 const key=e=>{if(e.key==='Escape')close()};document.addEventListener('keydown',key);
 sh.onclick=e=>{const o=e.target.closest('[data-v]');if(o&&!o.disabled){cselPick(s,o.dataset.v);close()}else if(e.target.closest('.csb,.csx'))close()};
 document.body.appendChild(sh);requestAnimationFrame(()=>sh.classList.add('in'));(sh.querySelector('.on')||sh.querySelector('[data-v]'))?.focus()}
const cselOpt=(o,s)=>`<button type="button" role="option" data-v="${escH(o.value)}" class="${o.value===s.value?'on':''}" aria-selected="${o.value===s.value}"${o.disabled?' disabled':''}>${escH(o.text)}</button>`;
function cselMake(s){if(s._cs||s.multiple)return;const opts=[...s.options],chips=opts.length<=4&&!s.querySelector('optgroup')&&opts.every(o=>o.text.length<=16);
 const w=document.createElement('div');w.className='csel '+(chips?'chips':'drop');w.dataset.k=chips?'chips':'drop';w.setAttribute('role','group');w.setAttribute('aria-label',cselLabel(s));
 w.innerHTML=chips?opts.map(o=>`<button type="button" data-v="${escH(o.value)}">${escH(o.text)}</button>`).join(''):`<button type="button" class="cst" aria-haspopup="listbox"><span></span><i aria-hidden="true">⌄</i></button>`;
 w.onclick=e=>{const b=e.target.closest('button');if(!b)return;chips?cselPick(s,b.dataset.v):cselOpen(s)};
 s.classList.add('sel-n');s.tabIndex=-1;s.setAttribute('aria-hidden','true');s.after(w);s._cs=w;s.addEventListener('change',()=>cselSync(s));cselSync(s)}
const cselScan=r=>(r||document).querySelectorAll('select.sel:not(.sel-n)').forEach(cselMake);
new MutationObserver(ms=>{for(const m of ms)for(const n of m.addedNodes)if(n.nodeType===1&&(n.matches?.('select.sel')||n.querySelector?.('select.sel')))return cselScan()}).observe(document.documentElement,{childList:true,subtree:true});

cselScan();
/* v3: формулы (дроби, корни) и кнопка минуса у поля ответа */
(()=>{
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const DC=(t,k)=>t[k]===','&&/\d/.test(t[k-1]||'')&&/\d/.test(t[k+1]||''),STOP=/[\s=+−\-–·×:;,<>≤≥≠\[\]{}|∈!?]/, CYR=/^[а-яё.\s]+$/i;
// граница слева/справа от позиции с учётом скобок
function left(t,i){let d=0,j=i;while(j>0){const c=t[j-1];if(c===')')d++;else if(c==='('){if(!d)break;d--}else if(!d&&STOP.test(c)&&!DC(t,j-1))break;j--}return j}
function right(t,i){let d=0,j=i;if(t[j]==='√')j++;while(j<t.length){const c=t[j];if(c==='(')d++;else if(c===')'){if(!d)break;d--;if(!d){j++;if(!/[²³⁻¹⁰-⁹₀-₉]/.test(t[j]||''))break;continue}}else if(!d&&(STOP.test(c)&&!DC(t,j)||c==='/'||c==='.'&&!/\d/.test(t[j+1]||'')))break;j++}return j}
const strip=s=>{s=s.trim();if(s[0]==='('&&s.at(-1)===')'){let d=0;for(let k=0;k<s.length;k++){if(s[k]==='(')d++;else if(s[k]===')'){d--;if(!d&&k<s.length-1)return s}}return s.slice(1,-1)}return s};
function root(t){// √(…) и √a
 let o='',i=0;while(i<t.length){const k=t.indexOf('√',i);if(k<0){o+=esc(t.slice(i));break}o+=esc(t.slice(i,k));let j=k+1,body;
  if(t[j]==='('){let d=0,e=j;for(;e<t.length;e++){if(t[e]==='(')d++;else if(t[e]===')'&&!--d)break}body=t.slice(j+1,e);j=e+1}
  else{const m=t.slice(j).match(/^[\d,]+|^[A-Za-zα-ωπ][₀-₉]?/);if(!m){o+='√';i=j;continue}body=m[0];j+=body.length}
  o+=`<span class="rt"><i>√</i><span class="rc">${root(body)}</span></span>`;i=j}return o}
function fmt(t){if(!/[√\/]/.test(t))return null;let o='',i=0,ch=false;
 for(let k=t.indexOf('/');k>=0;k=t.indexOf('/',k+1)){if(k<i)continue;
  const sp=t[k-1]===' '&&t[k+1]===' ',a=sp?k-1:k,b=sp?k+2:k+1,L=left(t,a),R=right(t,b),num=t.slice(L,a),den=t.slice(b,R);
  if(!num.trim()||!den.trim()||CYR.test(num)||CYR.test(den)||/^\d{1,2}$/.test(num)&&/^\d{2,4}$/.test(den)&&t[R]==='/')continue;
  o+=root(t.slice(i,L))+`<span class="fr"><span class="fn">${root(strip(num))}</span><span class="fd">${root(strip(den))}</span></span>`;i=R;ch=true}
 o+=root(t.slice(i));return ch||/√/.test(t)?o:null}
const SKIP='.bq,input,textarea,button,select,script,style,svg,math,.mf,.ar-m,.csel,.cst,.csheet,.pill,code,.big,.lh,[contenteditable]';
function walk(root_){const w=document.createTreeWalker(root_,NodeFilter.SHOW_TEXT,{acceptNode:n=>/[√\/]/.test(n.data)&&!n.parentElement.closest(SKIP)?1:3});const L=[];while(w.nextNode())L.push(w.currentNode);
 L.forEach(n=>{const h=fmt(n.data);if(h==null)return;const s=document.createElement('span');s.className='mf';s.innerHTML=h;n.replaceWith(s)})}
// ± у полей ответа (на iPhone в цифровой клавиатуре нет минуса)
function pm(inp){if(inp.closest('.answ')||!/decimal|numeric/.test(inp.inputMode))return;const w=document.createElement('span');w.className='answ';inp.replaceWith(w);w.append(inp);
 const b=document.createElement('button');b.type='button';b.className='pm';b.textContent='±';b.tabIndex=-1;b.setAttribute('aria-label','Сменить знак');
 b.addEventListener('pointerdown',e=>e.preventDefault());b.onclick=()=>{const v=inp.value.trim();inp.value=/^[-−]/.test(v)?v.replace(/^[-−]\s*/,''):'−'+v;inp.dispatchEvent(new Event('input',{bubbles:true}));inp.focus()};w.append(b)}
let q=false;const run=()=>{q=false;['#view','#side','#gate'].forEach(id=>{const r=document.querySelector(id);if(!r)return;walk(r);r.querySelectorAll('input.ans').forEach(pm)})};
new MutationObserver(()=>{if(!q){q=true;requestAnimationFrame(run)}}).observe(document.body,{childList:true,subtree:true});run();
window.__v3={fmt}})();

/* Банк ФИПИ: тип «Реальные задачи ФИПИ» в номерах 1-20 (где в банке не меньше 3 задач) */
(()=>{const B=window.FIPI_BANK;if(!B||typeof GT==='undefined'||typeof GEN==='undefined'||window.__bankOn)return;window.__bankOn=1;
 SRC.R=['реальная задача ФИПИ','Задача из открытого банка ФИПИ без изменений. Такие задачи встречаются на экзамене.'];
 const fa=a=>String(+a.toFixed(6)).replace('.',',').replace('-','−');
 const img=t=>t.f?`<img class="bfig" alt="Рисунок к задаче" src="data:image/webp;base64,${t.f}" style="width:${Math.round(t.w*1.6)}px">`:'';
 for(const n in B){const L=B[n];if(L.length<3||!GT[n]||!GEN[n])continue;
  GT[n].push([`Реальные задачи ФИПИ (${L.length})`,n>13?3:2]);GS[n]+='R';
  GEN[n].push(()=>{const t=L[Math.floor(Math.random()*L.length)];window.__bk=t;const q='<span class="bq" data-id="'+t.id+'">'+t.q+'</span>';
   if(n>13)return{q,a:null,ans:t.ans,p2:1,fig:img(t),s:`Это задача ${t.id} из открытого банка ФИПИ, без изменений. Ответ: ${t.ans}. В банке нет разбора: сверь своё решение с критериями ФИПИ и с теорией к №${n}.`};
   return{q,a:t.a,fig:img(t),s:`Это задача ${t.id} из открытого банка ФИПИ, без изменений. Ответ: ${fa(t.a)}.`+(t.v?' Ответ перепроверен вычислением.':' Разбор этого типа есть во вкладке «Теория».')}})}
 const sl=srcLine;srcLine=(n,i)=>GS[n][i]==='R'?`Источник: открытый банк заданий ЕГЭ ФИПИ, задача ${window.__bk?window.__bk.id:''} по сборнику А. Д. Остромогильского (обновление 28.08.26). Условие и числа не изменены.`:sl(n,i);
 const gi=genItem;genItem=function(n,i,seed){const it=gi(n,i,seed);if(GS[n][i]==='R'&&n>13&&window.__bk){it.a=null;it.ans=window.__bk.ans}return it};
 // часть 2 в практике: ответ и самооценка по критериям ФИПИ вместо поля ввода
 const rp=renderProb;renderProb=function(){rp();if(!prob||!prob.p2)return;const row=document.querySelector('#pb .ansrow');if(!row)return;row.style.display='none';
  const h=row.nextElementSibling;if(h&&h.classList.contains('hint'))h.textContent='Часть 2: реши на листе с полным обоснованием, потом открой ответ и оцени себя по критериям ФИПИ.';
  row.insertAdjacentHTML('afterend','<div class="p2b" id="p2b"><button class="btn" id="p2s" type="button">Показать ответ и критерии</button></div>');
  document.getElementById('p2s').onclick=()=>{const n=prob.n,cr=(typeof CRIT!=='undefined'&&CRIT[n])||[[SPEC[n][1],'Полное верное решение'],[0,'Решение не соответствует критериям']],mx=Math.max(...cr.map(c=>c[0]));
   const b=document.getElementById('p2b');b.innerHTML=`<div class="fb">Ответ: ${prob.ans}</div><p class="lab">Сколько баллов ты поставишь себе по критериям ФИПИ?</p><div class="crit">${cr.map(([p,t])=>`<button type="button" class="critb" data-p="${p}"><b>${p}</b><span>${t}</span></button>`).join('')}</div>`;
   b.querySelector('.crit').onclick=e=>{const x=e.target.closest('.critb');if(!x)return;const p=+x.dataset.p;b.remove();reveal(p===mx,true);
    const f=document.querySelector('#res .fb');if(f){f.className='fb '+(p===mx?'ok':'bad');f.innerHTML=`Самооценка: ${p} из ${mx}. Ответ: ${prob.ans}`}}}}
})();
