import{F as f,h as y,r as _,o as h,I as v,Q as w,O as r,M as l,L as x,a9 as b}from"./index.61d28bd7.js";async function o(t,...n){for(const e of n)switch(typeof e){case"string":await g(t,e);break;case"number":await u(e);break;case"function":await e(t,...n);break;default:await e}}async function g(t,n){const e=function(s,[...i]){return[...s,NaN].findIndex((a,c)=>i[c]!==a)}(t.textContent,n);await async function(s,i,a=60){for(const c of function*(p){for(const d of p)yield m=>requestAnimationFrame(()=>m.textContent=d)}(i))c(s),await u(a+a*(Math.random()-.5))}(t,[...q(t.textContent,e),...k(n,e)])}async function u(t){await new Promise(n=>setTimeout(n,t))}function*k([...t],n=0,e=t.length){for(;n<e;)yield t.slice(0,++n).join("")}function*q([...t],n=0,e=t.length){for(;e>n;)yield t.slice(0,--e).join("")}const I=o;var C=f({name:"Typical",props:{steps:{type:Array,required:!0},wrapper:{type:String,default:"div"},loop:{type:Number,default:1}},render(){return y(this.wrapper,{ref:"myRef"})},setup:({steps:t,loop:n})=>{const e=_(null);return h(()=>{const s=e.value;n===1/0?o(s,...t,I):typeof n=="number"&&n>0?o(s,...Array(n).fill(t).flat()):o(s,...t)}),{myRef:e}}});const N={class:"row items-center justify-center full-height"},j={class:"row justify-center items-center"},B=r("div",{class:"q-pr-sm"},"I am a",-1),$=r("div",{class:"blink self-center",style:{}},null,-1),D=f({__name:"IndexPage",setup(t){const n=["Web Developer",1e3,"Backend Developer",1e3,"Full-Stack Developer",1e3,"Software Consultant",1e3];return(e,s)=>(v(),w("div",N,[r("div",j,[r("div",{class:l(["col-12 text-center q-pb-lg",{"text-h4":!e.$q.screen.lt.sm,"text-h5":e.$q.screen.lt.sm}])}," Hi! I'm Ziegfrid N. Gualberto ",2),r("div",{class:l(["col-12 text-center row justify-center items-center",{"text-h5":!e.$q.screen.lt.sm,"text-h6":e.$q.screen.lt.sm}])},[B,x(b(C),{steps:n,loop:1/0,wrapper:"div"}),$],2)])]))}});export{D as default};
