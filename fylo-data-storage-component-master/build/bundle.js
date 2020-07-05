var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function p(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let m;function v(t){m=t}const g=[],$=[],b=[],y=[],w=Promise.resolve();let x=!1;function M(t){b.push(t)}let z=!1;const _=new Set;function L(){if(!z){z=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];v(e),C(e.$$)}for(g.length=0;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];_.has(e)||(_.add(e),e())}b.length=0}while(g.length);for(;y.length;)y.pop()();x=!1,z=!1,_.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const H=new Set;function k(t,e){t&&t.i&&(H.delete(t),t.i(e))}function E(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),(void 0).c.push(()=>{H.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function F(t){t&&t.c()}function V(t,n,l){const{fragment:r,on_mount:a,on_destroy:c,after_update:i}=t.$$;r&&r.m(n,l),M(()=>{const n=a.map(e).filter(s);c?c.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(M)}function A(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,w.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,s,l,r,a,i,u=[-1]){const d=m;v(e);const f=s.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u};let p=!1;if(h.ctx=l?l(e,f,(t,n,...o)=>{const s=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),p&&T(e,t)),n}):[],h.update(),p=!0,o(h.before_update),h.fragment=!!r&&r(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();s.intro&&k(e.$$.fragment),V(e,s.target,s.anchor),L()}v(d)}class G{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function D(e){let n;return{c(){n=i("section"),n.innerHTML='<h2 class="sr-only">Fylo menu</h2> \n  <svg class="logo svelte-1yf15lm" xmlns="http://www.w3.org/2000/svg" width="135" height="40"><path fill="#FFF" fill-rule="evenodd" d="M0 12.593v.1L22.823 23.28l22.903-10.624v-.027L22.823 2.006 0 12.593zm8.228.05l14.595-6.77 14.597 6.77-14.597 6.77-14.595-6.77zm14.595 14.75L0 16.962v3.857l22.823 10.453 22.903-10.488v-3.858L22.823 27.392zm0 7.822L0 24.785v3.858l22.823 10.454 22.903-10.49V24.75L22.823 35.215zM129.796 20.17a6.604 6.604 0 00-1.752-4.533 5.888 5.888 0 00-1.897-1.36 5.554 5.554 0 00-2.313-.49c-.819 0-1.59.164-2.313.49a5.886 5.886 0 00-1.897 1.36 6.605 6.605 0 00-1.753 4.533 6.604 6.604 0 001.753 4.533 5.886 5.886 0 001.897 1.36c.723.326 1.494.49 2.313.49.82 0 1.59-.164 2.313-.49a5.888 5.888 0 001.897-1.36 6.603 6.603 0 001.753-4.533zm5.204 0c0 1.571-.29 3.028-.867 4.37a10.654 10.654 0 01-2.385 3.48 11.348 11.348 0 01-3.56 2.322 11.19 11.19 0 01-4.354.852c-1.542 0-2.987-.284-4.336-.852a11.241 11.241 0 01-3.541-2.34 10.86 10.86 0 01-2.385-3.499c-.578-1.341-.868-2.786-.868-4.333 0-1.523.296-2.956.886-4.297a11.322 11.322 0 012.403-3.518 11.087 11.087 0 013.541-2.357 10.966 10.966 0 014.3-.852c1.542 0 2.993.284 4.354.852a11.347 11.347 0 013.56 2.321 10.605 10.605 0 012.385 3.5c.578 1.353.867 2.804.867 4.35zM110.898 30.54c-.41.193-.874.35-1.392.471a7.05 7.05 0 01-1.608.182c-.77 0-1.511-.103-2.222-.308a4.864 4.864 0 01-1.86-.998c-.53-.459-.952-1.057-1.266-1.795-.313-.737-.47-1.625-.47-2.665V.552h5.313v23.97c0 .87.174 1.468.523 1.794.35.327.765.49 1.247.49.602 0 1.18-.181 1.735-.544v4.28zM99.732 9.654l-9.395 24.912c-.699 1.862-1.614 3.203-2.747 4.025-1.132.822-2.481 1.233-4.047 1.233a6.426 6.426 0 01-1.626-.217l-1.734-4.86c.409.194.83.345 1.264.454.434.109.843.163 1.229.163.819 0 1.566-.187 2.24-.562.675-.375 1.193-1.07 1.554-2.085l.723-2.103-8.058-20.96h5.673l4.806 13.49 4.517-13.49h5.6zM77.87 6.499H64.283v6.745h13.406v4.569H64.283V30.65H58.79V1.676h19.08v4.823z"></path></svg> \n  <div class="menu svelte-1yf15lm"><div class="menu-icon svelte-1yf15lm"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24"><path fill="#697ED4" d="M12.028 0H2.436A2.387 2.387 0 00.049 2.398L.037 21.583a2.387 2.387 0 002.387 2.398h14.4a2.397 2.397 0 002.398-2.398V7.194L12.028 0zM10.83 8.393V1.8l6.595 6.594h-6.595z"></path></svg></div> \n    <div class="menu-icon svelte-1yf15lm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="#697ED4" d="M21.6 2.4H12L9.6 0H2.4A2.39 2.39 0 00.012 2.4L0 16.8a2.4 2.4 0 002.4 2.4h19.2a2.4 2.4 0 002.4-2.4v-12a2.4 2.4 0 00-2.4-2.4z"></path></svg></div> \n    <div class="menu-icon svelte-1yf15lm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16"><path fill="#697ED4" d="M19.4 6c-.7-3.4-3.7-6-7.4-6-2.9 0-5.4 1.6-6.6 4C2.3 4.4 0 6.9 0 10c0 3.3 2.7 6 6 6h13c2.8 0 5-2.2 5-5 0-2.6-2.1-4.8-4.6-5zM14 9v4h-4V9H7l5-5 5 5h-3z"></path></svg></div></div>',f(n,"class","svelte-1yf15lm")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class N extends G{constructor(t){super(),B(this,t,null,D,l,{})}}function j(e){let n;return{c(){n=i("p"),n.textContent="Calculating, please wait...",f(n,"class","t-body1 t-pale-blue info svelte-103hid2")},m(t,e){a(t,n,e)},p:t,d(t){t&&c(n)}}}function O(t){let e,n,o,s,l,d;return{c(){e=i("p"),n=u("You’ve used "),o=i("span"),s=u(t[2]),l=u(" GB"),d=u(" of your storage"),f(o,"class","t-bold"),f(e,"class","t-body1 t-pale-blue info svelte-103hid2")},m(t,c){a(t,e,c),r(e,n),r(e,o),r(o,s),r(o,l),r(e,d)},p(t,e){4&e&&h(s,t[2])},d(t){t&&c(e)}}}function P(e){let n,o,s,l,m,v,g,$,b,y,w,x,M,z,_;function L(t,e){return t[2]>0?O:j}let C=L(e),H=C(e);return{c(){n=i("section"),o=i("h2"),o.textContent="Fylo storage detail",s=d(),H.c(),l=d(),m=i("div"),v=i("div"),g=i("div"),$=d(),b=i("div"),b.innerHTML='<p class="t-body2 t-bold t-pale-blue">0 GB</p> \n  <p class="t-body2 t-bold t-pale-blue">1000 GB</p>',y=d(),w=i("div"),x=i("p"),M=u(e[1]),z=d(),_=i("p"),_.textContent="GB LEFT",f(o,"class","sr-only"),f(g,"class","progress-bar-dot svelte-103hid2"),f(v,"class","progress-bar svelte-103hid2"),p(v,"--progress",e[0]),f(m,"class","progress-bar-container svelte-103hid2"),f(b,"class","status svelte-103hid2"),f(x,"class","t-number svelte-103hid2"),f(_,"class","t-unit svelte-103hid2"),f(w,"class","status-number svelte-103hid2"),f(n,"class","svelte-103hid2")},m(t,e){a(t,n,e),r(n,o),r(n,s),H.m(n,null),r(n,l),r(n,m),r(m,v),r(v,g),r(n,$),r(n,b),r(n,y),r(n,w),r(w,x),r(x,M),r(w,z),r(w,_)},p(t,[e]){C===(C=L(t))&&H?H.p(t,e):(H.d(1),H=C(t),H&&(H.c(),H.m(n,l))),1&e&&p(v,"--progress",t[0]),2&e&&h(M,t[1])},i:t,o:t,d(t){t&&c(n),H.d()}}}function S(t,e,n){let o=0,s="0%",l=0,r=0;return setTimeout(()=>{var t,e;t=10,e=99,t=Math.ceil(t),e=Math.floor(e),o=Math.floor(Math.random()*(e-t))+t,n(0,s=o+"%"),n(2,r=parseInt(o/100*1e3)),n(1,l=1e3-r)},3600),[s,l,r]}class q extends G{constructor(t){super(),B(this,t,S,P,l,{})}}function I(e){let n,o,s,l,u,h,p,m;return s=new N({}),u=new q({}),{c(){n=i("main"),o=i("div"),F(s.$$.fragment),l=d(),F(u.$$.fragment),h=d(),p=i("div"),p.innerHTML='\n\t\tChallenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="svelte-umv7ko">Frontend Mentor</a>. \n\t\tCoded by <a href="https://github.com/zuolizhu" target="_blank" class="svelte-umv7ko">Connor Zhu</a>.\n\t',f(o,"class","container svelte-umv7ko"),f(p,"class","attribution svelte-umv7ko")},m(t,e){a(t,n,e),r(n,o),V(s,o,null),r(o,l),V(u,o,null),r(n,h),r(n,p),m=!0},p:t,i(t){m||(k(s.$$.fragment,t),k(u.$$.fragment,t),m=!0)},o(t){E(s.$$.fragment,t),E(u.$$.fragment,t),m=!1},d(t){t&&c(n),A(s),A(u)}}}return new class extends G{constructor(t){super(),B(this,t,null,I,l,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map