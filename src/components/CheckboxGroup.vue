<script>
  import Checkbox from './Checkbox.vue'
  import cloneDeep from 'lodash/cloneDeep'
  import { computed } from 'vue'
  export default {
    name: 'CheckboxGroup',
    components: {
      Checkbox,
    },
    provide() {
      return {
        checkboxGroupEvent: {
          name: 'CheckboxGroup',
          onChange: this.handleCheckboxChange,
        },
        checkboxGroupValue: computed(() => this.value),
      }
    },
    props: {
      value: {
        type: Array,
        default: () => [],
      },
      options: {
        type: Array,
        default: () => [],
      },
      sKey: {
        type: String,
        default: 'key',
      },
      sValue: {
        type: String,
        default: 'value',
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator: (value) => ['horizontal', 'vertical'].includes(value),
      },
      useAll: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:value', 'change'],
    computed: {
      selectedCount() {
        return this.value.length
      },
      isAllSelected() {
        return this.options.length > 0 && this.selectedCount === this.options.length
      },
      isIndeterminate() {
        return this.selectedCount > 0 && this.selectedCount < this.options.length
      },
    },
    methods: {
      handleCheckboxChange(checked, value) {
        const newValue = cloneDeep(this.value)
        const index = newValue.indexOf(value)

        if (checked) {
          newValue.push(value)
        } else {
          newValue.splice(index, 1)
        }

        this.$emit('update:value', newValue)
        this.$emit('change', newValue)
      },
      handleSelectAll(checked) {
        const newValue = checked ? this.options.map((option) => option[this.sKey]) : []

        this.$emit('update:value', newValue)
        this.$emit('change', newValue)
      },
    },
  }
</script>

<template>
  <div :class="['checkbox-group-design', direction]" v-bind="$attrs">
    <div v-if="useAll && options.length" class="checkbox-all">
      <Checkbox
        :checked="isAllSelected"
        :indeterminate="isIndeterminate"
        label="Select All"
        @change="handleSelectAll"
      />
    </div>
    <slot>
      <Checkbox
        v-for="option in options"
        :key="option[sKey]"
        :value="option[sKey]"
        :label="option[sValue]"
        :sub-label="option.subLabel"
        :disabled="!!option.disabled"
        :checked="value.includes(option[sKey])"
      >
        <slot :key="option[sKey]" name="option" :value="option[sValue]" :option="option"></slot>
      </Checkbox>
    </slot>
  </div>
</template>
