(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(8440)}])},8440:function(e,n,t){"use strict";t.r(n),t.d(n,{CONTENTS_NUM:function(){return d},default:function(){return h}});var r=t(5893),o=(t(906),t(3697)),u=t(7294),i=t(1163),c={eventTypes:["keydown"],when:!0};function f(e,n,t){var r=(0,u.useMemo)((function(){return Array.isArray(e)?e:[e]}),[e]),o=Object.assign({},c,t),i=o.when,f=o.eventTypes,a=(0,u.useRef)(n),l=o.target;(0,u.useEffect)((function(){a.current=n}));var s=(0,u.useCallback)((function(e){r.some((function(n){return function(e,n){return e.key===n||e.code===n||e.keyCode===n||e.which===n||e.charCode===n}(e,n)}))&&a.current(e)}),[r]);(0,u.useEffect)((function(){if(i&&"undefined"!==typeof window){var e=l?l.current:window;return f.forEach((function(n){e&&e.addEventListener(n,s)})),function(){f.forEach((function(n){e&&e.removeEventListener(n,s)}))}}}),[i,f,r,l,n])}var a=t(9008),l=t(4332);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,u=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(u.push(r.value),!n||u.length!==n);i=!0);}catch(f){c=!0,o=f}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return u}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=Object.keys(o).length;function h(e){var n=e.Component,t=e.pageProps,c=(0,u.useState)(!1),s=c[0],p=c[1],h=(0,u.useState)([0,0]),m=v(h[0],2),b=m[0],O=m[1],w=h[1],E=(0,i.useRouter)(),g=(0,u.useCallback)((function(e){if(!s){var n=((b+e)%d+d)%d;w([n,e]),E.replace(o[n])}}),[s,b,w,E]);return f([8,37],(function(){return g(-1)})),f([13,32,39],(function(){return g(1)})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Kazuma Kano"}),(0,r.jsx)("meta",{name:"description",content:"This is my profile site."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(l.M,{initial:!1,children:(0,r.jsx)(n,y({},t,{setIsInputting:p,pageIndex:b,transDirect:O,setPage:w}))})]})}},906:function(){},9008:function(e,n,t){e.exports=t(5443)},1163:function(e,n,t){e.exports=t(387)},655:function(e,n,t){"use strict";t.d(n,{ZT:function(){return o},pi:function(){return u},_T:function(){return i},XA:function(){return c},CR:function(){return f},ev:function(){return a}});var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)};function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}Object.create;function c(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,u=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return i}function a(e,n,t){if(t||2===arguments.length)for(var r,o=0,u=n.length;o<u;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}Object.create},4332:function(e,n,t){"use strict";t.d(n,{M:function(){return v}});var r=t(655),o=t(7294),u=t(5411);var i=t(240),c=t(6681),f=0;function a(){var e=f;return f++,e}var l=function(e){var n=e.children,t=e.initial,u=e.isPresent,f=e.onExitComplete,l=e.custom,p=e.presenceAffectsLayout,y=(0,c.h)(s),v=(0,c.h)(a),d=(0,o.useMemo)((function(){return{id:v,initial:t,isPresent:u,custom:l,onExitComplete:function(e){var n,t;y.set(e,!0);try{for(var o=(0,r.XA)(y.values()),u=o.next();!u.done;u=o.next()){if(!u.value)return}}catch(i){n={error:i}}finally{try{u&&!u.done&&(t=o.return)&&t.call(o)}finally{if(n)throw n.error}}null===f||void 0===f||f()},register:function(e){return y.set(e,!1),function(){return y.delete(e)}}}}),p?void 0:[u]);return(0,o.useMemo)((function(){y.forEach((function(e,n){return y.set(n,!1)}))}),[u]),o.useEffect((function(){!u&&!y.size&&(null===f||void 0===f||f())}),[u]),o.createElement(i.O.Provider,{value:d},n)};function s(){return new Map}var p=t(5364);function y(e){return e.key||""}var v=function(e){var n=e.children,t=e.custom,i=e.initial,c=void 0===i||i,f=e.onExitComplete,a=e.exitBeforeEnter,s=e.presenceAffectsLayout,v=void 0===s||s,d=(0,r.CR)(function(){var e=(0,o.useRef)(!1),n=(0,r.CR)((0,o.useState)(0),2),t=n[0],i=n[1];return(0,u.z)((function(){return e.current=!0})),[(0,o.useCallback)((function(){!e.current&&i(t+1)}),[t]),t]}(),1),h=d[0],m=(0,o.useContext)(p.p).forceRender;m&&(h=m);var b=(0,o.useRef)(!0),O=(0,o.useRef)(!0);(0,o.useEffect)((function(){return function(){O.current=!1}}),[]);var w=function(e){var n=[];return o.Children.forEach(e,(function(e){(0,o.isValidElement)(e)&&n.push(e)})),n}(n),E=(0,o.useRef)(w),g=(0,o.useRef)(new Map).current,x=(0,o.useRef)(new Set).current;if(function(e,n){e.forEach((function(e){var t=y(e);n.set(t,e)}))}(w,g),b.current)return b.current=!1,o.createElement(o.Fragment,null,w.map((function(e){return o.createElement(l,{key:y(e),isPresent:!0,initial:!!c&&void 0,presenceAffectsLayout:v},e)})));for(var j=(0,r.ev)([],(0,r.CR)(w),!1),C=E.current.map(y),_=w.map(y),S=C.length,k=0;k<S;k++){var P=C[k];-1===_.indexOf(P)?x.add(P):x.delete(P)}return a&&x.size&&(j=[]),x.forEach((function(e){if(-1===_.indexOf(e)){var n=g.get(e);if(n){var r=C.indexOf(e);j.splice(r,0,o.createElement(l,{key:y(n),isPresent:!1,onExitComplete:function(){g.delete(e),x.delete(e);var n=E.current.findIndex((function(n){return n.key===e}));if(E.current.splice(n,1),!x.size){if(E.current=w,!1===O.current)return;h(),f&&f()}},custom:t,presenceAffectsLayout:v},n))}}})),j=j.map((function(e){var n=e.key;return x.has(n)?e:o.createElement(l,{key:y(e),isPresent:!0,presenceAffectsLayout:v},e)})),E.current=j,o.createElement(o.Fragment,null,x.size?j:j.map((function(e){return(0,o.cloneElement)(e)})))}},5364:function(e,n,t){"use strict";t.d(n,{p:function(){return r}});var r=(0,t(7294).createContext)({})},240:function(e,n,t){"use strict";t.d(n,{O:function(){return r}});var r=(0,t(7294).createContext)(null)},6681:function(e,n,t){"use strict";t.d(n,{h:function(){return o}});var r=t(7294);function o(e){var n=(0,r.useRef)(null);return null===n.current&&(n.current=e()),n.current}},5411:function(e,n,t){"use strict";t.d(n,{z:function(){return o}});var r=t(7294);function o(e){return(0,r.useEffect)((function(){return function(){return e()}}),[])}},3697:function(e){"use strict";e.exports=JSON.parse('["/","/publication","/award","/skill","/contact"]')}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var t=e.O();_N_E=t}]);