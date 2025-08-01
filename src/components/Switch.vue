<template>
  <div :class="['switch-design', { 'has-label': !!label, disabled }]">
    <a-switch v-bind="$attrs" :checked="checked" :size="sizeSwitch" @change="onChange"></a-switch>
    <div v-if="label" class="switch-design-text">
      <div class="switch-design-label">{{ label }}</div>
      <div v-if="subLabel" class="switch-design-sub-label">{{ subLabel }}</div>
    </div>
  </div>
</template>

<script>
  import { Switch as ASwitch } from 'ant-design-vue'

  export default {
    components: {
      ASwitch,
    },
    props: {
      checked: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: '',
      },
      subLabel: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: 'md',
        validator(value) {
          return ['sm', 'md'].includes(value)
        },
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['change', 'update:checked'],
    setup() {
      return {}
    },
    computed: {
      sizeSwitch() {
        switch (this.size) {
          case 'sm':
            return 'small'
          default:
            return 'default'
        }
      },
    },
    methods: {
      onChange(checked, event) {
        this.$emit('change', checked, event)
        this.$emit('update:checked', checked)
      },
    },
  }
</script>
