(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,a,t){e.exports=t(87)},48:function(e,a,t){},51:function(e,a,t){},74:function(e,a){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(21),o=t.n(c),l=(t(48),t(22)),r=t.n(l),i=t(39),u=t(42),m=t(1),h=t(2),d=t(4),p=t(3),g=t(6),f=t(5),b=(t(51),t(40)),v=t.n(b)()("https://secure-badlands-41304.herokuapp.com");var E=t(41),O=t.n(E),k=function(e){var a=e.type,t=void 0===a?"checkbox":a,n=e.name,c=e.checked,o=void 0!==c&&c,l=e.onChange;return s.a.createElement("input",{className:"checkbox",type:t,name:n,checked:o,onChange:l})},j=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={checkedItems:new Map},t.handleChange=t.handleChange.bind(Object(g.a)(t)),t}return Object(f.a)(a,e),Object(h.a)(a,[{key:"handleChange",value:function(e){var a=e.target.name,t=e.target.checked;this.setState(function(e){return{checkedItems:e.checkedItems.set(a,t)}})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,this.props.checkboxes.map(function(a){return s.a.createElement("label",{key:a.key},s.a.createElement(k,{name:a.name,checked:e.state.checkedItems.get(a.name),onChange:e.handleChange}),a.name)}))}}]),a}(s.a.Component),y=function(e){function a(e){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).call(this,e))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"questionnaire"},s.a.createElement("h1",null,"Interests Profiler"),!!this.props.questions&&Object.keys(this.props.questions).map(function(a){return s.a.createElement("div",{className:"questionnaire-topic"},s.a.createElement("h2",null,"Topic: ",a),s.a.createElement("hr",null),e.props.questions[a].map(function(e){return s.a.createElement("div",{className:"questionnaire-question"},s.a.createElement("h4",null,e.question),s.a.createElement("div",{className:"questionnaire-options"},s.a.createElement(j,{checkboxes:e.choices})))}))}))}}]),a}(n.Component),C=function(e){function a(e){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).call(this,e))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return s.a.createElement("header",{className:"app-header"},s.a.createElement("div",null,s.a.createElement("h1",{className:"app-title"},"pen-pal: Discover the world!")),s.a.createElement("div",null,s.a.createElement("input",{onChange:this.props.nameChange,placeholder:"your name"}),s.a.createElement("input",{onChange:this.props.langChange,placeholder:"your language"}),s.a.createElement("button",{onClick:this.props.onClick,className:"action-on-dark"},"Questions")))}}]),a}(n.Component),N=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e="chatMessage";return this.props.local&&(e+=" local"),s.a.createElement("div",{className:e},s.a.createElement("p",{className:"message-text"},this.props.text),s.a.createElement("p",{className:"message-lang"},this.props.lang))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={newMessage:""},t.handleCompose=t.handleCompose.bind(Object(g.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(t)),t}return Object(f.a)(a,e),Object(h.a)(a,[{key:"handleCompose",value:function(e){this.setState({newMessage:e.target.value})}},{key:"handleSubmit",value:function(e){var a;e.preventDefault(),a={lang:this.props.language,text:this.state.newMessage},console.log(a),v.emit("shaggy",a),this.setState({newMessage:""})}},{key:"render",value:function(){return s.a.createElement("div",{className:"chat-container"},s.a.createElement("div",{className:"messages"},!!this.props.messages&&this.props.messages.map(function(e){return s.a.createElement(N,{lang:e.language,text:e.translatedText,local:e.local})})),s.a.createElement("div",{className:"compose-message"},s.a.createElement("form",{id:"composeForm",onSubmit:this.handleSubmit},s.a.createElement("input",{value:this.state.newMessage,onChange:this.handleCompose,placeholder:"send your pen pal a message!"}),s.a.createElement("button",{form:"composeForm",className:"action-on-dark",type:"submit",value:"Send"},"Send"))))}}]),a}(n.Component),M=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"messaging"},s.a.createElement(w,{language:this.props.language,messages:this.props.messages}),s.a.createElement("div",{className:"messaging-right"},s.a.createElement("div",{className:"conversation active"},s.a.createElement("div",{className:"convo-info"},s.a.createElement("h3",null,"Talk about food!"),s.a.createElement("h4",null,"Arjun"),s.a.createElement("p",null,"Mexico")),s.a.createElement("div",null,s.a.createElement("img",{className:"fluid-img",src:"https://i.kym-cdn.com/entries/icons/facebook/000/012/431/gig.jpg"}))),s.a.createElement("div",{className:"conversation"},s.a.createElement("div",{className:"convo-info"},s.a.createElement("h3",null,"What is god?"),s.a.createElement("h4",null,"Patrick"),s.a.createElement("p",null,"South Dakota")),s.a.createElement("div",null,s.a.createElement("img",{className:"fluid-img",src:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/scooby-shaggy.jpg"}))),s.a.createElement("div",{className:"conversation"},s.a.createElement("div",{className:"convo-info"},s.a.createElement("h3",null,"Gun control?"),s.a.createElement("h4",null,"Varun"),s.a.createElement("p",null,"India")),s.a.createElement("div",null,s.a.createElement("img",{className:"fluid-img",src:"https://external-preview.redd.it/QFfSwIX6OmQIMc8W-wFywq81mtrUL66HEmG2v84XtVY.jpg?width=400&auto=webp&s=802fe5fef7ab2e29f0a2030d4e7e537764693319"})))))}}]),a}(n.Component),S=function(e){function a(e){var t,n;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={doingQuestions:!0,questions:null,messages:[],targetLanguage:"es",user:"Al"},t.openModal=t.openModal.bind(Object(g.a)(t)),t.closeModal=t.closeModal.bind(Object(g.a)(t)),t.afterOpenModal=t.afterOpenModal.bind(Object(g.a)(t)),t.handleNameChange=t.handleNameChange.bind(Object(g.a)(t)),t.handleLangChange=t.handleLangChange.bind(Object(g.a)(t)),n=function(e){t.setState(function(a){return{messages:[].concat(Object(u.a)(a.messages),[e])}})},v.on("scooby",function(e){n(e)}),t}return Object(f.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark(function e(){var a,t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mysterious-temple-49438.herokuapp.com/questions");case 2:return a=e.sent,e.next=5,a.json();case 5:for(n in t=e.sent)t[n].forEach(function(e){e.choices=e.choices.map(function(e){return{name:e,key:e,label:e}})});this.setState({questions:t});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleNameChange",value:function(e){this.setState({user:e.target.value})}},{key:"handleLangChange",value:function(e){this.setState({targetLanguage:e.target.value})}},{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(C,{langChange:this.handleLangChange,nameChange:this.handleNameChange,onClick:this.openModal}),s.a.createElement(O.a,{className:"questionnaire-modal",isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,contentLabel:"Example Modal"},s.a.createElement(y,{questions:this.state.questions}),s.a.createElement("button",{className:"center action-on-dark",onClick:this.closeModal},"Save")),s.a.createElement(M,{language:this.state.targetLanguage,messages:this.state.messages}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.b9c3ae6b.chunk.js.map