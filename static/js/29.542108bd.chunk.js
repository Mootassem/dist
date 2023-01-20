(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[29],{1312:function(e,t,n){"use strict";n.r(t);var r,a=n(817),c=n(818),o=(n(0),n(4)),l=n(154),i=n(640),s=n(35),p=n(120),u=n(121).a.div(r||(r=Object(p.a)(["\n  padding: 16px;\n  margin-bottom: 16px;\n  border: 1px solid rgb(224, 224, 224);\n  border-radius: 5px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .title {\n    font-size: 24px;\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 24px;\n    flex-grow: 0;\n  }\n\n  .pricing {\n    font-size: 36px;\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 16px;\n    flex-grow: 0;\n  }\n\n  .pricingPeriod {\n    font-size: 16px;\n    font-weight: normal;\n  }\n\n  .description {\n    flex-grow: 1;\n    margin-bottom: 16px;\n    text-align: center;\n  }\n\n  .notPlanUser {\n    text-align: left;\n    font-size: 13px;\n  }\n\n  .cancelAtPeriodEnd {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: left;\n    font-size: 13px;\n    margin-left: -17px;\n    margin-right: -17px;\n    background-color: #de3618;\n    color: white;\n    padding-left: 16px;\n    border-bottom: 1px solid rgb(224, 224, 224);\n    border-top: 1px solid rgb(224, 224, 224);\n  }\n\n  .somethingWrong {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: left;\n    font-size: 13px;\n    margin-left: -17px;\n    margin-right: -17px;\n    background-color: #ed8936;\n    color: white;\n    padding-left: 16px;\n    border-bottom: 1px solid rgb(224, 224, 224);\n    border-top: 1px solid rgb(224, 224, 224);\n  }\n"]))),d=n(33),f=n(150),b=n(5);function m(e){var t=Object(s.e)(d.a.selectCurrentTenant).plan===l.a.values.free?"current":null;return Object(b.jsxs)(u,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"title",children:Object(o.c)("plan.".concat(l.a.values.free,".label"))}),Object(b.jsxs)("div",{className:"pricing",children:[Object(o.c)("plan.free.price"),Object(b.jsx)("span",{className:"pricingPeriod",children:Object(o.c)("plan.pricingPeriod")})]})]}),Object(b.jsx)("div",{children:"current"===t&&Object(b.jsx)(f.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!0,children:Object(o.c)("plan.current")})})]})}var j=n(6),g=n(56),x=n(124),O=function(e){return e.plan},h=Object(j.a)([O],(function(e){return Boolean(e.loading)})),v={selectPermissionToEdit:Object(j.a)([d.a.selectCurrentTenant,d.a.selectCurrentUser],(function(e,t){return new g.a(e,t).match(x.a.values.planEdit)})),selectIsPlanUser:Object(j.a)([d.a.selectCurrentTenant,d.a.selectCurrentUser],(function(e,t){return e.plan===l.a.values.free||"cancel_at_period_end"===e.planStatus||e.planUserId===t.id})),selectLoading:h,selectRaw:O},y=n(119),w=n(152);function P(e){var t=Object(s.d)(),n=e.plan,r=Object(s.e)(d.a.selectCurrentTenant),a=Object(s.e)(v.selectLoading),c=Object(s.e)(v.selectPermissionToEdit),i=Object(s.e)(v.selectIsPlanUser),p=r.plan===n,m=p?"manage":r.plan===l.a.values.free?"payment":"none";return Object(b.jsxs)(u,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"title",children:Object(o.c)("plan.".concat(n,".label"))}),Object(b.jsxs)("div",{className:"pricing",children:[Object(o.c)("plan.".concat(n,".price")),Object(b.jsx)("span",{className:"pricingPeriod",children:Object(o.c)("plan.pricingPeriod")})]})]}),Object(b.jsxs)("div",{children:[p&&"cancel_at_period_end"===r.planStatus&&Object(b.jsx)("p",{className:"cancelAtPeriodEnd",children:Object(o.c)("plan.cancelAtPeriodEnd")}),p&&"error"===r.planStatus&&Object(b.jsx)("p",{className:"somethingWrong",children:Object(o.c)("plan.somethingWrong")}),"payment"===m&&Object(b.jsx)(f.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!c||!i||a,onClick:function(){t(y.a.doCheckout(n))},children:Object(o.c)("plan.subscribe")}),"manage"===m&&i&&Object(b.jsx)(f.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!c||a,onClick:function(){t(y.a.doPortal())},children:Object(o.c)("plan.manage")}),"manage"===m&&!i&&Object(b.jsx)(w.a,{title:Object(o.c)("plan.notPlanUser"),children:Object(b.jsx)(f.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!0,children:Object(o.c)("plan.manage")})})]})]})}var E=n(642),C=n(641);t.default=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("plan.menu")]]}),Object(b.jsxs)(i.a,{children:[Object(b.jsx)(C.a,{children:Object(o.c)("plan.title")}),Object(b.jsxs)(a.a,{gutter:[24,24],children:[Object(b.jsx)(c.a,{xs:24,md:12,lg:8,children:Object(b.jsx)(m,{})}),Object(b.jsx)(c.a,{xs:24,md:12,lg:8,children:Object(b.jsx)(P,{plan:l.a.values.growth})}),Object(b.jsx)(c.a,{xs:24,md:12,lg:8,children:Object(b.jsx)(P,{plan:l.a.values.enterprise})})]})]})]})}},636:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(644))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},640:function(e,t,n){"use strict";var r,a=n(120),c=n(121).a.div(r||(r=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=c},641:function(e,t,n){"use strict";var r,a=n(120),c=n(121).a.h1(r||(r=Object(a.a)(["\n  margin-bottom: 36px;\n"])));t.a=c},642:function(e,t,n){"use strict";var r=n(688),a=(n(0),n(76)),c=n(5);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(r.a,{children:e.items.map((function(e){return Object(c.jsx)(r.a.Item,{children:t(e)?Object(c.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},644:function(e,t,n){"use strict";var r=n(43),a=n(28);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(48)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=c?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(0)),l=r(n(645)),i=r(n(55));function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var p=function(e,t){return o.createElement(i.default,(0,c.default)((0,c.default)({},e),{},{ref:t,icon:l.default}))};p.displayName="DownOutlined";var u=o.forwardRef(p);t.default=u},645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},688:function(e,t,n){"use strict";var r=n(9),a=n.n(r),c=n(16),o=n.n(c),l=n(218),i=n.n(l),s=n(0),p=n(12),u=n.n(p),d=n(83),f=n(636),b=n.n(f),m=n(222),j=n(100),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},x=function(e){var t,n,r=e.prefixCls,c=e.separator,o=void 0===c?"/":c,l=e.children,i=e.overlay,p=e.dropdownProps,u=g(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,s.useContext(j.b).getPrefixCls)("breadcrumb",r);return t="href"in u?s.createElement("a",a()({className:"".concat(d,"-link")},u),l):s.createElement("span",a()({className:"".concat(d,"-link")},u),l),n=t,t=i?s.createElement(m.a,a()({overlay:i,placement:"bottomCenter"},p),s.createElement("span",{className:"".concat(d,"-overlay-link")},n,s.createElement(b.a,null))):n,l?s.createElement("span",null,t,o&&""!==o&&s.createElement("span",{className:"".concat(d,"-separator")},o)):null};x.__ANT_BREADCRUMB_ITEM=!0;var O=x,h=function(e){var t=e.children,n=(0,s.useContext(j.b).getPrefixCls)("breadcrumb");return s.createElement("span",{className:"".concat(n,"-separator")},t||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var v=h,y=n(601),w=n(71),P=n(39),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function C(e,t,n,r){var a=n.indexOf(e)===n.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?s.createElement("span",null,c):s.createElement("a",{href:"#/".concat(r.join("/"))},c)}var N=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},_=function(e){var t,n=e.prefixCls,r=e.separator,c=void 0===r?"/":r,l=e.style,p=e.className,f=e.routes,b=e.children,m=e.itemRender,g=void 0===m?C:m,x=e.params,h=void 0===x?{}:x,v=E(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),_=s.useContext(j.b),k=_.getPrefixCls,R=_.direction,A=k("breadcrumb",n);if(f&&f.length>0){var T=[];t=f.map((function(e){var t,n=N(e.path,h);return n&&T.push(n),e.children&&e.children.length&&(t=s.createElement(y.a,null,e.children.map((function(e){return s.createElement(y.a.Item,{key:e.path||e.breadcrumbName},g(e,h,f,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=i()(e),a=N(t,n);return a&&r.push(a),r}(T,e.path,h)))})))),s.createElement(O,{overlay:t,separator:c,key:n||e.breadcrumbName},g(e,h,f,T))}))}else b&&(t=Object(d.a)(b).map((function(e,t){return e?(Object(w.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(P.a)(e,{separator:c,key:t})):e})));var S=u()(A,o()({},"".concat(A,"-rtl"),"rtl"===R),p);return s.createElement("div",a()({className:S,style:l},v),t)};_.Item=O,_.Separator=v;var k=_;t.a=k},790:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({});t.a=a},817:function(e,t,n){"use strict";var r=n(906);t.a=r.a},818:function(e,t,n){"use strict";var r=n(833);t.a=r.a},833:function(e,t,n){"use strict";var r=n(16),a=n.n(r),c=n(9),o=n.n(c),l=n(28),i=n.n(l),s=n(0),p=n(12),u=n.n(p),d=n(790),f=n(100),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var m=["xs","sm","md","lg","xl","xxl"],j=s.forwardRef((function(e,t){var n,r=s.useContext(f.b),c=r.getPrefixCls,l=r.direction,p=s.useContext(d.a),j=p.gutter,g=p.wrap,x=e.prefixCls,O=e.span,h=e.order,v=e.offset,y=e.push,w=e.pull,P=e.className,E=e.children,C=e.flex,N=e.style,_=b(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),k=c("col",x),R={};m.forEach((function(t){var n,r={},c=e[t];"number"===typeof c?r.span=c:"object"===i()(c)&&(r=c||{}),delete _[t],R=o()(o()({},R),(n={},a()(n,"".concat(k,"-").concat(t,"-").concat(r.span),void 0!==r.span),a()(n,"".concat(k,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),a()(n,"".concat(k,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),a()(n,"".concat(k,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),a()(n,"".concat(k,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),a()(n,"".concat(k,"-rtl"),"rtl"===l),n))}));var A=u()(k,(n={},a()(n,"".concat(k,"-").concat(O),void 0!==O),a()(n,"".concat(k,"-order-").concat(h),h),a()(n,"".concat(k,"-offset-").concat(v),v),a()(n,"".concat(k,"-push-").concat(y),y),a()(n,"".concat(k,"-pull-").concat(w),w),n),P,R),T=o()({},N);return j&&(T=o()(o()(o()({},j[0]>0?{paddingLeft:j[0]/2,paddingRight:j[0]/2}:{}),j[1]>0?{paddingTop:j[1]/2,paddingBottom:j[1]/2}:{}),T)),C&&(T.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(C),"auto"!==C||!1!==g||T.minWidth||(T.minWidth=0)),s.createElement("div",o()({},_,{style:T,className:A,ref:t}),E)}));j.displayName="Col",t.a=j},906:function(e,t,n){"use strict";var r=n(9),a=n.n(r),c=n(16),o=n.n(c),l=n(28),i=n.n(l),s=n(31),p=n.n(s),u=n(0),d=n(12),f=n.n(d),b=n(100),m=n(790),j=n(91),g=n(145),x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},O=(Object(j.a)("top","middle","bottom","stretch"),Object(j.a)("start","end","center","space-around","space-between"),u.forwardRef((function(e,t){var n,r=e.prefixCls,c=e.justify,l=e.align,s=e.className,d=e.style,j=e.children,O=e.gutter,h=void 0===O?0:O,v=e.wrap,y=x(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=u.useContext(b.b),P=w.getPrefixCls,E=w.direction,C=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),N=p()(C,2),_=N[0],k=N[1],R=u.useRef(h);u.useEffect((function(){var e=g.a.subscribe((function(e){var t=R.current||0;(!Array.isArray(t)&&"object"===i()(t)||Array.isArray(t)&&("object"===i()(t[0])||"object"===i()(t[1])))&&k(e)}));return function(){return g.a.unsubscribe(e)}}),[]);var A=P("row",r),T=function(){var e=[0,0];return(Array.isArray(h)?h:[h,0]).forEach((function(t,n){if("object"===i()(t))for(var r=0;r<g.b.length;r++){var a=g.b[r];if(_[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t||0})),e}(),S=f()(A,(n={},o()(n,"".concat(A,"-no-wrap"),!1===v),o()(n,"".concat(A,"-").concat(c),c),o()(n,"".concat(A,"-").concat(l),l),o()(n,"".concat(A,"-rtl"),"rtl"===E),n),s),B=a()(a()(a()({},T[0]>0?{marginLeft:T[0]/-2,marginRight:T[0]/-2}:{}),T[1]>0?{marginTop:T[1]/-2,marginBottom:T[1]/2}:{}),d);return u.createElement(m.a.Provider,{value:{gutter:T,wrap:v}},u.createElement("div",a()({},y,{className:S,style:B,ref:t}),j))})));O.displayName="Row",t.a=O}}]);