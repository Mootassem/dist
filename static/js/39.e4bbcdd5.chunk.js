(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[39],{1299:function(n,t,e){"use strict";e.r(t);var i=e(2),c=e(3),a=e(4),o=e(81),r=e(19),s=e(738),l=e.n(s),h=e(0),p=e(35),d=e(675),u=e(677),b=e(676),j=e(690),g=e(246),x=e(23),f=e(30),m=e(150),O=e(33),v=e(5);t.default=function(){var n=Object(p.d)(),t=Object(f.g)(),e=Object(p.e)(O.a.selectBackgroundImageUrl),s=Object(p.e)(O.a.selectLogoUrl),y=Object(p.e)(g.a.selectLoading),w=Object(p.e)(g.a.selectWarningMessage),k=l.a.parse(t.search).token;Object(h.useEffect)((function(){n(o.a.doAcceptFromAuth(k))}),[n,k]);var z=function(){var t=Object(c.a)(Object(i.a)().mark((function t(){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(x.a.doSignout());case 2:Object(r.b)().push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(v.jsx)(u.a,{style:{backgroundImage:"url(".concat(e||"/images/invitation.jpg",")")},children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)(b.a,{children:s?Object(v.jsx)("img",{src:s,width:"240px",alt:Object(a.c)("app.title")}):Object(v.jsx)("h1",{children:Object(a.c)("app.title")})}),y&&Object(v.jsx)(j.a,{}),Boolean(w)&&Object(v.jsx)("h3",{style:{textAlign:"center"},children:w}),Boolean(w)&&Object(v.jsx)(m.a,{style:{marginTop:"24px"},onClick:function(){n(o.a.doAcceptFromAuth(k,!0))},type:"primary",size:"large",block:!0,htmlType:"button",loading:y,children:Object(a.c)("tenant.invitation.acceptWrongEmail")}),!y&&Object(v.jsx)(m.a,{style:{marginTop:"24px"},htmlType:"button",block:!0,size:"large",onClick:z,children:Object(a.c)("auth.signout")})]})})}},675:function(n,t,e){"use strict";var i,c=e(120),a=e(121).a.div(i||(i=Object(c.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])));t.a=a},676:function(n,t,e){"use strict";var i,c=e(120),a=e(121).a.div(i||(i=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"])));t.a=a},677:function(n,t,e){"use strict";var i,c=e(120),a=e(121).a.div(i||(i=Object(c.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"])));t.a=a},690:function(n,t,e){"use strict";var i=e(683),c=(e(0),e(5));t.a=function(n){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(i.a,{})})}}}]);