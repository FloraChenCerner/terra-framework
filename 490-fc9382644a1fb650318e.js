(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{2246:function(t,e,n){"use strict";var u=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=u(n(24)),o=u(n(25)),a=u(n(29)),s=u(n(26)),i=u(n(27)),d=u(n(28)),f=u(n(0)),r=u(n(359));function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var h=function(t){(0,d.default)(u,t);var e,n=(e=u,function(){var t,n=(0,i.default)(e);if(c()){var u=(0,i.default)(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function u(t){var e;return(0,l.default)(this,u),(e=n.call(this,t)).handleButtonClick=e.handleButtonClick.bind((0,a.default)(e)),e.handleRequestClose=e.handleRequestClose.bind((0,a.default)(e)),e.setButtonNode=e.setButtonNode.bind((0,a.default)(e)),e.getButtonNode=e.getButtonNode.bind((0,a.default)(e)),e.state={open:!1},e}return(0,o.default)(u,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("div",null,"This menu should have a small height. And all items should be visible without scrolling."),f.default.createElement(r.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},f.default.createElement(r.default.Item,{text:"Default 1",key:"1",className:"TestFirstItem"}),f.default.createElement(r.default.Item,{text:"Default 2",key:"2",className:"TestLastItem"})),f.default.createElement("button",{type:"button",id:"small-menu-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),u}(f.default.Component);e.default=h}}]);
//# sourceMappingURL=490-fc9382644a1fb650318e.js.map