<template>
  <a-progress v-bind="{ ...colorProperty, ...$attrs }"></a-progress>
</template>

<script>
  import { Progress as AProgress } from 'ant-design-vue'

  export default {
    components: {
      AProgress,
    },
    props: {
      type: {
        type: String,
        default: undefined,
        validator: (value) => ['primary'].includes(value),
      },
    },
    computed: {
      colorProperty() {
        if (!this.type) return {}

        switch (this.type) {
          case 'primary':
            return {
              strokeColor: 'var(--color-primary)',
              trailColor: 'var(--color-bg-disabled)',
            }
          default:
            return {}
        }
      },
    },
  }
</script>
