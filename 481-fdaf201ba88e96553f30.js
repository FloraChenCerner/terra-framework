(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{2251:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=l(n(24)),u=l(n(25)),r=l(n(29)),a=l(n(26)),i=l(n(27)),f=l(n(28)),o=l(n(0)),d=l(n(359));function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var m=function(e){(0,f.default)(l,e);var t,n=(t=l,function(){var e,n=(0,i.default)(t);if(s()){var l=(0,i.default)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,a.default)(this,e)});function l(e){var t;return(0,c.default)(this,l),(t=n.call(this,e)).state={clickNumber:0},t.handleSelection=t.handleSelection.bind((0,r.default)(t)),t}return(0,u.default)(l,[{key:"handleSelection",value:function(){this.setState((function(e){return{clickNumber:e.clickNumber+1}}))}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("div",{id:"clickNumber"},o.default.createElement("h3",null,"Item has been clicked",this.state.clickNumber," ","times")),o.default.createElement("ul",{role:"menu"},o.default.createElement(d.default.Item,{text:"OnClick Menu Item",key:"1",className:"TestOnClickItem",onClick:this.handleSelection})))}}]),l}(o.default.Component);t.default=m}}]);
//# sourceMappingURL=481-fdaf201ba88e96553f30.js.map