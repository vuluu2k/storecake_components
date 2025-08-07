import{R as p}from"./Radio-5qmIY59j.js";import{d as r,w as s,m,r as l,o as n,h as i,c as y,F as f,I as g}from"./iframe-DC2Z_nKe.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useConfigInject-DzPqp462.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./initDefaultProps-BJRILGQV.js";import"./FormItemContext-DIgML5zg.js";import"./omit-OYhQXChT.js";const u={components:{Radio:p},props:{options:{type:Array,default:()=>[]},sKey:{type:String,default:"key"},sValue:{type:String,default:"value"},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)}},setup(){return{}}};function k(t,b,a,h,V,K){const d=l("Radio"),c=l("a-radio-group");return n(),r(c,m({class:["radio-group-design",a.direction]},t.$attrs),{default:s(()=>[i(t.$slots,"default",{},()=>[(n(!0),y(f,null,g(a.options,e=>(n(),r(d,{key:e[a.sKey],value:e[a.sKey],label:e?.label||e[a.sValue],"sub-label":e.subLabel,disabled:!!e.disabled},{default:s(()=>[i(t.$slots,"option",{key:e[a.sKey],value:e[a.sValue],option:e})]),_:2},1032,["value","label","sub-label","disabled"]))),128))])]),_:3},16,["class"])}const _=v(u,[["render",k]]);u.__docgenInfo={exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"sKey",type:{name:"string"},defaultValue:{func:!1,value:"'key'"}},{name:"sValue",type:{name:"string"},defaultValue:{func:!1,value:"'value'"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'horizontal'"}}],slots:[{name:"default"},{name:"option",scoped:!0,bindings:[{name:"key",title:"binding"},{name:"value",title:"binding"},{name:"option",title:"binding"}]}],sourceFiles:["/home/runner/work/storecake_components/storecake_components/src/components/RadioGroup.vue"]};const D={title:"Data Entry/RadioGroup",component:_,tags:["autodocs"],argTypes:{options:{control:"array",description:"Property options of the RadioGroup"},sKey:{control:"text",description:"Select a property of option is Key"},sValue:{control:"text",description:"Select a property of option is Value"},direction:{control:"select",options:["horizontal","vertical"],description:"Property direction of the RadioGroup"}},args:{sKey:"key",sValue:"value",direction:"horizontal"}},o={args:{options:[{key:"1",value:"Option 1"},{key:"2",value:"Option 2"},{key:"3",value:"Option 3"}],sKey:"key",sValue:"value",direction:"horizontal"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      key: '1',
      value: 'Option 1'
    }, {
      key: '2',
      value: 'Option 2'
    }, {
      key: '3',
      value: 'Option 3'
    }],
    sKey: 'key',
    sValue: 'value',
    direction: 'horizontal'
  }
}`,...o.parameters?.docs?.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,D as default};
