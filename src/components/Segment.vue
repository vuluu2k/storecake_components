<template>
  <div :class="['segment-design', size]" @click.stop="handleToggle">
    <div
      v-for="option in options"
      :key="option[sKey]"
      :class="['segment-design-item', { 'segment-design-item-active': value === option[sKey] }]"
      @click="handleClickItem($event, option)"
    >
      <component :is="option['icon']" v-if="option['icon']" />
      <span v-if="option[sValue]">{{ option[sValue] }}</span>
    </div>
  </div>
</template>

<script>
  import { PhSquaresFour, PhListBullets, PhUser, PhUsers } from '@phosphor-icons/vue'

  export default {
    components: {
      PhSquaresFour,
      PhListBullets,
      PhUser,
      PhUsers,
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
        validator: (value) => ['sm', 'md', 'lg'].includes(value),
      },
      isToggle: {
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

<style lang="scss" scoped></style>
