(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[31],{1300:function(e,t,n){"use strict";n.r(t);var r=n(738),o=n.n(r),a=n(0),i=n(35),c=n(30),u=n(4),s=n(23),l=n(675),f=n(677),p=n(676),d=n(33),y=n(5);t.default=function(e){var t=Object(i.d)(),n=Object(c.g)(),r=o.a.parse(n.search).token,g=Object(i.e)(d.a.selectBackgroundImageUrl),h=Object(i.e)(d.a.selectLogoUrl);return Object(a.useEffect)((function(){t(s.a.doVerifyEmail(r))}),[]),Object(y.jsx)(f.a,{style:{backgroundImage:"url(".concat(g||"/images/emailUnverified.jpg",")")},children:Object(y.jsxs)(l.a,{children:[Object(y.jsx)(p.a,{children:h?Object(y.jsx)("img",{src:h,width:"240px",alt:Object(u.c)("app.title")}):Object(y.jsx)("h1",{children:Object(u.c)("app.title")})}),Object(y.jsx)("h3",{style:{textAlign:"center"},children:Object(u.c)("auth.verifyEmail.message")})]})})}},675:function(e,t,n){"use strict";var r,o=n(120),a=n(121).a.div(r||(r=Object(o.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])));t.a=a},676:function(e,t,n){"use strict";var r,o=n(120),a=n(121).a.div(r||(r=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"])));t.a=a},677:function(e,t,n){"use strict";var r,o=n(120),a=n(121).a.div(r||(r=Object(o.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"])));t.a=a},697:function(e,t,n){var r=n(224);e.exports=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}},e.exports.__esModule=!0,e.exports.default=e.exports},738:function(e,t,n){"use strict";var r=n(31).default,o=n(697).default,a=n(218).default,i=n(739),c=n(740),u=n(741);function s(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function f(e,t){return t.decode?c(e):e}function p(e){return Array.isArray(e)?e.sort():"object"===typeof e?p(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function d(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function y(e){var t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return function(t,n,r){var o="string"===typeof n&&n.includes(e.arrayFormatSeparator),a="string"===typeof n&&!o&&f(n,e).includes(e.arrayFormatSeparator);n=a?f(n,e):n;var i=o||a?n.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===n?n:f(n,e);r[t]=i};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),a=Object.create(null);if("string"!==typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var i,c=o(e.split("&"));try{for(c.s();!(i=c.n()).done;){var l=i.value,d=u(t.decode?l.replace(/\+/g," "):l,"="),y=r(d,2),h=y[0],m=y[1];m=void 0===m?null:["comma","separator"].includes(t.arrayFormat)?m:f(m,t),n(f(h,t),m,a)}}catch(F){c.e(F)}finally{c.f()}for(var b=0,v=Object.keys(a);b<v.length;b++){var j=v[b],x=a[j];if("object"===typeof x&&null!==x)for(var O=0,w=Object.keys(x);O<w.length;O++){var k=w[O];x[k]=g(x[k],t)}else a[j]=g(x,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=p(n):e[t]=n,e}),Object.create(null))}t.extract=y,t.parse=h,t.stringify=function(e,t){if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(n){return t.skipNull&&(null===(r=e[n])||void 0===r)||t.skipEmptyString&&""===e[n];var r},r=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(a(n),null===r?[[l(t,e),"[",o,"]"].join("")]:[[l(t,e),"[",l(o,e),"]=",l(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(a(n),null===r?[[l(t,e),"[]"].join("")]:[[l(t,e),"[]=",l(r,e)].join("")])}};case"comma":case"separator":return function(t){return function(n,r){return null===r||void 0===r||0===r.length?n:0===n.length?[[l(t,e),"=",l(r,e)].join("")]:[[n,l(r,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(a(n),null===r?[l(t,e)]:[[l(t,e),"=",l(r,e)].join("")])}}}}(t),o={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];n(u)||(o[u]=e[u])}var f=Object.keys(o);return!1!==t.sort&&f.sort(t.sort),f.map((function(n){var o=e[n];return void 0===o?"":null===o?l(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):l(n,t)+"="+l(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var n=u(e,"#"),o=r(n,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:h(y(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:f(i,t)}:{})},t.stringifyUrl=function(e,n){n=Object.assign({encode:!0,strict:!0},n);var r=d(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,e.query),c=t.stringify(i,n);c&&(c="?".concat(c));var u=function(e){var t="",n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(l(e.fragmentIdentifier,n))),"".concat(r).concat(c).concat(u)}},739:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},740:function(e,t,n){"use strict";var r="%[a-f0-9]{2}",o=new RegExp("("+r+")|([^%]+?)","gi"),a=new RegExp("("+r+")+","gi");function i(e,t){try{return[decodeURIComponent(e.join(""))]}catch(o){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function c(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(o)||[],n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(o)||[];return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=a.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var o=c(r[0]);o!==r[0]&&(n[r[0]]=o)}r=a.exec(e)}n["%C2"]="\ufffd";for(var i=Object.keys(n),u=0;u<i.length;u++){var s=i[u];e=e.replace(new RegExp(s,"g"),n[s])}return e}(e)}}},741:function(e,t,n){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}}}]);