<template>
  <a-date-picker
    v-bind="$attrs"
    class="date-picker-design"
    dropdown-class-name="date-picker-dropdown-design"
    :value="value"
    @change="handleChange"
  >
    <template #suffixIcon>
      <slot name="suffixIcon">
        <PhCalendarBlank color="var(--color-icon-gray)" :size="16" />
      </slot>
    </template>
    <slot></slot>
  </a-date-picker>
</template>

<script>
  import { PhCalendarBlank } from '@phosphor-icons/vue'
  import { DatePicker as ADatePicker } from 'ant-design-vue'
  import 'ant-design-vue/lib/date-picker/style/css'

  export default {
    components: {
      ADatePicker,
    },
    props: {
      classes: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: '',
      },
    },
    emits: ['change', 'update:value'],
    setup() {
      return {
        PhCalendarBlank,
      }
    },
    methods: {
      handleChange(time, timeString) {
        this.$emit('change', { time, timeString })
      },
    },
  }
</script>
