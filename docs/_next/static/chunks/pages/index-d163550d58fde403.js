(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1366)}])},8786:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(5893),i=n(7294),o=n(5071),s=n(1163),l=n(1427),a=n(2023);let c={enter:e=>({x:e>0?2e3:-2e3,opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e>0?-2e3:2e3,opacity:0})},u=(e,t)=>Math.abs(e)*t;function d(e){let{children:t,pageIndex:n,transDirect:d,setTransDirect:h}=e,p=(0,i.useContext)(o.Rx),g=(0,s.useRouter)(),x=(0,i.useCallback)(e=>{h(e);let t=((n+e)%l.CONTENTS.length+l.CONTENTS.length)%l.CONTENTS.length;g.replace(l.CONTENTS[t])},[n,g,h]);return(0,r.jsx)("div",{id:"slide",children:(0,r.jsx)(a.E.div,{initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},variants:c,custom:d,drag:!!p&&"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(e,t)=>{let{offset:n,velocity:r}=t,i=u(n.x,r.x);i<-1e4?x(1):i>1e4&&x(-1)},children:t})})}function h(e){let{pageIndex:t,transDirect:n}=e,i={before:{pathLength:((t-n)%l.CONTENTS.length+l.CONTENTS.length)%l.CONTENTS.length/(l.CONTENTS.length-1),opacity:0},after:{pathLength:t/(l.CONTENTS.length-1),opacity:1,transition:{pathLength:{type:"spring",duration:1.5,bounce:0},opacity:{duration:.01}}}};return(0,r.jsx)(a.E.svg,{viewBox:"0 0 100 100",initial:"before",animate:"after",fill:"none",id:"progress-icon",children:(0,r.jsx)(a.E.circle,{variants:i,cx:"50",cy:"50",r:"45",stroke:"rgba(255, 255, 255, 0.8)",strokeWidth:"10",style:{rotate:270}})})}let p=(0,r.jsx)("svg",{viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"})}),g=(0,r.jsx)("svg",{viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"})}),x=e=>{let{isLeft:t,pageIndex:n,setTransDirect:a}=e,[c,u]=(0,i.useState)(!1),d=(0,i.useContext)(o.Rx),h=(0,s.useRouter)(),x=(0,i.useCallback)(e=>{a(e);let t=((n+e)%l.CONTENTS.length+l.CONTENTS.length)%l.CONTENTS.length;h.replace(l.CONTENTS[t])},[n,h,a]);return(0,r.jsx)("div",{className:"mv-btn",onClick:()=>x(t?-1:1),onMouseEnter:(0,i.useCallback)(()=>u(!0),[u]),onMouseLeave:(0,i.useCallback)(()=>u(!1),[u]),style:{left:t?"1%":"91%",opacity:d?c?1:0:1},children:t?p:g})};function m(e){let{children:t,pageIndex:n,transDirect:i,setTransDirect:o,title:s,noCapsHeader:l}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d,{pageIndex:n,transDirect:i,setTransDirect:o,children:[(0,r.jsx)("div",{id:"header",children:(0,r.jsx)("h1",{className:l?"no-caps":void 0,children:s})}),(0,r.jsx)("div",{id:"body",children:t})]}),(0,r.jsx)(h,{pageIndex:n,transDirect:i}),(0,r.jsx)(x,{isLeft:!0,pageIndex:n,setTransDirect:o}),(0,r.jsx)(x,{isLeft:!1,pageIndex:n,setTransDirect:o})]})}},1433:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=n(5071);function o(e){let{children:t,enableMargins:n,proportion:o,innerRef:s,outerRef:l}=e;return(0,r.jsx)("div",{className:"text-box",ref:l,style:(0,i.Sg)(n,o),children:(0,r.jsx)("div",{ref:s,children:t})})}},4971:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});let r=new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"});function i(e,t){return null==e||null==t?null:r.format(new Date(t,e-1))}},4017:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294);function i(e,t){let[n,i]=(0,r.useState)([]),[[o,s],l]=(0,r.useState)([-1,-1]),a=e=>{n.push(e),i(n)},c=e=>{if(n[n.findIndex(t=>t.pointerId==e.pointerId)]=e,i(n),null!=t.current&&2==n.length){let e=Math.hypot(n[0].clientX-n[1].clientX,n[0].clientY-n[1].clientY);o<0?l([e,parseFloat(t.current.style.zoom)]):t.current.style.zoom=(e/o*s).toString()}},u=e=>{n.splice(n.findIndex(t=>t.pointerId===e.pointerId),1),i(n),n.length<2&&l([-1,-1])};(0,r.useEffect)(()=>{null!=t.current&&(t.current.style.zoom="1")},[t.current]),(0,r.useEffect)(()=>{null!=e.current&&(e.current.onpointerdown=a,e.current.onpointermove=c,e.current.onpointerup=u,e.current.onpointercancel=u,e.current.onpointerout=u,e.current.onpointerleave=u)})}},8287:function(e,t,n){"use strict";var r=n(3967),i=n.n(r),o=n(7294),s=n(7400),l=n(5893);let a=o.forwardRef((e,t)=>{let{bsPrefix:n,className:r,striped:o,bordered:a,borderless:c,hover:u,size:d,variant:h,responsive:p,...g}=e,x=(0,s.vE)(n,"table"),m=i()(r,x,h&&"".concat(x,"-").concat(h),d&&"".concat(x,"-").concat(d),o&&"".concat(x,"-").concat("string"==typeof o?"striped-".concat(o):"striped"),a&&"".concat(x,"-bordered"),c&&"".concat(x,"-borderless"),u&&"".concat(x,"-hover")),f=(0,l.jsx)("table",{...g,className:m,ref:t});if(p){let e="".concat(x,"-responsive");return"string"==typeof p&&(e="".concat(e,"-").concat(p)),(0,l.jsx)("div",{className:e,children:f})}return f});t.Z=a},1366:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(5893),i=n(4609),o=n.n(i),s=JSON.parse('{"l":[{"term":[[2019,2],[2019,3]],"title":"Oregon Experience Program at the University of Oregon","url":"https://oep.uoregon.edu/"},{"term":[[2020,2],[2020,3]],"title":"Intensive General English Full Time Course at NZLC Auckland","url":"https://nzlc.ac.nz/"},{"term":[[2022,8],[2022,9]],"title":"Internship Engineering Hackathon Course at LINE Corporation","url":"https://linecorp.com/ja/career/newgrads/internship/"},{"term":[[2023,8],[2023,8]],"title":"Learn in Bharat India Bootcamp organized by Suzuki Innovation Centre","url":"https://sites.google.com/iith.ac.in/sicglobal/"},{"term":[[2024,6],[2024,6]],"title":"Asian Student Symposium on Emerging Technologies sponsored by ACM SIGMOBILE","url":"https://www.sigmobile.org/mobisys/2024/asset.html"}],"f":[{"department":"Department of Electrical Engineering, Electronics, and Information Engineering","school":"School of Engineering, Nagoya University","term":[[2018,4],[2022,3]],"url":"https://www.nuee.nagoya-u.ac.jp/"},{"department":"Department of Information and Communication Engineering","school":"Graduate School of Engineering, Nagoya University","term":[[2022,4],null],"url":"https://www.nuee.nagoya-u.ac.jp/"},{"department":"Graduate Program for Lifestyle Revolution based on Transdisciplinary Mobility Innovation","school":"Institutes of Innovation for Future Society, Nagoya University","term":[[2022,4],null],"url":"https://www.tmi.mirai.nagoya-u.ac.jp/"}]}'),l=n(1664),a=n.n(l),c=n(7294),u=n(5071),d=n(4017),h=n(8786),p=n(1433),g=n(8287),x=n(4971);function m(e){let{alt:t,enableMargins:n,proportion:i,src:o}=e;return(0,r.jsx)("div",{className:"img round-img",style:(0,u.Sg)(n,i),children:(0,r.jsx)("img",{alt:t,src:o})})}let f=["indoor positioning","activity recognition","computer vision","deep learning"],v=e=>{let{children:t,url:n}=e;return(0,r.jsx)("td",{children:(0,r.jsx)(a(),{href:n,target:"_blank",children:t})})},j=(0,r.jsx)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:(0,r.jsx)("path",{d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})});function N(e){let{pageIndex:t,transDirect:n,setTransDirect:i}=e,[l,a]=(0,c.useState)((0,r.jsx)(r.Fragment,{})),N=(0,c.useContext)(u.Rx),y=(0,c.useRef)(null),b=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=window.setTimeout(a,5e3,(0,r.jsx)("div",{className:o().hintMsg,children:(0,r.jsxs)("p",{children:["press ",(0,r.jsx)("kbd",{children:"Enter"})," or swipe ",j]})}));return()=>window.clearTimeout(e)},[a]),(0,d.Z)(y,b),(0,r.jsxs)(r.Fragment,{children:[N?l:null,(0,r.jsxs)(h.Z,{pageIndex:t,transDirect:n,setTransDirect:i,title:"biography",children:[(0,r.jsxs)(p.Z,{enableMargins:[!1,!0],proportion:70,innerRef:b,outerRef:y,children:[(0,r.jsx)("p",{className:o().greeting,children:"Kazuma KANO / 加納 一馬"}),(0,r.jsx)("ul",{className:o().tags,children:f.map((e,t)=>(0,r.jsx)("li",{children:e},t))}),(0,r.jsx)("h2",{children:"education"}),(0,r.jsx)(g.Z,{borderless:!0,className:o().eduTable,children:s.f.map((e,t)=>{var n,i,o,s;return(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{rowSpan:2,children:(0,x.L)(null===(n=e.term[0])||void 0===n?void 0:n[1],null===(i=e.term[0])||void 0===i?void 0:i[0])}),(0,r.jsx)("td",{rowSpan:2,children:"~"}),(0,r.jsx)("td",{rowSpan:2,children:(0,x.L)(null===(o=e.term[1])||void 0===o?void 0:o[1],null===(s=e.term[1])||void 0===s?void 0:s[0])}),(0,r.jsx)(v,{url:e.url,children:e.department})]}),(0,r.jsx)("tr",{children:(0,r.jsx)(v,{url:e.url,children:e.school})})]},t)})}),(0,r.jsx)("h2",{children:"activities"}),(0,r.jsx)(g.Z,{borderless:!0,className:o().expTable,children:(0,r.jsx)("tbody",{children:s.l.map((e,t)=>{var n,i,o,s;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,x.L)(null===(n=e.term[0])||void 0===n?void 0:n[1],null===(i=e.term[0])||void 0===i?void 0:i[0])}),(0,r.jsx)("td",{children:"~"}),(0,r.jsx)("td",{children:(0,x.L)(null===(o=e.term[1])||void 0===o?void 0:o[1],null===(s=e.term[1])||void 0===s?void 0:s[0])}),(0,r.jsx)(v,{url:e.url,children:e.title})]},t)})})})]}),(0,r.jsx)(m,{alt:"avatar",enableMargins:[!0,!1],proportion:30,src:"/portrait.jpeg"})]})]})}},4609:function(e){e.exports={greeting:"Home_greeting__KB877",tags:"Home_tags__6k6pO",eduTable:"Home_eduTable__s_h8v",expTable:"Home_expTable__Y54AG",hintMsg:"Home_hintMsg__5abtb",blink:"Home_blink__F0rMx"}}},function(e){e.O(0,[278,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);