(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[807],{48689:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(1413),i=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},a=n(42135),c=function(e,t){return i.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};c.displayName="DeleteOutlined";var l=i.forwardRef(c)},98082:function(e,t,n){"use strict";var r=n(97685),i=n(67294),o=n(31808);t.Z=function(){var e=i.useState(!1),t=(0,r.Z)(e,2),n=t[0],a=t[1];return i.useEffect((function(){a((0,o.fk)())}),[]),n}},26713:function(e,t,n){"use strict";n.d(t,{u:function(){return h},Z:function(){return x}});var r=n(87462),i=n(4942),o=n(97685),a=n(67294),c=n(94184),l=n.n(c),u=n(50344),s=n(59844);function p(e){var t=e.className,n=e.direction,o=e.index,c=e.marginDirection,l=e.children,u=e.split,s=e.wrap,p=a.useContext(h),d=p.horizontalSize,f=p.verticalSize,v=p.latestIndex,x={};return p.supportFlexGap||("vertical"===n?o<v&&(x={marginBottom:d/(u?2:1)}):x=(0,r.Z)((0,r.Z)({},o<v&&(0,i.Z)({},c,d/(u?2:1))),s&&{paddingBottom:f})),null===l||void 0===l?null:a.createElement(a.Fragment,null,a.createElement("div",{className:t,style:x},l),o<v&&u&&a.createElement("span",{className:"".concat(t,"-split"),style:x},u))}var d=n(98082),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},h=a.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),v={small:8,middle:16,large:24};var x=function(e){var t,n=a.useContext(s.E_),c=n.getPrefixCls,x=n.space,m=n.direction,y=e.size,g=void 0===y?(null===x||void 0===x?void 0:x.size)||"small":y,j=e.align,w=e.className,Z=e.children,k=e.direction,C=void 0===k?"horizontal":k,b=e.prefixCls,S=e.split,E=e.style,O=e.wrap,z=void 0!==O&&O,I=f(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),N=(0,d.Z)(),_=a.useMemo((function(){return(Array.isArray(g)?g:[g,g]).map((function(e){return function(e){return"string"===typeof e?v[e]:e||0}(e)}))}),[g]),T=(0,o.Z)(_,2),P=T[0],A=T[1],U=(0,u.Z)(Z,{keepEmpty:!0}),R=void 0===j&&"horizontal"===C?"center":j,L=c("space",b),B=l()(L,"".concat(L,"-").concat(C),(t={},(0,i.Z)(t,"".concat(L,"-rtl"),"rtl"===m),(0,i.Z)(t,"".concat(L,"-align-").concat(R),R),t),w),F="".concat(L,"-item"),G="rtl"===m?"marginLeft":"marginRight",H=0,q=U.map((function(e,t){return null!==e&&void 0!==e&&(H=t),a.createElement(p,{className:F,key:"".concat(F,"-").concat(t),direction:C,index:t,marginDirection:G,split:S,wrap:z},e)})),D=a.useMemo((function(){return{horizontalSize:P,verticalSize:A,latestIndex:H,supportFlexGap:N}}),[P,A,H,N]);if(0===U.length)return null;var M={};return z&&(M.flexWrap="wrap",N||(M.marginBottom=-A)),N&&(M.columnGap=P,M.rowGap=A),a.createElement("div",(0,r.Z)({className:B,style:(0,r.Z)((0,r.Z)({},M),E)},I),a.createElement(h.Provider,{value:D},q))}},75056:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/actions",function(){return n(16293)}])},16293:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(28520),i=n.n(r),o=n(85893),a=n(48689),c=n(17256),l=n(46697),u=n(69677),s=n(32808),p=n(26713),d=n(71577),f=n(11225),h=n(67294),v=n(78464),x=n(25964),m=n(83200),y=n(35159),g=n(19411);function j(e,t,n,r,i,o,a){try{var c=e[o](a),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,i)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){j(o,r,i,a,c,"next",e)}function c(e){j(o,r,i,a,c,"throw",e)}a(void 0)}))}}function Z(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k=c.Z.Title,C=c.Z.Paragraph,b=null;function S(e){var t=e.onOk,n=e.onCancel,r=e.visible,i=(0,h.useState)(""),a=i[0],c=i[1],p=(0,h.useState)(""),d=p[0],f=p[1],v=(0,h.useState)(""),x=v[0],m=v[1],y=(0,h.useState)(""),j=y[0],w=y[1],Z=(0,h.useState)(""),k=Z[0],C=Z[1],b=(0,h.useState)(!1),S=b[0],E=b[1],O={disabled:!function(){try{if("https:"!==new URL(a).protocol)return!1}catch(e){return!1}return(0,g.Z)(a)&&""!==d}()};return(0,o.jsx)(l.Z,{title:"Create New Action",visible:r,onOk:function(){t(a,d,x,j,k,S),c(""),f(""),m(""),w(""),C(""),E(!1)},onCancel:n,okButtonProps:O,children:(0,o.jsxs)("div",{children:["\u0e40\u0e1e\u0e34\u0e48\u0e21 URL \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e20\u0e32\u0e22\u0e19\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e19\u0e33\u0e40\u0e2a\u0e19\u0e2d"," ",(0,o.jsx)("strong",{children:"\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e40\u0e09\u0e1e\u0e32\u0e30 URL HTTPS \u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19."}),(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://ufapro888s.info/",target:"_blank",rel:"noopener noreferrer",children:"\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e20\u0e32\u0e22\u0e19\u0e2d\u0e01"})}),(0,o.jsx)("p",{children:(0,o.jsx)(u.Z,{value:a,required:!0,placeholder:"https://myserver.com/action (required)",onChange:function(e){return c(e.currentTarget.value.trim())},type:"url",pattern:g.a})}),(0,o.jsx)("p",{children:(0,o.jsx)(u.Z,{value:d,required:!0,placeholder:"Your action title (required)",onChange:function(e){return f(e.currentTarget.value)}})}),(0,o.jsx)("p",{children:(0,o.jsx)(u.Z,{value:x,placeholder:"Optional description",onChange:function(e){return m(e.currentTarget.value)}})}),(0,o.jsx)("p",{children:(0,o.jsx)(u.Z,{value:j,placeholder:"https://myserver.com/action/icon.png (optional)",onChange:function(e){return w(e.currentTarget.value)}})}),(0,o.jsxs)("p",{children:[(0,o.jsx)(u.Z,{type:"color",value:k,onChange:function(e){return C(e.currentTarget.value)}}),"\u0e2a\u0e35\u0e1e\u0e37\u0e49\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e17\u0e35\u0e48\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e14\u0e49\u0e02\u0e2d\u0e07\u0e1b\u0e38\u0e48\u0e21\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19."]}),(0,o.jsx)(s.Z,{checked:S,defaultChecked:S,onChange:function(e){E(e.target.checked)},children:"\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e19\u0e41\u0e17\u0e47\u0e1a\u0e43\u0e2b\u0e21\u0e48\u0e41\u0e17\u0e19\u0e20\u0e32\u0e22\u0e43\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"})]})})}function E(){var e=(0,h.useContext)(y.aC)||{},t=e.serverConfig,n=e.setFieldInConfigState,r=t.externalActions,c=(0,h.useState)([]),l=c[0],u=c[1],s=(0,h.useState)(!1),g=s[0],j=s[1],E=(0,h.useState)(null),O=E[0],z=E[1],I=function(){z(null),b=null,clearTimeout(b)};function N(e){return _.apply(this,arguments)}function _(){return(_=w(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Si)({apiPath:x.os,data:{value:t},onSuccess:function(){n({fieldName:"externalActions",value:t,path:""}),z((0,m.kg)(m.zv,"Updated.")),b=setTimeout(I,x.sI)},onError:function(e){console.log(e),z((0,m.kg)(m.Un,e)),b=setTimeout(I,x.sI)}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=w(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Z(l),r=l.findIndex((function(e){return e.url===t.url})),n.splice(r,1);try{u(n),N(n)}catch(i){console.error(i)}case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=w(i().mark((function e(t,n,r,o,a,c){var s,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=Z(l),p=s.concat({url:t,title:n,description:r,icon:o,color:a,openExternally:c}),u(p),e.next=6,N(p);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}(0,h.useEffect)((function(){u(r||[])}),[r]);var A=[{title:"",key:"delete",render:function(e,t){return(0,o.jsx)(p.Z,{size:"middle",children:(0,o.jsx)(d.Z,{onClick:function(){return function(e){return T.apply(this,arguments)}(t)},icon:(0,o.jsx)(a.Z,{})})})}},{title:"Name",dataIndex:"title",key:"title"},{title:"Description",dataIndex:"description",key:"description"},{title:"URL",dataIndex:"url",key:"url"},{title:"Icon",dataIndex:"icon",key:"icon",render:function(e){return e?(0,o.jsx)("img",{style:{width:"2vw"},src:e,alt:""}):null}},{title:"Color",dataIndex:"color",key:"color",render:function(e){return e?(0,o.jsx)("div",{style:{backgroundColor:e,height:"30px"},children:e}):null}},{title:"Opens",dataIndex:"openExternally",key:"openExternally",render:function(e){return e?"In a new tab":"In a modal"}}];return(0,o.jsxs)("div",{children:[(0,o.jsx)(k,{children:"\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e20\u0e32\u0e22\u0e19\u0e2d\u0e01"}),(0,o.jsx)(C,{children:"URL \u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e20\u0e32\u0e22\u0e19\u0e2d\u0e01\u0e04\u0e37\u0e2d UI \u0e02\u0e2d\u0e07\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e2a\u0e14\u0e07 \u0e1d\u0e31\u0e07 \u0e25\u0e07\u0e43\u0e19\u0e2b\u0e19\u0e49\u0e32 Owncast \u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e40\u0e21\u0e37\u0e48\u0e2d \u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e1b\u0e34\u0e14\u0e01\u0e32\u0e23\u0e01\u0e23\u0e30\u0e17\u0e33\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"}),(0,o.jsxs)(C,{children:["\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e27\u0e34\u0e18\u0e35\u0e43\u0e0a\u0e49\u0e01\u0e32\u0e23\u0e01\u0e23\u0e30\u0e17\u0e33\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48"," ",(0,o.jsx)("a",{href:"https://ufapro888s.info/",target:"_blank",rel:"noopener noreferrer",children:"\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32"}),"."]}),(0,o.jsx)(f.Z,{rowKey:function(e){return"".concat(e.title,"-").concat(e.url)},columns:A,dataSource:l,pagination:!1}),(0,o.jsx)("br",{}),(0,o.jsx)(d.Z,{type:"primary",onClick:function(){j(!0)},children:"\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e41\u0e2d\u0e04\u0e0a\u0e31\u0e48\u0e19\u0e43\u0e2b\u0e21\u0e48"}),(0,o.jsx)(v.Z,{status:O}),(0,o.jsx)(S,{visible:g,onOk:function(e,t,n,r,i,o){j(!1),function(e,t,n,r,i,o){P.apply(this,arguments)}(e,t,n,r,i,o)},onCancel:function(){j(!1)}})]})}}},function(e){e.O(0,[225,697,774,888,179],(function(){return t=75056,e(e.s=t);var t}));var t=e.O();_N_E=t}]);