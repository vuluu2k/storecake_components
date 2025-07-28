import{a as d,e as m,k as l,n as g,o as y}from"./iframe-Cyqr1D8n.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const p={props:{type:{type:String,default:"success",validator:e=>["success","secondary","info","warning","error"].includes(e)},size:{type:[String,Number],default:8}},setup(){return{}},computed:{style(){const e={};return this.size&&(e["--size"]=typeof this.size=="string"?this.size:`${this.size}px`),e}}};function S(e,c,u,_,v,i){return y(),d("div",{class:g(["status-design",u.type]),style:l(i.style)},c[0]||(c[0]=[m("div",{class:"status-design-icon"},null,-1)]),6)}const z=f(p,[["render",S]]);p.__docgenInfo={exportName:"default",displayName:"Status",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'success'"},values:["success","secondary","info","warning","error"]},{name:"size",type:{name:"string|number"},defaultValue:{func:!1,value:"8"}}],sourceFiles:["/home/runner/work/storecake_components/storecake_components/src/components/Status.vue"]};const w={title:"Auto/Status",component:z,tags:["autodocs"],argTypes:{type:{control:"select",options:["success","secondary","info","warning","error"],description:"Type of the Status"},size:{control:"number",description:"Size of the Status"}},args:{type:"success",size:8}},s={args:{type:"success",size:8}},r={args:{type:"success"}},a={args:{type:"secondary"}},t={args:{type:"info"}},o={args:{type:"warning"}},n={args:{type:"error"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    size: 8
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error'
  }
}`,...n.parameters?.docs?.source}}};const x=["Default","Success","Secondary","Info","Warning","Error"];export{s as Default,n as Error,t as Info,a as Secondary,r as Success,o as Warning,x as __namedExportsOrder,w as default};
