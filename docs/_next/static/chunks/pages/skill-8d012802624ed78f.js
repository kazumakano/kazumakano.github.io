(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{3930:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skill",function(){return r(4908)}])},6916:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var t=r(7294);function a(e,n){var r=(0,t.useState)(!0),a=r[0],i=r[1];return(0,t.useEffect)((function(){i(window.matchMedia("(orientation: landscape)").matches)}),[]),{height:a?"100%":"calc(".concat(n,"% - 2px)"),marginBottom:e[1]?a?"0":"4px":"0",marginLeft:e[0]&&a?"4px":"0",marginRight:e[1]&&a?"4px":"0",marginTop:e[0]?a?"0":"4px":"0",width:a?"calc(".concat(n,"% - 2px)"):"100%"}}},526:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(5893),a=r(3697),i=r(1163),s=r(7294),c=r(8440),o=r(975),l={enter:function(e){return{x:e>0?2e3:-2e3,opacity:0}},center:{x:0,opacity:1},exit:function(e){return{x:e>0?-2e3:2e3,opacity:0}}};function u(e){var n=e.pageIndex,r=e.transDirect,u=e.setPage,d=e.children,x=(0,i.useRouter)(),h=(0,s.useCallback)((function(e){var r=((n+e)%c.CONTENTS_NUM+c.CONTENTS_NUM)%c.CONTENTS_NUM;u([r,e]),x.replace(a[r])}),[n,u,x]);return(0,t.jsx)("div",{id:"slide",children:(0,t.jsx)(o.E.div,{initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},variants:l,custom:r,drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,n){var r=n.offset,t=n.velocity,a=function(e,n){return Math.abs(e)*n}(r.x,t.x);a<-1e4?h(1):a>1e4&&h(-1)},children:d})})}function d(e){var n=e.title;return(0,t.jsx)("div",{id:"header",children:(0,t.jsx)("h1",{children:n})})}function x(e){var n=e.children;return(0,t.jsx)("div",{id:"body",children:n})}function h(e){var n=e.pageIndex,r={before:{pathLength:((n-e.transDirect)%c.CONTENTS_NUM+c.CONTENTS_NUM)%c.CONTENTS_NUM/(c.CONTENTS_NUM-1),opacity:0},after:{pathLength:n/(c.CONTENTS_NUM-1),opacity:1,transition:{pathLength:{type:"spring",duration:1.5,bounce:0},opacity:{duration:.01}}}};return(0,t.jsx)(o.E.svg,{viewBox:"0 0 100 100",initial:"before",animate:"after",fill:"none",id:"progress-icon",children:(0,t.jsx)(o.E.circle,{variants:r,cx:"50",cy:"50",r:"45",stroke:"white",strokeWidth:"10",style:{rotate:270}})})}function p(e){var n=e.children,r=e.pageIndex,a=e.transDirect,i=e.setPage,s=e.title;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u,{pageIndex:r,transDirect:a,setPage:i,children:[(0,t.jsx)(d,{title:s}),(0,t.jsx)(x,{children:n})]}),(0,t.jsx)(h,{pageIndex:r,transDirect:a})]})}},9507:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(5893),a=r(6916);function i(e){var n=e.children,r=e.enableMargins,i=e.proportion;return(0,t.jsx)("div",{className:"text-box",style:(0,a.Z)(r,i),children:(0,t.jsx)("div",{children:n})})}},4908:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return S}});var t=r(5893),a=r(526),i=r(9507),s=r(1539),c=r.n(s),o=r(7294),l=r(4051),u=r.n(l),d=r(1522);function x(e,n,r,t,a,i,s){try{var c=e[i](s),o=c.value}catch(l){return void r(l)}c.done?n(o):Promise.resolve(o).then(t,a)}function h(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function s(e){x(i,t,a,s,c,"next",e)}function c(e){x(i,t,a,s,c,"throw",e)}s(void 0)}))}}function p(){return(p=h(u().mark((function e(n,r){var t,a,i,s,c,o,l,x,h,p,f;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.v(null==r?void 0:{auth:r}),e.next=3,t.request("GET /users/{username}/repos",{username:n});case 3:a=e.sent,i={},s=!0,c=!1,o=void 0,e.prev=6,l=a.data[Symbol.iterator]();case 8:if(s=(x=l.next()).done){e.next=17;break}return h=x.value,e.next=12,t.request("GET /repos/{owner}/{repo}/languages",{owner:n,repo:h.name});case 12:for(f in(p=e.sent).data)f in i?i[f]+=p.data[f]:i[f]=p.data[f];case 14:s=!0,e.next=8;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(6),c=!0,o=e.t0;case 23:e.prev=23,e.prev=24,s||null==l.return||l.return();case 26:if(e.prev=26,!c){e.next=29;break}throw o;case 29:return e.finish(26);case 30:return e.finish(23);case 31:return e.abrupt("return",i);case 32:case"end":return e.stop()}}),e,null,[[6,19,23,31],[24,,26,30]])})))).apply(this,arguments)}var f=r(6968),v=[{colors:{C:"#555555","C++":"#f34b7d"},label:"C / C++"},{colors:{Go:"#375eab"},label:"Go"},{colors:{HTML:"#e44b23",CSS:"#563d7c"},label:"HTML / CSS"},{colors:{Java:"#b07219"},label:"Java"},{colors:{JavaScript:"#f1e05a",TypeScript:"#2b7489"},label:"JS / TS"},{colors:{Python:"#3572a5","Jupyter Notebook":"#da5b0b"},label:"Python"}],g=function(){var e=(0,o.useState)(null),n=e[0],r=e[1];return(0,o.useEffect)((function(){var e=!0;return function(e,n){return p.apply(this,arguments)}("kazumakano").then((function(n){e&&r(n)})),function(){e=!1}})),n};function C(){var e=g();return null==e?(0,t.jsx)(f.Z,{animation:"border",variant:"dark",className:c().spinner}):(0,t.jsx)(t.Fragment,{children:v.map((function(n,r){return(0,t.jsx)("div",{className:c().langBar,children:(0,t.jsxs)("div",{className:"progress",children:[Object.keys(n.colors).map((function(r,a){return(0,t.jsx)("div",{style:{backgroundColor:n.colors[r],width:"".concat(r in e?(i=e[r],i/1e4):0,"%")}},a);var i})),(0,t.jsx)("span",{className:c().label,children:n.label})]})},r)}))})}var j=r(7006),m=r.n(j),b=r(1664),y=r(4332),k=r(975);function N(e){var n=e.color,r=e.icon,a=e.index,i=e.name,s=e.url,c=(0,o.useState)(!1),l=c[0],u=c[1],d=(0,t.jsx)("div",{className:m().nameTile,style:{backgroundColor:n},children:i});return(0,t.jsx)("div",{onMouseOut:(0,o.useCallback)((function(){return u(!1)}),[]),onMouseOver:(0,o.useCallback)((function(){return u(!0)}),[]),style:{gridColumn:a[0]+1,gridRow:a[1]+1},children:(0,t.jsx)(b.default,{href:s,children:(0,t.jsx)("a",{target:"_blank",children:(0,t.jsx)(y.M,{exitBeforeEnter:!0,initial:!1,children:(0,t.jsx)(k.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:l?d:r},l?1:0)})})})})}function _(e){var n=e.children,r=e.gridShape;return(0,t.jsx)("div",{className:m().frameworkTiles,style:{gridTemplateColumns:"1fr ".repeat(r[0]),gridTemplateRows:"1fr ".repeat(r[1])},children:n})}var w=(0,t.jsx)("svg",{height:"1em",width:"1em",children:(0,t.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})}),T=(0,t.jsxs)("svg",{viewBox:"2 2 20 20",children:[(0,t.jsx)("path",{d:"M11,3v5.159C10.653,8.018,9.904,8,9.535,8C6.759,8,4.19,9.306,4.19,13c0,4.42,3.48,5,5.81,5c0.92,0,3-0.09,4-0.38V3H11z M9.97,15.533c-1.31,0-2.58-0.413-2.58-2.533s1.27-2.45,2.58-2.45c0.32,0,0.68,0.06,1.03,0.14v4.703 C10.65,15.473,10.29,15.533,9.97,15.533z"}),(0,t.jsx)("rect",{height:"3",width:"3",x:"16",y:"3"}),(0,t.jsx)("path",{d:"M19,16.702c0,1-0.235,4.294-3.141,5.294L13,20.702c2.078-0.906,3-2.484,3-4C16,14.608,16,8,16,8h3 C19,8,19,14.452,19,16.702z"})]}),M=(0,t.jsx)("svg",{viewBox:"0 0 1000 1000",fill:"none",children:(0,t.jsx)("path",{d:"M467.253 0.269139C465.103 0.464613 458.26 1.14878 452.102 1.63747C310.068 14.4411 177.028 91.0671 92.7664 208.841C45.8456 274.325 15.8358 348.605 4.49658 427.284C0.488759 454.748 0 462.86 0 500.098C0 537.336 0.488759 545.448 4.49658 572.912C31.6716 760.666 165.298 918.414 346.53 976.861C378.983 987.319 413.196 994.453 452.102 998.754C467.253 1000.42 532.747 1000.42 547.898 998.754C615.054 991.326 671.945 974.71 728.055 946.073C736.657 941.675 738.319 940.502 737.146 939.525C736.364 938.939 699.707 889.777 655.718 830.352L575.758 722.353L475.562 574.085C420.43 492.572 375.073 425.915 374.682 425.915C374.291 425.818 373.9 491.693 373.705 572.13C373.412 712.97 373.314 718.639 371.554 721.962C369.013 726.751 367.058 728.706 362.952 730.856C359.824 732.42 357.087 732.713 342.327 732.713H325.415L320.919 729.878C317.986 728.021 315.836 725.578 314.37 722.744L312.317 718.345L312.512 522.382L312.805 326.321L315.836 322.509C317.4 320.457 320.723 317.818 323.069 316.547C327.077 314.592 328.641 314.397 345.552 314.397C365.494 314.397 368.817 315.179 373.998 320.848C375.464 322.411 429.717 404.12 494.624 502.541C559.531 600.963 648.289 735.352 691.887 801.324L771.065 921.248L775.073 918.609C810.557 895.543 848.094 862.703 877.81 828.495C941.056 755.877 981.818 667.326 995.503 572.912C999.511 545.448 1000 537.336 1000 500.098C1000 462.86 999.511 454.748 995.503 427.284C968.328 239.53 834.702 81.7821 653.47 23.3352C621.505 12.975 587.488 5.84016 549.365 1.53972C539.98 0.562345 475.367 -0.51276 467.253 0.269139ZM671.945 302.668C676.637 305.014 680.45 309.51 681.818 314.201C682.6 316.743 682.796 371.085 682.6 493.549L682.307 669.281L651.32 621.781L620.235 574.281V446.538C620.235 363.95 620.626 317.525 621.212 315.277C622.776 309.803 626.197 305.503 630.89 302.962C634.897 300.909 636.364 300.714 651.711 300.714C666.178 300.714 668.719 300.909 671.945 302.668Z",fill:"black"})}),E=(0,t.jsxs)("svg",{viewBox:"0 0 40.2 40.2",children:[(0,t.jsx)("path",{fill:"black",d:"m 26.975479,12.199999 c -1.3,-1 -1.8,3.9 -4.4,3.9 -3,0 -4,-12.9999998 -6.3,-12.9999998 -0.7,0 -0.8,-0.4 -7.9000003,21.2999998 -2.9000001,9 4.4000003,15.8 11.8000003,15.8 4.6,0 12.3,-3 12.3,-12.6 0,-7.1 -3.5,-13.9 -5.5,-15.4 z m -6.9,23.1 c -3.7,0 -6.7,-3.1 -6.7,-7 0,-3.9 3,-7 6.7,-7 3.7,0 6.7,3.1 6.7,7 0,3.8 -3,7 -6.7,7 z"}),(0,t.jsx)("path",{fill:"black",d:"m 24.075479,-7.6293945e-7 c -0.5,0 -1.8,2.49999996293945 -1.8,3.59999996293945 0,1.5 1,2 1.8,2 0.8,0 1.8,-0.5 1.8,-2 -0.1,-1.1 -1.4,-3.59999996293945 -1.8,-3.59999996293945 z"})]}),L=(0,t.jsxs)("svg",{viewBox:"-11.5 -11.5 23 23",children:[(0,t.jsx)("circle",{cx:"0",cy:"0",r:"2.05",fill:"black"}),(0,t.jsxs)("g",{stroke:"black",strokeWidth:"1",fill:"none",children:[(0,t.jsx)("ellipse",{rx:"11",ry:"4.2"}),(0,t.jsx)("ellipse",{rx:"11",ry:"4.2",transform:"rotate(60)"}),(0,t.jsx)("ellipse",{rx:"11",ry:"4.2",transform:"rotate(120)"})]})]});function S(e){var n=e.pageIndex,r=e.transDirect,s=e.setPage;return(0,t.jsxs)(a.Z,{pageIndex:n,transDirect:r,setPage:s,title:"skill",children:[(0,t.jsxs)(i.Z,{enableMargins:[!1,!0],proportion:50,children:[(0,t.jsx)("h2",{children:"language"}),(0,t.jsxs)("p",{children:[w," bytes in public repositories"]}),(0,t.jsx)(C,{})]}),(0,t.jsxs)(i.Z,{enableMargins:[!0,!1],proportion:50,children:[(0,t.jsx)("h2",{children:"framework"}),(0,t.jsxs)(_,{gridShape:[4,1],children:[(0,t.jsx)(N,{color:"#61dafb",icon:L,index:[0,0],name:"React",url:"https://ja.reactjs.org/"}),(0,t.jsx)(N,{color:"black",icon:M,index:[1,0],name:"Next.js",url:"https://nextjs.org/"}),(0,t.jsx)(N,{color:"#092e20",icon:T,index:[2,0],name:"Django",url:"https://www.djangoproject.com/"}),(0,t.jsx)(N,{color:"#f05732",icon:E,index:[3,0],name:"PyTorch",url:"https://pytorch.org/"})]})]})]})}},7006:function(e){e.exports={frameworkTiles:"FrameworkTiles_frameworkTiles__Z8dQM",nameTile:"FrameworkTiles_nameTile__5_f7e"}},1539:function(e){e.exports={spinner:"LangBars_spinner__LE_Qz",langBar:"LangBars_langBar__Yfp0o",label:"LangBars_label__gCQOU"}}},function(e){e.O(0,[590,32,774,888,179],(function(){return n=3930,e(e.s=n);var n}));var n=e.O();_N_E=n}]);