(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[255],{22494:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat/users",function(){return t(20536)}])},20536:function(e,n,t){"use strict";t.r(n),t.d(n,{FETCH_INTERVAL:function(){return j},default:function(){return k}});var r=t(28520),s=t.n(r),a=t(85893),c=t(67294),o=t(87961),i=t(35159),u=t(58827),d=t(98062),l=t(11225),f=t(85533),h=t(85584),p=t(66192),x=t(2766);function m(e){var n=e.data,t=[{title:"Display Name",key:"username",render:function(e){var n=e.user,t={connectedAt:e.connectedAt,messageCount:e.messageCount,userAgent:e.userAgent};return(0,a.jsx)(h.Z,{user:n,connectionInfo:t,children:(0,a.jsx)("span",{className:"display-name",children:n.displayName})})},sorter:function(e,n){return e.user.displayName-n.user.displayName},sortDirections:["descend","ascend"]},{title:"Messages sent",dataIndex:"messageCount",key:"messageCount",className:"number-col",sorter:function(e,n){return e.messageCount-n.messageCount},sortDirections:["descend","ascend"]},{title:"Connected Time",dataIndex:"connectedAt",key:"connectedAt",defaultSortOrder:"ascend",render:function(e){return(0,f.Z)(new Date(e))},sorter:function(e,n){return new Date(e.connectedAt).getTime()-new Date(n.connectedAt).getTime()},sortDirections:["descend","ascend"]},{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:function(e){return(0,x.AB)(e)}},{title:"Location",dataIndex:"geo",key:"geo",render:function(e){return e?"".concat(e.regionName,", ").concat(e.countryCode):"-"}},{title:"",key:"block",className:"actions-col",render:function(e,n){return(0,a.jsx)(p.Z,{user:n.user,isEnabled:!n.user.disabledAt})}}];return(0,a.jsx)(l.Z,{className:"table-container",pagination:{hideOnSinglePage:!0},columns:t,dataSource:n,size:"small",rowKey:"id"})}function g(e,n,t,r,s,a,c){try{var o=e[a](c),i=o.value}catch(u){return void t(u)}o.done?n(i):Promise.resolve(i).then(r,s)}var v=o.Z.TabPane,j=1e4;function k(){var e,n=((0,c.useContext)(i.aC)||{}).online,t=(0,c.useState)([]),r=t[0],l=t[1],f=(0,c.useState)([]),h=f[0],p=f[1],x=(0,c.useState)([]),k=x[0],N=x[1],y=(e=s().mark((function e(){var n,t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.rQ)(u.qk);case 3:n=e.sent,l(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("==== error",e.t0);case 10:return e.prev=10,e.next=13,(0,u.rQ)(u.Kp);case 13:t=e.sent,p(t),e.next=20;break;case 17:e.prev=17,e.t1=e.catch(10),console.log("==== error",e.t1);case 20:return e.prev=20,e.next=23,(0,u.rQ)(u.GC);case 23:r=e.sent,N(r),e.next=30;break;case 27:e.prev=27,e.t2=e.catch(20),console.error("error fetching moderators",e.t2);case 30:case"end":return e.stop()}}),e,null,[[0,7],[10,17],[20,27]])})),function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function c(e){g(a,r,s,c,o,"next",e)}function o(e){g(a,r,s,c,o,"throw",e)}c(void 0)}))});(0,c.useEffect)((function(){var e;return y(),e=setInterval(y,j),function(){clearInterval(e)}}),[n]);var b=n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{data:h}),(0,a.jsxs)("p",{className:"description",children:["\u0e40\u0e22\u0e35\u0e48\u0e22\u0e21\u0e0a\u0e21"," ",(0,a.jsx)("a",{href:"https://ufapro888s.info/",target:"_blank",rel:"noopener noreferrer",children:"\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23"})," ","\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"]})]}):(0,a.jsx)("p",{className:"description",children:"\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e2a\u0e15\u0e23\u0e35\u0e21\u0e17\u0e33\u0e07\u0e32\u0e19\u0e41\u0e25\u0e30\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e01\u0e32\u0e23\u0e41\u0e0a\u0e17 \u0e44\u0e04\u0e25\u0e40\u0e2d\u0e19\u0e15\u0e4c\u0e41\u0e0a\u0e17\u0e17\u0e35\u0e48\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e08\u0e30\u0e41\u0e2a\u0e14\u0e07\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48"});return(0,a.jsxs)(o.Z,{defaultActiveKey:"1",children:[(0,a.jsx)(v,{tab:(0,a.jsxs)("span",{children:["\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e41\u0e25\u0e49\u0e27 ",n?"(".concat(h.length,")"):"(offline)"]}),children:b},"1"),(0,a.jsx)(v,{tab:(0,a.jsxs)("span",{children:["\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e2b\u0e49\u0e32\u0e21\u0e1e\u0e39\u0e14 ",n?"(".concat(r.length,")"):null]}),children:(0,a.jsx)(d.Z,{data:r})},"2"),(0,a.jsx)(v,{tab:(0,a.jsxs)("span",{children:["\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25 ",n?"(".concat(k.length,")"):null]}),children:(0,a.jsx)(d.Z,{data:k})},"3")]})}}},function(e){e.O(0,[662,225,697,91,903,533,855,774,888,179],(function(){return n=22494,e(e.s=n);var n}));var n=e.O();_N_E=n}]);