import{a as g,h as r,q as B,c as _,g as M}from"./index.182b5442.js";const j={xs:18,sm:24,md:32,lg:38,xl:46},k={size:String};function p(e,n=j){return g(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}function q(e,n){return e!==void 0&&e()||n}function V(e,n){if(e!==void 0){const a=e();if(a!=null)return a.slice()}return n}function c(e,n){return e!==void 0?n.concat(e()):n}function A(e,n){return e===void 0?n:n!==void 0?n.concat(e()):e()}function G(e,n,a,l,u,o){n.key=l+u;const i=r(e,n,a);return u===!0?B(i,o()):i}const h="0 0 24 24",b=e=>e,d=e=>`ionicons ${e}`,x={"mdi-":e=>`mdi ${e}`,"icon-":b,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":d,"ion-ios":d,"ion-logo":d,"iconfont ":b,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},S={o_:"-outlined",r_:"-round",s_:"-sharp"},E={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},F=new RegExp("^("+Object.keys(x).join("|")+")"),D=new RegExp("^("+Object.keys(S).join("|")+")"),y=new RegExp("^("+Object.keys(E).join("|")+")"),I=/^[Mm]\s?[-+]?\.?\d/,O=/^img:/,Q=/^svguse:/,C=/^ion-/,U=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var H=_({name:"QIcon",props:{...k,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=M(),l=p(e),u=g(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=g(()=>{let i,t=e.name;if(t==="none"||!t)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(t);if(s!==void 0)if(s.icon!==void 0){if(t=s.icon,t==="none"||!t)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(I.test(t)===!0){const[s,v=h]=t.split("|");return{svg:!0,viewBox:v,nodes:s.split("&&").map(R=>{const[$,w,z]=R.split("@@");return r("path",{style:w,d:$,transform:z})})}}if(O.test(t)===!0)return{img:!0,src:t.substring(4)};if(Q.test(t)===!0){const[s,v=h]=t.split("|");return{svguse:!0,src:s.substring(7),viewBox:v}}let f=" ";const m=t.match(F);if(m!==null)i=x[m[1]](t);else if(U.test(t)===!0)i=t;else if(C.test(t)===!0)i=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(y.test(t)===!0){i="notranslate material-symbols";const s=t.match(y);s!==null&&(t=t.substring(6),i+=E[s[1]]),f=t}else{i="notranslate material-icons";const s=t.match(D);s!==null&&(t=t.substring(2),i+=S[s[1]]),f=t}return{cls:i,content:f}});return()=>{const i={class:u.value,style:l.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?r(e.tag,i,q(n.default)):o.value.img===!0?r(e.tag,i,c(n.default,[r("img",{src:o.value.src})])):o.value.svg===!0?r(e.tag,i,c(n.default,[r("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?r(e.tag,i,c(n.default,[r("svg",{viewBox:o.value.viewBox},[r("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(i.class+=" "+o.value.cls),r(e.tag,i,c(n.default,[o.value.content])))}}});export{H as Q,V as a,p as b,A as c,G as d,c as e,j as f,q as h,k as u};
