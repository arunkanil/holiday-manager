/*! For license information please see 31.b73c21c3.chunk.js.LICENSE.txt */
(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[31],{301:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(17);var a=n(1),r=n.n(a),o=r.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(a.useContext)(o);return e||n[t]||t}},311:function(e,t,n){"use strict";n(80),n(396)},312:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(1)),o=s(n(402)),i=s(n(62));function s(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u,p,d,f,m=3,v=1,y="ant-message",h="move-up";var C={open:function(e){var t=void 0!==e.duration?e.duration:m,n={info:"info-circle",success:"check-circle",error:"close-circle",warning:"exclamation-circle",loading:"loading"}[e.type],a=e.key||v++,s=new Promise((function(s){var c=function(){return"function"===typeof e.onClose&&e.onClose(),s(!0)};!function(e){p?e(p):o.default.newInstance({prefixCls:y,transitionName:h,style:{top:u},getContainer:d,maxCount:f},(function(t){p?e(p):(p=t,e(t))}))}((function(o){var s=r.createElement(i.default,{type:n,theme:"loading"===n?"outlined":"filled"}),l=n?s:"";o.notice({key:a,duration:t,style:{},content:r.createElement("div",{className:"".concat(y,"-custom-content").concat(e.type?" ".concat(y,"-").concat(e.type):"")},e.icon?e.icon:l,r.createElement("span",null,e.content)),onClose:c})}))})),c=function(){p&&p.removeNotice(a)};return c.then=function(e,t){return s.then(e,t)},c.promise=s,c},config:function(e){void 0!==e.top&&(u=e.top,p=null),void 0!==e.duration&&(m=e.duration),void 0!==e.prefixCls&&(y=e.prefixCls),void 0!==e.getContainer&&(d=e.getContainer),void 0!==e.transitionName&&(h=e.transitionName,p=null),void 0!==e.maxCount&&(f=e.maxCount,p=null)},destroy:function(){p&&(p.destroy(),p=null)}};["success","info","warning","error","loading"].forEach((function(e){C[e]=function(t,n,a){return function(e){return"[object Object]"===Object.prototype.toString.call(e)&&!!e.content}(t)?C.open(l(l({},t),{type:e})):("function"===typeof n&&(a=n,n=void 0),C.open({content:t,duration:n,type:e,onClose:a}))}})),C.warn=C.warning;var g=C;t.default=g},313:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"a",(function(){return C})),n.d(t,"d",(function(){return b}));var a=n(2),r=n.n(a),o=(n(311),n(312)),i=n.n(o),s=n(4),c=n(109),l=n.n(c),u=n(321),p=n.n(u),d=n(29);l.a.defaults.baseURL=d.a.remoteServiceBaseUrl;var f={headers:{Authorization:"Bearer ".concat(p.a.get("Abp.AuthToken"))}};function m(e){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t,f).catch((function(e){return console.log(e.response),i.a.error(e.response.data.error.message),e.response}));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post(t,n,f).catch((function(e){return console.log(e.response),i.a.error(e.response.data.error.message),e.response}));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.delete("".concat(t).concat(n),f).catch((function(e){return console.log(e.response),i.a.error("record cannot be deleted"),i.a.error(e.response.data.error.message),e.response}));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put(t,n,f).catch((function(e){return console.log(e.response),i.a.error(e.response.data.error.message),e.response}));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},314:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"F",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"l",(function(){return i})),n.d(t,"G",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"i",(function(){return l})),n.d(t,"E",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"w",(function(){return d})),n.d(t,"x",(function(){return f})),n.d(t,"P",(function(){return m})),n.d(t,"f",(function(){return v})),n.d(t,"z",(function(){return y})),n.d(t,"Q",(function(){return h})),n.d(t,"g",(function(){return C})),n.d(t,"t",(function(){return g})),n.d(t,"N",(function(){return b})),n.d(t,"e",(function(){return E})),n.d(t,"m",(function(){return x})),n.d(t,"J",(function(){return D})),n.d(t,"I",(function(){return w})),n.d(t,"d",(function(){return k})),n.d(t,"H",(function(){return O})),n.d(t,"A",(function(){return T})),n.d(t,"n",(function(){return L})),n.d(t,"K",(function(){return N})),n.d(t,"O",(function(){return j})),n.d(t,"v",(function(){return R})),n.d(t,"u",(function(){return I})),n.d(t,"L",(function(){return S})),n.d(t,"p",(function(){return A})),n.d(t,"q",(function(){return P})),n.d(t,"s",(function(){return q})),n.d(t,"M",(function(){return F})),n.d(t,"o",(function(){return G})),n.d(t,"j",(function(){return M})),n.d(t,"y",(function(){return U})),n.d(t,"r",(function(){return _})),n.d(t,"R",(function(){return H})),n.d(t,"C",(function(){return B})),n.d(t,"S",(function(){return W})),n.d(t,"D",(function(){return J})),n.d(t,"h",(function(){return K})),n.d(t,"B",(function(){return z}));var a="api/services/app/Department/GetAll?MaxResultCount=20000",r="api/services/app/Department/CreateOrEdit",o="api/services/app/Department/Delete?id=",i="api/services/app/Designation/GetAll?MaxResultCount=20000",s="api/services/app/Designation/CreateOrEdit",c="api/services/app/Designation/Delete?id=",l="api/services/app/Country/GetAll?MaxResultCount=20000",u="api/services/app/Country/CreateOrEdit",p="api/services/app/Country/Delete?id=",d="api/services/app/LeaveType/GetAll?MaxResultCount=20000",f="/api/services/app/LeaveType/GetAllByCountry?MaxResultCount=20000",m="api/services/app/LeaveType/CreateOrEdit",v="api/services/app/LeaveType/Delete?id=",y="api/services/app/PublicHoliday/GetAll?MaxResultCount=20000&Year=",h="api/services/app/PublicHoliday/CreateOrEdit",C="api/services/app/PublicHoliday/Delete?id=",g="api/services/app/LeaveEntitlement/GetAll?MaxResultCount=20000",b="/api/services/app/LeaveEntitlement/CreateOrEdit",E="api/services/app/LeaveEntitlement/Delete?id=",x="api/services/app/EmployeeProfile/GetAll?MaxResultCount=20000",D="api/services/app/EmployeeProfile/PostEmployeesFromAD",w="/api/services/app/EmployeeProfile/CreateOrEdit",k="api/services/app/EmployeeProfile/Delete?id=",O="/api/services/app/EmployeeProfile/Import",T="/api/services/app/User/GetAll?MaxResultCount=20000",L="/api/services/app/EmployeeLeaveEntitlement/GetAllByUserId",N="/api/services/app/EmployeeLeaveEntitlement/CreateOrEdit",j="/api/services/app/LeaveRequest/Create",R="/api/services/app/LeaveRequest/GetLeaveRequestedForMe/",I="/api/services/app/LeaveRequest/GetLeaveRequestedForAdmin?",S="/api/services/app/LeaveExcelExporter/ExportAdminLeavesToFile",A="api/services/app/LeaveRequest/GetLeaveConflicts?",P="/api/services/app/LeaveRequest/GetLeaveConflictsDetailsForApprover?",q="/api/services/app/LeaveRequestHistory/Get?",F="/api/File/UploadFile",G="/api/File/DownloadFile",M="/api/services/app/EmployeeProfile/GetCurrentUser",U="/api/services/app/LeaveRequest/GetMyLeaveDashboards",_="/api/services/app/LeaveRequest/GetLeaveDetails",H="/api/services/app/LeaveRequest/Reject",B="/api/services/app/LeaveRequest/Approve",W="/api/services/app/LeaveRequest/Update",J="/api/services/app/LeaveRequest/Cancel",K="/api/services/app/LeaveTransferJobHistory/GetAll",z="/api/services/app/LeaveTransferJobHistory/Create"},321:function(e,t,n){var a,r;!function(o){if(void 0===(r="function"===typeof(a=o)?a.call(t,n,t,e):a)||(e.exports=r),!0,e.exports=o(),!!0){var i=window.Cookies,s=window.Cookies=o();s.noConflict=function(){return window.Cookies=i,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var a in n)t[a]=n[a]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(a){function r(){}function o(t,n,o){if("undefined"!==typeof document){"number"===typeof(o=e({path:"/"},r.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(l){}n=a.write?a.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in o)o[c]&&(s+="; "+c,!0!==o[c]&&(s+="="+o[c].split(";")[0]));return document.cookie=t+"="+n+s}}function i(e,n){if("undefined"!==typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],i=0;i<o.length;i++){var s=o[i].split("="),c=s.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(s[0]);if(c=(a.read||a)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(u){}if(r[l]=c,e===l)break}catch(u){}}return e?r[e]:r}}return r.set=o,r.get=function(e){return i(e,!1)},r.getJSON=function(e){return i(e,!0)},r.remove=function(t,n){o(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))},349:function(e,t,n){"use strict";n(80),n(350)},350:function(e,t,n){},396:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var a=n(107),r=n.n(a),o=n(33),i=n.n(o),s=n(15),c=n.n(s),l=n(27),u=n.n(l),p=n(38),d=n.n(p),f=n(30),m=n.n(f),v=n(31),y=n.n(v),h=n(1),C=n.n(h),g=n(6),b=n.n(g),E=n(21),x=n.n(E),D=n(82),w=n(374),k=n(44),O=n.n(k),T=function(e){function t(){var e,n,a,r;u()(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=a=m()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.close=function(e){e&&e.stopPropagation(),a.clearCloseTimer(),a.props.onClose()},a.startCloseTimer=function(){a.props.duration&&(a.closeTimer=setTimeout((function(){a.close()}),1e3*a.props.duration))},a.clearCloseTimer=function(){a.closeTimer&&(clearTimeout(a.closeTimer),a.closeTimer=null)},r=n,m()(a,r)}return y()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",a=(e={},i()(e,""+n,1),i()(e,n+"-closable",t.closable),i()(e,t.className,!!t.className),e);return C.a.createElement("div",{className:O()(a),style:t.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:t.onClick},C.a.createElement("div",{className:n+"-content"},t.children),t.closable?C.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},t.closeIcon||C.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(h.Component);T.propTypes={duration:b.a.number,onClose:b.a.func,children:b.a.any,update:b.a.bool,closeIcon:b.a.node},T.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var L=T,N=0,j=Date.now();function R(){return"rcNotification_"+j+"_"+N++}var I=function(e){function t(){var e,n,a,r;u()(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=a=m()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={notices:[]},a.add=function(e){var t=e.key=e.key||R(),n=a.props.maxCount;a.setState((function(a){var r=a.notices,o=r.map((function(e){return e.key})).indexOf(t),i=r.concat();return-1!==o?i.splice(o,1,e):(n&&r.length>=n&&(e.updateKey=i[0].updateKey||i[0].key,i.shift()),i.push(e)),{notices:i}}))},a.remove=function(e){a.setState((function(t){return{notices:t.notices.filter((function(t){return t.key!==e}))}}))},r=n,m()(a,r)}return y()(t,e),d()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,a=this.state.notices,r=a.map((function(e,r){var o=Boolean(r===a.length-1&&e.updateKey),i=e.updateKey?e.updateKey:e.key,s=Object(w.a)(t.remove.bind(t,e.key),e.onClose);return C.a.createElement(L,c()({prefixCls:n.prefixCls},e,{key:i,update:o,onClose:s,onClick:e.onClick,closeIcon:n.closeIcon}),e.content)})),o=(e={},i()(e,n.prefixCls,1),i()(e,n.className,!!n.className),e);return C.a.createElement("div",{className:O()(o),style:n.style},C.a.createElement(D.default,{transitionName:this.getTransitionName()},r))}}]),t}(h.Component);I.propTypes={prefixCls:b.a.string,transitionName:b.a.string,animation:b.a.oneOfType([b.a.string,b.a.object]),style:b.a.object,maxCount:b.a.number,closeIcon:b.a.node},I.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},I.newInstance=function(e,t){var n=e||{},a=n.getContainer,o=r()(n,["getContainer"]),i=document.createElement("div");a?a().appendChild(i):document.body.appendChild(i);var s=!1;x.a.render(C.a.createElement(I,c()({},o,{ref:function(e){s||(s=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){x.a.unmountComponentAtNode(i),i.parentNode.removeChild(i)}}))}})),i)};var S=I;t.default=S},749:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));n(334);var a=n(335),r=n.n(a),o=(n(349),n(62)),i=n.n(o),s=(n(311),n(312)),c=n.n(s),l=n(315),u=n(2),p=n.n(u),d=n(4),f=n(7),m=n(13),v=n(105),y=n(103),h=n(102),C=n(1),g=n.n(C),b=n(387),E=n(332),x=n(376),D=n(598),w=n(313),k=n(314),O={weekday:"short",year:"numeric",month:"short",day:"numeric"},T=function(e){Object(y.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).onFileChange=function(t){e.setState({selectedFile:t.target.files[0]})},e.onFileUpload=Object(d.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("myFile",e.state.selectedFile,e.state.selectedFile.name),console.log(e.state.selectedFile),t.next=5,Object(w.c)(k.M,n);case 5:a=t.sent,console.log(a,"file upload"),e.setState({file:a.result});case 8:case"end":return t.stop()}}),t)}))),e.getConflicts=Object(d.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(w.b)("".concat(k.p,"FromDate=").concat(e.state.fromDate,"&ToDate=").concat(e.state.toDate));case 2:n=t.sent,console.log(n,"leaveConflicts"),e.setState({conflicts:n.result.conflicts,totalPublicHoliDays:n.result.totalPublicHoliDays,totalWorkingDays:n.result.totalWorkingDays});case 5:case"end":return t.stop()}}),t)}))),e.state={loading:!1,prevRequestId:0,leaveTypeList:[],leaveTypeId:null,details:"",fromDate:"",toDate:"",selectedFile:null,file:{},totalWorkingDays:"0",totalPublicHoliDays:"0",conflicts:[]},e.formChange=e.formChange.bind(Object(v.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLists();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"formChange",value:function(e){var t=e.target;this.setState(Object(l.a)({},t.name,t.value),(function(){this.state.fromDate&&this.state.toDate&&this.getConflicts()})),console.log(this.state)}},{key:"getLists",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.b)(k.w);case 2:t=e.sent,console.log(t),this.setState({leaveTypeList:t.result.items,leaveTypeId:this.props.location.state.data.leaveTypeId,details:this.props.location.state.data.details,fromDate:this.props.location.state.data.fromDate,toDate:this.props.location.state.data.toDate,prevRequestId:this.props.location.state.data.leaveRequestId});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={},this.setState({loading:!0}),n="2"!==this.state.leaveTypeId?{id:this.state.prevRequestId,leaveTypeId:this.state.leaveTypeId,details:this.state.details,fromDate:this.state.fromDate,toDate:this.state.toDate}:{id:this.state.prevRequestId,leaveTypeId:this.state.leaveTypeId,details:this.state.details,fromDate:this.state.fromDate,toDate:this.state.toDate,file:{fileName:this.state.file.fileName,fileType:this.state.file.fileType,fileToken:this.state.file.fileToken}},e.next=6,Object(w.d)(k.S,n);case 6:a=e.sent,console.log(a),!0===a.success?(c.a.success("Leave Re-applied successfully"),this.setState({loading:!1}),this.props.history.push("/my_profile")):(c.a.error("Something went wrong"),this.setState({loading:!1}));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return g.a.createElement(r.a,null,g.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},g.a.createElement(i.a,{type:"arrow-left",style:{marginRight:"20px",fontSize:"x-large"},onClick:function(){return window.history.go(-2),!1}}),g.a.createElement("span",{style:{textAlign:"left",fontSize:"x-large",verticalAlign:"middle"}},"Amend & Re-Apply Leave")),g.a.createElement("hr",null),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col"},g.a.createElement(b.a,{onSubmit:this.handleSubmit},g.a.createElement(b.a.Group,{controlId:"exampleForm.ControlSelect2"},g.a.createElement(b.a.Label,null,"Leave Type ",g.a.createElement("span",{className:"required"},"*")),g.a.createElement(b.a.Control,{as:"select",required:!0,name:"leaveTypeId",onChange:this.formChange},this.state.leaveTypeList.map((function(t){return g.a.createElement("option",{value:t.id,selected:t.id==e.state.leaveTypeId},t.name)}))),g.a.createElement("small",{className:"form-text text-muted"},"Documents supporting cause must be attached in case of sick leave")),g.a.createElement(b.a.Group,{controlId:"exampleForm.ControlSelect3"},g.a.createElement(b.a.Label,null,"Date ",g.a.createElement("span",{className:"required"},"*")),g.a.createElement(b.a.Row,null,g.a.createElement(E.a,null," ",g.a.createElement(b.a.Control,{type:"date",placeholder:"yyyy-mm-dd",required:!0,name:"fromDate",onChange:this.formChange,defaultValue:this.state.fromDate})),g.a.createElement(E.a,null," ",g.a.createElement(b.a.Control,{type:"date",placeholder:"yyyy-mm-dd",required:!0,name:"toDate",onChange:this.formChange,defaultValue:this.state.toDate})))),g.a.createElement(b.a.Group,{controlId:"formUniqueID"},g.a.createElement(b.a.Label,null,"Leave Details ",g.a.createElement("span",{className:"required"},"*")),g.a.createElement(b.a.Control,{onChange:this.formChange,as:"textarea",rows:"3",required:!0,name:"details",defaultValue:this.state.details,placeholder:"Please provide a valid reason here."})),"2"==this.state.leaveTypeId?g.a.createElement(b.a.Group,null,g.a.createElement(b.a.Label,null,"Attach Document"),g.a.createElement(b.a.Row,null,g.a.createElement(E.a,null,g.a.createElement(b.a.File,{className:"position-relative",name:"file",onChange:this.onFileChange,id:"validationFormik107",feedbackTooltip:!0})),g.a.createElement(E.a,null,g.a.createElement(x.a,{variant:"outline-primary",size:"sm",onClick:this.onFileUpload},"Upload"))),g.a.createElement("small",{className:"form-text text-muted"},'Click on "Upload" to upload the document before you submit the request.')):null,this.state.loading?g.a.createElement(x.a,{disabled:this.state.loading,variant:"primary",type:"submit"},g.a.createElement(D.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Please wait"):g.a.createElement(x.a,{variant:"primary",type:"submit"},"Amend & Reapply"))),g.a.createElement("div",{className:"col"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"leavebox"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col display-4"},this.state.totalWorkingDays),g.a.createElement("div",{className:"col align-self-center"},"WORKING ",g.a.createElement("br",null),"days")))),g.a.createElement("div",{className:"row"},g.a.createElement("table",{className:"table table-striped"},g.a.createElement("tbody",null,this.state.conflicts.map((function(e){return g.a.createElement("tr",null,g.a.createElement("td",{className:e.isWeekend?"text-danger":""},g.a.createElement("b",null,new Date(e.date).toLocaleDateString("en-US",O))),g.a.createElement("td",null,e.hasConflicts?"Your Teammate is on leave this day":"No Conflicts"),g.a.createElement("td",null,e.isPublicHoliday?"Public holiday":""))}))))))))}}]),n}(g.a.Component)}}]);