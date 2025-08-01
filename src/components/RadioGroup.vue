<template>
  <a-radio-group :class="['radio-group-design', direction]" v-bind="$attrs">
    <slot>
      <Radio
        v-for="option in options"
        :key="option[sKey]"
        :value="option[sKey]"
        :label="option?.label || option[sValue]"
        :sub-label="option.subLabel"
        :disabled="!!option.disabled"
      >
        <slot :key="option[sKey]" name="option" :value="option[sValue]" :option="option"></slot>
      </Radio>
    </slot>
  </a-radio-group>
</template>

<script>
  import Radio from './Radio.vue'

  export default {
    components: {
      Radio,
    },
    props: {
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
        validator: (value) => {
          return ['horizontal', 'vertical'].includes(value)
        },
      },
    },
    setup() {
      return {}
    },
  }
</script>
