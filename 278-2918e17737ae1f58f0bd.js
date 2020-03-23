(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1007:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(2)),o=i(n(5)),d=i(n(1008));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(d.default),l={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},m=function(e){var t=e.name,n=e.url,r=e.version;return a.default.createElement("div",{className:c("badge-container")},a.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(r))))};m.propTypes=l;var s=m;t.default=s},1008:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1115:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(1007),d=n.n(o),i=function(e){var t=e.url;return r.a.createElement(d.a,{name:"terra-date-picker",version:"4.31.0",url:t})}},2031:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(17),r=n.n(a),o=n(22),d=n.n(o),i=(n(0),n(354)),c=n(1115),l={};function m(e){var t=e.components,n=d()(e,["components"]);return Object(i.mdx)("wrapper",r()({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(c.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"terra-date-picker-upgrade-guide"},"Terra Date Picker Upgrade Guide"),Object(i.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(i.mdx)("h3",{id:"removed-props"},"Removed props"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Removed ",Object(i.mdx)("inlineCode",{parentName:"li"},"releaseFocus")),Object(i.mdx)("li",{parentName:"ul"},"Removed ",Object(i.mdx)("inlineCode",{parentName:"li"},"requestFocus"))),Object(i.mdx)("h3",{id:"new-props"},"New props"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Added ",Object(i.mdx)("inlineCode",{parentName:"li"},"onBlur")),Object(i.mdx)("li",{parentName:"ul"},"Added ",Object(i.mdx)("inlineCode",{parentName:"li"},"onFocus"))),Object(i.mdx)("h3",{id:"changes-to-onblur-and-onfocus"},"Changes to onBlur and onFocus"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"onBlur")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"onFocus")," props previously could be passed down as custom props. These props have now become first-class props. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop used to be triggered when focus is moved from the date input to the calendar button or vise versa. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop will still be triggered if the date picker component did not have focus and now just gained focus. However, if the focus is then moved from the date input to the calendar button or vise versa, the ",Object(i.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback now would not be triggered because the focus is still within the date picker container. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback now behaves similar to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback where ",Object(i.mdx)("inlineCode",{parentName:"p"},"onBlur")," would not be triggered when focus is transfered from the date input to the calendar button. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback would be triggered only when focus is lost from the entire date picker component."),Object(i.mdx)("h3",{id:"changes-to-filterdate"},"Changes to filterDate"),Object(i.mdx)("p",null,"The parameter in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"filterDate")," callback has changed from a moment date object to an ISO string representation of the date. The reason for this change is to keep consistency with other callbacks."),Object(i.mdx)("pre",null,Object(i.mdx)("code",r()({parentName:"pre"},{className:"language-diff"}),"import React from 'react';\nimport moment from 'moment';\nimport DatePicker from 'terra-date-picker';\n\nclass Default extends React.Component {\n  constructor() {\n    super();\n    this.handleFilterDate = this.handleFilterDate.bind(this);\n  }\n\n  handleFilterDate(date) {\n+   const momentDate = moment(date)\n    const day = momentDate.day();\n    return day !== 0 && day !== 6;\n  }\n\n  render() {\n    return (\n      <DatePicker\n        name=\"date-picker\"\n        filterDate={this.handleFilterDate}\n      />\n    );\n  }\n}\n\nexport default Default;\n")),Object(i.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(i.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(i.mdx)("h4",{id:"added"},"Added"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"--terra-date-picker-input-focus-border-color"),Object(i.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border"),Object(i.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border-bottom-right-radius"),Object(i.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border-top-right-radius"),Object(i.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-box-shadow"),Object(i.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-color"),Object(i.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-focus-border-color"),Object(i.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-focus-box-shadow")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=278-2918e17737ae1f58f0bd.js.map