(this["webpackJsonpgoit-react-hw-08-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-08-hooks-phonebook"]||[]).push([[4],{93:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(33),l=t(34),c=t(36),o=t(35),r=t(0),i=t(8),h=t(23),u=t(1),m=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return(e=a.call.apply(a,[this].concat(c))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,l=t.value;e.setState(Object(n.a)({},s,l))},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state),e.setState({name:"",email:"",password:""})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"Title",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(u.jsxs)("form",{type:"submit",onSubmit:this.handleSubmit,className:"Form",children:[Object(u.jsxs)("label",{className:"Label",children:["\u0418\u043c\u044f",Object(u.jsx)("input",{className:"Input",value:a,onChange:this.handleChange,type:"text",name:"name",placeholder:"Polina",required:!0})]}),Object(u.jsxs)("label",{className:"Label",children:["\u041f\u043e\u0447\u0442\u0430",Object(u.jsx)("input",{className:"Input",type:"email",name:"email",value:t,onChange:this.handleChange,placeholder:"Name@mail.com",required:!0})]}),Object(u.jsxs)("label",{className:"Label",children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(u.jsx)("input",{className:"Input",type:"password",name:"password",value:n,onChange:this.handleChange,autoComplete:"off",required:!0})]}),Object(u.jsx)("button",{type:"submit",className:"Button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}}]),t}(r.Component),b={onSubmit:h.d};a.default=Object(i.b)(null,b)(m)}}]);
//# sourceMappingURL=RegisterView.3aa7778f.chunk.js.map