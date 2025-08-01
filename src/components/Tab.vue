<template>
  <a-tab-pane v-bind="$attrs">
    <slot></slot>
  </a-tab-pane>
</template>

<script>
  import { TabPane as ATabPane } from 'ant-design-vue'

  export default {
    components: {
      ATabPane,
    },
  }
</script>
