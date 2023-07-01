(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function A(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function Xe(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Se(t){return t()}function re(){return Object.create(null)}function mt(t){t.forEach(Se)}function Yt(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Pt;function Je(t,e){return Pt||(Pt=document.createElement("a")),Pt.href=e,t===Pt.href}function Ze(t){return Object.keys(t).length===0}function Gt(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t){let e;return Gt(t,n=>e=n)(),e}function x(t,e,n){t.$$.on_destroy.push(Gt(e,n))}function Wt(t,e,n,o){if(t){const r=Ee(t,e,n,o);return t[0](r)}}function Ee(t,e,n,o){return t[1]&&o?H(n.ctx.slice(),t[1](o(e))):n.ctx}function Vt(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],i=Math.max(e.dirty.length,r.length);for(let a=0;a<i;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function Qt(t,e,n,o,r,s){if(r){const i=Ee(e,n,o,s);t.p(i,r)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}function Ot(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Nt(t,e){const n={};e=new Set(e);for(const o in t)!e.has(o)&&o[0]!=="$"&&(n[o]=t[o]);return n}function b(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function tn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function T(){return G(" ")}function kt(){return G("")}function en(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function P(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Y(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)e[o]==null?t.removeAttribute(o):o==="style"?t.style.cssText=e[o]:o==="__value"?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:P(t,o,e[o])}function nn(t){return Array.from(t.childNodes)}function on(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function rn(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}function se(t,e){return new t(e)}let vt;function Q(t){vt=t}function pt(){if(!vt)throw new Error("Function called outside component initialization");return vt}function sn(t){pt().$$.on_mount.push(t)}function cn(t){pt().$$.on_destroy.push(t)}function ln(){const t=pt();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=rn(e,n,{cancelable:o});return r.slice().forEach(i=>{i.call(t,s)}),!s.defaultPrevented}return!0}}function yt(t,e){return pt().$$.context.set(t,e),e}function tt(t){return pt().$$.context.get(t)}const at=[],ie=[],It=[],ce=[],Re=Promise.resolve();let Ht=!1;function Pe(){Ht||(Ht=!0,Re.then(Jt))}function an(){return Pe(),Re}function zt(t){It.push(t)}const Ut=new Set;let ct=0;function Jt(){if(ct!==0)return;const t=vt;do{try{for(;ct<at.length;){const e=at[ct];ct++,Q(e),un(e.$$)}}catch(e){throw at.length=0,ct=0,e}for(Q(null),at.length=0,ct=0;ie.length;)ie.pop()();for(let e=0;e<It.length;e+=1){const n=It[e];Ut.has(n)||(Ut.add(n),n())}It.length=0}while(at.length);for(;ce.length;)ce.pop()();Ht=!1,Ut.clear(),Q(t)}function un(t){if(t.fragment!==null){t.update(),mt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(zt)}}const Lt=new Set;let nt;function Tt(){nt={r:0,c:[],p:nt}}function $t(){nt.r||mt(nt.c),nt=nt.p}function L(t,e){t&&t.i&&(Lt.delete(t),t.i(e))}function M(t,e,n,o){if(t&&t.o){if(Lt.has(t))return;Lt.add(t),nt.c.push(()=>{Lt.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function fn(t,e){const n=e.token={};function o(r,s,i,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;i!==void 0&&(c=c.slice(),c[i]=a);const l=r&&(e.current=r)(c);let f=!1;e.block&&(e.blocks?e.blocks.forEach((u,d)=>{d!==s&&u&&(Tt(),M(u,1,1,()=>{e.blocks[d]===u&&(e.blocks[d]=null)}),$t())}):e.block.d(1),l.c(),L(l,1),l.m(e.mount(),e.anchor),f=!0),e.block=l,e.blocks&&(e.blocks[s]=l),f&&Jt()}if(Xe(t)){const r=pt();if(t.then(s=>{Q(r),o(e.then,1,e.value,s),Q(null)},s=>{if(Q(r),o(e.catch,2,e.error,s),Q(null),!e.hasCatch)throw s}),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}}function dn(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}function dt(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],a=e[s];if(a){for(const c in i)c in a||(o[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);t[s]=a}else for(const c in i)r[c]=1}for(const i in o)i in n||(n[i]=void 0);return n}function le(t){return typeof t=="object"&&t!==null?t:{}}function D(t){t&&t.c()}function B(t,e,n,o){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),o||zt(()=>{const i=t.$$.on_mount.map(Se).filter(Yt);t.$$.on_destroy?t.$$.on_destroy.push(...i):mt(i),t.$$.on_mount=[]}),s.forEach(zt)}function j(t,e){const n=t.$$;n.fragment!==null&&(mt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function hn(t,e){t.$$.dirty[0]===-1&&(at.push(t),Pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _t(t,e,n,o,r,s,i,a=[-1]){const c=vt;Q(t);const l=t.$$={fragment:null,ctx:[],props:s,update:A,not_equal:r,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:re(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};i&&i(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,d,...g)=>{const y=g.length?g[0]:d;return l.ctx&&r(l.ctx[u],l.ctx[u]=y)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](y),f&&hn(t,u)),d}):[],l.update(),f=!0,mt(l.before_update),l.fragment=o?o(l.ctx):!1,e.target){if(e.hydrate){const u=nn(e.target);l.fragment&&l.fragment.l(u),u.forEach(_)}else l.fragment&&l.fragment.c();e.intro&&L(t.$$.fragment),B(t,e.target,e.anchor,e.customElement),Jt()}Q(c)}class gt{$destroy(){j(this,1),this.$destroy=A}$on(e,n){if(!Yt(n))return A;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!Ze(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function mn(t){let e;return{c(){e=p("article"),e.innerHTML=`<p><span>What is this for?:</span><br/>
    This is a project so it becomes easier to download plugins for
    <a href="https://github.com/ProjectBlackPearl/pbpl">PBP (Project Black Pearl)</a><br/><br/> 
    <span>How can i add my project in?:</span><br/>

    Make a new issue on the the
    <a href="https://github.com/pbp-store/plugins-list/">plugins-list</a>
    repo, but to it be accepted it needs to meet some criteria<br/>
    - Needs to be in any language that can be compiled (Example: Dart, Rust, etc...)<br/>
    - Needs to be <abbr title="Free and Open Source">FOSS</abbr><br/>
    After that i&#39;ll add to the website<br/><br/></p>`,P(e,"class","about")},m(n,o){v(n,e,o)},p:A,i:A,o:A,d(n){n&&_(e)}}}class pn extends gt{constructor(e){super(),_t(this,e,null,mn,rt,{})}}function ae(t,e,n){const o=t.slice();return o[2]=e[n],o}function _n(t){return{c:A,m:A,p:A,d:A}}function gn(t){let e;function n(s,i){return s[1].plugins.length<=0?yn:bn}let r=n(t)(t);return{c(){r.c(),e=kt()},m(s,i){r.m(s,i),v(s,e,i)},p(s,i){r.p(s,i)},d(s){r.d(s),s&&_(e)}}}function bn(t){let e,n=t[1].plugins,o=[];for(let r=0;r<n.length;r+=1)o[r]=ue(ae(t,n,r));return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=kt()},m(r,s){for(let i=0;i<o.length;i+=1)o[i].m(r,s);v(r,e,s)},p(r,s){if(s&1){n=r[1].plugins;let i;for(i=0;i<n.length;i+=1){const a=ae(r,n,i);o[i]?o[i].p(a,s):(o[i]=ue(a),o[i].c(),o[i].m(e.parentNode,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(r){tn(o,r),r&&_(e)}}}function yn(t){let e;return{c(){e=p("div"),e.innerHTML='<article><span class="Nothing"><i class="fa-solid fa-dog"></i> Wow! such nothing!</span></article>',P(e,"class","grid-container")},m(n,o){v(n,e,o)},p:A,d(n){n&&_(e)}}}function ue(t){let e,n,o=t[2].name+"",r,s,i,a=t[2].author+"",c,l,f,u,d,g;return{c(){e=p("article"),n=p("span"),r=G(o),s=T(),i=p("span"),c=G(a),l=T(),f=p("a"),u=p("i"),d=G(" Github"),g=T(),P(n,"id","Name"),P(i,"id","Author"),P(u,"class","fa-brands fa-github-alt"),P(f,"href",t[2].ghUrl),P(e,"class","flex-container")},m(y,w){v(y,e,w),b(e,n),b(n,r),b(e,s),b(e,i),b(i,c),b(e,l),b(e,f),b(f,u),b(f,d),b(e,g)},p:A,d(y){y&&_(e)}}}function vn(t){let e;return{c(){e=p("div"),e.innerHTML="<article><span>Loading...</span></article>",P(e,"class","grid-container")},m(n,o){v(n,e,o)},p:A,d(n){n&&_(e)}}}function kn(t){let e,n,o={ctx:t,current:null,token:null,hasCatch:!1,pending:vn,then:gn,catch:_n,value:1};return fn(t[0],o),{c(){e=p("div"),n=p("div"),o.block.c(),P(n,"class","container"),P(e,"class","store")},m(r,s){v(r,e,s),b(e,n),o.block.m(n,o.anchor=null),o.mount=()=>n,o.anchor=null},p(r,[s]){t=r,dn(o,t,s)},i:A,o:A,d(r){r&&_(e),o.block.d(),o.token=null,o=null}}}async function Sn(t){return await(await fetch(t)).json()}function En(t){return[Sn("https://raw.githubusercontent.com/PBP-Store/plugins-list/main/plugins.json")]}class Rn extends gt{constructor(e){super(),_t(this,e,En,kn,rt,{})}}const fe=["You wan't plugins? We got them","Imagine BD plugin store, but worse","Idk what to do","I am inside your walls","undefined","nil",'console.log("Hello World")',"Traceback (most recent call last):","Null","Blazingly fast \u{1F680}\u{1F680}","Made on Earth","PROBE (PROject Black pEarl)","Svelte is love, Svelte is life","Hollistic Approach \u{1F331}"];const de=t=>typeof t>"u",we=t=>typeof t=="function",Ie=t=>typeof t=="number";function Pn(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Le(){let t=0;return()=>t++}function wn(){return Math.random().toString(36).substring(2)}const et=typeof window>"u";function Ae(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const qt=(t,e)=>t?{}:{style:e},ut=t=>({"aria-hidden":"true",...qt(t,"display:none;")}),lt=[];function In(t,e){return{subscribe:K(t,e).subscribe}}function K(t,e=A){let n;const o=new Set;function r(a){if(rt(t,a)&&(t=a,n)){const c=!lt.length;for(const l of o)l[1](),lt.push(l,t);if(c){for(let l=0;l<lt.length;l+=2)lt[l][0](lt[l+1]);lt.length=0}}}function s(a){r(a(t))}function i(a,c=A){const l=[a,c];return o.add(l),o.size===1&&(n=e(r)||A),a(t),()=>{o.delete(l),o.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:i}}function Ln(t,e,n){const o=!Array.isArray(t),r=o?[t]:t,s=e.length<2;return In(n,i=>{let a=!1;const c=[];let l=0,f=A;const u=()=>{if(l)return;f();const g=e(o?c[0]:c,i);s?i(g):f=Yt(g)?g:A},d=r.map((g,y)=>Gt(g,w=>{c[y]=w,l&=~(1<<y),a&&u()},()=>{l|=1<<y}));return a=!0,u(),function(){mt(d),f()}})}const St=t=>`@@svnav-ctx__${t}`,xt=St("LOCATION"),ht=St("ROUTER"),Oe=St("ROUTE"),An=St("ROUTE_PARAMS"),On=St("FOCUS_ELEM"),Ne=/^:(.+)/,bt=(t,e,n)=>t.substr(e,n),Kt=(t,e)=>bt(t,0,e.length)===e,Nn=t=>t==="",Mn=t=>Ne.test(t),Me=t=>t[0]==="*",Tn=t=>t.replace(/\*.*$/,""),Te=t=>t.replace(/(^\/+|\/+$)/g,"");function W(t,e=!1){const n=Te(t).split("/");return e?n.filter(Boolean):n}const Ft=(t,e)=>t+(e?`?${e}`:""),Zt=t=>`/${Te(t)}`;function Et(...t){const e=o=>W(o,!0).join("/"),n=t.map(e).join("/");return Zt(n)}const te=1,Ct=2,ot=3,$n=4,$e=5,Cn=6,Ce=7,Un=8,Fn=9,Ue=10,Fe=11,Bn={[te]:"Link",[Ct]:"Route",[ot]:"Router",[$n]:"useFocus",[$e]:"useLocation",[Cn]:"useMatch",[Ce]:"useNavigate",[Un]:"useParams",[Fn]:"useResolvable",[Ue]:"useResolve",[Fe]:"navigate"},ee=t=>Bn[t];function jn(t,e){let n;return t===Ct?n=e.path?`path="${e.path}"`:"default":t===te?n=`to="${e.to}"`:t===ot&&(n=`basepath="${e.basepath||""}"`),`<${ee(t)} ${n||""} />`}function Dn(t,e,n,o){const r=n&&jn(o||t,n),s=r?`

Occurred in: ${r}`:"",i=ee(t),a=we(e)?e(i):e;return`<${i}> ${a}${s}`}const Be=t=>(...e)=>t(Dn(...e)),je=Be(t=>{throw new Error(t)}),Mt=Be(console.warn),he=4,Hn=3,zn=2,qn=1,xn=1;function Kn(t,e){const n=t.default?0:W(t.fullPath).reduce((o,r)=>{let s=o;return s+=he,Nn(r)?s+=xn:Mn(r)?s+=zn:Me(r)?s-=he+qn:s+=Hn,s},0);return{route:t,score:n,index:e}}function Yn(t){return t.map(Kn).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function De(t,e){let n,o;const[r]=e.split("?"),s=W(r),i=s[0]==="",a=Yn(t);for(let c=0,l=a.length;c<l;c++){const{route:f}=a[c];let u=!1;const d={},g=O=>({...f,params:d,uri:O});if(f.default){o=g(e);continue}const y=W(f.fullPath),w=Math.max(s.length,y.length);let R=0;for(;R<w;R++){const O=y[R],N=s[R];if(!de(O)&&Me(O)){const I=O==="*"?"*":O.slice(1);d[I]=s.slice(R).map(decodeURIComponent).join("/");break}if(de(N)){u=!0;break}const F=Ne.exec(O);if(F&&!i){const I=decodeURIComponent(N);d[F[1]]=I}else if(O!==N){u=!0;break}}if(!u){n=g(Et(...s.slice(0,R)));break}}return n||o||null}function He(t,e){return De([t],e)}function Gn(t,e){if(Kt(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=W(n),i=W(r);if(s[0]==="")return Ft(r,o);if(!Kt(s[0],".")){const l=i.concat(s).join("/");return Ft((r==="/"?"":"/")+l,o)}const a=i.concat(s),c=[];return a.forEach(l=>{l===".."?c.pop():l!=="."&&c.push(l)}),Ft(`/${c.join("/")}`,o)}function me(t,e){const{pathname:n,hash:o="",search:r="",state:s}=t,i=W(e,!0),a=W(n,!0);for(;i.length;)i[0]!==a[0]&&je(ot,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),i.shift(),a.shift();return{pathname:Et(...a),hash:o,search:r,state:s}}const pe=t=>t.length===1?"":t,ne=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),o=e!==-1,r=n!==-1,s=r?pe(bt(t,n)):"",i=r?bt(t,0,n):t,a=o?pe(bt(i,e)):"";return{pathname:(o?bt(i,0,e):i)||"/",search:a,hash:s}},Wn=t=>{const{pathname:e,search:n,hash:o}=t;return e+n+o};function Vn(t,e,n){return Et(n,Gn(t,e))}function Qn(t,e){const n=Zt(Tn(t)),o=W(n,!0),r=W(e,!0).slice(0,o.length),s=He({fullPath:n},Et(...r));return s&&s.uri}const Bt="POP",Xn="PUSH",Jn="REPLACE";function jt(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Zn(t){let e=[],n=jt(t),o=Bt;const r=(s=e)=>s.forEach(i=>i({location:n,action:o}));return{get location(){return n},listen(s){e.push(s);const i=()=>{n=jt(t),o=Bt,r([s])};r([s]);const a=Ae(t,"popstate",i);return()=>{a(),e=e.filter(c=>c!==s)}},navigate(s,i){const{state:a={},replace:c=!1}=i||{};if(o=c?Jn:Xn,Ie(s))i&&Mt(Fe,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=Bt,t.history.go(s);else{const l={...a,_key:wn()};try{t.history[c?"replaceState":"pushState"](l,"",s)}catch{t.location[c?"replace":"assign"](s)}}n=jt(t),r()}}}function Dt(t,e){return{...ne(e),state:t}}function to(t="/"){let e=0,n=[Dt(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(o,r,s){e++,n=n.slice(0,e),n.push(Dt(o,s))},replaceState(o,r,s){n[e]=Dt(o,s)},go(o){const r=e+o;r<0||r>n.length-1||(e=r)}}}}const eo=!!(!et&&window.document&&window.document.createElement),no=!et&&window.location.origin==="null",oo=Zn(eo&&!no?window:to());let V=null,ze=!0;function ro(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<n.length;o++){const r=n[o],s=Number(r.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}function so(t){(!V||t.level>V.level||t.level===V.level&&ro(t.routerId,V.routerId))&&(V=t)}function io(){V=null}function co(){ze=!1}function _e(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=Ae(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function lo(t,e){return Number(t.dataset.svnavRouteEnd)===e}function ao(t){return/^H[1-6]$/i.test(t.tagName)}function ge(t,e=document){return e.querySelector(t)}function uo(t){let n=ge(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!lo(n,t);){if(ao(n))return n;const o=ge("h1,h2,h3,h4,h5,h6",n);if(o)return o;n=n.nextElementSibling}return null}function fo(t){Promise.resolve(ft(t.focusElement)).then(e=>{const n=e||uo(t.id);n||Mt(ot,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Ct),!_e(n)&&_e(document.documentElement)})}const ho=(t,e,n)=>(o,r)=>an().then(()=>{if(!V||ze){co();return}if(o&&fo(V.route),t.announcements&&r){const{path:s,fullPath:i,meta:a,params:c,uri:l}=V.route,f=t.createAnnouncement({path:s,fullPath:i,meta:a,params:c,uri:l},ft(n));Promise.resolve(f).then(u=>{e.set(u)})}io()}),be="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function mo(t){let e,n,o=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},qt(t[6],be)],r={};for(let s=0;s<o.length;s+=1)r=H(r,o[s]);return{c(){e=p("div"),n=G(t[0]),Y(e,r)},m(s,i){v(s,e,i),b(e,n)},p(s,i){i[0]&1&&on(n,s[0]),Y(e,r=dt(o,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},qt(s[6],be)]))},d(s){s&&_(e)}}}function po(t){let e,n,o,r,s,i=[ut(t[6]),{"data-svnav-router":t[3]}],a={};for(let u=0;u<i.length;u+=1)a=H(a,i[u]);const c=t[22].default,l=Wt(c,t,t[21],null);let f=t[2]&&t[4]&&t[1].announcements&&mo(t);return{c(){e=p("div"),n=T(),l&&l.c(),o=T(),f&&f.c(),r=kt(),Y(e,a)},m(u,d){v(u,e,d),v(u,n,d),l&&l.m(u,d),v(u,o,d),f&&f.m(u,d),v(u,r,d),s=!0},p(u,d){Y(e,a=dt(i,[ut(u[6]),{"data-svnav-router":u[3]}])),l&&l.p&&(!s||d[0]&2097152)&&Qt(l,c,u,u[21],s?Vt(c,u[21],d,null):Xt(u[21]),null),u[2]&&u[4]&&u[1].announcements&&f.p(u,d)},i(u){s||(L(l,u),s=!0)},o(u){M(l,u),s=!1},d(u){u&&_(e),u&&_(n),l&&l.d(u),u&&_(o),f&&f.d(u),u&&_(r)}}}const _o=Le(),ye="/";function go(t,e,n){let o,r,s,i,a,{$$slots:c={},$$scope:l}=e,{basepath:f=ye}=e,{url:u=null}=e,{history:d=oo}=e,{primary:g=!0}=e,{a11y:y={}}=e,{disableInlineStyles:w=!1}=e;const R={createAnnouncement:m=>`Navigated to ${m.uri}`,announcements:!0,...y},O=f,N=Zt(f),F=tt(xt),I=tt(ht),$=!F,U=_o(),k=g&&!(I&&!I.manageFocus),C=K("");x(t,C,m=>n(0,a=m));const z=I?I.disableInlineStyles:w,h=K([]);x(t,h,m=>n(20,i=m));const E=K(null);x(t,E,m=>n(18,r=m));let S=!1;const X=$?0:I.level+1,J=$?K((()=>me(et?ne(u):d.location,N))()):F;x(t,J,m=>n(17,o=m));const it=K(o);x(t,it,m=>n(19,s=m));const We=ho(R,C,J),oe=m=>q=>q.filter(Z=>Z.id!==m);function Ve(m){if(et){if(S)return;const q=He(m,o.pathname);if(q)return S=!0,q}else h.update(q=>{const Z=oe(m.id)(q);return Z.push(m),Z})}function Qe(m){h.update(oe(m))}return!$&&f!==ye&&Mt(ot,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),$&&(sn(()=>d.listen(q=>{const Z=me(q.location,N);it.set(o),J.set(Z)})),yt(xt,J)),yt(ht,{activeRoute:E,registerRoute:Ve,unregisterRoute:Qe,manageFocus:k,level:X,id:U,history:$?d:I.history,basepath:$?N:I.basepath,disableInlineStyles:z}),t.$$set=m=>{"basepath"in m&&n(11,f=m.basepath),"url"in m&&n(12,u=m.url),"history"in m&&n(13,d=m.history),"primary"in m&&n(14,g=m.primary),"a11y"in m&&n(15,y=m.a11y),"disableInlineStyles"in m&&n(16,w=m.disableInlineStyles),"$$scope"in m&&n(21,l=m.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&f!==O&&Mt(ot,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const m=De(i,o.pathname);E.set(m)}if(t.$$.dirty[0]&655360&&$){const m=!!o.hash,q=!m&&k,Z=!m||o.pathname!==s.pathname;We(q,Z)}t.$$.dirty[0]&262144&&k&&r&&r.primary&&so({level:X,routerId:U,route:r})},[a,R,$,U,k,C,z,h,E,J,it,f,u,d,g,y,w,o,r,s,i,l,c]}class bo extends gt{constructor(e){super(),_t(this,e,go,po,rt,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}const qe=bo;function Rt(t,e,n=ht,o=ot){tt(n)||je(t,s=>`You cannot use ${s} outside of a ${ee(o)}.`,e)}const yo=t=>{const{subscribe:e}=tt(t);return{subscribe:e}};function xe(){return Rt($e),yo(xt)}function Ke(){const{history:t}=tt(ht);return t}function Ye(){const t=tt(Oe);return t?Ln(t,e=>e.base):K("/")}function Ge(){Rt(Ue);const t=Ye(),{basepath:e}=tt(ht);return o=>Vn(o,ft(t),e)}function vo(){Rt(Ce);const t=Ge(),{navigate:e}=Ke();return(o,r)=>{const s=Ie(o)?o:t(o);return e(s,r)}}const ko=t=>({params:t&16,location:t&8}),ve=t=>({params:et?ft(t[10]):t[4],location:t[3],navigate:t[11]});function ke(t){let e,n;return e=new qe({props:{primary:t[1],$$slots:{default:[Ro]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(o,r){B(e,o,r),n=!0},p(o,r){const s={};r&2&&(s.primary=o[1]),r&528409&&(s.$$scope={dirty:r,ctx:o}),e.$set(s)},i(o){n||(L(e.$$.fragment,o),n=!0)},o(o){M(e.$$.fragment,o),n=!1},d(o){j(e,o)}}}function So(t){let e;const n=t[18].default,o=Wt(n,t,t[19],ve);return{c(){o&&o.c()},m(r,s){o&&o.m(r,s),e=!0},p(r,s){o&&o.p&&(!e||s&524312)&&Qt(o,n,r,r[19],e?Vt(n,r[19],s,ko):Xt(r[19]),ve)},i(r){e||(L(o,r),e=!0)},o(r){M(o,r),e=!1},d(r){o&&o.d(r)}}}function Eo(t){let e,n,o;const r=[{location:t[3]},{navigate:t[11]},et?ft(t[10]):t[4],t[12]];var s=t[0];function i(a){let c={};for(let l=0;l<r.length;l+=1)c=H(c,r[l]);return{props:c}}return s&&(e=se(s,i())),{c(){e&&D(e.$$.fragment),n=kt()},m(a,c){e&&B(e,a,c),v(a,n,c),o=!0},p(a,c){const l=c&7192?dt(r,[c&8&&{location:a[3]},c&2048&&{navigate:a[11]},c&1040&&le(et?ft(a[10]):a[4]),c&4096&&le(a[12])]):{};if(s!==(s=a[0])){if(e){Tt();const f=e;M(f.$$.fragment,1,0,()=>{j(f,1)}),$t()}s?(e=se(s,i()),D(e.$$.fragment),L(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else s&&e.$set(l)},i(a){o||(e&&L(e.$$.fragment,a),o=!0)},o(a){e&&M(e.$$.fragment,a),o=!1},d(a){a&&_(n),e&&j(e,a)}}}function Ro(t){let e,n,o,r;const s=[Eo,So],i=[];function a(c,l){return c[0]!==null?0:1}return e=a(t),n=i[e]=s[e](t),{c(){n.c(),o=kt()},m(c,l){i[e].m(c,l),v(c,o,l),r=!0},p(c,l){let f=e;e=a(c),e===f?i[e].p(c,l):(Tt(),M(i[f],1,1,()=>{i[f]=null}),$t(),n=i[e],n?n.p(c,l):(n=i[e]=s[e](c),n.c()),L(n,1),n.m(o.parentNode,o))},i(c){r||(L(n),r=!0)},o(c){M(n),r=!1},d(c){i[e].d(c),c&&_(o)}}}function Po(t){let e,n,o,r,s,i=[ut(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let u=0;u<i.length;u+=1)a=H(a,i[u]);let c=t[2]&&ke(t),l=[ut(t[7]),{"data-svnav-route-end":t[5]}],f={};for(let u=0;u<l.length;u+=1)f=H(f,l[u]);return{c(){e=p("div"),n=T(),c&&c.c(),o=T(),r=p("div"),Y(e,a),Y(r,f)},m(u,d){v(u,e,d),v(u,n,d),c&&c.m(u,d),v(u,o,d),v(u,r,d),s=!0},p(u,[d]){Y(e,a=dt(i,[ut(u[7]),{"data-svnav-route-start":u[5]}])),u[2]?c?(c.p(u,d),d&4&&L(c,1)):(c=ke(u),c.c(),L(c,1),c.m(o.parentNode,o)):c&&(Tt(),M(c,1,1,()=>{c=null}),$t()),Y(r,f=dt(l,[ut(u[7]),{"data-svnav-route-end":u[5]}]))},i(u){s||(L(c),s=!0)},o(u){M(c),s=!1},d(u){u&&_(e),u&&_(n),c&&c.d(u),u&&_(o),u&&_(r)}}}const wo=Le();function Io(t,e,n){let o;const r=["path","component","meta","primary"];let s=Nt(e,r),i,a,c,l,{$$slots:f={},$$scope:u}=e,{path:d=""}=e,{component:g=null}=e,{meta:y={}}=e,{primary:w=!0}=e;Rt(Ct,e);const R=wo(),{registerRoute:O,unregisterRoute:N,activeRoute:F,disableInlineStyles:I}=tt(ht);x(t,F,S=>n(16,i=S));const $=Ye();x(t,$,S=>n(17,c=S));const U=xe();x(t,U,S=>n(3,a=S));const k=K(null);let C;const z=K(),h=K({});x(t,h,S=>n(4,l=S)),yt(Oe,z),yt(An,h),yt(On,k);const E=vo();return et||cn(()=>N(R)),t.$$set=S=>{n(24,e=H(H({},e),Ot(S))),n(12,s=Nt(e,r)),"path"in S&&n(13,d=S.path),"component"in S&&n(0,g=S.component),"meta"in S&&n(14,y=S.meta),"primary"in S&&n(1,w=S.primary),"$$scope"in S&&n(19,u=S.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const S=d==="",X=Et(c,d),st={id:R,path:d,meta:y,default:S,fullPath:S?"":X,base:S?c:Qn(X,a.pathname),primary:w,focusElement:k};z.set(st),n(15,C=O(st))}if(t.$$.dirty&98304&&n(2,o=!!(C||i&&i.id===R)),t.$$.dirty&98308&&o){const{params:S}=C||i;h.set(S)}},e=Ot(e),[g,w,o,a,l,R,F,I,$,U,h,E,s,d,y,C,i,c,f,u]}class Lo extends gt{constructor(e){super(),_t(this,e,Io,Po,rt,{path:13,component:0,meta:14,primary:1})}}const wt=Lo;function Ao(t){let e,n,o,r;const s=t[13].default,i=Wt(s,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],c={};for(let l=0;l<a.length;l+=1)c=H(c,a[l]);return{c(){e=p("a"),i&&i.c(),Y(e,c)},m(l,f){v(l,e,f),i&&i.m(e,null),n=!0,o||(r=en(e,"click",t[4]),o=!0)},p(l,[f]){i&&i.p&&(!n||f&4096)&&Qt(i,s,l,l[12],n?Vt(s,l[12],f,null):Xt(l[12]),null),Y(e,c=dt(a,[(!n||f&1)&&{href:l[0]},f&4&&l[2],f&2&&l[1]]))},i(l){n||(L(i,l),n=!0)},o(l){M(i,l),n=!1},d(l){l&&_(e),i&&i.d(l),o=!1,r()}}}function Oo(t,e,n){let o,r,s,i,a,c;const l=["to","replace","state","getProps"];let f=Nt(e,l),u,{$$slots:d={},$$scope:g}=e,{to:y}=e,{replace:w=!1}=e,{state:R={}}=e,{getProps:O=null}=e;Rt(te,e);const N=xe();x(t,N,k=>n(11,u=k));const F=ln(),I=Ge(),{navigate:$}=Ke();function U(k){F("click",k),Pn(k)&&(k.preventDefault(),$(o,{state:R,replace:i||w}))}return t.$$set=k=>{n(19,e=H(H({},e),Ot(k))),n(18,f=Nt(e,l)),"to"in k&&n(5,y=k.to),"replace"in k&&n(6,w=k.replace),"state"in k&&n(7,R=k.state),"getProps"in k&&n(8,O=k.getProps),"$$scope"in k&&n(12,g=k.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,o=I(y,u)),t.$$.dirty&2049&&n(10,r=Kt(u.pathname,o)),t.$$.dirty&2049&&n(9,s=o===u.pathname),t.$$.dirty&2049&&(i=ne(o)===Wn(u)),t.$$.dirty&512&&n(2,a=s?{"aria-current":"page"}:{}),n(1,c=(()=>{if(we(O)){const k=O({location:u,href:o,isPartiallyCurrent:r,isCurrent:s});return{...f,...k}}return f})())},e=Ot(e),[o,c,a,N,U,y,w,R,O,s,r,u,g,d]}class No extends gt{constructor(e){super(),_t(this,e,Oo,Ao,rt,{to:5,replace:6,state:7,getProps:8})}}const At=No;function Mo(t){let e;return{c(){e=G("Home")},m(n,o){v(n,e,o)},d(n){n&&_(e)}}}function To(t){let e;return{c(){e=G("Plugins")},m(n,o){v(n,e,o)},d(n){n&&_(e)}}}function $o(t){let e;return{c(){e=G("About")},m(n,o){v(n,e,o)},d(n){n&&_(e)}}}function Co(t){let e;return{c(){e=G("Let's Start")},m(n,o){v(n,e,o)},d(n){n&&_(e)}}}function Uo(t){let e,n,o,r,s,i,a,c,l,f,u;return f=new At({props:{class:"white-text",to:"plugins",$$slots:{default:[Co]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("h1"),n.textContent="PBP Store",o=T(),r=p("span"),r.textContent=`${t[0]}`,s=T(),i=p("p"),i.textContent=`A "Store" to facilitate the gathering of PBP plugins. Read the About
          page to know how to get your plugin in here!`,a=T(),c=p("div"),l=p("button"),D(f.$$.fragment),P(r,"class","subtitle"),P(i,"class","tagline"),P(c,"class","inline"),P(e,"class","grid-container")},m(d,g){v(d,e,g),b(e,n),b(e,o),b(e,r),b(e,s),b(e,i),b(e,a),b(e,c),b(c,l),B(f,l,null),u=!0},p(d,g){const y={};g&2&&(y.$$scope={dirty:g,ctx:d}),f.$set(y)},i(d){u||(L(f.$$.fragment,d),u=!0)},o(d){M(f.$$.fragment,d),u=!1},d(d){d&&_(e),j(f)}}}function Fo(t){let e;return{c(){e=p("div"),e.innerHTML='<article><i class="fa-solid fa-bomb"></i>  <span>404 Not found</span></article>',P(e,"class","grid-container")},m(n,o){v(n,e,o)},p:A,d(n){n&&_(e)}}}function Bo(t){let e,n,o,r,s,i,a,c,l,f,u,d,g,y,w,R,O,N,F,I,$,U,k,C,z;return c=new At({props:{to:"/",$$slots:{default:[Mo]},$$scope:{ctx:t}}}),d=new At({props:{to:"plugins",$$slots:{default:[To]},$$scope:{ctx:t}}}),R=new At({props:{to:"about",$$slots:{default:[$o]},$$scope:{ctx:t}}}),N=new wt({props:{path:"/",$$slots:{default:[Uo]},$$scope:{ctx:t}}}),I=new wt({props:{path:"plugins",primary:!1,component:Rn}}),U=new wt({props:{path:"about",primary:!1,component:pn}}),C=new wt({props:{primary:!1,$$slots:{default:[Fo]},$$scope:{ctx:t}}}),{c(){e=p("main"),n=p("nav"),o=p("ul"),o.innerHTML='<li class="li"><i class="fa-solid fa-gamepad"></i>  <strong>BPO Store</strong></li>',r=T(),s=p("ul"),i=p("li"),a=p("a"),D(c.$$.fragment),l=T(),f=p("li"),u=p("a"),D(d.$$.fragment),g=T(),y=p("li"),w=p("a"),D(R.$$.fragment),O=T(),D(N.$$.fragment),F=T(),D(I.$$.fragment),$=T(),D(U.$$.fragment),k=T(),D(C.$$.fragment),P(a,"href","/"),P(u,"href","plugins"),P(w,"href","about"),P(n,"class","nav")},m(h,E){v(h,e,E),b(e,n),b(n,o),b(n,r),b(n,s),b(s,i),b(i,a),B(c,a,null),b(s,l),b(s,f),b(f,u),B(d,u,null),b(s,g),b(s,y),b(y,w),B(R,w,null),v(h,O,E),B(N,h,E),v(h,F,E),B(I,h,E),v(h,$,E),B(U,h,E),v(h,k,E),B(C,h,E),z=!0},p(h,E){const S={};E&2&&(S.$$scope={dirty:E,ctx:h}),c.$set(S);const X={};E&2&&(X.$$scope={dirty:E,ctx:h}),d.$set(X);const st={};E&2&&(st.$$scope={dirty:E,ctx:h}),R.$set(st);const J={};E&2&&(J.$$scope={dirty:E,ctx:h}),N.$set(J);const it={};E&2&&(it.$$scope={dirty:E,ctx:h}),C.$set(it)},i(h){z||(L(c.$$.fragment,h),L(d.$$.fragment,h),L(R.$$.fragment,h),L(N.$$.fragment,h),L(I.$$.fragment,h),L(U.$$.fragment,h),L(C.$$.fragment,h),z=!0)},o(h){M(c.$$.fragment,h),M(d.$$.fragment,h),M(R.$$.fragment,h),M(N.$$.fragment,h),M(I.$$.fragment,h),M(U.$$.fragment,h),M(C.$$.fragment,h),z=!1},d(h){h&&_(e),j(c),j(d),j(R),h&&_(O),j(N,h),h&&_(F),j(I,h),h&&_($),j(U,h),h&&_(k),j(C,h)}}}function jo(t){let e,n,o,r,s,i;return s=new qe({props:{$$slots:{default:[Bo]},$$scope:{ctx:t}}}),{c(){e=p("script"),o=T(),r=p("div"),D(s.$$.fragment),Je(e.src,n="https://kit.fontawesome.com/dacbc752b2.js")||P(e,"src",n),P(e,"crossorigin","anonymous"),P(r,"class","router-container")},m(a,c){b(document.head,e),v(a,o,c),v(a,r,c),B(s,r,null),i=!0},p(a,[c]){const l={};c&2&&(l.$$scope={dirty:c,ctx:a}),s.$set(l)},i(a){i||(L(s.$$.fragment,a),i=!0)},o(a){M(s.$$.fragment,a),i=!1},d(a){_(e),a&&_(o),a&&_(r),j(s)}}}function Do(t){return[fe[Math.floor(Math.random()*fe.length)]]}class Ho extends gt{constructor(e){super(),_t(this,e,Do,jo,rt,{})}}new Ho({target:document.getElementById("app")});
