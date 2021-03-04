(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{321:function(e,t,r){"use strict";r.r(t);var a,n,s=r(0),o=r.n(s),i=r(40),u=r(129),c=r(73),l=r(90),p=r(18),f=r(3),h=r(10),d=r(47),m=r(14),y=r(69),v=r(55);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,r,a,n,s,o){try{var i=e[s](o),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var s=e.apply(t,r);function o(e){b(s,a,n,o,i,"next",e)}function i(e){b(s,a,n,o,i,"throw",e)}o(void 0)}))}}function w(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=I(e);if(t){var n=I(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return O(this,r)}}function O(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=Object(p.f)((n=a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(E,e);var t,r,a,n,s,p,m=C(E);function E(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,E),(t=m.call(this,e)).state={errors:[],password1:"",password2:"",username:"",sysuser:"",loading:!0},t.submitTGS=t.submitTGS.bind(k(t)),t.submitSYS=t.submitSYS.bind(k(t)),t}return t=E,(r=[{key:"componentDidMount",value:(p=g((function*(){var e=yield h.a.getServerInfo();switch(e.code){case f.a.ERROR:this.addError(e.error);break;case f.a.OK:this.setState({serverInfo:e.payload})}this.setState({loading:!1})})),function(){return p.apply(this,arguments)})},{key:"validate",value:function(){var e=!1;return this.state.password1.length<this.state.serverInfo.minimumPasswordLength?(e=!0,this.setState({lengthError:!0})):this.setState({lengthError:!1}),this.state.password2!==this.state.password1?(e=!0,this.setState({matchError:!0})):this.setState({matchError:!1}),e}},{key:"submitTGS",value:(s=g((function*(e){if(e.preventDefault(),!this.validate()&&this.state.username){this.setState({creating:!0});var t=yield d.a.createUser({name:this.state.username,password:this.state.password1});t.code==f.a.OK?this.props.postCreateAction(t.payload,this.props.history):(this.addError(t.error),this.setState({creating:!1}))}})),function(e){return s.apply(this,arguments)})},{key:"submitSYS",value:(n=g((function*(e){if(e.preventDefault(),this.state.sysuser){this.setState({creating:!0});var t=yield d.a.createUser({systemIdentifier:this.state.sysuser});t.code==f.a.OK?this.props.postCreateAction(t.payload,this.props.history):(this.addError(t.error),this.setState({creating:!1}))}})),function(e){return n.apply(this,arguments)})},{key:"addError",value:function(e){this.setState((function(t){var r=Array.from(t.errors);return r.push(e),{errors:r}}))}},{key:"render",value:function(){var e=this;return this.state.loading?o.a.createElement(v.a,{text:"loading.info"}):this.state.creating?o.a.createElement(v.a,{text:"loading.user.create"}):o.a.createElement("div",{className:"text-center"},this.state.errors.map((function(t,r){if(t)return o.a.createElement(y.a,{key:r,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[r]=void 0,{errors:t}}))}})})),o.a.createElement("h3",null,o.a.createElement(l.a,{id:"routes.usercreate"})),o.a.createElement(u.a,{className:"mx-auto",lg:5,md:8},o.a.createElement(c.a,{onSubmit:this.submitTGS},o.a.createElement(c.a.Group,{controlId:"username"},o.a.createElement(c.a.Label,null,o.a.createElement(l.a,{id:"login.username"})),o.a.createElement(c.a.Control,{required:!0,onChange:function(t){return e.setState({username:t.target.value})},value:this.state.username})),o.a.createElement(c.a.Group,{controlId:"password1"},o.a.createElement(c.a.Label,null,o.a.createElement(l.a,{id:"login.password"})),o.a.createElement(c.a.Control,{type:"password",onChange:function(t){return e.setState({password1:t.target.value})},value:this.state.password1,isInvalid:this.state.matchError||this.state.lengthError}),o.a.createElement(c.a.Control.Feedback,{type:"invalid"},this.state.lengthError?o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{id:"login.password.repeat.short"}),this.state.serverInfo.minimumPasswordLength):"")),o.a.createElement(c.a.Group,{controlId:"password2"},o.a.createElement(c.a.Label,null,o.a.createElement(l.a,{id:"login.password.repeat"})),o.a.createElement(c.a.Control,{type:"password",onChange:function(t){return e.setState({password2:t.target.value})},value:this.state.password2,isInvalid:this.state.matchError||this.state.lengthError}),o.a.createElement(c.a.Control.Feedback,{type:"invalid"},this.state.matchError?o.a.createElement(l.a,{id:"login.password.repeat.match"}):"")),o.a.createElement(i.a,{type:"submit"},o.a.createElement(l.a,{id:"view.user.create.tgs"}))),o.a.createElement("hr",null),o.a.createElement(c.a,{onSubmit:this.submitSYS},o.a.createElement(c.a.Group,{controlId:"sysuser"},o.a.createElement(c.a.Label,null,o.a.createElement(l.a,{id:"generic.systemidentifier"})),o.a.createElement(c.a.Control,{required:!0,onChange:function(t){return e.setState({sysuser:t.target.value})},value:this.state.sysuser})),o.a.createElement(i.a,{type:"submit"},o.a.createElement(l.a,{id:"view.user.create.sys"})))))}}])&&w(t.prototype,r),a&&w(t,a),E}(o.a.Component),a.defaultProps={postCreateAction:function(e,t){m.c.selecteduserid=e.id,t.push(m.b.useredit.link||m.b.useredit.route)}},n))}}]);
//# sourceMappingURL=20.f29f0b0813dba4789f67.js.map