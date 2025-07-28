<script>
  import { PhSquare, PhCheck } from '@phosphor-icons/vue'

  export default {
    name: 'Checkbox',
    components: {
      PhSquare,
      PhCheck,
    },
    inject: {
      checkboxGroupEvent: {
        default: undefined,
      },
      checkboxGroupValue: {
        default: undefined,
      },
    },
    props: {
      value: {
        type: [String, Number],
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
      subLabel: {
        type: String,
        default: '',
      },
      checked: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      indeterminate: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        default: 'md',
        validator: (value) => {
          return ['sm', 'md', 'lg'].includes(value)
        },
      },
    },
    emits: ['change', 'update:checked'],
    computed: {
      isChecked() {
        if (this.checked) return this.checked

        const groupValue = Array.isArray(this.checkboxGroupValue)
          ? this.checkboxGroupValue
          : this.checkboxGroupValue?.value
        return (groupValue || [])?.includes(this.value)
      },
    },
    methods: {
      handleChange() {
        if (this.checkboxGroupEvent?.onChange) {
          this.checkboxGroupEvent.onChange(!this.isChecked, this.value)
        }

        this.$emit('change', !this.isChecked)
        this.$emit('update:checked', !this.isChecked)
      },
    },
  }
</script>

<template>
  <div class="checkbox-component" :class="{ 'pointer-events-none': disabled }" @click.stop="handleChange">
    <div
      class="checkbox-design ant-checked-input"
      :class="{
        'checkbox-design-checked': isChecked,
        'checkbox-design-indeterminate': indeterminate,
        disabled: disabled,
      }"
    >
      <PhSquare v-if="indeterminate" weight="fill" />
      <PhCheck v-else-if="isChecked" weight="bold" />
    </div>
    <div class="label">
      <slot>
        <div v-if="label" class="checkbox-label">
          {{ label }}
        </div>
        <div v-if="subLabel" class="checkbox-sub-label">
          {{ subLabel }}
        </div>
      </slot>
    </div>
  </div>
</template>
