"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[522],{5905:function(e,n,t){t.d(n,{iy:function(){return o},$m:function(){return i}});var r=t(9869),a=t(8941).Z.common.baseApiUrl,i=function(){return(0,r.Z)("GET",a+"/renew")},o=function(){return(0,r.Z)("POST",a+"/notification")}},3278:function(e,n,t){t.d(n,{Fp:function(){return a},Qm:function(){return r},yC:function(){return i}});var r=function(e,n){return Promise.all(e.map((function(e){return fetch("https://www.googleapis.com/drive/v2/files/".concat(e.id,"?fields=thumbnailLink,embedLink,id"),{method:"GET",headers:{Authorization:"Bearer ".concat(n)}})}))).then((function(e){return Promise.all(e.map((function(e){return e.json()}))).then((function(e){return e.map((function(e){return{id:e.id,thumbnailLink:e.thumbnailLink,embedLink:e.embedLink,webViewLink:e.webViewLink}}))}))})).catch()},a=function(e,n){return fetch("https://www.googleapis.com/drive/v3/files/".concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(n)}}).then((function(){return!0})).catch((function(){return!1}))},i=function(e,n){var t=[];return["video","images","paymentImage"].forEach((function(r){var i=e[r];i&&(Array.isArray(i)?i.forEach((function(e){return t.push(a(e.id,n))})):Object.keys(i).length&&null!==i&&void 0!==i&&i.id&&t.push(a(null===i||void 0===i?void 0:i.id,n)))})),t}},9522:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(3433),a=t(4165),i=t(1413),o=t(5861),c=t(9439),l=t(4457),s=t(9548),u=t(7313),d=t(1868),p=t.n(d),m=t(5627),h=t(4511),f=t(7864),x=t(8512),v=t(5905),g=t(809),b=t(623),w=t(8298),j=t(8941),N=t(7629),k=t(200),y=t(5857),Z=t(887),F=t(5123),S=t(3278),M=t(5993),E=t(699),T=t(3027),A=function(e){var n=e.province,t=e.ward,r=e.district,a=E.find((function(e){return parseInt(e.id,10)===n})),o=T.find((function(e){return parseInt(e.id,10)===r})),c=M.find((function(e){return parseInt(e.id,10)===t})),l="".concat(o.typeName," ").concat(o.name.startsWith("Qu\u1eadn")?o.name.substring(5):o.name);return(0,i.Z)((0,i.Z)({},e),{},{provinceName:"".concat(a.typeName," ").concat(null===a||void 0===a?void 0:a.name),districtName:l,wardName:null===c||void 0===c?void 0:c.name})},L=t(4885),V=t(6417),C=j.Z.google,I=C.apiKey,q=C.clientId,P=j.Z.common,D=function(e){var n=e.action,t=e.houseType,r=e.width,a=e.length,i=e.address,o=r*a;o=Number.isInteger(o)?o:o.toFixed(2);var c=A(i),l=c.address,u=c.wardName,d=c.districtName,p=c.provinceName;return["".concat((0,s.t)(k.m3.find((function(e){return e.value===n})).name)," ").concat((0,s.t)(k.Wm.find((function(e){return e.value===t})).name)," ").concat(o,"m\xb2 (").concat(r," x ").concat(a,"m)"),"".concat(l,", ").concat(u,", ").concat(d,", ").concat(p)]};function _(){var e=(0,h.$)().t,n=(0,m.cI)(),t=n.control,s=n.formState.errors,d=n.register,M=n.handleSubmit,E=n.watch,T=p()(),C=(0,c.Z)(T,1)[0],_=(0,y.Eu)(),O=_.token,K=_.getAccessToken,H=(0,u.useState)(!1),z=(0,c.Z)(H,2),U=z[0],B=z[1],Q=(0,u.useState)([]),W=(0,c.Z)(Q,2),G=W[0],X=W[1],J=(0,u.useState)(null),R=(0,c.Z)(J,2),$=R[0],Y=R[1],ee=(0,u.useState)(null),ne=(0,c.Z)(ee,2),te=ne[0],re=ne[1],ae=E("action"),ie=(0,u.useMemo)((function(){return ae===Z.Hx.trade?"billion":"million"}),[ae]),oe=ae===Z.Hx.trade?"billion":"million",ce=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t,r,o,s,u,d,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.prev=1,t=D(n),r=(0,c.Z)(t,2),o=r[0],s=r[1],u=(0,L.lV)(o+"-"+s)+"-"+Date.now().toString(),d=oe?1e3*n.price:n.price,p=[(0,l.ET)((0,l.hJ)(F.db,"properties"),(0,i.Z)((0,i.Z)((0,i.Z)({},n),A(n.address)),{},{price:d,slug:u,published:!1,hideVideo:!1,images:G,video:$,paymentImage:te,subject:o,createdAt:l.EK.now().seconds})),fetch(P.baseApiUrl+"/news-submission",{headers:{"Content-Type":"application/json",secret:P.secret},method:"POST",body:JSON.stringify({name:o,link:window.location.origin+"/chothue?slug=".concat(u)})})],e.next=8,x.Am.promise(Promise.all(p),{pending:"\u0110ang \u0111\u0103ng tin",success:"\u0110\u0103ng tin BDS th\xe0nh c\xf4ng",error:N.v});case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:return e.prev=12,"undefined"!==typeof window&&"location"in window&&window.location.reload(),B(!1),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[1,10,12,16]])})));return function(n){return e.apply(this,arguments)}}(),le=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=8;break}if(t=window.sessionStorage.getItem(j.Z.common.accessTokenKey),!(0,y.pw)(t)){e.next=5;break}return e.next=5,K();case 5:C({clientId:q,developerKey:I,token:O,showUploadView:!0,showUploadFolders:!0,supportDrives:!0,setParentFolder:P.isDev?void 0:"1ffWn9rpAhl7KOkaEzIcFhuT8k_GvHbfS",multiselect:"images"===n,disableDefaultView:!0,callbackFunction:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var r,i,o,c,l,s,u,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("picked"!==t.action||!t){e.next=19;break}return e.next=5,(0,v.iy)();case 5:return r=t.docs,e.next=8,(0,S.Qm)(r,O);case 8:i=e.sent,e.t0=n,e.next="video"===e.t0?12:"images"===e.t0?14:"paymentImage"===e.t0?16:18;break;case 12:return null!==i&&void 0!==i&&i.length&&(o=i[0],c=o.id,l=o.embedLink,Y({id:c,value:l})),e.abrupt("break",19);case 14:return X(i.map((function(e){var n=e.embedLink;return{id:e.id,value:n}}))),e.abrupt("break",19);case 16:return null!==i&&void 0!==i&&i.length&&(s=i[0],u=s.id,d=s.embedLink,re({id:u,value:d})),e.abrupt("break",19);case 18:return e.abrupt("break",19);case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}),e.next=9;break;case 8:x.Am.error(N.v);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),se=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var t,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,r.Z)(G),i=t.findIndex((function(e){return e.id===n})),o=x.Am.promise((0,S.Fp)(n,O),{pending:"\u0110ang x\xf3a \u1ea3nh",success:"X\xf3a \u1ea3nh th\xe0nh c\xf4ng",error:N.v}),i>-1&&o&&(t.splice(i,1),X(t));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ue=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Am.promise((0,S.Fp)($.id,O),{pending:"\u0110ang x\xf3a video",success:"X\xf3a video th\xe0nh c\xf4ng",error:N.v});case 2:e.sent&&Y(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.Am.promise((0,S.Fp)(te.id,O),{pending:"\u0110ang x\xf3a \u1ea3nh",success:"X\xf3a \u1ea3nh th\xe0nh c\xf4ng",error:N.v})&&re(null);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){document.title="\u0110\u0103ng tin"}),[]),(0,V.jsxs)("div",{className:"my-5 mx-2 md:mx-10 lg:mx-20 xl:mx-32 flex gap-5 md:gap-10 kg:gap-20 xl:gap-32 text-xs sm:text-sm md:text-base",children:[(0,V.jsx)("div",{className:"sticky top-[100px] w-full h-[80vh] mx-auto hidden lg:block",style:{background:"url(".concat(g.E0,") center no-repeat"),backgroundSize:"cover"},children:(0,V.jsx)("div",{className:"absolute bottom-0 left-0 w-full text-white text-xl p-[20px] bg-black bg-opacity-50",children:(0,V.jsx)("p",{className:"text-center",children:"\u0110\u0103ng tin b\u1ea5t \u0111\u1ed9ng s\u1ea3n"})})}),(0,V.jsxs)("form",{className:"grid grid-cols-4 w-full place-content-start gap-5",children:[(0,V.jsx)("div",{className:"col-span-4 xl:col-span-3",children:(0,V.jsx)("h1",{className:"text-base md:text-xl xl:text-2xl font-medium",children:"\u0110i\u1ec1n th\xf4ng tin b\u1ea5t \u0111\u1ed9ng s\u1ea3n"})}),(0,V.jsx)(b.cw,{className:"col-span-4 xl:col-span-1",htmlFor:"subject",label:"B\xe1n (Cho thu\xea)",error:s.subject,children:(0,V.jsx)("select",(0,i.Z)((0,i.Z)({},d("action",{required:!0,valueAsNumber:!0})),{},{className:"input",children:k.m3.map((function(n){return(0,V.jsx)("option",{value:n.value,children:e(n.name)},n.value)}))}))}),(0,V.jsx)(b.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"type",label:"Lo\u1ea1i h\xecnh",error:s.houseType,children:(0,V.jsx)("select",(0,i.Z)((0,i.Z)({},d("houseType",{required:!0,valueAsNumber:!0})),{},{className:"input",children:k.Wm.map((function(n){return(0,V.jsx)("option",{value:n.value,children:e(n.name)},n.value)}))}))}),(0,V.jsx)(b.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"width",label:"Chi\u1ec1u ngang (m)",error:s.width,children:(0,V.jsx)("input",(0,i.Z)((0,i.Z)({},d("width",{valueAsNumber:!0,required:!0,min:0,max:1e4})),{},{className:"input",placeholder:"Nh\u1eadp chi\u1ec1u ngang",type:"number",step:"0.01",min:0,max:1e4}))}),(0,V.jsx)(b.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"length",label:"Chi\u1ec1u d\xe0i (m)",error:s.length,children:(0,V.jsx)("input",(0,i.Z)((0,i.Z)({},d("length",{valueAsNumber:!0,required:!0,min:0,max:1e4})),{},{className:"input",placeholder:"Nh\u1eadp chi\u1ec1u d\xe0i",type:"number",step:"0.01",min:0,max:1e4}))}),(0,V.jsx)(b.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"price",label:"Gi\xe1 (".concat(e(ie)," \u0111\u1ed3ng)"),error:s.price,children:(0,V.jsx)("input",(0,i.Z)((0,i.Z)({},d("price",{valueAsNumber:!0,required:!0,min:0,max:1e4})),{},{className:"input",placeholder:"VD: 0.35",type:"number",step:"0.01",min:0,max:1e4}))}),(0,V.jsx)(b.cw,{className:"xl:col-span-2 col-span-4",htmlFor:"structure",label:"K\u1ebft c\u1ea5u",error:s.structure,children:(0,V.jsx)("input",(0,i.Z)((0,i.Z)({},d("structure",{required:!0})),{},{className:"input",placeholder:"VD: 1 tr\u1ec7t 1 l\u1eedng 1 l\u1ea7u",type:"text"}))}),(0,V.jsx)(b.cw,{className:"xl:col-span-1 col-span-4",htmlFor:"architecture",label:"Ki\u1ebfn tr\xfac",error:s.architecture,children:(0,V.jsx)("input",(0,i.Z)((0,i.Z)({},d("architecture",{required:!0})),{},{className:"input",placeholder:"VD: 2PN 1WC",type:"text"}))}),(0,V.jsx)(b.cw,{className:"xl:col-span-1 col-span-4",htmlFor:"direction",label:"H\u01b0\u1edbng",error:s.direction,children:(0,V.jsx)("input",(0,i.Z)((0,i.Z)({},d("direction",{required:!0})),{},{className:"input",placeholder:"Nh\u1eadp h\u01b0\u1edbng",type:"text"}))}),(0,V.jsx)(b.cw,{className:"col-span-4",htmlFor:"address",label:"\u0110\u1ecba ch\u1ec9",children:(0,V.jsx)(m.Qr,{control:t,name:"address",defaultValue:w.W,rules:{required:!0,validate:function(e){var n,t=Object.entries(e),r="ch\u1ecdn";return t.forEach((function(e){var t=(0,c.Z)(e,2),a=t[0];if(t[1]);else switch(a){case"ward":return void(n="ph\u01b0\u1eddng / x\xe3");case"district":return void(n="qu\u1eadn / huy\u1ec7n");case"province":return void(n="t\u1ec9nh / th\xe0nh");case"address":return n="\u0111\u1ecba ch\u1ec9",void(r="nh\u1eadp")}})),!n||"Vui l\xf2ng ".concat(r," ").concat(n)}},render:function(e){var n=e.field,t=n.value,r=n.onChange,a=e.fieldState.error;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(b.i$,{value:t,onChange:r}),(0,V.jsx)(b.Xq,{label:"\u0110\u1ecba ch\u1ec9",error:a})]})}})}),(0,V.jsx)(b.cw,{className:"col-span-2",htmlFor:"contactName",label:"T\xean li\xean h\u1ec7",error:s.contactName,children:(0,V.jsx)("input",(0,i.Z)((0,i.Z)({},d("contactName",{required:!0})),{},{className:"input",placeholder:"Nguy\u1ec5n V\u0103n A",type:"text"}))}),(0,V.jsx)(b.cw,{className:"col-span-2",htmlFor:"contactNumber",label:"S\u0110T li\xean h\u1ec7",error:s.contactNumber,children:(0,V.jsx)("input",(0,i.Z)((0,i.Z)({},d("contactNumber",{required:!0,pattern:/^0/})),{},{className:"input",maxLength:10,placeholder:"0911xxxxxx",onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()},type:"text"}))}),(0,V.jsx)(b.cw,{className:"col-span-4",htmlFor:"description",label:"Th\xf4ng tin",error:s.description,children:(0,V.jsx)("textarea",(0,i.Z)((0,i.Z)({},d("description",{required:!0,maxLength:255})),{},{className:"input resize-none",placeholder:"VD: G\u1ea7n ch\u1ee3, tr\u01b0\u1eddng h\u1ecdc...",rows:5,maxLength:255}))}),(0,V.jsx)(b.cw,{className:"col-span-4",htmlFor:"addressLink",label:"Link google map",children:(0,V.jsx)("input",(0,i.Z)((0,i.Z)({},d("addressLink")),{},{className:"input",placeholder:"Nh\u1eadp link google map...",type:"text"}))}),(0,V.jsx)("div",{className:"col-span-4",children:(0,V.jsx)("label",{htmlFor:"",children:(0,V.jsx)("div",{className:"relative aspect-vid",children:(0,V.jsx)("iframe",{className:"absolute top-0 left-0 w-full h-full",src:"https://www.youtube.com/embed/IJPb7lo6CK4?autoplay=1",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}),(0,V.jsxs)("div",{className:"col-span-4",children:[(0,V.jsx)("h1",{className:"text-base md:text-xl xl:text-2xl font-medium mb-5",children:"Vui l\xf2ng ti\u1ebfn h\xe0nh thanh to\xe1n \u0111\u1ec3 \u0111\u0103ng tin"}),(0,V.jsx)("p",{children:"H\u01b0\u1edbng d\u1eabn thanh to\xe1n"}),(0,V.jsx)("p",{children:"Qu\xe9t m\xe3 QR code b\u1eb1ng App b\u1ea5t k\u1ef3 (ho\u1eb7c)"}),(0,V.jsx)("p",{children:"Chuy\u1ec3n ti\u1ec1n qua Vietcombank"}),(0,V.jsx)("p",{children:"S\u1ed1 ti\u1ec1n 20.000\u0111"}),(0,V.jsx)("p",{children:"Ng\u01b0\u1eddi nh\u1eadn STK 0531002582311"}),(0,V.jsxs)("p",{children:["Sau \u0111\xf3 t\u1ea3i \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n \u0111\xe3 thanh to\xe1n l\xean v\xe0o \xf4 b\xean d\u01b0\u1edbi r\u1ed3i b\u1ea5m n\xfat ",(0,V.jsx)("b",{children:"Ho\xe0n t\u1ea5t"})]}),(0,V.jsx)("img",{className:"w-[175px] md:w-[259px] h-[175px] md:h-[259px] mx-auto my-5 shadow",src:g.qr,alt:""}),(0,V.jsx)("button",{type:"button",className:"btn w-full md:w-[259px] mx-auto",onClick:function(){le("paymentImage")},children:"T\u1ea3i l\xean \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n"}),!!te&&(0,V.jsxs)("div",{className:"relative mx-auto w-[120px] my-2",children:[(0,V.jsx)("img",{title:"Payment image",className:"w-full object-cover overflow-hidden aspect-square border",src:"https://lh3.googleusercontent.com/d/".concat(te.id),alt:""}),(0,V.jsx)(f.oHP,{className:"absolute bg-white rounded-full shadow md:text-base lg:text-lg -top-1.5 -right-1.5 cursor-pointer z-10",onClick:de})]})]}),!!te&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(b.cw,{className:"col-span-4",htmlFor:"video",label:"Link video",children:[(0,V.jsx)("small",{children:"Maximum file size limit is 300Mb.(Video Length 12-13 Minutes)"}),(0,V.jsx)("button",{type:"button",className:"btn w-full md:w-[259px] mx-auto",onClick:function(){le("video")},children:"T\u1ea3i l\xean video"})]}),(0,V.jsx)("div",{className:"col-span-4 flex flex-wrap gap-2",children:!!$&&(0,V.jsxs)("div",{className:"relative mx-auto",children:[(0,V.jsx)("object",{className:"w-full overflow-hidden aspect-video border",title:"video",data:$.value}),(0,V.jsx)(f.oHP,{className:"absolute bg-white rounded-full shadow md:text-base lg:text-lg -top-1.5 -right-1.5 cursor-pointer z-10",onClick:ue})]})}),(0,V.jsx)(b.cw,{className:"col-span-4",htmlFor:"images",label:"H\xecnh \u1ea3nh",children:(0,V.jsx)("button",{type:"button",className:"btn w-full md:w-[259px] mx-auto",onClick:function(){le("images")},children:"T\u1ea3i l\xean h\xecnh \u1ea3nh"})}),(0,V.jsx)("div",{className:"col-span-4 flex flex-wrap gap-2",children:G.map((function(e){return(0,V.jsxs)("div",{className:"relative",children:[(0,V.jsx)("img",{className:"w-[60px] md:w-[80px] lg:w-[96px] overflow-hidden object-cover aspect-square border",title:e.id,src:"https://lh3.googleusercontent.com/d/".concat(e.id),alt:""}),(0,V.jsx)(f.oHP,{className:"absolute bg-white rounded-full shadow md:text-base lg:text-lg -top-1.5 -right-1.5 cursor-pointer z-10",onClick:function(){return se(e.id)}})]},e.id)}))})]}),(0,V.jsx)("div",{className:"col-span-4 ",children:(0,V.jsxs)("button",{type:"button",onClick:function(){M((function(e){te?ce(e):x.Am.warn("Vui l\xf2ng t\u1ea3i l\xean \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n \u0111\u1ec3 \u0111\u0103ng b\xe0i")}))()},className:"btn w-full md:w-[259px] mx-auto mt-5",children:[U&&(0,V.jsx)(f.Z7b,{className:"animate-spin"}),"Ho\xe0n t\u1ea5t"]})})]})]})}},1868:function(e,n,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},r.apply(this,arguments)},a=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var r,a=0,i=n.length;a<i;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var o=t(7313),c=t(8239),l=i(t(6847));n.default=function(){var e,n=["https://www.googleapis.com/auth/drive.readonly"],t=(0,l.default)("https://apis.google.com/js/api.js"),i=t[0],s=t[1],u=(0,l.default)("https://accounts.google.com/gsi/client"),d=u[0],p=u[1],m=(0,o.useState)(!1),h=m[0],f=m[1],x=(0,o.useState)(!1),v=x[0],g=x[1],b=(0,o.useState)(!1),w=(b[0],b[1],(0,o.useState)(c.defaultConfiguration)),j=w[0],N=w[1],k=(0,o.useState)(),y=k[0],Z=k[1];(0,o.useEffect)((function(){!i||s||!d||p||h||F()}),[i,s,d,p,h]),(0,o.useEffect)((function(){v&&j.token&&i&&!s&&d&&!p&&h&&(M(j),g(!1))}),[v,j.token,i,s,d,p,h]);var F=function(){window.gapi.load("auth"),window.gapi.load("picker",{callback:S})},S=function(){f(!0)},M=function(n){var t=n.token,r=n.appId,a=void 0===r?"":r,i=n.supportDrives,o=void 0!==i&&i,c=n.developerKey,l=n.viewId,s=void 0===l?"DOCS":l,u=n.disabled,d=n.multiselect,p=n.showUploadView,m=void 0!==p&&p,h=n.showUploadFolders,f=n.setParentFolder,x=void 0===f?"":f,v=n.viewMimeTypes,g=n.customViews,b=n.locale,w=void 0===b?"en":b,j=n.setIncludeFolders,N=n.setSelectFolderEnabled,k=n.disableDefaultView,y=void 0!==k&&k,Z=n.callbackFunction;if(u)return!1;var F=new google.picker.DocsView(google.picker.ViewId[s]);v&&F.setMimeTypes(v),j&&F.setSelectFolderEnabled(!0),N&&F.setSelectFolderEnabled(!0);var S=new google.picker.DocsUploadView;return v&&S.setMimeTypes(v),h&&S.setIncludeFolders(!0),x&&S.setParent(x),e=(new google.picker.PickerBuilder).setAppId(a).setOAuthToken(t).setDeveloperKey(c).setLocale(w).setCallback(Z),y||e.addView(F),g&&g.map((function(n){return e.addView(n)})),d&&e.enableFeature(google.picker.Feature.MULTISELECT_ENABLED),m&&e.addView(S),o&&e.enableFeature(google.picker.Feature.SUPPORT_DRIVES),e.build().setVisible(!0),!0};return[function(e){(N(e),e.token)||google.accounts.oauth2.initTokenClient({client_id:e.clientId,scope:(e.customScopes?a(a([],n,!0),e.customScopes,!0):n).join(" "),callback:function(n){Z(n),M(r(r({},e),{token:n.access_token}))}}).requestAccessToken();if(e.token&&i&&!s&&h)return M(e)},y]}},8239:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.defaultConfiguration=void 0,n.defaultConfiguration={clientId:"",developerKey:"",viewId:"DOCS",callbackFunction:function(){return null}}},6847:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=t(7313),a={queue:{},injectorMap:{},scriptMap:{}};n.default=function(e){var n=(0,r.useState)({loaded:!1,error:!1}),t=n[0],i=n[1];return(0,r.useEffect)((function(){var n,t,r,o,c;if((null===(n=a.injectorMap)||void 0===n?void 0:n[e])||(a.injectorMap[e]="init"),"loaded"!==a.injectorMap[e]){if("error"!==a.injectorMap[e]){var l=function(n){var t,r,i,o;n&&console.log("error loading the script"),null===(r=null===(t=a.queue)||void 0===t?void 0:t[e])||void 0===r||r.forEach((function(e){return e(n)})),n&&a.scriptMap[e]?(null===(o=null===(i=a.scriptMap)||void 0===i?void 0:i[e])||void 0===o||o.remove(),a.injectorMap[e]="error"):a.injectorMap[e]="loaded",delete a.scriptMap[e]},s=function(e){i({loaded:!0,error:e})};return(null===(t=a.scriptMap)||void 0===t?void 0:t[e])||(a.scriptMap[e]=document.createElement("script"),a.scriptMap[e]&&(a.scriptMap[e].src=e,a.scriptMap[e].async=!0,document.body.append(a.scriptMap[e]),a.scriptMap[e].addEventListener("load",(function(){return l(!1)})),a.scriptMap[e].addEventListener("error",(function(){return l(!0)})),a.injectorMap[e]="loading")),(null===(r=a.queue)||void 0===r?void 0:r[e])?null===(c=null===(o=a.queue)||void 0===o?void 0:o[e])||void 0===c||c.push(s):a.queue[e]=[s],function(){var n,t;a.scriptMap[e]&&(null===(n=a.scriptMap[e])||void 0===n||n.removeEventListener("load",(function(){return l(!0)})),null===(t=a.scriptMap[e])||void 0===t||t.removeEventListener("error",(function(){return l(!0)})))}}i({loaded:!0,error:!0})}else i({loaded:!0,error:!1})}),[e]),[t.loaded,t.error]}}}]);