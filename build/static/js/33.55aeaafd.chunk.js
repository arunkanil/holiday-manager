(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[33],{567:function(e,t,n){"use strict";n(359);var a=n(360),r=n.n(a),l=n(1);n(568);t.a=function(){return l.createElement(r.a,{className:"footer"},"Powered by"," ",l.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://untanglestrategy.com/"},l.createElement("span",{className:"text-danger"},"Untangle"),l.createElement("span",{style:{color:"grey"}},"_")))}},568:function(e,t,n){},575:function(e,t,n){e.exports=n.p+"static/media/user.c1ff4dc9.svg"},687:function(e,t,n){},690:function(e,t,n){},693:function(e,t,n){},694:function(e,t,n){e.exports=n.p+"static/media/ArcelorMittal-01.1bcdb5d5.svg"},751:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(13),l=n(103),c=n(102),o=(n(596),n(597)),i=n.n(o),s=(n(687),n(1)),m=n.n(s),u=n(16),p=n(565),g=n.n(p),h=n(567),f=(n(378),n(381)),d=n.n(f),E=(n(390),n(369)),y=n.n(E),b=(n(688),n(691)),j=n.n(b),k=(n(562),n(563)),v=n.n(k),O=(n(359),n(360)),C=n.n(O),w=(n(456),n(385)),x=n.n(w),_=(n(349),n(62)),I=n.n(_),N=(n(690),n(34)),A=n(68),S=n(575),M=n.n(S),L=s.createElement(x.a,null,s.createElement(x.a.Item,{key:"2"},s.createElement(A.b,{to:"/logout"},s.createElement(I.a,{type:"logout"}),s.createElement("span",null," ",Object(N.a)("Logout"))))),P=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=localStorage.getItem("name");return s.createElement(d.a,{className:"header-container"},s.createElement(C.a,{style:{textAlign:"left"},span:12},s.createElement(I.a,{className:"trigger",type:this.props.collapsed?"menu-unfold":"menu-fold",onClick:this.props.toggle})),s.createElement(C.a,{style:{padding:"0px 15px 0px 15px",textAlign:"right"},span:12},s.createElement(y.a,{overlay:L,trigger:["click"]},s.createElement(j.a,{style:{},count:0},s.createElement("label",{className:"header-name"},e),s.createElement(v.a,{style:{height:24,width:24},shape:"circle",alt:"profile",src:M.a})))))}}]),n}(s.Component),q=n(129),F=(n(693),n(694)),H=n.n(F),T=n(86),B=i.a.Sider,J=x.a.SubMenu,R=function(e){var t=e.collapsed,n=e.history,a=e.onCollapse;return s.createElement(B,{breakpoint:"lg",collapsedWidth:"0",trigger:null,className:"sidebar",width:256,collapsible:!0,collapsed:t,onCollapse:a},t?s.createElement(C.a,{onClick:function(){return n.push("/my_profile")},style:{textAlign:"center",marginTop:15,marginBottom:10,cursor:"pointer"}},s.createElement(v.a,{shape:"square",style:{height:27,width:70,borderRadius:0},src:H.a})):s.createElement(C.a,{onClick:function(){return n.push("/my_profile")},style:{textAlign:"center",marginTop:15,marginBottom:10,cursor:"pointer"}},s.createElement(v.a,{shape:"square",style:{height:54,width:170,borderRadius:0},src:H.a})),s.createElement(x.a,{theme:"dark",mode:"inline"},T.a.filter((function(e){return!e.isLayout&&e.showInMenu&&!e.innerMenu})).map((function(e,t){return e.permission&&!Object(N.b)(e.permission)||"create_leave_request"==e.name&&"admin"==localStorage.getItem("userName")||"my_profile"==e.name&&"admin"==localStorage.getItem("userName")||"leave_approval"==e.name&&"admin"==localStorage.getItem("userName")?null:s.createElement(x.a.Item,{key:e.path,onClick:function(){return n.push(e.path)}},s.createElement(I.a,{type:e.icon}),s.createElement("span",null,Object(N.a)(e.title)))})),Object(N.b)("Pages.Admin")?s.createElement(J,{key:"masters",title:s.createElement("span",null,s.createElement(I.a,{type:"form"}),s.createElement("span",null,"Masters"))},T.a.filter((function(e){return!e.isLayout&&e.showInMenu&&e.innerMenu})).map((function(e,t){return e.permission&&!Object(N.b)(e.permission)?null:s.createElement(x.a.Item,{key:e.path,onClick:function(){return n.push(e.path)}},s.createElement(I.a,{type:e.icon}),s.createElement("span",null,Object(N.a)(e.title)))}))):null,Object(N.b)("Pages.Admin")?s.createElement(x.a.Item,{key:"/initiate_carry_forward",onClick:function(){return n.push("/initiate_carry_forward")}},s.createElement(I.a,{type:"warning"}),s.createElement("span",null,Object(N.a)("Initiate Carry Forward"))):null))},U=n(36),W=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.b,{render:function(e){return m.a.createElement(u.a,{to:{pathname:"/exception?type=404",state:{from:e.location}}})}}))}}]),n}(s.Component),z=i.a.Content,D=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={collapsed:!1},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e.onCollapse=function(t){e.setState({collapsed:t})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.history,n=e.location.pathname,a=this.props.match.path,r=this.state.collapsed,l=s.createElement(i.a,{style:{minHeight:"100vh"}},s.createElement(R,{path:a,onCollapse:this.onCollapse,history:t,collapsed:r}),s.createElement(i.a,null,s.createElement(i.a.Header,{style:{background:"#fff",minHeight:52,padding:0}},s.createElement(P,{collapsed:this.state.collapsed,toggle:this.toggle})),s.createElement(z,{style:{margin:16}},s.createElement(u.d,null,"/"===n&&s.createElement(u.a,{from:"/",to:"admin"!=localStorage.getItem("userName")?"/my_profile":"/employee_management"}),T.a.filter((function(e){return!e.isLayout})).map((function(e,t){return s.createElement(u.b,{exact:!0,key:t,path:e.path,render:function(t){return s.createElement(q.a,{component:e.component,permission:e.permission})}})})),"/"!==n&&s.createElement(W,null))),"/user/login"===this.props.location.pathname?null:s.createElement(i.a.Footer,{style:{textAlign:"center"}},s.createElement(h.a,null))));return s.createElement(g.a,{title:U.a.getPageTitle(n)},l)}}]),n}(s.Component);t.default=D}}]);