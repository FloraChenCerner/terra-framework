(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{1031:function(e,l,t){"use strict";var n=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.SlidePanelPositions=l.default=void 0;var a=n(t(17)),i=n(t(22)),u=n(t(24)),r=n(t(25)),o=n(t(29)),d=n(t(26)),m=n(t(27)),s=n(t(28)),c=n(t(0)),f=n(t(2)),p=n(t(5)),E=n(t(1041));function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var I=p.default.bind(E.default),_={START:"start",END:"end"};l.SlidePanelPositions=_;var h={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool},b={panelBehavior:"overlay",panelPosition:_.END,panelSize:"small"},P=function(e){(0,s.default)(n,e);var l,t=(l=n,function(){var e,t=(0,m.default)(l);if(v()){var n=(0,m.default)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,d.default)(this,e)});function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).setPanelNode=l.setPanelNode.bind((0,o.default)(l)),l.mainNode=c.default.createRef(),l}return(0,r.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,l=e.panelAriaLabel,t=e.mainAriaLabel,n=e.mainContent,u=e.panelContent,r=e.panelBehavior,o=e.panelPosition,d=e.panelSize,m=e.isFullscreen,s=e.isOpen,f=e.fill,p=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),E=I(["slide-panel",{"is-open":s},{"is-fullscreen":m},{fill:f},p.className]),v=c.default.createElement("div",{className:I(["panel"]),key:"panel",tabIndex:"-1","aria-label":l,"aria-hidden":s?"false":"true",ref:this.setPanelNode},u),h=c.default.createElement("div",{className:I("main"),key:"main",tabIndex:"-1","aria-label":t,ref:this.mainNode},n),b=o===_.START?c.default.createElement(c.default.Fragment,null,v,h):c.default.createElement(c.default.Fragment,null,h,v);return c.default.createElement("div",(0,a.default)({},p,{className:E,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":o,"data-slide-panel-panel-size":d}),b)}}]),n}(c.default.Component);P.propTypes=h,P.defaultProps=b;var y=P;l.default=y},1041:function(e,l,t){e.exports={"slide-panel":"SlidePanel-module__slide-panel___16_Ez",main:"SlidePanel-module__main___Qtxtf",panel:"SlidePanel-module__panel___2NV-G","is-open":"SlidePanel-module__is-open___IAbgR","is-fullscreen":"SlidePanel-module__is-fullscreen___29Ymh",fill:"SlidePanel-module__fill___11BRG"}},1048:function(e,l,t){"use strict";var n=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Main Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};l.default=i},1049:function(e,l,t){"use strict";var n=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Panel Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};l.default=i},1500:function(e,l,t){"use strict";var n=t(13),a=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=a(t(0)),u=n(t(1031)),r=a(t(1048)),o=a(t(1049)),d=function(){return i.default.createElement(u.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(o.default,null),panelBehavior:"overlay",panelPosition:u.SlidePanelPositions.END,panelSize:"small",isOpen:!0})};l.default=d}}]);
//# sourceMappingURL=232-76b7a43a0ec075533472.js.map