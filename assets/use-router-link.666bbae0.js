import{a,g as D}from"./index.6c0f0c10.js";function K(e){return e.appContext.config.globalProperties.$router!==void 0}function E(e){return e.isUnmounted===!0||e.isDeactivated===!0}function L(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function P(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function j(e,r){for(const o in r){const t=r[o],u=e[o];if(typeof t=="string"){if(t!==u)return!1}else if(Array.isArray(u)===!1||u.length!==t.length||t.some((g,d)=>g!==u[d]))return!1}return!0}function $(e,r){return Array.isArray(r)===!0?e.length===r.length&&e.every((o,t)=>o===r[t]):e.length===1&&e[0]===r}function q(e,r){return Array.isArray(e)===!0?$(e,r):Array.isArray(r)===!0?$(r,e):e===r}function B(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const o in e)if(q(e[o],r[o])===!1)return!1;return!0}const M={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},H={...M,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function T({fallbackTag:e,useDisableForRouterLinkProps:r=!0}={}){const o=D(),{props:t,proxy:u,emit:g}=o,d=K(o),h=a(()=>t.disable!==!0&&t.href!==void 0),C=r===!0?a(()=>d===!0&&t.disable!==!0&&h.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""):a(()=>d===!0&&h.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),f=a(()=>C.value===!0?A(t.to):null),i=a(()=>f.value!==null),k=a(()=>h.value===!0||i.value===!0),O=a(()=>t.type==="a"||k.value===!0?"a":t.tag||e||"div"),S=a(()=>h.value===!0?{href:t.href,target:t.target}:i.value===!0?{href:f.value.href,target:t.target}:{}),m=a(()=>{if(i.value===!1)return-1;const{matched:n}=f.value,{length:s}=n,l=n[s-1];if(l===void 0)return-1;const c=u.$route.matched;if(c.length===0)return-1;const v=c.findIndex(P.bind(null,l));if(v!==-1)return v;const R=L(n[s-2]);return s>1&&L(l)===R&&c[c.length-1].path!==R?c.findIndex(P.bind(null,n[s-2])):v}),p=a(()=>i.value===!0&&m.value!==-1&&j(u.$route.params,f.value.params)),y=a(()=>p.value===!0&&m.value===u.$route.matched.length-1&&B(u.$route.params,f.value.params)),I=a(()=>i.value===!0?y.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":p.value===!0?` ${t.activeClass}`:"":"");function A(n){try{return u.$router.resolve(n)}catch{}return null}function x(n,{returnRouterError:s,to:l=t.to,replace:c=t.replace}={}){if(t.disable===!0)return n.preventDefault(),Promise.resolve(!1);if(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey||n.button!==void 0&&n.button!==0||t.target==="_blank")return Promise.resolve(!1);n.preventDefault();const v=u.$router[c===!0?"replace":"push"](l);return s===!0?v:v.then(()=>{}).catch(()=>{})}function b(n){if(i.value===!0){const s=l=>x(n,l);g("click",n,s),n.defaultPrevented!==!0&&s()}else g("click",n)}return{hasRouterLink:i,hasHrefLink:h,hasLink:k,linkTag:O,resolvedLink:f,linkIsActive:p,linkIsExactActive:y,linkClass:I,linkAttrs:S,getLink:A,navigateToRouterLink:x,navigateOnClick:b}}export{T as a,H as b,K as c,M as u,E as v};