(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[30],{1313:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),c=n(30),o=n(4),u=n(183),s=n(6),l=function(e){return e.planning.view},d=Object(s.a)([l],(function(e){return e.record})),b={selectLoading:Object(s.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:l},m=n(1),j=n(2),p=n(3),f=n(17),O=n(690),x=n(817),h=n(818),g=n(1305),y=(n(1264),n(1265),n(913)),v=n(1284),w=n(57),q=n(37),T=n(643),k=n(665),C=n(634),P=n(879),S=n(5),F=function(e){var t,n=window.location.pathname.split("planning/").pop(),a=function(){var a=Object(p.a)(Object(j.a)().mark((function a(r){var i,c;return Object(j.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(r.length>0)){a.next=7;break}return a.next=3,w.a.find(n);case 3:(t=a.sent).product.map((function(t,n){t._id===e.data.data._id&&(i=n,t.perWeek.map((function(e,t){e._id===r[0].key._id&&(c=t)})))})),t.product[i].perWeek[c].quantityToProduce=r[0].data.quantityToProduce,w.a.update(t.id,t);case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),i=e.data.data.perWeek;return Object(S.jsx)(r.a.Fragment,{children:Object(S.jsxs)(y.DataGrid,{dataSource:i,showBorders:!0,columnAutoWidth:!0,children:[Object(S.jsx)(y.Editing,{allowUpdating:!0,allowAdding:!1,allowDeleting:!1,mode:"form",onChangesChange:function(e){return a(e)}}),Object(S.jsx)(y.Column,{dataField:"week",allowEditing:!1}),Object(S.jsx)(y.Column,{dataField:"quantity",allowEditing:!1}),Object(S.jsx)(y.Column,{dataField:"quantityToProduce"})]})})},G=q.e().shape({quantity:T.a.integer(Object(o.c)("entities.planning.fields.quantity"),{required:!1}),subassembly:T.a.boolean(Object(o.c)("entities.planning.fields.subassembly"),{})}),I=function(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),r=(n[0],n[1],Object(a.useState)(!1)),i=Object(f.a)(r,2),c=(i[0],i[1],Object(a.useState)({title:"",text:"",week:"",productId:"",subassembly:!1,finishGood:!1})),u=Object(f.a)(c,2),s=u[0],l=(u[1],Object(a.useState)({product:[]})),d=Object(f.a)(l,2),b=(d[0],d[1]),q=Object(a.useState)((function(){return{quantity:s.text,subassembly:s.subassembly,finishGood:s.finishGood}})),T=Object(f.a)(q,1)[0],I=e.record,D=e.loading,E=(Object(C.c)({resolver:Object(k.yupResolver)(G),mode:"all",defaultValues:T}),Object(a.useState)([{id:1,product:"",week:"",amountToProduce:0,perWeekRequested:0,perWeekToProduce:0,quantityInStock:0,subassembly:!0,finishGood:!0}])),R=Object(f.a)(E,2),W=R[0],Y=R[1],B=[{id:1,product:"",week:"",amountToProduce:0,perWeekRequested:0,perWeekToProduce:0,quantityInStock:0,subassembly:!0,finishGood:!0}],M=function(){var t=e.record?e.record.id:I.id;w.a.find(t).then((function(e){b(e),e.product.map((function(e,t){e.perWeek.map((function(n){var a={id:t,product:e.id,amountToProduce:e.quantityToProduce,week:n.week,perWeekRequested:n.quantity,perWeekToProduce:n.quantityToProduce,quantityInStock:e.quantityInStock,subassembly:e.subassembly,finishGood:e.finishGood};B.push(a)}))}))})),B.shift(),Y(B)};Object(a.useEffect)((function(){!D&&I&&M()}),[!D&&I]);var A=function(){var t=Object(p.a)(Object(j.a)().mark((function t(n){var a;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.length>0&&(e.record.product.map((function(e,t){e._id===n[0].key._id&&(a=t)})),e.record.product[a].subassembly=void 0===n[0].data.subassembly?n[0].key.subassembly:n[0].data.subassembly,e.record.product[a].finishGood=void 0===n[0].data.finishGood?n[0].key.finishGood:n[0].data.finishGood,w.a.update(e.record.id,e.record));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();new v.a({fields:[{caption:"Product",width:250,dataField:"product",area:"row",selector:function(e){return"".concat(e.product," Quantity in stock: ").concat(e.quantityInStock)}},{caption:"Quantity Requested",dataField:"amountToProduce",width:300,area:"row",selector:function(e){return"\n            Quantity To Produce: ".concat(e.amountToProduce,"\n\n            ").concat(e.subassembly?"SubAssembly: true":"SubAssembly: false","\n            ").concat(e.finishGood?"Finish Goods: true":"Finish Goods: false","\n          ")}},{dataField:"week",dataType:"string",area:"column"},{caption:"Requested",dataField:"perWeekRequested",dataType:"number",summaryType:"sum",area:"data"},{caption:"ToProduce",dataField:"perWeekToProduce",dataType:"number",summaryType:"sum",area:"data"}],store:W});return D||!I?Object(S.jsx)(O.a,{}):Object(S.jsxs)(P.a,{children:[Object(S.jsxs)(x.a,{gutter:24,children:[Boolean(I.name)&&Object(S.jsx)(h.a,{span:6,children:Object(S.jsx)(g.a.Item,Object(m.a)(Object(m.a)({},P.b),{},{label:Object(o.c)("entities.planning.fields.name"),children:I.name}))}),Boolean(I.year)&&Object(S.jsx)(h.a,{span:6,children:Object(S.jsx)(g.a.Item,Object(m.a)(Object(m.a)({},P.b),{},{label:Object(o.c)("entities.planning.fields.year"),children:I.year}))}),Boolean(I.week)&&Object(S.jsx)(h.a,{span:6,children:Object(S.jsx)(g.a.Item,Object(m.a)(Object(m.a)({},P.b),{},{label:Object(o.c)("entities.planning.fields.week"),children:I.week}))}),Boolean(I.status)&&Object(S.jsx)(h.a,{span:6,children:Object(S.jsx)(g.a.Item,Object(m.a)(Object(m.a)({},P.b),{},{label:Object(o.c)("entities.planning.fields.status"),children:Object(o.c)("entities.planning.enumerators.status.".concat(I.status))}))})]}),Object(S.jsxs)(y.DataGrid,{dataSource:I.product,allowColumnReordering:!0,children:[Object(S.jsx)(y.Selection,{mode:"multiple"}),Object(S.jsx)(y.GroupPanel,{visible:!1}),Object(S.jsx)(y.Grouping,{autoExpandAll:!0}),Object(S.jsx)(y.Editing,{allowUpdating:!0,allowAdding:!1,allowDeleting:!1,mode:"row",onChangesChange:function(e){return A(e)}}),Object(S.jsx)(y.Column,{dataField:"id",allowEditing:!1}),Object(S.jsx)(y.Column,{dataField:"quantityInStock",allowEditing:!1}),Object(S.jsx)(y.Column,{dataField:"quantityToProduce",allowEditing:!1}),Object(S.jsx)(y.Column,{dataField:"quantityRequested",allowEditing:!1}),Object(S.jsx)(y.Column,{dataField:"subassembly",dataType:"boolean"}),Object(S.jsx)(y.Column,{dataField:"finishGood",dataType:"boolean"}),Object(S.jsx)(y.MasterDetail,{enabled:!0,component:F}),Object(S.jsx)(y.Paging,{defaultPageSize:10}),Object(S.jsx)(y.Pager,{visible:!0,allowedPageSizes:!0,displayMode:"compact",showPageSizeSelector:!0,showInfo:!0,showNavigationButtons:!0}),Object(S.jsx)(y.Export,{enabled:!0,allowExportSelectedData:!0})]})]})},D=n(1287),E=n(828),R=n(616),W=n(150),Y=n(792),B=n(76),M=n(102),A=n(791),U=n(115),_=n(819),L=n(673),z=function(e){var t=Object(i.d)(),n=Object(c.h)(),a=Object(i.e)(M.a.selectPermissionToRead),r=Object(i.e)(A.a.selectPermissionToEdit),u=Object(i.e)(A.a.selectPermissionToDestroy),s=Object(i.e)(_.a.selectLoading),l=n.params.id;return Object(S.jsxs)(L.a,{children:[r&&Object(S.jsx)(B.a,{to:"/planning/".concat(l,"/edit"),children:Object(S.jsx)(W.a,{type:"primary",icon:Object(S.jsx)(D.a,{}),children:Object(o.c)("common.edit")})}),u&&Object(S.jsx)(Y.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(U.a.doDestroy(l))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(S.jsx)(W.a,{type:"primary",icon:Object(S.jsx)(E.a,{}),disabled:s,children:Object(o.c)("common.destroy")})}),a&&Object(S.jsx)(B.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(S.jsx)(W.a,{icon:Object(S.jsx)(R.a,{}),children:Object(o.c)("auditLog.menu")})})]})},Q=n(640),H=n(642),J=n(641);t.default=function(e){var t=Object(i.d)(),n=Object(c.h)(),r=Object(i.e)(b.selectLoading),s=Object(i.e)(b.selectRecord);return Object(a.useEffect)((function(){t(u.a.doFind(n.params.id))}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(H.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.planning.menu"),"/planning"],[Object(o.c)("entities.planning.view.title")]]}),Object(S.jsxs)(Q.a,{children:[Object(S.jsxs)(x.a,{children:[Object(S.jsx)(h.a,{span:16,children:Object(S.jsx)(J.a,{children:Object(o.c)("entities.planning.view.title")})}),Object(S.jsx)(h.a,{span:8,style:{textAlign:"end"},children:Object(S.jsx)(z,{match:n})})]}),Object(S.jsx)(I,{loading:r,record:s})]})]})}},640:function(e,t,n){"use strict";var a,r=n(120),i=n(121).a.div(a||(a=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=i},641:function(e,t,n){"use strict";var a,r=n(120),i=n(121).a.h1(a||(a=Object(r.a)(["\n  margin-bottom: 36px;\n"])));t.a=i},642:function(e,t,n){"use strict";var a=n(688),r=(n(0),n(76)),i=n(5);t.a=function(e){var t=function(e){return e.length>1};return Object(i.jsx)(a.a,{children:e.items.map((function(e){return Object(i.jsx)(a.a.Item,{children:t(e)?Object(i.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},643:function(e,t,n){"use strict";var a=n(15),r=n(37),i=n(4),c=n(90),o=n.n(c),u={generic:function(e){return r.c().label(e)},string:function(e,t){t=t||{};var n=r.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),t.matches&&(n=n.matches(t.matches)),n},boolean:function(e,t){return r.b().default(!1).label(e)},relationToOne:function(e,t){t=t||{};var n=r.c().nullable(!0).label(e).transform((function(e,t){return t?t.id:null}));return t.required&&(n=n.required()),n},stringArray:function(e,t){t=t||{};var n=r.a().compact().ensure().of(r.h().transform((function(e,t){return""===t?null:e})).trim()).label(e);return t.required&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},relationToMany:function(e,t){t=t||{};var n=r.a().nullable(!0).label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}));return t.required&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},integer:function(e,t){t=t||{};var n=r.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),n},images:function(e,t){t=t||{};var n=r.a().nullable(!0).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},files:function(e,t){t=t||{};var n=r.a().compact().ensure().nullable(!0).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},enumerator:function(e,t){t=t||{};var n=r.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(a.a)(t.options||[])));return t.required&&(n=n.required(Object(i.c)("validation.string.selected"))),n},email:function(e,t){t=t||{};var n=r.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e).email();return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),t.matches&&(n=n.matches(t.matches)),n},decimal:function(e,t){t=t||{};var n=r.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),n},datetime:function(e,t){t=t||{};var n=r.c().nullable(!0).label(e).transform((function(e,t){return e?o()(t,"YYYY-MM-DD HH:mm").toISOString():null}));return t.required&&(n=n.required()),n},date:function(e,t){t=t||{};var n=r.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return t.required&&(n=n.required()),n}};t.a=u},673:function(e,t,n){"use strict";var a,r=n(120),i=n(121).a.div(a||(a=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=i},690:function(e,t,n){"use strict";var a=n(683),r=(n(0),n(5));t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},791:function(e,t,n){"use strict";var a=n(6),r=n(33),i=n(56),c=n(124),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.planningRead)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.planningEdit)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.planningCreate)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.planningImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:u,selectPermissionToCreate:s,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.planningDestroy)})),selectPermissionToImport:l};t.a=d},819:function(e,t,n){"use strict";var a=n(6),r={selectLoading:Object(a.a)([function(e){return e.planning.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},879:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a,r=n(120),i=n(121).a.div(a||(a=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),c={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=i}}]);