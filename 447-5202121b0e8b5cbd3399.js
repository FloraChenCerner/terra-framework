(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{2009:function(t,e,n){t.exports={"test-popup-area":"BoundedWidthPopup-test-module__test-popup-area___2dBM9","popup-text":"BoundedWidthPopup-test-module__popup-text___3b73Z"}},2295:function(t,e,n){"use strict";var o=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(24)),a=o(n(25)),d=o(n(29)),s=o(n(26)),i=o(n(27)),l=o(n(28)),r=o(n(0)),c=o(n(5)),f=o(n(132)),p=o(n(2009));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var N=c.default.bind(p.default),b=function(t){(0,l.default)(o,t);var e,n=(e=o,function(){var t,n=(0,i.default)(e);if(h()){var o=(0,i.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(t){var e;return(0,u.default)(this,o),(e=n.call(this,t)).handleButtonClick=e.handleButtonClick.bind((0,d.default)(e)),e.handleRequestClose=e.handleRequestClose.bind((0,d.default)(e)),e.setButtonNode=e.setButtonNode.bind((0,d.default)(e)),e.getButtonNode=e.getButtonNode.bind((0,d.default)(e)),e.setParentNode=e.setParentNode.bind((0,d.default)(e)),e.getParentNode=e.getParentNode.bind((0,d.default)(e)),e.state={open:!0},e}return(0,a.default)(o,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return r.default.createElement("div",{id:"test-popup-area",className:N("test-popup-area"),ref:this.setParentNode},r.default.createElement(f.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"120",contentWidth:"640",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},r.default.createElement("p",{className:N("popup-text")},"This popup is bounded by width.")),r.default.createElement("button",{type:"button",id:"bounded-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Bounded Width"))}}]),o}(r.default.Component);e.default=b}}]);
//# sourceMappingURL=447-5202121b0e8b5cbd3399.js.map