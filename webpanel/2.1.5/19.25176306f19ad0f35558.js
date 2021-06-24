(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{363:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(37),s=r(140),i=r(77),u=r(75),c=r(13),l=r(2),p=r(69),f=r(66),m=r(19),h=r(54),d=r(48);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,r,a,n,o,s){try{var i=e[o](s),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function E(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function s(e){v(o,a,n,s,i,"next",e)}function i(e){v(o,a,n,s,i,"throw",e)}s(void 0)}))}}function b(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=O(e);if(t){var n=O(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return S(this,r)}}function S(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(y,e);var t,r,a,c,f,m=g(y);function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=m.call(this,e)).state={errors:[],password1:"",password2:"",username:"",sysuser:""},t.submitTGS=t.submitTGS.bind(C(t)),t.submitSYS=t.submitSYS.bind(C(t)),t}return t=y,(r=[{key:"validate",value:function(){var e=!1;return this.state.password1.length<this.context.serverInfo.minimumPasswordLength?(e=!0,this.setState({lengthError:!0})):this.setState({lengthError:!1}),this.state.password2!==this.state.password1?(e=!0,this.setState({matchError:!0})):this.setState({matchError:!1}),e}},{key:"submitTGS",value:(f=E((function*(e){if(e.preventDefault(),!this.validate()&&this.state.username){this.setState({creating:!0});var t=yield p.a.createUser({name:this.state.username,password:this.state.password1});t.code==l.a.OK?this.props.postCreateAction(t.payload,this.props.history):(this.addError(t.error),this.setState({creating:!1}))}})),function(e){return f.apply(this,arguments)})},{key:"submitSYS",value:(c=E((function*(e){if(e.preventDefault(),this.state.sysuser){this.setState({creating:!0});var t=yield p.a.createUser({systemIdentifier:this.state.sysuser});t.code==l.a.OK?this.props.postCreateAction(t.payload,this.props.history):(this.addError(t.error),this.setState({creating:!1}))}})),function(e){return c.apply(this,arguments)})},{key:"addError",value:function(e){this.setState((function(t){var r=Array.from(t.errors);return r.push(e),{errors:r}}))}},{key:"render",value:function(){var e=this;return this.state.creating?n.a.createElement(d.a,{text:"loading.user.create"}):n.a.createElement("div",{className:"text-center"},this.state.errors.map((function(t,r){if(t)return n.a.createElement(h.a,{key:r,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[r]=void 0,{errors:t}}))}})})),n.a.createElement("h3",null,n.a.createElement(u.a,{id:"routes.usercreate"})),n.a.createElement(s.a,{className:"mx-auto",lg:5,md:8},n.a.createElement(i.a,{onSubmit:this.submitTGS},n.a.createElement(i.a.Group,{controlId:"username"},n.a.createElement(i.a.Label,null,n.a.createElement(u.a,{id:"login.username"})),n.a.createElement(i.a.Control,{required:!0,onChange:function(t){return e.setState({username:t.target.value})},value:this.state.username})),n.a.createElement(i.a.Group,{controlId:"password1"},n.a.createElement(i.a.Label,null,n.a.createElement(u.a,{id:"login.password"})),n.a.createElement(i.a.Control,{type:"password",onChange:function(t){return e.setState({password1:t.target.value})},value:this.state.password1,isInvalid:this.state.matchError||this.state.lengthError}),n.a.createElement(i.a.Control.Feedback,{type:"invalid"},this.state.lengthError?n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{id:"login.password.repeat.short"}),this.context.serverInfo.minimumPasswordLength):"")),n.a.createElement(i.a.Group,{controlId:"password2"},n.a.createElement(i.a.Label,null,n.a.createElement(u.a,{id:"login.password.repeat"})),n.a.createElement(i.a.Control,{type:"password",onChange:function(t){return e.setState({password2:t.target.value})},value:this.state.password2,isInvalid:this.state.matchError||this.state.lengthError}),n.a.createElement(i.a.Control.Feedback,{type:"invalid"},this.state.matchError?n.a.createElement(u.a,{id:"login.password.repeat.match"}):"")),n.a.createElement(o.a,{type:"submit"},n.a.createElement(u.a,{id:"view.user.create.tgs"}))),n.a.createElement("hr",null),n.a.createElement(i.a,{onSubmit:this.submitSYS},n.a.createElement(i.a.Group,{controlId:"sysuser"},n.a.createElement(i.a.Label,null,n.a.createElement(u.a,{id:"generic.systemidentifier"})),n.a.createElement(i.a.Control,{required:!0,onChange:function(t){return e.setState({sysuser:t.target.value})},value:this.state.sysuser})),n.a.createElement(o.a,{type:"submit"},n.a.createElement(u.a,{id:"view.user.create.sys"})))))}}])&&b(t.prototype,r),a&&b(t,a),y}(n.a.Component);k.defaultProps={postCreateAction:function(e,t){m.c.selecteduserid=e.id,t.push(m.b.useredit.link||m.b.useredit.route)}},k.contextType=f.a,t.default=Object(c.f)(k)}}]);
//# sourceMappingURL=19.25176306f19ad0f35558.js.map