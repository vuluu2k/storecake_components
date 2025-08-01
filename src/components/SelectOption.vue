<template>
  <a-select-option v-bind="$attrs" :key="key" :value="key" :label="label || value" :title="title || value">
    <slot name="default">
      <span>{{ label || value }}</span>
    </slot>
  </a-select-option>
</template>

<script>
  export default {
    props: {
      key: {
        type: [String, Number],
        default: undefined,
      },
      value: {
        type: [String, Number],
        default: undefined,
      },
      label: {
        type: [String, Number],
        default: undefined,
      },
      title: {
        type: [String, Number],
        default: undefined,
      },
    },
    setup() {
      return {}
    },
  }
</script>
