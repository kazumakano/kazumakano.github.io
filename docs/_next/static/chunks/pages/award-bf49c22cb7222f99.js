(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[448],{8794:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/award",function(){return n(4128)}])},6500:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294);function i(e,t){var n=(0,r.useState)(!0),i=n[0],a=n[1];return(0,r.useEffect)((function(){a(window.matchMedia("(orientation: landscape)").matches)}),[a]),{height:i?"100%":"calc(".concat(t,"% - 2px)"),marginBottom:e[1]?i?"0":"4px":"0",marginLeft:e[0]&&i?"4px":"0",marginRight:e[1]&&i?"4px":"0",marginTop:e[0]?i?"0":"4px":"0",width:i?"calc(".concat(t,"% - 2px)"):"100%"}}},6169:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"});function i(e,t){return null==e||null==t?null:r.format(new Date(t,e-1))}},526:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),i=n(3697),a=n(1163),s=n(7294),c=n(8440),o=n(975),d={enter:function(e){return{x:e>0?2e3:-2e3,opacity:0}},center:{x:0,opacity:1},exit:function(e){return{x:e>0?-2e3:2e3,opacity:0}}};function u(e){var t=e.pageIndex,n=e.transDirect,u=e.setPage,l=e.children,h=(0,a.useRouter)(),x=(0,s.useCallback)((function(e){var n=((t+e)%c.CONTENTS_NUM+c.CONTENTS_NUM)%c.CONTENTS_NUM;u([n,e]),h.replace(i[n])}),[t,u,h]);return(0,r.jsx)("div",{id:"slide",children:(0,r.jsx)(o.E.div,{initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},variants:d,custom:n,drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,t){var n=t.offset,r=t.velocity,i=function(e,t){return Math.abs(e)*t}(n.x,r.x);i<-1e4?x(1):i>1e4&&x(-1)},children:l})})}function l(e){var t=e.title,n=e.noCaps;return(0,r.jsx)("div",{id:"header",children:(0,r.jsx)("h1",{className:n?"no-caps":void 0,children:t})})}function h(e){var t=e.children;return(0,r.jsx)("div",{id:"body",children:t})}function x(e){var t=e.pageIndex,n={before:{pathLength:((t-e.transDirect)%c.CONTENTS_NUM+c.CONTENTS_NUM)%c.CONTENTS_NUM/(c.CONTENTS_NUM-1),opacity:0},after:{pathLength:t/(c.CONTENTS_NUM-1),opacity:1,transition:{pathLength:{type:"spring",duration:1.5,bounce:0},opacity:{duration:.01}}}};return(0,r.jsx)(o.E.svg,{viewBox:"0 0 100 100",initial:"before",animate:"after",fill:"none",id:"progress-icon",children:(0,r.jsx)(o.E.circle,{variants:n,cx:"50",cy:"50",r:"45",stroke:"white",strokeWidth:"10",style:{rotate:270}})})}function f(e){var t=e.children,n=e.pageIndex,i=e.transDirect,a=e.setPage,s=e.title,c=e.noCapsHeader;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u,{pageIndex:n,transDirect:i,setPage:a,children:[(0,r.jsx)(l,{title:s,noCaps:c}),(0,r.jsx)(h,{children:t})]}),(0,r.jsx)(x,{pageIndex:n,transDirect:i})]})}},9507:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=n(6500);function a(e){var t=e.children,n=e.enableMargins,a=e.proportion;return(0,r.jsx)("div",{className:"text-box",style:(0,i.Z)(n,a),children:(0,r.jsx)("div",{children:t})})}},4128:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),i=JSON.parse('[{"date":[2021,11],"title":"\u7b2c2\u56de\u6771\u6d77\u30e6\u30d3\u30ad\u30bf\u30b9\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u7814\u7a76\u5ba4\u5408\u540c\u7814\u7a76\u767a\u8868\u4f1a \u512a\u79c0\u8cde"},{"date":[2022,3],"title":"\u96fb\u5b50\u60c5\u5831\u901a\u4fe1\u5b66\u4f1a\u6771\u6d77\u652f\u90e8 \u4ee4\u548c\u4e09\u5e74\u5ea6\u5b66\u696d\u6210\u7e3e\u512a\u79c0\u8cde"}]'),a=n(526),s=n(9507),c=n(5147),o=n(6169);function d(e){var t=e.pageIndex,n=e.transDirect,d=e.setPage;return(0,r.jsx)(a.Z,{pageIndex:t,transDirect:n,setPage:d,title:"award",children:(0,r.jsx)(s.Z,{enableMargins:[!1,!1],proportion:100,children:(0,r.jsxs)(c.Z,{hover:!0,striped:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"date"}),(0,r.jsx)("th",{children:"title"})]})}),(0,r.jsx)("tbody",{children:i.map((function(e,t){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,o.L)(e.date[1],e.date[0])}),(0,r.jsx)("td",{children:e.title})]},t)}))})]})})})}},5147:function(e,t,n){"use strict";var r=n(4184),i=n.n(r),a=n(7294),s=n(6792),c=n(5893);const o=a.forwardRef((({bsPrefix:e,className:t,striped:n,bordered:r,borderless:a,hover:o,size:d,variant:u,responsive:l,...h},x)=>{const f=(0,s.vE)(e,"table"),p=i()(t,f,u&&`${f}-${u}`,d&&`${f}-${d}`,n&&`${f}-striped`,r&&`${f}-bordered`,a&&`${f}-borderless`,o&&`${f}-hover`),v=(0,c.jsx)("table",{...h,className:p,ref:x});if(l){let e=`${f}-responsive`;return"string"===typeof l&&(e=`${e}-${l}`),(0,c.jsx)("div",{className:e,children:v})}return v}));t.Z=o}},function(e){e.O(0,[590,774,888,179],(function(){return t=8794,e(e.s=t);var t}));var t=e.O();_N_E=t}]);