(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(599)}])},747:function(e,t,a){"use strict";a.d(t,{fZ:function(){return v},kI:function(){return f},ej:function(){return p}});var n=a(5893),i=a(7294),l=a(4184),r=a.n(l);let s=["as","disabled"];function c({tagName:e,disabled:t,href:a,target:n,rel:i,role:l,onClick:r,tabIndex:s=0,type:c}){e||(e=null!=a||null!=n||null!=i?"a":"button");let o={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},o];let u=n=>{var i;if(!t&&("a"!==e||(i=a)&&"#"!==i.trim())||n.preventDefault(),t){n.stopPropagation();return}null==r||r(n)};return"a"===e&&(a||(a="#"),t&&(a=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:s,href:a,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?i:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},o]}i.forwardRef((e,t)=>{let{as:a,disabled:i}=e,l=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,s),[r,{tagName:o}]=c(Object.assign({tagName:a,disabled:i},l));return(0,n.jsx)(o,Object.assign({},l,r,{ref:t}))}).displayName="Button";var o=a(6792);let u=i.forwardRef(({as:e,bsPrefix:t,variant:a,size:i,active:l,className:s,...u},d)=>{let h=(0,o.vE)(t,"btn"),[x,{tagName:j}]=c({tagName:e,...u});return(0,n.jsx)(j,{...x,...u,ref:d,className:r()(s,h,l&&"active",a&&`${h}-${a}`,i&&`${h}-${i}`,u.href&&u.disabled&&"disabled")})});u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1};var d=a(1664),h=a.n(d);let x=(0,n.jsxs)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:[(0,n.jsx)("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),(0,n.jsx)("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})]}),j=(0,n.jsx)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:(0,n.jsx)("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"})});function v(e){let{text:t}=e,[a,l]=(0,i.useState)(x),r=(0,i.useCallback)(async()=>{await window.navigator.clipboard.writeText(t),l(j)},[l,t]),s=(0,i.useCallback)(e=>{e.currentTarget.blur(),window.setTimeout(l,1e3,x)},[l]);return(0,n.jsx)(u,{size:"sm",variant:"outline-dark",onClick:r,onMouseLeave:s,className:"btn copy-btn shadow-none",children:a})}let b=(0,n.jsx)("svg",{height:"1em",viewBox:"0 0 16 16",width:"1em",children:(0,n.jsx)("path",{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"})});function f(e){let{uri:t}=e;return(0,n.jsx)(h(),{href:t,passHref:!0,children:(0,n.jsx)(u,{size:"sm",variant:"dark",className:"btn mailer-btn shadow-none",children:b})})}let g=(0,n.jsx)("svg",{height:"16",viewBox:"0 0 16 16",width:"16",children:(0,n.jsx)("path",{d:"M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"})});function p(e){let{onClick:t}=e;return(0,n.jsx)(u,{size:"sm",variant:"outline-dark",onClick:t,className:"btn swap-btn shadow-none",children:g})}},5460:function(e,t,a){"use strict";a.d(t,{Z:function(){return b}});var n=a(5893),i=a(7294),l=a(5234),r=a(1163),s=a(637),c=a(2023);let o={enter:e=>({x:e>0?2e3:-2e3,opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e>0?-2e3:2e3,opacity:0})},u=(e,t)=>Math.abs(e)*t;function d(e){let{children:t,pageIndex:a,transDirect:d,setTransDirect:h}=e,x=(0,i.useContext)(l.Rx),j=(0,r.useRouter)(),v=(0,i.useCallback)(e=>{h(e);let t=((a+e)%s.CONTENTS.length+s.CONTENTS.length)%s.CONTENTS.length;j.replace(s.CONTENTS[t])},[a,j,h]);return(0,n.jsx)("div",{id:"slide",children:(0,n.jsx)(c.E.div,{initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},variants:o,custom:d,drag:!!x&&"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(e,t)=>{let{offset:a,velocity:n}=t,i=u(a.x,n.x);i<-1e4?v(1):i>1e4&&v(-1)},children:t})})}function h(e){let{pageIndex:t,transDirect:a}=e,i={before:{pathLength:((t-a)%s.CONTENTS.length+s.CONTENTS.length)%s.CONTENTS.length/(s.CONTENTS.length-1),opacity:0},after:{pathLength:t/(s.CONTENTS.length-1),opacity:1,transition:{pathLength:{type:"spring",duration:1.5,bounce:0},opacity:{duration:.01}}}};return(0,n.jsx)(c.E.svg,{viewBox:"0 0 100 100",initial:"before",animate:"after",fill:"none",id:"progress-icon",children:(0,n.jsx)(c.E.circle,{variants:i,cx:"50",cy:"50",r:"45",stroke:"rgba(255, 255, 255, 0.8)",strokeWidth:"10",style:{rotate:270}})})}let x=(0,n.jsx)("svg",{viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"})}),j=(0,n.jsx)("svg",{viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"})}),v=e=>{let{isLeft:t,pageIndex:a,setTransDirect:c}=e,[o,u]=(0,i.useState)(!1),d=(0,i.useContext)(l.Rx),h=(0,r.useRouter)(),v=(0,i.useCallback)(e=>{c(e);let t=((a+e)%s.CONTENTS.length+s.CONTENTS.length)%s.CONTENTS.length;h.replace(s.CONTENTS[t])},[a,h,c]);return(0,n.jsx)("div",{className:"mv-btn",onClick:()=>v(t?-1:1),onMouseEnter:(0,i.useCallback)(()=>u(!0),[u]),onMouseLeave:(0,i.useCallback)(()=>u(!1),[u]),style:{left:t?"1%":"91%",opacity:d?o?1:0:1},children:t?x:j})};function b(e){let{children:t,pageIndex:a,transDirect:i,setTransDirect:l,title:r,noCapsHeader:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d,{pageIndex:a,transDirect:i,setTransDirect:l,children:[(0,n.jsx)("div",{id:"header",children:(0,n.jsx)("h1",{className:s?"no-caps":void 0,children:r})}),(0,n.jsx)("div",{id:"body",children:t})]}),(0,n.jsx)(h,{pageIndex:a,transDirect:i}),(0,n.jsx)(v,{isLeft:!0,pageIndex:a,setTransDirect:l}),(0,n.jsx)(v,{isLeft:!1,pageIndex:a,setTransDirect:l})]})}},5001:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(5893),i=a(5234);function l(e){let{children:t,enableMargins:a,proportion:l,innerRef:r,outerRef:s}=e;return(0,n.jsx)("div",{className:"text-box",ref:s,style:(0,i.Sg)(a,l),children:(0,n.jsx)("div",{ref:r,children:t})})}},599:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var n=a(5893),i=a(5156),l=a.n(i),r=a(7294),s=a(5460),c=a(5001),o=a(837),u=a.n(o),d=a(1664),h=a.n(d);function x(e){let{children:t}=e;return(0,n.jsx)("div",{children:t})}let j=e=>{let{children:t,isLeft:a,url:i}=e;return(0,n.jsx)("div",{className:a?u().leftLabel:u().rightLabel,children:(0,n.jsx)(h(),{href:i,target:"_blank",children:t})})},v=e=>{let{color:t,icon:a,isMouseOver:i,url:l}=e;return(0,n.jsx)("div",{className:u().icon,children:(0,n.jsx)(h(),{href:l,style:{fill:i?t:"inherit"},target:"_blank",children:a})})};function b(e){let{children:t,color:a,icon:i,reverse:l,url:s}=e,[c,o]=(0,r.useState)(!1);return(0,n.jsx)("div",{className:u().socialTile,onMouseEnter:(0,r.useCallback)(()=>o(!0),[o]),onMouseLeave:(0,r.useCallback)(()=>o(!1),[o]),children:l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{isLeft:l,url:s,children:t}),(0,n.jsx)(v,{color:a,icon:i,isMouseOver:c,url:s})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{color:a,icon:i,isMouseOver:c,url:s}),(0,n.jsx)(j,{isLeft:l,url:s,children:t})]})})}var f=a(747);let g="kazumakano@outlook.jp,kazuma@ucl.nuee.nagoya-u.ac.jp".split(","),p=(0,n.jsx)("svg",{viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})}),m=(0,n.jsx)("svg",{viewBox:"0 0 248 204",children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04 C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66 c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64 c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76 c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26 c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"})})});function N(e){let{setIsInputting:t,pageIndex:a,transDirect:i,setTransDirect:o}=e,[u,d]=(0,r.useState)(0),[h,j]=(0,r.useState)(""),[v,N]=(0,r.useState)(""),k=(0,r.useCallback)(e=>j(e.target.value.replace(/\n/g,"%0d%0a")),[j]),C=(0,r.useCallback)(()=>d((u+1)%g.length),[u,d]),T=(0,r.useMemo)(()=>{let e="mailto:".concat(g[u]);return""!=h&&""!=v?e+="?body=".concat(h,"&subject=").concat(v):""!=h?e+="?body=".concat(h):""!=v&&(e+="?subject=".concat(v)),e},[u,h,v]);return(0,n.jsxs)(s.Z,{pageIndex:a,transDirect:i,setTransDirect:o,title:"contact",children:[(0,n.jsxs)(c.Z,{enableMargins:[!1,!0],proportion:50,children:[(0,n.jsx)("h2",{children:"social"}),(0,n.jsxs)(x,{children:[(0,n.jsxs)(b,{color:"#1d9bf0",icon:m,reverse:!1,url:"https://twitter.com/".concat("kazumakano"),children:["Twitter",(0,n.jsx)("br",{}),"@","kazumakano"]}),(0,n.jsxs)(b,{color:"black",icon:p,reverse:!0,url:"https://github.com/".concat("kazumakano"),children:["GitHub",(0,n.jsx)("br",{}),"@","kazumakano"]})]})]}),(0,n.jsxs)(c.Z,{enableMargins:[!0,!1],proportion:50,children:[(0,n.jsx)("h2",{children:"email"}),(0,n.jsxs)("div",{className:l().mailForm,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"mail-to",children:"to"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(f.ej,{onClick:C}),(0,n.jsx)("select",{disabled:!0,id:"mail-to",value:g[u],children:g.map((e,t)=>(0,n.jsx)("option",{value:e,children:e},t))}),(0,n.jsx)(f.fZ,{text:g[u]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"mail-subject",children:"subject"}),(0,n.jsx)("input",{autoComplete:"off",id:"mail-subject",onBlur:()=>t(!1),onChange:e=>N(e.target.value),onFocus:()=>t(!0),type:"text"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"mail-body",children:"body"}),(0,n.jsx)("textarea",{id:"mail-body",onBlur:(0,r.useCallback)(()=>t(!1),[t]),onChange:k,onFocus:(0,r.useCallback)(()=>t(!0),[t])})]}),(0,n.jsx)(f.kI,{uri:T})]})]})]})}},5156:function(e){e.exports={mailForm:"Contact_mailForm__0zeAH"}},837:function(e){e.exports={socialTile:"SocialTiles_socialTile__KH4Hz",leftLabel:"SocialTiles_leftLabel__FpUhi",rightLabel:"SocialTiles_rightLabel__zXHU3",icon:"SocialTiles_icon__Aw5ZO"}}},function(e){e.O(0,[508,888,774,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);