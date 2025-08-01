<template>
  <div :class="['message-alert-design', type]">
    <div class="message-alert-design-icon">
      <slot name="icon">
        <component :is="icon" weight="fill" />
      </slot>
    </div>
    <div class="message-alert-design-content">{{ message }}</div>
  </div>
</template>

<script>
  import { PhCheckCircle, PhXCircle, PhWarning, PhInfo } from '@phosphor-icons/vue'

  export default {
    components: {
      PhCheckCircle,
      PhXCircle,
      PhWarning,
      PhInfo,
    },
    props: {
      type: {
        type: String,
        default: 'success',
        validator: (value) => {
          return ['success', 'error', 'warning', 'info'].includes(value)
        },
      },
      message: {
        type: String,
        required: true,
      },
    },
    computed: {
      icon() {
        switch (this.type) {
          case 'success':
            return 'PhCheckCircle'
          case 'error':
            return 'PhXCircle'
          case 'warning':
            return 'PhWarning'
          case 'info':
            return 'PhInfo'
        }

        return ''
      },
    },
  }
</script>
