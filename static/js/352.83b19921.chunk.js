"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[352],{9869:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(4165),a=t(5861),s=t(1172);function c(e,n,t){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var c,i,u,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:n,mode:"cors",headers:{"Content-Type":"application/json",secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}},i=t,a&&("GET"===n?(u=s.stringify(a),i+="?"+u):(c.body=a instanceof FormData?a:JSON.stringify(a),a instanceof FormData&&(c.headers={secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}))),e.next=5,fetch(i,c);case 5:if(!(l=e.sent).ok){e.next=10;break}return e.next=9,l.json();case 9:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",void 0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7629:function(e,n,t){t.d(n,{v:function(){return r}});var r="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat"},6791:function(e,n,t){t.d(n,{r:function(){return u}});var r=t(4165),a=t(5861),s=t(9439),c=t(7313),i=t(9225);function u(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,c.useState)("idle"),u=(0,s.Z)(t,2),l=u[0],o=u[1],d=(0,c.useState)(null),h=(0,s.Z)(d,2),f=h[0],p=h[1],x=(0,c.useState)(null),v=(0,s.Z)(x,2),m=v[0],g=v[1],j="pending"===l,b="error"===l,Z=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o("pending"),p(null),g(null),n.prev=3,n.next=6,e();case 6:a=n.sent,t&&(p(a),o("success")),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),t&&(o("error"),g(n.t0));case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,i.u)((function(e){n&&Z(e())}),[n]),(0,c.useEffect)((function(){return function(){o("idle"),p(null),g(null)}}),[]),{isLoading:j,isError:b,status:l,data:f,error:m,execute:function(){return Z(!0)}}}},9225:function(e,n,t){t.d(n,{u:function(){return a}});var r=t(7313);function a(e,n){var t=(0,r.useRef)(e);t.current=e;var a=(0,r.useRef)(!1);(0,r.useEffect)((function(){return a.current=!0,t.current((function(){return a.current})),function(){a.current=!1}}),n)}},6243:function(e,n,t){t.d(n,{db:function(){return p}});var r=t(271),a=t(4457),s=t(6797),c=t(8941).Z.firebase,i=c.apiKey,u=c.appId,l=c.databaseURL,o=c.projectId,d=c.storageBucket,h={apiKey:i,authDomain:c.authDomain,databaseURL:l,projectId:o,storageBucket:d,messagingSenderId:c.messagingSenderId,appId:u},f=(0,r.ZF)(h),p=(0,a.ad)(f);(0,s.cF)(f)},2352:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r=t(4165),a=t(3433),s=t(5861),c=t(9439),i=t(658),u=t.n(i),l=t(4457),o=t(7313),d=t(7864),h=t(9466),f=t(8512),p=t(9869),x="https://mail.vialand.vn/upload",v=function(e){var n=new FormData;return n.append("file",e),(0,p.Z)("POST",x,n)},m=t(2589),g=t(8941),j=t(7629),b=t(6243),Z=t(1413),k=t(7762),w=t(4925),y=t(5627);function N(e){return new Promise((function(n,t){var r=new FileReader;r.onload=function(){n(r.result)},r.onerror=t,r.readAsDataURL(e)}))}function L(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return e>1e3*n*1e3}var q=t(6417),F=["kv","imageList"],S=[{label:"K\xedch ho\u1ea1t",value:"active"},{label:"V\xf4 hi\u1ec7u h\xf3a",value:"inactive"}],D=(0,o.memo)((function(e){var n=e.onCreateSuccess,t=(0,o.useState)(!1),a=(0,c.Z)(t,2),i=a[0],u=a[1],h=(0,o.useState)([]),p=(0,c.Z)(h,2),x=p[0],g=p[1],D=(0,y.cI)({defaultValues:{status:"active"}}),U=D.register,E=D.handleSubmit,T=D.reset,C=D.formState.errors,A=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t,a,s,c,i,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.target.files,a=[],s=(0,k.Z)(t),e.prev=3,s.s();case 5:if((c=s.n()).done){e.next=13;break}return i=c.value,e.next=9,N(i);case 9:u=e.sent,a.push(u);case 11:e.next=5;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),s.e(e.t0);case 18:return e.prev=18,s.f(),e.finish(18);case 21:g(a);case 22:case"end":return e.stop()}}),e,null,[[3,15,18,21]])})));return function(n){return e.apply(this,arguments)}}();return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(m.u_,{open:i,title:"T\u1ea1o qu\u1ea3ng c\xe1o",onClose:function(){return u(!1)},children:(0,q.jsx)("form",{onSubmit:E((function(e){f.Am.promise((0,s.Z)((0,r.Z)().mark((function t(){var a,s,c,i,o,d,h,f,p,x,m,j,y;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.kv,s=e.imageList,c=(0,w.Z)(e,F),i=a[0],t.prev=2,t.next=5,v(i);case 5:o=t.sent,d=o.data,h=d.id,f=d.path,p=[],x=(0,k.Z)(s),t.prev=11,x.s();case 13:if((m=x.n()).done){t.next=22;break}return j=m.value,t.t0=p,t.next=18,v(j);case 18:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 20:t.next=13;break;case 22:t.next=27;break;case 24:t.prev=24,t.t2=t.catch(11),x.e(t.t2);case 27:return t.prev=27,x.f(),t.finish(27);case 30:return t.next=32,Promise.all(p);case 32:return y=t.sent,t.next=35,(0,l.ET)((0,l.hJ)(b.db,"ads"),(0,Z.Z)((0,Z.Z)({},c),{},{kv:{id:h,path:f},images:y.map((function(e){return e.data})),createdAt:l.EK.now().seconds}));case 35:T(),u(!1),g([]),null===n||void 0===n||n(),t.next=43;break;case 41:t.prev=41,t.t3=t.catch(2);case 43:case"end":return t.stop()}}),t,null,[[2,41],[11,24,27,30]])}))),{pending:"\u0110ang t\u1ea1o qu\u1ea3ng c\xe1o",success:"T\u1ea1o qu\u1ea3ng c\xe1o th\xe0nh c\xf4ng",error:j.v})})),children:(0,q.jsxs)("div",{className:"space-y-5",children:[(0,q.jsx)(m.cw,{label:"Link qu\u1ea3ng c\xe1o",htmlFor:"href",error:C.href,children:(0,q.jsx)("input",(0,Z.Z)({type:"text",autoComplete:"off",className:"input"},U("href",{required:!0,pattern:{value:/(https?:\/\/)?([\w\\-])+\.{1}([a-zA-Z]{2,63})([\\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,message:"Vui l\xf2ng nh\u1eadp link qu\u1ea3ng c\xe1o h\u1ee3p l\u1ec7"}})))}),(0,q.jsx)(m.cw,{label:"Link video (youtube iframe)",htmlFor:"videoUrl",error:C.videoUrl,children:(0,q.jsx)("input",(0,Z.Z)({type:"text",autoComplete:"off",className:"input"},U("videoUrl",{required:!0})))}),(0,q.jsx)(m.cw,{label:"N\u1ed9i dung",htmlFor:"content",error:C.content,children:(0,q.jsx)("textarea",(0,Z.Z)({className:"input max-h-[150px] resize-y"},U("content")))}),(0,q.jsx)(m.cw,{label:"\u1ea2nh qu\u1ea3ng c\xe1o",htmlFor:"kv",error:C.kv,children:(0,q.jsx)("input",(0,Z.Z)({type:"file",accept:"image/*",multiple:!1,className:"input"},U("kv",{validate:function(e){if(e&&e.length&&L(e[0].size,2))return"Dung l\u01b0\u1ee3ng t\u1eadp tin v\u01b0\u1ee3t qu\xe1 2Mb";return!0}})))}),(0,q.jsx)(m.cw,{label:"Danh s\xe1ch h\xecnh",htmlFor:"imageList",error:C.imageList,children:(0,q.jsx)("input",(0,Z.Z)({multiple:!0,type:"file",accept:"image/*",className:"input"},U("imageList",{onChange:A,validate:function(e){if(null!==e&&void 0!==e&&e.length){var n,t=(0,k.Z)(e);try{for(t.s();!(n=t.n()).done;){if(L(n.value.size,2))return"Dung l\u01b0\u1ee3ng t\u1eadp tin v\u01b0\u1ee3t qu\xe1 2Mb"}}catch(r){t.e(r)}finally{t.f()}}return!0}})))}),!!x.length&&(0,q.jsx)("div",{className:"flex flex-wrap gap-3",children:x.map((function(e,n){return(0,q.jsx)("div",{className:"w-[100px]",children:(0,q.jsx)("img",{src:e,alt:""})},n)}))}),(0,q.jsx)(m.cw,{label:"Tr\u1ea1ng th\xe1i",htmlFor:"status",children:(0,q.jsx)("select",(0,Z.Z)((0,Z.Z)({className:"select"},U("status")),{},{children:S.map((function(e){return(0,q.jsx)("option",{value:e.value,children:e.label},e.value)}))}))}),(0,q.jsx)("div",{className:"flex justify-end",children:(0,q.jsx)("button",{className:"btn",type:"submit",children:"T\u1ea1o qu\u1ea3ng c\xe1o"})})]})})}),(0,q.jsxs)("button",{className:"btn",onClick:function(){return u(!0)},children:[(0,q.jsx)(d.Lfi,{}),"T\u1ea1o qu\u1ea3ng c\xe1o"]})]})})),U=t(6791),E=["execute"];function T(){var e=function(){var e=(0,U.r)((function(){return a.apply(this,arguments)})),n=e.execute,t=(0,w.Z)(e,E);function a(){return(a=(0,s.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,l.IO)((0,l.hJ)(b.db,"ads"),(0,l.Xo)("createdAt","desc")),t=[],e.next=5,(0,l.PL)(n);case 5:return e.sent.docs.forEach((function(e){t.push((0,Z.Z)({id:e.id},e.data()))})),e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return(0,Z.Z)((0,Z.Z)({},t),{},{execute:n})}(),n=e.data,t=e.isLoading,i=e.execute,v=(0,o.useState)([]),k=(0,c.Z)(v,2),y=k[0],N=k[1],L=(0,o.useCallback)((function(){i()}),[i]);return(0,o.useEffect)((function(){n&&N(n)}),[n]),t?(0,q.jsx)(m.x4,{title:"\u0110ang l\u1ea5y th\xf4ng tin"}):(0,q.jsxs)("div",{className:"min-h-screen p-5",children:[(0,q.jsxs)("div",{className:"flex items-center gap-3",children:[(0,q.jsx)("p",{children:"Qu\u1ea3ng c\xe1o"}),(0,q.jsx)("div",{className:"flex-grow"}),(0,q.jsx)(h.rU,{to:"/",children:(0,q.jsxs)("button",{className:"btn btn--secondary",children:[(0,q.jsx)(d.iqr,{}),"V\u1ec1 trang ch\u1ee7"]})}),(0,q.jsx)(D,{onCreateSuccess:L})]}),(0,q.jsxs)("table",{className:"mt-5 table-auto w-full min-w-[1024px] overflow-y-auto",children:[(0,q.jsx)("thead",{children:(0,q.jsxs)("tr",{children:[(0,q.jsx)("th",{children:"Link"}),(0,q.jsx)("th",{children:"Video"}),(0,q.jsx)("th",{children:"N\u1ed9i dung"}),(0,q.jsx)("th",{children:"Ng\xe0y \u0111\u0103ng"}),(0,q.jsx)("th",{children:"H\xecnh \u1ea3nh"}),(0,q.jsx)("th",{children:"Tr\u1ea1ng th\xe1i"})]})}),(0,q.jsx)("tbody",{children:y.map((function(e){return(0,q.jsxs)("tr",{children:[(0,q.jsx)("td",{children:(0,q.jsx)("a",{className:"text-blue-500 hover:text-blue-400",href:e.href,children:e.href})}),(0,q.jsx)("td",{children:(0,q.jsx)("div",{className:"relative w-[300px] aspect-vid",children:(0,q.jsx)("iframe",{className:"absolute top-0 left-0 w-full h-full",title:"videoUrl",scrolling:"no",src:e.videoUrl})})}),(0,q.jsx)("td",{children:(0,q.jsx)("p",{className:"max-w-[300px] mx-auto text-sm",children:e.content})}),(0,q.jsx)("td",{children:u()(1e3*e.createdAt).format("DD/MM/YYYY HH:mm")}),(0,q.jsx)("td",{children:e.kv?(0,q.jsx)("img",{className:"mx-auto w-[128px]",src:"".concat(g.Z.common.baseApiUrl,"/").concat(e.kv.path),alt:""}):"---"}),(0,q.jsx)("td",{children:(0,q.jsx)(m.o1,{hideToggle:!0,booleanVal:"active"!==e.status,onDelete:function(){return n=e.id,void f.Am.promise((0,s.Z)((0,r.Z)().mark((function e(){var t,s,c,i,u,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=(0,a.Z)(y),!((s=t.findIndex((function(e){return e.id===n})))>-1)){e.next=13;break}return e.next=6,(0,l.oe)((0,l.JU)(b.db,"ads",n));case 6:return c=t[s],i=c.images,u=c.kv,o=[u.id],null===i||void 0===i||i.forEach((function(e){o.push(e.id)})),e.next=11,r=o,(0,p.Z)("DELETE",x,{ids:r});case 11:t.splice(s,1),N(t);case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}var r}),e,null,[[0,15]])}))),{pending:"\u0110ang ti\u1ebfn h\xe0nh x\xf3a qu\u1ea3ng c\xe1o",success:"X\xf3a qu\u1ea3ng c\xe1o th\xe0nh c\xf4ng",error:j.v});var n}})})]},e.id)}))})]})]})}}}]);