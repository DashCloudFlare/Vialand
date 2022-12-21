"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[96],{9869:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(4165),a=t(5861),c=t(1172);function s(e,n,t){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var s,i,u,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:n,mode:"cors",headers:{"Content-Type":"application/json",secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}},i=t,a&&("GET"===n?(u=c.stringify(a),i+="?"+u):(s.body=a instanceof FormData?a:JSON.stringify(a),a instanceof FormData&&(s.headers={secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}))),e.next=5,fetch(i,s);case 5:if(!(o=e.sent).ok){e.next=10;break}return e.next=9,o.json();case 9:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",void 0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1716:function(e,n,t){t.d(n,{Cj:function(){return i},Pe:function(){return u},hF:function(){return o},wt:function(){return s}});var r=t(8941),a=t(9869),c=r.Z.common.baseApiUrl+"/upload",s=function(e){return(0,a.Z)("DELETE",c,{ids:e})},i=function(e){var n=new FormData;return n.append("file",e),(0,a.Z)("POST",c+"/google-img",n)},u=function(e,n){var t=new FormData;return t.append("file",e),t.append("newsId",n),(0,a.Z)("POST",c+"/google-vid",t)},o=function(e){return(0,a.Z)("DELETE",c+"/google",{ids:e})}},7629:function(e,n,t){t.d(n,{ZE:function(){return a},vh:function(){return r}});var r="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",a="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean"},6791:function(e,n,t){t.d(n,{r:function(){return u}});var r=t(4165),a=t(5861),c=t(9439),s=t(7313),i=t(9225);function u(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,s.useState)("idle"),u=(0,c.Z)(t,2),o=u[0],l=u[1],d=(0,s.useState)(null),p=(0,c.Z)(d,2),h=p[0],f=p[1],x=(0,s.useState)(null),m=(0,c.Z)(x,2),v=m[0],g=m[1],b="pending"===o,j="error"===o,Z=(0,s.useCallback)(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l("pending"),f(null),g(null),n.prev=3,n.next=6,e();case 6:return a=n.sent,t&&(f(a),l("success")),n.abrupt("return",a);case 11:n.prev=11,n.t0=n.catch(3),t&&(l("error"),g(n.t0));case 14:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e){return n.apply(this,arguments)}}(),[e]);return(0,i.u)((function(e){n&&Z(e())}),[n]),(0,s.useEffect)((function(){return function(){l("idle"),f(null),g(null)}}),[]),{isLoading:b,isError:j,status:o,data:h,error:v,execute:function(){return Z(!0)}}}},9225:function(e,n,t){t.d(n,{u:function(){return a}});var r=t(7313);function a(e,n){var t=(0,r.useRef)(e);t.current=e;var a=(0,r.useRef)(!1);(0,r.useEffect)((function(){return a.current=!0,t.current((function(){return a.current})),function(){a.current=!1}}),n)}},8468:function(e,n,t){t.d(n,{K:function(){return s}});var r=t(7313),a=t(7890),c=t(1172);function s(){var e=(0,a.TH)(),n=e.pathname,t=e.search,s=(0,a.s0)();return[(0,r.useMemo)((function(){return c.parse(t)}),[t]),(0,r.useCallback)((function(e){s(n+"?"+c.stringify(e,{skipEmptyString:!0,skipNull:!0}),{replace:!0})}),[n,s])]}},6243:function(e,n,t){t.d(n,{db:function(){return b}});var r=t(271),a=t(995),c=t(573),s=t(6797),i=t(8941),u=i.Z.firebase,o=u.apiKey,l=u.appId,d=u.databaseURL,p=u.projectId,h=u.storageBucket,f=u.authDomain,x=u.messagingSenderId,m=i.Z.google.recaptchaSiteKey,v={apiKey:o,authDomain:f,databaseURL:d,projectId:p,storageBucket:h,messagingSenderId:x,appId:l},g=(0,r.ZF)(v),b=(0,c.ad)(g);(0,s.cF)(g),(0,a.yu)(g,{provider:new a.z9(m),isTokenAutoRefreshEnabled:!0})},8096:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r=t(4165),a=t(4942),c=t(1413),s=t(3433),i=t(5861),u=t(9439),o=t(3061),l=t(658),d=t.n(l),p=t(573),h=t(7313),f=t(7864),x=t(2539),m=t(8512),v=t(9869),g=t(8941),b=g.Z.common.baseApiUrl,j=function(e,n,t){return(0,v.Z)("POST",b+"/news",{fbId:e,pinned:n,projectPinnedExpiredAt:t})},Z=t(2419),w=t(7629),k=t(5857),N=t(8468),y=t(6243),E=t(1716),T=function(e,n){return fetch("https://www.googleapis.com/drive/v3/files/".concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(n)}}).then((function(){return!0})).catch((function(){return!1}))},D=function(e,n){return e.fromSA?(0,E.hF)([e.id]):T(e.id,n)},A=function(e,n){var t=[];["video","images","paymentImage"].forEach((function(n){var r=e[n];void 0!=r&&t.push(r)}));var r=[],a=[];return t.flat(1).forEach((function(e){e.fromSA?r.push(e.id):a.push(e.id)})),a.map((function(e){return T(e,n)})).concat((0,E.hF)(r))},C=t(4925),S=t(6791),I=t(9225),P=["execute"];var F=t(6417);function L(){var e=(0,k.Eu)().getAccessToken,n=(0,N.K)(),t=(0,u.Z)(n,2),l=t[0],E=t[1],T=function(e){var n=e.slug,t=(0,h.useState)(void 0),a=(0,u.Z)(t,2),s=a[0],o=a[1],l=(0,h.useState)(!1),d=(0,u.Z)(l,2),f=d[0],x=d[1],m=(0,S.r)((function(){return b.apply(this,arguments)}),!1),v=m.execute,g=(0,C.Z)(m,P);function b(){return(b=(0,i.Z)((0,r.Z)().mark((function e(){var t,a,i,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,n&&t.push((0,p.ar)("slug","==",n)),s&&!n&&t.push((0,p.TQ)(s)),a=p.IO.apply(void 0,[(0,p.hJ)(y.db,"properties"),(0,p.Xo)("createdAt","desc")].concat(t,[(0,p.b9)(50)])),i=[],e.next=8,(0,p.PL)(a);case 8:return u=e.sent,o(u.docs[u.docs.length-1]),u.forEach((function(e){i.push((0,c.Z)({id:e.id},e.data()))})),e.abrupt("return",i);case 14:return e.prev=14,e.t0=e.catch(1),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}var j=(0,h.useCallback)((function(){x(!1)}),[]),Z=(0,h.useCallback)((function(){o(void 0),x(!1)}),[]);return(0,I.u)((function(e){!f&&e()&&(v(),x(!0))}),[f]),(0,c.Z)((0,c.Z)({},g),{},{refetch:j,clear:Z})}({slug:l.slug}),L=T.isLoading,U=T.data,H=T.refetch,R=T.clear,B=(0,h.useState)([]),O=(0,u.Z)(B,2),G=O[0],J=O[1];(0,h.useEffect)((function(){J(null!==U&&void 0!==U?U:[])}),[U]);var K=(0,h.useRef)(null),V=(0,h.useCallback)(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i,u,o,l,d=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=d.length>2&&void 0!==d[2]?d[2]:{},u=(0,s.Z)(G),!((o=u.findIndex((function(e){return e.id===n})))>-1)){e.next=18;break}return u[o]=(0,c.Z)((0,c.Z)({},u[o]),{},(0,a.Z)({},t,!u[o][t]),i),J(u),e.prev=6,l=(0,p.JU)(y.db,"properties",n),e.next=10,(0,p.pl)(l,u[o]);case 10:m.Am.success("Thao t\xe1c th\xe0nh c\xf4ng"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(6),u[o][t]=!u[o][t],J(u);case 18:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(n,t){return e.apply(this,arguments)}}(),[G]),M=(0,h.useCallback)(function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var a,c,i,u,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:if(a=n.sent){n.next=6;break}return m.Am.warn(w.ZE),n.abrupt("return");case 6:if(c=(0,s.Z)(G),!((i=c.findIndex((function(e){return e.id===t})))>-1)){n.next=15;break}return u=(0,p.JU)(y.db,"properties",t),o=Promise.all([(0,p.oe)(u)].concat(A(c[i],a))),n.next=13,m.Am.promise(o,{pending:"\u0110ang x\xf3a b\xe0i \u0111\u0103ng",success:"X\xf3a b\xe0i \u0111\u0103ng th\xe0nh c\xf4ng",error:w.vh});case 13:c.splice(i,1),J(c);case 15:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[G,e]),X=(0,h.useCallback)(function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,a){var c,i,u,o,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:if(c=n.sent){n.next=6;break}return m.Am.warn(w.ZE),n.abrupt("return");case 6:if(i=(0,s.Z)(G),!((u=i.findIndex((function(e){return e.id===t})))>-1)){n.next=20;break}return n.prev=9,o=i[u].video,i[u].video=null,l=(0,p.JU)(y.db,"properties",t),n.next=15,m.Am.promise(Promise.all([(0,p.pl)(l,i[u]),D(o,c)]),{pending:"\u0110ang x\xf3a video",success:"X\xf3a video th\xe0nh c\xf4ng",error:w.vh});case 15:J(i),n.next=20;break;case 18:n.prev=18,n.t0=n.catch(9);case 20:case"end":return n.stop()}}),n,null,[[9,18]])})));return function(e,t){return n.apply(this,arguments)}}(),[G,e]),Y=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.Z)("GET",b+"/renew");case 3:n=e.sent,t=n.data,200===n.status&&setTimeout((function(){window.open(t,"_blank","resizable=yes,top=200,left=200,width=480,height=640")}),0),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=d()().add(g.Z.common.pinnedProjectExpirationH,"hours"),e.next=4,V(n,"projectPinned",{projectPinnedExpiredAt:a.unix()});case 4:return e.next=6,j(n,t,a.toDate());case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){l.slug&&(K.current.value=l.slug)}),[l.slug]),(0,F.jsxs)("div",{className:"min-h-screen p-5",children:[(0,F.jsx)("h1",{className:"font-medium text-base md:text-lg mb-5",children:"Danh s\xe1ch tin"}),(0,F.jsxs)("div",{className:"w-full",children:[(0,F.jsxs)("div",{className:"flex my-2 gap-2 flex-wrap",children:[(0,F.jsx)("input",{ref:K,placeholder:"Nh\u1eadp ID c\u1ea7n tra c\u1ee9u",type:"text",className:"input max-w-[400px] w-full"}),(0,F.jsxs)("button",{onClick:function(e){K.current.value&&(E({slug:K.current.value}),H())},className:"btn",children:[(0,F.jsx)(f.RB5,{}),(0,F.jsx)("span",{children:"Tra c\u1ee9u"})]}),(0,F.jsxs)("button",{onClick:function(){K.current&&(l.slug&&R(),K.current.value="",E({}))},className:"btn btn--secondary",children:[(0,F.jsx)(f.oHP,{}),(0,F.jsx)("span",{children:"X\xf3a"})]}),(0,F.jsx)("div",{className:"flex-grow"}),(0,F.jsxs)("button",{onClick:function(){R()},className:"btn",children:[(0,F.jsx)(f.Em2,{}),(0,F.jsx)("span",{children:"Refresh"})]}),(0,F.jsxs)("button",{onClick:Y,className:"btn",children:[(0,F.jsx)(f.IDO,{}),(0,F.jsx)("span",{children:"L\xe0m m\u1edbi token"})]})]}),(0,F.jsx)("div",{className:"overflow-auto",children:(0,F.jsxs)("table",{className:"table-auto",children:[(0,F.jsx)("thead",{children:(0,F.jsxs)("tr",{children:[(0,F.jsx)("th",{className:"min-w-[200px] max-w-[300px]",children:"T\xean"}),(0,F.jsx)("th",{className:"min-w-[130px] max-w-[300px]",children:"Ng\xe0y \u0111\u0103ng"}),(0,F.jsx)("th",{className:"min-w-[130px] max-w-[300px]",children:"\u1ea2nh thanh to\xe1n"}),(0,F.jsx)("th",{className:"min-w-[130px] max-w-[300px]",children:"Link video"}),(0,F.jsx)("th",{className:"min-w-[130px] max-w-[300px]",children:"Thao t\xe1c video"}),(0,F.jsx)("th",{className:"min-w-[130px] max-w-[300px]",children:"Thao t\xe1c b\xe0i \u0111\u0103ng"}),(0,F.jsx)("th",{className:"min-w-[130px] max-w-[300px]",children:"Ghim trang ch\u1ee7"}),(0,F.jsx)("th",{className:"min-w-[130px] max-w-[300px]",children:"Ghim d\u1ef1 \xe1n"})]})}),(0,F.jsx)("tbody",{children:null!==G&&void 0!==G&&G.length?(0,F.jsx)(F.Fragment,{children:null===G||void 0===G?void 0:G.map((function(e){var n=e.id,t=e.subject,r=e.video,a=e.createdAt,c=e.hideVideo,s=e.published,i=e.paymentImage,u=e.featurePinned,o=e.projectPinned,l=e.projectPinnedExpiredAt;return(0,F.jsxs)("tr",{className:"hover:bg-gray-100 cursor-default",children:[(0,F.jsx)("td",{children:(0,F.jsxs)("div",{className:"flex items-center",children:[o&&(0,F.jsx)(f.pHD,{className:"flex-shrink-0 text-yellow-500 text-lg"}),(0,F.jsx)("p",{className:"text-sm mx-auto",children:t})]})}),(0,F.jsx)("td",{children:(0,F.jsx)("p",{className:"mx-auto text-sm",children:d()(1e3*a).format("DD/MM/YYYY - HH:mm")})}),(0,F.jsx)("td",{children:i?(0,F.jsx)(Z.Ee,{title:"\u1ea2nh thanh to\xe1n",className:"relative w-[150px] h-[150px] object-cover",src:"https://lh3.googleusercontent.com/d/".concat(i.id)}):"---"}),(0,F.jsx)("td",{children:r?(0,F.jsx)("div",{className:"relative mx-auto w-[192px] aspect-video",children:(0,F.jsx)("video",{controls:!0,title:"video",children:(0,F.jsx)("source",{src:"https://drive.google.com/uc?export=download&id=".concat(r.id),type:"video/mp4"})})}):"---"}),(0,F.jsx)("td",{children:(0,F.jsx)(Z.o1,{toggleText:c?"Hi\u1ec7n":"\u1ea8n",hideToggle:!r,disableDelete:!r,booleanVal:c,onDelete:function(){return X(n,r.id)},onToggle:function(){return V(n,"hideVideo")}})}),(0,F.jsx)("td",{children:(0,F.jsx)(Z.o1,{toggleText:s?"\u1ea8n":"Hi\u1ec7n",booleanVal:!s,onDelete:function(){return M(n)},onToggle:function(){return V(n,"published")}})}),(0,F.jsx)("td",{children:(0,F.jsx)(Z.o1,{toggleText:u?"B\u1ecf ghim":"Ghim",booleanVal:!u,onToggle:function(){return V(n,"featurePinned")}})}),(0,F.jsxs)("td",{children:[(0,F.jsx)(Z.o1,{toggleText:o?"B\u1ecf ghim":"Ghim",booleanVal:!o,onToggle:function(){return z(n,!o)}}),l&&o&&new Date(1e3*l)>new Date&&(0,F.jsx)(Z.B7,{deadline:1e3*l})]})]},n)}))}):(0,F.jsx)("tr",{className:"text-center",children:(0,F.jsx)("td",{colSpan:100,children:L?"Loading...":"Kh\xf4ng c\xf3 data"})})})]})}),(0,F.jsxs)("div",{className:"flex gap-3 mt-5",children:[(0,F.jsxs)("button",{className:"btn",onClick:R,children:[(0,F.jsx)(x.b2E,{}),"Trang \u0111\u1ea7u"]}),(0,F.jsxs)("button",{className:(0,o.Z)("btn",!(null!==U&&void 0!==U&&U.length)||U.length<50&&"btn--disabled"),onClick:H,children:["Trang sau",(0,F.jsx)(x.sOJ,{})]})]})]})]})}}}]);