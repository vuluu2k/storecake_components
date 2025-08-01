<template>
  <div :class="['segmented-design', size, type]" @click.stop="handleToggle">
    <div
      v-for="option in options"
      :key="option[sKey]"
      :class="[
        'segmented-design-item',
        { 'segmented-design-item-active': value === option[sKey], 'segmented-design-item-auto-fit': autoFit },
      ]"
      @click="handleClickItem($event, option)"
    >
      <component :is="option['icon']" v-if="option['icon']" />
      <span v-if="option[sValue]">{{ option[sValue] }}</span>
      <Badge v-if="option['badge']" v-bind="option['badge']" />
    </div>
  </div>
</template>

<script>
  import Badge from './Badge.vue'
  import { PhDesktop, PhDeviceTablet, PhDeviceMobile } from '@phosphor-icons/vue'

  export default {
    components: {
      Badge,
      PhDesktop,
      PhDeviceTablet,
      PhDeviceMobile,
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
      sKey: {
        type: String,
        default: 'key',
      },
      sValue: {
        type: String,
        default: 'value',
      },
      size: {
        type: String,
        default: 'md',
        validator: (value) => ['xs', 'sm', 'md', 'lg'].includes(value),
      },
      type: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'primary_v2'].includes(value),
      },
      isToggle: {
        type: Boolean,
        default: false,
      },
      autoFit: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['change', 'update:value', 'click-item'],
    computed: {
      checkToggle() {
        return this.isToggle && this.options.length == 2
      },
    },
    methods: {
      handleClickItem(event, option) {
        if (this.checkToggle) return
        event.stopPropagation()
        this.$emit('click-item', option)
        this.$emit('change', option[this.sKey])
        this.$emit('update:value', option[this.sKey])
      },
      handleToggle() {
        if (this.checkToggle) {
          const newValue =
            this.value === this.options[0][this.sKey] ? this.options[1][this.sKey] : this.options[0][this.sKey]
          this.$emit('update:value', newValue)
          this.$emit('change', newValue)
        }
      },
    },
  }
</script>
