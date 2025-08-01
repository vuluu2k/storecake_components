<template>
  <div class="select-design" :class="$attrs.class">
    <div v-if="title" class="text-select flex items-center gap-1">
      <span>
        {{ title }}
      </span>
      <Tooltip v-if="questionInfo" :title="questionInfo">
        <PhQuestion color="var(--color-icon-light-gray)" :size="16" weight="fill" />
      </Tooltip>
    </div>
    <a-select
      v-bind="{ ...$attrs, class: undefined }"
      :class="['ant-select-design', size, mode, { disabled }]"
      :dropdown-class-name="`ant-select-dropdown-design ${size} ${mode} ${dropdownClassName}`"
      :value="value"
      :mode="mode"
      :options="optionsMap"
      :disabled="disabled"
      :loading="loading"
      @change="handleChange"
    >
      <template v-if="!loading" #suffixIcon>
        <slot name="suffixIcon">
          <PhCaretDown />
        </slot>
      </template>

      <template
        v-if="$slots.option && !$slots.default"
        #option="{ value: optionValue, label, show, status, statusTooltip, flag }"
      >
        <slot name="option" :value="optionValue" :label="label" :status="status" :flag="flag">
          <Tooltip :title="statusTooltip">
            <div v-if="status" :class="['select-design-option-status', status]">
              <div class="select-design-option-status-icon"></div>
            </div>
          </Tooltip>
          <span>
            {{ show || label || optionValue }}
          </span>
        </slot>
      </template>

      <slot>
        <!--
        <a-select-option
          v-for="option in optionsMap"
          :key="option.value"
          :value="option.value"
          :label="option.label"
          :title="option.label"
        >
          <a-tooltip :title="option?.statusTooltip">
            <div v-if="option?.status" :class="['select-design-option-status', option?.status]">
              <div class="select-design-option-status-icon"></div>
            </div>
          </a-tooltip>
          <span>
            {{ option?.show && option.show || option.label || option.value }}
          </span>
        </a-select-option>
        -->
      </slot>

      <template v-if="options?.length && !$slots.default" #tagRender="{ label, closable, onClose, option }">
        <slot name="tagRender">
          <Tooltip :title="label">
            <div class="tag-design">
              <img v-if="option?.flag" class="w-6 h-4 mr-1" :src="option.flag" alt="" />
              <span class="tag-design-label">{{ label }}</span>
              <PhX v-if="closable" class="tag-design-close" @mousedown.stop="onClose" />
            </div>
          </Tooltip>
        </slot>
      </template>

      <template #menuItemSelectedIcon>
        <PhCheck />
      </template>

      <template v-if="$slots.maxTagPlaceholder" #maxTagPlaceholder>
        <slot name="maxTagPlaceholder"></slot>
      </template>
    </a-select>
  </div>
</template>

<script>
  import Tooltip from './Tooltip.vue'
  import { PhQuestion, PhCaretDown, PhCheck, PhX } from '@phosphor-icons/vue'
  import { Select as ASelect } from 'ant-design-vue'

  export default {
    components: {
      Tooltip,
      PhQuestion,
      PhCaretDown,
      PhCheck,
      PhX,
      ASelect,
    },
    props: {
      title: {
        type: String,
        default: '',
      },
      value: {
        type: [String, Number, Array],
        default: undefined,
      },
      options: {
        type: Array,
        default: undefined,
      },
      size: {
        type: String,
        default: 'md',
        validator: (value) => {
          // The value must match one of these strings
          return ['sm', 'md', 'lg'].includes(value)
        },
      },
      // select key
      sKey: {
        type: String,
        default: 'key',
      },
      // select value
      sValue: {
        type: String,
        default: 'value',
      },
      useNone: {
        type: Boolean,
        default: true,
      },
      mode: {
        type: String,
        default: 'single',
        validator: (value) => {
          // The value must match one of these strings
          return ['multiple', 'single', 'tags'].includes(value)
        },
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      sShow: {
        type: String,
        default: undefined,
      },
      dropdownClassName: {
        type: String,
        default: undefined,
      },
      questionInfo: {
        type: String,
        default: undefined,
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['change', 'update:value'],
    setup() {
      return {}
    },
    computed: {
      optionsMap() {
        if (this.$slots.default) return null

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
        return this.useNone ? [{ value: 'none', label: 'None' }].concat(options) : options
      },
    },
    methods: {
      handleChange(value, option) {
        this.$emit('update:value', value)
        this.$emit('change', value, option)
      },
    },
  }
</script>
