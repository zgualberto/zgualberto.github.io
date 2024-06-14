import{Q as R}from"./QBtn.2e3ab00f.js";import{c as E,a as s,h as q,r as $,i as Fe,o as oe,b as X,n as We,d as de,g as M,l as O,e as U,f as T,j as G,w as x,H as Pe,k as N,s as ut,m as ct,p as dt,q as ft,t as Re,u as Ie,v as ie,x as vt,y as ht,z as mt,A as gt,B as re,C as pe,D as L,E as S,F as se,G as bt,I as H,J as yt,T as pt,K as wt,L as xt,M as qt,N as St,O as kt,P as $t,Q as Tt}from"./index.a3e94a9f.js";import{h as ae,a as zt,u as Ct,b as Lt,Q as $e,c as _t,d as Qe,e as Pt}from"./QIcon.a3c928a1.js";import{u as Qt,a as Bt,b as Ht,Q as Ot,c as Et,d as Vt}from"./use-model-toggle.aa2a32fe.js";import{u as Mt,a as At,b as ue,Q as Dt}from"./format.24620c15.js";import{g as Ne,a as je,h as Ft,T as we,s as Wt,b as Rt,c as xe}from"./TouchPan.76848b92.js";import{v as It}from"./use-router-link.37b59871.js";import"./dom.54cb6db8.js";var Nt=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:o.value,role:"toolbar"},ae(l.default))}});function jt(){const e=$(!Fe.value);return e.value===!1&&oe(()=>{e.value=!0}),{isHydrated:e}}const Xe=typeof ResizeObserver!="undefined",Be=Xe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Te=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let o=null,t,n={width:-1,height:-1};function r(v){v===!0||e.debounce===0||e.debounce==="0"?c():o===null&&(o=setTimeout(c,e.debounce))}function c(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:v,offsetHeight:u}=t;(v!==n.width||u!==n.height)&&(n={width:v,height:u},l("resize",n))}}const{proxy:y}=M();if(y.trigger=r,Xe===!0){let v;const u=i=>{t=y.$el.parentNode,t?(v=new ResizeObserver(r),v.observe(t),c()):i!==!0&&de(()=>{u(!0)})};return oe(()=>{u()}),X(()=>{o!==null&&clearTimeout(o),v!==void 0&&(v.disconnect!==void 0?v.disconnect():t&&v.unobserve(t))}),We}else{let i=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",r,O.passive),u=void 0)},m=function(){i(),t&&t.contentDocument&&(u=t.contentDocument.defaultView,u.addEventListener("resize",r,O.passive),c())};const{isHydrated:v}=jt();let u;return oe(()=>{de(()=>{t=y.$el,t&&m()})}),X(i),()=>{if(v.value===!0)return q("object",{class:"q--avoid-card-border",style:Be.style,tabindex:-1,type:"text/html",data:Be.url,"aria-hidden":"true",onLoad:m})}}}}),Xt=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=M(),n=U(G,T);if(n===T)return console.error("QHeader needs to be child of QLayout"),T;const r=$(parseInt(e.heightHint,10)),c=$(!0),y=s(()=>e.reveal===!0||n.view.value.indexOf("H")!==-1||t.platform.is.ios&&n.isContainer.value===!0),v=s(()=>{if(e.modelValue!==!0)return 0;if(y.value===!0)return c.value===!0?r.value:0;const d=r.value-n.scroll.value.position;return d>0?d:0}),u=s(()=>e.modelValue!==!0||y.value===!0&&c.value!==!0),i=s(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),m=s(()=>"q-header q-layout__section--marginal "+(y.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),g=s(()=>{const d=n.rows.value.top,_={};return d[0]==="l"&&n.left.space===!0&&(_[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),d[2]==="r"&&n.right.space===!0&&(_[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),_});function f(d,_){n.update("header",d,_)}function p(d,_){d.value!==_&&(d.value=_)}function z({height:d}){p(r,d),f("size",d)}function C(d){i.value===!0&&p(c,!0),o("focusin",d)}x(()=>e.modelValue,d=>{f("space",d),p(c,!0),n.animate()}),x(v,d=>{f("offset",d)}),x(()=>e.reveal,d=>{d===!1&&p(c,e.modelValue)}),x(c,d=>{n.animate(),o("reveal",d)}),x(n.scroll,d=>{e.reveal===!0&&p(c,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const w={};return n.instances.header=w,e.modelValue===!0&&f("size",r.value),f("space",e.modelValue),f("offset",v.value),X(()=>{n.instances.header===w&&(n.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const d=zt(l.default,[]);return e.elevated===!0&&d.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(q(Te,{debounce:0,onResize:z})),q("header",{class:m.value,style:g.value,onFocusin:C},d)}}}),Ut=E({name:"QAvatar",props:{...Ct,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:l}){const o=Lt(e),t=s(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),n=s(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const r=e.icon!==void 0?[q($e,{name:e.icon})]:void 0;return q("div",{class:t.value,style:o.value},[q("div",{class:"q-avatar__content row flex-center overflow-hidden",style:n.value},_t(l.default,r))])}}});function Yt(e,l,o){let t;function n(){t!==void 0&&(Pe.remove(t),t=void 0)}return X(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){t={condition:()=>o.value===!0,handler:l},Pe.add(t)}}}let ee=0,qe,Se,te,ke=!1,He,Oe,Ee,I=null;function Kt(e){Gt(e)&&ut(e)}function Gt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const l=ct(e),o=e.shiftKey&&!e.deltaX,t=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=o||t?e.deltaY:e.deltaX;for(let r=0;r<l.length;r++){const c=l[r];if(Ft(c,t))return t?n<0&&c.scrollTop===0?!0:n>0&&c.scrollTop+c.clientHeight===c.scrollHeight:n<0&&c.scrollLeft===0?!0:n>0&&c.scrollLeft+c.clientWidth===c.scrollWidth}return!0}function Ve(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ce(e){ke!==!0&&(ke=!0,requestAnimationFrame(()=>{ke=!1;const{height:l}=e.target,{clientHeight:o,scrollTop:t}=document.scrollingElement;(te===void 0||l!==window.innerHeight)&&(te=o-l,document.scrollingElement.scrollTop=t),t>te&&(document.scrollingElement.scrollTop-=Math.ceil((t-te)/8))}))}function Me(e){const l=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:t,overflowX:n}=window.getComputedStyle(l);qe=Ne(window),Se=je(window),He=l.style.left,Oe=l.style.top,Ee=window.location.href,l.style.left=`-${qe}px`,l.style.top=`-${Se}px`,n!=="hidden"&&(n==="scroll"||l.scrollWidth>window.innerWidth)&&l.classList.add("q-body--force-scrollbar-x"),t!=="hidden"&&(t==="scroll"||l.scrollHeight>window.innerHeight)&&l.classList.add("q-body--force-scrollbar-y"),l.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,N.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ce,O.passiveCapture),window.visualViewport.addEventListener("scroll",ce,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ve,O.passiveCapture))}N.is.desktop===!0&&N.is.mac===!0&&window[`${e}EventListener`]("wheel",Kt,O.notPassive),e==="remove"&&(N.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",ce,O.passiveCapture),window.visualViewport.removeEventListener("scroll",ce,O.passiveCapture)):window.removeEventListener("scroll",Ve,O.passiveCapture)),l.classList.remove("q-body--prevent-scroll"),l.classList.remove("q-body--force-scrollbar-x"),l.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,l.style.left=He,l.style.top=Oe,window.location.href===Ee&&window.scrollTo(qe,Se),te=void 0)}function Jt(e){let l="add";if(e===!0){if(ee++,I!==null){clearTimeout(I),I=null;return}if(ee>1)return}else{if(ee===0||(ee--,ee>0))return;if(l="remove",N.is.ios===!0&&N.is.nativeMobile===!0){I!==null&&clearTimeout(I),I=setTimeout(()=>{Me(l),I=null},100);return}}Me(l)}function Zt(){let e;return{preventBodyScroll(l){l!==e&&(e!==void 0||l===!0)&&(e=l,Jt(l))}}}function eo(){let e=null;const l=M();function o(){e!==null&&(clearTimeout(e),e=null)}return dt(o),X(o),{removeTimeout:o,registerTimeout(t,n){o(),It(l)===!1&&(e=setTimeout(()=>{e=null,t()},n))}}}const Ae=150;var to=E({name:"QDrawer",inheritAttrs:!1,props:{...Qt,...Mt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Bt,"onLayout","miniState"],setup(e,{slots:l,emit:o,attrs:t}){const n=M(),{proxy:{$q:r}}=n,c=At(e,r),{preventBodyScroll:y}=Zt(),{registerTimeout:v,removeTimeout:u}=eo(),i=U(G,T);if(i===T)return console.error("QDrawer needs to be child of QLayout"),T;let m,g=null,f;const p=$(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),z=s(()=>e.mini===!0&&p.value!==!0),C=s(()=>z.value===!0?e.miniWidth:e.width),w=$(e.showIfAbove===!0&&p.value===!1?!0:e.modelValue===!0),d=s(()=>e.persistent!==!0&&(p.value===!0||Ye.value===!0));function _(a,h){if(F(),a!==!1&&i.animate(),B(0),p.value===!0){const P=i.instances[le.value];P!==void 0&&P.belowBreakpoint===!0&&P.hide(!1),A(1),i.isContainer.value!==!0&&y(!0)}else A(0),a!==!1&&ge(!1);v(()=>{a!==!1&&ge(!0),h!==!0&&o("show",a)},Ae)}function b(a,h){J(),a!==!1&&i.animate(),A(0),B(Y.value*C.value),be(),h!==!0?v(()=>{o("hide",a)},Ae):u()}const{show:k,hide:Q}=Ht({showing:w,hideOnRouteChange:d,handleShow:_,handleHide:b}),{addToHistory:F,removeFromHistory:J}=Yt(w,Q,d),W={belowBreakpoint:p,hide:Q},V=s(()=>e.side==="right"),Y=s(()=>(r.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),ze=$(0),K=$(!1),fe=$(!1),Ce=$(C.value*Y.value),le=s(()=>V.value===!0?"left":"right"),ve=s(()=>w.value===!0&&p.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:C.value:0),he=s(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(V.value?"R":"L")!==-1||r.platform.is.ios===!0&&i.isContainer.value===!0),Z=s(()=>e.overlay===!1&&w.value===!0&&p.value===!1),Ye=s(()=>e.overlay===!0&&w.value===!0&&p.value===!1),Ke=s(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&K.value===!1?" hidden":"")),Ge=s(()=>({backgroundColor:`rgba(0,0,0,${ze.value*.4})`})),Le=s(()=>V.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Je=s(()=>V.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ze=s(()=>{const a={};return i.header.space===!0&&Le.value===!1&&(he.value===!0?a.top=`${i.header.offset}px`:i.header.space===!0&&(a.top=`${i.header.size}px`)),i.footer.space===!0&&Je.value===!1&&(he.value===!0?a.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(a.bottom=`${i.footer.size}px`)),a}),et=s(()=>{const a={width:`${C.value}px`,transform:`translateX(${Ce.value}px)`};return p.value===!0?a:Object.assign(a,Ze.value)}),tt=s(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),ot=s(()=>`q-drawer q-drawer--${e.side}`+(fe.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(c.value===!0?" q-drawer--dark q-dark":"")+(K.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(p.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${z.value===!0?"mini":"standard"}`+(he.value===!0||Z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Le.value===!0?" q-drawer--top-padding":""))),at=s(()=>{const a=r.lang.rtl===!0?e.side:le.value;return[[we,rt,void 0,{[a]:!0,mouse:!0}]]}),lt=s(()=>{const a=r.lang.rtl===!0?le.value:e.side;return[[we,_e,void 0,{[a]:!0,mouse:!0}]]}),nt=s(()=>{const a=r.lang.rtl===!0?le.value:e.side;return[[we,_e,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){st(p,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}x(p,a=>{a===!0?(m=w.value,w.value===!0&&Q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&m!==!1&&(w.value===!0?(B(0),A(0),be()):k(!1))}),x(()=>e.side,(a,h)=>{i.instances[h]===W&&(i.instances[h]=void 0,i[h].space=!1,i[h].offset=0),i.instances[a]=W,i[a].size=C.value,i[a].space=Z.value,i[a].offset=ve.value}),x(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),x(()=>e.behavior+e.breakpoint,me),x(i.isContainer,a=>{w.value===!0&&y(a!==!0),a===!0&&me()}),x(i.scrollbarWidth,()=>{B(w.value===!0?0:void 0)}),x(ve,a=>{D("offset",a)}),x(Z,a=>{o("onLayout",a),D("space",a)}),x(V,()=>{B()}),x(C,a=>{B(),ye(e.miniToOverlay,a)}),x(()=>e.miniToOverlay,a=>{ye(a,C.value)}),x(()=>r.lang.rtl,()=>{B()}),x(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(it(),i.animate())}),x(z,a=>{o("miniState",a)});function B(a){a===void 0?de(()=>{a=w.value===!0?0:C.value,B(Y.value*a)}):(i.isContainer.value===!0&&V.value===!0&&(p.value===!0||Math.abs(a)===C.value)&&(a+=Y.value*i.scrollbarWidth.value),Ce.value=a)}function A(a){ze.value=a}function ge(a){const h=a===!0?"remove":i.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function it(){g!==null&&clearTimeout(g),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),fe.value=!0,g=setTimeout(()=>{g=null,fe.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function rt(a){if(w.value!==!1)return;const h=C.value,P=ue(a.distance.x,0,h);if(a.isFinal===!0){P>=Math.min(75,h)===!0?k():(i.animate(),A(0),B(Y.value*h)),K.value=!1;return}B((r.lang.rtl===!0?V.value!==!0:V.value)?Math.max(h-P,0):Math.min(0,P-h)),A(ue(P/h,0,1)),a.isFirst===!0&&(K.value=!0)}function _e(a){if(w.value!==!0)return;const h=C.value,P=a.direction===e.side,ne=(r.lang.rtl===!0?P!==!0:P)?ue(a.distance.x,0,h):0;if(a.isFinal===!0){Math.abs(ne)<Math.min(75,h)===!0?(i.animate(),A(1),B(0)):Q(),K.value=!1;return}B(Y.value*ne),A(ue(1-ne/h,0,1)),a.isFirst===!0&&(K.value=!0)}function be(){y(!1),ge(!0)}function D(a,h){i.update(e.side,a,h)}function st(a,h){a.value!==h&&(a.value=h)}function ye(a,h){D("size",a===!0?e.miniWidth:h)}return i.instances[e.side]=W,ye(e.miniToOverlay,C.value),D("space",Z.value),D("offset",ve.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),oe(()=>{o("onLayout",Z.value),o("miniState",z.value),m=e.showIfAbove===!0;const a=()=>{(w.value===!0?_:b)(!1,!0)};if(i.totalWidth.value!==0){de(a);return}f=x(i.totalWidth,()=>{f(),f=void 0,w.value===!1&&e.showIfAbove===!0&&p.value===!1?k(!1):a()})}),X(()=>{f!==void 0&&f(),g!==null&&(clearTimeout(g),g=null),w.value===!0&&be(),i.instances[e.side]===W&&(i.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const a=[];p.value===!0&&(e.noSwipeOpen===!1&&a.push(ft(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),at.value)),a.push(Qe("div",{ref:"backdrop",class:Ke.value,style:Ge.value,"aria-hidden":"true",onClick:Q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>nt.value)));const h=z.value===!0&&l.mini!==void 0,P=[q("div",{...t,key:""+h,class:[tt.value,t.class]},h===!0?l.mini():ae(l.default))];return e.elevated===!0&&w.value===!0&&P.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Qe("aside",{ref:"content",class:ot.value,style:et.value},P,"contentclose",e.noSwipeClose!==!0&&p.value===!0,()=>lt.value)),q("div",{class:"q-drawer-container"},a)}}}),oo=E({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:l}){const{proxy:{$q:o}}=M(),t=U(G,T);if(t===T)return console.error("QPage needs to be a deep child of QLayout"),T;if(U(Re,T)===T)return console.error("QPage needs to be child of QPageContainer"),T;const r=s(()=>{const y=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const v=t.isContainer.value===!0?t.containerHeight.value:o.screen.height;return e.styleFn(y,v)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-y+"px":o.screen.height===0?y!==0?`calc(100vh - ${y}px)`:"100vh":o.screen.height-y+"px"}}),c=s(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>q("main",{class:c.value,style:r.value},ae(l.default))}});const ao={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function lo(){const{props:e,proxy:{$q:l}}=M(),o=U(G,T);if(o===T)return console.error("QPageSticky needs to be child of QLayout"),T;const t=s(()=>{const m=e.position;return{top:m.indexOf("top")!==-1,right:m.indexOf("right")!==-1,bottom:m.indexOf("bottom")!==-1,left:m.indexOf("left")!==-1,vertical:m==="top"||m==="bottom",horizontal:m==="left"||m==="right"}}),n=s(()=>o.header.offset),r=s(()=>o.right.offset),c=s(()=>o.footer.offset),y=s(()=>o.left.offset),v=s(()=>{let m=0,g=0;const f=t.value,p=l.lang.rtl===!0?-1:1;f.top===!0&&n.value!==0?g=`${n.value}px`:f.bottom===!0&&c.value!==0&&(g=`${-c.value}px`),f.left===!0&&y.value!==0?m=`${p*y.value}px`:f.right===!0&&r.value!==0&&(m=`${-p*r.value}px`);const z={transform:`translate(${m}, ${g})`};return e.offset&&(z.margin=`${e.offset[1]}px ${e.offset[0]}px`),f.vertical===!0?(y.value!==0&&(z[l.lang.rtl===!0?"right":"left"]=`${y.value}px`),r.value!==0&&(z[l.lang.rtl===!0?"left":"right"]=`${r.value}px`)):f.horizontal===!0&&(n.value!==0&&(z.top=`${n.value}px`),c.value!==0&&(z.bottom=`${c.value}px`)),z}),u=s(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function i(m){const g=ae(m.default);return q("div",{class:u.value,style:v.value},e.expand===!0?g:[q("div",g)])}return{$layout:o,getStickyContent:i}}var no=E({name:"QPageSticky",props:ao,setup(e,{slots:l}){const{getStickyContent:o}=lo();return()=>o(l)}}),io=E({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=M(),t=U(G,T);if(t===T)return console.error("QPageContainer needs to be child of QLayout"),T;Ie(Re,!0);const n=s(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>q("div",{class:"q-page-container",style:n.value},ae(l.default))}});const{passive:De}=O,ro=["both","horizontal","vertical"];var so=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ro.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Wt},emits:["scroll"],setup(e,{emit:l}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,r;x(()=>e.scrollTarget,()=>{v(),y()});function c(){t!==null&&t();const m=Math.max(0,je(n)),g=Ne(n),f={top:m-o.position.top,left:g-o.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const p=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";o.position={top:m,left:g},o.directionChanged=o.direction!==p,o.delta=f,o.directionChanged===!0&&(o.direction=p,o.inflectionPoint=o.position),l("scroll",{...o})}function y(){n=Rt(r,e.scrollTarget),n.addEventListener("scroll",u,De),u(!0)}function v(){n!==void 0&&(n.removeEventListener("scroll",u,De),n=void 0)}function u(m){if(m===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[g,f]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{f(g),t=null}}}const{proxy:i}=M();return x(()=>i.$q.lang.rtl,c),oe(()=>{r=i.$el.parentNode,y()}),X(()=>{t!==null&&t(),v()}),Object.assign(i,{trigger:u,getPosition:()=>o}),We}}),uo=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:t}}=M(),n=$(null),r=$(t.screen.height),c=$(e.container===!0?0:t.screen.width),y=$({position:0,direction:"down",inflectionPoint:0}),v=$(0),u=$(Fe.value===!0?0:xe()),i=s(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=s(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),g=s(()=>u.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),f=s(()=>u.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function p(b){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};y.value=k,e.onScroll!==void 0&&o("scroll",k)}}function z(b){const{height:k,width:Q}=b;let F=!1;r.value!==k&&(F=!0,r.value=k,e.onScrollHeight!==void 0&&o("scrollHeight",k),w()),c.value!==Q&&(F=!0,c.value=Q),F===!0&&e.onResize!==void 0&&o("resize",b)}function C({height:b}){v.value!==b&&(v.value=b,w())}function w(){if(e.container===!0){const b=r.value>v.value?xe():0;u.value!==b&&(u.value=b)}}let d=null;const _={instances:{},view:s(()=>e.view),isContainer:s(()=>e.container),rootRef:n,height:r,containerHeight:v,scrollbarWidth:u,totalWidth:s(()=>c.value+u.value),rows:s(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:y,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,k,Q){_[b][k]=Q}};if(Ie(G,_),xe()>0){let Q=function(){b=null,k.classList.remove("hide-scrollbar")},F=function(){if(b===null){if(k.scrollHeight>t.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(Q,300)},J=function(W){b!==null&&W==="remove"&&(clearTimeout(b),Q()),window[`${W}EventListener`]("resize",F)},b=null;const k=document.body;x(()=>e.container!==!0?"add":"remove",J),e.container!==!0&&J("add"),vt(()=>{J("remove")})}return()=>{const b=Pt(l.default,[q(so,{onScroll:p}),q(Te,{onResize:z})]),k=q("div",{class:i.value,style:m.value,ref:e.container===!0?void 0:n,tabindex:-1},b);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:n},[q(Te,{onResize:C}),q("div",{class:"absolute-full",style:g.value},[q("div",{class:"scroll",style:f.value},[k])])]):k}}});const j=[];function Ue(e){j[j.length-1](e)}function co(e){N.is.desktop===!0&&(j.push(e),j.length===1&&document.body.addEventListener("focusin",Ue))}function fo(e){const l=j.indexOf(e);l!==-1&&(j.splice(l,1),j.length===0&&document.body.removeEventListener("focusin",Ue))}function vo(e){const l=document.createElement("textarea");l.value=e,l.contentEditable="true",l.style.position="fixed";const o=()=>{};co(o),document.body.appendChild(l),l.focus(),l.select();const t=document.execCommand("copy");return l.remove(),fo(o),t}function ho(e){return navigator.clipboard!==void 0?navigator.clipboard.writeText(e):new Promise((l,o)=>{const t=vo(e);t?l(!0):o(t)})}function mo(){return U(ht)}var go="/assets/2x2.6288bbe7.jpg";const bo={class:"row items-start full-height"},yo={class:"q-pt-lg q-px-lg text-center"},po={class:"row justify-center full-width"},wo=["src"],xo={class:"full-width"},qo=H("div",{class:"text-weight-bold"},"Ziegfrid N. Gualberto",-1),So={class:"full-width"},ko={class:"q-ml-lg text-left"},$o={class:"self-end row justify-around full-width q-mb-md"},Oo=mt({name:"MainLayout",__name:"MainLayout",setup(e){const l=$(go),o=mo(),t=$(window.innerHeight),n=[{label:"Home",icon:"fa-solid fa-house",to:"/"},{label:"Skills",icon:"fa-solid fa-code",to:"/skills"},{label:"Experience",icon:"fa-solid fa-briefcase",to:"/experience"}],r=$(!o.screen.lt.sm),c=$("fa-regular fa-copy");function y(){r.value=!r.value}const v=()=>{ho("ziegfrid.gualberto@gmail.com"),c.value="fa-solid fa-clipboard-check"};return(u,i)=>{const m=gt("router-view");return re(),pe(uo,{view:"lHh Lpr lFf"},{default:L(()=>[S(Xt,{class:se(u.$q.dark.isActive?"bg-dark":"bg-white")},{default:L(()=>[u.$q.screen.lt.md?(re(),pe(Nt,{key:0},{default:L(()=>[S(R,{flat:"",dense:"",round:"",icon:"fa-solid fa-bars-staggered","aria-label":"Menu",class:se({"text-white":u.$q.dark.isActive,"text-black":!u.$q.dark.isActive}),onClick:y},null,8,["class"])]),_:1})):bt("",!0)]),_:1},8,["class"]),S(to,{modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=g=>r.value=g),style:{overflow:"hidden"}},{default:L(()=>[H("div",bo,[H("div",yo,[H("div",po,[S(Ut,{size:"56px",class:"q-mb-sm"},{default:L(()=>[H("img",{src:l.value},null,8,wo)]),_:1})]),H("div",xo,[qo,H("a",{onClick:v,class:"text-overline row no-wrap items-center cursor-pointer"},[yt(" ziegfrid.gualberto@gmail.com "),S($e,{size:"15px",class:"email-clipboard-icon q-pl-sm",name:c.value},null,8,["name"])])])]),H("div",So,[S(Dt,null,{default:L(()=>[S(pt,{appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutLeft"},{default:L(()=>[(re(),wt(qt,null,xt(n,(g,f)=>S(Ot,{clickable:"",key:f,to:g.to,class:"btn--no-hover q-pa-md rounded-borders",exact:""},{default:L(()=>[S(Et,{to:g.to},{default:L(()=>[S(Vt,{class:"text-h6 row items-center"},{default:L(()=>[S($e,{name:g.icon,class:"q-ml-sm"},null,8,["name"]),H("span",ko,Tt(g.label),1)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1032,["to"])),64))]),_:1})]),_:1})]),H("div",$o,[S(R,{flat:"",icon:"fa-brands fa-viber",href:"viber://add?number=639176523658",class:"btn--no-hover"}),S(R,{flat:"",icon:"fa-brands fa-whatsapp",target:"_blank",href:"https://wa.me/639176523658",class:"btn--no-hover"}),S(R,{flat:"",icon:"fa-solid fa-comment-sms",href:"sms://+639176523658",class:"btn--no-hover"}),S(R,{flat:"",icon:"fa-brands fa-linkedin",target:"_blank",href:"https://www.linkedin.com/in/ziegfrid-gualberto/",class:"btn--no-hover"}),S(R,{flat:"",icon:"fa-brands fa-github",target:"_blank",href:"https://github.com/zgualberto",class:"btn--no-hover"})])])]),_:1},8,["modelValue"]),S(io,null,{default:L(()=>[S(oo,{class:se(["q-py-lg",{"q-px-md":!u.$q.screen.lt.sm,"q-px-sm":u.$q.screen.lt.sm}]),style:St(`height: ${t.value}px;`)},{default:L(()=>[S(m,null,{default:L(({Component:g})=>[S(kt,{appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutLeft"},{default:L(()=>[(re(),pe($t(g)))]),_:2},1024)]),_:1})]),_:1},8,["class","style"]),S(no,{position:"bottom-right",offset:[18,18]},{default:L(()=>[S(R,{fab:"",icon:"fa-solid fa-circle-half-stroke",color:u.$q.dark.isActive?"white":"dark",onClick:u.$q.dark.toggle,class:se(u.$q.dark.isActive?"text-black":"text-white")},null,8,["color","onClick","class"])]),_:1})]),_:1})]),_:1})}}});export{Oo as default};