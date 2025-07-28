import{d as P,c as i,a as o,r as C,b as l,e as n,m as D,i as u,o as t,f as G,w as x,n as E,g as N,h as I,j as L,t as $}from"./iframe-B_lQac_V.js";import{_ as j,B as T}from"./_plugin-vue_export-helper-DbGDGKwE.js";import"./_commonjsHelpers-Cpj98o6Y.js";const W=["width","height","fill","transform"],F={key:0},q=n("path",{d:"M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z"},null,-1),O=[q],H={key:1},J=n("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"},null,-1),K=n("path",{d:"M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"},null,-1),Q=[J,K],R={key:2},U=n("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,176A72,72,0,0,1,92,65.64a8,8,0,0,1,8,13.85,56,56,0,1,0,56,0,8,8,0,0,1,8-13.85A72,72,0,0,1,128,200Z"},null,-1),X=[U],Y={key:3},ee=n("path",{d:"M230,128a102,102,0,0,1-204,0c0-40.18,23.35-76.86,59.5-93.45a6,6,0,0,1,5,10.9C58.61,60.09,38,92.49,38,128a90,90,0,0,0,180,0c0-35.51-20.61-67.91-52.5-82.55a6,6,0,0,1,5-10.9C206.65,51.14,230,87.82,230,128Z"},null,-1),ae=[ee],te={key:4},oe=n("path",{d:"M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"},null,-1),se=[oe],ne={key:5},re=n("path",{d:"M228,128a100,100,0,0,1-200,0c0-39.4,22.9-75.37,58.33-91.63a4,4,0,1,1,3.34,7.27C57.07,58.6,36,91.71,36,128a92,92,0,0,0,184,0c0-36.29-21.07-69.4-53.67-84.36a4,4,0,1,1,3.34-7.27C205.1,52.63,228,88.6,228,128Z"},null,-1),le=[re],ce={name:"PhCircleNotch"},ie=P({...ce,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const r=e,a=u("weight","regular"),w=u("size","1em"),_=u("color","currentColor"),z=u("mirrored",!1),s=i(()=>r.weight??a),c=i(()=>r.size??w),A=i(()=>r.color??_),Z=i(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:z?"scale(-1, 1)":void 0);return(V,ye)=>(t(),o("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:c.value,height:c.value,fill:A.value,transform:Z.value},V.$attrs),[C(V.$slots,"default"),s.value==="bold"?(t(),o("g",F,O)):s.value==="duotone"?(t(),o("g",H,Q)):s.value==="fill"?(t(),o("g",R,X)):s.value==="light"?(t(),o("g",Y,ae)):s.value==="regular"?(t(),o("g",te,se)):s.value==="thin"?(t(),o("g",ne,le)):l("",!0)],16,W))}}),M={components:{AButton:T,PhCircleNotch:ie},props:{label:{type:String,default:""},loading:{type:Boolean,default:!1},type:{type:String,default:"primary",validator:e=>["primary","secondary","gray","info","warning","black","gold","error","danger"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},danger:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},classes:{type:String,default:""}},setup(){return{}}},ue={key:0,class:"button-design-icon"},de={key:1,class:"button-design-loading"},ge={class:"button-design-loading-icon"},me={key:2,class:"button-design-icon"};function pe(e,r,a,w,_,z){const s=N("PhCircleNotch"),c=N("a-button");return t(),G(c,{class:E(["button-design",a.type,a.size,a.classes,{danger:a.danger,disabled:a.disabled,loading:a.loading,ghost:a.ghost,"only-icon":!e.$slots.default&&!a.label&&(e.$slots.icon||e.$slots.suffix),"has-icon":(e.$slots.icon||e.$slots.suffix)&&(e.$slots.default||a.label)&&!a.loading,"has-loading-with-icon":e.$slots.icon&&a.loading}])},{default:x(()=>[e.$slots.icon&&!a.loading?(t(),o("span",ue,[a.loading?l("",!0):C(e.$slots,"icon",{key:0})])):l("",!0),a.loading?(t(),o("span",de,[n("span",ge,[I(s)])])):l("",!0),C(e.$slots,"default",{},()=>[L($(a.label),1)]),e.$slots.suffix&&!a.loading?(t(),o("span",me,[C(e.$slots,"suffix")])):l("",!0)]),_:3},8,["class"])}const fe=j(M,[["render",pe]]);M.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"danger",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ghost",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"icon"},{name:"default"},{name:"suffix"}],sourceFiles:["/home/runner/work/storecake_components/storecake_components/src/components/Button.vue"]};const ve={title:"Auto/Button",component:fe,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label of the Button"},loading:{control:"boolean",description:"Loading state of the Button"},type:{control:"select",options:["primary","secondary","gray","info","warning","black","gold","error","danger"],description:"Type of the Button"},size:{control:"select",options:["sm","md","lg"],description:"Size of the Button"},danger:{control:"boolean",description:"Danger state of the Button"},ghost:{control:"boolean",description:"Ghost state of the Button"},disabled:{control:"boolean",description:"Disabled state of the Button"},classes:{control:"text",description:"Classes of the Button"}},args:{label:"",loading:!1,type:"primary",size:"md",danger:!1,ghost:!1,disabled:!1,classes:""}},d={args:{type:"primary",label:"Button"}},g={args:{type:"secondary",label:"Button"}},m={args:{type:"gray",label:"Button"}},p={args:{type:"info",label:"Button"}},f={args:{type:"warning",label:"Button"}},y={args:{type:"black",label:"Button"}},b={args:{type:"gold",label:"Button"}},h={args:{type:"error",label:"Button"}},B={args:{type:"danger",label:"Button"}},v={args:{label:"Button",size:"sm"}},S={args:{label:"Button",size:"md"}},k={args:{label:"Button",size:"lg"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    label: 'Button'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'secondary',
    label: 'Button'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'gray',
    label: 'Button'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    label: 'Button'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    label: 'Button'
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'black',
    label: 'Button'
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'gold',
    label: 'Button'
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    label: 'Button'
  }
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'danger',
    label: 'Button'
  }
}`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'sm'
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'md'
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'lg'
  }
}`,...k.parameters?.docs?.source}}};const Se=["Primary","Secondary","Gray","Info","Warning","Black","Gold","Error","Danger","Sm","Md","Lg"];export{y as Black,B as Danger,h as Error,b as Gold,m as Gray,p as Info,k as Lg,S as Md,d as Primary,g as Secondary,v as Sm,f as Warning,Se as __namedExportsOrder,ve as default};
