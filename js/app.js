const $=s=>document.querySelector(s);let cur=0,timer=null,tech=false;const done=new Set();
STEPS.forEach((s,i)=>{const b=document.createElement('button');b.textContent=(i+1)+". "+s.n;b.onclick=()=>go(i);$('#nav').appendChild(b)});
const MOVIES=[["Cloud Rush","#e50914"],["Packet Storm","#1e88e5"],["Nitro Nights","#8e24aa"],["The Hypervisor","#43a047"],["Zone A","#fb8c00"],["Key Pair","#00897b"]];
function site(el){el.innerHTML='<div class="site"><b style="color:#e50914">CLOUDFLIX</b> (original demo)<div class="hero"><h2>Cloud Messenger Originals</h2><button id="pl">▶ Play</button> <button id="mi">ℹ More Info</button></div><input id="q" placeholder="Search titles"><div class="cards" id="cd"></div><p id="t" class="k"></p></div>';
const draw=f=>{$('#cd').innerHTML=MOVIES.filter(m=>m[0].toLowerCase().includes(f)).map(m=>'<div style="background:linear-gradient(160deg,'+m[1]+',#111)">'+m[0]+'</div>').join('')};draw('');$('#q').oninput=e=>draw(e.target.value.toLowerCase());$('#pl').onclick=()=>{$('#t').textContent='▶ Demo playback (no video)'};$('#mi').onclick=()=>{$('#t').textContent='Original demo content for the EC2 lesson.'}}
function go(i){cur=Math.max(0,Math.min(8,i));for(let j=0;j<cur;j++)done.add(j);const s=STEPS[cur];
document.querySelectorAll('#nav button').forEach((b,j)=>{b.classList.toggle('act',j===cur);b.classList.toggle('done',done.has(j))});
document.querySelectorAll('.nd').forEach(n=>n.classList.toggle('on',s.nodes.includes(n.id)));
$('#cap').innerHTML='<h3>Step '+(cur+1)+': '+s.n+'</h3><p>'+(tech?s.tech:s.simple)+'</p><p class="k">🏠 '+s.an+'</p><pre>'+s.cmd+'</pre><pre>'+s.out+'</pre><p>🎤 '+s.q+'</p><p class="k">💡 '+s.tip+'</p>';
const ex=$('#extra');ex.innerHTML='';ex.style.display='none';if(cur===5){ex.style.display='block';initTerminal(ex)}if(cur===7){ex.style.display='block';site(ex)}if(cur===8){ex.style.display='block';initTrouble(ex)}
const p=Math.round((cur+1)/9*100);$('#bar').style.width=p+'%';$('#pct').textContent=p+'%'}
function setPlay(on){clearInterval(timer);timer=on?setInterval(()=>{if(cur<8)go(cur+1);else setPlay(false)},5000):null;$('#pp').textContent=on?'⏸ Pause':'▶ Play'}
$('#prev').onclick=()=>go(cur-1);$('#next').onclick=()=>go(cur+1);$('#pp').onclick=()=>setPlay(!timer);
$('#reset').onclick=()=>{setPlay(false);done.clear();go(0)};$('#mode').onclick=()=>{tech=!tech;$('#mode').textContent=tech?'Technical':'Beginner';go(cur)};
$('#theme').onclick=()=>document.body.classList.toggle('light');go(0);
