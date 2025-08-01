import{F as v}from"./PhX.vue-DOToI9ND.js";import{c as i,e as y,f as b,r as S,D as T,E as k,a as w,y as C,o as u}from"./iframe-B5utUvJZ.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _={name:"Tags",components:{PhX:v},props:{size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},type:{type:String,default:"primary",validator:e=>["secondary","primary","info","success","warning","error"].includes(e)},bordered:{type:Boolean,default:!1},closable:{type:Boolean,default:!1}},emits:["close"],methods:{handleClose(e){e.preventDefault(),this.$emit("close",e)}}},V={key:0,class:"tag-icon"},B={class:"tag-label"},E={class:"close-icon"};function N(e,g,s,$,I,f){const h=C("PhX");return u(),i("div",{class:w(["tag",`tag-${s.size}`,`tag-${s.type}`,{"tag-bordered":s.bordered}])},[e.$slots.icon?(u(),i("span",V,[S(e.$slots,"icon")])):y("",!0),b("span",B,[S(e.$slots,"default")]),s.closable?(u(),i("span",{key:1,class:"tag-close",onClick:g[0]||(g[0]=T((...z)=>f.handleClose&&f.handleClose(...z),["stop"]))},[b("span",E,[k(h,{size:14})])])):y("",!0)],2)}const D=P(_,[["render",N]]);_.__docgenInfo={displayName:"Tags",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["secondary","primary","info","success","warning","error"]},{name:"bordered",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close",type:{names:["undefined"]}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["/home/runner/work/storecake_components/storecake_components/src/components/Tags.vue"]};const F={title:"Auto/Tags",component:D,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the Tags"},type:{control:"select",options:["secondary","primary","info","success","warning","error"],description:"Type of the Tags"},bordered:{control:"boolean",description:"Property bordered of the Tags"},closable:{control:"boolean",description:"Property closable of the Tags"}},args:{size:"md",type:"primary",bordered:!1,closable:!1}},r={args:{size:"md",type:"primary",bordered:!1,closable:!1}},a={args:{type:"secondary"}},o={args:{type:"primary"}},n={args:{type:"info"}},t={args:{type:"success"}},c={args:{type:"warning"}},l={args:{type:"error"}},d={args:{size:"sm"}},p={args:{size:"md"}},m={args:{size:"lg"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    type: 'primary',
    bordered: false,
    closable: false
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...m.parameters?.docs?.source}}};const L=["Default","Secondary","Primary","Info","Success","Warning","Error","Sm","Md","Lg"];export{r as Default,l as Error,n as Info,m as Lg,p as Md,o as Primary,a as Secondary,d as Sm,t as Success,c as Warning,L as __namedExportsOrder,F as default};
