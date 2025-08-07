import{B as T}from"./Button-ChYAoSZp.js";import{H as P}from"./PhInfo.vue-CgiwtN3R.js";import{F as S}from"./PhX.vue-BMjs3dqK.js";import{d as B,w as g,m as w,r as n,o as f,h as o,e as r,f as s,c as y,b as h,H as k,t as _,i as v}from"./iframe-DC2Z_nKe.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{M as L}from"./index-BGy6sCfU.js";import"./useConfigInject-DzPqp462.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Portal-DtQyjFmE.js";import"./KeyCode-BcWn9RBx.js";import"./omit-OYhQXChT.js";import"./pickAttrs-1B690yOT.js";import"./initDefaultProps-BJRILGQV.js";import"./classCallCheck-D3O5_Fa5.js";import"./raf-nDFcuFT6.js";import"./index-C4PysTJe.js";import"./wave-CCvPR0zi.js";const C={components:{Button:T,PhX:S,PhInfo:P,AModal:L},props:{title:{type:String},content:{type:String},visible:{type:Boolean,default:!1},type:{type:String,default:"primary",validator:e=>["primary","warning","info","error","danger"].includes(e)},danger:{type:Boolean,default:!1},okText:{type:String,default:""},cancelText:{type:String,default:""},confirmLoading:{type:Boolean,default:!1}},emits:["update:visible","cancel","ok"],setup(){return{}},computed:{titleMark(){return this.title?this.title:"Title Modal Confirm"},contentMark(){return this.content?this.content:"Content Modal Confirm"}},methods:{onCancel(){this.$emit("update:visible",!1),this.$emit("cancel")},onOk(){this.$emit("ok")}}},I={class:"flex gap-4"},D={class:"modal-confirm-icon"},N={class:"flex flex-col gap-1"},E={key:0,class:"modal-confirm-title"},O={key:1,class:"modal-confirm-content"},F={class:"flex justify-end gap-2 mt-4"};function X(e,W,t,j,z,a){const x=n("PhX"),b=n("PhInfo"),u=n("Button"),M=n("a-modal");return f(),B(M,w({class:["modal-confirm-design",t.type,{danger:t.danger}],visible:t.visible},e.$attrs,{footer:!1,"z-index":1010,onCancel:a.onCancel}),{closeIcon:g(()=>[s(x)]),default:g(()=>[o(e.$slots,"default",{},()=>[r("div",I,[r("div",D,[o(e.$slots,"icon",{},()=>[s(b,{weight:"fill"})])]),r("div",N,[a.titleMark?(f(),y("div",E,[o(e.$slots,"title",{},()=>[k(_(a.titleMark),1)])])):h("",!0),a.contentMark?(f(),y("div",O,[o(e.$slots,"content",{},()=>[k(_(a.contentMark),1)])])):h("",!0)])])]),o(e.$slots,"action",{},()=>[r("div",F,[s(u,{label:t.cancelText||"Cancel",type:"secondary",onClick:v(a.onCancel,["stop"])},null,8,["label","onClick"]),s(u,{label:t.okText||"OK",type:t.type,danger:t.danger,loading:t.confirmLoading,onClick:v(a.onOk,["stop"])},null,8,["label","type","danger","loading","onClick"])])])]),_:3},16,["class","visible","onCancel"])}const H=V(C,[["render",X]]);C.__docgenInfo={exportName:"default",displayName:"ModalConfirm",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"visible",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","warning","info","error","danger"]},{name:"danger",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"okText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"cancelText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"confirmLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:visible",type:{names:["undefined"]}},{name:"cancel"},{name:"ok"}],slots:[{name:"default"},{name:"icon"},{name:"title"},{name:"content"},{name:"action"}],sourceFiles:["/home/runner/work/storecake_components/storecake_components/src/components/ModalConfirm.vue"]};const se={title:"Feedback/ModalConfirm",component:H,tags:["autodocs"],argTypes:{title:{control:"text",description:"Property title of the ModalConfirm"},content:{control:"text",description:"Property content of the ModalConfirm"},visible:{control:"boolean",description:"Property visible of the ModalConfirm"},type:{control:"select",options:["primary","warning","info","error","danger"],description:"Type of the ModalConfirm"},danger:{control:"boolean",description:"Danger state of the ModalConfirm"},okText:{control:"text",description:"Property okText of the ModalConfirm"},cancelText:{control:"text",description:"Property cancelText of the ModalConfirm"},confirmLoading:{control:"boolean",description:"Property confirmLoading of the ModalConfirm"}},args:{visible:!1,type:"primary",danger:!1,okText:"",cancelText:"",confirmLoading:!1}},i={args:{visible:!1,type:"primary",danger:!1,okText:"",cancelText:"",confirmLoading:!1}},l={args:{type:"primary"}},c={args:{type:"warning"}},m={args:{type:"info"}},d={args:{type:"error"}},p={args:{type:"danger"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false,
    type: 'primary',
    danger: false,
    okText: '',
    cancelText: '',
    confirmLoading: false
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'danger'
  }
}`,...p.parameters?.docs?.source}}};const ie=["Default","Primary","Warning","Info","Error","Danger"];export{p as Danger,i as Default,d as Error,m as Info,l as Primary,c as Warning,ie as __namedExportsOrder,se as default};
