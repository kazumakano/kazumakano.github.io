(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1427)}])},5071:function(e,n,t){"use strict";t.d(n,{Bb:function(){return c},Rx:function(){return u},Sg:function(){return a}});var r=t(5893),o=t(7294);let i=(0,o.createContext)(!0),u=(0,o.createContext)(!0);function c(e){let{children:n}=e,[t,c]=(0,o.useState)(!0),[a,f]=(0,o.useState)(!0),[s,l]=(0,o.useState)([-1,-1]),d=(0,o.useCallback)(()=>l([window.innerWidth,window.innerHeight]),[l]);return(0,o.useEffect)(()=>(c(window.matchMedia("(orientation: landscape)").matches),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[c,d,s]),(0,o.useEffect)(()=>{f(!/Android|iPad|iPhone|iPod/.test(window.navigator.userAgent))},[f]),(0,r.jsx)(u.Provider,{value:a,children:(0,r.jsx)(i.Provider,{value:t,children:n})})}function a(e,n){let t=(0,o.useContext)(i);return{height:t?"100%":"calc(".concat(n,"% - 2px)"),marginBottom:e[1]?t?"0":"4px":"0",marginLeft:e[0]&&t?"4px":"0",marginRight:e[1]&&t?"4px":"0",marginTop:e[0]?t?"0":"4px":"0",width:t?"calc(".concat(n,"% - 2px)"):"100%"}}},1427:function(e,n,t){"use strict";t.r(n),t.d(n,{CONTENTS:function(){return v},default:function(){return y}});var r=t(5893);t(3434);var o=t(7294),i=t(1163),u=function(){},c=function(){return(c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},a={eventTypes:["keydown"],when:!0};function f(e,n,t){var r=(0,o.useMemo)(function(){return Array.isArray(e)?e:[e]},[e]),i=(0,o.useMemo)(function(){return c(c({},a),t)},[t]),f=i.when,s=i.eventTypes,l=(0,o.useRef)(n),d=i.target;(0,o.useEffect)(function(){l.current=n});var p=(0,o.useCallback)(function(e){r.some(function(n){return e.key===n||e.code===n||e.keyCode===n||e.which===n||e.charCode===n})&&l.current(e)},[r]);(0,o.useEffect)(function(){if(f&&"undefined"!=typeof window){if(d){var e=d.current;if(e){for(var n=0;n<s.length;n++){var t=s[n];e.addEventListener(t,p)}return function(){for(var n=0;n<s.length;n++){var t=s[n];e.removeEventListener(t,p)}}}}else{for(var r=0;r<s.length;r++){var t=s[r];window.addEventListener(t,p)}return function(){for(var e=0;e<s.length;e++){var n=s[e];window.removeEventListener(n,p)}}}}return u},[f,s,r,d,n,p])}var s=t(9008),l=t.n(s),d=t(4332),p=t(5071);let h=["/barcelona.jpeg","/fushimi-inari-taisha.jpeg","/golconda.jpeg","/hakodate.jpeg","/melbourne-beach.jpeg"],v=["/","/publication/international","/publication/domestic","/achievement","/skill","/contact"],m=e=>{let[n,t]=(0,o.useState)(-1);return(0,o.useEffect)(()=>{t(Math.floor(e*Math.random()))},[e,t]),n};function y(e){let{Component:n,pageProps:t}=e,u=m(h.length),[c,a]=(0,o.useState)(!1),s=(0,i.useRouter)(),y=v.indexOf(s.pathname),[g,w]=(0,o.useState)(0),x=(0,o.useCallback)(e=>{if(!c){w(e);let n=((y+e)%v.length+v.length)%v.length;s.replace(v[n])}},[c,y,s,w]);return f([8,37],()=>x(-1)),f([13,32,39],()=>x(1)),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Kazuma KANO"}),(0,r.jsx)("meta",{name:"description",content:"This is my profile site."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(d.M,{initial:!1,children:(0,r.jsx)("div",{id:"background",style:{backgroundImage:u>=0?"url(".concat(h[u],")"):void 0},children:(0,r.jsx)(p.Bb,{children:(0,r.jsx)(n,{...t,setIsInputting:a,pageIndex:y,transDirect:g,setTransDirect:w})})})})]})}},3434:function(){},9008:function(e,n,t){e.exports=t(3867)},1163:function(e,n,t){e.exports=t(3079)},4332:function(e,n,t){"use strict";t.d(n,{M:function(){return v}});var r=t(7582),o=t(7294),i=t(4735),u=t(5411),c=t(240),a=t(6681),f=0;function s(){var e=f;return f++,e}var l=function(e){var n=e.children,t=e.initial,i=e.isPresent,u=e.onExitComplete,f=e.custom,l=e.presenceAffectsLayout,p=(0,a.h)(d),h=(0,a.h)(s),v=(0,o.useMemo)(function(){return{id:h,initial:t,isPresent:i,custom:f,onExitComplete:function(e){var n,t;p.set(e,!0);try{for(var o=(0,r.XA)(p.values()),i=o.next();!i.done;i=o.next())if(!i.value)return}catch(e){n={error:e}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(n)throw n.error}}null==u||u()},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}},l?void 0:[i]);return(0,o.useMemo)(function(){p.forEach(function(e,n){return p.set(n,!1)})},[i]),o.useEffect(function(){i||p.size||null==u||u()},[i]),o.createElement(c.O.Provider,{value:v},n)};function d(){return new Map}var p=t(5364);function h(e){return e.key||""}var v=function(e){var n,t,c,a,f,s,d=e.children,v=e.custom,m=e.initial,y=void 0===m||m,g=e.onExitComplete,w=e.exitBeforeEnter,x=e.presenceAffectsLayout,E=void 0===x||x,b=(0,r.CR)((n=(0,o.useRef)(!1),c=(t=(0,r.CR)((0,o.useState)(0),2))[0],a=t[1],(0,u.z)(function(){return n.current=!0}),f=(0,o.useCallback)(function(){n.current||a(c+1)},[c]),[(0,o.useCallback)(function(){return i.ZP.postRender(f)},[f]),c]),1)[0],O=(0,o.useContext)(p.p).forceRender;O&&(b=O);var j=(0,o.useRef)(!0),C=(0,o.useRef)(!0);(0,o.useEffect)(function(){return function(){C.current=!1}},[]);var k=(s=[],o.Children.forEach(d,function(e){(0,o.isValidElement)(e)&&s.push(e)}),s),P=(0,o.useRef)(k),_=(0,o.useRef)(new Map).current,S=(0,o.useRef)(new Set).current;if(!function(e,n){e.forEach(function(e){var t=h(e);n.set(t,e)})}(k,_),j.current)return j.current=!1,o.createElement(o.Fragment,null,k.map(function(e){return o.createElement(l,{key:h(e),isPresent:!0,initial:!!y&&void 0,presenceAffectsLayout:E},e)}));for(var R=(0,r.ev)([],(0,r.CR)(k),!1),A=P.current.map(h),T=k.map(h),M=A.length,L=0;L<M;L++){var z=A[L];-1===T.indexOf(z)?S.add(z):S.delete(z)}return w&&S.size&&(R=[]),S.forEach(function(e){if(-1===T.indexOf(e)){var n=_.get(e);if(n){var t=A.indexOf(e);R.splice(t,0,o.createElement(l,{key:h(n),isPresent:!1,onExitComplete:function(){_.delete(e),S.delete(e);var n=P.current.findIndex(function(n){return n.key===e});if(P.current.splice(n,1),!S.size){if(P.current=k,!1===C.current)return;b(),g&&g()}},custom:v,presenceAffectsLayout:E},n))}}}),R=R.map(function(e){var n=e.key;return S.has(n)?e:o.createElement(l,{key:h(e),isPresent:!0,presenceAffectsLayout:E},e)}),P.current=R,o.createElement(o.Fragment,null,S.size?R:R.map(function(e){return(0,o.cloneElement)(e)}))}},5364:function(e,n,t){"use strict";t.d(n,{p:function(){return r}});var r=(0,t(7294).createContext)({})},240:function(e,n,t){"use strict";t.d(n,{O:function(){return r}});var r=(0,t(7294).createContext)(null)},6681:function(e,n,t){"use strict";t.d(n,{h:function(){return o}});var r=t(7294);function o(e){var n=(0,r.useRef)(null);return null===n.current&&(n.current=e()),n.current}},5411:function(e,n,t){"use strict";t.d(n,{z:function(){return o}});var r=t(7294);function o(e){return(0,r.useEffect)(function(){return function(){return e()}},[])}},4735:function(e,n,t){"use strict";t.d(n,{qY:function(){return p},ZP:function(){return w},iW:function(){return h},$B:function(){return g}});let r=1/60*1e3,o="undefined"!=typeof performance?()=>performance.now():()=>Date.now(),i="undefined"!=typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(o()),r),u=!0,c=!1,a=!1,f={delta:0,timestamp:0},s=["read","update","preRender","render","postRender"],l=s.reduce((e,n)=>(e[n]=function(e){let n=[],t=[],r=0,o=!1,i=!1,u=new WeakSet,c={schedule:(e,i=!1,c=!1)=>{let a=c&&o,f=a?n:t;return i&&u.add(e),-1===f.indexOf(e)&&(f.push(e),a&&o&&(r=n.length)),e},cancel:e=>{let n=t.indexOf(e);-1!==n&&t.splice(n,1),u.delete(e)},process:a=>{if(o){i=!0;return}if(o=!0,[n,t]=[t,n],t.length=0,r=n.length)for(let t=0;t<r;t++){let r=n[t];r(a),u.has(r)&&(c.schedule(r),e())}o=!1,i&&(i=!1,c.process(a))}};return c}(()=>c=!0),e),{}),d=s.reduce((e,n)=>{let t=l[n];return e[n]=(e,n=!1,r=!1)=>(c||y(),t.schedule(e,n,r)),e},{}),p=s.reduce((e,n)=>(e[n]=l[n].cancel,e),{}),h=s.reduce((e,n)=>(e[n]=()=>l[n].process(f),e),{}),v=e=>l[e].process(f),m=e=>{c=!1,f.delta=u?r:Math.max(Math.min(e-f.timestamp,40),1),f.timestamp=e,a=!0,s.forEach(v),a=!1,c&&(u=!1,i(m))},y=()=>{c=!0,u=!0,a||i(m)},g=()=>f;var w=d},7582:function(e,n,t){"use strict";t.d(n,{CR:function(){return a},XA:function(){return c},ZT:function(){return o},_T:function(){return u},ev:function(){return f},pi:function(){return i}});var r=function(e,n){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)};function o(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function u(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>n.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t}function c(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u}function f(e,n,t){if(t||2==arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}"function"==typeof SuppressedError&&SuppressedError}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],function(){return n(6840),n(3079)}),_N_E=e.O()}]);