(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{2006:function(t,e,n){t.exports={"test-popup-area":"AutomaticWidthPopup-test-module__test-popup-area___3tQaP","popup-text":"AutomaticWidthPopup-test-module__popup-text___1oxfW"}},2291:function(t,e,n){"use strict";var o=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(24)),a=o(n(25)),l=o(n(29)),s=o(n(26)),i=o(n(27)),d=o(n(28)),c=o(n(0)),r=o(n(5)),f=o(n(132)),p=o(n(2006));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=r.default.bind(p.default),v=function(t){(0,d.default)(o,t);var e,n=(e=o,function(){var t,n=(0,i.default)(e);if(h()){var o=(0,i.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(t){var e;return(0,u.default)(this,o),(e=n.call(this,t)).handleButtonClick=e.handleButtonClick.bind((0,l.default)(e)),e.handleRequestClose=e.handleRequestClose.bind((0,l.default)(e)),e.setButtonNode=e.setButtonNode.bind((0,l.default)(e)),e.getButtonNode=e.getButtonNode.bind((0,l.default)(e)),e.state={open:!0},e}return(0,a.default)(o,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return c.default.createElement("div",{id:"test-popup-area",className:m("test-popup-area")},c.default.createElement(f.default,{classNameArrow:"test-arrow",classNameContent:"test-content",contentWidth:"auto",isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement("p",{className:m("popup-text")},"This is popup content with a automatic width of 400px.")),c.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}]),o}(c.default.Component);e.default=v}}]);
//# sourceMappingURL=444-9142c941d410fbebb55e.js.map