<template>
  <div class="input-design" :class="$attrs.class">
    <label
      v-if="label"
      :class="['input-label-design', { 'input-label-design-error': isError, 'input-label-design-link': isLink }]"
    >
      <span>{{ label }}</span>
      <Tooltip :title="labelInfo">
        <PhInfo v-if="labelInfo" weight="fill" />
      </Tooltip>
    </label>
    <a-textarea
      v-bind="{ ...$attrs, class: undefined }"
      ref="input"
      :class="[
        'input-design-input',
        size,
        { 'input-design-input-error': isError, 'input-design-input-link': isLink, disabled },
        classes,
      ]"
      :value="value"
      :placeholder="placeholder"
      :allow-clear="false"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @keypress="handleKeyPress"
    ></a-textarea>
    <div v-if="message" :class="['input-message-design', { 'input-message-design-error': isError }]">
      <span class="input-message-icon">
        <PhInfo weight="fill" />
      </span>
      <span class="input-message-text">{{ message }}</span>
    </div>
  </div>
</template>

<script>
  import Tooltip from './Tooltip.vue'
  import { debounce } from 'lodash'
  import { PhInfo } from '@phosphor-icons/vue'
  import { Textarea as ATextarea } from 'ant-design-vue'
  export default {
    components: {
      PhInfo,
      Tooltip,
      ATextarea,
    },
    inheritAttrs: false,
    props: {
      value: {
        type: [String, Number],
        default: undefined,
      },
      classes: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: 'md',
        validator: (value) => {
          return ['sm', 'md', 'lg'].includes(value)
        },
      },
      label: {
        type: String,
        default: '',
      },
      labelInfo: {
        type: String,
        default: '',
      },
      questionInfo: {
        type: String,
        default: '',
      },
      isError: {
        type: Boolean,
        default: false,
      },
      isLink: {
        type: Boolean,
        default: false,
      },
      message: {
        type: [String, Boolean],
        default: '',
      },
      id: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      allowClear: {
        type: Boolean,
        default: false,
      },
      useDebounce: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['change', 'update:value', 'focus', 'blur', 'pressEnter', 'keypress'],
    setup() {
      return {}
    },
    methods: {
      handleChange(e) {
        const value = e.target.value
        this.$emit('update:value', value)

        if (this.useDebounce) {
          this.handleDebounceEmit(value, e)
        } else {
          this.$emit('change', value, e)
        }
      },
      handleFocus(e) {
        const value = e.target.value
        this.$emit('focus', value, e)
      },
      handleBlur(e) {
        const value = e.target.value
        this.$emit('blur', value, e)
      },
      focus() {
        this.$refs.input.focus()
      },
      blur() {
        this.$refs.input.blur()
      },
      handleClear() {
        this.$emit('update:value', '')
        this.$emit('change', '')
      },
      handleDebounceEmit: debounce(function (value, $event) {
        this.$emit('change', value, $event)
      }, 500),
      handleKeyPress(e) {
        this.$emit('keypress', e)
        const keyCode = e.keyCode || e.which
        const value = e.target.value
        if (keyCode === 13) {
          this.$emit('pressEnter', value, e)
        }
      },
    },
  }
</script>
