(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657],{4333:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publication",function(){return n(4889)}])},6500:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294);function i(e,t){var n=(0,r.useState)(!0),i=n[0],a=n[1];return(0,r.useEffect)((function(){a(window.matchMedia("(orientation: landscape)").matches)}),[a]),{height:i?"100%":"calc(".concat(t,"% - 2px)"),marginBottom:e[1]?i?"0":"4px":"0",marginLeft:e[0]&&i?"4px":"0",marginRight:e[1]&&i?"4px":"0",marginTop:e[0]?i?"0":"4px":"0",width:i?"calc(".concat(t,"% - 2px)"):"100%"}}},2072:function(e,t,n){"use strict";n.d(t,{f:function(){return u},k:function(){return p}});var r=n(4051),i=n.n(r),a=n(5893),s=n(7294),c=n(3680),o=n(1664);function d(e,t,n,r,i,a,s){try{var c=e[a](s),o=c.value}catch(d){return void n(d)}c.done?t(o):Promise.resolve(o).then(r,i)}var l=(0,a.jsxs)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:[(0,a.jsx)("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),(0,a.jsx)("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})]}),h=(0,a.jsx)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:(0,a.jsx)("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"})});function u(e){var t,n=e.text,r=(0,s.useState)(l),o=r[0],u=r[1],x=(0,s.useCallback)((t=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.navigator.clipboard.writeText(n);case 2:u(h);case 3:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(e){d(a,r,i,s,c,"next",e)}function c(e){d(a,r,i,s,c,"throw",e)}s(void 0)}))}),[u,n]),p=(0,s.useCallback)((function(e){e.currentTarget.blur(),window.setTimeout(u,1e3,l)}),[u]);return(0,a.jsx)(c.Z,{size:"sm",variant:"outline-dark",onClick:x,onMouseLeave:p,className:"btn copy-btn shadow-none",children:o})}var x=(0,a.jsx)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:(0,a.jsx)("path",{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"})});function p(e){var t=e.uri;return(0,a.jsx)(o.default,{href:t,passHref:!0,children:(0,a.jsx)(c.Z,{size:"sm",variant:"dark",className:"btn mailer-btn shadow-none",children:x})})}},6169:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"});function i(e,t){return null==e||null==t?null:r.format(new Date(t,e-1))}},526:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),i=n(3697),a=n(1163),s=n(7294),c=n(8440),o=n(975),d={enter:function(e){return{x:e>0?2e3:-2e3,opacity:0}},center:{x:0,opacity:1},exit:function(e){return{x:e>0?-2e3:2e3,opacity:0}}};function l(e){var t=e.pageIndex,n=e.transDirect,l=e.setPage,h=e.children,u=(0,a.useRouter)(),x=(0,s.useCallback)((function(e){var n=((t+e)%c.CONTENTS_NUM+c.CONTENTS_NUM)%c.CONTENTS_NUM;l([n,e]),u.replace(i[n])}),[t,l,u]);return(0,r.jsx)("div",{id:"slide",children:(0,r.jsx)(o.E.div,{initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},variants:d,custom:n,drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,t){var n=t.offset,r=t.velocity,i=function(e,t){return Math.abs(e)*t}(n.x,r.x);i<-1e4?x(1):i>1e4&&x(-1)},children:h})})}function h(e){var t=e.title,n=e.noCaps;return(0,r.jsx)("div",{id:"header",children:(0,r.jsx)("h1",{className:n?"no-caps":void 0,children:t})})}function u(e){var t=e.children;return(0,r.jsx)("div",{id:"body",children:t})}function x(e){var t=e.pageIndex,n={before:{pathLength:((t-e.transDirect)%c.CONTENTS_NUM+c.CONTENTS_NUM)%c.CONTENTS_NUM/(c.CONTENTS_NUM-1),opacity:0},after:{pathLength:t/(c.CONTENTS_NUM-1),opacity:1,transition:{pathLength:{type:"spring",duration:1.5,bounce:0},opacity:{duration:.01}}}};return(0,r.jsx)(o.E.svg,{viewBox:"0 0 100 100",initial:"before",animate:"after",fill:"none",id:"progress-icon",children:(0,r.jsx)(o.E.circle,{variants:n,cx:"50",cy:"50",r:"45",stroke:"white",strokeWidth:"10",style:{rotate:270}})})}function p(e){var t=e.children,n=e.pageIndex,i=e.transDirect,a=e.setPage,s=e.title,c=e.noCapsHeader;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l,{pageIndex:n,transDirect:i,setPage:a,children:[(0,r.jsx)(h,{title:s,noCaps:c}),(0,r.jsx)(u,{children:t})]}),(0,r.jsx)(x,{pageIndex:n,transDirect:i})]})}},9507:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=n(6500);function a(e){var t=e.children,n=e.enableMargins,a=e.proportion;return(0,r.jsx)("div",{className:"text-box",style:(0,i.Z)(n,a),children:(0,r.jsx)("div",{children:t})})}},4889:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),i=JSON.parse('{"m":[{"authorship":"co-author","conference":"WSSIT 2022","date":[2022,3],"title":"\u6a5f\u68b0\u5b66\u7fd2\u306b\u3088\u308b\u6163\u6027\u30bb\u30f3\u30b5\u3092\u7528\u3044\u305f\u8ee2\u5012\u52d5\u4f5c\u691c\u77e5\u306b\u95a2\u3059\u308b\u7814\u7a76","type":"proceedings"},{"authorship":"lead author","conference":"DICOMO 2022","date":[2022,7],"title":"\u7269\u6d41\u5009\u5eab\u306b\u304a\u3051\u308b\u30bd\u30fc\u30e9\u30fc\u5f0fBLE\u30d3\u30fc\u30b3\u30f3\u3068PDR\u3092\u7528\u3044\u305f\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9\u6e2c\u4f4d","type":"proceedings"}],"L":[{"authorship":"co-author","conference":"ABC 2021","date":[2021,10],"title":"A Data-Driven Approach for Online Pre-impact Fall Detection with Wearable Devices","type":"proceedings"},{"authorship":"lead author","conference":"HCI International 2022","date":[2022,6],"title":"Smartphone Localization with Solar-Powered BLE Beacons in Warehouse","type":"proceedings"},{"authorship":null,"conference":"SCEWC 22","date":[2022,11],"title":"Smart Warehouse","type":"exhibition"}]}'),a=n(5147),s=n(6169),c=n(2072),o=n(526),d=n(9507),l=function(e){var t=e.isInternational;return(0,r.jsxs)(a.Z,{hover:!0,striped:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"date"}),(0,r.jsx)("th",{children:"title"}),(0,r.jsx)("th",{children:"type"}),(0,r.jsx)("th",{children:"conference"}),(0,r.jsx)("th",{children:"authorship"}),(0,r.jsx)("th",{})]})}),(0,r.jsx)("tbody",{children:(t?i.L:i.m).map((function(e,t){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,s.L)(e.date[1],e.date[0])}),(0,r.jsx)("td",{children:e.title}),(0,r.jsx)("td",{children:e.type}),(0,r.jsx)("td",{children:e.conference}),(0,r.jsx)("td",{children:e.authorship}),(0,r.jsx)("td",{children:(0,r.jsx)(c.f,{text:e.title})})]},t)}))})]})};function h(e){var t=e.pageIndex,n=e.transDirect,i=e.setPage;return(0,r.jsx)(o.Z,{pageIndex:t,transDirect:n,setPage:i,title:"Presentation & Publication",children:(0,r.jsxs)(d.Z,{enableMargins:[!1,!1],proportion:100,children:[(0,r.jsx)("h2",{children:"international"}),(0,r.jsx)(l,{isInternational:!0}),(0,r.jsx)("h2",{children:"domestic"}),(0,r.jsx)(l,{isInternational:!1})]})})}},5147:function(e,t,n){"use strict";var r=n(4184),i=n.n(r),a=n(7294),s=n(6792),c=n(5893);const o=a.forwardRef((({bsPrefix:e,className:t,striped:n,bordered:r,borderless:a,hover:o,size:d,variant:l,responsive:h,...u},x)=>{const p=(0,s.vE)(e,"table"),f=i()(t,p,l&&`${p}-${l}`,d&&`${p}-${d}`,n&&`${p}-striped`,r&&`${p}-bordered`,a&&`${p}-borderless`,o&&`${p}-hover`),v=(0,c.jsx)("table",{...u,className:f,ref:x});if(h){let e=`${p}-responsive`;return"string"===typeof h&&(e=`${e}-${h}`),(0,c.jsx)("div",{className:e,children:v})}return v}));t.Z=o}},function(e){e.O(0,[590,676,774,888,179],(function(){return t=4333,e(e.s=t);var t}));var t=e.O();_N_E=t}]);