"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[992],{6791:function(e,r,n){n.d(r,{r:function(){return s}});var t=n(4165),c=n(5861),u=n(9439),a=n(7313),i=n(9225);function s(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,a.useState)("idle"),s=(0,u.Z)(n,2),o=s[0],l=s[1],f=(0,a.useState)(null),p=(0,u.Z)(f,2),d=p[0],v=p[1],h=(0,a.useState)(null),g=(0,u.Z)(h,2),m=g[0],Z=g[1],x="pending"===o,w="error"===o,y=(0,a.useCallback)(function(){var r=(0,c.Z)((0,t.Z)().mark((function r(n){var c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l("pending"),v(null),Z(null),r.prev=3,r.next=6,e();case 6:return c=r.sent,n&&(v(c),l("success")),r.abrupt("return",c);case 11:r.prev=11,r.t0=r.catch(3),n&&(l("error"),Z(r.t0));case 14:case"end":return r.stop()}}),r,null,[[3,11]])})));return function(e){return r.apply(this,arguments)}}(),[e]);return(0,i.u)((function(e){r&&y(e())}),[r]),(0,a.useEffect)((function(){return function(){l("idle"),v(null),Z(null)}}),[]),{isLoading:x,isError:w,status:o,data:d,error:m,execute:function(){return y(!0)}}}},3737:function(e,r,n){n.d(r,{M:function(){return u}});var t=n(9439),c=n(7313);function u(e){var r=e.ref,n=e.offset,u=void 0===n?50:n,a=e.loading,i=e.canLoadMore,s=e.fetchFn,o=(0,c.useState)(!1),l=(0,t.Z)(o,2),f=l[0],p=l[1];(0,c.useEffect)((function(){if(null!==r&&void 0!==r&&r.current){var e=function(e){var r=e.target,n=r.getBoundingClientRect().height;r.scrollTop+n>=r.scrollHeight-u?p(!0):p(!1)};return null===r||void 0===r||r.current.addEventListener("scroll",e),function(){var n;null===r||void 0===r||null===(n=r.current)||void 0===n||n.removeEventListener("scroll",e)}}if(document){var n=function(e){var r=e.currentTarget,n=r.getElementById("footer"),t=r.scrollingElement,c=t.scrollHeight,a=t.scrollTop,i=t.clientHeight;Math.abs(c-i-a)<n.getBoundingClientRect().height+u?p(!0):p(!1)};return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}}}),[]),(0,c.useEffect)((function(){f&&!a&&i&&(null===s||void 0===s||s())}),[f])}},9225:function(e,r,n){n.d(r,{u:function(){return c}});var t=n(7313);function c(e,r){var n=(0,t.useRef)(e);n.current=e;var c=(0,t.useRef)(!1);(0,t.useEffect)((function(){return c.current=!0,n.current((function(){return c.current})),function(){c.current=!1}}),r)}},8468:function(e,r,n){n.d(r,{K:function(){return a}});var t=n(7313),c=n(7890),u=n(1172);function a(){var e=(0,c.TH)(),r=e.pathname,n=e.search,a=(0,c.s0)();return[(0,t.useMemo)((function(){return u.parse(n)}),[n]),(0,t.useCallback)((function(e){a(r+"?"+u.stringify(e,{skipEmptyString:!0,skipNull:!0}),{replace:!0})}),[r,a])]}},7992:function(e,r,n){n.r(r),n.d(r,{default:function(){return L}});var t=n(1413),c=n(9439),u=n(7313),a=n(4511),i=n(7864),s=n(7890),o=n(9542),l=n(9968),f=n(887),p=n(8468),d=n(3433),v=n(4165),h=n(5861),g=n(4925),m=n(573),Z=n(6791),x=n(3737),w=n(5565),y=n(8469),E=["execute"],b=function(e,r){if(!e)return[];var n=r===f.Hx.trade?1e3:1;switch(e){case"under_1":return[(0,m.ar)("price","<=",1*n)];case"1_2":return[(0,m.ar)("price",">=",1*n),(0,m.ar)("price","<=",2*n)];case"2_3":return[(0,m.ar)("price",">=",2*n),(0,m.ar)("price","<=",3*n)];case"3_5":return[(0,m.ar)("price",">=",3*n),(0,m.ar)("price","<=",5*n)];case"5_8":return[(0,m.ar)("price",">=",5*n),(0,m.ar)("price","<=",8*n)];case"8_15":return[(0,m.ar)("price",">=",8*n),(0,m.ar)("price","<=",15*n)];case"15_30":return[(0,m.ar)("price",">=",15*n),(0,m.ar)("price","<=",30*n)];case"upper_30":return[(0,m.ar)("price",">=",30*n)]}};var T=n(6417),k=(0,u.memo)((function(e){var r=e.data,n=void 0===r?[]:r;return(0,T.jsx)(T.Fragment,{children:n.map((function(e){return(0,T.jsx)(o.eu,{data:e},e.id)}))})}));function L(){var e=(0,a.$)().t,r=(0,s.TH)().pathname,n=(0,p.K)(),L=(0,c.Z)(n,2),H=L[0],R=L[1],j=(0,u.useRef)(null),C=function(e,r){var n=(0,u.useRef)(void 0),a=(0,s.TH)().pathname,i=a.startsWith("/mua-ban")?f.Hx.trade:f.Hx.rent,o=(0,y.Yg)((0,t.Z)((0,t.Z)({},r),{},{action:i})),p=(0,l.M)(),T=p.set,k=p.get,L=(0,u.useState)(!1),H=(0,c.Z)(L,2),R=H[0],j=H[1],C=(0,u.useState)([]),M=(0,c.Z)(C,2),S=M[0],_=M[1],K=(0,u.useState)(void 0),P=(0,c.Z)(K,2),N=P[0],F=P[1],B=(0,Z.r)((function(){return A.apply(this,arguments)}),!1),W=B.execute,I=(0,g.Z)(B,E);function X(){return(X=(0,h.Z)((0,v.Z)().mark((function e(){var r;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W();case 3:(r=e.sent)&&_((function(e){return[].concat((0,d.Z)(e),(0,d.Z)(r))})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function A(){return(A=(0,h.Z)((0,v.Z)().mark((function e(){var t,c,u,a,s;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],r.ward&&t.push((0,m.ar)("ward","==",+r.ward)),r.district&&t.push((0,m.ar)("district","==",+r.district)),r.province&&t.push((0,m.ar)("province","==",+r.province)),r.houseType&&t.push((0,m.ar)("houseType","==",+r.houseType)),N&&t.push((0,m.TQ)(N)),r.priceRange?t.unshift((0,m.Xo)("price","desc")):t.unshift((0,m.Xo)("createdAt","desc")),c=m.IO.apply(void 0,[(0,m.hJ)(w.db,"properties")].concat(t,[(0,m.ar)("published","==",!0),(0,m.ar)("action","==",i)],(0,d.Z)(b(r.priceRange,i)),[(0,m.b9)(10)])),u=[],e.next=12,(0,m.PL)(c);case 12:return a=e.sent,s=a.docs[a.docs.length-1],a.forEach((function(e){u.push(e.data())})),F(s),n.current={data:[].concat((0,d.Z)(S),u),cursor:s,hashKey:o},j(!1),e.abrupt("return",u);case 21:e.prev=21,e.t0=e.catch(0);case 23:case"end":return e.stop()}}),e,null,[[0,21]])})))).apply(this,arguments)}(0,x.M)({ref:e,canLoadMore:!!N,loading:I.isLoading,fetchFn:function(){return X.apply(this,arguments)}});var J=(0,u.useCallback)((function(){_([]),F(void 0),j(!0)}),[]);return(0,u.useEffect)((function(){J()}),[r.priceRange,r.district,r.province,r.ward,r.houseType]),(0,u.useEffect)((function(){var r=0,c=e.current;function u(e){r=e.target.scrollTop}return null===c||void 0===c||c.addEventListener("scroll",u),function(){n.current&&T(a,(0,t.Z)((0,t.Z)({},n.current),{},{scrollPos:r})),null===c||void 0===c||c.removeEventListener("scroll",u)}}),[a]),(0,u.useEffect)((function(){function e(){return(e=(0,h.Z)((0,v.Z)().mark((function e(){var r;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:r=e.sent,_(null!==r&&void 0!==r?r:[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var r=k(a);if(r&&r.hashKey===o){var t=r.data,c=r.cursor;return n.current={data:t,cursor:c,hashKey:o},_(t),F(c),void j(!1)}R&&function(){e.apply(this,arguments)}()}),[R]),(0,u.useEffect)((function(){return function(){J()}}),[a]),(0,u.useEffect)((function(){var r=k(a);e.current&&S&&void 0!=(null===r||void 0===r?void 0:r.scrollPos)&&e.current.scroll({top:r.scrollPos,left:0});var n=setTimeout((function(){r&&void 0!=r.scrollPos&&T(a,(0,t.Z)((0,t.Z)({},r),{},{scrollPos:void 0}))}),0);return function(){clearTimeout(n)}}),[S]),(0,t.Z)((0,t.Z)({},I),{},{data:S,clear:J})}(j,H),M=C.isLoading,S=C.data,_=C.clear,K=(0,l.M)().clear;(0,u.useEffect)((function(){document.title=r.startsWith("/mua-ban")?"Mua b\xe1n":"Cho thu\xea"}),[r]);var P=r.startsWith("/mua-ban")?f.Hx.trade:f.Hx.rent,N=H.province,F=H.district,B=H.ward,W=H.priceRange,I=H.houseType;return(0,T.jsxs)("div",{className:"p-2 md:p-5 h-full flex items-center flex-col",children:[(0,T.jsx)(o.wn,{action:P,value:{province:N,district:F,ward:B,priceRange:W,houseType:I},onFilter:function(e){R((0,t.Z)((0,t.Z)({},H),e))},onClear:function(){R({}),_(),K(r)}}),!M&&!(null!==S&&void 0!==S&&S.length)&&(0,T.jsx)(o.x4,{title:"Kh\xf4ng c\xf3 th\xf4ng tin"}),(0,T.jsxs)("div",{className:"max-w-[1000px] w-full flex-1 overflow-y-auto",ref:j,children:[(0,T.jsx)(k,{data:S}),M&&(0,T.jsx)(o.x4,{title:(0,T.jsxs)("div",{className:"flex items-center gap-2",children:[(0,T.jsx)(i.Z7b,{className:"animate-spin"})," ",e("searching")]})})]})]})}}}]);