webpackJsonp([8],{195:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=195},221:function(t,e,n){"use strict";(function(t){n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return a});var r="tropospheric-tropospheric.193b.starter-ca-central-1.openshiftapps.com",o="data-"+r,i=r,a=t.env.s3options?JSON.parse(JSON.stringify(t.env.s3options)):{}}).call(e,n(6))},223:function(t,e,n){"use strict";var r=n(530),o=n.n(r);e.a=o()()},224:function(t,e,n){n(225),t.exports=n(424)},424:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function f(t,e){var n=e.baseUrl,r=e.cookie,o={method:"POST",mode:n?"cors":"same-origin",credentials:n?"include":"same-origin",headers:s({Accept:"application/json","Content-Type":"application/json"},r?{Cookie:r}:null)};return function(e,r){return e.startsWith("/graphql")||e.startsWith("/api")?t("".concat(n).concat(e),s({},o,r,{headers:s({},o.headers,r&&r.headers)})):t(e,r)}}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(){return h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h.apply(this,arguments)}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case at:return h({},t,d({},e.payload.name,e.payload.value));default:return t}}function y(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){function i(t,e){try{var n=c[t](e),i=n.value}catch(t){return void o(t)}n.done?r(i):Promise.resolve(i).then(a,u)}function a(t){i("next",t)}function u(t){i("throw",t)}var c=t.apply(e,n);a()})}}function b(t){return function(){var e=y(regeneratorRuntime.mark(function e(n,r){var o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:n,variables:r}),credentials:"include"},e.next=3,t("/graphql",o);case 3:if(i=e.sent,200===i.status){e.next=6;break}throw new Error(i.statusText);case 6:return e.abrupt("return",i.json());case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}function w(t){var e=t.fetch;return{fetch:e,history:t.history,graphqlRequest:b(e)}}function m(t,e,n,r,o){var i=document.head.querySelector("".concat(t,"[").concat(e,'="').concat(n,'"]'));if((!i||i.getAttribute(r)!==o)&&(i&&i.parentNode.removeChild(i),"string"==typeof o)){var a=document.createElement(t);a.setAttribute(e,n),a.setAttribute(r,o),document.head.appendChild(a)}}function g(t,e){m("meta","name",t,"content",e)}function O(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){function i(t,e){try{var n=c[t](e),i=n.value}catch(t){return void o(t)}n.done?r(i):Promise.resolve(i).then(a,u)}function a(t){i("next",t)}function u(t){i("throw",t)}var c=t.apply(e,n);a()})}}function x(t,e,n,r){Z||(Z="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={}),e&&o)for(var a in o)void 0===e[a]&&(e[a]=o[a]);else e||(e=o||{});if(1===i)e.children=r;else if(i>1){for(var u=new Array(i),c=0;c<i;c++)u[c]=arguments[c+3];e.children=u}return{$$typeof:Z,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function j(){return j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},j.apply(this,arguments)}function k(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){function i(t,e){try{var n=c[t](e),i=n.value}catch(t){return void o(t)}n.done?r(i):Promise.resolve(i).then(a,u)}function a(t){i("next",t)}function u(t){i("throw",t)}var c=t.apply(e,n);a()})}}function P(t,e){return _.apply(this,arguments)}function _(){return _=k(regeneratorRuntime.mark(function t(e,n){var r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return yt[vt.key]={scrollX:window.pageXOffset,scrollY:window.pageYOffset},"PUSH"===n&&delete yt[e.key],vt=e,r=!n,t.prev=4,t.next=7,pt.resolve(j({},dt,{pathname:e.pathname,query:T.a.parse(e.search)}));case 7:if(o=t.sent,vt.key===e.key){t.next=10;break}return t.abrupt("return");case 10:if(!o.redirect){t.next=13;break}return ct.a.replace(o.redirect),t.abrupt("return");case 13:i=r?S.a.hydrate:S.a.render,tt=i(x(et,{context:dt},void 0,o.component),ht,function(){if(r){var t=document.getElementById("css");return void(t&&t.parentNode.removeChild(t))}document.title=o.title,g("description",o.description);var n=0,i=0,a=yt[e.key];if(a)n=a.scrollX,i=a.scrollY;else{var u=e.hash.substr(1);if(u){var c=document.getElementById(u);c&&(i=window.pageYOffset+c.getBoundingClientRect().top)}}window.scrollTo(n,i),window.ga&&window.ga("send","pageview",Object(q.createPath)(e))}),t.next=23;break;case 17:t.prev=17,t.t0=t.catch(4),t.next=21;break;case 21:console.error(t.t0),r||vt.key!==e.key||window.location.reload();case 23:case"end":return t.stop()}},t,this,[[4,17]])})),_.apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var R=(n(425),n(60)),E=n.n(R),C=n(427),S=n.n(C),A=(n(437),n(438)),T=n.n(A),q=n(125),M=n(441),I=n.n(M),U=n(444),N=n.n(U),B=(n(445),n(446),n(466),n(472)),J=n.n(B),Y=(n(495),n(221)),L=n(519);N.a.log.squelch=!0;var X=Y.b?Y.b:I()(),D=J()(Y.a),H=N()({level:D,s3:Y.d,file:!1,peers:L.CLOUD_MEMORIES});H.on("out",{get:{"#":{"*":""}}});var W=N()(),$=W.get(X),F=H.get(X),V=(N.a,n(93)),z=n.n(V),G=n(523),K=l({insertCss:z.a.func.isRequired,fetch:z.a.func.isRequired},G.a.childContextTypes),Q=function(t){function e(){return o(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return c(e,t),a(e,[{key:"getChildContext",value:function(){return this.props.context}},{key:"render",value:function(){return E.a.Children.only(this.props.children)}}]),e}(E.a.PureComponent);Object.defineProperty(Q,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:K});var Z,tt,et=Q,nt=f,rt=n(137),ot=n(528),it=n.n(ot),at="SET_RUNTIME_VARIABLE",ut=Object(rt.c)({user:p,runtime:v}),ct=(n(529),n(223)),lt=n(536),st={path:"",children:[{path:"",load:function(){return n.e(5).then(n.bind(null,610))}},{path:"/contact",load:function(){return n.e(6).then(n.bind(null,611))}},{path:"/login",load:function(){return n.e(4).then(n.bind(null,612))}},{path:"/register",load:function(){return n.e(2).then(n.bind(null,613))}},{path:"/about",load:function(){return n.e(1).then(n.bind(null,614))}},{path:"/privacy",load:function(){return n.e(0).then(n.bind(null,615))}},{path:"/admin",load:function(){return n.e(7).then(n.bind(null,616))}},{path:"(.*)",load:function(){return n.e(3).then(n.bind(null,617))}}],action:function(){var t=O(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.next,t.next=3,n();case 3:return r=t.sent,r.title="".concat(r.title||"Untitled Page"," - www.reactstarterkit.com"),r.description=r.description||"",t.abrupt("return",r);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},ft=st,pt=new lt.a(ft,{resolveRoute:function(t,e){return"function"==typeof t.route.load?t.route.load().then(function(n){return n.default(t,e)}):"function"==typeof t.route.action?t.route.action(t,e):void 0}}),dt={insertCss:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){return t._insertCss()});return function(){r.forEach(function(t){return t()})}},fetch:nt(fetch,{baseUrl:window.App.apiUrl}),store:function(t,e){var n,r=w(e),o=[it.a.withExtraArgument(r)];n=rt.a.apply(void 0,o);var i=Object(rt.d)(ut,t,n);return i}(window.App.state,{history:ct.a}),storeSubscription:null},ht=document.getElementById("app"),vt=ct.a.location,yt={};window.history&&"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),ct.a.listen(P),P(vt)},457:function(t,e){},485:function(t,e){},491:function(t,e){},495:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(496),i=r(o),a=n(127),u=r(a);u.default.on("opt",function(t){this.to.next(t);var e=t.opt.level;if(e instanceof Object){var n=i.default.from(e,t),r=function(t){return function(e){return this.to.next(e),t(e)}};t.on("get",r(n.read)),t.on("put",r(n.write))}}),t.exports=u.default},496:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(497),i=r(o),a=n(216),u=r(a),c=n(217),l=r(c),s=n(218),f=r(s),p=n(127),d=r(p),h=(0,f.default)("In-process writes"),v=/(NotFound|not found|not find)/i,y={valueEncoding:"json"},b=function(t,e,n){if(e&&e._&&(t=t||d.default.state.to(e))&&t._&&(n=d.default.num.is(n)?{machine:n}:{machine:d.default.state()},n.union=d.default.obj.copy(t),d.default.node.is(e,function(r,o){d.default.HAM(n.machine,d.default.state.is(e,o),d.default.state.is(t,o,!0),r,t[o]).incoming&&d.default.state.to(e,o,n.union)})))return n.union},w=function(){function t(e,n){(0,u.default)(this,t),this.level=e,this.ctx=n,this.read=this.read.bind(this),this.write=this.write.bind(this),e[h]=e[h]||{}}return(0,l.default)(t,null,[{key:"from",value:function(e,n){return new t(e,n)}}]),(0,l.default)(t,[{key:"read",value:function(t){var e=this,n=t.get,r=this.level,o=n["#"],i=r[h][o];return i?this.afterRead(t,null,i):r.get(o,y,function(n,r){if(n)return v.test(n.message)?void e.afterRead(t,null):void e.afterRead(t,n);e.afterRead(t,null,r)})}},{key:"afterRead",value:function(t,e,n){this.ctx.on("in",{"@":t["#"],put:d.default.graph.node(n),err:e})}},{key:"write",value:function(t){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;c.forEach(function(t){delete o[h][t]}),r.ctx.on("in",{"@":t["#"],ok:!e,err:e})}function n(t){t<c.length||u.write(e)}var r=this,o=this.level,a=t.put,u=o.batch(),c=(0,i.default)(a),l=0;c.forEach(function(t){var e=a[t],r=o[h][t];if(r)return e=b(e,r),l+=1,u.put(t,e,y),void n(l);o[h][t]=e,o.get(t,y,function(r,o){r||(e=b(e,o)),u.put(t,e,y),n(l+=1)})})}}]),t}();e.default=w},519:function(t,e){var n=window&&window.location&&window.location.protocol&&window.location.host?window.location.protocol+"//"+window.location.host+"/gun":"https://tropospheric-tropospheric.193b.starter-ca-central-1.openshiftapps.com/gun";e.CLOUD_MEMORIES=n}},[224]);
//# sourceMappingURL=client.3a0e0d67.js.map