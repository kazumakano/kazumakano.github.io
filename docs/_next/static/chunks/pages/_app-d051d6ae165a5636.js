(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1363)}])},9231:function(e,n,t){"use strict";t.d(n,{Rx:function(){return i},Bb:function(){return c},Sg:function(){return a}});var r=t(5893),o=t(7294),u=(0,o.createContext)(!0),i=(0,o.createContext)(!0);function c(e){var n=e.children,t=(0,o.useState)(!0),c=t[0],a=t[1],f=(0,o.useState)(!0),s=f[0],l=f[1],d=(0,o.useState)(null),p=d[0],v=d[1],h=(0,o.useCallback)((function(){return v([window.innerWidth,window.innerHeight])}),[v]);return(0,o.useEffect)((function(){return a(window.matchMedia("(orientation: landscape)").matches),window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}}),[a,h,p]),(0,o.useEffect)((function(){l(!/Android|iPad|iPhone|iPod/.test(window.navigator.userAgent))}),[l]),(0,r.jsx)(i.Provider,{value:s,children:(0,r.jsx)(u.Provider,{value:c,children:n})})}function a(e,n){var t=(0,o.useContext)(u);return{height:t?"100%":"calc(".concat(n,"% - 2px)"),marginBottom:e[1]?t?"0":"4px":"0",marginLeft:e[0]&&t?"4px":"0",marginRight:e[1]&&t?"4px":"0",marginTop:e[0]?t?"0":"4px":"0",width:t?"calc(".concat(n,"% - 2px)"):"100%"}}},1363:function(e,n,t){"use strict";t.r(n),t.d(n,{CONTENTS_NUM:function(){return g},default:function(){return b}});var r=t(5893),o=(t(906),t(3697)),u=t(7294),i=t(1163),c=function(){},a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)},f={eventTypes:["keydown"],when:!0};function s(e,n,t){var r=(0,u.useMemo)((function(){return Array.isArray(e)?e:[e]}),[e]),o=(0,u.useMemo)((function(){return a(a({},f),t)}),[t]),i=o.when,s=o.eventTypes,l=(0,u.useRef)(n),d=o.target;(0,u.useEffect)((function(){l.current=n}));var p=(0,u.useCallback)((function(e){r.some((function(n){return function(e,n){return e.key===n||e.code===n||e.keyCode===n||e.which===n||e.charCode===n}(e,n)}))&&l.current(e)}),[r]);(0,u.useEffect)((function(){if(i&&"undefined"!==typeof window){if(!d){for(var e=0,n=s;e<n.length;e++){u=n[e];window.addEventListener(u,p)}return function(){for(var e=0,n=s;e<n.length;e++){var t=n[e];window.removeEventListener(t,p)}}}var t=d.current;if(t){for(var r=0,o=s;r<o.length;r++){var u=o[r];t.addEventListener(u,p)}return function(){for(var e=0,n=s;e<n.length;e++){var r=n[e];t.removeEventListener(r,p)}}}}return c}),[i,s,r,d,n,p])}var l=t(9008),d=t(4332),p=t(9231);function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,u=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(u.push(r.value),!n||u.length!==n);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return u}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=["/barcelona.jpeg","/fushimi-inari-taisha.jpeg","/mirai-tower.jpeg"],g=Object.keys(o).length;function b(e){var n=e.Component,t=e.pageProps,c=function(e){var n=(0,u.useState)(null),t=n[0],r=n[1];return(0,u.useEffect)((function(){r(Math.floor(e*Math.random()))}),[e,r]),t}(w.length),a=(0,u.useState)(!1),f=a[0],v=a[1],h=(0,u.useState)([0,0]),b=m(h[0],2),x=b[0],O=b[1],E=h[1],j=(0,i.useRouter)(),C=(0,u.useCallback)((function(e){if(!f){var n=((x+e)%g+g)%g;E([n,e]),j.replace(o[n])}}),[f,x,E,j]);return s([8,37],(function(){return C(-1)})),s([13,32,39],(function(){return C(1)})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:"Kazuma Kano"}),(0,r.jsx)("meta",{name:"description",content:"This is my profile site."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(d.M,{initial:!1,children:(0,r.jsx)("div",{id:"background",style:{backgroundImage:null==c?void 0:"url(".concat(w[c],")")},children:(0,r.jsx)(p.Bb,{children:(0,r.jsx)(n,y({},t,{setIsInputting:v,pageIndex:x,transDirect:O,setPage:E}))})})})]})}},906:function(){},9008:function(e,n,t){e.exports=t(5443)},1163:function(e,n,t){e.exports=t(387)},655:function(e,n,t){"use strict";t.d(n,{ZT:function(){return o},pi:function(){return u},_T:function(){return i},XA:function(){return c},CR:function(){return a},ev:function(){return f}});var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)};function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}Object.create;function c(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,u=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return i}function f(e,n,t){if(t||2===arguments.length)for(var r,o=0,u=n.length;o<u;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}Object.create},4332:function(e,n,t){"use strict";t.d(n,{M:function(){return h}});var r=t(655),o=t(7294),u=t(4735),i=t(5411);var c=t(240),a=t(6681),f=0;function s(){var e=f;return f++,e}var l=function(e){var n=e.children,t=e.initial,u=e.isPresent,i=e.onExitComplete,f=e.custom,l=e.presenceAffectsLayout,p=(0,a.h)(d),v=(0,a.h)(s),h=(0,o.useMemo)((function(){return{id:v,initial:t,isPresent:u,custom:f,onExitComplete:function(e){var n,t;p.set(e,!0);try{for(var o=(0,r.XA)(p.values()),u=o.next();!u.done;u=o.next()){if(!u.value)return}}catch(c){n={error:c}}finally{try{u&&!u.done&&(t=o.return)&&t.call(o)}finally{if(n)throw n.error}}null===i||void 0===i||i()},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}}),l?void 0:[u]);return(0,o.useMemo)((function(){p.forEach((function(e,n){return p.set(n,!1)}))}),[u]),o.useEffect((function(){!u&&!p.size&&(null===i||void 0===i||i())}),[u]),o.createElement(c.O.Provider,{value:h},n)};function d(){return new Map}var p=t(5364);function v(e){return e.key||""}var h=function(e){var n=e.children,t=e.custom,c=e.initial,a=void 0===c||c,f=e.onExitComplete,s=e.exitBeforeEnter,d=e.presenceAffectsLayout,h=void 0===d||d,y=(0,r.CR)(function(){var e=(0,o.useRef)(!1),n=(0,r.CR)((0,o.useState)(0),2),t=n[0],c=n[1];(0,i.z)((function(){return e.current=!0}));var a=(0,o.useCallback)((function(){!e.current&&c(t+1)}),[t]);return[(0,o.useCallback)((function(){return u.ZP.postRender(a)}),[a]),t]}(),1),m=y[0],w=(0,o.useContext)(p.p).forceRender;w&&(m=w);var g=(0,o.useRef)(!0),b=(0,o.useRef)(!0);(0,o.useEffect)((function(){return function(){b.current=!1}}),[]);var x=function(e){var n=[];return o.Children.forEach(e,(function(e){(0,o.isValidElement)(e)&&n.push(e)})),n}(n),O=(0,o.useRef)(x),E=(0,o.useRef)(new Map).current,j=(0,o.useRef)(new Set).current;if(function(e,n){e.forEach((function(e){var t=v(e);n.set(t,e)}))}(x,E),g.current)return g.current=!1,o.createElement(o.Fragment,null,x.map((function(e){return o.createElement(l,{key:v(e),isPresent:!0,initial:!!a&&void 0,presenceAffectsLayout:h},e)})));for(var C=(0,r.ev)([],(0,r.CR)(x),!1),P=O.current.map(v),S=x.map(v),k=P.length,_=0;_<k;_++){var A=P[_];-1===S.indexOf(A)?j.add(A):j.delete(A)}return s&&j.size&&(C=[]),j.forEach((function(e){if(-1===S.indexOf(e)){var n=E.get(e);if(n){var r=P.indexOf(e);C.splice(r,0,o.createElement(l,{key:v(n),isPresent:!1,onExitComplete:function(){E.delete(e),j.delete(e);var n=O.current.findIndex((function(n){return n.key===e}));if(O.current.splice(n,1),!j.size){if(O.current=x,!1===b.current)return;m(),f&&f()}},custom:t,presenceAffectsLayout:h},n))}}})),C=C.map((function(e){var n=e.key;return j.has(n)?e:o.createElement(l,{key:v(e),isPresent:!0,presenceAffectsLayout:h},e)})),O.current=C,o.createElement(o.Fragment,null,j.size?C:C.map((function(e){return(0,o.cloneElement)(e)})))}},5364:function(e,n,t){"use strict";t.d(n,{p:function(){return r}});var r=(0,t(7294).createContext)({})},240:function(e,n,t){"use strict";t.d(n,{O:function(){return r}});var r=(0,t(7294).createContext)(null)},6681:function(e,n,t){"use strict";t.d(n,{h:function(){return o}});var r=t(7294);function o(e){var n=(0,r.useRef)(null);return null===n.current&&(n.current=e()),n.current}},5411:function(e,n,t){"use strict";t.d(n,{z:function(){return o}});var r=t(7294);function o(e){return(0,r.useEffect)((function(){return function(){return e()}}),[])}},4735:function(e,n,t){"use strict";t.d(n,{qY:function(){return p},ZP:function(){return g},iW:function(){return v},$B:function(){return w}});const r=1/60*1e3,o="undefined"!==typeof performance?()=>performance.now():()=>Date.now(),u="undefined"!==typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout((()=>e(o())),r);let i=!0,c=!1,a=!1;const f={delta:0,timestamp:0},s=["read","update","preRender","render","postRender"],l=s.reduce(((e,n)=>(e[n]=function(e){let n=[],t=[],r=0,o=!1,u=!1;const i=new WeakSet,c={schedule:(e,u=!1,c=!1)=>{const a=c&&o,f=a?n:t;return u&&i.add(e),-1===f.indexOf(e)&&(f.push(e),a&&o&&(r=n.length)),e},cancel:e=>{const n=t.indexOf(e);-1!==n&&t.splice(n,1),i.delete(e)},process:a=>{if(o)u=!0;else{if(o=!0,[n,t]=[t,n],t.length=0,r=n.length,r)for(let t=0;t<r;t++){const r=n[t];r(a),i.has(r)&&(c.schedule(r),e())}o=!1,u&&(u=!1,c.process(a))}}};return c}((()=>c=!0)),e)),{}),d=s.reduce(((e,n)=>{const t=l[n];return e[n]=(e,n=!1,r=!1)=>(c||m(),t.schedule(e,n,r)),e}),{}),p=s.reduce(((e,n)=>(e[n]=l[n].cancel,e)),{}),v=s.reduce(((e,n)=>(e[n]=()=>l[n].process(f),e)),{}),h=e=>l[e].process(f),y=e=>{c=!1,f.delta=i?r:Math.max(Math.min(e-f.timestamp,40),1),f.timestamp=e,a=!0,s.forEach(h),a=!1,c&&(i=!1,u(y))},m=()=>{c=!0,i=!0,a||u(y)},w=()=>f;var g=d},3697:function(e){"use strict";e.exports=JSON.parse('["/","/publication","/achievement","/skill","/contact"]')}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var t=e.O();_N_E=t}]);