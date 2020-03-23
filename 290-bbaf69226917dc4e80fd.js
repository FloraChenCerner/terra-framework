(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1133:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(0),a=t.n(r),i=t(1007),l=t.n(i),u=function(e){var n=e.url;return a.a.createElement(l.a,{name:"terra-form-validation",version:"1.28.0",url:n})}},1701:function(e,n,t){"use strict";var r=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(165)),i=r(t(24)),l=r(t(25)),u=r(t(29)),o=r(t(26)),s=r(t(27)),d=r(t(28)),c=r(t(1193)),m=r(t(1194)),p=r(t(0)),f=t(1096),h=r(t(1097)),v=r(t(59)),b=r(t(363));function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var O=function(){var e=(0,m.default)(c.default.mark((function e(n){var t;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return n.length<3?e("Not long enough"):e("TerraUser"===n?"Name is Unavailable":"")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(e){(0,d.default)(r,e);var n,t=(n=r,function(){var e,t=(0,s.default)(n);if(F()){var r=(0,s.default)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return(0,o.default)(this,e)});function r(e){var n;return(0,i.default)(this,r),(n=t.call(this,e)).state={},n.submitForm=n.submitForm.bind((0,u.default)(n)),n}return(0,l.default)(r,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit;return p.default.createElement("form",{noValidate:!0,onSubmit:n},p.default.createElement(f.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return p.default.createElement(h.default,{inputId:"profile-description",label:"Description",error:t.error,isInvalid:!t.valid,inputAttrs:g({placeholder:"Description"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),p.default.createElement(f.Field,{name:"user_name",validate:O},(function(e){var n=e.input,t=e.meta;return p.default.createElement(h.default,{inputId:"user-name",label:"User Name, requires at least 3 characters",error:t.error,isInvalid:"Name is Unavailable"===t.error,isIncomplete:"Not long enough"===t.error||"Required"===t.error,inputAttrs:g({placeholder:"Description"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),p.default.createElement(v.default,{text:"Submit",type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return p.default.createElement(b.default,{marginBottom:"small"},p.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}),this.state.submittedValues&&p.default.createElement("div",null,p.default.createElement("p",null,"Form Submitted Successfully With"),p.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),r}(p.default.Component);n.default=x},1702:function(e,n,t){"use strict";var r=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(165)),i=r(t(24)),l=r(t(25)),u=r(t(29)),o=r(t(26)),s=r(t(27)),d=r(t(28)),c=r(t(0)),m=t(1096),p=r(t(1097)),f=r(t(1232)),h=r(t(1491)),v=r(t(357)),b=r(t(1489)),y=r(t(1490)),g=r(t(59)),F=r(t(363)),O=r(t(373));function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var E=function(e){return e&&e.length>0?void 0:"Required"},C=function(e){(0,d.default)(r,e);var n,t=(n=r,function(){var e,t=(0,s.default)(n);if(k()){var r=(0,s.default)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return(0,o.default)(this,e)});function r(e){var n;return(0,i.default)(this,r),(n=t.call(this,e)).state={},n.submitForm=n.submitForm.bind((0,u.default)(n)),n}return(0,l.default)(r,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.errors,r=e.submitFailed;return c.default.createElement("form",{noValidate:!0,onSubmit:n},c.default.createElement(m.Field,{name:"description",validate:E},(function(e){var n=e.input,t=e.meta;return c.default.createElement(p.default,{inputId:"description",label:"Description",error:t.error,isInvalid:t.submitFailed,inputAttrs:S({placeholder:"Description"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),c.default.createElement("div",null,c.default.createElement(y.default,{legend:"Which kind of meal would you like?",isInvalid:r&&void 0!==t.meal,error:t.meal},c.default.createElement(m.Field,{name:"meal",type:"radio",value:"chicken",validate:E,component:function(e){var n=e.input;return c.default.createElement(b.default,{inputAttrs:S({},n),labelText:"Chicken",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),c.default.createElement(m.Field,{name:"meal",type:"radio",value:"vegetarian",validate:E,component:function(e){var n=e.input;return c.default.createElement(b.default,{inputAttrs:S({},n),labelText:"Vegetarian",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),c.default.createElement(m.Field,{name:"meal",type:"radio",value:"fish",validate:E,component:function(e){var n=e.input;return c.default.createElement(b.default,{inputAttrs:S({},n),labelText:"Fish",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}))),c.default.createElement(m.Field,{name:"travel",type:"select",validate:E,component:function(e){var n=e.input,t=e.meta;return c.default.createElement(v.default,{htmlFor:"airliner",label:"Which Airliner are you traveling on?",isInvalid:t.submitFailed&&void 0!==t.error,error:t.error},c.default.createElement(O.default,{id:"airliner",name:n.name,onChange:function(e){n.onChange(e)},defaultValue:n.value,placeholder:"Select an Airline"},c.default.createElement(O.default.Option,{value:"southwest",display:"Southwest",key:"southwest"}),c.default.createElement(O.default.Option,{value:"alaska",display:"Alaska",key:"alaska"}),c.default.createElement(O.default.Option,{value:"hawaii",display:"Hawaii",key:"hawaii"})))}}),c.default.createElement("div",null,c.default.createElement(h.default,{legend:"What are all the conference tracks you plan on attending?",error:t.tracks,isInvalid:r&&void 0!==t.tracks},c.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"developer",validate:E,component:function(e){var n=e.input;return c.default.createElement(f.default,{inputAttrs:S({},n),labelText:"Developer",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),c.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"designer",validate:E,component:function(e){var n=e.input;return c.default.createElement(f.default,{inputAttrs:S({},n),labelText:"Designer",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),c.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"soft_skills",validate:E,component:function(e){var n=e.input;return c.default.createElement(f.default,{inputAttrs:S({},n),labelText:"Soft skills",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}))),c.default.createElement(g.default,{text:"Submit",type:g.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(F.default,{marginBottom:"small"},c.default.createElement(m.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""}}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),r}(c.default.Component);n.default=C},1703:function(e,n,t){"use strict";var r=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(165)),i=r(t(24)),l=r(t(25)),u=r(t(29)),o=r(t(26)),s=r(t(27)),d=r(t(28)),c=r(t(1193)),m=r(t(1194)),p=r(t(0)),f=t(1096),h=r(t(1097)),v=r(t(59)),b=r(t(363));function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var O=function(){var e=(0,m.default)(c.default.mark((function e(n){var t;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return e("TerraUser"!==n?"":"Name is Unavailable")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(e){(0,d.default)(r,e);var n,t=(n=r,function(){var e,t=(0,s.default)(n);if(F()){var r=(0,s.default)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return(0,o.default)(this,e)});function r(e){var n;return(0,i.default)(this,r),(n=t.call(this,e)).state={},n.submitForm=n.submitForm.bind((0,u.default)(n)),n}return(0,l.default)(r,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.pristine,r=e.invalid;return p.default.createElement("form",{noValidate:!0,onSubmit:n},p.default.createElement(f.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return p.default.createElement(h.default,{inputId:"description-input",label:"Description",error:t.error,isInvalid:t.submitFailed&&void 0!==t.error,inputAttrs:g({placeholder:"Description"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),p.default.createElement(f.Field,{name:"user_name",validate:O},(function(e){var n=e.input,t=e.meta;return p.default.createElement(h.default,{inputId:"user-name-disabled",label:"User Name",error:t.error,isInvalid:t.submitFailed&&void 0!==t.error,onChange:function(e){n.onChange(e.target.value)},inputAttrs:g({placeholder:"Description"},n),value:n.value,required:!0})})),p.default.createElement(v.default,{text:"Submit",isDisabled:r||t,type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return p.default.createElement(b.default,{marginBottom:"small"},p.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}),this.state.submittedValues&&p.default.createElement("div",null,p.default.createElement("p",null,"Form Submitted Successfully With"),p.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),r}(p.default.Component);n.default=x},2378:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return D}));var r=t(17),a=t.n(r),i=t(22),l=t.n(i),u=t(0),o=t.n(u),s=t(354),d=t(1133),c=t(1701),m=t.n(c),p={};function f(e){var n=e.components,t=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name.length < 3) {\n      return resolve('Not long enough');\n    }\n    if (name === 'TerraUser') {\n      return resolve('Name is Unavailable');\n    }\n    return resolve('');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"profile-description\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={!meta.valid}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name, requires at least 3 characters\"\n              error={meta.error}\n              isInvalid={meta.error === 'Name is Unavailable'}\n              isIncomplete={meta.error === 'Not long enough' || meta.error === 'Required'}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}f.isMDXComponent=!0;var h=t(1009),v=t.n(h),b=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:n||"Validation On Input",description:t,example:o.a.createElement(m.a,null),exampleSrc:o.a.createElement(f,null),isExpanded:r})},y=t(1702),g=t.n(y),F={};function O(e){var n=e.components,t=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},F,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),'/* eslint-disable class-methods-use-this */\n\nimport React from \'react\';\nimport { Form, Field } from \'react-final-form\';\nimport InputField from \'terra-form-input/lib/InputField\';\nimport Checkbox from \'terra-form-checkbox\';\nimport CheckboxField from \'terra-form-checkbox/lib/CheckboxField\';\nimport TerraField from \'terra-form-field\';\nimport Radio from \'terra-form-radio\';\nimport RadioField from \'terra-form-radio/lib/RadioField\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport Select from \'terra-form-select\';\n\nconst required = value => (value && value.length > 0 ? undefined : \'Required\');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, errors, submitFailed }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name="description"\n          validate={required}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId="description"\n              label="Description"\n              error={meta.error}\n              isInvalid={meta.submitFailed}\n              inputAttrs={{\n                placeholder: \'Description\',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <div>\n          <RadioField\n            legend="Which kind of meal would you like?"\n            isInvalid={submitFailed && errors.meal !== undefined}\n            error={errors.meal}\n          >\n            <Field\n              name="meal"\n              type="radio"\n              value="chicken"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Chicken"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="vegetarian"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Vegetarian"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="fish"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Fish"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </RadioField>\n        </div>\n        <Field\n          name="travel"\n          type="select"\n          validate={required}\n          component={({ input, meta }) => (\n            <TerraField\n              htmlFor="airliner"\n              label="Which Airliner are you traveling on?"\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              error={meta.error}\n            >\n              <Select\n                id="airliner"\n                name={input.name}\n                onChange={(value) => { input.onChange(value); }}\n                defaultValue={input.value}\n                placeholder="Select an Airline"\n              >\n                <Select.Option value="southwest" display="Southwest" key="southwest" />\n                <Select.Option value="alaska" display="Alaska" key="alaska" />\n                <Select.Option value="hawaii" display="Hawaii" key="hawaii" />\n              </Select>\n            </TerraField>\n          )}\n        />\n        <div>\n          <CheckboxField\n            legend="What are all the conference tracks you plan on attending?"\n            error={errors.tracks}\n            isInvalid={submitFailed && errors.tracks !== undefined}\n          >\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="developer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Developer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="designer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Designer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="soft_skills"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Soft skills"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </CheckboxField>\n        </div>\n        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom="small">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: \'\' }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n')))}O.isMDXComponent=!0;var x=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:n||"Validation On Submit",description:t,example:o.a.createElement(g.a,null),exampleSrc:o.a.createElement(O,null),isExpanded:r})},S=t(1703),k=t.n(S),E={};function C(e){var n=e.components,t=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},E,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"description-input\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name-disabled\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}C.isMDXComponent=!0;var j=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:n||"Validation Disable Submit",description:t,example:o.a.createElement(k.a,null),exampleSrc:o.a.createElement(C,null),isExpanded:r})},w={};function D(e){var n=e.components,t=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},w,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)(d.a,{mdxType:"Badge"}),Object(s.mdx)("h1",{id:"validation-events"},"Validation Events"),Object(s.mdx)("h2",{id:"dynamic-validation"},"Dynamic Validation"),Object(s.mdx)("p",null,"The default behavior of ",Object(s.mdx)("em",{parentName:"p"},"react-final-form")," is to dynamically validate, meaning it validates the content while the user is interacting with the form, and when a form loads. To use this behavior, simply use the error key of the meta data passed to an individual form component, and pass it to the error prop of the Terra Field component (TextareaField, InputField, ...), like in the example below."),Object(s.mdx)("h2",{id:"display-validation-onsubmit"},"Display Validation onSubmit"),Object(s.mdx)("p",null,"Forms written with react-final-form are always validated dynamically, but you can delay showing the validation errors until the form is submitted. The meta argument contains an attribute submitFailed that indicates the last submit was a failure. To display errors on validation, set the isInvalid prop equal to meta.submitFailed like in the example below."),Object(s.mdx)("h2",{id:"disable-form-submission-for-an-invalid-form"},"Disable form submission for an invalid form"),Object(s.mdx)("p",null,"The form render function contains attributes such as invalid (the form has errors on it) and pristine (the form has not been touched yet by the user) that allow for you to enable and disable the submission button. All you need to do is pass in the attribute you wish to check in order to see if the button should be enabled or not."),Object(s.mdx)("p",null,"Consult ",Object(s.mdx)("a",a()({parentName:"p"},{href:"https://github.com/final-form/react-final-form"}),"react-final-form")," for further functionality that can be used."),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(b,{title:"Validation onInput",mdxType:"ValidationOnInput"}),Object(s.mdx)(x,{title:"Validation onSubmit",mdxType:"ValidationOnSubmit"}),Object(s.mdx)(j,{title:"Validation Disable Submit",mdxType:"ValidationDisableSubmit"}))}D.isMDXComponent=!0}}]);
//# sourceMappingURL=290-bbaf69226917dc4e80fd.js.map