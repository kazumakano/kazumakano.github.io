(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657],{4564:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publication",function(){return n(681)}])},6396:function(e,t,n){"use strict";n.d(t,{fZ:function(){return g},kI:function(){return x},ej:function(){return w}});var r=n(5893),i=n(7294),a=n(3967),o=n.n(a);let c=["as","disabled"];function s({tagName:e,disabled:t,href:n,target:r,rel:i,role:a,onClick:o,tabIndex:c=0,type:s}){e||(e=null!=n||null!=r||null!=i?"a":"button");let l={tagName:e};if("button"===e)return[{type:s||"button",disabled:t},l];let p=r=>{var i;if(!t&&("a"!==e||(i=n)&&"#"!==i.trim())||r.preventDefault(),t){r.stopPropagation();return}null==o||o(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:c,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?i:void 0,onClick:p,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),p(e))}},l]}i.forwardRef((e,t)=>{let{as:n,disabled:i}=e,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,c),[o,{tagName:l}]=s(Object.assign({tagName:n,disabled:i},a));return(0,r.jsx)(l,Object.assign({},a,o,{ref:t}))}).displayName="Button";var l=n(4728);let p=i.forwardRef((e,t)=>{let{as:n,bsPrefix:i,variant:a="primary",size:c,active:p=!1,disabled:h=!1,className:d,...u}=e,f=(0,l.vE)(i,"btn"),[g,{tagName:m}]=s({tagName:n,disabled:h,...u});return(0,r.jsx)(m,{...g,...u,ref:t,disabled:h,className:o()(d,f,p&&"active",a&&"".concat(f,"-").concat(a),c&&"".concat(f,"-").concat(c),u.href&&h&&"disabled")})});p.displayName="Button";var h=n(1664),d=n.n(h);let u=(0,r.jsxs)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:[(0,r.jsx)("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),(0,r.jsx)("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})]}),f=(0,r.jsx)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:(0,r.jsx)("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"})});function g(e){let{text:t}=e,[n,a]=(0,i.useState)(u),o=(0,i.useCallback)(async()=>{await window.navigator.clipboard.writeText(t),a(f)},[a,t]),c=(0,i.useCallback)(e=>{e.currentTarget.blur(),window.setTimeout(a,1e3,u)},[a]);return(0,r.jsx)(p,{size:"sm",variant:"outline-dark",onClick:o,onMouseLeave:c,className:"btn copy-btn shadow-none",children:n})}let m=(0,r.jsx)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:(0,r.jsx)("path",{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"})});function x(e){let{uri:t}=e;return(0,r.jsx)(d(),{href:t,passHref:!0,children:(0,r.jsx)(p,{size:"sm",variant:"dark",className:"btn mailer-btn shadow-none",children:m})})}let j=(0,r.jsx)("svg",{height:"16",viewBox:"0 0 16 16",width:"16",children:(0,r.jsx)("path",{d:"M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"})});function w(e){let{onClick:t}=e;return(0,r.jsx)(p,{size:"sm",variant:"outline-dark",onClick:t,className:"btn swap-btn shadow-none",children:j})}},7127:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(5893),i=n(7294),a=n(8960),o=n(1163),c=n(207),s=n(2023);let l={enter:e=>({x:e>0?2e3:-2e3,opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e>0?-2e3:2e3,opacity:0})},p=(e,t)=>Math.abs(e)*t;function h(e){let{children:t,pageIndex:n,transDirect:h,setTransDirect:d}=e,u=(0,i.useContext)(a.Rx),f=(0,o.useRouter)(),g=(0,i.useCallback)(e=>{d(e);let t=((n+e)%c.CONTENTS.length+c.CONTENTS.length)%c.CONTENTS.length;f.replace(c.CONTENTS[t])},[n,f,d]);return(0,r.jsx)("div",{id:"slide",children:(0,r.jsx)(s.E.div,{initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},variants:l,custom:h,drag:!!u&&"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(e,t)=>{let{offset:n,velocity:r}=t,i=p(n.x,r.x);i<-1e4?g(1):i>1e4&&g(-1)},children:t})})}function d(e){let{pageIndex:t,transDirect:n}=e,i={before:{pathLength:((t-n)%c.CONTENTS.length+c.CONTENTS.length)%c.CONTENTS.length/(c.CONTENTS.length-1),opacity:0},after:{pathLength:t/(c.CONTENTS.length-1),opacity:1,transition:{pathLength:{type:"spring",duration:1.5,bounce:0},opacity:{duration:.01}}}};return(0,r.jsx)(s.E.svg,{viewBox:"0 0 100 100",initial:"before",animate:"after",fill:"none",id:"progress-icon",children:(0,r.jsx)(s.E.circle,{variants:i,cx:"50",cy:"50",r:"45",stroke:"rgba(255, 255, 255, 0.8)",strokeWidth:"10",style:{rotate:270}})})}let u=(0,r.jsx)("svg",{viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"})}),f=(0,r.jsx)("svg",{viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"})}),g=e=>{let{isLeft:t,pageIndex:n,setTransDirect:s}=e,[l,p]=(0,i.useState)(!1),h=(0,i.useContext)(a.Rx),d=(0,o.useRouter)(),g=(0,i.useCallback)(e=>{s(e);let t=((n+e)%c.CONTENTS.length+c.CONTENTS.length)%c.CONTENTS.length;d.replace(c.CONTENTS[t])},[n,d,s]);return(0,r.jsx)("div",{className:"mv-btn",onClick:()=>g(t?-1:1),onMouseEnter:(0,i.useCallback)(()=>p(!0),[p]),onMouseLeave:(0,i.useCallback)(()=>p(!1),[p]),style:{left:t?"1%":"91%",opacity:h?l?1:0:1},children:t?u:f})};function m(e){let{children:t,pageIndex:n,transDirect:i,setTransDirect:a,title:o,noCapsHeader:c}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h,{pageIndex:n,transDirect:i,setTransDirect:a,children:[(0,r.jsx)("div",{id:"header",children:(0,r.jsx)("h1",{className:c?"no-caps":void 0,children:o})}),(0,r.jsx)("div",{id:"body",children:t})]}),(0,r.jsx)(d,{pageIndex:n,transDirect:i}),(0,r.jsx)(g,{isLeft:!0,pageIndex:n,setTransDirect:a}),(0,r.jsx)(g,{isLeft:!1,pageIndex:n,setTransDirect:a})]})}},9819:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=n(8960);function a(e){let{children:t,enableMargins:n,proportion:a,innerRef:o,outerRef:c}=e;return(0,r.jsx)("div",{className:"text-box",ref:c,style:(0,i.Sg)(n,a),children:(0,r.jsx)("div",{ref:o,children:t})})}},1720:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});let r=new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"});function i(e,t){return null==e||null==t?null:r.format(new Date(t,e-1))}},2366:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294);function i(e,t){let[n,i]=(0,r.useState)([]),[[a,o],c]=(0,r.useState)([-1,-1]),s=e=>{n.push(e),i(n)},l=e=>{if(n[n.findIndex(t=>t.pointerId==e.pointerId)]=e,i(n),null!=t.current&&2==n.length){let e=Math.hypot(n[0].clientX-n[1].clientX,n[0].clientY-n[1].clientY);a<0?c([e,parseFloat(t.current.style.zoom)]):t.current.style.zoom=(e/a*o).toString()}},p=e=>{n.splice(n.findIndex(t=>t.pointerId===e.pointerId),1),i(n),n.length<2&&c([-1,-1])};(0,r.useEffect)(()=>{null!=t.current&&(t.current.style.zoom="1")},[t.current]),(0,r.useEffect)(()=>{null!=e.current&&(e.current.onpointerdown=s,e.current.onpointermove=l,e.current.onpointerup=p,e.current.onpointercancel=p,e.current.onpointerout=p,e.current.onpointerleave=p)})}},4568:function(e,t,n){"use strict";var r=n(3967),i=n.n(r),a=n(7294),o=n(4728),c=n(5893);let s=a.forwardRef((e,t)=>{let{bsPrefix:n,className:r,striped:a,bordered:s,borderless:l,hover:p,size:h,variant:d,responsive:u,...f}=e,g=(0,o.vE)(n,"table"),m=i()(r,g,d&&"".concat(g,"-").concat(d),h&&"".concat(g,"-").concat(h),a&&"".concat(g,"-").concat("string"==typeof a?"striped-".concat(a):"striped"),s&&"".concat(g,"-bordered"),l&&"".concat(g,"-borderless"),p&&"".concat(g,"-hover")),x=(0,c.jsx)("table",{...f,className:m,ref:t});if(u){let e="".concat(g,"-responsive");return"string"==typeof u&&(e="".concat(e,"-").concat(u)),(0,c.jsx)("div",{className:e,children:x})}return x});t.Z=s},681:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),i=n(1881),a=n.n(i),o=JSON.parse('{"m":[{"authorship":"co-author","conference":"WSSIT","date":[2022,3],"title":"機械学習による慣性センサを用いた転倒動作検知に関する研究","type":"proceedings"},{"authorship":"lead author","conference":"DICOMO","date":[2022,7],"title":"物流倉庫におけるソーラー式BLEビーコンとPDRを用いたハイブリッド測位","type":"proceedings","conferenceUrl":"https://www.dicomo.org/2022/","paperUrl":"https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=219692&item_no=1&page_id=13&block_id=8"},{"authorship":null,"conference":"大学院教育改革フォーラム","date":[2023,12],"title":"Gait-Robust Heading Estimation for Pedestrian Dead Reckoning with Smartphones","type":"poster","conferenceUrl":"https://gradschool-forum2023.projects.tsukuba.ac.jp/"},{"authorship":"lead author","conference":"HCGSYMPO","date":[2023,12],"title":"深層学習PDRとBLEビーコンを用いたハイブリッド測位","type":"proceedings","conferenceUrl":"https://www.hcg-ieice.org/hcg-symposium/2023/"},{"authorship":"lead author","conference":"JIP","date":[2024,6],"title":"スマートフォンを用いた歩行者自律航法のための水平加速度に基づいた歩き方の違いに頑健な進行方向推定","type":"article","conferenceUrl":"https://www.ipsj.or.jp/journal/index.html","paperUrl":"https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=234951&item_no=1&page_id=13&block_id=8"},{"authorship":null,"conference":"IRASF","date":[2024,7],"title":"プライバシーに配慮した人流・状態計測システム","type":"exhibition","conferenceUrl":"https://irasf.hacca.jp/"},{"authorship":"lead author","conference":"MCC","date":[2024,8],"title":"アノテーションロスを克服するラベル付き画像セグメントの合成によるデータ拡張","type":"proceedings","conferenceUrl":"https://www.iieej.org/annualconf/2024nenji-top/"},{"authorship":"co-author","conference":"東海支部連合大会","date":[2024,8],"title":"エッジ音声処理とCAN通信を用いた多数接続可能な発話方向推定システム","type":"proceedings","conferenceUrl":"https://www.tokai-rengo.jp/"},{"authorship":"co-author","conference":"東海支部連合大会","date":[2024,8],"title":"物流倉庫におけるスマートフォンを用いた作業者のタスク認識","type":"proceedings","conferenceUrl":"https://www.tokai-rengo.jp/"},{"authorship":"co-author","conference":"東海支部連合大会","date":[2024,8],"title":"マルチカメラによるオクルージョンに頑健な物流倉庫向け占有エリア検出手法","type":"proceedings","conferenceUrl":"https://www.tokai-rengo.jp/"},{"authorship":"co-author","conference":"VRSJ","date":[2024,9],"title":"遠隔MRロボットアーム制御によるスマートな3Dスキャンシステム","type":"proceedings","conferenceUrl":"https://conference.vrsj.org/ac2024/","paperUrl":"https://conference.vrsj.org/ac2024/program/doc/1B2-12.pdf"},{"authorship":"co-author","conference":"SIGUBI","date":[2024,11],"title":"EngagedSync：MR共有空間内ユーザの相互状況理解向上のための適応的な周辺環境情報抽出・転送システム","type":"proceedings","conferenceUrl":"https://sigubi.ipsj.or.jp/seminar84/","paperUrl":"https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=240585&item_no=1&page_id=13&block_id=8"}],"L":[{"authorship":"co-author","conference":"ABC","date":[2021,10],"title":"A Data-Driven Approach for Online Pre-impact Fall Detection with Wearable Devices","type":"proceedings","conferenceUrl":"https://abc-research.github.io/2021/","paperUrl":"https://link.springer.com/chapter/10.1007/978-981-19-0361-8_8"},{"authorship":"lead author","conference":"HCII","date":[2022,6],"title":"Smartphone Localization with Solar-Powered BLE Beacons in Warehouse","type":"proceedings","conferenceUrl":"https://2022.hci.international/","paperUrl":"https://dl.acm.org/doi/10.1007/978-3-031-05463-1_21"},{"authorship":null,"conference":"SCEWC","date":[2022,11],"title":"Smart Warehouse","type":"exhibition","conferenceUrl":"https://www.smartcityexpo.com/"},{"authorship":"lead author","conference":"IPIN","date":[2023,9],"title":"Gait-Robust Heading Estimation Using Horizontal Acceleration for Smartphone-based PDR","type":"proceedings (wip)","conferenceUrl":"https://ipin-conference.org/2023/","paperUrl":"https://ceur-ws.org/Vol-3581/191_WiP.pdf"},{"authorship":"co-author","conference":"PerCom","date":[2024,3],"title":"Semi-Automated Framework for Digitalizing Multi-Product Warehouses with Large Scale Camera Arrays","type":"proceedings (short)","conferenceUrl":"https://percom.org/2024/","paperUrl":"https://ieeexplore.ieee.org/document/10494498"},{"authorship":null,"conference":"MobiSys","date":[2024,6],"title":"A Data-Driven Approach for Person Identification with Wearable Sensors and Static Cameras","type":"poster (workshop)","conferenceUrl":"https://www.sigmobile.org/mobisys/2024/"},{"authorship":"lead author","conference":"UbiComp / ISWC","date":[2024,10],"title":"Composite Image Generation Using Labeled Segments for Pattern-Rich Dataset without Unannotated Target","type":"proceedings (workshop)","conferenceUrl":"https://www.ubicomp.org/ubicomp-iswc-2024/","paperUrl":"https://dl.acm.org/doi/10.1145/3675094.3678447"},{"authorship":"co-author","conference":"UbiComp / ISWC","date":[2024,10],"title":"Remote 3D Scanning with VR and Robotic Arm","type":"proceedings (demo)","conferenceUrl":"https://www.ubicomp.org/ubicomp-iswc-2024/","paperUrl":"https://dl.acm.org/doi/10.1145/3675094.3677548"},{"authorship":null,"conference":"SCEWC","date":[2024,11],"title":"Location AI for Smart Mobility","type":"exhibition","conferenceUrl":"https://www.smartcityexpo.com/"}]}'),c=n(1664),s=n.n(c),l=n(4568),p=n(1720),h=n(6396),d=n(7294),u=n(2366),f=n(7127),g=n(9819);let m=e=>{let{children:t,url:n}=e;return(0,r.jsx)("td",{children:(0,r.jsx)(s(),{href:n,target:"_blank",children:t})})},x=e=>{let{isInternational:t}=e;return(0,r.jsxs)(l.Z,{className:a().pubTable,hover:!0,striped:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"date"}),(0,r.jsx)("th",{children:"title"}),(0,r.jsx)("th",{children:"type"}),(0,r.jsx)("th",{children:"conf / journal"}),(0,r.jsx)("th",{children:"authorship"}),(0,r.jsx)("th",{})]})}),(0,r.jsx)("tbody",{children:(t?o.L:o.m).map((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,p.L)(e.date[1],e.date[0])}),e.paperUrl?(0,r.jsx)(m,{url:e.paperUrl,children:e.title}):(0,r.jsx)("td",{children:e.title}),(0,r.jsx)("td",{children:e.type}),e.conferenceUrl?(0,r.jsx)(m,{url:e.conferenceUrl,children:e.conference}):(0,r.jsx)("td",{children:e.conference}),(0,r.jsx)("td",{children:e.authorship}),(0,r.jsx)("td",{children:(0,r.jsx)(h.fZ,{text:e.title})})]},t))})]})};function j(e){let{pageIndex:t,transDirect:n,setTransDirect:i}=e,a=(0,d.useRef)(null),o=(0,d.useRef)(null);return(0,u.Z)(a,o),(0,r.jsx)(f.Z,{pageIndex:t,transDirect:n,setTransDirect:i,title:"publications & presentations",children:(0,r.jsxs)(g.Z,{enableMargins:[!1,!1],proportion:100,innerRef:o,outerRef:a,children:[(0,r.jsx)("h2",{children:"international"}),(0,r.jsx)(x,{isInternational:!0}),(0,r.jsx)("h2",{children:"domestic"}),(0,r.jsx)(x,{isInternational:!1})]})})}},1881:function(e){e.exports={pubTable:"Publication_pubTable__tIti_"}}},function(e){e.O(0,[249,888,774,179],function(){return e(e.s=4564)}),_N_E=e.O()}]);