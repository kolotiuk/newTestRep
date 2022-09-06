!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequired7c6=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("ke5Oc",(function(e,t){"use strict";var r=o("c4C4W"),n=o("lGmLA"),i=o("9jbh3"),a=o("knWMA");var s=function e(t){var o=new i(t),s=n(i.prototype.request,o);return r.extend(s,i.prototype,o),r.extend(s,o),s.create=function(r){return e(a(t,r))},s}(o("c74ni"));s.Axios=i,s.CanceledError=o("dW1zJ"),s.CancelToken=o("77MZz"),s.isCancel=o("lXDKh"),s.VERSION=o("kLR29").version,s.toFormData=o("12Kat"),s.AxiosError=o("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=o("9BdDr"),s.isAxiosError=o("kv87N"),e.exports=s,e.exports.default=s})),o.register("c4C4W",(function(e,t){"use strict";var r,n=o("lGmLA"),i=Object.prototype.toString,a=(r=Object.create(null),function(e){var t=i.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var f=s("ArrayBuffer");function l(e){return null!==e&&"object"==typeof e}function h(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var p=s("Date"),d=s("File"),v=s("Blob"),y=s("FileList");function g(e){return"[object Function]"===i.call(e)}var m=s("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var w,k=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return w&&e instanceof w});e.exports={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:l,isPlainObject:h,isUndefined:c,isDate:p,isFile:d,isBlob:v,isFunction:g,isStream:function(e){return l(e)&&g(e.pipe)},isURLSearchParams:m,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function r(r,n){h(t[n])&&h(r)?t[n]=e(t[n],r):h(r)?t[n]=e({},r):u(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)b(arguments[n],r);return t},extend:function(e,t,r){return b(t,(function(t,i){e[i]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,i,o,a={};t=t||{};do{for(i=(n=Object.getOwnPropertyNames(e)).length;i-- >0;)a[o=n[i]]||(t[o]=e[o],a[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:k,isFileList:y}})),o.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}})),o.register("9jbh3",(function(e,t){"use strict";var r=o("c4C4W"),n=o("6d5Pb"),i=o("JRZh2"),a=o("k04r0"),s=o("knWMA"),u=o("gYMA1"),c=o("9SeBc"),f=c.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var l=[a,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(u),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var h=t;n.length;){var p=n.shift(),d=n.shift();try{h=p(h)}catch(e){d(e);break}}try{o=a(h)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},l.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return n(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}l.prototype[e]=t(),l.prototype[e+"Form"]=t(!0)})),e.exports=l})),o.register("6d5Pb",(function(e,t){"use strict";var r=o("c4C4W");function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(n(t)+"="+n(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("JRZh2",(function(e,t){"use strict";var r=o("c4C4W");function n(){this.handlers=[]}n.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=n})),o.register("k04r0",(function(e,t){"use strict";var r=o("c4C4W"),n=o("jrAxF"),i=o("lXDKh"),a=o("c74ni"),s=o("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=n.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=n.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=n.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("jrAxF",(function(e,t){"use strict";var r=o("c4C4W"),n=o("c74ni");e.exports=function(e,t,i){var o=this||n;return r.forEach(i,(function(r){e=r.call(o,e,t)})),e}})),o.register("c74ni",(function(e,t){"use strict";var r=o("6qd2L"),n=o("c4C4W"),i=o("h8JMh"),a=o("5TB86"),s=o("gWbUy"),u=o("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function f(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var l,h={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==r&&"[object process]"===Object.prototype.toString.call(r))&&(l=o("btSY7")),l),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e))return e;if(n.isArrayBufferView(e))return e.buffer;if(n.isURLSearchParams(e))return f(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,o=n.isObject(e),a=t&&t["Content-Type"];if((r=n.isFileList(e))||o&&"multipart/form-data"===a){var s=this.env&&this.env.FormData;return u(r?{"files[]":e}:e,s&&new s)}return o||"application/json"===a?(f(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||h.transitional,r=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||i&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){h.headers[e]=n.merge(c)})),e.exports=h})),o.register("6qd2L",(function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,c=[],f=!1,l=-1;function h(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&p())}function p(){if(!f){var e=s(h);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||f||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("h8JMh",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e,t){r.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}})),o.register("5TB86",(function(e,t){"use strict";var r=o("c4C4W");function n(e,t,r,n,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}r.inherits(n,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=n.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(n,a),Object.defineProperty(i,"isAxiosError",{value:!0}),n.from=function(e,t,o,a,s,u){var c=Object.create(i);return r.toFlatObject(e,c,(function(e){return e!==Error.prototype})),n.call(c,e.message,t,o,a,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=n})),o.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("12Kat",(function(e,t){"use strict";var r=o("3aNd6").Buffer,n=o("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":n.isDate(e)?e.toISOString():n.isArrayBuffer(e)||n.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):r.from(e):e}return function e(r,a){if(n.isPlainObject(r)||n.isArray(r)){if(-1!==i.indexOf(r))throw Error("Circular reference detected in "+a);i.push(r),n.forEach(r,(function(r,i){if(!n.isUndefined(r)){var s,u=a?a+"."+i:i;if(r&&!a&&"object"==typeof r)if(n.endsWith(i,"{}"))r=JSON.stringify(r);else if(n.endsWith(i,"[]")&&(s=n.toArray(r)))return void s.forEach((function(e){!n.isUndefined(e)&&t.append(u,o(e))}));e(r,u)}})),i.pop()}else t.append(a,o(r))}(e),t}})),o.register("3aNd6",(function(r,n){t(r.exports,"Buffer",(function(){return i}),(function(e){return i=e})),t(r.exports,"INSPECT_MAX_BYTES",(function(){return a}),(function(e){return a=e}));var i,a,s=o("ds8z5"),u=o("8MBJY"),c=o("a2hTj"),f=o("eYQtU"),l=o("l5bVx"),h=o("2MbLg"),p=o("5d11t"),d=o("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=m,a=50;var y=2147483647;function g(e){if(e>y)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,m.prototype),t}function m(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return b(e,t,r)}function b(t,r,n){if("string"==typeof t)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!m.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=0|E(e,t),n=g(r),i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(t,r);if(ArrayBuffer.isView(t))return function(e){if(oe(e,Uint8Array)){var t=new Uint8Array(e);return I(t.buffer,t.byteOffset,t.byteLength)}return _(e)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":e(l)(t)));if(oe(t,ArrayBuffer)||t&&oe(t.buffer,ArrayBuffer))return I(t,r,n);if("undefined"!=typeof SharedArrayBuffer&&(oe(t,SharedArrayBuffer)||t&&oe(t.buffer,SharedArrayBuffer)))return I(t,r,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return m.from(i,r,n);var o=function(e){if(m.isBuffer(e)){var t=0|x(e.length),r=g(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||ae(e.length)?g(0):_(e);if("Buffer"===e.type&&Array.isArray(e.data))return _(e.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return m.from(t[Symbol.toPrimitive]("string"),r,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":e(l)(t)))}function w(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function k(e){return w(e),g(e<0?0:0|x(e))}function _(e){for(var t=e.length<0?0:0|x(e.length),r=g(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function I(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,m.prototype),n}function x(e){if(e>=y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+y.toString(16)+" bytes");return 0|e}function E(t,r){if(m.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||oe(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===t?"undefined":e(l)(t)));var n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return re(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ne(t).length;default:if(o)return i?-1:re(t).length;r=(""+r).toLowerCase(),o=!0}}function T(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,r);case"utf8":case"utf-8":return D(this,t,r);case"ascii":return B(this,t,r);case"latin1":case"binary":return j(this,t,r);case"base64":return M(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function O(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function S(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),ae(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=m.from(t,n)),m.isBuffer(t))return 0===t.length?-1:A(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):A(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function A(e,t,r,n,i){var o,a=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,u/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var f=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===f?0:o-f)){if(-1===f&&(f=o),o-f+1===u)return f*a}else-1!==f&&(o-=o-f),f=-1}else for(r+u>s&&(r=s-u),o=r;o>=0;o--){for(var l=!0,h=0;h<u;h++)if(c(e,o+h)!==c(t,h)){l=!1;break}if(l)return o}return-1}function R(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o,a=t.length;for(n>a/2&&(n=a/2),o=0;o<n;++o){var s=parseInt(t.substr(2*o,2),16);if(ae(s))return o;e[r+o]=s}return o}function C(e,t,r,n){return ie(re(t,e.length-r),e,r,n)}function N(e,t,r,n){return ie(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function P(e,t,r,n){return ie(ne(t),e,r,n)}function L(e,t,r,n){return ie(function(e,t){for(var r,n,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function M(e,t,r){return 0===t&&r===e.length?p.fromByteArray(e):p.fromByteArray(e.slice(t,r))}function D(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o=e[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s<=r){var u=void 0,c=void 0,f=void 0,l=void 0;switch(s){case 1:o<128&&(a=o);break;case 2:128==(192&(u=e[i+1]))&&(l=(31&o)<<6|63&u)>127&&(a=l);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(l=(15&o)<<12|(63&u)<<6|63&c)>2047&&(l<55296||l>57343)&&(a=l);break;case 4:u=e[i+1],c=e[i+2],f=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&f)&&(l=(15&o)<<18|(63&u)<<12|(63&c)<<6|63&f)>65535&&l<1114112&&(a=l)}}null===a?(a=65533,s=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=s}return function(e){var t=e.length;if(t<=U)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=U));return r}(n)}m.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),m.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(m.prototype,"parent",{enumerable:!0,get:function(){if(m.isBuffer(this))return this.buffer}}),Object.defineProperty(m.prototype,"offset",{enumerable:!0,get:function(){if(m.isBuffer(this))return this.byteOffset}}),m.poolSize=8192,m.from=function(e,t,r){return b(e,t,r)},Object.setPrototypeOf(m.prototype,Uint8Array.prototype),Object.setPrototypeOf(m,Uint8Array),m.alloc=function(e,t,r){return function(e,t,r){return w(e),e<=0?g(e):void 0!==t?"string"==typeof r?g(e).fill(t,r):g(e).fill(t):g(e)}(e,t,r)},m.allocUnsafe=function(e){return k(e)},m.allocUnsafeSlow=function(e){return k(e)},m.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==m.prototype},m.compare=function(e,t){if(oe(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),oe(t,Uint8Array)&&(t=m.from(t,t.offset,t.byteLength)),!m.isBuffer(e)||!m.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},m.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},m.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return m.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=m.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var o=e[r];if(oe(o,Uint8Array))i+o.length>n.length?(m.isBuffer(o)||(o=m.from(o)),o.copy(n,i)):Uint8Array.prototype.set.call(n,o,i);else{if(!m.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i)}i+=o.length}return n},m.byteLength=E,m.prototype._isBuffer=!0,m.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},m.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},m.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},m.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?D(this,0,e):T.apply(this,arguments)},m.prototype.toLocaleString=m.prototype.toString,m.prototype.equals=function(e){if(!m.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===m.compare(this,e)},m.prototype.inspect=function(){var e="",t=a;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(m.prototype[v]=m.prototype.inspect),m.prototype.compare=function(t,r,n,i,o){if(oe(t,Uint8Array)&&(t=m.from(t,t.offset,t.byteLength)),!m.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===t?"undefined":e(l)(t)));if(void 0===r&&(r=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),r<0||n>t.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&r>=n)return 0;if(i>=o)return-1;if(r>=n)return 1;if(this===t)return 0;for(var a=(o>>>=0)-(i>>>=0),s=(n>>>=0)-(r>>>=0),u=Math.min(a,s),c=this.slice(i,o),f=t.slice(r,n),h=0;h<u;++h)if(c[h]!==f[h]){a=c[h],s=f[h];break}return a<s?-1:s<a?1:0},m.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},m.prototype.indexOf=function(e,t,r){return S(this,e,t,r,!0)},m.prototype.lastIndexOf=function(e,t,r){return S(this,e,t,r,!1)},m.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return R(this,e,t,r);case"utf8":case"utf-8":return C(this,e,t,r);case"ascii":case"latin1":case"binary":return N(this,e,t,r);case"base64":return P(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function B(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function j(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function F(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=se[e[o]];return i}function W(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length-1;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function V(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function z(e,t,r,n,i,o){if(!m.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function H(e,t,r,n,i){$(t,n,i,e,r,7);var o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function q(e,t,r,n,i){$(t,n,i,e,r,7);var o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function J(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function G(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,4),d.write(e,t,r,n,23,4),r+4}function K(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,8),d.write(e,t,r,n,52,8),r+8}m.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,m.prototype),n},m.prototype.readUintLE=m.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||V(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},m.prototype.readUintBE=m.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||V(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},m.prototype.readUint8=m.prototype.readUInt8=function(e,t){return e>>>=0,t||V(e,1,this.length),this[e]},m.prototype.readUint16LE=m.prototype.readUInt16LE=function(e,t){return e>>>=0,t||V(e,2,this.length),this[e]|this[e+1]<<8},m.prototype.readUint16BE=m.prototype.readUInt16BE=function(e,t){return e>>>=0,t||V(e,2,this.length),this[e]<<8|this[e+1]},m.prototype.readUint32LE=m.prototype.readUInt32LE=function(e,t){return e>>>=0,t||V(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},m.prototype.readUint32BE=m.prototype.readUInt32BE=function(e,t){return e>>>=0,t||V(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},m.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+r*Math.pow(2,24);return BigInt(n)+(BigInt(i)<<BigInt(32))})),m.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),m.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||V(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},m.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||V(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},m.prototype.readInt8=function(e,t){return e>>>=0,t||V(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},m.prototype.readInt16LE=function(e,t){e>>>=0,t||V(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},m.prototype.readInt16BE=function(e,t){e>>>=0,t||V(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},m.prototype.readInt32LE=function(e,t){return e>>>=0,t||V(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},m.prototype.readInt32BE=function(e,t){return e>>>=0,t||V(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},m.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),m.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r)})),m.prototype.readFloatLE=function(e,t){return e>>>=0,t||V(e,4,this.length),d.read(this,e,!0,23,4)},m.prototype.readFloatBE=function(e,t){return e>>>=0,t||V(e,4,this.length),d.read(this,e,!1,23,4)},m.prototype.readDoubleLE=function(e,t){return e>>>=0,t||V(e,8,this.length),d.read(this,e,!0,52,8)},m.prototype.readDoubleBE=function(e,t){return e>>>=0,t||V(e,8,this.length),d.read(this,e,!1,52,8)},m.prototype.writeUintLE=m.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||z(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},m.prototype.writeUintBE=m.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||z(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},m.prototype.writeUint8=m.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||z(this,e,t,1,255,0),this[t]=255&e,t+1},m.prototype.writeUint16LE=m.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||z(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},m.prototype.writeUint16BE=m.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||z(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},m.prototype.writeUint32LE=m.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||z(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},m.prototype.writeUint32BE=m.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||z(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},m.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),m.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),m.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);z(this,e,t,r,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<r&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},m.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);z(this,e,t,r,i-1,-i)}var o=r-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},m.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||z(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},m.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||z(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},m.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||z(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},m.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||z(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},m.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||z(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},m.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),m.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),m.prototype.writeFloatLE=function(e,t,r){return G(this,e,t,!0,r)},m.prototype.writeFloatBE=function(e,t,r){return G(this,e,t,!1,r)},m.prototype.writeDoubleLE=function(e,t,r){return K(this,e,t,!0,r)},m.prototype.writeDoubleBE=function(e,t,r){return K(this,e,t,!1,r)},m.prototype.copy=function(e,t,r,n){if(!m.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},m.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!m.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var a=m.isBuffer(e)?e:m.from(e,n),s=a.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=a[o%s]}return this};var Y={};function X(t,r,n){Y[t]=function(n){e(f)(o,n);var i=e(h)(o);function o(){var n;return e(u)(this,o),n=i.call(this),Object.defineProperty(e(s)(n),"message",{value:r.apply(e(s)(n),arguments),writable:!0,configurable:!0}),n.name="".concat(n.name," [").concat(t,"]"),n.stack,delete n.name,n}return e(c)(o,[{key:"code",get:function(){return t},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(t,"]: ").concat(this.message)}}]),o}(n)}function Q(e){for(var t="",r=e.length,n="-"===e[0]?1:0;r>=n+4;r-=3)t="_".concat(e.slice(r-3,r)).concat(t);return"".concat(e.slice(0,r)).concat(t)}function $(t,r,n,i,o,a){if(t>n||t<r){var s,u="bigint"===(void 0===r?"undefined":e(l)(r))?"n":"";throw s=a>3?0===r||r===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(a+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(a+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(a+1)-1).concat(u):">= ".concat(r).concat(u," and <= ").concat(n).concat(u),new Y.ERR_OUT_OF_RANGE("value",s,t)}!function(e,t,r){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||ee(t,e.length-(r+1))}(i,o,a)}function Z(e,t){if("number"!=typeof e)throw new Y.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,r){if(Math.floor(e)!==e)throw Z(e,r),new Y.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;throw new Y.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(t),e)}X("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),X("ERR_INVALID_ARG_TYPE",(function(t,r){return'The "'.concat(t,'" argument must be of type number. Received type ').concat(void 0===r?"undefined":e(l)(r))}),TypeError),X("ERR_OUT_OF_RANGE",(function(t,r,n){var i='The value of "'.concat(t,'" is out of range.'),o=n;return Number.isInteger(n)&&Math.abs(n)>Math.pow(2,32)?o=Q(String(n)):"bigint"===(void 0===n?"undefined":e(l)(n))&&(o=String(n),(n>Math.pow(BigInt(2),BigInt(32))||n<-Math.pow(BigInt(2),BigInt(32)))&&(o=Q(o)),o+="n"),i+=" It must be ".concat(r,". Received ").concat(o)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function re(e,t){var r;t=t||1/0;for(var n=e.length,i=null,o=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function ne(e){return p.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,r,n){var i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function oe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ae(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),o.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=o("gD1JV"))&&r.__esModule?r:{default:r}})),o.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,o=n.default(e);if(t){var a=n.default(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return i.default(this,r)}};var r=a(o("aTHs7")),n=a(o("fVNic")),i=a(o("jmhxu"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(o("ds8z5")),n=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("5d11t",(function(e,r){var n,i;t(e.exports,"toByteArray",(function(){return n}),(function(e){return n=e})),t(e.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),n=function(e){var t,r,n=l(e),i=n[0],o=n[1],u=new s(function(e,t,r){return 3*(t+r)/4-r}(0,i,o)),c=0,f=o>0?i-4:i;for(r=0;r<f;r+=4)t=a[e.charCodeAt(r)]<<18|a[e.charCodeAt(r+1)]<<12|a[e.charCodeAt(r+2)]<<6|a[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=a[e.charCodeAt(r)]<<2|a[e.charCodeAt(r+1)]>>4,u[c++]=255&t);1===o&&(t=a[e.charCodeAt(r)]<<10|a[e.charCodeAt(r+1)]<<4|a[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,r=e.length,n=r%3,i=[],a=16383,s=0,u=r-n;s<u;s+=a)i.push(h(e,s,s+a>u?u:s+a));1===n?(t=e[r-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,f=u.length;c<f;++c)o[c]=u[c],a[u.charCodeAt(c)]=c;function l(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function h(e,t,r){for(var n,i,a=[],s=t;s<r;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(o[(i=n)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return a.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63})),o.register("7rddL",(function(e,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var n,i;t(e.exports,"read",(function(){return n}),(function(e){return n=e})),t(e.exports,"write",(function(){return i}),(function(e){return i=e})),n=function(e,t,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,c=u>>1,f=-7,l=r?i-1:0,h=r?-1:1,p=e[t+l];for(l+=h,o=p&(1<<-f)-1,p>>=-f,f+=s;f>0;o=256*o+e[t+l],l+=h,f-=8);for(a=o&(1<<-f)-1,o>>=-f,f+=n;f>0;a=256*a+e[t+l],l+=h,f-=8);if(0===o)o=1-c;else{if(o===u)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=c}return(p?-1:1)*a*Math.pow(2,o-n)},i=function(e,t,r,n,i,o){var a,s,u,c=8*o-i-1,f=(1<<c)-1,l=f>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=f):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+l>=1?h/u:h*Math.pow(2,1-l))*u>=2&&(a++,u/=2),a+l>=f?(s=0,a=f):a+l>=1?(s=(t*u-1)*Math.pow(2,i),a+=l):(s=t*Math.pow(2,l-1)*Math.pow(2,i),a=0));i>=8;e[r+p]=255&s,p+=d,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[r+p]=255&a,p+=d,a/=256,c-=8);e[r+p-d]|=128*v}})),o.register("btSY7",(function(e,t){"use strict";var r=o("c4C4W"),n=o("j97bH"),i=o("jFG8L"),a=o("6d5Pb"),s=o("gYMA1"),u=o("1nUSP"),c=o("9jFfm"),f=o("gWbUy"),l=o("5TB86"),h=o("dW1zJ"),p=o("4ULKu");e.exports=function(e){return new Promise((function(t,o){var d,v=e.data,y=e.headers,g=e.responseType;function m(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}r.isFormData(v)&&r.isStandardBrowserEnv()&&delete y["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",k=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";y.Authorization="Basic "+btoa(w+":"+k)}var _=s(e.baseURL,e.url);function I(){if(b){var r="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:r,config:e,request:b};n((function(e){t(e),m()}),(function(e){o(e),m()}),i),b=null}}if(b.open(e.method.toUpperCase(),a(_,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=I:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(I)},b.onabort=function(){b&&(o(new l("Request aborted",l.ECONNABORTED,e,b)),b=null)},b.onerror=function(){o(new l("Network Error",l.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||f;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new l(t,r.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,b)),b=null},r.isStandardBrowserEnv()){var x=(e.withCredentials||c(_))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;x&&(y[e.xsrfHeaderName]=x)}"setRequestHeader"in b&&r.forEach(y,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete y[t]:b.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),g&&"json"!==g&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){b&&(o(!e||e&&e.type?new h:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),v||(v=null);var E=p(_);E&&-1===["http","https","file"].indexOf(E)?o(new l("Unsupported protocol "+E+":",l.ERR_BAD_REQUEST,e)):b.send(v)}))}})),o.register("j97bH",(function(e,t){"use strict";var r=o("5TB86");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),o.register("jFG8L",(function(e,t){"use strict";var r=o("c4C4W");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("gYMA1",(function(e,t){"use strict";var r=o("7xjuH"),n=o("ftRZn");e.exports=function(e,t){return e&&!r(t)?n(e,t):t}})),o.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("1nUSP",(function(e,t){"use strict";var r=o("c4C4W"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),i=r.trim(e.substr(o+1)),t){if(a[t]&&n.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([i]):a[t]?a[t]+", "+i:i}})),a):a}})),o.register("9jFfm",(function(e,t){"use strict";var r=o("c4C4W");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}})),o.register("dW1zJ",(function(e,t){"use strict";var r=o("5TB86");function n(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}o("c4C4W").inherits(n,r,{__CANCEL__:!0}),e.exports=n})),o.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("beknR",(function(e,t){e.exports=null})),o.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("knWMA",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function u(r){return r in t?i(e[r],t[r]):r in e?i(void 0,e[r]):void 0}var c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);r.isUndefined(i)&&t!==u||(n[e]=i)})),n}})),o.register("9SeBc",(function(t,r){var n=o("l5bVx"),i=o("kLR29").version,a=o("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(t,r){s[t]=function(i){return(void 0===i?"undefined":e(n)(i))===t||"a"+(r<1?"n ":" ")+t}}));var u={};s.transitional=function(e,t,r){function n(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,o){if(!1===e)throw new a(n(i," has been removed"+(t?" in "+t:"")),a.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,o)}},t.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new a("options must be an object",a.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),i=n.length;i-- >0;){var o=n[i],s=t[o];if(s){var u=e[o],c=void 0===u||s(u,o,e);if(!0!==c)throw new a("option "+o+" must be "+c,a.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new a("Unknown option "+o,a.ERR_BAD_OPTION)}},validators:s}})),o.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),o.register("77MZz",(function(e,t){"use strict";var r=o("dW1zJ");function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},n.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},n.source=function(){var e;return{token:new n((function(t){e=t})),cancel:e}},e.exports=n})),o.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("kv87N",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return a.apply(null,arguments)};var r,n=(r=o("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,r){return(a=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return r&&n.default(o,r.prototype),o}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=o("fVNic"))&&r.__esModule?r:{default:r}}));var a={};function s(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){s(o,n,i,a,u,"next",e)}function u(e){s(o,n,i,a,u,"throw",e)}a(void 0)}))}};var u=o("8MBJY"),c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){var r=f.default(e,t,"get");return l.default(e,r)};var f=h(o("1UHsN")),l=h(o("ffZzF"));function h(e){return e&&e.__esModule?e:{default:e}}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,r){v.default(e,t),t.set(e,r)};var d,v=(d=o("5k7tO"))&&d.__esModule?d:{default:d};var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,r){var n=g.default(e,t,"set");return m.default(e,n,r),r};var g=b(o("1UHsN")),m=b(o("jdVyQ"));function b(e){return e&&e.__esModule?e:{default:e}}var w=o("a2hTj"),k=o("hKHmD"),_={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){I.default(e,t,r[t])}))}return e};var I=function(e){return e&&e.__esModule?e:{default:e}}(o("hKHmD"));var x={},E=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,o=Object.create(i.prototype),a=new S(n||[]);return o._invoke=function(e,t,r){var n=l;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return R()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(e,t,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(e,r,a),o}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var b={};u(b,o,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(A([])));k&&k!==r&&n.call(k,o)&&(b=k);var _=m.prototype=y.prototype=Object.create(b);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(i,o,a,s){var u=f(e[i],e,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(l).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=f(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:R}}function R(){return{value:t,done:!0}}return g.prototype=m,u(_,"constructor",m),u(m,"constructor",g),g.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},I(x.prototype),u(x.prototype,a,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new x(c(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(_),u(_,s,"Generator"),u(_,o,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(x);try{regeneratorRuntime=E}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=E:Function("r","regeneratorRuntime = r")(E)}var T;T=o("ke5Oc");var O,S=document.querySelector(".loadingSpinner"),A=document.querySelector(".backdrop");function R(){return(R=e(a)(e(x).mark((function t(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.style.display="block",C();case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function C(){A.classList.toggle("is-hidden")}O={startSpinner:function(){return R.apply(this,arguments)},hideLoader:function(){C(),S.style.display="none"}},e(T).defaults.baseURL="https://api.themoviedb.org/3";var N="886a5e80a67d15e1eb52e12b03d8c581",P=new WeakMap,L=new WeakMap,M=new WeakMap,D=function(){"use strict";function t(){e(u)(this,t),e(p)(this,P,{writable:!0,value:""}),e(p)(this,L,{writable:!0,value:1}),e(p)(this,M,{writable:!0,value:{params:{api_key:N}}})}return e(w)(t,[{key:"fetchMovies",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n;return e(x).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,O.startSpinner)();case 2:return r.next=4,e(T).get("/trending/movie/day?page=".concat(e(c)(t,L)),e(c)(t,M));case 4:return n=r.sent.data,(0,O.hideLoader)(),r.abrupt("return",n);case 7:case"end":return r.stop()}}),r)})))()}},{key:"fetchSearchMovies",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(T).get("/search/movie?api_key=".concat(N,"&page=").concat(t,"&query=").concat(e(c)(r,P)));case 2:return i=n.sent.data,n.abrupt("return",i);case 4:case"end":return n.stop()}}),n)})))()}},{key:"fetchDetails",value:function(t){return e(a)(e(x).mark((function r(){var n;return e(x).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e(T).get("/movie/".concat(t,"?api_key=").concat(N));case 2:return n=r.sent.data,r.abrupt("return",n);case 4:case"end":return r.stop()}}),r)})))()}},{key:"fetchGenres",value:function(){return e(a)(e(x).mark((function t(){var r,n;return e(x).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(T).get("/genre/movie/list?",{params:{api_key:N}});case 2:r=t.sent,n=r.data.genres.reduce((function(t,r){return e(_)({},t,e(k)({},r.id,r.name))}),{}),localStorage.setItem("genres",JSON.stringify(n));case 5:case"end":return t.stop()}}),t)})))()}},{key:"query",get:function(){return e(c)(this,P)},set:function(t){e(y)(this,P,t)}},{key:"incrementPage",value:function(){e(y)(this,L,e(c)(this,L)+1)}},{key:"resetPage",value:function(){e(y)(this,L,1)}}]),t}(),U={};Object.defineProperty(U,"__esModule",{value:!0}),U.default=function(e,t){return B.default(e)||j.default(e,t)||W.default(e,t)||F.default()};var B=V(o("8slrw")),j=V(o("7AJDX")),F=V(o("ifqQW")),W=V(o("auk6i"));function V(e){return e&&e.__esModule?e:{default:e}}var z=new D,H=new IntersectionObserver((function(t,r){var n=e(U)(t,1)[0];n.isIntersecting&&(r.unobserve(n.target),function(){J.apply(this,arguments)}())}),{threshold:.7}),q=H;function J(){return(J=e(a)(e(x).mark((function t(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z.incrementPage(),e.prev=1,e.next=4,z.fetchMovies();case 4:X(e.sent.results),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}var G=document.querySelector(".movie-cards__list"),K=localStorage.getItem("genres"),Y=JSON.parse(K);function X(e){var t=e.map((function(e){var t=e.id,r=e.poster_path,n=e.genre_ids,i=e.original_language,o=e.vote_average,a=e.title,s=e.release_date,u=n.filter((function(e){return Y[e]})).map((function(e){return Y[e]})).join(", ")||"Genres are not specified",c=r?"https://image.tmdb.org/t/p/w500".concat(r):"https://cdn.pixabay.com/photo/2015/02/22/17/56/loading-645268_960_720.jpg";return'\n    <li class="movie-card__item" data-id="'.concat(t,'">\n      <div class="movie-card">\n        <img class="movies__img" src="').concat(c,'" alt="').concat(a,'">\n        <h2 class="movie-info-title">').concat(a,'</h2>\n        <div class="movie-card__description">\n          <div class="movie-info-list">\n            <p class="info-item">').concat(u,'</p>\n            <span>&#127871;</span>\n            <p class="info-item-year">').concat(null==s?void 0:s.slice(0,4),'</p>\n          </div>\n          <div class="language-rating">\n            <span class="info-item-language"> ').concat(i.toUpperCase(),'</span>\n            <p class="info-item-rating"><span>&#9733;</span> ').concat(o.toFixed(1),"</p>\n          </div>\n        </div>\n      </div>\n    </li>")})).join("");G.insertAdjacentHTML("beforeend",t);var r=document.querySelector(".movie-card__item:last-child");r&&q.observe(r)}var Q=new D;function $(){return($=e(a)(e(x).mark((function t(){var r,n;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.fetchMovies(1);case 3:r=e.sent.results,(n=document.querySelector(".movie-card__item:last-child"))&&q.observe(n),X(r),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function Z(){(Z=document.querySelector(".year")).innerHTML=(new Date).getFullYear()}!function(){$.apply(this,arguments)}(),Q.fetchGenres(),Z();var ee={header:document.querySelector(".header"),homeBtn:document.querySelector(".header__home-link"),libraryBtn:document.querySelector(".header__library-link"),form:document.querySelector("#search-form"),libr:document.querySelector(".library"),watchBtn:document.querySelector(".watch__btn"),queueBtn:document.querySelector(".queue__btn"),contactBtn:document.querySelector(".header__contact-link"),signUpBtn:document.querySelector(".header__singup-link"),gallery:document.querySelector(".movie-cards__list")};ee.homeBtn.addEventListener("click",(function(){ee.libr.classList.add("is-hidden"),ee.form.classList.remove("is-hidden"),ee.homeBtn.classList.add("current"),ee.libraryBtn.classList.remove("current"),ee.header.classList.remove("header__is-active")})),ee.libraryBtn.addEventListener("click",(function(){ee.form.classList.add("is-hidden"),ee.libr.classList.remove("is-hidden"),ee.libraryBtn.classList.add("current"),ee.homeBtn.classList.remove("current"),ee.header.classList.add("header__is-active")})),ee.queueBtn.addEventListener("click",(function(){ee.watchBtn.classList.remove("btn-js-active "),ee.queueBtn.classList.add("btn-js-active ")})),ee.watchBtn.addEventListener("click",(function(){ee.queueBtn.classList.remove("btn-js-active"),ee.watchBtn.classList.add("btn-js-active ")})),document.querySelector(".theme__container").addEventListener("click",(function(){document.querySelector(".sun-logo").classList.toggle("animate-sun"),document.querySelector(".moon-logo").classList.toggle("animate-moon"),document.querySelector("body").classList.toggle("dark")}));u=o("8MBJY"),w=o("a2hTj"),k=o("hKHmD");var te={};Object.defineProperty(te,"__esModule",{value:!0}),te.default=function(e){return re.default(e)||ne.default(e)||oe.default(e)||ie.default()};var re=ae(o("kMC0W")),ne=ae(o("7AJDX")),ie=ae(o("8CtQK")),oe=ae(o("auk6i"));function ae(e){return e&&e.__esModule?e:{default:e}}u=o("8MBJY"),w=o("a2hTj");var se=o("ds8z5"),ue=(u=o("8MBJY"),w=o("a2hTj"),o("eYQtU")),ce={};Object.defineProperty(ce,"__esModule",{value:!0}),ce.default=function(e){return ve(e)};var fe=de(o("ge8co")),le=de(o("cZGw3")),he=de(o("fVNic")),pe=de(o("gD1JV"));function de(e){return e&&e.__esModule?e:{default:e}}function ve(e){var t="function"==typeof Map?new Map:void 0;return ve=function(e){if(null===e||!le.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return fe.default(e,arguments,he.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),pe.default(r,e)},ve(e)}var ye=o("2MbLg"),ge=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},me={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,f=o>>2,l=(3&o)<<4|s>>4,h=(15&s)<<2|c>>6,p=63&c;u||(p=64,a||(h=64)),n.push(r[f],r[l],r[h],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ge(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var o=r[e.charAt(i++)],a=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(n.push(c),64!==s){var f=a<<4&240|s>>2;if(n.push(f),64!==u){var l=s<<6&192|u;n.push(l)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},be=function(e){return function(e){var t=ge(e);return me.encodeByteArray(t,!0)}(e).replace(/\./g,"")},we=function(e){try{return me.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ke=function(){"use strict";function t(){var r=this;e(u)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(w)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ie=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(t,i,o){var a;return e(u)(this,n),(a=r.call(this,i)).code=t,a.customData=o,a.name="FirebaseError",Object.setPrototypeOf(e(se)(a),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(se)(a),xe.prototype.create),a}return n}(e(ce)(Error)),xe=function(){"use strict";function t(r,n,i){e(u)(this,t),this.service=r,this.serviceName=n,this.errors=i}return e(w)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?Ee(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new Ie(o,u,i);return c}}]),t}();function Ee(e,t){return e.replace(Te,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var Te=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var f=e[c],l=t[c];if(Se(f)&&Se(l)){if(!Oe(f,l))return!1}else if(f!==l)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var h=!0,p=!1,d=void 0;try{for(var v,y=n[Symbol.iterator]();!(h=(v=y.next()).done);h=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){p=!0,d=e}finally{try{h||null==y.return||y.return()}finally{if(p)throw d}}return!0}function Se(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ae(t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=function(t,n){var i=e(U)(n.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){r.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(t)[Symbol.iterator]();!(n=(a=u.next()).done);n=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r.length?"&"+r.join("&"):""}function Re(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=e(U)(t.split("="),2),i=n[0],o=n[1];r[decodeURIComponent(i)]=decodeURIComponent(o)}})),r}function Ce(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne=function(){"use strict";function t(r,n){var i=this;e(u)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return e(w)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=Pe),void 0===n.error&&(n.error=Pe),void 0===n.complete&&(n.complete=Pe);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Pe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(e){return e&&e._delegate?e._delegate:e}var Me=function(){"use strict";function t(r,n,i){e(u)(this,t),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(w)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),De="[DEFAULT]",Ue=function(){"use strict";function t(r,n){e(u)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(w)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new ke;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:De})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=e(U)(o.value,2),u=s[0],c=s[1],f=this.normalizeInstanceIdentifier(u);try{var l=this.getOrInitializeService({instanceIdentifier:f});c.resolve(l)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n;return e(x).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(te)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(te)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:n}),a=!0,s=!1,u=void 0;try{for(var c,f=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(c=f.next()).done);a=!0){var l=e(U)(c.value,2),h=l[0],p=l[1],d=this.normalizeInstanceIdentifier(h);i===d&&p.resolve(o)}}catch(e){s=!0,u=e}finally{try{a||null==f.return||f.return()}finally{if(s)throw u}}return o}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var o=this.instances.get(n);return o&&e(o,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,o=void 0;try{for(var a,s=r[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,o=this.instances.get(r);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===De?void 0:t),options:i}),this.instances.set(r,o),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(o,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return this.component?this.component.multipleInstances?e:De:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,je,Fe=function(){"use strict";function t(r){e(u)(this,t),this.name=r,this.providers=new Map}return e(w)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ue(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),We=(u=o("8MBJY"),w=o("a2hTj"),k=o("hKHmD"),[]);(je=Be||(Be={}))[je.DEBUG=0]="DEBUG",je[je.VERBOSE=1]="VERBOSE",je[je.INFO=2]="INFO",je[je.WARN=3]="WARN",je[je.ERROR=4]="ERROR",je[je.SILENT=5]="SILENT";var Ve,ze={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},He=Be.INFO,qe=(Ve={},e(k)(Ve,Be.DEBUG,"log"),e(k)(Ve,Be.VERBOSE,"log"),e(k)(Ve,Be.INFO,"info"),e(k)(Ve,Be.WARN,"warn"),e(k)(Ve,Be.ERROR,"error"),Ve),Je=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var a;if(!(r<t.logLevel)){var s=(new Date).toISOString(),u=qe[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(t.name,":")].concat(e(te)(i)))}},Ge=function(){"use strict";function t(r){e(u)(this,t),this.name=r,this._logLevel=He,this._logHandler=Je,this._userLogHandler=null,We.push(this)}return e(w)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Be))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?ze[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Be.DEBUG].concat(e(te)(r))),this._logHandler.apply(this,[this,Be.DEBUG].concat(e(te)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Be.VERBOSE].concat(e(te)(r))),this._logHandler.apply(this,[this,Be.VERBOSE].concat(e(te)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Be.INFO].concat(e(te)(r))),this._logHandler.apply(this,[this,Be.INFO].concat(e(te)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Be.WARN].concat(e(te)(r))),this._logHandler.apply(this,[this,Be.WARN].concat(e(te)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Be.ERROR].concat(e(te)(r))),this._logHandler.apply(this,[this,Be.ERROR].concat(e(te)(r)))}}]),t}();var Ke,Ye;var Xe=new WeakMap,Qe=new WeakMap,$e=new WeakMap,Ze=new WeakMap,et=new WeakMap;var tt={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Qe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$e.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return it(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function rt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ye||(Ye=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(ot(this),r),it(Xe.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return it(t.apply(ot(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var a,s=(a=t).call.apply(a,[ot(this),r].concat(e(te)(i)));return $e.set(s,r.sort?r.sort():[r]),it(s)}}function nt(e){return"function"==typeof e?rt(e):(e instanceof IDBTransaction&&function(e){if(!Qe.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),n()},o=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));Qe.set(e,t)}}(e),t=e,(Ke||(Ke=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,tt):e);var t}function it(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(it(t.result)),n()},o=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&Xe.set(e,t)})).catch((function(){})),et.set(r,t),r;var t,r;if(Ze.has(e))return Ze.get(e);var n=nt(e);return n!==e&&(Ze.set(e,n),et.set(n,e)),n}var ot=function(e){return et.get(e)};function at(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,o=r.blocking,a=r.terminated,s=indexedDB.open(e,t),u=it(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(it(s.result),e.oldVersion,e.newVersion,it(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var st=["get","getKey","getAll","getAllKeys","count"],ut=["put","add","delete","clear"],ct=new Map;function ft(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(ct.get(r))return ct.get(r);var n=r.replace(/FromIndex$/,""),i=r!==n,o=ut.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(o||st.includes(n))){var s,u=(s=e(a)(e(x).mark((function t(r){var a,s,u,c,f,l,h=arguments;return e(x).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=h.length,s=new Array(a>1?a-1:0),u=1;u<a;u++)s[u-1]=h[u];return f=this.transaction(r,o?"readwrite":"readonly"),l=f.store,i&&(l=l.index(s.shift())),t.next=7,Promise.all([(c=l)[n].apply(c,e(te)(s)),o&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return s.apply(this,arguments)});return ct.set(r,u),u}}}tt=function(t){return e(_)({},t,{get:function(e,r,n){return ft(e,r)||t.get(e,r,n)},has:function(e,r){return!!ft(e,r)||t.has(e,r)}})}(tt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var lt=function(){"use strict";function t(r){e(u)(this,t),this.container=r}return e(w)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var ht,pt,dt="@firebase/app",vt="0.7.32",yt=new Ge("@firebase/app"),gt="[DEFAULT]",mt=(ht={},e(k)(ht,dt,"fire-core"),e(k)(ht,"@firebase/app-compat","fire-core-compat"),e(k)(ht,"@firebase/analytics","fire-analytics"),e(k)(ht,"@firebase/analytics-compat","fire-analytics-compat"),e(k)(ht,"@firebase/app-check","fire-app-check"),e(k)(ht,"@firebase/app-check-compat","fire-app-check-compat"),e(k)(ht,"@firebase/auth","fire-auth"),e(k)(ht,"@firebase/auth-compat","fire-auth-compat"),e(k)(ht,"@firebase/database","fire-rtdb"),e(k)(ht,"@firebase/database-compat","fire-rtdb-compat"),e(k)(ht,"@firebase/functions","fire-fn"),e(k)(ht,"@firebase/functions-compat","fire-fn-compat"),e(k)(ht,"@firebase/installations","fire-iid"),e(k)(ht,"@firebase/installations-compat","fire-iid-compat"),e(k)(ht,"@firebase/messaging","fire-fcm"),e(k)(ht,"@firebase/messaging-compat","fire-fcm-compat"),e(k)(ht,"@firebase/performance","fire-perf"),e(k)(ht,"@firebase/performance-compat","fire-perf-compat"),e(k)(ht,"@firebase/remote-config","fire-rc"),e(k)(ht,"@firebase/remote-config-compat","fire-rc-compat"),e(k)(ht,"@firebase/storage","fire-gcs"),e(k)(ht,"@firebase/storage-compat","fire-gcs-compat"),e(k)(ht,"@firebase/firestore","fire-fst"),e(k)(ht,"@firebase/firestore-compat","fire-fst-compat"),e(k)(ht,"fire-js","fire-js"),e(k)(ht,"firebase","fire-js-all"),ht),bt=new Map,wt=new Map;function kt(e,t){try{e.container.addComponent(t)}catch(r){yt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function _t(e){var t=e.name;if(wt.has(t))return yt.debug("There were multiple attempts to register component ".concat(t,".")),!1;wt.set(t,e);var r=!0,n=!1,i=void 0;try{for(var o,a=bt.values()[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){kt(o.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var It=(pt={},e(k)(pt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(k)(pt,"bad-app-name","Illegal App name: '{$appName}"),e(k)(pt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(k)(pt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(k)(pt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(k)(pt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(k)(pt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(k)(pt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(k)(pt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(k)(pt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),pt),xt=new xe("app","Firebase",It),Et=function(){"use strict";function t(r,n,i){var o=this;e(u)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Me("app",(function(){return o}),"PUBLIC"))}return e(w)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}]),t}(),Tt="9.9.4";function Ot(e,t,r){var n,i=null!==(n=mt[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void yt.warn(s.join(" "))}_t(new Me("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var St="firebase-heartbeat-store",At=null;function Rt(){return At||(At=at("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(St)}}).catch((function(e){throw xt.create("idb-open",{originalErrorMessage:e.message})}))),At}function Ct(e){return Nt.apply(this,arguments)}function Nt(){return(Nt=e(a)(e(x).mark((function t(r){var n,i,o;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Rt();case 4:return i=e.sent,e.abrupt("return",i.transaction(St).objectStore(St).get(Mt(r)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof Ie?yt.warn(e.t0.message):(o=xt.create("idb-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message}),yt.warn(o.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Pt(e,t){return Lt.apply(this,arguments)}function Lt(){return(Lt=e(a)(e(x).mark((function t(r,n){var i,o,a,s,u;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Rt();case 4:return o=e.sent,a=o.transaction(St,"readwrite"),s=a.objectStore(St),e.next=9,s.put(n,Mt(r));case 9:return e.abrupt("return",a.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof Ie?yt.warn(e.t0.message):(u=xt.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),yt.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Mt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt=function(){"use strict";function t(r){var n=this;e(u)(this,t),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Ft(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(w)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n,i,o;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),o=Ut(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==o&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n,i,o,a,s;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=Ut(),i=Bt(t._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=be(JSON.stringify({version:2,heartbeats:o})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(a.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=a,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function Ut(){return(new Date).toISOString().substring(0,10)}function Bt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=r.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),Wt(r)>t)return a.dates.pop(),"break"}else if(r.push({agent:o.agent,dates:[o.date]}),Wt(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var f=u(c,s);if("break"===f)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:r,unsentEntries:n}}var jt,Ft=function(){"use strict";function t(r){e(u)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(w)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(x).mark((function t(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Ct(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i,o;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return o=e.sent,e.abrupt("return",Pt(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i,o;return e(x).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return o=n.sent,n.abrupt("return",Pt(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e(te)(o.heartbeats).concat(e(te)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function Wt(e){return be(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt="",_t(new Me("platform-logger",(function(e){return new lt(e)}),"PRIVATE")),_t(new Me("heartbeat",(function(e){return new Dt(e)}),"PRIVATE")),Ot(dt,vt,jt),Ot(dt,vt,"esm2017"),Ot("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ot("firebase","9.9.4","app");se=o("ds8z5"),u=o("8MBJY"),w=o("a2hTj"),k=o("hKHmD");var Vt={};Object.defineProperty(Vt,"__esModule",{value:!0}),Vt.default=function(e,t,r){return Ht(e,t,r)};var zt=function(e){return e&&e.__esModule?e:{default:e}}(o("2mz0K"));function Ht(e,t,r){return(Ht="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=zt.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var qt=o("fVNic");ue=o("eYQtU"),ye=o("2MbLg");function Jt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function Gt(){return e(k)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Kt=Gt,Yt=new xe("auth","Firebase",Gt()),Xt=new Ge("@firebase/auth");function Qt(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var o;Xt.logLevel<=Be.ERROR&&(o=Xt).error.apply(o,["Auth (".concat(Tt,"): ").concat(t)].concat(e(te)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw tr.apply(void 0,[t].concat(e(te)(n)))}function Zt(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return tr.apply(void 0,[t].concat(e(te)(n)))}function er(t,r,n){var i=Object.assign(Object.assign({},Kt()),e(k)({},r,n));return new xe("auth","Firebase",i).create(r,{appName:t.name})}function tr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var o;if("string"!=typeof t){var a,s=n[0],u=e(te)(n.slice(1));return u[0]&&(u[0].appName=t.name),(a=t._errorFactory).create.apply(a,[s].concat(e(te)(u)))}return(o=Yt).create.apply(o,[t].concat(e(te)(n)))}function rr(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];if(!t)throw tr.apply(void 0,[r].concat(e(te)(i)))}function nr(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Qt(t),new Error(t)}function ir(e,t){e||nr(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or=new Map;function ar(e){ir(e instanceof Function,"Expected a class definition");var t=or.get(e);return t?(ir(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,or.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return"http:"===ur()||"https:"===ur()}function ur(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!sr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fr=function(){"use strict";function t(r,n){e(u)(this,t),this.shortDelay=r,this.longDelay=n,ir(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(w)(t,[{key:"get",value:function(){return cr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e,t){ir(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr,pr=function(){"use strict";function t(){e(u)(this,t)}return e(w)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),dr=(hr={},e(k)(hr,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(k)(hr,"MISSING_CUSTOM_TOKEN","internal-error"),e(k)(hr,"INVALID_IDENTIFIER","invalid-email"),e(k)(hr,"MISSING_CONTINUE_URI","internal-error"),e(k)(hr,"INVALID_PASSWORD","wrong-password"),e(k)(hr,"MISSING_PASSWORD","internal-error"),e(k)(hr,"EMAIL_EXISTS","email-already-in-use"),e(k)(hr,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(k)(hr,"INVALID_IDP_RESPONSE","invalid-credential"),e(k)(hr,"INVALID_PENDING_TOKEN","invalid-credential"),e(k)(hr,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(k)(hr,"MISSING_REQ_TYPE","internal-error"),e(k)(hr,"EMAIL_NOT_FOUND","user-not-found"),e(k)(hr,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(k)(hr,"EXPIRED_OOB_CODE","expired-action-code"),e(k)(hr,"INVALID_OOB_CODE","invalid-action-code"),e(k)(hr,"MISSING_OOB_CODE","internal-error"),e(k)(hr,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(k)(hr,"INVALID_ID_TOKEN","invalid-user-token"),e(k)(hr,"TOKEN_EXPIRED","user-token-expired"),e(k)(hr,"USER_NOT_FOUND","user-token-expired"),e(k)(hr,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(k)(hr,"INVALID_CODE","invalid-verification-code"),e(k)(hr,"INVALID_SESSION_INFO","invalid-verification-id"),e(k)(hr,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(k)(hr,"MISSING_SESSION_INFO","missing-verification-id"),e(k)(hr,"SESSION_EXPIRED","code-expired"),e(k)(hr,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(k)(hr,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(k)(hr,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(k)(hr,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(k)(hr,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(k)(hr,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(k)(hr,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(k)(hr,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(k)(hr,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(k)(hr,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(k)(hr,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),hr),vr=new fr(3e4,6e4);function yr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function gr(e,t,r,n){return mr.apply(this,arguments)}function mr(){return mr=e(a)(e(x).mark((function t(r,n,i,o){var s,u=arguments;return e(x).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},t.abrupt("return",br(r,s,e(a)(e(x).mark((function t(){var a,s,u,c;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===n?s=o:a={body:JSON.stringify(o)}),u=Ae(Object.assign({key:r.config.apiKey},s)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",pr.fetch()(Ir(r,r.config.apiHost,i,u),Object.assign({method:n,headers:c,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),mr.apply(this,arguments)}function br(e,t,r){return wr.apply(this,arguments)}function wr(){return(wr=e(a)(e(x).mark((function t(r,n,i){var o,a,s,u,c,f,l,h,p;return e(x).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,o=Object.assign(Object.assign({},dr),n),t.prev=2,a=new xr(r),t.next=6,Promise.race([i(),a.promise]);case 6:return s=t.sent,a.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw Er(r,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,f=e(U)(c.split(" : "),2),l=f[0],h=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==l){t.next=23;break}throw Er(r,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==l){t.next=27;break}throw Er(r,"email-already-in-use",u);case 27:if("USER_DISABLED"!==l){t.next=29;break}throw Er(r,"user-disabled",u);case 29:if(p=o[l]||l.toLowerCase().replace(/[_\s]+/g,"-"),!h){t.next=34;break}throw er(r,p,h);case 34:$t(r,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof Ie)){t.next=41;break}throw t.t0;case 41:$t(r,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function kr(e,t,r,n){return _r.apply(this,arguments)}function _r(){return _r=e(a)(e(x).mark((function t(r,n,i,o){var a,s,u=arguments;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,gr(r,n,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&$t(r,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),_r.apply(this,arguments)}function Ir(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?lr(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var xr=function(){"use strict";function t(r){var n=this;e(u)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(Zt(r.auth,"network-request-failed"))}),vr.get())}))}return e(w)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Er(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=Zt(e,t,n);return i.customData._tokenResponse=r,i}function Tr(e,t){return Or.apply(this,arguments)}function Or(){return(Or=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(x).mark((function t(r,n){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gr(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Sr(e,t){return Ar.apply(this,arguments)}function Ar(){return(Ar=e(a)(e(x).mark((function t(r,n){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gr(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(){return Cr=e(a)(e(x).mark((function t(r){var n,i,o,a,s,u,c=arguments;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]&&c[1],i=Le(r),e.next=4,i.getIdToken(n);case 4:return o=e.sent,rr((a=Pr(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:Rr(Nr(a.auth_time)),issuedAtTime:Rr(Nr(a.iat)),expirationTime:Rr(Nr(a.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Cr.apply(this,arguments)}function Nr(e){return 1e3*Number(e)}function Pr(t){var r,n=e(U)(t.split("."),3),i=n[0],o=n[1],a=n[2];if(void 0===i||void 0===o||void 0===a)return Qt("JWT malformed, contained fewer than 3 sections"),null;try{var s=we(o);return s?JSON.parse(s):(Qt("Failed to decode base64 JWT payload"),null)}catch(e){return Qt("Caught error parsing JWT payload as JSON",null===(r=e)||void 0===r?void 0:r.toString()),null}}function Lr(e,t){return Mr.apply(this,arguments)}function Mr(){return Mr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(x).mark((function t(r,n){var i=arguments;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Ie&&Dr(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Mr.apply(this,arguments)}function Dr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur=function(){"use strict";function t(r){e(u)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(w)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(a)(e(x).mark((function t(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(n=e.t0)||void 0===n?void 0:n.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}}]),t}(),Br=function(){"use strict";function t(r,n){e(u)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(w)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e){return Fr.apply(this,arguments)}function Fr(){return(Fr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(x).mark((function t(r){var n,i,o,a,s,u,c,f,l,h,p;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return o=e.sent,e.next=7,Lr(r,Sr(i,{idToken:o}));case 7:rr(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],r._notifyReloadListener(s),u=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?zr(s.providerUserInfo):[],c=Vr(r.providerData,u),f=r.isAnonymous,l=!(r.email&&s.passwordHash||(null==c?void 0:c.length)),h=!!f&&l,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Br(s.createdAt,s.lastLoginAt),isAnonymous:h},Object.assign(r,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Wr(){return(Wr=e(a)(e(x).mark((function t(r){var n;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Le(r),e.next=3,jr(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vr(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e(te)(n).concat(e(te)(r))}function zr(e){return e.map((function(e){var t=e.providerId,r=Jt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function Hr(e,t){return qr.apply(this,arguments)}function qr(){return(qr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(x).mark((function t(r,n){var i;return e(x).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,br(r,{},e(a)(e(x).mark((function t(){var i,o,a,s,u,c;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ae({grant_type:"refresh_token",refresh_token:n}).slice(1),o=r.config,a=o.tokenApiHost,s=o.apiKey,u=Ir(r,a,"/v1/token","key=".concat(s)),e.next=5,r._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",pr.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jr=function(){"use strict";function t(){e(u)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(w)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){rr(e.idToken,"internal-error"),rr(void 0!==e.idToken,"internal-error"),rr(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,rr(r=Pr(t),"internal-error"),rr(void 0!==r.exp,"internal-error"),rr(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(a)(e(x).mark((function i(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(rr(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(a)(e(x).mark((function i(){var o,a,s,u;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Hr(t,r);case 2:o=e.sent,a=o.accessToken,s=o.refreshToken,u=o.expiresIn,n.updateTokensAndExpiration(a,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return nr("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,i=r.accessToken,o=r.expirationTime,a=new t;return n&&(rr("string"==typeof n,"internal-error",{appName:e}),a.refreshToken=n),i&&(rr("string"==typeof i,"internal-error",{appName:e}),a.accessToken=i),o&&(rr("number"==typeof o,"internal-error",{appName:e}),a.expirationTime=o),a}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e,t){rr("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Kr=function(){"use strict";function t(r){e(u)(this,t);var n=r.uid,i=r.auth,o=r.stsTokenManager,a=Jt(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ur(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?e(te)(a.providerData):[],this.metadata=new Br(a.createdAt||void 0,a.lastLoginAt||void 0)}return e(w)(t,[{key:"getIdToken",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Lr(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(rr(i=e.sent,r.auth,"internal-error"),r.accessToken===i){e.next=9;break}return r.accessToken=i,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Cr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Wr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(rr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){rr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(a)(e(x).mark((function i(){var o;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),o=!0),!r){e.next=5;break}return e.next=5,jr(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:o&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,Lr(t,Tr(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,i,o,a,s,u,c,f,l=null!==(n=r.displayName)&&void 0!==n?n:void 0,h=null!==(i=r.email)&&void 0!==i?i:void 0,p=null!==(o=r.phoneNumber)&&void 0!==o?o:void 0,d=null!==(a=r.photoURL)&&void 0!==a?a:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,y=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,m=null!==(f=r.lastLoginAt)&&void 0!==f?f:void 0,b=r.uid,w=r.emailVerified,k=r.isAnonymous,_=r.providerData,I=r.stsTokenManager;rr(b&&I,e,"internal-error");var x=Jr.fromJSON(this.name,I);rr("string"==typeof b,e,"internal-error"),Gr(l,e.name),Gr(h,e.name),rr("boolean"==typeof w,e,"internal-error"),rr("boolean"==typeof k,e,"internal-error"),Gr(p,e.name),Gr(d,e.name),Gr(v,e.name),Gr(y,e.name),Gr(g,e.name),Gr(m,e.name);var E=new t({uid:b,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:k,photoURL:d,phoneNumber:p,tenantId:v,stsTokenManager:x,createdAt:g,lastLoginAt:m});return _&&Array.isArray(_)&&(E.providerData=_.map((function(e){return Object.assign({},e)}))),y&&(E._redirectEventId=y),E}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(x).mark((function o(){var a,s;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Jr).updateFromServerResponse(n),s=new t({uid:n.localId,auth:r,stsTokenManager:a,isAnonymous:i}),e.next=5,jr(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),o)})))()}}]),t}(),Yr=function(){"use strict";function t(){e(u)(this,t),this.type="NONE",this.storage={}}return e(w)(t,[{key:"_isAvailable",value:function(){return e(a)(e(x).mark((function t(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(a)(e(x).mark((function i(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(a)(e(x).mark((function n(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yr.type="NONE";var Xr=Yr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var $r=function(){"use strict";function t(r,n,i){e(u)(this,t),this.persistence=r,this.auth=n,this.userKey=i;var o=this.auth,a=o.config,s=o.name;this.fullUserKey=Qr(this.userKey,a.apiKey,s),this.fullPersistenceKey=Qr("persistence",a.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(w)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?Kr._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return i=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!i){e.next=10;break}return e.abrupt("return",r.setCurrentUser(i));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(x).mark((function o(){var s,u,c,f,l,h,p,d,v,y,g,m,b;return e(x).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n.length){o.next=2;break}return o.abrupt("return",new t(ar(Xr),r,i));case 2:return o.next=4,Promise.all(n.map(function(){var t=e(a)(e(x).mark((function t(r){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),u=s[0]||ar(Xr),c=Qr(i,r.config.apiKey,r.name),f=null,l=!0,h=!1,p=void 0,o.prev=9,d=n[Symbol.iterator]();case 11:if(l=(v=d.next()).done){o.next=29;break}return y=v.value,o.prev=13,o.next=16,y._get(c);case 16:if(!(g=o.sent)){o.next=22;break}return m=Kr._fromJSON(r,g),y!==u&&(f=m),u=y,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:l=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),h=!0,p=o.t1;case 35:o.prev=35,o.prev=36,l||null==d.return||d.return();case 38:if(o.prev=38,!h){o.next=41;break}throw p;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(b=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&b.length){o.next=46;break}return o.abrupt("return",new t(u,r,i));case 46:if(u=b[0],!f){o.next=50;break}return o.next=50,u._set(c,f.toJSON());case 50:return o.next=52,Promise.all(n.map(function(){var t=e(a)(e(x).mark((function t(r){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===u){e.next=8;break}return e.prev=1,e.next=4,r._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return o.abrupt("return",new t(u,r,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(en(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(an(t))return"Blackberry";if(sn(t))return"Webos";if(tn(t))return"Safari";if((t.includes("chrome/")||rn(t))&&!t.includes("edge/"))return"Chrome";if(on(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function en(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e();return/firefox\//i.test(e)}function tn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e();return/crios\//i.test(e)}function nn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e();return/iemobile/i.test(e)}function on(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e();return/android/i.test(e)}function an(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e();return/blackberry/i.test(e)}function sn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e();return/webos/i.test(e)}function un(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function cn(){return((e=_e()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function fn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e();return un(e)||on(e)||sn(e)||an(e)||/windows phone/i.test(e)||nn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Zr(_e());break;case"Worker":t="".concat(Zr(_e()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Tt,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn=function(){"use strict";function t(r){e(u)(this,t),this.auth=r,this.queue=[]}return e(w)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i,o,a,s,u,c,f,l,h,p,d,v,y,g;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:o=[],e.prev=4,a=!0,s=!1,u=void 0,e.prev=6,c=r.queue[Symbol.iterator]();case 8:if(a=(f=c.next()).done){e.next=16;break}return l=f.value,e.next=12,l(t);case 12:l.onAbort&&o.push(l.onAbort);case 13:a=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,u=e.t0;case 22:e.prev=22,e.prev=23,a||null==c.return||c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),o.reverse(),h=!0,p=!1,d=void 0,e.prev=36,v=o[Symbol.iterator]();!(h=(y=v.next()).done);h=!0){g=y.value;try{g()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),p=!0,d=e.t2;case 44:e.prev=44,e.prev=45,h||null==v.return||v.return();case 47:if(e.prev=47,!p){e.next=50;break}throw d;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),n,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),pn=function(){"use strict";function t(r,n,i){e(u)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vn(this),this.idTokenSubscription=new vn(this),this.beforeStateQueue=new hn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return e(w)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=ar(r));var n=this;return this._initializationPromise=this.queue(e(a)(e(x).mark((function i(){var o,a;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,$r.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(o=n._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(a=n.currentUser)||void 0===a?void 0:a.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i,o,a,s,u,c,f;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(o=e.sent,a=o,s=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==a?void 0:a._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:f=e.sent,u&&u!==c||!(null==f?void 0:f.user)||(a=f.user,s=!0);case 15:if(a){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(a._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(a);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),a=o,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!a){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(a));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return rr(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==a._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(a));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,jr(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 10:return e.abrupt("return",r.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(x).mark((function r(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Le(t):null)&&rr(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(a)(e(x).mark((function i(){return e(x).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&rr(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",n.queue(e(a)(e(x).mark((function r(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(x).mark((function r(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(a)(e(x).mark((function n(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(ar(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new xe("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(a)(e(x).mark((function i(){var o;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return o=e.sent,e.abrupt("return",null===t?o.removeCurrentUser():o.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return rr(i=t&&ar(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,$r.create(r,[ar(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i,o;return e(x).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(a)(e(x).mark((function t(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(o=r.redirectUser)||void 0===o?void 0:o._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(a)(e(x).mark((function n(){return e(x).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(a)(e(x).mark((function n(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return rr(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(a)(e(x).mark((function n(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh(),r.currentUser=t,!t){e.next=8;break}return e.next=6,r.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,r.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return rr(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ln(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n,i,o;return e(x).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e(k)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(o=r.sent)&&(i["X-Firebase-Client"]=o),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e){return Le(e)}var vn=function(){"use strict";function t(r){var n,i,o=this;e(u)(this,t),this.auth=r,this.observer=null,this.addObserver=(i=new Ne((function(e){return o.observer=e}),n)).subscribe.bind(i)}return e(w)(t,[{key:"next",get:function(){return rr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yn=function(){"use strict";function t(r,n){e(u)(this,t),this.providerId=r,this.signInMethod=n}return e(w)(t,[{key:"toJSON",value:function(){return nr("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return nr("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return nr("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return nr("not implemented")}}]),t}();function gn(e,t){return mn.apply(this,arguments)}function mn(){return(mn=e(a)(e(x).mark((function t(r,n){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gr(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bn(e,t){return wn.apply(this,arguments)}function wn(){return(wn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(x).mark((function t(r,n){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithPassword",yr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function kn(e,t){return _n.apply(this,arguments)}function _n(){return(_n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(x).mark((function t(r,n){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithEmailLink",yr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function In(e,t){return xn.apply(this,arguments)}function xn(){return(xn=e(a)(e(x).mark((function t(r,n){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithEmailLink",yr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(t,i,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(u)(this,n),(a=r.call(this,"password",o))._email=t,a._password=i,a._tenantId=s,a}return e(w)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(a)(e(x).mark((function n(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",bn(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",kn(t,{email:r._email,oobCode:r._password}));case 5:$t(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(a)(e(x).mark((function i(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",gn(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",In(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:$t(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(yn);function Tn(e,t){return On.apply(this,arguments)}function On(){return(On=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(x).mark((function t(r,n){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithIdp",yr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(){var t;return e(u)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(w)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Tn(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,Tn(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Tn(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ae(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$t("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,o=Jt(t,["providerId","signInMethod"]);if(!r||!i)return null;var a=new n(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),n}(yn);function An(e,t){return Rn.apply(this,arguments)}function Rn(){return(Rn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(x).mark((function t(r,n){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gr(r,"POST","/v1/accounts:sendVerificationCode",yr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cn(){return(Cn=e(a)(e(x).mark((function t(r,n){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithPhoneNumber",yr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Nn(){return(Nn=e(a)(e(x).mark((function t(r,n){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,kr(r,"POST","/v1/accounts:signInWithPhoneNumber",yr(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Er(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Pn=e(k)({},"USER_NOT_FOUND","user-not-found");function Ln(){return(Ln=e(a)(e(x).mark((function t(r,n){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",kr(r,"POST","/v1/accounts:signInWithPhoneNumber",yr(r,i),Pn));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(t){var i;return e(u)(this,n),(i=r.call(this,"phone","phone")).params=t,i}return e(w)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Cn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Nn.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Ln.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return r||t||i||o?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}):null}}]),n}(yn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn=function(){"use strict";function t(r){var n,i,o,a,s,c;e(u)(this,t);var f=Re(Ce(r)),l=null!==(n=f.apiKey)&&void 0!==n?n:null,h=null!==(i=f.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=f.mode)&&void 0!==o?o:null);rr(l&&h&&p,"argument-error"),this.apiKey=l,this.operation=p,this.code=h,this.continueUrl=null!==(a=f.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=f.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(c=f.tenantId)&&void 0!==c?c:null}return e(w)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=Re(Ce(e)).link,r=t?Re(Ce(t)).deep_link_id:null,n=Re(Ce(e)).deep_link_id;return(n?Re(Ce(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Un=function(){"use strict";function t(){e(u)(this,t),this.providerId=t.PROVIDER_ID}return e(w)(t,null,[{key:"credential",value:function(e,t){return En._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=Dn.parseLink(t);return rr(r,"argument-error"),En._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();Un.PROVIDER_ID="password",Un.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bn=function(){"use strict";function t(r){e(u)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(w)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),jn=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(){var t;return e(u)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(w)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(te)(this.scopes)}}]),n}(Bn),Fn=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(){return e(u)(this,n),r.call(this,"facebook.com")}return e(w)(n,null,[{key:"credential",value:function(e){return Sn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(jn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Fn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wn=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(){var t;return e(u)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(w)(n,null,[{key:"credential",value:function(e,t){return Sn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(jn);Wn.GOOGLE_SIGN_IN_METHOD="google.com",Wn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vn=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(){return e(u)(this,n),r.call(this,"github.com")}return e(w)(n,null,[{key:"credential",value:function(e){return Sn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(jn);Vn.GITHUB_SIGN_IN_METHOD="github.com",Vn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zn=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(){return e(u)(this,n),r.call(this,"twitter.com")}return e(w)(n,null,[{key:"credential",value:function(e,t){return Sn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(jn);zn.TWITTER_SIGN_IN_METHOD="twitter.com",zn.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hn=function(){"use strict";function t(r){e(u)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(w)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(x).mark((function a(){var s,u,c;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Kr._fromIdTokenResponse(r,i,o);case 2:return s=e.sent,u=qn(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:n}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(r,n,i){return e(a)(e(x).mark((function o(){var a;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(i,!0);case 2:return a=qn(i),e.abrupt("return",new t({user:r,providerId:a,_tokenResponse:i,operationType:n}));case 4:case"end":return e.stop()}}),o)})))()}}]),t}();function qn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jn=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(t,i,o,a){var s,c;return e(u)(this,n),(s=r.call(this,i.code,i.message)).operationType=o,s.user=a,Object.setPrototypeOf(e(se)(s),n.prototype),s.customData={appName:t.name,tenantId:null!==(c=t.tenantId)&&void 0!==c?c:void 0,_serverResponse:i.customData._serverResponse,operationType:o},s}return e(w)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(Ie);function Gn(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw Jn._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e,t){return Yn.apply(this,arguments)}function Yn(){return Yn=e(a)(e(x).mark((function t(r,n){var i,o,a=arguments;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=Lr,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",Hn._forOperation(r,"link",o));case 14:case"end":return e.stop()}}),t)}))),Yn.apply(this,arguments)}function Xn(e,t){return Qn.apply(this,arguments)}function Qn(){return Qn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(x).mark((function t(r,n){var i,o,a,s,u,c,f,l=arguments;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=r.auth,s="reauthenticate",e.prev=4,e.next=7,Lr(r,Gn(a,s,n,r),i);case 7:return rr((u=e.sent).idToken,a,"internal-error"),rr(c=Pr(u.idToken),a,"internal-error"),f=c.sub,rr(r.uid===f,a,"user-mismatch"),e.abrupt("return",Hn._forOperation(r,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(o=e.t0)||void 0===o?void 0:o.code)&&$t(a,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),Qn.apply(this,arguments)}function $n(e,t){return Zn.apply(this,arguments)}function Zn(){return Zn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(x).mark((function t(r,n){var i,o,a,s,u=arguments;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],o="signIn",e.next=4,Gn(r,o,n);case 4:return a=e.sent,e.next=7,Hn._fromIdTokenResponse(r,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),Zn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ei(e,t){return gr(e,"POST","/v2/accounts/mfaEnrollment:start",yr(e,t))}new WeakMap;var ti="__sak",ri=function(){"use strict";function t(r,n){e(u)(this,t),this.storageRetriever=r,this.type=n}return e(w)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(ti,"1"),this.storage.removeItem(ti),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ni=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(){var t,i;return e(u)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(tn(i=_e())||un(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=fn(),t._shouldAllowMigration=!0,t}return e(w)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var o=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},a=this.storage.getItem(n);cn()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,o=void 0;if(r)try{for(var a,s=Array.from(r)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var i=this,o=this;return e(a)(e(x).mark((function a(){return e(x).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Vt)(e(qt)(n.prototype),"_set",i).call(o,t,r);case 2:o.localCache[t]=JSON.stringify(r);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var r=this,i=this;return e(a)(e(x).mark((function o(){var a;return e(x).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(Vt)(e(qt)(n.prototype),"_get",r).call(i,t);case 2:return a=o.sent,i.localCache[t]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(t){var r=this,i=this;return e(a)(e(x).mark((function o(){return e(x).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(Vt)(e(qt)(n.prototype),"_remove",r).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return o.stop()}}),o)})))()}}]),n}(ri);ni.type="LOCAL";var ii=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(){return e(u)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(w)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(ri);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.type="SESSION";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oi(t){return Promise.all(t.map((r=e(a)(e(x).mark((function t(r){var n;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ai=function(){"use strict";function t(r){e(u)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(w)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i,o,s,u,c,f,l,h;return e(x).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=(i=t).data,s=o.eventId,u=o.eventType,c=o.data,null==(f=r.handlersMap[u])?void 0:f.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),l=Array.from(f).map(function(){var t=e(a)(e(x).mark((function t(r){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,c));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,oi(l);case 9:h=n.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:h});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function si(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai.receivers=[];var ui=function(){"use strict";function t(r){e(u)(this,t),this.target=r,this.handlers=new Set}return e(w)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(x).mark((function o(){var a,s,u;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,o){var c=si("",20);a.port1.start();var f=setTimeout((function(){o(new Error("unsupported_event"))}),n);u={messageChannel:a,onMessage:function(t){var r=t;if(r.data.eventId===c)switch(r.data.status){case"ack":clearTimeout(f),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(r.data.response);break;default:clearTimeout(f),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(u),a.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:r},[a.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),o)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fi(){return void 0!==ci().WorkerGlobalScope&&"function"==typeof ci().importScripts}function li(){return hi.apply(this,arguments)}function hi(){return(hi=e(a)(e(x).mark((function t(){var r;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pi="firebaseLocalStorageDb",di="firebaseLocalStorage",vi="fbase_key",yi=function(){"use strict";function t(r){e(u)(this,t),this.request=r}return e(w)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function gi(e,t){return e.transaction([di],t?"readwrite":"readonly").objectStore(di)}function mi(){var e=indexedDB.deleteDatabase(pi);return new yi(e).toPromise()}function bi(){var t=indexedDB.open(pi,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(di,{keyPath:vi})}catch(e){n(e)}})),t.addEventListener("success",e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(di)){e.next=12;break}return i.close(),e.next=5,mi();case 5:return e.t0=r,e.next=8,bi();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(i);case 13:case"end":return e.stop()}}),n)}))))}))}function wi(e,t,r){return ki.apply(this,arguments)}function ki(){return(ki=e(a)(e(x).mark((function t(r,n,i){var o,a;return e(x).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=gi(r,!0).put((o={},e(k)(o,vi,n),e(k)(o,"value",i),o)),t.abrupt("return",new yi(a).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _i(e,t){return Ii.apply(this,arguments)}function Ii(){return(Ii=e(a)(e(x).mark((function t(r,n){var i,o;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=gi(r,!1).get(n),e.next=3,new yi(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function xi(e,t){var r=gi(e,!0).delete(t);return new yi(r).toPromise()}var Ei=function(){"use strict";function t(){e(u)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(w)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(x).mark((function r(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,bi();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i,o;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return o=e.sent,e.next=8,t(o);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(x).mark((function r(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fi()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(x).mark((function r(){return e(x).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=ai._getInstance(fi()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(a)(e(x).mark((function r(n,i){var o;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return o=e.sent,e.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(x).mark((function t(r,n){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n,i,o;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,li();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new ui(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(o=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=o[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(a)(e(x).mark((function n(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(x).mark((function t(){var r;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,bi();case 5:return r=e.sent,e.next=8,wi(r,ti,"1");case 8:return e.next=10,xi(r,ti);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(a)(e(x).mark((function n(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(a)(e(x).mark((function i(){return e(x).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(e(a)(e(x).mark((function i(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return wi(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return _i(e,t)}));case 2:return i=e.sent,r.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(a)(e(x).mark((function n(){return e(x).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(a)(e(x).mark((function n(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return xi(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n,i,o,a,s,u,c,f,l,h,p,d,v,y,g,m,b;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=gi(e,!1).getAll();return new yi(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,u=void 0,e.prev=10,c=n[Symbol.iterator]();!(a=(f=c.next()).done);a=!0)l=f.value,h=l.fbase_key,p=l.value,o.add(h),JSON.stringify(t.localCache[h])!==JSON.stringify(p)&&(t.notifyListeners(h,p),i.push(h));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,a||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(d=!0,v=!1,y=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(d=(m=g.next()).done);d=!0)b=m.value,t.localCache[b]&&!o.has(b)&&(t.notifyListeners(b,null),i.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),v=!0,y=e.t1;case 35:e.prev=35,e.prev=36,d||null==g.return||g.return();case 38:if(e.prev=38,!v){e.next=41;break}throw y;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,o=void 0;if(r)try{for(var a,s=Array.from(r)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(x).mark((function r(){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Ei.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ti(e,t){return gr(e,"POST","/v2/accounts/mfaSignIn:start",yr(e,t))}function Oi(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Oi("rcb"),new fr(3e4,6e4);var Si="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e,t,r){return Ri.apply(this,arguments)}function Ri(){return(Ri=e(a)(e(x).mark((function t(r,n,i){var o,a,s,u,c,f,l,h;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,rr("string"==typeof a,r,"argument-error"),rr(i.type===Si,r,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return rr("enroll"===u.type,r,"internal-error"),e.next=15,ei(r,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return rr("signin"===u.type,r,"internal-error"),rr(f=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Ti(r,{mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:a}});case 24:return l=e.sent,e.abrupt("return",l.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,An(r,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return h=e.sent.sessionInfo,e.abrupt("return",h);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ci=function(){"use strict";function t(r){e(u)(this,t),this.providerId=t.PROVIDER_ID,this.auth=dn(r)}return e(w)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Ai(this.auth,e,Le(t))}}],[{key:"credential",value:function(e,t){return Mn._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?Mn._fromTokenResponse(r,n):null}}]),t}();Ci.PROVIDER_ID="phone",Ci.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ni=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(t){var i;return e(u)(this,n),(i=r.call(this,"custom","custom")).params=t,i}return e(w)(n,[{key:"_getIdTokenResponse",value:function(e){return Tn(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Tn(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Tn(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(yn);function Pi(e){return $n(e.auth,new Ni(e),e.bypassAuthState)}function Li(e){var t=e.auth,r=e.user;return rr(r,t,"internal-error"),Xn(r,new Ni(e),e.bypassAuthState)}function Mi(e){return Di.apply(this,arguments)}function Di(){return(Di=e(a)(e(x).mark((function t(r){var n,i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,rr(i=r.user,n,"internal-error"),e.abrupt("return",Kn(i,new Ni(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui=function(){"use strict";function t(r,n,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(u)(this,t),this.auth=r,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(w)(t,[{key:"execute",value:function(){var t,r=this;return new Promise((t=e(a)(e(x).mark((function t(n,i){return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,r){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i,o,a,s,u,c,f;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,o=t.sessionId,a=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return r.reject(u),e.abrupt("return");case 4:return f={auth:r.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(c)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pi;case"linkViaPopup":case"linkViaRedirect":return Mi;case"reauthViaPopup":case"reauthViaRedirect":return Li;default:$t(this.auth,"internal-error")}}},{key:"resolve",value:function(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Bi=new fr(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ji=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(t,i,o,a,s){var c;return e(u)(this,n),(c=r.call(this,t,i,a,s)).provider=o,c.authWindow=null,c.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(se)(c),c}return e(w)(n,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return rr(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(x).mark((function r(){var n;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ir(1===t.filter.length,"Popup operations only handle one event"),n=si(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Zt(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Zt(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Zt(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Bi.get())};t()}}]),n}(Ui);ji.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Map;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new fr(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new fr(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fi=function(t){"use strict";e(ue)(n,t);var r=e(ye)(n);function n(t){var i;return e(u)(this,n),(i=r.call(this,"phone")).credential=t,i}return e(w)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return gr(e,"POST","/v2/accounts/mfaEnrollment:finalize",yr(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return gr(e,"POST","/v2/accounts/mfaSignIn:finalize",yr(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function t(r){e(u)(this,t),this.factorId=r}return e(w)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return nr("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(u)(this,t)}return e(w)(t,null,[{key:"assertion",value:function(e){return Fi._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Wi,Vi="@firebase/auth",zi="0.20.6",Hi=function(){"use strict";function t(r){e(u)(this,t),this.auth=r,this.internalListeners=new Map}return e(w)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(a)(e(x).mark((function n(){var i;return e(x).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){rr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();Wi="Browser",_t(new Me("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=n.options,a=o.apiKey,s=o.authDomain;return function(e,t){rr(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),rr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:a,authDomain:s,clientPlatform:Wi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ln(Wi)},i=new pn(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(ar);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),_t(new Me("auth-internal",(function(e){var t=dn(e.getProvider("auth").getImmediate());return new Hi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Vi,zi,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Wi)),Ot(Vi,zi,"esm2017");new Wn,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:gt,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw xt.create("bad-app-name",{appName:String(i)});var o=bt.get(i);if(o){if(Oe(e,o.options)&&Oe(n,o.config))return o;throw xt.create("duplicate-app",{appName:i})}var a=new Fe(i),s=!0,u=!1,c=void 0;try{for(var f,l=wt.values()[Symbol.iterator]();!(s=(f=l.next()).done);s=!0){var h=f.value;a.addComponent(h)}}catch(e){u=!0,c=e}finally{try{s||null==l.return||l.return()}finally{if(u)throw c}}var p=new Et(e,n,a);bt.set(i,p)}({apiKey:"AIzaSyC-rMEvEUJ6DbhIaJz-m19MpHLMzbQ1hi4",authDomain:"auth-9127f.firebaseapp.com",projectId:"auth-9127f",storageBucket:"auth-9127f.appspot.com",messagingSenderId:"1077758083281",appId:"1:1077758083281:web:0634a927ba2da6007f85f0"}),document.querySelector("#google")}();
//# sourceMappingURL=index.91c37dfb.js.map
