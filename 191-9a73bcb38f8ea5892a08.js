(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1105:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=r(n(17)),o=r(n(22)),l=r(n(24)),a=r(n(25)),u=r(n(26)),c=r(n(27)),i=r(n(28)),s=r(n(0)),f=r(n(2));function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n(1131),n(1132);var p={children:f.default.node.isRequired},v=function(e){(0,i.default)(r,e);var t,n=(t=r,function(){var e,n=(0,c.default)(t);if(m()){var r=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,u.default)(this,e)});function r(){return(0,l.default)(this,r),n.apply(this,arguments)}return(0,a.default)(r,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,o.default)(e,["children"]);return s.default.createElement("div",(0,d.default)({"data-embedded-content-consumer-provider-test-template":!0},n),t)}}]),r}(s.default.Component);v.propTypes=p;var h=v;t.default=h},1106:function(e,t,n){e.exports={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___MHjKq"}},1131:function(e,t,n){},1132:function(e,t,n){},1486:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=r(n(24)),o=r(n(25)),l=r(n(29)),a=r(n(26)),u=r(n(27)),c=r(n(28)),i=r(n(0)),s=n(230),f=r(n(5)),m=r(n(1105)),p=r(n(1106));function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var h=f.default.bind(p.default),b=function(e){(0,c.default)(r,e);var t,n=(t=r,function(){var e,n=(0,u.default)(t);if(v()){var r=(0,u.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,a.default)(this,e)});function r(e){var t;return(0,d.default)(this,r),(t=n.call(this,e)).addEventListener=t.addEventListener.bind((0,l.default)(t)),t.onClickA=t.onClickA.bind((0,l.default)(t)),t.onClickB=t.onClickB.bind((0,l.default)(t)),t.addEventListener("Event-Reply"),t}return(0,o.default)(r,[{key:"onClickA",value:function(){s.Provider.trigger("EventA")}},{key:"onClickB",value:function(){s.Provider.trigger("EventB")}},{key:"addEventListener",value:function(e){s.Provider.on(e,(function(e){document.getElementById("embedded-content-consumer-reply").innerHTML="embedded-content-consumer reply: ".concat(JSON.stringify(e))}))}},{key:"render",value:function(){return i.default.createElement("div",{className:h("content-wrapper")},i.default.createElement("h1",null,"Communication Between the Consumer and Embedded Content"),i.default.createElement("p",null,"Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider."),i.default.createElement("p",null,"This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content."),i.default.createElement("ol",{id:"embedded-content-custom-events-communication-explination"},i.default.createElement("li",null,i.default.createElement("p",null,"Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.")),i.default.createElement("li",null,i.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.")),i.default.createElement("li",null,i.default.createElement("p",null,"Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.")),i.default.createElement("li",null,i.default.createElement("p",null,"The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider."))),i.default.createElement("p",null,"Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. "),i.default.createElement("button",{id:"EventA",onClick:this.onClickA,type:"button"},"Trigger Event A!"),i.default.createElement("button",{id:"EventB",onClick:this.onClickB,type:"button"},"Trigger Event B!"),i.default.createElement("div",{id:"embedded-content-consumer-reply"},"No message has been sent."))}}]),r}(i.default.Component),y=function(){return i.default.createElement(m.default,null,i.default.createElement(b,null))};t.default=y}}]);
//# sourceMappingURL=191-9a73bcb38f8ea5892a08.js.map