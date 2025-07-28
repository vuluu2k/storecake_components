<template>
  <div :class="['divider-design', direction]" :style="style"></div>
</template>

<script>
  export default {
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator: (value) => ['horizontal', 'vertical'].includes(value),
      },
      height: {
        type: Number,
      },
      width: {
        type: Number,
      },
      space: {
        type: Number,
      },
    },
    setup() {
      return {}
    },
    computed: {
      style() {
        const style = {}

        if (this.height) style['--height'] = `${this.height}px`
        if (this.width) style['--width'] = `${this.width}px`
        if (typeof this.space != 'undefined') style['--space'] = `${this.space}px`

        return style
      },
    },
  }
</script>
