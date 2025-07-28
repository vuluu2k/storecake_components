import{c as s,d as h,r as v,F as w,b as y,t as b,n as B,o as r}from"./iframe-C7dQR5FQ.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S={name:"Badge",props:{count:{type:Number},type:{type:String,default:"primary",validator:t=>["secondary","primary","positive","info","success","warning","error"].includes(t)},ghost:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},overflowCount:{type:Number},size:{type:String,default:"md",validator:t=>["sm","md"].includes(t)},showZero:{type:Boolean,default:!1},position:{type:Object,default:()=>({})},minLength:{type:Number,default:1}},computed:{hasSlot(){return!!this.$slots.default},isSingle(){return this.count&&this.count.toString().length===1},isOverflowCount(){return this.count>this.overflowCount},displayCount(){return this.minLength>1&&this.count>=1&&this.count<=9?this.count.toString().padStart(2,0):this.count},showBadge(){return this.count>0||this.showZero},style(){const t={};return Object.keys(this.position||{}).forEach(a=>{t[`--${a}-pos`]=typeof this.position[a]=="string"?this.position[a]:`${this.position[a]}px`}),t}}},z={key:0,class:"badge-content"},C={key:0},P={key:1};function k(t,a,e,V,Z,o){return r(),s("div",{class:y(["badge-design",`badge-design-${e.size}`]),style:B(o.style)},[o.hasSlot?(r(),s("div",z,[v(t.$slots,"default")])):h("",!0),o.showBadge?(r(),s(w,{key:1},[e.dot?(r(),s("sup",{key:1,class:y(["status-dot",`status-dot-${e.type}`])},null,2)):(r(),s("sup",{key:0,class:y(["badge",{"badge-border":e.ghost,"badge-ghost":e.ghost,"badge-single":o.isSingle&&e.size==="sm","badge-without-slot":!o.hasSlot},`badge-${e.size}`,`badge-${e.type}`])},[o.isOverflowCount?(r(),s("span",C,b(e.overflowCount)+"+",1)):(r(),s("span",P,b(o.displayCount),1))],2))],64)):h("",!0)],6)}const L=_(S,[["render",k]]);S.__docgenInfo={displayName:"Badge",exportName:"default",description:"",tags:{},props:[{name:"count",type:{name:"number"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"ghost",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dot",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"overflowCount",type:{name:"number"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"showZero",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"position",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"minLength",type:{name:"number"},defaultValue:{func:!1,value:"1"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/storecake_components/storecake_components/src/components/Badge.vue"]};const E={title:"Auto/Badge",component:L,tags:["autodocs"],argTypes:{count:{control:"number",description:"Property count of the Badge"},type:{control:"select",options:["secondary","primary","positive","info","success","warning","error"],description:"Type of the Badge"},ghost:{control:"boolean",description:"Ghost state of the Badge"},dot:{control:"boolean",description:"Property dot of the Badge"},overflowCount:{control:"number",description:"Property overflowCount of the Badge"},size:{control:"select",options:["sm","md"],description:"Size of the Badge"},showZero:{control:"boolean",description:"Property showZero of the Badge"},position:{control:"text",description:"Property position of the Badge"},minLength:{control:"number",description:"Property minLength of the Badge"}},args:{type:"primary",ghost:!1,dot:!1,size:"md",showZero:!1,minLength:1}},n={args:{count:1,type:"primary",ghost:!1,dot:!1,size:"md",showZero:!1,minLength:1}},c={args:{type:"secondary",count:1}},i={args:{type:"primary",count:1}},u={args:{type:"positive",count:1}},d={args:{type:"info",count:1}},l={args:{type:"success",count:1}},p={args:{type:"warning",count:1}},m={args:{type:"error",count:1}},g={args:{size:"sm",count:1}},f={args:{size:"md",count:1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "count": 1,
    "type": "primary",
    "ghost": false,
    "dot": false,
    "size": "md",
    "showZero": false,
    "minLength": 1
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'secondary',
    count: 1
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    count: 1
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'positive',
    count: 1
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    count: 1
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    count: 1
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    count: 1
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    count: 1
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    count: 1
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    count: 1
  }
}`,...f.parameters?.docs?.source}}};const O=["Default","Secondary","Primary","Positive","Info","Success","Warning","Error","Sm","Md"];export{n as Default,m as Error,d as Info,f as Md,u as Positive,i as Primary,c as Secondary,g as Sm,l as Success,p as Warning,O as __namedExportsOrder,E as default};
