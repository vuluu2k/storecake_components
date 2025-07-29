<template>
  <a-tooltip class="tooltip-design" overlay-class-name="tooltip-design-overlay" v-bind="$attrs">
    <slot></slot>
  </a-tooltip>
</template>

<script>
  import { Tooltip as ATooltip } from 'ant-design-vue'
  import 'ant-design-vue/lib/tooltip/style/css'

  export default {
    components: {
      ATooltip,
    },
  }
</script>
