<template>
  <div class="select-design">
    <div v-if="title" class="text-select">{{ title }}</div>
    <a-auto-complete
      v-bind="$attrs"
      :options="optionsMark"
      class="ant-select-design"
      :dropdown-class-name="`ant-select-dropdown-design`"
    >
      <slot></slot>
    </a-auto-complete>
  </div>
</template>

<script>
  import { AutoComplete as AAutoComplete } from 'ant-design-vue'
  import 'ant-design-vue/lib/auto-complete/style/css'

  export default {
    components: {
      AAutoComplete,
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
      title: {
        type: String,
        default: undefined,
      },
    },
    setup() {
      return {}
    },
    computed: {
      optionsMark() {
        const options = this.options
          .map((item) => {
            if (typeof item == 'string') {
              return {
                key: item,
                value: item,
                label: item,
                title: item,
              }
            }

            return {
              ...item,
              value: item[this.sKey],
              label: item?.label || item[this.sValue],
              title: item?.title || item[this.sValue],
              show: this.sShow && item?.[this.sShow],
            }
          })
          .filter((option) => !option?.is_hidden)

        return options
      },
    },
  }
</script>
