(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1007:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(2)),o=d(n(5)),l=d(n(1008));function d(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),u={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},c=function(e){var t=e.name,n=e.url,a=e.version;return r.default.createElement("div",{className:i("badge-container")},r.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},r.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(a))))};c.propTypes=u;var s=c;t.default=s},1008:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1009:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(2)),o=d(n(5)),l=d(n(1012));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=o.default.bind(l.default),f={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},b=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=u(t).call(this,e))||"object"!==i(a)&&"function"!=typeof a?c(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(c(n)),n.handleCodeToggle=n.handleCodeToggle.bind(c(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),m(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:_("header")},r.default.createElement("h2",{className:_("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:_("description")},e):null}}]),m(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,o=e.title,l=e.description,d=this.state,i=d.isExpanded,u=d.isBackgroundTransparent;return r.default.createElement("div",{className:_("template")},t.renderHeader(o),r.default.createElement("div",{className:_("content",{"dynamic-content":u})},t.renderDescription(l),n),a&&r.default.createElement("div",{className:_("footer")},r.default.createElement("div",{className:_("button-container")},r.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:_("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:_("chevron-right")}))),i&&r.default.createElement("div",{className:_("code")},a)))}}]),t}(r.default.Component);b.propTypes=f,b.defaultProps={isExpanded:!1};var h=b;t.default=h},1012:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(2)),o=d(n(5)),l=d(n(1017));function d(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),u={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},c=function(e){var t=e.rows;return r.default.createElement("table",{className:i("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:i("tr")},r.default.createElement("th",{className:i("th")},"Prop Name"),r.default.createElement("th",{className:i("th")},"Type"),r.default.createElement("th",{className:i("th")},"Is Required"),r.default.createElement("th",{className:i("th")},"Default Value"),r.default.createElement("th",{className:i("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:i(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:i(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:i(["td","props-td"])},e.type()),r.default.createElement("td",{className:i(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:i(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:i(["td","props-td"])},e.description()))}))))};c.propTypes=u;var s=c;t.default=s},1017:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1124:function(e,t,n){e.exports={container:"SlideGroupDemo-module__container___2zjCb",slide:"SlideGroupDemo-module__slide___1Lr5R","content-wrapper":"SlideGroupDemo-module__content-wrapper___2e3Pl",button:"SlideGroupDemo-module__button___769LH","custom-slide":"SlideGroupDemo-module__custom-slide____pG-d"}},1418:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r),o=n(1007),l=n.n(o),d=function(e){var t=e.url;return a.a.createElement(l.a,{name:"terra-slide-group",version:"4.18.0",url:t})}},1785:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(24)),o=r(n(25)),l=r(n(29)),d=r(n(26)),i=r(n(27)),u=r(n(28)),c=r(n(0)),s=r(n(2)),m=r(n(5)),p=r(n(365)),_=r(n(1124));function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var b=m.default.bind(_.default),h=function(e){(0,u.default)(r,e);var t,n=(t=r,function(){var e,n=(0,i.default)(t);if(f()){var r=(0,i.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,d.default)(this,e)});function r(e){var t;return(0,a.default)(this,r),(t=n.call(this,e)).increment=t.increment.bind((0,l.default)(t)),t.decrement=t.decrement.bind((0,l.default)(t)),t.state={counter:1},t}return(0,o.default)(r,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(c.default.createElement("div",{key:"Slide ".concat(t),className:b("slide")},c.default.createElement("h2",null,"Slide",t),c.default.createElement("br",null),c.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?c.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return c.default.createElement("div",{className:b("container")},c.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),r}(c.default.Component);h.propTypes={isAnimated:s.default.bool};var y=h;t.default=y},1786:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(24)),o=r(n(25)),l=r(n(29)),d=r(n(26)),i=r(n(27)),u=r(n(28)),c=r(n(0)),s=r(n(2)),m=r(n(5)),p=r(n(365)),_=r(n(1124));function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var b=m.default.bind(_.default),h=function(e){(0,u.default)(r,e);var t,n=(t=r,function(){var e,n=(0,i.default)(t);if(f()){var r=(0,i.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,d.default)(this,e)});function r(e){var t;return(0,a.default)(this,r),(t=n.call(this,e)).increment=t.increment.bind((0,l.default)(t)),t.decrement=t.decrement.bind((0,l.default)(t)),t.state={counter:1},t}return(0,o.default)(r,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(c.default.createElement("div",{key:"Slide ".concat(t),className:b("slide")},c.default.createElement("h2",null,"Slide",t),c.default.createElement("br",null),c.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?c.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return c.default.createElement("div",{className:b("container")},c.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),r}(c.default.Component);h.propTypes={isAnimated:s.default.bool};var y=function(){return c.default.createElement(h,{isAnimated:!0})};t.default=y},2382:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(17),a=n.n(r),o=n(22),l=n.n(o),d=n(0),i=n.n(d),u=n(354),c=n(1418),s=n(1014),m=n.n(s),p=function(){return Object(u.mdx)(m.a,{rows:[{name:"items",type:function(){var e={};function t(t){var n=t.components,r=l()(t,["components"]);return Object(u.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"array"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=l()(t,["components"]);return Object(u.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"The array of components for the group. Only the last component is visible. The others are hidden but still mounted."))}return t.isMDXComponent=!0,t({})}},{name:"isAnimated",type:function(){var e={};function t(t){var n=t.components,r=l()(t,["components"]);return Object(u.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=l()(t,["components"]);return Object(u.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"When true, the transition between slides is animated."))}return t.isMDXComponent=!0,t({})}}]})},_=n(1785),f=n.n(_),b={};function h(e){var t=e.components,n=l()(e,["components"]);return Object(u.mdx)("wrapper",a()({},b,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("pre",null,Object(u.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nexport default SlideGroupDemo;\n\n")))}h.isMDXComponent=!0;var y=n(1009),v=n.n(y),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return i.a.createElement(v.a,{title:t||"Slide Group Demo",description:n,example:i.a.createElement(f.a,null),exampleSrc:i.a.createElement(h,null),isExpanded:r})},g=n(1786),T=n.n(g),E={};function O(e){var t=e.components,n=l()(e,["components"]);return Object(u.mdx)("wrapper",a()({},E,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("pre",null,Object(u.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nconst AnimatedSlideGroup = () => (\n  <SlideGroupDemo isAnimated />\n);\nexport default AnimatedSlideGroup;\n\n")))}O.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return i.a.createElement(v.a,{title:t||"Slide Group Demo Animated",description:n,example:i.a.createElement(T.a,null),exampleSrc:i.a.createElement(O,null),isExpanded:r})},N={};function S(e){var t=e.components,n=l()(e,["components"]);return Object(u.mdx)("wrapper",a()({},N,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)(c.a,{mdxType:"Badge"}),Object(u.mdx)("h1",{id:"terra-slide-group"},"Terra Slide Group"),Object(u.mdx)("p",null,"The SlideGroup is a utility component that utilizes the ",Object(u.mdx)("inlineCode",{parentName:"p"},"react-transition-group")," library to present a stack of components in an\nanimated fashion."),Object(u.mdx)("p",null,"The last component in the group is visible, and all others are hidden. While the hidden components are not visible and\nmarked with the ",Object(u.mdx)("inlineCode",{parentName:"p"},"aria-hidden")," attribute, they are not actually unmounted."),Object(u.mdx)("p",null,"As a utility component, any component utilizing the SlideGroup will need to handle the keyboard accessibility of the content on each slide."),Object(u.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(u.mdx)("ul",null,Object(u.mdx)("li",{parentName:"ul"},"Install with ",Object(u.mdx)("a",a()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(u.mdx)("ul",{parentName:"li"},Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("inlineCode",{parentName:"li"},"npm install terra-slide-group"))))),Object(u.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(u.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(u.mdx)("table",null,Object(u.mdx)("thead",{parentName:"table"},Object(u.mdx)("tr",{parentName:"thead"},Object(u.mdx)("th",a()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(u.mdx)("th",a()({parentName:"tr"},{align:null}),"Version"))),Object(u.mdx)("tbody",{parentName:"table"},Object(u.mdx)("tr",{parentName:"tbody"},Object(u.mdx)("td",a()({parentName:"tr"},{align:null}),"react"),Object(u.mdx)("td",a()({parentName:"tr"},{align:null}),"^16.8.5")),Object(u.mdx)("tr",{parentName:"tbody"},Object(u.mdx)("td",a()({parentName:"tr"},{align:null}),"react-dom"),Object(u.mdx)("td",a()({parentName:"tr"},{align:null}),"^16.8.5")))),Object(u.mdx)("h2",{id:"usage"},"Usage"),Object(u.mdx)("pre",null,Object(u.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import SlideGroup from 'terra-slide-group';\n")),Object(u.mdx)("p",null,Object(u.mdx)("a",a()({parentName:"p"},{href:"https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-group"}),"View Component Source Code")),Object(u.mdx)("h2",{id:"examples"},"Examples"),Object(u.mdx)(x,{title:"Non-Animated SlideGroup",mdxType:"SlideGroupDemo"}),Object(u.mdx)(j,{title:"Animated SlideGroup",mdxType:"SlideGroupDemoAnimated"}),Object(u.mdx)("h2",{id:"slide-group-props-table"},"Slide Group Props Table"),Object(u.mdx)(p,{mdxType:"SlideGroupPropsTable"}))}S.isMDXComponent=!0}}]);
//# sourceMappingURL=99-c298e2001fdf7e16a6a9.js.map