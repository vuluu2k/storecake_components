<template>
  <a-range-picker v-bind="$attrs" :class="['range-picker-design']" dropdown-class-name="range-picker-dropdown-design">
    <template #suffixIcon>
      <slot name="suffixIcon">
        <PhCalendarBlank color="var(--color-icon-gray)" :size="16" />
      </slot>
    </template>
    <template #separator>
      <slot name="separator">
        <PhArrowRight color="var(--color-icon-light-gray)" :size="16" />
      </slot>
    </template>
    <slot></slot>
  </a-range-picker>
</template>

<script>
  import { PhCalendarBlank, PhArrowRight } from '@phosphor-icons/vue'
  import { RangePicker as ARangePicker } from 'ant-design-vue'

  export default {
    components: {
      PhCalendarBlank,
      PhArrowRight,
      ARangePicker,
    },
  }
</script>
