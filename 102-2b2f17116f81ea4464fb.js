(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1007:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),r=c(n(2)),a=c(n(5)),p=c(n(1008));function c(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(p.default),i={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},d=function(e){var t=e.name,n=e.url,r=e.version;return o.default.createElement("div",{className:u("badge-container")},o.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},o.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),o.default.createElement("span",{className:u("badge-version")},"v".concat(r))))};d.propTypes=i;var l=d;t.default=l},1008:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1009:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),r=c(n(2)),a=c(n(5)),p=c(n(1012));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=a.default.bind(p.default),b={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},h=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=i(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?d(o):r).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(d(n)),n.handleCodeToggle=n.handleCodeToggle.bind(d(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),m(t,null,[{key:"renderHeader",value:function(e){return e?o.default.createElement("div",{className:f("header")},o.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?o.default.createElement("div",{className:f("description")},e):null}}]),m(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,r=e.exampleSrc,a=e.title,p=e.description,c=this.state,u=c.isExpanded,i=c.isBackgroundTransparent;return o.default.createElement("div",{className:f("template")},t.renderHeader(a),o.default.createElement("div",{className:f("content",{"dynamic-content":i})},t.renderDescription(p),n),r&&o.default.createElement("div",{className:f("footer")},o.default.createElement("div",{className:f("button-container")},o.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:f("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:f("chevron-right")}))),u&&o.default.createElement("div",{className:f("code")},r)))}}]),t}(o.default.Component);h.propTypes=b,h.defaultProps={isExpanded:!1};var x=h;t.default=x},1012:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),r=c(n(2)),a=c(n(5)),p=c(n(1017));function c(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(p.default),i={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},d=function(e){var t=e.rows;return o.default.createElement("table",{className:u("table")},o.default.createElement("thead",null,o.default.createElement("tr",{className:u("tr")},o.default.createElement("th",{className:u("th")},"Prop Name"),o.default.createElement("th",{className:u("th")},"Type"),o.default.createElement("th",{className:u("th")},"Is Required"),o.default.createElement("th",{className:u("th")},"Default Value"),o.default.createElement("th",{className:u("th")},"Description"))),o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},o.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),o.default.createElement("td",{className:u(["td","props-td"])},e.type()),o.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),o.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),o.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};d.propTypes=i;var l=d;t.default=l},1017:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1115:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0),r=n.n(o),a=n(1007),p=n.n(a),c=function(e){var t=e.url;return r.a.createElement(p.a,{name:"terra-date-picker",version:"4.31.0",url:t})}},1116:function(e,t,n){e.exports={"date-wrapper":"DatePickerExampleCommon-module__date-wrapper___2vTEQ"}},1653:function(e,t,n){"use strict";var o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(17)),a=o(n(24)),p=o(n(25)),c=o(n(29)),u=o(n(26)),i=o(n(27)),d=o(n(28)),l=o(n(0)),m=o(n(5)),s=o(n(2)),f=o(n(1018)),b=o(n(1116));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var x=m.default.bind(b.default),_={selectedDate:s.default.node},v=function(e){(0,d.default)(o,e);var t,n=(t=o,function(){var e,n=(0,i.default)(t);if(h()){var o=(0,i.default)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,u.default)(this,e)});function o(e){var t;return(0,a.default)(this,o),(t=n.call(this,e)).state={date:t.props.selectedDate},t.handleDateChange=t.handleDateChange.bind((0,c.default)(t)),t}return(0,p.default)(o,[{key:"handleDateChange",value:function(e,t){this.setState({date:t})}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("p",null,"Selected ISO Date:",l.default.createElement("span",{className:x("date-wrapper")},this.state.date)),l.default.createElement(f.default,(0,r.default)({label:"Enter Date",name:"date-input",datePickerId:"default-field",onChange:this.handleDateChange},this.props)))}}]),o}(l.default.Component);v.propTypes=_,v.defaultProps={selectedDate:""};var y=v;t.default=y},2388:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var o=n(17),r=n.n(o),a=n(22),p=n.n(a),c=n(0),u=n.n(c),i=n(354),d=n(1115),l=n(1014),m=n.n(l),s=function(){return Object(i.mdx)(m.a,{rows:[{name:"datePickerId",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"The DatePicker identifier. Links the htmlFor of the field to the select identifier."))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Whether the date input should be disabled."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Error message for when the input is invalid. This will only be displayed if isInvalid is true."))}return t.isMDXComponent=!0,t({})}},{name:"errorIcon",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"<IconError />",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Error Icon to display when the input is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"excludeDates",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"arrayOf"),Object(i.mdx)("pre",null,Object(i.mdx)("code",r()({parentName:"pre"},{className:"language-json"}),'{\n "name": "string"\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"An array of ISO 8601 string representation of the dates to disable in the picker."))}return t.isMDXComponent=!0,t({})}},{name:"filterDate",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"A function that gets called for each date in the picker to evaluate which date should be disabled.\nA return value of true will be enabled and false will be disabled."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Help element to display with the input."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Whether or not to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(i.mdx)("em",{parentName:"p"},"(usage note: ",Object(i.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Whether or not the field is an inline field."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility."))}return t.isMDXComponent=!0,t({})}},{name:"includeDates",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"arrayOf"),Object(i.mdx)("pre",null,Object(i.mdx)("code",r()({parentName:"pre"},{className:"language-json"}),'{\n "name": "string"\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled."))}return t.isMDXComponent=!0,t({})}},{name:"inputAttributes",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Custom input attributes to apply to the date input. Use the name prop to set the name for the input.\nDo not set the name in inputAttribute as it will be ignored."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"The label of the form control children."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Attributes to attach to the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxDate",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"An ISO 8601 string representation of the maximum date that can be selected."))}return t.isMDXComponent=!0,t({})}},{name:"minDate",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"An ISO 8601 string representation of the minimum date that can be selected."))}return t.isMDXComponent=!0,t({})}},{name:"name",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Name of the date input. The name should be unique."))}return t.isMDXComponent=!0,t({})}},{name:"onBlur",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"A callback function triggered when the date picker component loses focus.\nThis event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.\nThe first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered."))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"A callback function to execute when a valid date is selected or entered.\nThe first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered."))}return t.isMDXComponent=!0,t({})}},{name:"onChangeRaw",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"A callback function to execute when a change is made in the date input.\nThe first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered."))}return t.isMDXComponent=!0,t({})}},{name:"onClickOutside",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"A callback function to execute when clicking outside of the picker to dismiss it."))}return t.isMDXComponent=!0,t({})}},{name:"onFocus",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"A callback function triggered when the date picker component receives focus.\nThis event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"A callback function to execute when a date is selected from within the picker."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Whether or not the date field is required."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Set the max-width of a field using ",Object(i.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(i.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(i.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"selectedDate",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"An ISO 8601 string representation of the initial value to show in the date input.\nThis prop name is derived from react-datepicker but is analogous to value in a form input field."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,o=p()(t,["components"]);return Object(i.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}}]})},f=n(1653),b=n.n(f),h={};function x(e){var t=e.components,n=p()(e,["components"]);return Object(i.mdx)("wrapper",r()({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport classNames from 'classnames/bind';\nimport PropTypes from 'prop-types';\nimport DatePickerField from 'terra-date-picker';\nimport styles from './DatePickerExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The current DatePicker date if selected. Use for the selected date message.\n   */\n  selectedDate: PropTypes.node,\n};\n\nconst defaultProps = {\n  selectedDate: '',\n};\n\nclass DatePickerExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { date: this.props.selectedDate };\n    this.handleDateChange = this.handleDateChange.bind(this);\n  }\n\n  handleDateChange(event, date) {\n    this.setState({ date });\n  }\n\n  render() {\n    return (\n      <div>\n        <p>\n          Selected ISO Date:\n          <span className={cx('date-wrapper')}>{this.state.date}</span>\n        </p>\n        <DatePickerField\n          label=\"Enter Date\"\n          name=\"date-input\"\n          datePickerId=\"default-field\"\n          onChange={this.handleDateChange}\n          {...this.props}\n        />\n      </div>\n    );\n  }\n}\n\nDatePickerExample.propTypes = propTypes;\nDatePickerExample.defaultProps = defaultProps;\n\nexport default DatePickerExample;\n\n")))}x.isMDXComponent=!0;var _=n(1009),v=n.n(_),y=function(e){var t=e.title,n=e.description,o=e.isExpanded;return u.a.createElement(v.a,{title:t||"Date Picker Field",description:n,example:u.a.createElement(b.a,null),exampleSrc:u.a.createElement(x,null),isExpanded:o})},O={};function j(e){var t=e.components,n=p()(e,["components"]);return Object(i.mdx)("wrapper",r()({},O,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(d.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"terra-date-picker-field"},"Terra Date Picker Field"),Object(i.mdx)("p",null,Object(i.mdx)("a",r()({parentName:"p"},{href:"https://github.com/cerner/terra-framework/tree/master/packages/terra-date-picker"}),"terra-date-picker")," component that is wrapped inside a\n",Object(i.mdx)("a",r()({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-field"}),"terra-form-field")," component."),Object(i.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Install with ",Object(i.mdx)("a",r()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm install terra-date-picker"))))),Object(i.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),Object(i.mdx)("p",null,"DatePickerField is required to be composed inside the ",Object(i.mdx)("a",r()({parentName:"p"},{href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"}),"Base")," component with locale in order for it to load the correct date format and translation strings."),Object(i.mdx)("h2",{id:"component-features"},"Component Features"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support"))),Object(i.mdx)("p",null,Object(i.mdx)("a",r()({parentName:"p"},{href:"https://github.com/cerner/terra-framework/tree/master/packages/terra-date-picker"}),"View component source code")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)(y,{title:"Date Picker Field",mdxType:"DatePickerFieldExample"}),Object(i.mdx)("h2",{id:"date-picker-field-props-table"},"Date Picker field props table"),Object(i.mdx)(s,{mdxType:"DatePickerFieldPropsTable"}))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=102-2b2f17116f81ea4464fb.js.map