(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{218:function(e,t,n){"use strict";n.r(t);n(256),n(50);var r=n(0),a=n.n(r),o=n(219),s=n.n(o),i=n(258),u=n.n(i),c=n(4);var l=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).isAllFilled=function(){return n.state.firstName&&n.state.lastName&&n.state.phoneNumber&&n.state.email&&n.state.message},n.handleChange=function(e){var t;return n.setState(((t={})[e.target.name]=e.target.value,t.allFilled=null,t.sendFailed=!1,t))},n.handleSubmit=function(e){e.preventDefault(),n.isAllFilled()?(n.setState({sending:!0,allFilled:null}),u.a.post("https://a094mzl4c0.execute-api.eu-central-1.amazonaws.com/Prod/process",{subject:n.state.firstName+" "+n.state.lastName,firstName:n.state.firstName,lastName:n.state.lastName,email:n.state.email,number:n.state.phoneNumber,message:n.state.message,token:n.state.token,key:"uohlegalaidcliniccom"}).then((function(){return Object(c.b)("thanks",{state:{name:n.state.firstName}})})).catch((function(){return n.setState({sendFailed:!0,sending:!1})}))):n.setState({allFilled:!1})},n.state={sendText:"Send",sending:!1,sendFailed:!1,allFilled:null,firstName:"",lastName:"",phoneNumber:"",email:"",message:"",token:""},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var e=this;window.grecaptcha.execute("6LdoirMUAAAAANySCfCzeGmu5Q5vLvZz_e9YSaZ6",{action:"contact"}).then((function(t){return e.setState({token:t})}))},o.render=function(){var e=this.state,t=e.sendText,n=e.sending,r=e.allFilled,o=e.sendFailed;return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("div",{className:s.a.row},a.a.createElement("div",{className:s.a.info},a.a.createElement("h4",null,"Contact Information"),a.a.createElement("br",null),a.a.createElement("label",{className:s.a.sub},"Email"),":"," ",a.a.createElement("span",null,"legalaidclinic2002@gmail.com"),a.a.createElement("br",null),a.a.createElement("label",{className:s.a.sub},"Phone"),":"," ",a.a.createElement("span",null,"+252 634 416 493")),a.a.createElement("div",{className:s.a.form},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"firstName"},"First Name"),a.a.createElement("input",{type:"text",className:"form-control",id:"firstName",placeholder:"First name",name:"firstName",value:this.state.firstName,onChange:this.handleChange})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"lastName"},"Last Name"),a.a.createElement("input",{type:"text",className:"form-control",id:"lastName",placeholder:"Last name",name:"lastName",value:this.state.lastName,onChange:this.handleChange})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"number"},"Phone Number"),a.a.createElement("input",{type:"text",className:"form-control",id:"number",placeholder:"Phone number",name:"phoneNumber",value:this.state.phoneNumber,onChange:this.handleChange})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"email"},"Email"),a.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Email address",name:"email",value:this.state.email,onChange:this.handleChange})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"message"},"Message"),a.a.createElement("textarea",{type:"text",className:"form-control",rows:"5",id:"message",placeholder:"Message for Legal Aid Clinic",name:"message",value:this.state.message,onChange:this.handleChange})),a.a.createElement("button",{type:"submit",className:s.a.btnSend},n?a.a.createElement("span",{className:"spinner-border spinner-border-md",role:"status","aria-hidden":"true"}," "):t),!1===r&&a.a.createElement("p",{className:"text-danger"},"Please fill all fields!"),o&&a.a.createElement("p",{className:"text-danger"},"Oops... failed to send the message. Please try again later!"))))},r}(r.Component);t.default=l},228:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(212),s=n(218),i=n(213),u=(n(79),n(243)),c=n.n(u);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:"Contact"}),a.a.createElement("section",{className:"page-title",style:{backgroundImage:"url("+c.a+")"}},a.a.createElement("div",{className:"auto-container"},a.a.createElement("div",{className:"text-center"},a.a.createElement("h1",null,"Contact")))),a.a.createElement(s.default,null))}},237:function(e,t,n){"use strict";n(19),n(58),n(78),n(9);var r=n(244),a=n(260),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===o.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:a,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return i(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,a=arguments.length;r<a;r++)c(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,a=arguments.length;r<a;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,(function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},243:function(e,t,n){e.exports=n.p+"static/backgroundblog-41ca9fc224e198189ffe56cb72d59c40.jpg"},244:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},245:function(e,t,n){"use strict";n(20),n(262),n(31),n(58),n(78),n(9),n(19);var r=n(237);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(a(t)+"="+a(e))})))})),o=s.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},246:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},247:function(e,t,n){"use strict";(function(t){n(31),n(58),n(78),n(9);var r=n(237),a=n(268),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,u={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?i=n(248):"undefined"!=typeof XMLHttpRequest&&(i=n(248)),i),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(o)})),e.exports=u}).call(this,n(267))},248:function(e,t,n){"use strict";n(31),n(20),n(47),n(9);var r=n(237),a=n(269),o=n(245),s=n(272),i=n(273),u=n(249);e.exports=function(e){return new Promise((function(t,c){var l=e.data,f=e.headers;r.isFormData(l)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",d=e.auth.password||"";f.Authorization="Basic "+btoa(m+":"+d)}if(p.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};a(t,c,r),p=null}},p.onabort=function(){p&&(c(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){c(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var h=n(274),g=(e.withCredentials||i(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(f,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),c(e),p=null)})),void 0===l&&(l=null),p.send(l)}))}},249:function(e,t,n){"use strict";var r=n(270);e.exports=function(e,t,n,a,o){var s=new Error(e);return r(s,t,n,a,o)}},250:function(e,t,n){"use strict";n(31);var r=n(237);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(["headers","auth","proxy"],(function(a){r.isObject(t[a])?n[a]=r.deepMerge(e[a],t[a]):void 0!==t[a]?n[a]=t[a]:r.isObject(e[a])?n[a]=r.deepMerge(e[a]):void 0!==e[a]&&(n[a]=e[a])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},251:function(e,t,n){"use strict";function r(e){this.message=e}n(58),n(78),n(9),r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},256:function(e,t,n){"use strict";n(257)("sub",(function(e){return function(){return e(this,"sub","","")}}))},257:function(e,t,n){var r=n(1),a=n(11),o=n(42),s=/"/g,i=function(e,t,n,r){var a=String(o(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(r).replace(s,"&quot;")+'"'),i+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(i),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},258:function(e,t,n){e.exports=n(259)},259:function(e,t,n){"use strict";n(47),n(17),n(18),n(9),n(106);var r=n(237),a=n(244),o=n(261),s=n(250);function i(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var u=i(n(247));u.Axios=o,u.create=function(e){return i(s(u.defaults,e))},u.Cancel=n(251),u.CancelToken=n(277),u.isCancel=n(246),u.all=function(e){return Promise.all(e)},u.spread=n(278),e.exports=u,e.exports.default=u},260:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},261:function(e,t,n){"use strict";n(19),n(31),n(47),n(9);var r=n(237),a=n(245),o=n(264),s=n(265),i=n(250);function u(e){this.defaults=e,this.interceptors={request:new o,response:new o}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=i(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,a){return this.request(r.merge(a||{},{method:e,url:t,data:n}))}})),e.exports=u},262:function(e,t,n){var r=n(1),a=n(263);r(r.P+r.F*(Date.prototype.toISOString!==a),"Date",{toISOString:a})},263:function(e,t,n){"use strict";var r=n(11),a=Date.prototype.getTime,o=Date.prototype.toISOString,s=function(e){return e>9?e:"0"+e};e.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(a.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),r=t<0?"-":t>9999?"+":"";return r+("00000"+Math.abs(t)).slice(r?-6:-4)+"-"+s(e.getUTCMonth()+1)+"-"+s(e.getUTCDate())+"T"+s(e.getUTCHours())+":"+s(e.getUTCMinutes())+":"+s(e.getUTCSeconds())+"."+(n>99?n:"0"+s(n))+"Z"}:o},264:function(e,t,n){"use strict";n(31);var r=n(237);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},265:function(e,t,n){"use strict";n(47),n(9),n(31);var r=n(237),a=n(266),o=n(246),s=n(247),i=n(275),u=n(276);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!i(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},266:function(e,t,n){"use strict";n(31);var r=n(237);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},267:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&m())}function m(){if(!l){var e=i(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||l||i(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},268:function(e,t,n){"use strict";n(31);var r=n(237);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},269:function(e,t,n){"use strict";var r=n(249);e.exports=function(e,t,n){var a=n.config.validateStatus;!a||a(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},270:function(e,t,n){"use strict";n(50),n(271),e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},271:function(e,t,n){"use strict";var r=n(1),a=n(23),o=n(81);r(r.P+r.F*n(11)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=a(this),n=o(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},272:function(e,t,n){"use strict";n(150),n(20),n(39),n(31);var r=n(237),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&a.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},273:function(e,t,n){"use strict";n(104),n(19);var r=n(237);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},274:function(e,t,n){"use strict";n(62),n(151),n(105);var r=n(237);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(a)&&i.push("path="+a),r.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},275:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},276:function(e,t,n){"use strict";n(19),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},277:function(e,t,n){"use strict";n(47),n(9);var r=n(251);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},278:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}}]);
//# sourceMappingURL=component---src-pages-contact-js-fbda5f01d9de3ff5dca0.js.map