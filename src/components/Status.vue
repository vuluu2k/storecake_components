<template>
  <div :class="['status-design', type]" :style="style">
    <div class="status-design-icon"></div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'success',
        validator: (value) => ['success', 'secondary', 'info', 'warning', 'error'].includes(value),
      },
      size: {
        type: [String, Number],
        default: 8,
      },
    },
    setup() {
      return {}
    },
    computed: {
      style() {
        const style = {}
        if (this.size) {
          style['--size'] = typeof this.size === 'string' ? this.size : `${this.size}px`
        }
        return style
      },
    },
  }
</script>
