!function(a,b){"use strict";function c(a,b){return i(new(i(function(){},{prototype:a})),b)}function d(){function a(a,b){var c=b.caseInsensitiveMatch,d={originalPath:a,regexp:a},e=d.keys=[];return a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(a,b,c,d){var f="?"===d?d:null,g="*"===d?d:null;return e.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+)?"||"([^/]+)?")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),d.regexp=new RegExp("^"+a+"$",c?"i":""),d}var b={};this.when=function(c,d){if(b[c]=i({reloadOnSearch:!0},d,c&&a(c,d)),c){var e="/"==c[c.length-1]?c.substr(0,c.length-1):c+"/";b[e]=i({redirectTo:c},a(e,d))}return this},this.otherwise=function(a){return this.when(null,a),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,d,e,f,n,o,p,q){function r(a,b){var c=b.keys,d={};if(!b.regexp)return null;var e=b.regexp.exec(a);if(!e)return null;for(var f=1,g=e.length;g>f;++f){var h=c[f-1],i="string"==typeof e[f]?decodeURIComponent(e[f]):e[f];h&&i&&(d[h.name]=i)}return d}function s(){var b=t(),c=w.current;b&&c&&b.$$route===c.$$route&&h(b.pathParams,c.pathParams)&&!b.reloadOnSearch&&!v?(c.params=b.params,g(c.params,e),a.$broadcast("$routeUpdate",c)):(b||c)&&(v=!1,a.$broadcast("$routeChangeStart",b,c),w.current=b,b&&b.redirectTo&&(m(b.redirectTo)?d.path(u(b.redirectTo,b.params)).search(b.params).replace():d.url(b.redirectTo(b.pathParams,d.path(),d.search())).replace()),f.when(b).then(function(){if(b){var a,c,d=i({},b.resolve);return j(d,function(a,b){d[b]=m(a)?n.get(a):n.invoke(a)}),k(a=b.template)?l(a)&&(a=a(b.params)):k(c=b.templateUrl)&&(l(c)&&(c=c(b.params)),c=q.getTrustedResourceUrl(c),k(c)&&(b.loadedTemplateUrl=c,a=o.get(c,{cache:p}).then(function(a){return a.data}))),k(a)&&(d.$template=a),f.all(d)}}).then(function(d){b==w.current&&(b&&(b.locals=d,g(b.params,e)),a.$broadcast("$routeChangeSuccess",b,c))},function(d){b==w.current&&a.$broadcast("$routeChangeError",b,c,d)}))}function t(){var a,e;return j(b,function(b){!e&&(a=r(d.path(),b))&&(e=c(b,{params:i({},d.search(),a),pathParams:a}),e.$$route=b)}),e||b[null]&&c(b[null],{params:{},pathParams:{}})}function u(a,b){var c=[];return j((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];c.push(b[f]),c.push(e[2]||""),delete b[f]}}),c.join("")}var v=!1,w={routes:b,reload:function(){v=!0,a.$evalAsync(s)}};return a.$on("$locationChangeSuccess",s),w}]}function e(){this.$get=function(){return{}}}function f(a,b,c,d,e){return{restrict:"ECA",terminal:!0,priority:1e3,transclude:"element",compile:function(f,g,h){return function(f,g,i){function j(){l&&(l.$destroy(),l=null),m&&(e.leave(m),m=null)}function k(){var i=a.current&&a.current.locals,k=i&&i.$template;if(k){var o=f.$new();h(o,function(f){j(),f.html(k),e.enter(f,null,g);var h=c(f.contents()),p=a.current;if(l=p.scope=o,m=f,p.controller){i.$scope=l;var q=d(p.controller,i);p.controllerAs&&(l[p.controllerAs]=q),f.data("$ngControllerController",q),f.contents().data("$ngControllerController",q)}h(l),l.$emit("$viewContentLoaded"),l.$eval(n),b()})}else j()}var l,m,n=i.onload||"";f.$on("$routeChangeSuccess",k),k()}}}}var g=b.copy,h=b.equals,i=b.extend,j=b.forEach,k=b.isDefined,l=b.isFunction,m=b.isString;b.element,b.noop,b.toJson;var n=b.module("ngRoute",["ng"]).provider("$route",d);n.provider("$routeParams",e),n.directive("ngView",f),f.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]}(window,window.angular),function(a,b,c){"use strict";var d=b.$$minErr("$resource");b.module("ngResource",["ng"]).factory("$resource",["$http","$parse","$q",function(a,e,f){function g(a){return h(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function h(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}function i(a,b){this.template=a,this.defaults=b||{},this.urlParams={}}function j(e,g,h){function r(a,b){var c={};return b=n({},g,b),m(b,function(b,d){p(b)&&(b=b()),c[d]=b&&b.charAt&&"@"==b.charAt(0)?q(a,b.substr(1)):b}),c}function s(a){return a.resource}function t(a){o(a||{},this)}var u=new i(e);return h=n({},k,h),m(h,function(e,g){var h=/^(POST|PUT|PATCH)$/i.test(e.method);t[g]=function(g,i,j,k){var q,v,w,x={};switch(arguments.length){case 4:w=k,v=j;case 3:case 2:if(!p(i)){x=g,q=i,v=j;break}if(p(g)){v=g,w=i;break}v=i,w=j;case 1:p(g)?v=g:h?q=g:x=g;break;case 0:break;default:throw d("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var y=q instanceof t,z=y?q:e.isArray?[]:new t(q),A={},B=e.interceptor&&e.interceptor.response||s,C=e.interceptor&&e.interceptor.responseError||c;m(e,function(a,b){"params"!=b&&"isArray"!=b&&"interceptor"!=b&&(A[b]=o(a))}),A.data=q,u.setUrlParams(A,n({},r(q,e.params||{}),x),e.url);var D=a(A).then(function(a){var c=a.data,f=z.$promise;if(c){if(b.isArray(c)!=!!e.isArray)throw d("badcfg","Error in resource configuration. Expected response to contain an {0} but got an {1}",e.isArray?"array":"object",b.isArray(c)?"array":"object");e.isArray?(z.length=0,m(c,function(a){z.push(new t(a))})):(o(c,z),z.$promise=f)}return z.$resolved=!0,(v||l)(z,a.headers),a.resource=z,a},function(a){return z.$resolved=!0,(w||l)(a),f.reject(a)}).then(B,C);return y?D:(z.$promise=D,z.$resolved=!1,z)},t.prototype["$"+g]=function(a,b,c){p(a)&&(c=b,b=a,a={});var d=t[g](a,this,b,c);return d.$promise||d}}),t.bind=function(a){return j(e,n({},g,a),h)},t}var k={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},l=b.noop,m=b.forEach,n=b.extend,o=b.copy,p=b.isFunction,q=function(a,b){return e(b)(a)};return i.prototype={setUrlParams:function(a,c,d){var e,f,h=this,i=d||h.template,j=h.urlParams={};m(i.split(/\W/),function(a){!new RegExp("^\\d+$").test(a)&&a&&new RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(i)&&(j[a]=!0)}),i=i.replace(/\\:/g,":"),c=c||{},m(h.urlParams,function(a,d){e=c.hasOwnProperty(d)?c[d]:h.defaults[d],b.isDefined(e)&&null!==e?(f=g(e),i=i.replace(new RegExp(":"+d+"(\\W|$)","g"),f+"$1")):i=i.replace(new RegExp("(/?):"+d+"(\\W|$)","g"),function(a,b,c){return"/"==c.charAt(0)?c:b+c})}),i=i.replace(/\/+$/,""),i=i.replace(/\/\.(?=\w+($|\?))/,"."),a.url=i.replace(/\/\\\./,"/."),m(c,function(b,c){h.urlParams[c]||(a.params=a.params||{},a.params[c]=b)})}},j}])}(window,window.angular),function(a,b,c){"use strict";b.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(a,d){function e(){var a,e,f,i;for(a in h)k(g[a])&&d.cookies(a,c);for(a in g)e=g[a],b.isString(e)?e!==h[a]&&(d.cookies(a,e),i=!0):b.isDefined(h[a])?g[a]=h[a]:delete g[a];if(i){i=!1,f=d.cookies();for(a in g)g[a]!==f[a]&&(k(f[a])?delete g[a]:g[a]=f[a],i=!0)}}var f,g={},h={},i=!1,j=b.copy,k=b.isUndefined;return d.addPollFn(function(){var b=d.cookies();f!=b&&(f=b,j(b,h),j(b,g),i&&a.$apply())})(),i=!0,a.$watch(e),g}]).factory("$cookieStore",["$cookies",function(a){return{get:function(c){var d=a[c];return d?b.fromJson(d):d},put:function(c,d){a[c]=b.toJson(d)},remove:function(b){delete a[b]}}}])}(window,window.angular),function(a,b){"use strict";function c(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function d(a,c){function d(a,d,g,h){if(d=b.lowercase(d),w[d])for(;r.last()&&x[r.last()];)f("",r.last());v[d]&&r.last()==d&&f("",d),h=s[d]||!!h,h||r.push(d);var i={};g.replace(l,function(a,b,c,d,f){var g=c||d||f||"";i[b]=e(g)}),c.start&&c.start(d,i,h)}function f(a,d){var e,f=0;if(d=b.lowercase(d))for(f=r.length-1;f>=0&&r[f]!=d;f--);if(f>=0){for(e=r.length-1;e>=f;e--)c.end&&c.end(r[e]);r.length=f}}var g,i,q,r=[],t=a;for(r.last=function(){return r[r.length-1]};a;){if(i=!0,r.last()&&y[r.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+r.last()+"[^>]*>","i"),function(a,b){return b=b.replace(o,"$1").replace(p,"$1"),c.chars&&c.chars(e(b)),""}),f("",r.last());else if(0===a.indexOf("<!--")?(g=a.indexOf("-->"),g>=0&&(c.comment&&c.comment(a.substring(4,g)),a=a.substring(g+3),i=!1)):n.test(a)?(q=a.match(k),q&&(a=a.substring(q[0].length),q[0].replace(k,f),i=!1)):m.test(a)&&(q=a.match(j),q&&(a=a.substring(q[0].length),q[0].replace(j,d),i=!1)),i){g=a.indexOf("<");var u=0>g?a:a.substring(0,g);a=0>g?"":a.substring(g),c.chars&&c.chars(e(u))}if(a==t)throw h("badparse","The sanitizer was unable to parse the following block of html: {0}",a);t=a}f()}function e(a){return C.innerHTML=a.replace(/</g,"&lt;"),C.innerText||C.textContent||""}function f(a){return a.replace(/&/g,"&amp;").replace(r,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g(a){var c=!1,d=b.bind(a,a.push);return{start:function(a,e,g){a=b.lowercase(a),!c&&y[a]&&(c=a),c||1!=z[a]||(d("<"),d(a),b.forEach(e,function(a,c){var e=b.lowercase(c);1!=B[e]||A[e]===!0&&!a.match(q)||(d(" "),d(c),d('="'),d(f(a)),d('"'))}),d(g?"/>":">"))},end:function(a){a=b.lowercase(a),c||1!=z[a]||(d("</"),d(a),d(">")),a==c&&(c=!1)},chars:function(a){c||d(f(a))}}}var h=b.$$minErr("$sanitize"),i=function(a){var b=[];return d(a,g(b)),b.join("")},j=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,k=/^<\s*\/\s*([\w:-]+)[^>]*>/,l=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,m=/^</,n=/^<\s*\//,o=/<!--(.*?)-->/g,p=/<!\[CDATA\[(.*?)]]>/g,q=/^((ftp|https?):\/\/|mailto:|tel:|#)/i,r=/([^\#-~| |!])/g,s=c("area,br,col,hr,img,wbr"),t=c("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),u=c("rp,rt"),v=b.extend({},u,t),w=b.extend({},t,c("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),x=b.extend({},u,c("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),y=c("script,style"),z=b.extend({},s,w,x,v),A=c("background,cite,href,longdesc,src,usemap"),B=b.extend({},A,c("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),C=document.createElement("pre");b.module("ngSanitize",[]).value("$sanitize",i),b.module("ngSanitize").filter("linky",function(){var a=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/,c=/^mailto:/;return function(d,e){if(!d)return d;var f,h,i,j=d,k=[],l=g(k),m={};for(b.isDefined(e)&&(m.target=e);f=j.match(a);)h=f[0],f[2]==f[3]&&(h="mailto:"+h),i=f.index,l.chars(j.substr(0,i)),m.href=h,l.start("a",m),l.chars(f[0].replace(c,"")),l.end("a"),j=j.substring(i+f[0].length);return l.chars(j),k.join("")}})}(window,window.angular);var AngularFire;angular.module("firebase",[]).value("Firebase",Firebase),angular.module("firebase").factory("angularFire",["$q","$parse","$timeout",function(a,b,c){return function(d,e,f){var g=new AngularFire(a,b,c,d);return g.associate(e,f)}}]),AngularFire=function(a,b,c,d){if(this._q=a,this._parse=b,this._timeout=c,this._initial=!0,this._remoteValue=!1,"string"==typeof d)throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");this._fRef=d},AngularFire.prototype={associate:function(a,b){var c=this,d=this._q.defer(),e=d.promise;return this._fRef.on("value",function(e){var f=e.val(),g=angular.fromJson(angular.toJson(c._parse(b)(a)));if(c._initial){c._initial=!1;var h=!1,i=Object.prototype.toString;if(f&&i.call(g)==i.call(f))if("[object Array]"==i.call(g))h=g.concat(f),angular.equals(h,f)||(c._fRef.ref().set(h),f=h);else if("[object Object]"==i.call(g)){h=g;for(var j in f)h[j]=f[j];c._fRef.ref().update(h),f=h}null===f&&void 0!==g&&(c._fRef.ref().set(g),f=g)}var k=!1;d&&(k=d,d=!1),c._timeout(function(){c._resolve(a,b,k,f)})}),e},disassociate:function(){var a=this;a._unregister&&a._unregister(),this._fRef.off("value")},_resolve:function(a,b,c,d){var e=this;if(null===d){var f=a[b];if("object"==typeof f){var g=Object.prototype.toString;d=g.call(f)==g.call([])?[]:{}}}this._remoteValue=angular.copy(d),this._parse(b).assign(a,angular.copy(d)),c&&(c.resolve(function(){e.disassociate()}),this._watch(a,b))},_watch:function(a,b){var c=this;c._unregister=a.$watch(b,function(){if(!c._initial){var d=angular.fromJson(angular.toJson(c._parse(b)(a)));if(!angular.equals(d,c._remoteValue)){var e=Object.prototype.toString;"[object Object]"==e.call(d)?c._fRef.set?c._fRef.set(d):c._fRef.ref().update(d):c._fRef.ref().set(d)}}},!0),a.$on("$destroy",function(){c.disassociate()})},_log:function(a){console&&console.log&&console.log(a)}},angular.module("firebase").factory("angularFireCollection",["$timeout",function(a){return function(b,c){function d(a){return a?l[a]+1:0}function e(a,b){l[b.$id]=a,m.splice(a,0,b)}function f(a){var b=l[a];m.splice(b,1),l[a]=void 0}function g(a,b){m[a]=b}function h(a,b,c){m.splice(a,1),m.splice(b,0,c),i(a,b)}function i(a,b){var c=m.length;b=b||c,b>c&&(b=c);for(var d=a;b>d;d++){var e=m[d];e.$index=l[e.$id]=d}}if("string"==typeof b)throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");var j=function(a,b){this.$ref=a.ref(),this.$id=a.name(),this.$index=b,angular.extend(this,{$priority:a.getPriority()},a.val())},k=[function(a){return null==a.$priority?0:angular.isNumber(a.$priority)?1:angular.isString(a.$priority)?2:void 0},function(a){return a.$priority?a.$priority:1/0},function(a){return a.$id}],l={},m=[];return c&&"function"==typeof c&&b.once("value",c),b.on("child_added",function(b,c){a(function(){var a=d(c);e(a,new j(b,a)),i(a)})}),b.on("child_removed",function(b){a(function(){var a=b.name(),c=l[a];f(a),i(c)})}),b.on("child_changed",function(b,c){a(function(){var a=l[b.name()],e=d(c),f=new j(b,a);g(a,f),e!==a&&h(a,e,f)})}),b.on("child_moved",function(b,c){a(function(){var a=l[b.name()],e=d(c),f=m[a];h(a,e,f)})}),m.getByName=function(a){return m[l[a]]},m.getByNames=function(a){for(var b=[],c=0,d=a.length;d>c;c++)b.push(m[l[a[c]]]);return b},m.add=function(a,c){var d,e=angular.fromJson(angular.toJson(a));return d=c?b.ref().push(e,c):b.ref().push(e)},m.remove=function(a,b){var c=angular.isString(a)?m[l[a]]:a;b?c.$ref.remove(b):c.$ref.remove()},m.update=function(a,b){var c=angular.isString(a)?m[l[a]]:a,d=angular.fromJson(angular.toJson(c));b?c.$ref.update(d,b):c.$ref.update(d)},m.set=function(a,b){var c=angular.isString(a)?m[l[a]]:a,d=angular.fromJson(angular.toJson(c));b?c.$ref.set(d,b):c.$ref.set(d)},m.order=k,m}}]),angular.module("firebase").factory("angularFireAuth",["$rootScope","$parse","$timeout","$location","$route","$q",function(a,b,c,d,e,f){function g(a){var b=a.split(".");if(!b instanceof Array||3!==b.length)throw new Error("Invalid JWT");var c=b[1];return window.atob?JSON.parse(decodeURIComponent(escape(window.atob(c)))):a}function h(a,d,e,f){d&&c(function(){b(d).assign(a,e),f()})}function i(a,b,c){a.authRequired&&!c._authenticated&&(c._redirectTo=void 0===a.pathTo?d.path():a.pathTo===b?"/":a.pathTo,d.replace(),d.path(b))}return{initialize:function(b,c){var d=this;if("string"==typeof b)throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");if(c=c||{},this._scope=a,!c.scope)throw new Error("Scope not provided to angularFireAuth!");if(this._scope=c.scope,!c.name)throw new Error("Model name not provided to angularFireAuth!");if(this._name=c.name,this._cb=function(){},c.callback&&"function"==typeof c.callback&&(this._cb=c.callback),this._redirectTo=null,this._authenticated=!1,c.path&&(e.current&&i(e.current,c.path,d),a.$on("$routeChangeStart",function(a,b){i(b,c.path,d)})),this._ref=b,c.simple===!1)return h(this._scope,this._name,null,function(){}),void 0;if(!window.FirebaseSimpleLogin){var f=new Error("FirebaseSimpleLogin undefined, did you include firebase-simple-login.js?");return a.$broadcast("angularFireAuth:error",f),void 0}var g=new FirebaseSimpleLogin(this._ref,function(b,c){d._cb(b,c),b?a.$broadcast("angularFireAuth:error",b):c?d._loggedIn(c):d._loggedOut()});this._authClient=g},login:function(b,c){var d=this._watchForLogin();switch(b){case"github":case"persona":case"twitter":case"facebook":case"password":if(this._authClient)this._authClient.login(b,c);else{var e=new Error("Simple Login not initialized");a.$broadcast("angularFireAuth:error",e)}break;default:var f,h=this;try{f=g(b),this._ref.auth(b,function(b){b?a.$broadcast("angularFireAuth:error",b):h._loggedIn(f)})}catch(i){a.$broadcast("angularFireAuth:error",i)}}return d},createUser:function(b,d,e,f){var g=this;this._authClient.createUser(b,d,function(h,i){try{h?a.$broadcast("angularFireAuth:error",h):f||g.login("password",{email:b,password:d})}catch(j){a.$broadcast("angularFireAuth:error",j)}e&&c(function(){e(h,i)})})},logout:function(){this._authClient?this._authClient.logout():(this._ref.unauth(),this._loggedOut())},_loggedIn:function(b){var c=this;this._authenticated=!0,h(this._scope,this._name,b,function(){a.$broadcast("angularFireAuth:login",b),c._redirectTo&&(d.replace(),d.path(c._redirectTo),c._redirectTo=null)})},_loggedOut:function(){this._authenticated=!1,h(this._scope,this._name,null,function(){a.$broadcast("angularFireAuth:logout")})},_watchForLogin:function(){function b(a,b){c(function(){a?e.reject(a):e.resolve(b)});for(var f=0;f<d.length;f++)d[f]()}var d=[],e=f.defer();return d.push(a.$on("angularFireAuth:login",function(a,c){b(null,c)})),d.push(a.$on("angularFireAuth:error",function(a,c){b(c,null)})),e.promise}}}]),angular.module("ui.sortable",[]).value("uiSortableConfig",{}).directive("uiSortable",["uiSortableConfig",function(a){return{require:"?ngModel",link:function(b,c,d,e){var f,g,h,i,j;j=angular.extend({},a,b.$eval(d.uiSortable)),e&&(e.$render=function(){c.sortable("refresh")},h=function(a,b){b.item.sortable={index:b.item.index()}},i=function(a,b){b.item.sortable.resort=e},f=function(a,b){b.item.sortable.relocate=!0,e.$modelValue.splice(b.item.index(),0,b.item.sortable.moved)},g=function(a,b){b.item.sortable.moved=1===e.$modelValue.length?e.$modelValue.splice(0,1)[0]:e.$modelValue.splice(b.item.sortable.index,1)[0]},onStop=function(a,c){if(c.item.sortable.resort&&!c.item.sortable.relocate){var d,e;e=c.item.sortable.index,d=c.item.index(),c.item.sortable.resort.$modelValue.splice(d,0,c.item.sortable.resort.$modelValue.splice(e,1)[0])}(c.item.sortable.resort||c.item.sortable.relocate)&&b.$apply()},j.start=function(a){return function(b,c){h(b,c),"function"==typeof a&&a(b,c)}}(j.start),j.stop=function(a){return function(b,c){onStop(b,c),"function"==typeof a&&a(b,c)}}(j.stop),j.update=function(a){return function(b,c){i(b,c),"function"==typeof a&&a(b,c)}}(j.update),j.receive=function(a){return function(b,c){f(b,c),"function"==typeof a&&a(b,c)}}(j.receive),j.remove=function(a){return function(b,c){g(b,c),"function"==typeof a&&a(b,c)}}(j.remove)),c.sortable(j)}}}]);