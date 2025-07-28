<template>
  <div :class="['badge-design', `badge-design-${size}`]" :style="style">
    <div v-if="hasSlot" class="badge-content">
      <slot></slot>
    </div>

    <template v-if="showBadge">
      <sup
        v-if="!dot"
        :class="[
          'badge',
          {
            'badge-border': ghost,
            'badge-ghost': ghost,
            'badge-single': isSingle && size === 'sm',
            'badge-without-slot': !hasSlot,
          },
          `badge-${size}`,
          `badge-${type}`,
        ]"
      >
        <span v-if="isOverflowCount">{{ overflowCount }}+</span>
        <span v-else>{{ displayCount }}</span>
      </sup>
      <sup v-else class="status-dot" :class="`status-dot-${type}`"></sup>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Badge',
    props: {
      count: {
        type: Number,
      },
      type: {
        type: String,
        default: 'primary',
        validator: (value) => {
          return ['secondary', 'primary', 'positive', 'info', 'success', 'warning', 'error'].includes(value)
        },
      },
      ghost: {
        type: Boolean,
        default: false,
      },
      dot: {
        type: Boolean,
        default: false,
      },
      overflowCount: {
        type: Number,
        // default: 99,
      },
      size: {
        type: String,
        default: 'md',
        validator: (value) => {
          return ['sm', 'md'].includes(value)
        },
      },
      showZero: {
        type: Boolean,
        default: false,
      },
      // top, right, left, bottom property change position badge
      position: {
        type: Object,
        default: () => ({}),
      },
      minLength: {
        type: Number,
        default: 1,
      },
    },
    computed: {
      hasSlot() {
        return !!this.$slots.default
      },
      isSingle() {
        return this.count && this.count.toString().length === 1
      },
      isOverflowCount() {
        return this.count > this.overflowCount
      },
      displayCount() {
        if (this.minLength > 1) {
          if (this.count >= 1 && this.count <= 9) {
            return this.count.toString().padStart(2, 0)
          }
        }
        return this.count
      },
      showBadge() {
        return this.count > 0 || this.showZero
      },
      style() {
        const style = {}
        Object.keys(this.position || {}).forEach((key) => {
          style[`--${key}-pos`] = typeof this.position[key] == 'string' ? this.position[key] : `${this.position[key]}px`
        })
        return style
      },
    },
  }
</script>