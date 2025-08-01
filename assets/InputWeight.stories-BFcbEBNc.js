/* empty css                */import{A as l}from"./index-BiJD1MLr.js";import{y as d,A as g,m as f,z as h,o as v,r as z,G as _}from"./iframe-Cw8ULQMx.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useConfigInject-D316VgYr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DownOutlined-B3e4enqr.js";import"./classCallCheck-De_eDY7U.js";import"./isMobile-BPLVzUyJ.js";import"./raf-nDFcuFT6.js";import"./KeyCode-BcWn9RBx.js";import"./FormItemContext-BEx5ODJH.js";import"./vnode-DtmrXNFk.js";import"./omit-DFRO4Ww1.js";const i={components:{AInputNumber:l},props:{value:{type:[String,Number],default:0},size:{type:String,default:"md",validator:e=>["xs","sm","md","lg","xl"].includes(e)},classes:{type:String,default:""}},emits:["change","update:value"],methods:{handleChange(e,s){this.$emit("update:value",e),this.$emit("change",e,s)}}};function x(e,s,c,I,b,p){const u=h("a-input-number");return v(),d(u,f({value:c.value,"string-mode":"",class:["input-weight-design",c.size,c.classes],controls:!1},e.$attrs,{keyboard:"",onChange:p.handleChange}),{addonAfter:g(()=>[z(e.$slots,"addonAfter",{},()=>[s[0]||(s[0]=_("g",-1))])]),_:3},16,["value","class","onChange"])}const S=y(i,[["render",x]]);i.__docgenInfo={exportName:"default",displayName:"InputWeight",description:"",tags:{},props:[{name:"value",type:{name:"string|number"},defaultValue:{func:!1,value:"0"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"change",type:{names:["undefined"]},properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]},{name:"update:value",type:{names:["undefined"]}}],slots:[{name:"addonAfter"}],sourceFiles:["/home/runner/work/storecake_components/storecake_components/src/components/InputWeight.vue"]};const T={title:"Auto/InputWeight",component:S,tags:["autodocs"],argTypes:{value:{control:"number",description:"Property value of the InputWeight"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size of the InputWeight"},classes:{control:"text",description:"Classes of the InputWeight"}},args:{value:0,size:"md",classes:""}},a={args:{value:0,size:"md",classes:""}},r={args:{size:"xs"}},t={args:{size:"sm"}},n={args:{size:"md"}},o={args:{size:"lg"}},m={args:{size:"xl"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    size: 'md',
    classes: ''
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...m.parameters?.docs?.source}}};const E=["Default","Xs","Sm","Md","Lg","Xl"];export{a as Default,o as Lg,n as Md,t as Sm,m as Xl,r as Xs,E as __namedExportsOrder,T as default};
