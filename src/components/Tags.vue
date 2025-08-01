<script>
  import { PhX } from '@phosphor-icons/vue'

  export default {
    name: 'Tags',
    components: {
      PhX,
    },
    props: {
      size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].includes(value),
      },
      type: {
        type: String,
        default: 'primary',
        validator: (value) => ['secondary', 'primary', 'info', 'success', 'warning', 'error'].includes(value),
      },
      bordered: {
        type: Boolean,
        default: false,
      },
      closable: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['close'],
    methods: {
      handleClose(e) {
        e.preventDefault()
        this.$emit('close', e)
      },
    },
  }
</script>

<template>
  <div :class="['tag', `tag-${size}`, `tag-${type}`, { 'tag-bordered': bordered }]">
    <span v-if="$slots.icon" class="tag-icon">
      <slot name="icon"></slot>
    </span>

    <span class="tag-label">
      <slot></slot>
    </span>

    <span v-if="closable" class="tag-close" @click.stop="handleClose">
      <span class="close-icon">
        <PhX :size="14" />
      </span>
    </span>
  </div>
</template>
