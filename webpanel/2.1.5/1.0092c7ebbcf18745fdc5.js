(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{724:function(e,t,n){"use strict";var r=n(57),o=n(5),a=n(2),c=n(9);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){u(a,r,o,c,i,"next",e)}function i(e){u(a,r,o,c,i,"throw",e)}c(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.a=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(d,e);var t,n,r,i,u,b=y(d);function d(){return l(this,d),b.apply(this,arguments)}return t=d,(n=[{key:"Download",value:(u=f((function*(e){var t;yield c.a.wait4Init();try{t=yield c.a.apiClient.TransferController_Download({ticket:e},null,{headers:{Accept:"application/json, application/octet-stream"}})}catch(e){return new a.b({code:a.a.ERROR,error:e})}switch(t.status){case 200:return new a.b({code:a.a.OK,payload:t.data});case 410:return new a.b({code:a.a.ERROR,error:new o.c(o.b.TRANSFER_NOT_AVAILABLE,{errorMessage:t.data})});default:return new a.b({code:a.a.ERROR,error:new o.c(o.b.UNHANDLED_RESPONSE,{axiosResponse:t},t)})}})),function(e){return u.apply(this,arguments)})},{key:"Upload",value:(i=f((function*(e,t){var n;yield c.a.wait4Init();try{n=yield c.a.apiClient.TransferController_Upload({ticket:e},null,{data:t,headers:{"Content-Type":"application/octect-stream"}})}catch(e){return new a.b({code:a.a.ERROR,error:e})}switch(n.status){case 204:return new a.b({code:a.a.OK,payload:null});case 409:return new a.b({code:a.a.ERROR,error:new o.c(o.b.UPLOAD_FAILED,{void:!0})});case 410:return new a.b({code:a.a.ERROR,error:new o.c(o.b.TRANSFER_NOT_AVAILABLE,{errorMessage:n.data})});default:return new a.b({code:a.a.ERROR,error:new o.c(o.b.UNHANDLED_RESPONSE,{axiosResponse:n},n)})}})),function(e,t){return i.apply(this,arguments)})}])&&s(t.prototype,n),r&&s(t,r),d}(r.a))}}]);
//# sourceMappingURL=1.0092c7ebbcf18745fdc5.js.map