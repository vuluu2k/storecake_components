<template>
  <a-input-number
    :value="value"
    :formatter="formatCurrency"
    :parser="parseLocaleNumber"
    string-mode
    :class="['input-money-design', size, classes]"
    :controls="false"
    v-bind="$attrs"
    @change="handleChange"
  >
    <template #addonAfter>
      <slot name="addonAfter">
        {{ currency }}
      </slot>
    </template>
  </a-input-number>
</template>

<script>
  import debounce from 'lodash/debounce'
  import { currencyFormats } from '@/utils/currency'
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
          // The value must match one of these strings
          return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
        },
      },
      suffix: {
        type: String,
        default: '',
      },
      currency: {
        type: String,
        default: 'VND',
      },
      classes: {
        type: String,
        default: '',
      },
      useDebounce: {
        type: Boolean,
        default: false,
      },
      require: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['change', 'update:value', 'focus', 'blur', 'keypress', 'pressEnter'],
    setup() {
      return {}
    },
    methods: {
      handleChange(value, e) {
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
      formatCurrency(value) {
        if (value === null || value === undefined) return ''
        const locale = currencyFormats[this.currency]
        return new Intl.NumberFormat(locale, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 10,
        }).format(value)
      },
      parseLocaleNumber(stringNumber) {
        const locale = currencyFormats[this.currency]

        const thousandSeparator = Intl.NumberFormat(locale)
          .format(11111)
          .replace(/\p{Number}/gu, '')
        const decimalSeparator = Intl.NumberFormat(locale)
          .format(1.1)
          .replace(/\p{Number}/gu, '')

        return parseFloat(
          stringNumber
            .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
            .replace(new RegExp('\\' + decimalSeparator), '.')
        )
      },
    },
  }
</script>

<style lang="scss" scoped></style>
