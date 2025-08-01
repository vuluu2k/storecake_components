<template>
  <a-input-number
    :value="value"
    string-mode
    :class="['input-weight-design', size, classes]"
    :controls="false"
    v-bind="$attrs"
    keyboard
    @change="handleChange"
  >
    <template #addonAfter>
      <slot name="addonAfter">g</slot>
    </template>
  </a-input-number>
</template>

<script>
  import { InputNumber as AInputNumber } from 'ant-design-vue'
  import 'ant-design-vue/lib/input-number/style/css'

  export default {
    components: {
      AInputNumber,
    },
    props: {
      value: {
        type: [String, Number],
        default: 0,
      },
      size: {
        type: String,
        default: 'md',
        validator: (value) => {
          return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
        },
      },
      classes: {
        type: String,
        default: '',
      },
    },
    emits: ['change', 'update:value'],
    methods: {
      handleChange(value, $event) {
        this.$emit('update:value', value)
        this.$emit('change', value, $event)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
