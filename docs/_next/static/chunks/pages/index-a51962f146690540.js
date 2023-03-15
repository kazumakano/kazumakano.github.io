(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2928)}])},6500:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(7294);function i(e,n){var r=(0,t.useState)(!0),i=r[0],a=r[1];return(0,t.useEffect)((function(){a(window.matchMedia("(orientation: landscape)").matches)}),[a]),{height:i?"100%":"calc(".concat(n,"% - 2px)"),marginBottom:e[1]?i?"0":"4px":"0",marginLeft:e[0]&&i?"4px":"0",marginRight:e[1]&&i?"4px":"0",marginTop:e[0]?i?"0":"4px":"0",width:i?"calc(".concat(n,"% - 2px)"):"100%"}}},6169:function(e,n,r){"use strict";r.d(n,{L:function(){return i}});var t=new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"});function i(e,n){return null==e||null==n?null:t.format(new Date(n,e-1))}},526:function(e,n,r){"use strict";r.d(n,{Z:function(){return g}});var t=r(5893),i=r(3697),a=r(1163),s=r(7294),o=r(1363),c=r(2023),l={enter:function(e){return{x:e>0?2e3:-2e3,opacity:0}},center:{x:0,opacity:1},exit:function(e){return{x:e>0?-2e3:2e3,opacity:0}}};function d(e){var n=e.pageIndex,r=e.transDirect,d=e.setPage,u=e.children,h=(0,a.useRouter)(),p=(0,s.useCallback)((function(e){var r=((n+e)%o.CONTENTS_NUM+o.CONTENTS_NUM)%o.CONTENTS_NUM;d([r,e]),h.replace(i[r])}),[n,d,h]);return(0,t.jsx)("div",{id:"slide",children:(0,t.jsx)(c.E.div,{initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},variants:l,custom:r,drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,n){var r=n.offset,t=n.velocity,i=function(e,n){return Math.abs(e)*n}(r.x,t.x);i<-1e4?p(1):i>1e4&&p(-1)},children:u})})}function u(e){var n=e.title,r=e.noCaps;return(0,t.jsx)("div",{id:"header",children:(0,t.jsx)("h1",{className:r?"no-caps":void 0,children:n})})}function h(e){var n=e.children;return(0,t.jsx)("div",{id:"body",children:n})}function p(e){var n=e.pageIndex,r={before:{pathLength:((n-e.transDirect)%o.CONTENTS_NUM+o.CONTENTS_NUM)%o.CONTENTS_NUM/(o.CONTENTS_NUM-1),opacity:0},after:{pathLength:n/(o.CONTENTS_NUM-1),opacity:1,transition:{pathLength:{type:"spring",duration:1.5,bounce:0},opacity:{duration:.01}}}};return(0,t.jsx)(c.E.svg,{viewBox:"0 0 100 100",initial:"before",animate:"after",fill:"none",id:"progress-icon",children:(0,t.jsx)(c.E.circle,{variants:r,cx:"50",cy:"50",r:"45",stroke:"white",strokeWidth:"10",style:{rotate:270}})})}function g(e){var n=e.children,r=e.pageIndex,i=e.transDirect,a=e.setPage,s=e.title,o=e.noCapsHeader;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d,{pageIndex:r,transDirect:i,setPage:a,children:[(0,t.jsx)(u,{title:s,noCaps:o}),(0,t.jsx)(h,{children:n})]}),(0,t.jsx)(p,{pageIndex:r,transDirect:i})]})}},9507:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var t=r(5893),i=r(6500);function a(e){var n=e.children,r=e.enableMargins,a=e.proportion;return(0,t.jsx)("div",{className:"text-box",style:(0,i.Z)(r,a),children:(0,t.jsx)("div",{children:n})})}},2928:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(5893),i=r(214),a=r.n(i),s=JSON.parse('{"f":[{"department":"Department of Electrical Engineering, Electronics, and Information Engineering","school":"School of Engineering, Nagoya University","term":[[2018,4],[2022,3]],"url":"https://www.nuee.nagoya-u.ac.jp/"},{"department":"Department of Information and Communication Engineering","school":"Graduate School of Engineering, Nagoya University","term":[[2022,4],null],"url":"https://www.nuee.nagoya-u.ac.jp/"}],"b":[{"term":[[2019,2],[2019,3]],"title":"Oregon Experience Program at the University of Oregon","url":"https://oep.uoregon.edu/"},{"term":[[2020,2],[2020,3]],"title":"Intensive General English Full Time Course at NZLC Auckland","url":"https://nzlc.ac.nz/"},{"term":[[2022,4],null],"title":"Graduate Program for Lifestyle Revolution based on Transdisciplinary Mobility Innovation","url":"https://www.tmi.mirai.nagoya-u.ac.jp/"},{"term":[[2022,8],[2022,9]],"title":"Internship Engineering Hackathon Course at LINE Corporation","url":"https://linecorp.com/ja/career/newgrads/internship/"}]}'),o=r(1664),c=r(7294),l=r(526),d=r(9507),u=r(5147),h=r(6169),p=r(6500);function g(e){var n=e.alt,r=e.enableMargins,i=e.proportion,a=e.src;return(0,t.jsx)("div",{className:"img round-img",style:(0,p.Z)(r,i),children:(0,t.jsx)("img",{alt:n,src:a})})}var x=["indoor positioning","human activity recognition","human computer interaction","deep learning"],m=function(e){var n=e.children,r=e.url;return(0,t.jsx)("td",{children:(0,t.jsx)(o.default,{href:r,children:(0,t.jsx)("a",{target:"_blank",children:n})})})},f=(0,t.jsx)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:(0,t.jsx)("path",{d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})});function v(e){var n=e.pageIndex,r=e.transDirect,i=e.setPage,o=(0,c.useState)((0,t.jsx)(t.Fragment,{})),p=o[0],v=o[1];return(0,c.useEffect)((function(){var e=window.setTimeout(v,5e3,(0,t.jsx)("div",{className:a().hintMsg,children:(0,t.jsxs)("p",{children:["press ",(0,t.jsx)("kbd",{children:"Enter"})," or swipe ",f]})}));return function(){return window.clearTimeout(e)}}),[v]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.Z,{pageIndex:n,transDirect:r,setPage:i,title:"about me",children:[(0,t.jsxs)(d.Z,{enableMargins:[!1,!0],proportion:70,children:[(0,t.jsx)("p",{className:a().greeting,children:"kazuma kano"}),(0,t.jsx)("ul",{className:a().tags,children:x.map((function(e,n){return(0,t.jsx)("li",{children:e},n)}))}),(0,t.jsx)("h2",{children:"education"}),(0,t.jsx)(u.Z,{borderless:!0,className:a().eduTable,children:s.f.map((function(e,n){var r,i,a,s;return(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowSpan:2,children:(0,h.L)(null===(r=e.term[0])||void 0===r?void 0:r[1],null===(i=e.term[0])||void 0===i?void 0:i[0])}),(0,t.jsx)("td",{rowSpan:2,children:"~"}),(0,t.jsx)("td",{rowSpan:2,children:(0,h.L)(null===(a=e.term[1])||void 0===a?void 0:a[1],null===(s=e.term[1])||void 0===s?void 0:s[0])}),(0,t.jsx)(m,{url:e.url,children:e.department})]}),(0,t.jsx)("tr",{children:(0,t.jsx)(m,{url:e.url,children:e.school})})]},n)}))}),(0,t.jsx)("h2",{children:"experience"}),(0,t.jsx)(u.Z,{borderless:!0,className:a().expTable,children:(0,t.jsx)("tbody",{children:s.b.map((function(e,n){var r,i,a,s;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,h.L)(null===(r=e.term[0])||void 0===r?void 0:r[1],null===(i=e.term[0])||void 0===i?void 0:i[0])}),(0,t.jsx)("td",{children:"~"}),(0,t.jsx)("td",{children:(0,h.L)(null===(a=e.term[1])||void 0===a?void 0:a[1],null===(s=e.term[1])||void 0===s?void 0:s[0])}),(0,t.jsx)(m,{url:e.url,children:e.title})]},n)}))})})]}),(0,t.jsx)(g,{alt:"avatar",enableMargins:[!0,!1],proportion:30,src:"https://github.com/".concat("kazumakano",".png")})]}),p]})}},214:function(e){e.exports={greeting:"Home_greeting__PBgQH",tags:"Home_tags__vQZA2",eduTable:"Home_eduTable__7zBWW",expTable:"Home_expTable__1frew",hintMsg:"Home_hintMsg__F2x0m",blink:"Home_blink__Jd6j3"}},5147:function(e,n,r){"use strict";var t=r(4184),i=r.n(t),a=r(7294),s=r(6792),o=r(5893);const c=a.forwardRef((({bsPrefix:e,className:n,striped:r,bordered:t,borderless:a,hover:c,size:l,variant:d,responsive:u,...h},p)=>{const g=(0,s.vE)(e,"table"),x=i()(n,g,d&&`${g}-${d}`,l&&`${g}-${l}`,r&&`${g}-${"string"===typeof r?`striped-${r}`:"striped"}`,t&&`${g}-bordered`,a&&`${g}-borderless`,c&&`${g}-hover`),m=(0,o.jsx)("table",{...h,className:x,ref:p});if(u){let e=`${g}-responsive`;return"string"===typeof u&&(e=`${e}-${u}`),(0,o.jsx)("div",{className:e,children:m})}return m}));n.Z=c}},function(e){e.O(0,[508,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);