(window.webpackJsonp=window.webpackJsonp||[]).push([[90,124],{1007:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(2)),i=l(n(5)),r=l(n(1008));function l(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(r.default),u={name:o.default.string.isRequired,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.name,n=e.url,o=e.version;return a.default.createElement("div",{className:s("badge-container")},a.default.createElement("a",{className:s("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:s("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:s("badge-version")},"v".concat(o))))};c.propTypes=u;var d=c;t.default=d},1008:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1009:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(2)),i=l(n(5)),r=l(n(1012));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=i.default.bind(r.default),h={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},_=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=u(t).call(this,e))||"object"!==s(o)&&"function"!=typeof o?c(a):o).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(c(n)),n.handleCodeToggle=n.handleCodeToggle.bind(c(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),f(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:m("header")},a.default.createElement("h2",{className:m("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:m("description")},e):null}}]),f(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,o=e.exampleSrc,i=e.title,r=e.description,l=this.state,s=l.isExpanded,u=l.isBackgroundTransparent;return a.default.createElement("div",{className:m("template")},t.renderHeader(i),a.default.createElement("div",{className:m("content",{"dynamic-content":u})},t.renderDescription(r),n),o&&a.default.createElement("div",{className:m("footer")},a.default.createElement("div",{className:m("button-container")},a.default.createElement("button",{type:"button",className:m("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:m("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:m("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:m("chevron-right")}))),s&&a.default.createElement("div",{className:m("code")},o)))}}]),t}(a.default.Component);_.propTypes=h,_.defaultProps={isExpanded:!1};var g=_;t.default=g},1012:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(2)),i=l(n(5)),r=l(n(1017));function l(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(r.default),u={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},c=function(e){var t=e.rows;return a.default.createElement("table",{className:s("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:s("tr")},a.default.createElement("th",{className:s("th")},"Prop Name"),a.default.createElement("th",{className:s("th")},"Type"),a.default.createElement("th",{className:s("th")},"Is Required"),a.default.createElement("th",{className:s("th")},"Default Value"),a.default.createElement("th",{className:s("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:s(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:s(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:s(["td","props-td"])},e.type()),a.default.createElement("td",{className:s(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:s(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:s(["td","props-td"])},e.description()))}))))};c.propTypes=u;var d=c;t.default=d},1017:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1067:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],a=n.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function i(e,t){t=t||{};var n,i,l,s=[],d=[],f=e.querySelectorAll(a);for(t.includeContainer&&o.call(e,a)&&(f=Array.prototype.slice.apply(f)).unshift(e),n=0;n<f.length;n++)r(i=f[n])&&(0===(l=u(i))?s.push(i):d.push({documentOrder:n,tabIndex:l,node:i}));return d.sort(c).map((function(e){return e.node})).concat(s)}function r(e){return!(!l(e)||function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||u(e)<0)}function l(e){return!(e.disabled||function(e){return d(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}i.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,a)&&r(e)},i.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,s)&&l(e)};var s=n.concat("iframe").join(",");function u(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function c(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function d(e){return"INPUT"===e.tagName}e.exports=i},1739:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),o=c(n(2)),i=c(n(5)),r=c(n(59)),l=c(n(371)),s=c(n(1740)),u=c(n(1744));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=i.default.bind(u.default),y={children:o.default.node.isRequired,closedButtonText:o.default.string.isRequired,buttonAttrs:o.default.object,icon:o.default.element,isAnimated:o.default.bool,isIconAnimated:o.default.bool,isIconOnly:o.default.bool,isInitiallyOpen:o.default.bool,onClose:o.default.func,onOpen:o.default.func,openedButtonText:o.default.string},v={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:a.default.createElement(l.default,null)},T=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=h(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?_(a):o).state={isOpen:e.isInitiallyOpen},n.handleOnClick=n.handleOnClick.bind(_(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(o=[{key:"handleOnClick",value:function(e){e.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e=this.props,t=e.buttonAttrs,n=(e.children,e.closedButtonText),o=e.icon,i=(e.isAnimated,e.isIconAnimated),l=e.isIconOnly,u=(e.isInitiallyOpen,e.onClose,e.onOpen,e.openedButtonText),c=p(e,["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"]),d=u||n,m=this.state.isOpen?d:n,h=l?n:m,_=b(["button",{"is-open":this.state.isOpen},{"is-icon-animated":i},c.className]),g=a.default.createElement(r.default,f({},t,{isIconOnly:l,icon:a.default.createElement("span",{className:b("icon")},o),"aria-expanded":this.state.isOpen,text:h,onClick:this.handleOnClick}));return a.default.createElement("div",f({},c,{className:_}),g,a.default.createElement(s.default,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&m(n.prototype,o),i&&m(n,i),t}(a.default.Component);T.propTypes=y,T.defaultProps=v;var O=T;t.default=O},1740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(0)),o=s(n(2)),i=s(n(5)),r=s(n(1741)),l=s(n(1743));function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.default.bind(l.default),f={children:o.default.node.isRequired,isAnimated:o.default.bool,isOpen:o.default.bool},p=function(e){var t,n=e.isAnimated,o=e.isOpen,i=e.children,l=c(e,["isAnimated","isOpen","children"]),s=o?"auto":0;return t=n?a.default.createElement(r.default,{duration:250,height:s},i):o&&i,a.default.createElement("div",u({},l,{className:d("toggle",l.className),"aria-hidden":!o}),t)};p.propTypes=f,p.defaultProps={isAnimated:!1,isOpen:!1};var m=p;t.default=m},1741:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=u(n(0)),l=u(n(2)),s=u(n(1742));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function p(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(!n.length)return e;for(var o={},i=Object.keys(e),r=0;r<i.length;r++){var l=i[r];-1===n.indexOf(l)&&(o[l]=e[l])}return o}function m(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function h(e){return!isNaN(parseFloat(e))&&isFinite(e)}function _(e){return"string"==typeof e&&e.search("%")===e.length-1&&h(e.substr(0,e.length-1))}function g(e,t){e&&"function"==typeof e&&e(t)}var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.animationFrameIDs=[];var a="auto",i="visible";h(e.height)?(a=e.height<0||"0"===e.height?0:e.height,i="hidden"):_(e.height)&&(a="0%"===e.height?0:e.height,i="hidden"),n.animationStateClasses=o({},d,e.animationStateClasses);var r=n.getStaticStateClasses(a);return n.state={animationStateClasses:r,height:a,overflow:i,shouldUseTransitions:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var n,a,o=this,i=this.props,r=i.delay,l=i.duration,u=i.height,d=i.onAnimationEnd,f=i.onAnimationStart;if(this.contentElement&&u!==e.height){var p;this.showContent(t.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var y=l+r,v=null,T={height:null,overflow:"hidden"},O="auto"===t.height;h(u)?(v=u<0||"0"===u?0:u,T.height=v):_(u)?(v="0%"===u?0:u,T.height=v):(v=b,T.height="auto",T.overflow=null),O&&(T.height=v,v=b);var E=(0,s.default)((c(p={},this.animationStateClasses.animating,!0),c(p,this.animationStateClasses.animatingUp,"auto"===e.height||u<e.height),c(p,this.animationStateClasses.animatingDown,"auto"===u||u>e.height),c(p,this.animationStateClasses.animatingToHeightZero,0===T.height),c(p,this.animationStateClasses.animatingToHeightAuto,"auto"===T.height),c(p,this.animationStateClasses.animatingToHeightSpecific,T.height>0),p)),w=this.getStaticStateClasses(T.height);this.setState({animationStateClasses:E,height:v,overflow:"hidden",shouldUseTransitions:!O}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),O?(T.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){o.setState(T),g(f,{newHeight:T.height})},(a=[])[0]=requestAnimationFrame((function(){a[1]=requestAnimationFrame((function(){n()}))})),a),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:w,shouldUseTransitions:!1}),o.hideContent(T.height),g(d,{newHeight:T.height})}),y)):(g(f,{newHeight:v}),this.timeoutID=setTimeout((function(){T.animationStateClasses=w,T.shouldUseTransitions=!1,o.setState(T),"auto"!==u&&o.hideContent(v),g(d,{newHeight:v})}),y))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,s.default)((c(t={},this.animationStateClasses.static,!0),c(t,this.animationStateClasses.staticHeightZero,0===e),c(t,this.animationStateClasses.staticHeightSpecific,e>0),c(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.animateOpacity,i=n.applyInlineTransitions,l=n.children,u=n.className,d=n.contentClassName,m=n.duration,h=n.easing,_=n.delay,g=n.style,b=this.state,y=b.height,v=b.overflow,T=b.animationStateClasses,O=b.shouldUseTransitions,E=o({},g,{height:y,overflow:v||g.overflow});O&&i&&(E.transition="height "+m+"ms "+h+" "+_+"ms",g.transition&&(E.transition=g.transition+", "+E.transition),E.WebkitTransition=E.transition);var w={};a&&(w.transition="opacity "+m+"ms "+h+" "+_+"ms",w.WebkitTransition=w.transition,0===y&&(w.opacity=0));var S=(0,s.default)((c(e={},T,!0),c(e,u,u),e));return r.default.createElement("div",o({},p.apply(void 0,[this.props].concat(f)),{"aria-hidden":0===y,className:S,style:E}),r.default.createElement("div",{className:d,style:w,ref:function(e){return t.contentElement=e}},l))}}]),t}(r.default.Component);b.propTypes={animateOpacity:l.default.bool,animationStateClasses:l.default.object,applyInlineTransitions:l.default.bool,children:l.default.any.isRequired,className:l.default.string,contentClassName:l.default.string,duration:l.default.number,delay:l.default.number,easing:l.default.string,height:function(e,t,n){var o=e[t];return"number"==typeof o&&o>=0||_(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":a(o))+'" is invalid type for '+t+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},onAnimationEnd:l.default.func,onAnimationStart:l.default.func,style:l.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:d,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=b},1742:function(e,t,n){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var r=o.apply(null,a);r&&e.push(r)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},1743:function(e,t,n){e.exports={toggle:"Toggle-module__toggle___34f0E"}},1744:function(e,t,n){e.exports={"toggle-button":"ToggleButton-module__toggle-button___1z40f",icon:"ToggleButton-module__icon___17qwh","is-open":"ToggleButton-module__is-open___hOi8b","is-icon-animated":"ToggleButton-module__is-icon-animated___29kQK","button-text":"ToggleButton-module__button-text___1G3H_"}}}]);
//# sourceMappingURL=90-bcfb5e574f2dab801e58.js.map