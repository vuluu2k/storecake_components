<template>
  <div :class="['input-design', $attrs.class, size]">
    <label
      v-if="label"
      :class="['input-label-design', { 'input-label-design-error': isError, 'input-label-design-link': isLink }]"
    >
      <span>{{ label }}</span>
      <span v-if="require" class="input-design-require-icon">*</span>
      <a-tooltip :title="labelInfo">
        <PhInfo v-if="labelInfo" weight="fill" />
      </a-tooltip>
    </label>
    <a-input
      v-if="!isTextArea"
      v-bind="{ ...$attrs, class: undefined }"
      ref="input"
      :class="[
        'input-design-input',
        {
          'input-design-input-error': isError,
          'input-design-input-link': isLink,
          disabled,
          'input-design-input-without-controls': !controls,
        },
        classes,
      ]"
      :value="value"
      :placeholder="placeholder"
      :allow-clear="false"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @keypress="handleKeyPress"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix"></slot>
      </template>
      <template v-if="$slots.suffix || questionInfo || allowClear" #suffix>
        <template v-if="allowClear">
          <div class="w-4 h-4">
            <PhXCircle
              v-if="!!value"
              class="cursor-pointer"
              weight="fill"
              color="var(--color-icon-light-gray)"
              @click.stop="handleClear"
            />
          </div>
        </template>
        <template v-if="(allowClear && !value) || !allowClear">
          <slot name="suffix">
            <a-tooltip :title="questionInfo">
              <PhQuestion v-if="questionInfo" weight="fill" />
            </a-tooltip>
          </slot>
        </template>
      </template>
    </a-input>
    <a-textarea
      v-else
      :value="value"
      :placeholder="placeholder"
      :allow-clear="false"
      :rows="rows"
      v-bind="$attrs"
      @change="handleChange"
    />

    <div v-if="message" :class="['input-message-design', { 'input-message-design-error': isError }]">
      <span class="input-message-icon">
        <PhInfo weight="fill" />
      </span>
      <span class="input-message-text">{{ message }}</span>
    </div>
  </div>
</template>

<script>
  import { debounce } from 'lodash'
  import { PhInfo, PhQuestion, PhXCircle } from '@phosphor-icons/vue'

  export default {
    components: {
      PhInfo,
      PhQuestion,
      PhXCircle,
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
          return ['xs', 'sm', 'md', 'lg'].includes(value)
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
      isTextArea: {
        type: Boolean,
        defautl: false,
      },
      rows: {
        type: [String, Number],
        default: 2,
      },
      useDebounce: {
        type: Boolean,
        default: false,
      },
      require: {
        type: Boolean,
        default: false,
      },
      isNumber: {
        type: Boolean,
        default: false,
      },
      controls: {
        type: Boolean,
        default: true,
      },
    },
    emits: ['change', 'update:value', 'focus', 'blur', 'pressEnter', 'keypress'],
    setup() {
      return {}
    },
    methods: {
      handleChange(e) {
        const value = this.isNumber ? this.formatNumber(e.target.value) : e.target.value

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
      formatNumber(input) {
        const match = input.match(/^\d+/)
        return match ? parseInt(match[0], 10) : 0
      },
    },
  }
</script>
