(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1007:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(2)),a=l(n(5)),s=l(n(1008));function l(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(s.default),i={name:o.default.string.isRequired,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.name,n=e.url,o=e.version;return r.default.createElement("div",{className:d("badge-container")},r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(o))))};c.propTypes=i;var p=c;t.default=p},1008:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(2)),a=l(n(5)),s=l(n(1017));function l(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(s.default),i={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},c=function(e){var t=e.rows;return r.default.createElement("table",{className:d("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:d("tr")},r.default.createElement("th",{className:d("th")},"Prop Name"),r.default.createElement("th",{className:d("th")},"Type"),r.default.createElement("th",{className:d("th")},"Is Required"),r.default.createElement("th",{className:d("th")},"Default Value"),r.default.createElement("th",{className:d("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:d(["td","props-td"])},e.type()),r.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};c.propTypes=i;var p=c;t.default=p},1017:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1117:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),a=n(1007),s=n.n(a),l=function(e){var t=e.url;return o.a.createElement(s.a,{name:"terra-disclosure-manager",version:"4.32.0",url:t})}},2401:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(17),o=n.n(r),a=n(22),s=n.n(a),l=(n(0),n(354)),d=n(1117),i=n(1014),c=n.n(i),p=function(){return Object(l.mdx)(c.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=s()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=s()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The child components that will be provided the disclosure functionality."))}return t.isMDXComponent=!0,t({})}},{name:"render",type:function(){var e={};function t(t){var n=t.components,r=s()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=s()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"A function used to provide rendering capabilities to the DisclosureManager."))}return t.isMDXComponent=!0,t({})}},{name:"supportedDisclosureTypes",type:function(){var e={};function t(t){var n=t.components,r=s()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"array"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=s()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"An array of disclosure types that the DisclosureManager should support. If an unsupported disclosure request occurs, the DisclosureManager will\nutilize its 'disclosureManager' prop and forward the request instead of handling the request itself."))}return t.isMDXComponent=!0,t({})}},{name:"trapNestedDisclosureRequests",type:function(){var e={};function t(t){var n=t.components,r=s()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=s()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"A boolean indicating whether or not the DisclosureManager should handle all nested disclosure requests. When enabled, the DisclosureManager will handle all\ndisclose requests coming from disclosed components, regardless of the preferred disclosure type."))}return t.isMDXComponent=!0,t({})}}]})},u={};function m(e){var t=e.components,n=s()(e,["components"]);return Object(l.mdx)("wrapper",o()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(d.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-disclosure-manager"},"Terra Disclosure Manager"),Object(l.mdx)("p",null,"The DisclosureManager is a stateful component used to manage disclosure presentation. It provides consumers with access to the ",Object(l.mdx)("inlineCode",{parentName:"p"},"DisclosureManager")," component, the ",Object(l.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext"),", and the context wrapper ",Object(l.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager"),". Additionally, it provides the ",Object(l.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to allow disclosed content to register header information with the disclosing container."),Object(l.mdx)("p",null,"For the purpose of clarity, the concepts explained can be broken down into:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Disclosure Manager"),Object(l.mdx)("li",{parentName:"ul"},"Disclosure Manager Children - content rendered as children of the DisclosureManager"),Object(l.mdx)("li",{parentName:"ul"},"Disclosed Content - content that will be disclosed by a DisclosureManager child")),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",o()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-disclosure-manager"))))),Object(l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",o()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(l.mdx)("th",o()({parentName:"tr"},{align:null}),"Version"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"react"),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"react-dom"),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"^16.8.5")))),Object(l.mdx)("p",null,"This package uses React's Context for inter-component communication. A single instance of this package must be installed to ensure that communication occurs between all Context Providers and Consumers. To help ensure a single instance is installed, this package should be defined as a peer dependency in packages that are reusable libraries or otherwise consumed by other packages."),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",o()({parentName:"pre"},{className:"language-js"}),"import DisclosureManager from 'terra-disclosure-manager';\n")),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",o()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",o()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",o()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(l.mdx)("p",null,Object(l.mdx)("a",o()({parentName:"p"},{href:"https://github.com/cerner/terra-framework/tree/master/packages/terra-application-menu-layout"}),"View component source code")),Object(l.mdx)("h2",{id:"disclosure-manager-props"},"Disclosure Manager Props"),Object(l.mdx)(p,{mdxType:"DisclosureManagerPropsTable"}),Object(l.mdx)("h3",{id:"requirements-of-the-render-prop"},"Requirements of the Render Prop"),Object(l.mdx)("p",null,"The DisclosureManager does not implement a traditional render function. Instead, it uses the ",Object(l.mdx)("inlineCode",{parentName:"p"},"render")," prop provided to the DisclosureManager to allow the implementing component to managed how disclsoures should be presented. The ",Object(l.mdx)("inlineCode",{parentName:"p"},"render")," function should define the following parameters that will reflect the the DisclosureManager's state."),Object(l.mdx)("pre",null,Object(l.mdx)("code",o()({parentName:"pre"},{className:"language-js"}),"const render = ({\n  children,\n  closeDisclosure,\n  disclosureComponentKeys,\n  disclosureComponentData,\n  disclosure,\n  dismissPresentedComponent,\n  maximizeDisclosure,\n  minimizeDisclosure,\n}) => {\n  // render stuff\n};\n")),Object(l.mdx)("details",null,Object(l.mdx)("summary",null,"Render Arguments in Detail"),Object(l.mdx)("pre",null,Object(l.mdx)("code",o()({parentName:"pre"},{className:"language-js"}),"const render = ({\n  /* The children components provided to the DisclosureManager. */\n  children: {\n    /* Array of React components to render as content. */\n    components: PropsTypes.arrayOf(PropsTypes.node),\n  },\n\n  /* Closes the disclosure and removes all components from the disclosure stack. */\n  closeDisclosure: PropsTypes.func,\n\n  /* The components in the disclosure stack. */\n  disclose: {\n    /* The React components to render in a disclosure mechanism. */\n    components: PropTypes.arrayOf(PropsTypes.node),\n        \n    /* Indicate the current display state of the DisclosureManager. */\n    isOpen: PropTypes.bool,\n        \n    /**\n     * Indicate the current focus state of the DisclosureManager.\n     *  > Note: The `isFocused` value has little relevance now that Terra's AbstractModal and other\n     *    components directly manage their own focus state. `isFocused` will be removed from their\n     *    DisclosureManager API in a future major release.\n     */\n    isFocused: PropTypes.bool,\n        \n    /* Indicate the current maximize state of the DisclosureManager. */\n    isMaximized: PropTypes.bool,\n    \n    /* The String size of the disclosure. */\n    size: PropTypes.string,\n  },\n  \n  /* Array of keys representing the components in the disclosure stack. */\n  disclosureComponentKeys: PropsTypes.arrayOf(PropsTypes.string),\n\n  /* Contains components and associated data representing the state of disclosure stack */\n  disclosureComponentData: {\n    \n    /* Component that has been wrapped with the DisclosureManager-provided contexts */\n    component: PropsTypes.node,\n\n    /** \n     * Contains the header data for the associated component. This will be provided if the \n     * component's title is provided title on disclose or the DisclosureHeaderAdapter is rendered\n     * by the disclosed component.\n     */\n    headerAdapterData: {\n      /* The disclosed component's title that can be rendered within the header. */\n      title: PropsTypes.string,\n\n      /* A CollapsibleMenuView component that can render within the header. */\n      collapsibleMenuView: PropType.node,\n    },\n  },\n\n  /* Pops the currently disclosed component off the disclosure stack. */\n  dismissPresentedComponent: PropsTypes.func,\n\n  /**\n   * Maximizes the disclosure size. If the disclosure cannot be maximized, or if it is already\n   * maximized, the function is not provided.\n   */\n  maximizeDisclosure: PropsTypes.func,\n\n  /**\n   * Minimizes the disclosure size. If the disclosure cannot be minimized, or if it is already\n   * minimized, the function is not provided.\n   */\n  minimizeDisclosure: PropsTypes.func,\n}) => {\n  // render stuff\n};\n"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=176-df7852d8bd429799f384.js.map