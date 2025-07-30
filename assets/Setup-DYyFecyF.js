import{j as n,M as l}from"./blocks-CtwL0nDI.js";import{useMDXComponents as t}from"./index-LR59nDSp.js";import"./iframe-BrVWarIt.js";import"./_commonjsHelpers-Cpj98o6Y.js";function o(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Setup"}),`
`,n.jsx(e.h1,{id:"storecake-components",children:"Storecake Components"}),`
`,n.jsx(e.h2,{id:"install-library",children:"Install library"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install storecake_components
`})}),`
`,n.jsx(e.p,{children:"or"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add storecake_components
`})}),`
`,n.jsx(e.h2,{id:"how-to-use",children:"How to use"}),`
`,n.jsx(e.h3,{id:"in-file-maints",children:"in file main.ts"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import 'storecake_components/dist/storecake_components.css'
`})}),`
`,n.jsx(e.h3,{id:"in-file-appvue",children:"in file App.vue"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<script setup lang="ts">
  import { ref } from "vue";
  import {
    Switch,
    Button,
    Tooltip
  } from "storecake_components";

  const checked = ref<boolean>(false);
<\/script>

<template>
  <Switch v-model:value="checked" />
</template>
`})}),`
`,n.jsx(e.p,{children:"you can install it same as plugin in main.ts"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import StorecakeComponents from "storecake_components";

app.use(StorecakeComponents);
`})}),`
`,n.jsx(e.p,{children:"or install some components of it"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { Switch } from "storecake_components";

app.use(Switch);
`})}),`
`,n.jsx(e.h2,{id:"contact",children:"Contact"}),`
`,n.jsx(e.p,{children:"Lưu Công Quang Vũ From Vietnamese"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Email: vuluu040320@gmail.com"}),`
`,n.jsx(e.li,{children:"Number Phone: +84898709170"}),`
`,n.jsxs(e.li,{children:["LinkTree: ",n.jsx(e.a,{href:"https://linktr.ee/vuluu2k",rel:"nofollow",children:"vuluu2k"})]}),`
`,n.jsxs(e.li,{children:["LinkedIn: ",n.jsx(e.a,{href:"https://linkedin.com/in/vuluu2k",rel:"nofollow",children:"vuluu2k"})]}),`
`]})]})}function h(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{h as default};
