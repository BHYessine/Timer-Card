(this.webpackJsonptimercard=this.webpackJsonptimercard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(8),i=n.n(a),r=(n(13),n(7)),l=n(2),o=n(3),j=n(5),h=n(4),u=(n(14),n(0)),d=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={digit:-2},e.componentDidMount=function(){e.myTimer=setInterval((function(){e.setState((function(e){return{digit:e.digit+1}}))}),1e3)},e.componentWillUnmount=function(){clearInterval(e.myTimer)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"counter",children:[" Time Shows : ",this.state.digit,"s "]})}}]),n}(c.a.Component),b=d,O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={Person:{fullName:"Yessine EN HLIMA",age:"31",imgSrc:"user.png",profession:"Full Stack Web Developer"},show:!1},e.handleClick=function(){e.setState(Object(r.a)(Object(r.a)({},e.state),{},{show:!e.state.show}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("button",{onClick:this.handleClick,children:this.state.show?"Hidden":"Show"}),this.state.show?Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:this.state.Person.imgSrc,width:"120px",height:"120px",alt:""}),Object(u.jsxs)("div",{className:"person",children:[Object(u.jsx)("label",{children:"Full Name:"}),Object(u.jsx)("input",{type:"text",value:this.state.Person.fullName,readOnly:!0}),Object(u.jsx)("label",{children:"Age:"}),Object(u.jsx)("input",{type:"text",value:this.state.Person.age+" years old",readOnly:!0}),Object(u.jsx)("label",{children:"Profession:"}),Object(u.jsx)("input",{type:"text",value:this.state.Person.profession,readOnly:!0})]}),Object(u.jsx)(b,{})]}):Object(u.jsx)("h2",{children:"Click to show the profile"})]})})}}]),n}(c.a.Component),p=O;i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.66a46313.chunk.js.map