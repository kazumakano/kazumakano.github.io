(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{8957:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/achievement",function(){return n(5238)}])},6455:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(5893),i=n(7294),a=n(9231),c=n(1163),s=n(1363),o=n(2023),l={enter:function(e){return{x:e>0?2e3:-2e3,opacity:0}},center:{x:0,opacity:1},exit:function(e){return{x:e>0?-2e3:2e3,opacity:0}}};function u(e){var t=e.children,n=e.pageIndex,u=e.transDirect,d=e.setTransDirect,f=(0,i.useContext)(a.Rx),h=(0,c.useRouter)(),p=(0,i.useCallback)((function(e){d(e);var t=((n+e)%s.CONTENTS.length+s.CONTENTS.length)%s.CONTENTS.length;h.replace(s.CONTENTS[t])}),[n,h,d]);return(0,r.jsx)("div",{id:"slide",children:(0,r.jsx)(o.E.div,{initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},variants:l,custom:u,drag:!!f&&"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,t){var n=t.offset,r=t.velocity,i=function(e,t){return Math.abs(e)*t}(n.x,r.x);i<-1e4?p(1):i>1e4&&p(-1)},children:t})})}function d(e){var t=e.pageIndex,n={before:{pathLength:((t-e.transDirect)%s.CONTENTS.length+s.CONTENTS.length)%s.CONTENTS.length/(s.CONTENTS.length-1),opacity:0},after:{pathLength:t/(s.CONTENTS.length-1),opacity:1,transition:{pathLength:{type:"spring",duration:1.5,bounce:0},opacity:{duration:.01}}}};return(0,r.jsx)(o.E.svg,{viewBox:"0 0 100 100",initial:"before",animate:"after",fill:"none",id:"progress-icon",children:(0,r.jsx)(o.E.circle,{variants:n,cx:"50",cy:"50",r:"45",stroke:"white",strokeWidth:"10",style:{rotate:270}})})}var f=(0,r.jsx)("svg",{viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"})}),h=(0,r.jsx)("svg",{viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"})}),p=function(e){var t=e.isLeft,n=e.pageIndex,o=e.setTransDirect,l=(0,i.useState)(!1),u=l[0],d=l[1],p=(0,i.useContext)(a.Rx),x=(0,c.useRouter)(),v=(0,i.useCallback)((function(e){o(e);var t=((n+e)%s.CONTENTS.length+s.CONTENTS.length)%s.CONTENTS.length;x.replace(s.CONTENTS[t])}),[n,x,o]);return(0,r.jsx)("div",{className:"mv-btn",onClick:function(){return v(t?-1:1)},onMouseEnter:(0,i.useCallback)((function(){return d(!0)}),[d]),onMouseLeave:(0,i.useCallback)((function(){return d(!1)}),[d]),style:{left:t?"0%":"92%",opacity:p?u?1:0:1},children:t?f:h})};function x(e){var t=e.children,n=e.pageIndex,i=e.transDirect,a=e.setTransDirect,c=e.title,s=e.noCapsHeader;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u,{pageIndex:n,transDirect:i,setTransDirect:a,children:[(0,r.jsx)("div",{id:"header",children:(0,r.jsx)("h1",{className:s?"no-caps":void 0,children:c})}),(0,r.jsx)("div",{id:"body",children:t})]}),(0,r.jsx)(d,{pageIndex:n,transDirect:i}),(0,r.jsx)(p,{isLeft:!0,pageIndex:n,setTransDirect:a}),(0,r.jsx)(p,{isLeft:!1,pageIndex:n,setTransDirect:a})]})}},9507:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=n(9231);function a(e){var t=e.children,n=e.enableMargins,a=e.proportion,c=e.innerRef,s=e.outerRef;return(0,r.jsx)("div",{className:"text-box",ref:s,style:(0,i.Sg)(n,a),children:(0,r.jsx)("div",{ref:c,children:t})})}},8459:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"});function i(e,t){return null==e||null==t?null:r.format(new Date(t,e-1))}},9564:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],c=!0,s=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(o){s=!0,i=o}finally{try{c||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){var n=(0,r.useState)([]),i=n[0],c=n[1],s=(0,r.useState)([-1,-1]),o=a(s[0],2),l=o[0],u=o[1],d=s[1],f=function(e){i.push(e),c(i)},h=function(e){if(i[i.findIndex((function(t){return t.pointerId==e.pointerId}))]=e,c(i),null!=t.current&&2==i.length){var n=Math.hypot(i[0].clientX-i[1].clientX,i[0].clientY-i[1].clientY);l<0?d([n,parseFloat(t.current.style.zoom)]):t.current.style.zoom=(n/l*u).toString()}},p=function(e){i.splice(i.findIndex((function(t){return t.pointerId===e.pointerId})),1),c(i),i.length<2&&d([-1,-1])};(0,r.useEffect)((function(){null!=t.current&&(t.current.style.zoom="1")}),[t.current]),(0,r.useEffect)((function(){null!=e.current&&(e.current.onpointerdown=f,e.current.onpointermove=h,e.current.onpointerup=p,e.current.onpointercancel=p,e.current.onpointerout=p,e.current.onpointerleave=p)}))}},5238:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),i=n(8147),a=n.n(i),c=JSON.parse('{"R":[{"date":[2021,11],"title":"\u7b2c2\u56de\u6771\u6d77\u30e6\u30d3\u30ad\u30bf\u30b9\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u7814\u7a76\u5ba4\u5408\u540c\u7814\u7a76\u767a\u8868\u4f1a \u512a\u79c0\u8cde"},{"date":[2022,3],"title":"\u96fb\u5b50\u60c5\u5831\u901a\u4fe1\u5b66\u4f1a\u6771\u6d77\u652f\u90e8 \u4ee4\u548c\u4e09\u5e74\u5ea6\u5b66\u696d\u6210\u7e3e\u512a\u79c0\u8cde"},{"date":[2023,9],"title":"10th IPIN Competition on Indoor Localization Track 5 2nd Place","url":"https://unit.aist.go.jp/harc/xDR-Challenge-2023/"}],"l":[{"date":[2023,2],"title":"JDLA Deep Learning for ENGINEER 2023 #1","url":"https://www.jdla.org/certificate/engineer/"}]}'),s=n(7294),o=n(9564),l=n(6455),u=n(9507),d=n(5147),f=n(8459),h=n(1664),p=function(e){var t=e.children,n=e.url;return(0,r.jsx)("td",{children:(0,r.jsx)(h.default,{href:n,children:(0,r.jsx)("a",{target:"_blank",children:t})})})};function x(e){var t=e.pageIndex,n=e.transDirect,i=e.setTransDirect,h=(0,s.useRef)(null),x=(0,s.useRef)(null);return(0,o.Z)(h,x),(0,r.jsx)(l.Z,{pageIndex:t,transDirect:n,setTransDirect:i,title:"achievement",children:(0,r.jsxs)(u.Z,{enableMargins:[!1,!1],proportion:100,innerRef:x,outerRef:h,children:[(0,r.jsx)("h2",{children:"award"}),(0,r.jsx)(d.Z,{borderless:!0,className:a().achieveTable,children:(0,r.jsx)("tbody",{children:c.R.map((function(e,t){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,f.L)(e.date[1],e.date[0])}),e.url?(0,r.jsx)(p,{url:e.url,children:e.title}):(0,r.jsx)("td",{children:e.title})]},t)}))})}),(0,r.jsx)("h2",{children:"qualification"}),(0,r.jsx)(d.Z,{borderless:!0,className:a().achieveTable,children:(0,r.jsx)("tbody",{children:c.l.map((function(e,t){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,f.L)(e.date[1],e.date[0])}),(0,r.jsx)(p,{url:e.url,children:e.title})]},t)}))})})]})})}},8147:function(e){e.exports={achieveTable:"Achievement_achieveTable__Pu45f"}},5147:function(e,t,n){"use strict";var r=n(4184),i=n.n(r),a=n(7294),c=n(6792),s=n(5893);const o=a.forwardRef((({bsPrefix:e,className:t,striped:n,bordered:r,borderless:a,hover:o,size:l,variant:u,responsive:d,...f},h)=>{const p=(0,c.vE)(e,"table"),x=i()(t,p,u&&`${p}-${u}`,l&&`${p}-${l}`,n&&`${p}-${"string"===typeof n?`striped-${n}`:"striped"}`,r&&`${p}-bordered`,a&&`${p}-borderless`,o&&`${p}-hover`),v=(0,s.jsx)("table",{...f,className:x,ref:h});if(d){let e=`${p}-responsive`;return"string"===typeof d&&(e=`${e}-${d}`),(0,s.jsx)("div",{className:e,children:v})}return v}));t.Z=o}},function(e){e.O(0,[508,774,888,179],(function(){return t=8957,e(e.s=t);var t}));var t=e.O();_N_E=t}]);