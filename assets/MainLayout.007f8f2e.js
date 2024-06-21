import{Q as X}from"./QBtn.ab331969.js";import{c as D,a as h,h as T,r as k,i as Je,o as ee,b as A,n as et,d as te,g as V,l as ae,e as J,f as H,w as S,j as oe,u as kt,k as $t,m as Ct,p as Ae,q as we,s as Ee,t as tt,v as zt,T as Lt,x as _t,y as Ht,z as at,A as ot,B as pe,C as nt,D as lt,E as it,F as Pt,H as De,G as Et,I as Qt,J as rt,K as st,L as Wt,M as Mt,N as me,O as Bt,P as Ot,Q as At,R as ge,S as Le,U as Q,V as C,W as be,X as Dt,Y as R,Z as Ve,_ as Vt,$ as Ft,a0 as Rt,a1 as It,a2 as Nt,a3 as jt,a4 as Gt,a5 as Kt}from"./index.3fa37018.js";import{h as ne,a as Ut,Q as Qe,b as Xt,c as Fe,d as Yt}from"./QIcon.2e66f799.js";import{c as We,r as Re,a as Zt,T as _e}from"./TouchPan.285e53dc.js";import{u as ut,a as ct,b as dt,Q as Jt,c as ea,d as ta}from"./QItem.e3c9b000.js";import{v as ft}from"./use-router-link.40f4785d.js";import{u as aa,a as oa,b as ye,Q as na}from"./format.8cef8da2.js";import{_ as la}from"./plugin-vue_export-helper.21dcd24c.js";var ia=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const a=h(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:a.value,role:"toolbar"},ne(o.default))}});function ra(){const e=k(!Je.value);return e.value===!1&&ee(()=>{e.value=!0}),{isHydrated:e}}const vt=typeof ResizeObserver!="undefined",Ie=vt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Me=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let a=null,t,n={width:-1,height:-1};function s(v){v===!0||e.debounce===0||e.debounce==="0"?r():a===null&&(a=setTimeout(r,e.debounce))}function r(){if(a!==null&&(clearTimeout(a),a=null),t){const{offsetWidth:v,offsetHeight:c}=t;(v!==n.width||c!==n.height)&&(n={width:v,height:c},o("resize",n))}}const{proxy:d}=V();if(d.trigger=s,vt===!0){let v;const c=l=>{t=d.$el.parentNode,t?(v=new ResizeObserver(s),v.observe(t),r()):l!==!0&&te(()=>{c(!0)})};return ee(()=>{c()}),A(()=>{a!==null&&clearTimeout(a),v!==void 0&&(v.disconnect!==void 0?v.disconnect():t&&v.unobserve(t))}),et}else{let l=function(){a!==null&&(clearTimeout(a),a=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",s,ae.passive),c=void 0)},m=function(){l(),t&&t.contentDocument&&(c=t.contentDocument.defaultView,c.addEventListener("resize",s,ae.passive),r())};const{isHydrated:v}=ra();let c;return ee(()=>{te(()=>{t=d.$el,t&&m()})}),A(l),()=>{if(v.value===!0)return T("object",{class:"q--avoid-card-border",style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:m})}}}}),sa=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:a}){const{proxy:{$q:t}}=V(),n=J(oe,H);if(n===H)return console.error("QHeader needs to be child of QLayout"),H;const s=k(parseInt(e.heightHint,10)),r=k(!0),d=h(()=>e.reveal===!0||n.view.value.indexOf("H")!==-1||t.platform.is.ios&&n.isContainer.value===!0),v=h(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return r.value===!0?s.value:0;const g=s.value-n.scroll.value.position;return g>0?g:0}),c=h(()=>e.modelValue!==!0||d.value===!0&&r.value!==!0),l=h(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),m=h(()=>"q-header q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=h(()=>{const g=n.rows.value.top,q={};return g[0]==="l"&&n.left.space===!0&&(q[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),g[2]==="r"&&n.right.space===!0&&(q[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),q});function i(g,q){n.update("header",g,q)}function f(g,q){g.value!==q&&(g.value=q)}function $({height:g}){f(s,g),i("size",g)}function z(g){l.value===!0&&f(r,!0),a("focusin",g)}S(()=>e.modelValue,g=>{i("space",g),f(r,!0),n.animate()}),S(v,g=>{i("offset",g)}),S(()=>e.reveal,g=>{g===!1&&f(r,e.modelValue)}),S(r,g=>{n.animate(),a("reveal",g)}),S(n.scroll,g=>{e.reveal===!0&&f(r,g.direction==="up"||g.position<=e.revealOffset||g.position-g.inflectionPoint<100)});const x={};return n.instances.header=x,e.modelValue===!0&&i("size",s.value),i("space",e.modelValue),i("offset",v.value),A(()=>{n.instances.header===x&&(n.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const g=Ut(o.default,[]);return e.elevated===!0&&g.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g.push(T(Me,{debounce:0,onResize:$})),T("header",{class:m.value,style:p.value,onFocusin:z},g)}}}),ua=D({name:"QAvatar",props:{...kt,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:o}){const a=$t(e),t=h(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),n=h(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const s=e.icon!==void 0?[T(Qe,{name:e.icon})]:void 0;return T("div",{class:t.value,style:a.value},[T("div",{class:"q-avatar__content row flex-center overflow-hidden",style:n.value},Xt(o.default,s))])}}});const ca={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean};function da({showing:e,avoidEmit:o,configureAnchorEl:a}){const{props:t,proxy:n,emit:s}=V(),r=k(null);let d=null;function v(i){return r.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const c={};a===void 0&&(Object.assign(c,{hide(i){n.hide(i)},toggle(i){n.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Ct(i,13)===!0&&c.toggle(i)},contextClick(i){n.hide(i),Ae(i),te(()=>{n.show(i),i.qAnchorHandled=!0})},prevent:Ae,mobileTouch(i){if(c.mobileCleanup(i),v(i)!==!0)return;n.hide(i),r.value.classList.add("non-selectable");const f=i.target;we(c,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[r.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,n.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){r.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&i!==void 0&&We()}}),a=function(i=t.contextMenu){if(t.noParentEvent===!0||r.value===null)return;let f;i===!0?n.$q.platform.is.mobile===!0?f=[[r.value,"touchstart","mobileTouch","passive"]]:f=[[r.value,"mousedown","hide","passive"],[r.value,"contextmenu","contextClick","notPassive"]]:f=[[r.value,"click","toggle","passive"],[r.value,"keyup","toggleKey","passive"]],we(c,"anchor",f)});function l(){Ee(c,"anchor")}function m(i){for(r.value=i;r.value.classList.contains("q-anchor--skip");)r.value=r.value.parentNode;a()}function p(){if(t.target===!1||t.target===""||n.$el.parentNode===null)r.value=null;else if(t.target===!0)m(n.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(r.value=i.$el||i,a()):(r.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return S(()=>t.contextMenu,i=>{r.value!==null&&(l(),a(i))}),S(()=>t.target,()=>{r.value!==null&&l(),p()}),S(()=>t.noParentEvent,i=>{r.value!==null&&(i===!0?l():a())}),ee(()=>{p(),o!==!0&&t.modelValue===!0&&r.value===null&&s("update:modelValue",!1)}),A(()=>{d!==null&&clearTimeout(d),l()}),{anchorEl:r,canShow:v,anchorEvents:c}}function fa(e,o){const a=k(null);let t;function n(d,v){const c=`${v!==void 0?"add":"remove"}EventListener`,l=v!==void 0?v:t;d!==window&&d[c]("scroll",l,ae.passive),window[c]("scroll",l,ae.passive),t=v}function s(){a.value!==null&&(n(a.value),a.value=null)}const r=S(()=>e.noParentEvent,()=>{a.value!==null&&(s(),o())});return A(r),{localScrollTarget:a,unconfigureScrollTarget:s,changeScrollEvent:n}}const ce=[],va=D({name:"QPortal",setup(e,{slots:o}){return()=>o.default()}});function ha(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ma(e,o,a,t){const n=k(!1),s=k(!1);let r=null;const d={},v=t==="dialog"&&ha(e);function c(m){if(m===!0){Re(d),s.value=!0;return}s.value=!1,n.value===!1&&(v===!1&&r===null&&(r=_t(!1,t)),n.value=!0,ce.push(e.proxy),Zt(d))}function l(m){if(s.value=!1,m!==!0)return;Re(d),n.value=!1;const p=ce.indexOf(e.proxy);p!==-1&&ce.splice(p,1),r!==null&&(Ht(r),r=null)}return tt(()=>{l(!0)}),e.proxy.__qPortal=!0,zt(e.proxy,"contentEl",()=>o.value),{showPortal:c,hidePortal:l,portalIsActive:n,portalIsAccessible:s,renderPortal:()=>v===!0?a():n.value===!0?[T(Lt,{to:r},T(va,a))]:void 0}}const He={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ga(e,o=()=>{},a=()=>{}){return{transitionProps:h(()=>{const t=`q-transition--${e.transitionShow||o()}`,n=`q-transition--${e.transitionHide||a()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${n}-leave-from`,leaveActiveClass:`${n}-leave-active`,leaveToClass:`${n}-leave-to`}}),transitionStyle:h(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function ba(){let e;const o=V();function a(){e=void 0}return at(a),A(a),{removeTick:a,registerTick(t){e=t,te(()=>{e===t&&(ft(o)===!1&&e(),e=void 0)})}}}function ht(){let e=null;const o=V();function a(){e!==null&&(clearTimeout(e),e=null)}return at(a),A(a),{removeTimeout:a,registerTimeout(t,n){a(),ft(o)===!1&&(e=setTimeout(()=>{e=null,t()},n))}}}const{notPassiveCapture:xe}=ae,Y=[];function Se(e){const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let a=ce.length-1;for(;a>=0;){const t=ce[a].$;if(t.type.name==="QTooltip"){a--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;a--}for(let t=Y.length-1;t>=0;t--){const n=Y[t];if((n.anchorEl.value===null||n.anchorEl.value.contains(o)===!1)&&(o===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(o)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function ya(e){Y.push(e),Y.length===1&&(document.addEventListener("mousedown",Se,xe),document.addEventListener("touchstart",Se,xe))}function Ne(e){const o=Y.findIndex(a=>a===e);o!==-1&&(Y.splice(o,1),Y.length===0&&(document.removeEventListener("mousedown",Se,xe),document.removeEventListener("touchstart",Se,xe)))}let je,Ge;function Ke(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function pa(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Be={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Be[`${e}#ltr`]=e,Be[`${e}#rtl`]=e});function Ue(e,o){const a=e.split(" ");return{vertical:a[0],horizontal:Be[`${a[1]}#${o===!0?"rtl":"ltr"}`]}}function wa(e,o){let{top:a,left:t,right:n,bottom:s,width:r,height:d}=e.getBoundingClientRect();return o!==void 0&&(a-=o[1],t-=o[0],s+=o[1],n+=o[0],r+=o[0],d+=o[1]),{top:a,bottom:s,height:d,left:t,right:n,width:r,middle:t+(n-t)/2,center:a+(s-a)/2}}function xa(e,o,a){let{top:t,left:n}=e.getBoundingClientRect();return t+=o.top,n+=o.left,a!==void 0&&(t+=a[1],n+=a[0]),{top:t,bottom:t+1,height:1,left:n,right:n+1,width:1,middle:n,center:t}}function Sa(e,o){return{top:0,center:o/2,bottom:o,left:0,middle:e/2,right:e}}function Xe(e,o,a,t){return{top:e[a.vertical]-o[t.vertical],left:e[a.horizontal]-o[t.horizontal]}}function mt(e,o=0){if(e.targetEl===null||e.anchorEl===null||o>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{mt(e,o+1)},10);return}const{targetEl:a,offset:t,anchorEl:n,anchorOrigin:s,selfOrigin:r,absoluteOffset:d,fit:v,cover:c,maxHeight:l,maxWidth:m}=e;if(ot.is.ios===!0&&window.visualViewport!==void 0){const L=document.body.style,{offsetLeft:_,offsetTop:W}=window.visualViewport;_!==je&&(L.setProperty("--q-pe-left",_+"px"),je=_),W!==Ge&&(L.setProperty("--q-pe-top",W+"px"),Ge=W)}const{scrollLeft:p,scrollTop:i}=a,f=d===void 0?wa(n,c===!0?[0,0]:t):xa(n,d,t);Object.assign(a.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:m||"100vw",maxHeight:l||"100vh",visibility:"visible"});const{offsetWidth:$,offsetHeight:z}=a,{elWidth:x,elHeight:g}=v===!0||c===!0?{elWidth:Math.max(f.width,$),elHeight:c===!0?Math.max(f.height,z):z}:{elWidth:$,elHeight:z};let q={maxWidth:m,maxHeight:l};(v===!0||c===!0)&&(q.minWidth=f.width+"px",c===!0&&(q.minHeight=f.height+"px")),Object.assign(a.style,q);const y=Sa(x,g);let b=Xe(f,y,s,r);if(d===void 0||t===void 0)Pe(b,f,y,s,r);else{const{top:L,left:_}=b;Pe(b,f,y,s,r);let W=!1;if(b.top!==L){W=!0;const P=2*t[1];f.center=f.top-=P,f.bottom-=P+2}if(b.left!==_){W=!0;const P=2*t[0];f.middle=f.left-=P,f.right-=P+2}W===!0&&(b=Xe(f,y,s,r),Pe(b,f,y,s,r))}q={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(q.maxHeight=b.maxHeight+"px",f.height>b.maxHeight&&(q.minHeight=q.maxHeight)),b.maxWidth!==void 0&&(q.maxWidth=b.maxWidth+"px",f.width>b.maxWidth&&(q.minWidth=q.maxWidth)),Object.assign(a.style,q),a.scrollTop!==i&&(a.scrollTop=i),a.scrollLeft!==p&&(a.scrollLeft=p)}function Pe(e,o,a,t,n){const s=a.bottom,r=a.right,d=pe(),v=window.innerHeight-d,c=document.body.clientWidth;if(e.top<0||e.top+s>v)if(n.vertical==="center")e.top=o[t.vertical]>v/2?Math.max(0,v-s):0,e.maxHeight=Math.min(s,v);else if(o[t.vertical]>v/2){const l=Math.min(v,t.vertical==="center"?o.center:t.vertical===n.vertical?o.bottom:o.top);e.maxHeight=Math.min(s,l),e.top=Math.max(0,l-s)}else e.top=Math.max(0,t.vertical==="center"?o.center:t.vertical===n.vertical?o.top:o.bottom),e.maxHeight=Math.min(s,v-e.top);if(e.left<0||e.left+r>c)if(e.maxWidth=Math.min(r,c),n.horizontal==="middle")e.left=o[t.horizontal]>c/2?Math.max(0,c-r):0;else if(o[t.horizontal]>c/2){const l=Math.min(c,t.horizontal==="middle"?o.middle:t.horizontal===n.horizontal?o.right:o.left);e.maxWidth=Math.min(r,l),e.left=Math.max(0,l-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?o.middle:t.horizontal===n.horizontal?o.left:o.right),e.maxWidth=Math.min(r,c-e.left)}var qa=D({name:"QTooltip",inheritAttrs:!1,props:{...ca,...ut,...He,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...He.transitionShow,default:"jump-down"},transitionHide:{...He.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Ke},self:{type:String,default:"top middle",validator:Ke},offset:{type:Array,default:()=>[14,14],validator:pa},scrollTarget:nt,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ct],setup(e,{slots:o,emit:a,attrs:t}){let n,s;const r=V(),{proxy:{$q:d}}=r,v=k(null),c=k(!1),l=h(()=>Ue(e.anchor,d.lang.rtl)),m=h(()=>Ue(e.self,d.lang.rtl)),p=h(()=>e.persistent!==!0),{registerTick:i,removeTick:f}=ba(),{registerTimeout:$}=ht(),{transitionProps:z,transitionStyle:x}=ga(e),{localScrollTarget:g,changeScrollEvent:q,unconfigureScrollTarget:y}=fa(e,fe),{anchorEl:b,canShow:L,anchorEvents:_}=da({showing:c,configureAnchorEl:U}),{show:W,hide:P}=dt({showing:c,canShow:L,handleShow:j,handleHide:le,hideOnRouteChange:p,processOnMount:!0});Object.assign(_,{delayShow:re,delayHide:se});const{showPortal:B,hidePortal:I,renderPortal:de}=ma(r,v,Te,"tooltip");if(d.platform.is.mobile===!0){const E={anchorEl:b,innerRef:v,onClickOutside(N){return P(N),N.target.classList.contains("q-dialog__backdrop")&&Pt(N),!0}},ue=h(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);S(ue,N=>{(N===!0?ya:Ne)(E)}),A(()=>{Ne(E)})}function j(E){B(),i(()=>{s=new MutationObserver(()=>F()),s.observe(v.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),F(),fe()}),n===void 0&&(n=S(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,F)),$(()=>{B(!0),a("show",E)},e.transitionDuration)}function le(E){f(),I(),ie(),$(()=>{I(!0),a("hide",E)},e.transitionDuration)}function ie(){s!==void 0&&(s.disconnect(),s=void 0),n!==void 0&&(n(),n=void 0),y(),Ee(_,"tooltipTemp")}function F(){mt({targetEl:v.value,offset:e.offset,anchorEl:b.value,anchorOrigin:l.value,selfOrigin:m.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function re(E){if(d.platform.is.mobile===!0){We(),document.body.classList.add("non-selectable");const ue=b.value,N=["touchmove","touchcancel","touchend","click"].map(ve=>[ue,ve,"delayHide","passiveCapture"]);we(_,"tooltipTemp",N)}$(()=>{W(E)},e.delay)}function se(E){d.platform.is.mobile===!0&&(Ee(_,"tooltipTemp"),We(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),$(()=>{P(E)},e.hideDelay)}function U(){if(e.noParentEvent===!0||b.value===null)return;const E=d.platform.is.mobile===!0?[[b.value,"touchstart","delayShow","passive"]]:[[b.value,"mouseenter","delayShow","passive"],[b.value,"mouseleave","delayHide","passive"]];we(_,"anchor",E)}function fe(){if(b.value!==null||e.scrollTarget!==void 0){g.value=lt(b.value,e.scrollTarget);const E=e.noParentEvent===!0?F:P;q(g.value,E)}}function qe(){return c.value===!0?T("div",{...t,ref:v,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,x.value],role:"tooltip"},ne(o.default)):null}function Te(){return T(it,z.value,qe)}return A(ie),Object.assign(r.proxy,{updatePosition:F}),de}});function Ta(e,o,a){let t;function n(){t!==void 0&&(De.remove(t),t=void 0)}return A(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){t={condition:()=>a.value===!0,handler:o},De.add(t)}}}function ka(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Et(o))}}}const Ye=150;var $a=D({name:"QDrawer",inheritAttrs:!1,props:{...ut,...aa,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ct,"onLayout","miniState"],setup(e,{slots:o,emit:a,attrs:t}){const n=V(),{proxy:{$q:s}}=n,r=oa(e,s),{preventBodyScroll:d}=ka(),{registerTimeout:v,removeTimeout:c}=ht(),l=J(oe,H);if(l===H)return console.error("QDrawer needs to be child of QLayout"),H;let m,p=null,i;const f=k(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),$=h(()=>e.mini===!0&&f.value!==!0),z=h(()=>$.value===!0?e.miniWidth:e.width),x=k(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),g=h(()=>e.persistent!==!0&&(f.value===!0||fe.value===!0));function q(u,w){if(_(),u!==!1&&l.animate(),O(0),f.value===!0){const M=l.instances[F.value];M!==void 0&&M.belowBreakpoint===!0&&M.hide(!1),G(1),l.isContainer.value!==!0&&d(!0)}else G(0),u!==!1&&$e(!1);v(()=>{u!==!1&&$e(!0),w!==!0&&a("show",u)},Ye)}function y(u,w){W(),u!==!1&&l.animate(),G(0),O(I.value*z.value),Ce(),w!==!0?v(()=>{a("hide",u)},Ye):c()}const{show:b,hide:L}=dt({showing:x,hideOnRouteChange:g,handleShow:q,handleHide:y}),{addToHistory:_,removeFromHistory:W}=Ta(x,L,g),P={belowBreakpoint:f,hide:L},B=h(()=>e.side==="right"),I=h(()=>(s.lang.rtl===!0?-1:1)*(B.value===!0?1:-1)),de=k(0),j=k(!1),le=k(!1),ie=k(z.value*I.value),F=h(()=>B.value===!0?"left":"right"),re=h(()=>x.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),se=h(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(B.value?"R":"L")!==-1||s.platform.is.ios===!0&&l.isContainer.value===!0),U=h(()=>e.overlay===!1&&x.value===!0&&f.value===!1),fe=h(()=>e.overlay===!0&&x.value===!0&&f.value===!1),qe=h(()=>"fullscreen q-drawer__backdrop"+(x.value===!1&&j.value===!1?" hidden":"")),Te=h(()=>({backgroundColor:`rgba(0,0,0,${de.value*.4})`})),E=h(()=>B.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),ue=h(()=>B.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),N=h(()=>{const u={};return l.header.space===!0&&E.value===!1&&(se.value===!0?u.top=`${l.header.offset}px`:l.header.space===!0&&(u.top=`${l.header.size}px`)),l.footer.space===!0&&ue.value===!1&&(se.value===!0?u.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(u.bottom=`${l.footer.size}px`)),u}),ve=h(()=>{const u={width:`${z.value}px`,transform:`translateX(${ie.value}px)`};return f.value===!0?u:Object.assign(u,N.value)}),bt=h(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),yt=h(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":x.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(se.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(E.value===!0?" q-drawer--top-padding":""))),pt=h(()=>{const u=s.lang.rtl===!0?e.side:F.value;return[[_e,qt,void 0,{[u]:!0,mouse:!0}]]}),wt=h(()=>{const u=s.lang.rtl===!0?F.value:e.side;return[[_e,Oe,void 0,{[u]:!0,mouse:!0}]]}),xt=h(()=>{const u=s.lang.rtl===!0?F.value:e.side;return[[_e,Oe,void 0,{[u]:!0,mouse:!0,mouseAllDir:!0}]]});function ke(){Tt(f,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}S(f,u=>{u===!0?(m=x.value,x.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&m!==!1&&(x.value===!0?(O(0),G(0),Ce()):b(!1))}),S(()=>e.side,(u,w)=>{l.instances[w]===P&&(l.instances[w]=void 0,l[w].space=!1,l[w].offset=0),l.instances[u]=P,l[u].size=z.value,l[u].space=U.value,l[u].offset=re.value}),S(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ke()}),S(()=>e.behavior+e.breakpoint,ke),S(l.isContainer,u=>{x.value===!0&&d(u!==!0),u===!0&&ke()}),S(l.scrollbarWidth,()=>{O(x.value===!0?0:void 0)}),S(re,u=>{K("offset",u)}),S(U,u=>{a("onLayout",u),K("space",u)}),S(B,()=>{O()}),S(z,u=>{O(),ze(e.miniToOverlay,u)}),S(()=>e.miniToOverlay,u=>{ze(u,z.value)}),S(()=>s.lang.rtl,()=>{O()}),S(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(St(),l.animate())}),S($,u=>{a("miniState",u)});function O(u){u===void 0?te(()=>{u=x.value===!0?0:z.value,O(I.value*u)}):(l.isContainer.value===!0&&B.value===!0&&(f.value===!0||Math.abs(u)===z.value)&&(u+=I.value*l.scrollbarWidth.value),ie.value=u)}function G(u){de.value=u}function $e(u){const w=u===!0?"remove":l.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function St(){p!==null&&clearTimeout(p),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,p=setTimeout(()=>{p=null,le.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function qt(u){if(x.value!==!1)return;const w=z.value,M=ye(u.distance.x,0,w);if(u.isFinal===!0){M>=Math.min(75,w)===!0?b():(l.animate(),G(0),O(I.value*w)),j.value=!1;return}O((s.lang.rtl===!0?B.value!==!0:B.value)?Math.max(w-M,0):Math.min(0,M-w)),G(ye(M/w,0,1)),u.isFirst===!0&&(j.value=!0)}function Oe(u){if(x.value!==!0)return;const w=z.value,M=u.direction===e.side,he=(s.lang.rtl===!0?M!==!0:M)?ye(u.distance.x,0,w):0;if(u.isFinal===!0){Math.abs(he)<Math.min(75,w)===!0?(l.animate(),G(1),O(0)):L(),j.value=!1;return}O(I.value*he),G(ye(1-he/w,0,1)),u.isFirst===!0&&(j.value=!0)}function Ce(){d(!1),$e(!0)}function K(u,w){l.update(e.side,u,w)}function Tt(u,w){u.value!==w&&(u.value=w)}function ze(u,w){K("size",u===!0?e.miniWidth:w)}return l.instances[e.side]=P,ze(e.miniToOverlay,z.value),K("space",U.value),K("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&x.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),ee(()=>{a("onLayout",U.value),a("miniState",$.value),m=e.showIfAbove===!0;const u=()=>{(x.value===!0?q:y)(!1,!0)};if(l.totalWidth.value!==0){te(u);return}i=S(l.totalWidth,()=>{i(),i=void 0,x.value===!1&&e.showIfAbove===!0&&f.value===!1?b(!1):u()})}),A(()=>{i!==void 0&&i(),p!==null&&(clearTimeout(p),p=null),x.value===!0&&Ce(),l.instances[e.side]===P&&(l.instances[e.side]=void 0,K("size",0),K("offset",0),K("space",!1))}),()=>{const u=[];f.value===!0&&(e.noSwipeOpen===!1&&u.push(Qt(T("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),pt.value)),u.push(Fe("div",{ref:"backdrop",class:qe.value,style:Te.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&x.value===!0,()=>xt.value)));const w=$.value===!0&&o.mini!==void 0,M=[T("div",{...t,key:""+w,class:[bt.value,t.class]},w===!0?o.mini():ne(o.default))];return e.elevated===!0&&x.value===!0&&M.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(Fe("aside",{ref:"content",class:yt.value,style:ve.value},M,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>wt.value)),T("div",{class:"q-drawer-container"},u)}}}),Ca=D({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:o}){const{proxy:{$q:a}}=V(),t=J(oe,H);if(t===H)return console.error("QPage needs to be a deep child of QLayout"),H;if(J(rt,H)===H)return console.error("QPage needs to be child of QPageContainer"),H;const s=h(()=>{const d=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const v=t.isContainer.value===!0?t.containerHeight.value:a.screen.height;return e.styleFn(d,v)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-d+"px":a.screen.height===0?d!==0?`calc(100vh - ${d}px)`:"100vh":a.screen.height-d+"px"}}),r=h(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>T("main",{class:r.value,style:s.value},ne(o.default))}});const za={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function La(){const{props:e,proxy:{$q:o}}=V(),a=J(oe,H);if(a===H)return console.error("QPageSticky needs to be child of QLayout"),H;const t=h(()=>{const m=e.position;return{top:m.indexOf("top")!==-1,right:m.indexOf("right")!==-1,bottom:m.indexOf("bottom")!==-1,left:m.indexOf("left")!==-1,vertical:m==="top"||m==="bottom",horizontal:m==="left"||m==="right"}}),n=h(()=>a.header.offset),s=h(()=>a.right.offset),r=h(()=>a.footer.offset),d=h(()=>a.left.offset),v=h(()=>{let m=0,p=0;const i=t.value,f=o.lang.rtl===!0?-1:1;i.top===!0&&n.value!==0?p=`${n.value}px`:i.bottom===!0&&r.value!==0&&(p=`${-r.value}px`),i.left===!0&&d.value!==0?m=`${f*d.value}px`:i.right===!0&&s.value!==0&&(m=`${-f*s.value}px`);const $={transform:`translate(${m}, ${p})`};return e.offset&&($.margin=`${e.offset[1]}px ${e.offset[0]}px`),i.vertical===!0?(d.value!==0&&($[o.lang.rtl===!0?"right":"left"]=`${d.value}px`),s.value!==0&&($[o.lang.rtl===!0?"left":"right"]=`${s.value}px`)):i.horizontal===!0&&(n.value!==0&&($.top=`${n.value}px`),r.value!==0&&($.bottom=`${r.value}px`)),$}),c=h(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function l(m){const p=ne(m.default);return T("div",{class:c.value,style:v.value},e.expand===!0?p:[T("div",p)])}return{$layout:a,getStickyContent:l}}var _a=D({name:"QPageSticky",props:za,setup(e,{slots:o}){const{getStickyContent:a}=La();return()=>a(o)}}),Ha=D({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:a}}=V(),t=J(oe,H);if(t===H)return console.error("QPageContainer needs to be child of QLayout"),H;st(rt,!0);const n=h(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>T("div",{class:"q-page-container",style:n.value},ne(o.default))}});const{passive:Ze}=ae,Pa=["both","horizontal","vertical"];var Ea=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Pa.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:nt},emits:["scroll"],setup(e,{emit:o}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,s;S(()=>e.scrollTarget,()=>{v(),d()});function r(){t!==null&&t();const m=Math.max(0,Wt(n)),p=Mt(n),i={top:m-a.position.top,left:p-a.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const f=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";a.position={top:m,left:p},a.directionChanged=a.direction!==f,a.delta=i,a.directionChanged===!0&&(a.direction=f,a.inflectionPoint=a.position),o("scroll",{...a})}function d(){n=lt(s,e.scrollTarget),n.addEventListener("scroll",c,Ze),c(!0)}function v(){n!==void 0&&(n.removeEventListener("scroll",c,Ze),n=void 0)}function c(m){if(m===!0||e.debounce===0||e.debounce==="0")r();else if(t===null){const[p,i]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];t=()=>{i(p),t=null}}}const{proxy:l}=V();return S(()=>l.$q.lang.rtl,r),ee(()=>{s=l.$el.parentNode,d()}),A(()=>{t!==null&&t(),v()}),Object.assign(l,{trigger:c,getPosition:()=>a}),et}}),Qa=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:a}){const{proxy:{$q:t}}=V(),n=k(null),s=k(t.screen.height),r=k(e.container===!0?0:t.screen.width),d=k({position:0,direction:"down",inflectionPoint:0}),v=k(0),c=k(Je.value===!0?0:pe()),l=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=h(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),p=h(()=>c.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),i=h(()=>c.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function f(y){if(e.container===!0||document.qScrollPrevented!==!0){const b={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};d.value=b,e.onScroll!==void 0&&a("scroll",b)}}function $(y){const{height:b,width:L}=y;let _=!1;s.value!==b&&(_=!0,s.value=b,e.onScrollHeight!==void 0&&a("scrollHeight",b),x()),r.value!==L&&(_=!0,r.value=L),_===!0&&e.onResize!==void 0&&a("resize",y)}function z({height:y}){v.value!==y&&(v.value=y,x())}function x(){if(e.container===!0){const y=s.value>v.value?pe():0;c.value!==y&&(c.value=y)}}let g=null;const q={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:n,height:s,containerHeight:v,scrollbarWidth:c,totalWidth:h(()=>r.value+c.value),rows:h(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:me({size:0,offset:0,space:!1}),right:me({size:300,offset:0,space:!1}),footer:me({size:0,offset:0,space:!1}),left:me({size:300,offset:0,space:!1}),scroll:d,animate(){g!==null?clearTimeout(g):document.body.classList.add("q-body--layout-animate"),g=setTimeout(()=>{g=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,b,L){q[y][b]=L}};if(st(oe,q),pe()>0){let L=function(){y=null,b.classList.remove("hide-scrollbar")},_=function(){if(y===null){if(b.scrollHeight>t.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(L,300)},W=function(P){y!==null&&P==="remove"&&(clearTimeout(y),L()),window[`${P}EventListener`]("resize",_)},y=null;const b=document.body;S(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),tt(()=>{W("remove")})}return()=>{const y=Yt(o.default,[T(Ea,{onScroll:f}),T(Me,{onResize:$})]),b=T("div",{class:l.value,style:m.value,ref:e.container===!0?void 0:n,tabindex:-1},y);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:n},[T(Me,{onResize:z}),T("div",{class:"absolute-full",style:p.value},[T("div",{class:"scroll",style:i.value},[b])])]):b}}});const Z=[];function gt(e){Z[Z.length-1](e)}function Wa(e){ot.is.desktop===!0&&(Z.push(e),Z.length===1&&document.body.addEventListener("focusin",gt))}function Ma(e){const o=Z.indexOf(e);o!==-1&&(Z.splice(o,1),Z.length===0&&document.body.removeEventListener("focusin",gt))}function Ba(e){const o=document.createElement("textarea");o.value=e,o.contentEditable="true",o.style.position="fixed";const a=()=>{};Wa(a),document.body.appendChild(o),o.focus(),o.select();const t=document.execCommand("copy");return o.remove(),Ma(a),t}function Oa(e){return navigator.clipboard!==void 0?navigator.clipboard.writeText(e):new Promise((o,a)=>{const t=Ba(e);t?o(!0):a(t)})}function Aa(){return J(Bt)}var Da="/assets/2x2.6288bbe7.jpg";const Va=e=>(Gt("data-v-5487ed51"),e=e(),Kt(),e),Fa={class:"row items-start full-height"},Ra={class:"q-pt-lg q-px-lg text-center"},Ia={class:"row justify-center full-width"},Na=["src"],ja={class:"full-width"},Ga=Va(()=>R("div",{class:"text-weight-bold"},"Ziegfrid N. Gualberto",-1)),Ka={class:"full-width"},Ua={class:"q-ml-lg text-left"},Xa={class:"self-end row justify-around full-width q-mb-md"},Ya=Ot({name:"MainLayout",__name:"MainLayout",setup(e){const o=k(Da),a=k(!1),t=Aa(),n=[{label:"Home",icon:"fa-solid fa-house",to:"/"},{label:"Skills",icon:"fa-solid fa-code",to:"/skills"},{label:"Experience",icon:"fa-solid fa-briefcase",to:"/experience"}],s=k(!t.screen.lt.sm),r=k("fa-regular fa-copy");function d(){s.value=!s.value}const v=()=>{Oa("ziegfrid.gualberto@gmail.com"),a.value=!0,r.value="fa-solid fa-clipboard-check"},c=()=>{r.value="fa-regular fa-copy"};return(l,m)=>{const p=At("router-view");return ge(),Le(Qa,{view:"lHh Lpr lFf"},{default:Q(()=>[C(sa,{class:be(l.$q.dark.isActive?"bg-dark":"bg-white")},{default:Q(()=>[l.$q.screen.lt.md?(ge(),Le(ia,{key:0},{default:Q(()=>[C(X,{flat:"",dense:"",round:"",icon:"fa-solid fa-bars-staggered","aria-label":"Menu",class:be({"text-white":l.$q.dark.isActive,"text-black":!l.$q.dark.isActive}),onClick:d},null,8,["class"])]),_:1})):Dt("",!0)]),_:1},8,["class"]),C($a,{modelValue:s.value,"onUpdate:modelValue":m[1]||(m[1]=i=>s.value=i),style:{overflow:"hidden"}},{default:Q(()=>[R("div",Fa,[R("div",Ra,[R("div",Ia,[C(ua,{size:"56px",class:"q-mb-sm"},{default:Q(()=>[R("img",{src:o.value},null,8,Na)]),_:1})]),R("div",ja,[Ga,R("a",{onClick:v,class:"text-overline row no-wrap items-center cursor-pointer"},[Ve(" ziegfrid.gualberto@gmail.com "),C(Qe,{size:"15px",class:"email-clipboard-icon q-pl-sm",name:r.value},null,8,["name"])])]),C(qa,{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=i=>a.value=i),delay:2e3,class:"text-bold",style:{opacity:"0.6"},onHide:c},{default:Q(()=>[Ve(" Copied ")]),_:1},8,["modelValue"])]),R("div",Ka,[C(na,null,{default:Q(()=>[C(Vt,{appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutLeft"},{default:Q(()=>[(ge(),Ft(It,null,Rt(n,(i,f)=>C(Jt,{clickable:"",key:f,to:i.to,class:"btn--no-hover q-pa-md rounded-borders",exact:""},{default:Q(()=>[C(ea,{to:i.to},{default:Q(()=>[C(ta,{class:"text-h6 row items-center"},{default:Q(()=>[C(Qe,{name:i.icon,class:"q-ml-sm"},null,8,["name"]),R("span",Ua,jt(i.label),1)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1032,["to"])),64))]),_:1})]),_:1})]),R("div",Xa,[C(X,{flat:"",icon:"fa-brands fa-viber",href:"viber://add?number=639176523658",class:"btn--no-hover"}),C(X,{flat:"",icon:"fa-brands fa-whatsapp",target:"_blank",href:"https://wa.me/639176523658",class:"btn--no-hover"}),C(X,{flat:"",icon:"fa-solid fa-comment-sms",href:"sms://+639176523658",class:"btn--no-hover"}),C(X,{flat:"",icon:"fa-brands fa-linkedin",target:"_blank",href:"https://www.linkedin.com/in/ziegfrid-gualberto/",class:"btn--no-hover"}),C(X,{flat:"",icon:"fa-brands fa-github",target:"_blank",href:"https://github.com/zgualberto",class:"btn--no-hover"})])])]),_:1},8,["modelValue"]),C(Ha,null,{default:Q(()=>[C(Ca,{class:be(["q-py-lg page-container",{"q-px-md":!l.$q.screen.lt.sm,"q-px-sm":l.$q.screen.lt.sm}])},{default:Q(()=>[C(p,null,{default:Q(({Component:i})=>[C(it,{appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutLeft"},{default:Q(()=>[(ge(),Le(Nt(i)))]),_:2},1024)]),_:1})]),_:1},8,["class"]),C(_a,{position:"bottom-right",offset:[18,18]},{default:Q(()=>[C(X,{fab:"",icon:"fa-solid fa-circle-half-stroke",color:l.$q.dark.isActive?"white":"dark",onClick:l.$q.dark.toggle,class:be(l.$q.dark.isActive?"text-black":"text-white")},null,8,["color","onClick","class"])]),_:1})]),_:1})]),_:1})}}});var ro=la(Ya,[["__scopeId","data-v-5487ed51"]]);export{ro as default};
