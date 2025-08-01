<template>
  <a-radio :class="['radio-design', { 'has-label': !!label, disabled }]" v-bind="$attrs">
    <slot>
      <div class="radio-design-text">
        <div v-if="label" class="radio-design-label">{{ label }}</div>
        <div v-if="subLabel" class="radio-design-sub-label">{{ subLabel }}</div>
        <slot name="more"></slot>
      </div>
    </slot>
  </a-radio>
</template>

<script>
  import { Radio as ARadio } from 'ant-design-vue'

  export default {
    components: {
      ARadio,
    },
    props: {
      label: {
        type: String,
        default: undefined,
      },
      subLabel: {
        type: String,
        default: undefined,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      return {}
    },
  }
</script>
