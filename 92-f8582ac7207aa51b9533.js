(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1050:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(17)),o=a(n(22)),i=a(n(0)),l=a(n(2)),d=a(n(5)),m=n(8),u=a(n(1051)),p=d.default.bind(u.default),s={extensions:l.default.element,logo:l.default.element,intl:m.intlShape.isRequired,navigation:l.default.element,toggle:l.default.element,utilities:l.default.element},c=function(e){var t,n,a,l,d,m=e.extensions,u=e.logo,s=e.navigation,c=e.intl,f=e.toggle,x=e.utilities,b=(0,o.default)(e,["extensions","logo","navigation","intl","toggle","utilities"]),v=p(["header","fill",b.className]);u&&(t=i.default.createElement("div",{className:p(["fit","start","logo"])},u)),s&&(n=i.default.createElement("nav",{role:"navigation",className:p("fill")},s)),m&&(a=i.default.createElement("div",{className:p(["fit","end","extensions"])},m)),x&&(l=i.default.createElement("div",{className:p(["fit","end","utilities"])},x)),f&&(d=i.default.createElement("div",{className:p("fit")},f));var y,g=i.default.createElement("div",{className:p(["fill","header-inner"])},n,a),_=i.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:p("skip-content")},c.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(g||t||l)&&(y=i.default.createElement("div",{className:p(["fill","header-body"])},_,t,g,l)),i.default.createElement("div",(0,r.default)({},b,{className:v}),d,y)};c.propTypes=s;var f=(0,m.injectIntl)(c);t.default=f},1051:function(e,t,n){e.exports={fit:"ApplicationHeaderLayout-module__fit___tJJW8",fill:"ApplicationHeaderLayout-module__fill___1szI2",start:"ApplicationHeaderLayout-module__start___brKW8",end:"ApplicationHeaderLayout-module__end___3OIpZ","header-inner":"ApplicationHeaderLayout-module__header-inner___36bkj",logo:"ApplicationHeaderLayout-module__logo___1KF-r",utilities:"ApplicationHeaderLayout-module__utilities___1jy0T",extensions:"ApplicationHeaderLayout-module__extensions___17F-D","header-body":"ApplicationHeaderLayout-module__header-body___3Yoz6","skip-content":"ApplicationHeaderLayout-module__skip-content___1vGmQ"}},1180:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(1007),i=n.n(o),l=function(e){var t=e.url;return r.a.createElement(i.a,{name:"terra-application-header-layout",version:"3.25.0",url:t})}},1181:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(5)),i=a(n(2)),l=a(n(1584)),d=o.default.bind(l.default),m={text:i.default.string,size:i.default.string},u=function(e){var t=e.text,n=e.size;return r.default.createElement("div",{className:d("wrapper1-".concat(n))},r.default.createElement("div",{className:d("wrapper2")},r.default.createElement("div",{className:d("wrapper3")},r.default.createElement("h3",null,t))))};u.propTypes=m,u.defaultProps={text:"PlaceHolder",size:"tiny"};var p=u;t.default=p},1582:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(5)),i=a(n(1069)),l=a(n(1050)),d=a(n(1583)),m=a(n(1585)),u=a(n(1586)),p=a(n(1587)),s=a(n(1588)),c=a(n(1589)),f=o.default.bind(c.default),x=function(){var e=r.default.createElement(l.default,{logo:r.default.createElement(m.default,{size:"tiny"}),utilities:r.default.createElement(s.default,{size:"tiny"}),extensions:r.default.createElement(d.default,{size:"tiny"}),navigation:r.default.createElement(u.default,{size:"tiny"}),toggle:r.default.createElement(p.default,{size:"tiny"})}),t=r.default.createElement(l.default,{logo:r.default.createElement(m.default,{size:"small"}),utilities:r.default.createElement(s.default,{size:"small"}),extensions:r.default.createElement(d.default,{size:"small"}),navigation:r.default.createElement(u.default,{size:"small"}),toggle:r.default.createElement(p.default,{size:"small"})}),n=r.default.createElement(l.default,{logo:r.default.createElement(m.default,{size:"medium"}),utilities:r.default.createElement(s.default,{size:"medium"}),extensions:r.default.createElement(d.default,{size:"medium"}),navigation:r.default.createElement(u.default,{size:"medium"}),toggle:r.default.createElement(p.default,{size:"medium"})});return r.default.createElement("div",{className:f("content-wrapper")},r.default.createElement("div",{className:f("responsive-element-wrapper")},r.default.createElement(i.default,{tiny:e,medium:t,large:n})))};t.default=x},1583:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(2)),i=a(n(1181)),l={size:o.default.string},d=function(e){var t=e.size,n="Extensions";return"tiny"===t?n="E":"small"===t&&(n="Ext"),r.default.createElement(i.default,{text:n,size:t})};d.propTypes=l;var m=d;t.default=m},1584:function(e,t,n){e.exports={"wrapper1-tiny":"Placeholder-module__wrapper1-tiny___2VK1I","wrapper1-small":"Placeholder-module__wrapper1-small___OVY-Z","wrapper1-medium":"Placeholder-module__wrapper1-medium___2dGud","wrapper1-default":"Placeholder-module__wrapper1-default___2WBAp",wrapper2:"Placeholder-module__wrapper2___54HjD",wrapper3:"Placeholder-module__wrapper3___11FOQ"}},1585:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(2)),i=a(n(1181)),l={size:o.default.string},d=function(e){var t=e.size,n="Logo";return"tiny"===t?n="L":"small"===t&&(n="Log"),r.default.createElement(i.default,{text:n,size:t})};d.propTypes=l;var m=d;t.default=m},1586:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(2)),i=a(n(1181)),l={size:o.default.string},d=function(e){var t=e.size,n="Navigation";return"tiny"===t?n="N":"small"===t&&(n="Nav"),r.default.createElement(i.default,{text:n,size:"default"})};d.propTypes=l;var m=d;t.default=m},1587:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(2)),i=a(n(1181)),l={size:o.default.string},d=function(e){var t=e.size,n="Toggle";return"tiny"===t?n="T":"small"===t&&(n="Tog"),r.default.createElement(i.default,{text:n,size:t})};d.propTypes=l;var m=d;t.default=m},1588:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(2)),i=a(n(1181)),l={size:o.default.string},d=function(e){var t=e.size,n="Utilities";return"tiny"===t?n="U":"small"===t&&(n="Util"),r.default.createElement(i.default,{text:n,size:t})};d.propTypes=l;var m=d;t.default=m},1589:function(e,t,n){e.exports={"content-wrapper":"HeaderWireframe-module__content-wrapper___2gccz","responsive-element-wrapper":"HeaderWireframe-module__responsive-element-wrapper___3LIoE"}},2389:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(17),r=n.n(a),o=n(22),i=n.n(o),l=n(0),d=n.n(l),m=n(354),u=n(1180),p=n(1582),s=n.n(p),c={};function f(e){var t=e.components,n=i()(e,["components"]);return Object(m.mdx)("wrapper",r()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport classNames from \'classnames/bind\';\nimport ResponsiveElement from \'terra-responsive-element\';\nimport ApplicationHeaderLayout from \'terra-application-header-layout\';\nimport ExtensionsExample from \'terra-application-header-layout/lib/terra-dev-site/doc/common/ExtensionsExample\';\nimport LogoExample from \'terra-application-header-layout/lib/terra-dev-site/doc/common/LogoExample\';\nimport NavigationExample from \'terra-application-header-layout/lib/terra-dev-site/doc/common/NavigationExample\';\nimport ToggleExample from \'terra-application-header-layout/lib/terra-dev-site/doc/common/ToggleExample\';\nimport UtilitiesExample from \'terra-application-header-layout/lib/terra-dev-site/doc/common/UtilitiesExample\';\nimport styles from \'./HeaderWireframe.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst HeaderWireframe = () => {\n  const tinyHeader = (\n    <ApplicationHeaderLayout\n      logo={<LogoExample size="tiny" />}\n      utilities={<UtilitiesExample size="tiny" />}\n      extensions={<ExtensionsExample size="tiny" />}\n      navigation={<NavigationExample size="tiny" />}\n      toggle={<ToggleExample size="tiny" />}\n    />\n  );\n\n  const mediumHeader = (\n    <ApplicationHeaderLayout\n      logo={<LogoExample size="small" />}\n      utilities={<UtilitiesExample size="small" />}\n      extensions={<ExtensionsExample size="small" />}\n      navigation={<NavigationExample size="small" />}\n      toggle={<ToggleExample size="small" />}\n    />\n  );\n\n  const largeHeader = (\n    <ApplicationHeaderLayout\n      logo={<LogoExample size="medium" />}\n      utilities={<UtilitiesExample size="medium" />}\n      extensions={<ExtensionsExample size="medium" />}\n      navigation={<NavigationExample size="medium" />}\n      toggle={<ToggleExample size="medium" />}\n    />\n  );\n\n  return (\n    <div className={cx(\'content-wrapper\')}>\n      <div className={cx(\'responsive-element-wrapper\')}>\n        <ResponsiveElement\n          tiny={tinyHeader}\n          medium={mediumHeader}\n          large={largeHeader}\n        />\n      </div>\n    </div>\n  );\n};\n\nexport default HeaderWireframe;\n\n')))}f.isMDXComponent=!0;var x=n(1009),b=n.n(x),v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return d.a.createElement(b.a,{title:t||"Header Wireframe",description:n,example:d.a.createElement(s.a,null),exampleSrc:d.a.createElement(f,null),isExpanded:a})},y=n(1014),g=n.n(y),_=function(){return Object(m.mdx)(g.a,{rows:[{name:"extensions",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Extensions element to be placed before the end of the header."))}return t.isMDXComponent=!0,t({})}},{name:"logo",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Logo element to be placed at the start of the header after the toggle element."))}return t.isMDXComponent=!0,t({})}},{name:"intl",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"custom"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"intl object programmatically imported through injectIntl from react-intl."))}return t.isMDXComponent=!0,t({})}},{name:"navigation",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Navigation element to be placed within the fill area of the header."))}return t.isMDXComponent=!0,t({})}},{name:"toggle",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Toggle element to be placed at the start of the header."))}return t.isMDXComponent=!0,t({})}},{name:"utilities",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(m.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"Utilities element to be placed at the end of the header."))}return t.isMDXComponent=!0,t({})}}]})},j={};function O(e){var t=e.components,n=i()(e,["components"]);return Object(m.mdx)("wrapper",r()({},j,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)(u.a,{mdxType:"Badge"}),Object(m.mdx)("h1",{id:"terra-application-header-layout"},"Terra Application Header Layout"),Object(m.mdx)("p",null,"This component renders an application header layout. To be used with a terra-layout or terra-navigation-layout."),Object(m.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Install with ",Object(m.mdx)("a",r()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-header-layout"))))),Object(m.mdx)("h2",{id:"features"},"Features"),Object(m.mdx)("h3",{id:"skip-to-content-button"},"Skip to Content Button"),Object(m.mdx)("p",null,"To improve accessibility of our UI for users using a keyboard to navigate, we have implement a 'Skip to Content' button that focuses on the main content node."),Object(m.mdx)("p",null,"To use it, just tab onto the page, and you will see it as the first item and "),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Press the Enter key to skip to the main content node, or"),Object(m.mdx)("li",{parentName:"ul"},"Press the Tab key to ignore the 'Skip to Content' button.")),Object(m.mdx)("h4",{id:"note"},"Note:"),Object(m.mdx)("p",null,"This feature is enabled by default and cannot be disabled."),Object(m.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(m.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",r()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(m.mdx)("th",r()({parentName:"tr"},{align:null}),"Version"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"react"),Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"react-dom"),Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"react-intl"),Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"^2.8.0")))),Object(m.mdx)("h2",{id:"component-features"},"Component Features"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(m.mdx)("p",null,Object(m.mdx)("a",r()({parentName:"p"},{href:"https://github.com/cerner/terra-framework/tree/master/packages/terra-application-header-layout"}),"View component source code")),Object(m.mdx)("h2",{id:"examples"},"Examples"),Object(m.mdx)(v,{title:"Header - Wireframe",mdxType:"HeaderWireframe"}),Object(m.mdx)("h2",{id:"application-header-layout-props-table"},"Application Header Layout Props table"),Object(m.mdx)(_,{mdxType:"HeaderLayoutSrc"}))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=92-f8582ac7207aa51b9533.js.map