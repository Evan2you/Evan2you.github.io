(() => {
'use strict';
const prefix='evan-rl-study-v1:';
function get(key){try{return localStorage.getItem(prefix+key)}catch{return null}}
function set(key,value){try{localStorage.setItem(prefix+key,value)}catch{}}
function progress(){const el=document.getElementById('paper-progress');if(el)el.textContent='已完成 '+[...'ABCDE'].filter(l=>get('done-'+l)==='true').length+' / 5 套';}
document.querySelectorAll('[data-save]').forEach(el=>{
 const key=el.dataset.save,value=get(key);
 if(el.type==='radio')el.checked=value===el.value;
 else if(el.type==='checkbox')el.checked=value==='true';
 else if(value!==null)el.value=value;
 el.addEventListener(el.tagName==='TEXTAREA'?'input':'change',()=>{set(key,el.type==='checkbox'?String(el.checked):el.value);progress()});
});
progress();
})();
