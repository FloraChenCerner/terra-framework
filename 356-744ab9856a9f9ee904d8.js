(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{1023:function(t,e,o){t.exports={wrapper:"HookshotTestDocCommon-module__wrapper___3BMgv",content:"HookshotTestDocCommon-module__content___fflPT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___1aFCO","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___3RlRF","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___327XX","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___3H5Td","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___3gyZo","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___3RWca","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___2Esx9","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___229Cs","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___25o4P","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___2pzs9","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___35g7S","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___2Esnl","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___3qD94","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___21Zu3","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___1pxMJ","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___2f8RX","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___1-MFD","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___owTPo","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___2LMwV","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___1hmwI"}},1034:function(t,e,o){"use strict";var n=o(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(0)),l=n(o(5)),s=n(o(166)),r=n(o(1023)),u=l.default.bind(r.default),h=function(t){return a.default.createElement(s.default.Content,t,a.default.createElement("div",{className:u("hookshot-content-wrapper")},"Hookshot"))};e.default=h},1037:function(t,e,o){"use strict";var n=o(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(17)),l=n(o(22)),s=n(o(24)),r=n(o(25)),u=n(o(29)),h=n(o(26)),d=n(o(27)),c=n(o(28)),i=n(o(0)),m=n(o(5)),f=n(o(2)),p=n(o(166)),_=n(o(1034)),k=n(o(1023));function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var v=m.default.bind(k.default),C={hookshotContentProps:f.default.any,id:f.default.string,isOpen:f.default.bool,includeSvgs:f.default.bool,contentAttachment:f.default.string,targetAttachment:f.default.string,type:f.default.string,attachmentMargin:f.default.number},w=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},T=function(t){(0,c.default)(n,t);var e,o=(e=n,function(){var t,o=(0,d.default)(e);if(g()){var n=(0,d.default)(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return(0,h.default)(this,t)});function n(t){var e;return(0,s.default)(this,n),(e=o.call(this,t)).triggerHookshot=e.triggerHookshot.bind((0,u.default)(e)),e.handleRequestClose=e.handleRequestClose.bind((0,u.default)(e)),e.state={open:t.isOpen},e}return(0,r.default)(n,[{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var t=this.props,e=t.hookshotContentProps,o=t.id,n=(t.isOpen,t.contentAttachment),s=t.targetAttachment,r=t.attachmentMargin,u=t.includeSvgs,h=t.type,d=(0,l.default)(t,["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"]),c=i.default.createElement("div",null,i.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),i.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),i.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return i.default.createElement("div",{id:"".concat(o,"-bounds"),className:v(["wrapper","hookshot-wrapper-".concat(h)])},i.default.createElement(p.default,(0,a.default)({id:o,contentAttachment:w(n),targetAttachment:w(s),attachmentMargin:r,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(o))},boundingRef:function(){return document.getElementById("".concat(o,"-bounds"))}},d),i.default.createElement(_.default,{id:"".concat(o,"-content"),onEsc:e.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:e.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:e.closeOnResize?this.handleRequestClose:void 0})),i.default.createElement("button",{type:"button",id:"trigger-".concat(o),className:v(["content","hookshot-".concat(h)]),onClick:this.triggerHookshot},"Trigger Hookshot"),u&&c)}}]),n}(i.default.Component);T.propTypes=C,T.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};var E=T;e.default=E},2226:function(t,e,o){"use strict";var n=o(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(0)),l=n(o(1037)),s=function(){return a.default.createElement(l.default,{id:"TargetOffset",contentAttachment:"bottom start",targetAttachment:"top start",type:"primary",targetOffset:{vertical:-10,horizontal:-20},isOpen:!0})},r=function(){return a.default.createElement("div",null,a.default.createElement(s,null),a.default.createElement("p",null,'Target Offset Applied. (Offset value is "top-offset left-offset")'),a.default.createElement("ul",null,a.default.createElement("li",null,"Content Attachement: bottom start"),a.default.createElement("li",null,"Target Attachement: top start"),a.default.createElement("li",null,"Target Offset: -10px -20px")),a.default.createElement("button",{type:"button",id:"ltr-TargetOffset",onClick:function(){document.getElementsByTagName("html")[0].dir="ltr"}},"LTR"),a.default.createElement("button",{type:"button",id:"rtl-TargetOffset",onClick:function(){document.getElementsByTagName("html")[0].dir="rtl"}},"RTL"))};e.default=r}}]);
//# sourceMappingURL=356-744ab9856a9f9ee904d8.js.map