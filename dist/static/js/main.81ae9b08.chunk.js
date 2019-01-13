(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{316:function(e,t,a){},319:function(e,t,a){},350:function(e,t,a){e.exports=a.p+"static/media/react.f0e512c7.svg"},362:function(e,t,a){e.exports=a(769)},367:function(e,t,a){},374:function(e,t,a){},377:function(e,t,a){},380:function(e,t,a){},428:function(e,t,a){},430:function(e,t,a){},442:function(e,t,a){},498:function(e,t,a){},602:function(e,t,a){},687:function(e,t,a){},689:function(e,t,a){},691:function(e,t,a){},693:function(e,t,a){},711:function(e,t,a){},714:function(e,t,a){},722:function(e,t,a){},769:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(39),o=a.n(c),i=(a(367),a(370),a(372),a(16)),l=a(17),s=a(19),m=a(18),u=a(20),d=(a(374),a(377),a(380),a(109)),p=a.n(d),E=a(85),h=a(40),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={profile:"",isLoading:!0},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.github.com/users/ahmedeldessouki").then(function(t){e.setState({profile:t.data,isLoading:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.profile,a=e.isLoading;return r.a.createElement("div",null,a?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:this.state.loading}),"Loading..."):r.a.createElement("div",{className:"MyInfo"},r.a.createElement("div",{className:"first-container"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:t.avatar_url,alt:"profilePicture"})),r.a.createElement("ul",{className:"details-container"},r.a.createElement("li",null,t.name),r.a.createElement("li",{className:"follow-container"},"Lives in ",t.location),r.a.createElement("li",null,r.a.createElement("a",{href:t.html_url},r.a.createElement(E.a,null),"   My Github")))),r.a.createElement("div",{className:"second-container"},r.a.createElement("p",null,"Welcome! I'm Ahmed Eldessouki.  I'm 29 years old from Cairo, Egypt currently living in Turkey. I work as a",r.a.createElement("em",null," Front-End Developer"),". I graduated from University Of South Wales. I work at RoomMe as an entry level Front-End Developer. I'm a very passionate newbie Front-End Developer who loves  to develop himself. A strength of mine, is my ability to be observant of small details and to stay up-to-date with the newest ",r.a.createElement("em",null,"technologies and techniques"),"."))))}}]),t}(n.Component),g=(a(428),a(430),a(41)),j=a(30),b=a(777),N=a(158),v=a(12),O=function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();console.log("project actions....:",e),r.collection("projects").doc("".concat(e.id)).delete().then(function(){v.toast.success('Project "'.concat(e.projectName,'" deleted')),t({type:"PROJECT_DELETED"})}).catch(function(e){v.toast.error("Project Deletion Failed"),t({type:"PROJECT_DELETE_ERROR",err:e})})}},y=a(32),S=(a(442),a(89)),D=a(772),C=a(61),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleShow=a.handleShow.bind(Object(y.a)(Object(y.a)(a))),a.handleClose=a.handleClose.bind(Object(y.a)(Object(y.a)(a))),a.handleDelete=a.handleDelete.bind(Object(y.a)(Object(y.a)(a))),a.state={show:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleDelete",value:function(){this.props.project?this.props.deleteProject(this.props.project):this.props.contact?this.props.deleteMessage(this.props.contact):this.props.notification&&this.props.deleteNotification(this.props.notification),this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this.props.project||this.props.contact||this.props.notification?null:{display:"none"},t=this.props.title;return r.a.createElement("div",{className:"PopUp"},r.a.createElement(D.a,{bsStyle:"primary",className:"toggle-button",bsSize:"large",onClick:this.handleShow},r.a.createElement(E.c,null)),r.a.createElement("div",{className:"static-modal"},r.a.createElement(S.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(S.a.Header,{closeButton:!0},r.a.createElement(S.a.Title,null,"Warning")),r.a.createElement(S.a.Body,null,"Do you want to delete this ",t),r.a.createElement(S.a.Footer,null,r.a.createElement(D.a,{onClick:this.handleClose},"No"),r.a.createElement(D.a,{bsStyle:"danger",style:e,onClick:this.handleDelete},"Yes")))))}}]),t}(n.Component),T=Object(C.a)(null,function(e){return{deleteProject:function(t){return e(O(t))},deleteMessage:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();console.log("message actions....:",e),r.collection("contactedMe").doc("".concat(e.id)).delete().then(function(){v.toast.success('Message from "'.concat(e.contactName,'" is no longer exits')),t({type:"MESSAGE_DELETED"})}).catch(function(e){v.toast.error("Error! Message Still Exists"),t({type:"MESSAGE_DELETE_ERROR",err:e})})}}(t))},deleteNotification:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();console.log("notification actions....:",e),r.collection("notifications").doc("".concat(e.id)).delete().then(function(){v.toast.success("Notification deleted"),t({type:"NOTIFICATION_DELETED"})}).catch(function(e){v.toast.error("Notification Deletion Failed"),t({type:"NOTIFICATION_DELETE_ERROR",err:e})})}}(t))}}})(w),P=Object(j.b)(function(e){return{auth:e.firebase.auth}},function(e){return{deleteProject:function(t){return e(O(t))}}})(function(e){var t=e.project,a=e.auth;return r.a.createElement("div",null,r.a.createElement("div",{className:"ProjectSummary"},a.uid?r.a.createElement("div",{className:"icons-svg"},r.a.createElement(b.a,{to:"/edit/".concat(t.id),key:t},r.a.createElement(g.g,null)),r.a.createElement(T,{project:t,title:"Project"})):null,r.a.createElement(b.a,{to:e.to,key:e.key},t.projectLogo[0]?r.a.createElement("img",{alt:"Project's logo",src:t.projectLogo[0]}):null,r.a.createElement("h3",null,t.projectName),r.a.createElement("p",null,t.description))))}),L=function(e){var t=e.projectsData;return r.a.createElement("div",{className:"Projects"},r.a.createElement("h1",null,"My Projects"),r.a.createElement("div",{className:"cards-wrapper"},t&&t.map(function(e){return r.a.createElement(P,{project:e,to:"/projects/".concat(e.id),key:e.id})})))},R=a(11),k=(a(498),a(28)),_=a(31),A={contactName:"",email:"",phoneNumber:"",description:""},I=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state=Object(R.a)({},A),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.errors,a=e.touched,n=e.isSubmitting,c=e.handleChange,o=e.contError,i=e.contactName,l=e.email,s=e.phoneNumber,m=e.description;return r.a.createElement("div",{className:"ContactMe"},r.a.createElement("h1",null,"Contact Me"),r.a.createElement(k.b,{id:"ContactMe"},r.a.createElement("div",{className:"first-container"},r.a.createElement("div",{className:"field-container"},r.a.createElement("div",{className:"input-svg"},r.a.createElement(g.a,null),r.a.createElement(k.a,{name:"contactName",value:i,placeholder:"Enter your name"})),t.contactName&&a.contactName?r.a.createElement("p",{className:"error-message"},t.contactName):null),r.a.createElement("div",{className:"field-container"},r.a.createElement("div",{className:"input-svg"},r.a.createElement(E.b,null),r.a.createElement(k.a,{name:"email",value:l,type:"email",placeholder:"Email Address"})),t.email&&a.email?r.a.createElement("div",{className:"error-message"},t.email):null),r.a.createElement("div",{className:"field-container"},r.a.createElement("div",{className:"input-svg"},r.a.createElement(g.h,null),r.a.createElement(k.a,{name:"phoneNumber",type:"tel",value:s,placeholder:"Enter Your Phone Number"})),t.phoneNumber&&a.phoneNumber?r.a.createElement("div",{className:"error-message"},t.phoneNumber):null)),r.a.createElement("div",{className:"second-container"},r.a.createElement("textarea",{name:"description",onChange:c,value:m,className:"textArea",required:!0})),r.a.createElement("button",{type:"submit",disabled:n},"Submit"),o?r.a.createElement("div",{className:"error-message"},o):null),n?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement("span",null,"Thank you for contacting me"),r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:n}),r.a.createElement("span",null,"I will get back to you soon")):null)}}]),t}(n.Component),M=Object(k.c)({validationSchema:_.object().shape({contactName:_.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:_.string().email("Invalid email").required("Required"),phoneNumber:_.string().min(11,"Too Short!").max(13,"Too Long!").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid"),description:_.string()}),enableReinitialize:!0,mapPropsToValues:function(e){return Object(R.a)({},e)},mapValuesToPayload:function(e){return e},handleSubmit:function(e,t){var a=t.setErrors,n=t.resetForm,r=t.setSubmitting;setTimeout(function(){"admin"===e.name?a({contactName:"Nice try!"}):(e.contactedMe(e),n({}),document.getElementById("ContactMe").reset()),r(!1)},2e3)},displayName:"ContactMe"})(I),F=Object(C.a)(function(e){return{contError:e.contactedMe.contError}},function(e){return{contactedMe:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("contactedMe").add({contactName:e.contactName,email:e.email,phoneNumber:e.phoneNumber,description:e.description,sentAt:new Date}).then(function(){v.toast.success('Thanks "'.concat(e.contactName,'" For Contacting Me')),t({type:"MESSAGE_SENT",contact:e})}).catch(function(e){v.toast.error("Sorry, I Didn't Get Your Message. Due to an Error"),t({type:"MESSAGE_NOT_SENT",err:e})})}}(t))}}})(M),U=(a(602),a(350)),x=a.n(U),G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MyFooter"},r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"left-container"},r.a.createElement("a",{href:"https://www.linkedin.com/in/ahmedeldessouki/"},r.a.createElement(g.f,null)),r.a.createElement("a",{href:"https://www.github.com/ahmedeldessouki/"},r.a.createElement(g.c,null)),r.a.createElement("a",{href:"https://plus.google.com/+AhmedElDessouki1"},r.a.createElement(g.d,null)),r.a.createElement("a",{href:"https://www.instagram.com/nem0ahmed"},r.a.createElement(g.e,null)),r.a.createElement("a",{href:"https://www.facebook.com/nemoahmed"},r.a.createElement(g.b,null)),r.a.createElement("a",{href:"https://www.twitter.com/nem0adam"},r.a.createElement(g.k,null))),r.a.createElement("div",{className:"center-container"},r.a.createElement("img",{className:"react-logo",alt:"",src:x.a}),r.a.createElement(g.j,{style:{color:"hotpink",alignSelf:"center"}})),r.a.createElement("div",{className:"right-container"},r.a.createElement(g.i,null),r.a.createElement("p",null,"2019 Ahmed ElDessouki")))}}]),t}(n.Component),z=a(351),B=a.n(z),q=a(43),J=a(34),W=(a(316),a(774)),H=a(778),K=a(773),V=Object(j.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){v.toast.success("See You Soon"),e({type:"SIGNOUT_SUCCESS"})}).catch(function(t){v.toast.error("Shit, You Can't Logout"),e({type:"SIGNOUT_FAILED",err:t})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(W.a,{className:"Navigation",inverse:!0,collapseOnSelect:!0},r.a.createElement(W.a.Header,null,r.a.createElement(W.a.Brand,null,r.a.createElement("span",null,e.title)),r.a.createElement(W.a.Toggle,null)),r.a.createElement(W.a.Collapse,null,r.a.createElement(H.a,{pullRight:!0},r.a.createElement(K.a,{eventKey:1,href:"/"},"Home"),r.a.createElement(K.a,{eventKey:2,href:"/#projects"},"Projects"),r.a.createElement(K.a,{eventKey:3,href:"/#contactMe"},"Contact Me"),r.a.createElement(K.a,{eventKey:4,href:"/dashboard"},"DashBoard"),r.a.createElement(K.a,{eventKey:5,href:"/create-project"},"Create Project"),r.a.createElement(K.a,{eventKey:5,href:"/signup"},"SignUp"),r.a.createElement(K.a,{eventKey:5,onClick:e.signOut,href:"/"},"SignOut"))))))}),Y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={intervalId:0,title:"Nemo Adam"},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projectsData,a=e.auth,n=e.profile,c=a.uid?r.a.createElement(V,{profile:n,title:this.state.title}):r.a.createElement("div",{className:"myNav-container"},r.a.createElement("div",{className:"my-name"},r.a.createElement("span",null,"Nemo Adam")),r.a.createElement("div",{className:"scroll-spy"},r.a.createElement("a",{className:"scroll-spy-item",href:"/"},"Home"),r.a.createElement("a",{className:"scroll-spy-item",href:"#projects"},"Projects"),r.a.createElement("a",{className:"scroll-spy-item",href:"#contactMe"},"Contact Me")));return r.a.createElement("div",{className:"Home"},r.a.createElement("header",{className:"Home-header",id:"1"},c,r.a.createElement(f,null)),r.a.createElement(B.a,{StopPosition:0,ShowAtPosition:150,EasingType:"easeOutCubic",AnimationDuration:500,ContainerClassName:"ScrollUpButton__Container",TransitionClassName:"ScrollUpButton__Toggled"}),r.a.createElement("main",{id:"projects"},r.a.createElement(L,{projectsData:t})),r.a.createElement("footer",{id:"contactMe"},r.a.createElement(F,null),r.a.createElement(G,null)))}}]),t}(n.Component),X=Object(J.d)(Object(j.b)(function(e){return{projectsData:e.firestore.ordered.projects,auth:e.firebase.auth,profile:e.firebase.profile}}),Object(q.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"projectLogo"}]))(Y),$=a(779),Q=a(770),Z=a(775),ee=(a(687),function(e){var t=e.notifications;return r.a.createElement("div",{className:"Notifications"},r.a.createElement("h1",null,"Notification"),r.a.createElement("div",{className:"notification-card"},r.a.createElement("div",null,r.a.createElement("ul",{className:"items"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:Array.from(e.content.split(" ",3)).join("-")},r.a.createElement(T,{notification:e,title:"Notification"}),r.a.createElement("h4",null,e.user),r.a.createElement("h6",null,e.content),r.a.createElement("span",null,e.time.toDate().toDateString())))})))))}),te=(a(689),a(691),a(693),a(354)),ae=function(e){var t=e.contact;return r.a.createElement("div",{className:"MessagesSummary"},r.a.createElement(T,{contact:t,title:"Message"}),r.a.createElement(b.a,{to:e.to,key:e.key},r.a.createElement("h3",null,t.contactName),r.a.createElement(te.Scrollbars,{className:"my-scroller"},r.a.createElement("p",{className:"description"},t.description)),r.a.createElement("span",null,t.sentAt.toDate().toDateString())))},ne=function(e){var t=e.messagesData;return console.log(t),r.a.createElement("div",{className:"Messages"},r.a.createElement("h1",null,"My Messages"),r.a.createElement("div",{className:"cards-wrapper"},t&&t.map(function(e){return r.a.createElement(ae,{contact:e,to:"/Messages/".concat(e.id),key:e.id})})))},re=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projectsData,a=e.auth,n=e.notifications,c=e.messagesData,o=e.isSubmitting;return r.a.createElement("div",null,a.uid?r.a.createElement("div",null,o?r.a.createElement("div",{className:"Dashboard"},r.a.createElement(V,{title:"Dashboard"}),r.a.createElement("main",null,r.a.createElement("div",{className:"Dashboard-items"},r.a.createElement("div",{className:"first-container"},r.a.createElement(L,{projectsData:t})),r.a.createElement("div",{className:"second-container"},r.a.createElement(ee,{notifications:n})))),r.a.createElement("div",null,r.a.createElement(ne,{messagesData:c}))):r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:!o}),"Loading...")):r.a.createElement(Z.a,{to:"/signin"}))}}]),t}(n.Component),ce=Object(J.d)(Object(j.b)(function(e){return{projectsData:e.firestore.ordered.projects,isSubmitting:e.firebase.profile.isLoaded,messagesData:e.firestore.ordered.contactedMe,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(q.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"contactedMe",orderBy:["sentAt","desc"]},{collection:"notifications",limit:10,orderBy:["time","desc"]}]))(re),oe=(a(711),Object(J.d)(Object(j.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.contactedMe;return{message:n?n[a]:null,auth:e.firebase.auth}}),Object(q.firestoreConnect)([{collection:"contactedMe"}]))(function(e){var t=e.message;return t?r.a.createElement("div",{className:"MessageDetails"},r.a.createElement(V,null),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"first-container"},r.a.createElement("div",{className:"double-container"},r.a.createElement("h2",null,r.a.createElement("a",{href:"mailto:".concat(t.email)},t.email)),r.a.createElement("h2",null,t.phoneNumber)),r.a.createElement("p",null,t.description)),r.a.createElement("div",{className:"double-container"},r.a.createElement("div",null,"Author: ",t.contactName),r.a.createElement("div",null,"Created At: ",t.sentAt.toDate().toDateString())))):r.a.createElement("div",null,e.auth.uid?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:!0}),"Loading..."):r.a.createElement(Z.a,{to:"/signin"}))})),ie=a(153),le=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navigation"},r.a.createElement("ul",{className:"not-auth-nav"},r.a.createElement("li",null,r.a.createElement(b.a,{to:"/"},"Home"))))}}]),t}(n.Component),se=(a(319),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState(Object(ie.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e.state={email:"",password:""},e.handleSubmit=e.handleSubmit.bind(Object(y.a)(Object(y.a)(e))),e.handleChange=e.handleChange.bind(Object(y.a)(Object(y.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError,a=e.auth,n=a.uid?r.a.createElement(V,null):r.a.createElement(le,null);return r.a.createElement("div",null,a.uid?r.a.createElement(Z.a,{to:"/"}):r.a.createElement("div",{className:"SignIn"},n,r.a.createElement("h1",null,"Signin"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field-container"},r.a.createElement("input",{type:"email",placeholder:"Enter Email",id:"email",onChange:this.handleChange}),r.a.createElement("input",{type:"password",placeholder:"Enter Password",id:"password",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"SignIn"),t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component)),me=Object(j.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){v.toast.success('Welcome "'.concat(a.email,'"')),e({type:"LOGIN_SUCCESS"})}).catch(function(t){v.toast.error("Login Failed, Incorrect Credentials!!"),e({type:"LOGIN_ERROR",err:t})})}));var a}}})(se),ue={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},de=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=Object(R.a)({},ue),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.errors,a=e.touched,n=e.isSubmitting,c=e.authError,o=e.auth,i=e.handleSubmit,l=e.firstName,s=e.lastName,m=e.email,u=e.password,d=e.confirmPassword;return r.a.createElement("div",null,o.uid?r.a.createElement("div",{className:"SignUp"},r.a.createElement(V,{title:"Registration"}),r.a.createElement("h1",null,"Sign up"),r.a.createElement(k.b,{id:"#sign-up",onSubmit:i},r.a.createElement("div",{className:"double-container"},r.a.createElement("div",{className:"field-container"},r.a.createElement(k.a,{name:"firstName",value:l,placeholder:"First Name"}),t.firstName&&a.firstName?r.a.createElement("p",{className:"error-message"},t.firstName):null),r.a.createElement("div",{className:"field-container"},r.a.createElement(k.a,{name:"lastName",value:s,placeholder:"Last Name"}),t.lastName&&a.lastName?r.a.createElement("div",{className:"error-message"},t.lastName):null)),r.a.createElement("div",{className:"field-container"},r.a.createElement(k.a,{name:"email",type:"email",value:m,placeholder:"Email Address"}),t.email&&a.email?r.a.createElement("div",{className:"error-message"},t.email):null),r.a.createElement("div",{className:"double-container"},r.a.createElement("div",{className:"field-container"},r.a.createElement(k.a,{name:"password",type:"password",value:u,placeholder:"Enter Password"}),t.password&&a.password?r.a.createElement("div",{className:"error-message"},t.password):null),r.a.createElement("div",{className:"field-container"},r.a.createElement(k.a,{name:"confirmPassword",type:"password",value:d,placeholder:"Re-Enter Password"}),t.confirmPassword&&a.confirmPassword?r.a.createElement("div",{className:"error-message"},t.confirmPassword):null),c?r.a.createElement("div",{className:"error-message"},c):null),r.a.createElement("button",{type:"submit",disabled:n},"Submit")),n?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:n}),"Loading..."):null):r.a.createElement(Z.a,{to:"/signin"}))}}]),t}(n.Component),pe=Object(k.c)({validationSchema:_.object().shape({firstName:_.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),lastName:_.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:_.string().email("Invalid email").required("Required"),password:_.string().min(6,"Too Short!").required("Required"),confirmPassword:_.string().oneOf([_.ref("password"),null],"Passwords don't match").required("Confirm Password is required")}),mapPropsToValues:function(e){return Object(R.a)({},e)},mapValuesToPayload:function(e){return e},handleSubmit:function(e,t){setTimeout(function(){"admin"===e.firstName?t.setErrors({firstName:"Nice try!"}):"admin"===e.lastName?t.setErrors({lastName:"Nice try!"}):(e.signUp(e),document.getElementById("sign-up").reset(),t.resetForm()),t.setSubmitting(!1)},2e3)},displayName:"SignUp"})(de),Ee=Object(C.a)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,o=r(),i=c();o.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return i.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})}).then(function(){v.toast.success('Welcome "'.concat(a.email,'" to The Club')),e({type:"SIGNUP_SUCCESS"})}).catch(function(t){v.toast.error("SignUp Failed"),e({type:"SIGNUP_ERROR",err:t})})}));var a}}})(pe),he=(a(714),a(716),a(355)),fe=Object(J.d)(Object(j.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,profile:e.firebase.profile,auth:e.firebase.auth}}),Object(q.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project,a=e.auth,n=e.profile,c=a.uid?r.a.createElement(V,{auth:a,title:"Project Details",profile:n}):r.a.createElement(le,null);return window.scrollTo(0,0),t?r.a.createElement("div",{className:"bg-img"},r.a.createElement("div",{className:"ProjectDetails"},c,r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"logos-container"},null!==t.projectLogo?r.a.createElement(he.Carousel,null,t.projectLogo.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{className:"img-display",alt:"project's pictures",src:e}))})):null),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"first-container"},r.a.createElement("h2",null,r.a.createElement("a",{href:t.projectLink},t.projectName)),r.a.createElement("p",null,t.description)),r.a.createElement("div",{className:"double-container"},r.a.createElement("div",null,"Author: ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,"Created At: ",t.createdAt.toDate().toDateString())))),r.a.createElement("footer",null,r.a.createElement(F,null),r.a.createElement(G,null)))):r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:!0}),"Loading...")}),ge=(a(722),a(360)),je="obaxyyex",be="579628475278557",Ne=" https://api.cloudinary.com/v1_1/ahmedeldessouki/image/upload",ve={projectName:"",projectLink:"",description:""},Oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleDrop=function(e,t){if(a.setState({isLoading:!0}),e&&e.length>0&&e[0].size<8e6){var n=e.map(function(e){var t,n=[];return(t=new FormData).append("file",e),t.append("tags","codeinfuse, small, gist"),t.append("upload_preset",je),t.append("api_key",be),t.append("timestamp",Date.now()/1e3||0),p.a.post(Ne,t,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(e){v.toast.success("Images Upload Was Successful");var t=e.data;a.state.imageDropArray.push(t),a.state.imageDropArray.map(function(e){n.push(e.secure_url),a.props.setValues(Object(R.a)({},a.props.values,{projectLogos:n}))})}).catch(function(e){v.toast.error("Sorry, Images Didn't Upload!"),console.log(e)})});p.a.all(n).then(function(){a.setState({isLoading:!1}),a.props.setValues(Object(R.a)({},a.props.values))}).catch(function(e){console.log(e)})}t&&t.length>0&&t[0].Size>8e6&&alert("This File is too big")},a.state=Object(R.a)({imSrc:null,imageDropArray:[],projectLogos:[],isLoading:!1},ve),a.handleDrop=a.handleDrop.bind(Object(y.a)(Object(y.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.imageDropArray,a=e.isLoading,n=this.props,c=n.errors,o=n.touched,i=n.isSubmitting,l=n.auth,s=n.project,m=n.handleChange,u=n.description,d=n.projectLink,p=n.projectName,E=a||i;return r.a.createElement("div",null,l.uid?r.a.createElement("div",{className:"CreateProject"},r.a.createElement(V,{title:"Create Project"}),r.a.createElement("h1",null,"Create New Project"),r.a.createElement("div",{className:"wrapper-container"},0!==t.length?r.a.createElement("div",{className:"maping"},t.map(function(e,t){return r.a.createElement("img",{alt:"",key:t,src:e.url})})):null,r.a.createElement(k.b,{id:"createProject"},r.a.createElement(ge.a,{onDrop:this.handleDrop,accept:"image/*",multiple:!0,maxSize:8e6},function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("div",Object.assign({},t(),{className:"drop-zone-styles"}),r.a.createElement("span",null,"drop image(s)"),r.a.createElement("input",Object.assign({type:"file"},a())))}),r.a.createElement("div",{className:"field-container"},r.a.createElement(k.a,{type:"text",value:p,placeholder:s?s.projectName:"Project Name",name:"projectName"})),c.projectName&&o.projectName?r.a.createElement("p",{className:"error-message"},c.projectName):null,r.a.createElement("div",{className:"field-container"},r.a.createElement(k.a,{type:"url",value:d,placeholder:s?s.projectLink:"Project Link",name:"projectLink"})),r.a.createElement("textarea",{placeholder:s?s.description:"Project Description",name:"description",value:u,onChange:m}),r.a.createElement("button",{type:"submit",disabled:i},s?"Edit":"Create"," Project"))),E?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:E}),"Loading..."):null,r.a.createElement(G,null)):r.a.createElement(Z.a,{to:"/signin"}))}}]),t}(n.Component),ye=Object(k.c)({validationSchema:_.object().shape({projectName:_.string(),description:_.string()}),enableReinitialize:!0,mapPropsToValues:function(e){return Object(R.a)({},e)},mapValuesToPayload:function(e){return e},handleSubmit:function(e,t){setTimeout(function(){e.project?e.updateProject(e):e.createProject(e),t.setSubmitting(!1),e.history.push("/dashboard")},2e3)},displayName:"createProject"})(Oe),Se=Object(j.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects,r=n?n[a]:null;return console.log(n),{auth:e.firebase.auth,project:r}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,o=a().firebase.auth.uid;r.collection("projects").add({projectName:e.projectName,projectLink:e.projectLink,description:e.description,projectLogo:Object(N.a)(e.projectLogos),authorFirstName:c.firstName,authorLastName:c.lastName,authorId:o,createdAt:new Date}).then(function(){v.toast.success('Project "'.concat(e.projectName,'" Created')),t({type:"CREATE_PROJECT",project:e})}).catch(function(e){v.toast.error("Project Creation Failed"),t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))},updateProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();console.log("project actions....:",e),r.collection("projects").doc("".concat(e.match.params.id)).update({projectName:e.projectName?e.projectName:e.project.projectName,projectLink:e.projectLink?e.projectLink:e.project.projectLink,projectLogo:e.projectLogos?Object(N.a)(e.projectLogos):Object(N.a)(e.project.projectLogo),description:e.description?e.description:e.project.description}).then(function(){v.toast.success('Project "'.concat(e.projectName,'" Updated')),t({type:"PROJECT_UPDATED",project:e})}).catch(function(e){t({type:"PROJECT_NOT_UPDATED",err:e}),v.toast.error("Project Didn't Update")})}}(t))}}})(ye),De=(a(724),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title="Ahmed ElDessouki"}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement($.a,null,r.a.createElement(Q.a,{path:"/",exact:!0,component:X}),r.a.createElement(Q.a,{path:"/dashboard",component:ce}),r.a.createElement(Q.a,{path:"/projects/:id",component:fe}),r.a.createElement(Q.a,{path:"/messages/:id",component:oe}),r.a.createElement(Q.a,{path:"/signin",component:me}),r.a.createElement(Q.a,{path:"/SignUp",component:Ee}),r.a.createElement(Q.a,{path:"/create-project",component:Se}),r.a.createElement(Q.a,{path:"/edit/:id",component:Se}),r.a.createElement(Z.a,{from:"*",to:"/"})),r.a.createElement(v.ToastContainer,{autoClose:2e3}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=a(776),we={authError:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login Success"),Object(R.a)({},e,{authError:null});case"LOGIN_ERROR":return console.log("login error"),Object(R.a)({},e,{authError:t.err.message});case"SIGNOUT_SUCCESS":return console.log("SIGN OUT SUCCESS"),Object(R.a)({},e,{authError:null});case"SIGNOUT_FAILED":return console.log("Sign Out Error",t.err.message),Object(R.a)({},e,{authError:t.err.message});case"SIGNUP_SUCCESS":return Object(R.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signUp failed"),Object(R.a)({},e,{authError:t.err.message});default:return e}},Pe={projects:[{id:1,projectName:"cong dong",description:"jasd asfddasf "},{id:2,projectName:"cong dong",description:"jasd asfddasf "},{id:3,projectName:"cong dong",description:"jasd asfddasf "}]},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("project has been created",t.project),Object(R.a)({},e);case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),Object(R.a)({},e,{projError:t.err.message});case"PROJECT_UPDATED":return console.log("project successfully updated",t.project),Object(R.a)({},e);case"PROJECT_NOT_UPDATED":return console.log("project did not update",t.err),Object(R.a)({},e,{projError:t.err.message});case"PROJECT_DELETED":return console.log("project successfully deleted"),null;case"PROJECT_DELETE_ERROR":return console.log("project still exists",t.err),{projError:t.err.message};default:return e}},Re={contError:null,contactedMe:[{id:1,projectName:"cong dong",description:"jasd asfddasf "},{id:2,projectName:"cong dong",description:"jasd asfddasf "},{id:3,projectName:"cong dong",description:"jasd asfddasf "}]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGE_SENT":return Object(R.a)({},e,{contError:null});case"MESSAGE_NOT_SENT":return Object(R.a)({},e,{contError:t.err.message});case"MESSAGE_DELETED":return console.log("Message no longer exists"),null;case"MESSAGE_DELETE_ERROR":return console.log("Message cannot be sent",t.err),Object(R.a)({},e,{contError:t.err.message});default:return e}},_e={projects:[{id:1,projectName:"cong dong",description:"jasd asfddasf "},{id:2,projectName:"cong dong",description:"jasd asfddasf "},{id:3,projectName:"cong dong",description:"jasd asfddasf "}],projError:null,downloadUrls:[]},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROJ_LOGO_ADDED":return console.log("PROJ_LOGO_ADDED",t.file,t.downloadUrl),Object(R.a)({},e,{downloadUrls:[t.downloadUrl.toString()]});case"PROJ_LOGO_NOT_ADDED":return console.log("PROJ_LOGO_NOT_ADDED",t.err),Object(R.a)({},e,{projError:t.err.message});default:return e}},Ie=a(111),Me=function(e,t){switch(t.type){case"NOTIFICATION_DELETED":return console.log("NOTIFICATION_DELETED"),null;case"NOTIFICATION_DELETE_ERROR":return console.log("NOTIFICATION_DELETE_ERROR",t.err),{notificationError:t.err.message};default:return null}},Fe=Object(J.c)({auth:Te,project:Le,contactedMe:ke,projectLogos:Ae,firestore:Ie.firestoreReducer,firebase:q.firebaseReducer,notifications:Me}),Ue=a(357),xe=a(157),Ge=a.n(xe);a(763),a(767),a(771);Ge.a.initializeApp({apiKey:"AIzaSyAABosRQdWuCOmy4ylwUjdi3Rlz3ngRcfM",authDomain:"ahmedeldessouki-a7488.firebaseapp.com",databaseURL:"https://ahmedeldessouki-a7488.firebaseio.com",projectId:"ahmedeldessouki-a7488",storageBucket:"gs://ahmedeldessouki-a7488.appspot.com",storage:"gs://ahmedeldessouki-a7488.appspot.com",messagingSenderId:"928636667018"});Ge.a.firestore().settings({timestampsInSnapshots:!0});var ze=Ge.a,Be=Object(J.e)(Fe,Object(J.d)(Object(J.a)(Ue.a.withExtraArgument({getFirebase:q.getFirebase,getFirestore:Ie.getFirestore})),Object(Ie.reduxFirestore)(ze),Object(q.reactReduxFirebase)(ze,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));Be.firebaseAuthIsReady.then(function(){o.a.render(r.a.createElement(j.a,{store:Be},r.a.createElement(Ce.a,null,r.a.createElement(De,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[362,2,1]]]);
//# sourceMappingURL=main.81ae9b08.chunk.js.map