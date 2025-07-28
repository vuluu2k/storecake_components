<template>
  <a-button
    :class="[
      'button-design',
      type,
      size,
      classes,
      {
        danger: danger,
        disabled: disabled,
        loading: loading,
        ghost: ghost,
        'only-icon': !$slots.default && !label && ($slots.icon || $slots.suffix),
        'has-icon': ($slots.icon || $slots.suffix) && ($slots.default || label) && !loading,
        'has-loading-with-icon': $slots.icon && loading,
      },
    ]"
  >
    <span v-if="$slots.icon && !loading" class="button-design-icon">
      <slot v-if="!loading" name="icon"></slot>
    </span>
    <span v-if="loading" class="button-design-loading">
      <span class="button-design-loading-icon">
        <PhCircleNotch />
      </span>
    </span>
    <slot>
      {{ label }}
    </slot>
    <span v-if="$slots.suffix && !loading" class="button-design-icon">
      <slot name="suffix"></slot>
    </span>
  </a-button>
</template>

<script>
  import { Button as AButton } from 'ant-design-vue'
  import { PhCircleNotch } from '@phosphor-icons/vue'
  import 'ant-design-vue/lib/button/style/css'
  import '@/assets/styles/button_design.scss'

  export default {
    components: {
      AButton,
      PhCircleNotch,
    },
    props: {
      label: {
        type: String,
        default: '',
      },
      loading: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'primary',
        // error same as danger or danger props equals true
        validator: (value) => {
          return ['primary', 'secondary', 'gray', 'info', 'warning', 'black', 'gold', 'error', 'danger'].includes(value)
        },
      },
      size: {
        type: String,
        default: 'md',
        validator: (value) => {
          return ['sm', 'md', 'lg'].includes(value)
        },
      },
      danger: {
        type: Boolean,
        default: false,
      },
      ghost: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      classes: {
        type: String,
        default: '',
      },
    },
    setup() {
      return {}
    },
  }
</script>
