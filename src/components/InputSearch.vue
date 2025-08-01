<template>
  <Input
    v-bind="$attrs"
    :value="value"
    :placeholder="placeholder"
    allow-clear
    @press-enter="handlePressEnter"
    @change="handleChange"
    @blur="handleBlur"
    @focus="handleFocus"
  >
    <template #prefix>
      <PhMagnifyingGlass />
    </template>
  </Input>
</template>

<script>
  import Input from './Input.vue'
  import debounce from 'lodash/debounce'
  import { PhMagnifyingGlass } from '@phosphor-icons/vue'

  export default {
    components: {
      Input,
      PhMagnifyingGlass,
    },
    props: {
      value: {
        type: [String, Number],
        default: '',
      },
      useDebounce: {
        type: Boolean,
        default: false,
      },
      placeholder: {
        type: String,
        default: '',
      },
    },
    emits: ['change', 'update:value', 'pressEnter', 'blur', 'focus'],
    setup() {
      return {}
    },
    methods: {
      handleChange(value, $event) {
        this.$emit('update:value', value)
        if (this.useDebounce) {
          this.handleDebounceEmit(value, $event)
        } else {
          this.$emit('change', value, $event)
        }
      },
      handleDebounceEmit: debounce(function (value, $event) {
        this.$emit('change', value, $event)
      }, 500),
      handlePressEnter(value, $event) {
        this.$emit('pressEnter', value, $event)
      },
      handleBlur(value, $event) {
        this.$emit('blur', value, $event)
      },
      handleFocus(value, $event) {
        this.$emit('focus', value, $event)
      },
    },
  }
</script>
