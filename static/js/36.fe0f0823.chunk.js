(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[36],{569:function(e,t,n){e.exports=n.p+"static/media/abp-logo-long.348dee44.png"},685:function(e,t,n){},756:function(e,t,n){"use strict";n.r(t);n(163);var a,r,o=n(111),s=n.n(o),c=(n(382),n(383)),l=n.n(c),i=(n(349),n(62)),u=n.n(i),p=(n(378),n(381)),d=n.n(p),m=(n(359),n(360)),g=n.n(m),h=n(2),f=n.n(h),b=n(4),y=n(7),E=n(13),w=n(103),v=n(102),x=(n(458),n(459)),S=n.n(x),A=(n(685),n(1)),O=n(69),k=n(569),j=n.n(k),N=n(34),T=n(16),q=n(116),P={userNameOrEmailAddress:[{required:!0,message:Object(N.a)("ThisFieldIsRequired")}],password:[{required:!0,message:Object(N.a)("ThisFieldIsRequired")}],useAzureAD:[{required:!1}]},z=n(121),D=n(29),I=S.a.Item,R={scopes:["openid","User.Read"],state:"12345",prompt:"select_account"},F={scopes:["openid","User.Read"]},U=Object(O.b)(q.a.AuthenticationStore,q.a.SessionStore,q.a.AccountStore)(a=Object(O.c)(a=function(e){Object(w.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={loading:!1,loading1:!1},e.handleSubmit=function(){var t=Object(b.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.props.form.validateFields(function(){var t=Object(b.a)(f.a.mark((function t(n,a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=4;break}return e.setState({loading:!0}),t.next=4,e.props.authenticationStore.login(a).then(function(){var t=Object(b.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!1}),console.log("login request",a),console.log("login response",n),t.t0=console,t.next=6,abp.session;case 6:t.t1=t.sent,t.t0.log.call(t.t0,"abp session value after login",t.t1),console.log(e.props.location),console.log("href",window.location.href),window.location.href=""+D.a.appVirtualDirectoryPath;case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({loading:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.azureSignIn=function(){e.setState({loading1:!0}),z.a.loginPopup(R).then((function(t){return e.handleResponse(t)})).catch((function(t){console.error(t),e.setState({loading1:!1})}))},e.handleResponse=function(){var t=Object(b.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!==n?(console.log(n),r=n.account.userName,z.a.acquireTokenPopup(F).then((function(e){console.log(e),console.log("access_token",e.accessToken),localStorage.setItem("azureToken",e.accessToken),localStorage.setItem("expiresOn",e.expiresOn.toString()),console.log("username",e.account.userName),a={userNameOrEmailAddress:r,password:e.accessToken,useAzureAD:!0}})).then(function(){var t=Object(b.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.authenticationStore.login(a);case 2:e.setState({loading1:!1}),window.location.href=""+D.a.appVirtualDirectoryPath;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.error(t),e.setState({loading1:!1})})),console.log(r)):e.selectAccount();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectAccount=function(){var e=z.a.getAllAccounts();null!==e&&(e.length>1?console.warn("Multiple accounts detected."):1===e.length&&(r=e[0],console.log(r)))},e}return Object(E.a)(n,[{key:"render",value:function(){console.log("Login Page : abp session value after login",abp.session);var e=(this.props.location.state||{from:{pathname:"/"}}).from;if(console.log("Authentication Store",this.props.authenticationStore),console.log("Authenticated status",this.props.authenticationStore.isAuthenticated),this.props.authenticationStore.isAuthenticated)return A.createElement(T.a,{to:e});var t=this.props.form.getFieldDecorator;return A.createElement("div",{className:"d-md-flex h-md-100 align-items-center"},A.createElement("div",{className:"col-md-6 p-0 bg-indigo h-md-100 login-box"},A.createElement("div",{className:"text-white d-md-flex align-items-center h-100 text-center justify-content-center"},A.createElement("div",{className:"container-fluid",style:{backgroundColor:"#111d2c",height:"100vh"}}))),A.createElement("div",{className:"col-md-6 p-0 bg-white h-md-100 loginarea"},A.createElement("div",{className:"d-md-flex align-items-center h-md-100 justify-content-center"},A.createElement(S.a,{className:"",onSubmit:this.handleSubmit},A.createElement(d.a,null,A.createElement(d.a,{style:{marginTop:10}},A.createElement(g.a,null,A.createElement("img",{src:j.a,alt:"arcelor logo",className:"mx-auto d-block",style:{width:"42%",marginLeft:"30px"}}))),A.createElement("div",{style:{textAlign:"center",marginTop:"10px"}},A.createElement("h1",null,Object(N.a)("Holiday Approval System"))),A.createElement(d.a,{style:{marginTop:10,textAlign:"center"}},A.createElement(g.a,null,A.createElement("div",{className:"login-border-box py-5"},A.createElement(I,null,t("userNameOrEmailAddress",{rules:P.userNameOrEmailAddress})(A.createElement(l.a,{placeholder:"Username or Email",style:{width:"250px"},prefix:A.createElement(u.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),size:"large"}))),A.createElement(I,null,t("password",{rules:P.password})(A.createElement(l.a,{placeholder:Object(N.a)("Password"),style:{width:"250px"},prefix:A.createElement(u.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",size:"large"}))),A.createElement(d.a,{style:{textAlign:"center"}},A.createElement(g.a,null,A.createElement(s.a,{loading:this.state.loading,style:{backgroundColor:"#f5222d",color:"white",width:"165px"},htmlType:"submit",type:"danger"},"Login as SuperAdmin"))))))))),A.createElement(d.a,{className:"footnote"},"Powered by"," ",A.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://untanglestrategy.com/"},A.createElement("span",{className:"text-danger"},"Untangle"),A.createElement("span",{style:{color:"grey"}},"_")))))}}]),n}(A.Component))||a)||a;t.default=S.a.create()(U)}}]);