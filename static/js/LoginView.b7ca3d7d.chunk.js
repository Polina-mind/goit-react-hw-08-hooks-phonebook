(this["webpackJsonpgoit-react-hw-08-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-08-hooks-phonebook"]||[]).push([[2],{94:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(33),l=a(34),o=a(36),c=a(35),r=a(0),i=a(8),h=a(23),u=a(1),b=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,s=a.name,l=a.value;e.setState(Object(n.a)({},s,l))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({name:"",email:"",password:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"Title",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(u.jsxs)("form",{type:"submit",onSubmit:this.handleSubmit,className:"Form",children:[Object(u.jsxs)("label",{className:"Label",children:["\u041f\u043e\u0447\u0442\u0430",Object(u.jsx)("input",{className:"Input",type:"email",name:"email",value:t,onChange:this.handleChange,placeholder:"Name@mail.com",required:!0})]}),Object(u.jsxs)("label",{className:"Label",children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(u.jsx)("input",{className:"Input",type:"password",name:"password",value:a,onChange:this.handleChange,autoComplete:"off",required:!0})]}),Object(u.jsx)("button",{type:"submit",className:"Button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),a}(r.Component),m={onSubmit:h.b};t.default=Object(i.b)(null,m)(b)}}]);
//# sourceMappingURL=LoginView.b7ca3d7d.chunk.js.map