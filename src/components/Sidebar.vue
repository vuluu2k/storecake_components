<template>
  <div :class="['sidebar-design', { 'has-label': !!label, 'is-default': isDefault }]">
    <div v-if="!!label">{{ label }}</div>
    <div
      v-for="(option, idx) in options"
      :key="idx"
      :class="['sidebar-design-item', { 'sidebar-design-item-active': value === option.key }]"
      @click.stop="handleChange($event, option)"
    >
      <component :is="option.icon" v-if="option.icon" />
      <span>{{ option.value }}</span>
    </div>
  </div>
</template>

<script>
  import {
    PhUserCircle,
    PhClockCountdown,
    PhHandCoins,
    PhSlidersHorizontal,
    PhArrowsCounterClockwise,
    PhTruck,
    PhReceipt,
    PhCardholder,
    PhCurrencyCircleDollar,
    PhUsersThree,
    PhStackSimple,
    PhGear,
    PhShoppingBag,
    PhTextIndent,
    PhCodeBlock,
    PhKey,
  } from '@phosphor-icons/vue'

  export default {
    components: {
      PhUserCircle,
      PhClockCountdown,
      PhHandCoins,
      PhSlidersHorizontal,
      PhArrowsCounterClockwise,
      PhTruck,
      PhReceipt,
      PhCardholder,
      PhCurrencyCircleDollar,
      PhUsersThree,
      PhStackSimple,
      PhGear,
      PhShoppingBag,
      PhTextIndent,
      PhCodeBlock,
      PhKey,
    },
    props: {
      value: {
        type: [String, Number],
        default: undefined,
      },
      options: {
        type: Array,
        default: () => [],
      },
      label: {
        type: String,
        default: undefined,
      },
      isDefault: {
        type: Boolean,
        default: true,
      },
    },
    emits: ['change', 'update:value'],
    methods: {
      handleChange($event, option) {
        this.$emit('change', option.key, option, $event)
        this.$emit('update:value', option.key)
      },
    },
  }
</script>
