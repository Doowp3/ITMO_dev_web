(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,a){e.exports=a(48)},25:function(e,t,a){},26:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),o=a.n(r),i=(a(25),a(18)),s=a.n(i),u=(a(26),a(3)),c=a(4),h=a(7),m=a(6),d=a(1),g=a(8),p=a(5),b=a.n(p),f=function(){function e(){Object(u.a)(this,e)}return Object(c.a)(e,null,[{key:"authenticateUser",value:function(e){localStorage.setItem("token",e)}},{key:"isUserAuthenticated",value:function(){return null!==localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("token")}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"getUserId",value:function(){return localStorage.getItem("userId")}}]),e}(),v=a(9),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={name:"",password:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,l=a.password;b.a.post("/login",{name:n,password:l}).then(function(e){console.log("Result:",e),f.authenticateUser(e.data.token),console.log("token:",f.getToken()),t.setState({name:"",password:""}),t.props.refreshPage()},function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",required:!0})),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChange,name:"password",required:!0})),l.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(n.Component),w=(a(46),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={name:"",email:"",password:"",repeat_password:"",message:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,l=a.password,r=a.repeat_password,o=a.email;l!=r&&this.setState({message:"Password does not match with repeat password field!<br/>"}),b.a.post("/register",{name:n,email:o,password:l}).then(function(e){console.log(e)}).then(function(e){t.props.refreshPage()},function(e){console.log(e),document.location.reload(!0)})}},{key:"render",value:function(){return l.a.createElement("div",{id:"signup"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Email:",l.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleChange,name:"email",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChange,name:"password",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Repeat Password:",l.a.createElement("input",{type:"password",value:this.state.repeat_password,onChange:this.handleChange,name:"repeat_password",required:!0})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("div",{id:"message"},this.state.message))}}]),t}(n.Component)),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChangeImage=a.handleChangeImage.bind(Object(d.a)(a)),a.componentWillMount=a.componentWillMount.bind(Object(d.a)(a)),a.state={products:[],results:[]},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleChangeImage",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.files[0]))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.name,n=(t.image,t.description),l=new FileReader;l.readAsDataURL(this.state.image),l.onload=function(){var e=this,t=l.result;console.log(t),b.a.post("/addproduct",{name:a,result:t,description:n},{headers:{Authorization:"Bearer "+f.getToken()}}).then(function(t){console.log(t),e.forceUpdate()})},l.onerror=function(e){console.log("Error: ",e)}}},{key:"refreshPage",value:function(){this.forceUpdate()}},{key:"componentWillMount",value:function(){b.a.get("/products",{headers:{Authorization:"Bearer "+f.getToken()}}).then(function(e){alert(JSON.stringify(e.data.image))})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("tbody",null,""),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name of the image:",l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",required:!0})),l.a.createElement("label",null,"Image:",l.a.createElement("input",{type:"file",onChange:this.handleChangeImage,name:"image",required:!0})),l.a.createElement("label",null,"description:",l.a.createElement("input",{type:"text",value:this.state.description,onChange:this.handleChange,name:"description",required:!0})),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),k=(a(47),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={show:!1},a.refreshPage=a.refreshPage.bind(Object(d.a)(a)),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({shown:!this.state.shown})}},{key:"refreshPage",value:function(){this.forceUpdate()}},{key:"logout",value:function(){alert("logout"),b.a.post("/logout",{token:f.getToken()}).then(function(e){console.log(e)}),f.deauthenticateUser(),this.refreshPage()}},{key:"render",value:function(){var e={display:this.state.shown?"none":"block"},t={display:this.state.shown?"block":"none"};return l.a.createElement("div",null,f.isUserAuthenticated()?l.a.createElement("div",{id:"main_div"},l.a.createElement(y,null),l.a.createElement("div",{id:"logout"},l.a.createElement("button",{onClick:this.logout.bind(this)},"LogOut"))):l.a.createElement("div",{id:"login"},l.a.createElement("div",{style:e},l.a.createElement(E,{refreshPage:this.refreshPage}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.toggle.bind(this)},"Register")),l.a.createElement("div",{style:t},l.a.createElement(w,{refreshPage:this.refreshPage}))))}}]),t}(n.Component));var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),l.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.80d95abe.chunk.js.map