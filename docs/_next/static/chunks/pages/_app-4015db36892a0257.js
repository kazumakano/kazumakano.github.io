(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1363)}])},1363:function(e,n,t){"use strict";t.r(n),t.d(n,{CONTENTS_NUM:function(){return b},default:function(){return g}});var r=t(5893),o=(t(906),t(3697)),u=t(7294),i=t(1163),c=function(){},a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)},f={eventTypes:["keydown"],when:!0};function l(e,n,t){var r=(0,u.useMemo)((function(){return Array.isArray(e)?e:[e]}),[e]),o=(0,u.useMemo)((function(){return a(a({},f),t)}),[t]),i=o.when,l=o.eventTypes,s=(0,u.useRef)(n),p=o.target;(0,u.useEffect)((function(){s.current=n}));var d=(0,u.useCallback)((function(e){r.some((function(n){return function(e,n){return e.key===n||e.code===n||e.keyCode===n||e.which===n||e.charCode===n}(e,n)}))&&s.current(e)}),[r]);(0,u.useEffect)((function(){if(i&&"undefined"!==typeof window){if(!p){for(var e=0,n=l;e<n.length;e++){u=n[e];window.addEventListener(u,d)}return function(){for(var e=0,n=l;e<n.length;e++){var t=n[e];window.removeEventListener(t,d)}}}var t=p.current;if(t){for(var r=0,o=l;r<o.length;r++){var u=o[r];t.addEventListener(u,d)}return function(){for(var e=0,n=l;e<n.length;e++){var r=n[e];t.removeEventListener(r,d)}}}}return c}),[i,l,r,p,n,d])}var s=t(9008),p=t(4332);function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,u=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(u.push(r.value),!n||u.length!==n);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return u}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=["/barcelona.jpeg","/fushimi-inari-taisha.jpeg","/mirai-tower.jpeg"],b=Object.keys(o).length;function g(e){var n=e.Component,t=e.pageProps,c=function(e){var n=(0,u.useState)(null),t=n[0],r=n[1];return(0,u.useEffect)((function(){fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo/").then((function(n){return n.json().then((function(n){r(Math.round(n.unixtime)%e)}))}))}),[e,r]),t}(m.length),a=(0,u.useState)(!1),f=a[0],d=a[1],v=(0,u.useState)([0,0]),g=h(v[0],2),w=g[0],O=g[1],E=v[1],x=(0,i.useRouter)(),j=(0,u.useCallback)((function(e){if(!f){var n=((w+e)%b+b)%b;E([n,e]),x.replace(o[n])}}),[f,w,E,x]);return l([8,37],(function(){return j(-1)})),l([13,32,39],(function(){return j(1)})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Kazuma Kano"}),(0,r.jsx)("meta",{name:"description",content:"This is my profile site."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(p.M,{initial:!1,children:(0,r.jsx)("div",{id:"background",style:{backgroundImage:null==c?void 0:"url(".concat(m[c],")")},children:(0,r.jsx)(n,y({},t,{setIsInputting:d,pageIndex:w,transDirect:O,setPage:E}))})})]})}},906:function(){},9008:function(e,n,t){e.exports=t(5443)},1163:function(e,n,t){e.exports=t(387)},655:function(e,n,t){"use strict";t.d(n,{ZT:function(){return o},pi:function(){return u},_T:function(){return i},XA:function(){return c},CR:function(){return a},ev:function(){return f}});var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)};function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}Object.create;function c(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,u=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return i}function f(e,n,t){if(t||2===arguments.length)for(var r,o=0,u=n.length;o<u;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}Object.create},4332:function(e,n,t){"use strict";t.d(n,{M:function(){return y}});var r=t(655),o=t(7294),u=t(4735),i=t(5411);var c=t(240),a=t(6681),f=0;function l(){var e=f;return f++,e}var s=function(e){var n=e.children,t=e.initial,u=e.isPresent,i=e.onExitComplete,f=e.custom,s=e.presenceAffectsLayout,d=(0,a.h)(p),v=(0,a.h)(l),y=(0,o.useMemo)((function(){return{id:v,initial:t,isPresent:u,custom:f,onExitComplete:function(e){var n,t;d.set(e,!0);try{for(var o=(0,r.XA)(d.values()),u=o.next();!u.done;u=o.next()){if(!u.value)return}}catch(c){n={error:c}}finally{try{u&&!u.done&&(t=o.return)&&t.call(o)}finally{if(n)throw n.error}}null===i||void 0===i||i()},register:function(e){return d.set(e,!1),function(){return d.delete(e)}}}}),s?void 0:[u]);return(0,o.useMemo)((function(){d.forEach((function(e,n){return d.set(n,!1)}))}),[u]),o.useEffect((function(){!u&&!d.size&&(null===i||void 0===i||i())}),[u]),o.createElement(c.O.Provider,{value:y},n)};function p(){return new Map}var d=t(5364);function v(e){return e.key||""}var y=function(e){var n=e.children,t=e.custom,c=e.initial,a=void 0===c||c,f=e.onExitComplete,l=e.exitBeforeEnter,p=e.presenceAffectsLayout,y=void 0===p||p,h=(0,r.CR)(function(){var e=(0,o.useRef)(!1),n=(0,r.CR)((0,o.useState)(0),2),t=n[0],c=n[1];(0,i.z)((function(){return e.current=!0}));var a=(0,o.useCallback)((function(){!e.current&&c(t+1)}),[t]);return[(0,o.useCallback)((function(){return u.ZP.postRender(a)}),[a]),t]}(),1),m=h[0],b=(0,o.useContext)(d.p).forceRender;b&&(m=b);var g=(0,o.useRef)(!0),w=(0,o.useRef)(!0);(0,o.useEffect)((function(){return function(){w.current=!1}}),[]);var O=function(e){var n=[];return o.Children.forEach(e,(function(e){(0,o.isValidElement)(e)&&n.push(e)})),n}(n),E=(0,o.useRef)(O),x=(0,o.useRef)(new Map).current,j=(0,o.useRef)(new Set).current;if(function(e,n){e.forEach((function(e){var t=v(e);n.set(t,e)}))}(O,x),g.current)return g.current=!1,o.createElement(o.Fragment,null,O.map((function(e){return o.createElement(s,{key:v(e),isPresent:!0,initial:!!a&&void 0,presenceAffectsLayout:y},e)})));for(var k=(0,r.ev)([],(0,r.CR)(O),!1),C=E.current.map(v),P=O.map(v),S=C.length,_=0;_<S;_++){var A=C[_];-1===P.indexOf(A)?j.add(A):j.delete(A)}return l&&j.size&&(k=[]),j.forEach((function(e){if(-1===P.indexOf(e)){var n=x.get(e);if(n){var r=C.indexOf(e);k.splice(r,0,o.createElement(s,{key:v(n),isPresent:!1,onExitComplete:function(){x.delete(e),j.delete(e);var n=E.current.findIndex((function(n){return n.key===e}));if(E.current.splice(n,1),!j.size){if(E.current=O,!1===w.current)return;m(),f&&f()}},custom:t,presenceAffectsLayout:y},n))}}})),k=k.map((function(e){var n=e.key;return j.has(n)?e:o.createElement(s,{key:v(e),isPresent:!0,presenceAffectsLayout:y},e)})),E.current=k,o.createElement(o.Fragment,null,j.size?k:k.map((function(e){return(0,o.cloneElement)(e)})))}},5364:function(e,n,t){"use strict";t.d(n,{p:function(){return r}});var r=(0,t(7294).createContext)({})},240:function(e,n,t){"use strict";t.d(n,{O:function(){return r}});var r=(0,t(7294).createContext)(null)},6681:function(e,n,t){"use strict";t.d(n,{h:function(){return o}});var r=t(7294);function o(e){var n=(0,r.useRef)(null);return null===n.current&&(n.current=e()),n.current}},5411:function(e,n,t){"use strict";t.d(n,{z:function(){return o}});var r=t(7294);function o(e){return(0,r.useEffect)((function(){return function(){return e()}}),[])}},4735:function(e,n,t){"use strict";t.d(n,{qY:function(){return d},ZP:function(){return g},iW:function(){return v},$B:function(){return b}});const r=1/60*1e3,o="undefined"!==typeof performance?()=>performance.now():()=>Date.now(),u="undefined"!==typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout((()=>e(o())),r);let i=!0,c=!1,a=!1;const f={delta:0,timestamp:0},l=["read","update","preRender","render","postRender"],s=l.reduce(((e,n)=>(e[n]=function(e){let n=[],t=[],r=0,o=!1,u=!1;const i=new WeakSet,c={schedule:(e,u=!1,c=!1)=>{const a=c&&o,f=a?n:t;return u&&i.add(e),-1===f.indexOf(e)&&(f.push(e),a&&o&&(r=n.length)),e},cancel:e=>{const n=t.indexOf(e);-1!==n&&t.splice(n,1),i.delete(e)},process:a=>{if(o)u=!0;else{if(o=!0,[n,t]=[t,n],t.length=0,r=n.length,r)for(let t=0;t<r;t++){const r=n[t];r(a),i.has(r)&&(c.schedule(r),e())}o=!1,u&&(u=!1,c.process(a))}}};return c}((()=>c=!0)),e)),{}),p=l.reduce(((e,n)=>{const t=s[n];return e[n]=(e,n=!1,r=!1)=>(c||m(),t.schedule(e,n,r)),e}),{}),d=l.reduce(((e,n)=>(e[n]=s[n].cancel,e)),{}),v=l.reduce(((e,n)=>(e[n]=()=>s[n].process(f),e)),{}),y=e=>s[e].process(f),h=e=>{c=!1,f.delta=i?r:Math.max(Math.min(e-f.timestamp,40),1),f.timestamp=e,a=!0,l.forEach(y),a=!1,c&&(i=!1,u(h))},m=()=>{c=!0,i=!0,a||u(h)},b=()=>f;var g=p},3697:function(e){"use strict";e.exports=JSON.parse('["/","/publication","/achievement","/skill","/contact"]')}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var t=e.O();_N_E=t}]);