(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(13),c=n(10),i=n(94),u=n(2),s=n(721),l=n(34),p=n(54),f=n(77),d=n(78),m=n(226),y=n(698),h=n(88),b=n(89),v=n(76);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(c,e);var t,n,r,a=x(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={currentValue:e.defaultValue},t}return t=c,(n=[{key:"render",value:function(){var e,t=this,n=Math.random().toString(),r=this.state.currentValue!==this.props.defaultValue,a=function(e){var n=e||t.state.currentValue;switch(t.props.type){case"str":case"num":case"bool":case"enum":t.props.onChange(n)}};return o.a.createElement(y.a,null,o.a.createElement(y.a.Prepend,{className:"w-40 flex-grow-1 flex-xl-grow-0 overflow-auto mb-2 mb-xl-0"},o.a.createElement(h.a,{overlay:(e=this.props.tooltip,e?o.a.createElement(b.a,{id:e},o.a.createElement(v.a,{id:e})):o.a.createElement(o.a.Fragment,null)),show:!!this.props.tooltip&&void 0},(function(e){var n=e.ref,a=O(e,["ref"]);return o.a.createElement(y.a.Text,g({className:"flex-fill ".concat(r?"font-weight-bold":"")},a),o.a.createElement(v.a,{id:"fields.".concat(t.props.name)}),t.props.tooltip?o.a.createElement("div",{className:"ml-auto",ref:n},o.a.createElement(f.a,{fixedWidth:!0,icon:"info"})):null)}))),o.a.createElement("div",{className:"flex-grow-1 w-100 w-xl-auto d-flex mb-3 mb-xl-0"},"enum"===this.props.type?o.a.createElement("select",{className:"flex-fill mb-0 ".concat(r?"font-weight-bold":""),onChange:function(e){t.props.setEditLock&&!t.props.instantCommit&&(r&&e.target.selectedOptions[0].value===t.props.defaultValue?t.props.setEditLock(!1):r||e.target.selectedOptions[0].value===t.props.defaultValue||t.props.setEditLock(!0)),t.props.instantCommit?a(e.target.selectedOptions[0].value):t.setState({currentValue:e.target.selectedOptions[0].value})},disabled:this.props.disabled||!r&&this.props.editLock,defaultValue:this.props.defaultValue},Object.values(this.props.enum).filter((function(e){return isNaN(parseInt(e))})).map((function(e){return o.a.createElement(v.a,{key:e,id:"fields.".concat(t.props.name,".").concat(e)},(function(t){return o.a.createElement("option",{value:e},t)}))}))):"bool"===this.props.type?o.a.createElement("label",{htmlFor:n,className:"d-flex justify-content-center align-content-center flex-grow-1 w-100 w-xl-auto mb-0"},o.a.createElement(d.a.Check,{inline:!0,type:"switch",custom:!0,id:n,className:"m-auto",label:"",onChange:function(e){t.props.setEditLock&&!t.props.instantCommit&&(r&&e.currentTarget.checked===t.props.defaultValue?t.props.setEditLock(!1):r||e.currentTarget.checked===t.props.defaultValue||t.props.setEditLock(!0)),t.props.instantCommit?a(e.currentTarget.checked):t.setState({currentValue:e.currentTarget.checked})},checked:this.state.currentValue,disabled:this.props.disabled||!r&&this.props.editLock})):o.a.createElement(m.a,{custom:!0,type:"num"===this.props.type?"number":"text",className:"flex-fill mb-0 ".concat(r?"font-weight-bold":""),onChange:function(e){var n="num"==t.props.type?parseInt(e.currentTarget.value):e.currentTarget.value;t.props.setEditLock&&!t.props.instantCommit&&(r&&n===t.props.defaultValue?t.props.setEditLock(!1):r||n===t.props.defaultValue||t.props.setEditLock(!0)),t.props.instantCommit?a(n):t.setState({currentValue:n})},value:this.state.currentValue,disabled:this.props.disabled||!r&&this.props.editLock}),o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a.Append,{style:r?{}:{opacity:0,pointerEvents:"none"},onClick:function(){t.props.setEditLock&&t.props.setEditLock(!1),t.setState({currentValue:t.props.defaultValue})}},o.a.createElement(y.a.Text,null,o.a.createElement(f.a,{fixedWidth:!0,icon:"undo"}))),o.a.createElement(y.a.Append,{style:r?{}:{opacity:0,pointerEvents:"none"},onClick:function(){a()}},o.a.createElement(y.a.Text,null,o.a.createElement(f.a,{fixedWidth:!0,icon:"check"}))))))}}])&&k(t.prototype,n),r&&k(t,r),c}(o.a.Component);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=A(e);if(t){var o=A(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return B(this,n)}}function B(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(d,e);var t,n,r,a,s,f=N(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=f.call(this,e)).state={editLock:!1,errors:[]},t}return t=d,(n=[{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"_editInstance",value:(a=function*(e){var t=yield i.a.editInstance(V(V({},e),{},{id:this.context.instance.id}));t.code===u.a.OK?this.context.reloadInstance():this.addError(t.error)},s=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function c(e){T(o,n,r,c,i,"next",e)}function i(e){T(o,n,r,c,i,"throw",e)}c(void 0)}))},function(e){return s.apply(this,arguments)})},{key:"editInstance",value:function(e){this._editInstance(e)}},{key:"render",value:function(){var e=this,t=function(t){return Object(l.d)(e.context.user).instanceManagerRights&t},n=function(t){e.setState({editLock:t})};return o.a.createElement("div",{className:"text-center"},this.state.errors.map((function(t,n){if(t)return o.a.createElement(p.a,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),o.a.createElement(P,{name:"instance.name",defaultValue:this.context.instance.name,type:"str",onChange:function(t){e.editInstance({name:t})},disabled:!t(c.e.Rename),setEditLock:n,editLock:this.state.editLock}),o.a.createElement(P,{name:"instance.path",defaultValue:this.context.instance.path,type:"str",onChange:function(t){e.editInstance({path:t})},disabled:!t(c.e.Relocate),setEditLock:n,editLock:this.state.editLock}),o.a.createElement(P,{name:"instance.chatbotlimit",defaultValue:this.context.instance.chatBotLimit,type:"num",onChange:function(t){e.editInstance({chatBotLimit:t})},disabled:!t(c.e.SetChatBotLimit),setEditLock:n,editLock:this.state.editLock}),o.a.createElement(P,{name:"instance.autoupdate",defaultValue:this.context.instance.autoUpdateInterval,type:"num",onChange:function(t){e.editInstance({autoUpdateInterval:t})},disabled:!t(c.e.SetAutoUpdate),setEditLock:n,editLock:this.state.editLock}),o.a.createElement(P,{name:"instance.filemode",defaultValue:c.c[this.context.instance.configurationType],type:"enum",enum:c.c,onChange:function(t){e.editInstance({configurationType:c.c[t]})},disabled:!t(c.e.SetConfiguration),setEditLock:n,editLock:this.state.editLock}))}}])&&I(t.prototype,n),r&&I(t,r),d}(o.a.Component);D.contextType=s.a;t.default=Object(a.f)(D)},721:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),o=n.n(r).a.createContext(void 0)}}]);
//# sourceMappingURL=7.e0d2f3c437bdfd370c2c.js.map