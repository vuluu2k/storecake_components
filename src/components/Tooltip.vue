<template>
  <a-tooltip
    class="tooltip-design"
    :title="title"
    :visible="visible"
    overlay-class-name="tooltip-design-overlay"
    v-bind="$attrs"
    @visible-change="handleVisibleChange"
  >
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
    props: {
      title: {
        type: String,
        default: '',
      },
      visible: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:visible'],
    setup(props, { emit }) {
      return {
        emit,
      }
    },
    watch: {
      visible(newVisible) {
        this.$emit('update:visible', newVisible)
      },
    },
    methods: {
      handleVisibleChange(visible) {
        this.emit('update:visible', visible)
      },
    },
  }
</script>
