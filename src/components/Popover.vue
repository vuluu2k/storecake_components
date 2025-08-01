<template>
  <a-popover
    v-bind="$attrs"
    :class="['popover-design']"
    :overlay-class-name="`popover-design-overlay ${useArrow ? 'use-arrow' : ''} ${overlayClassName}`"
    :overlay-style="overlayStyleMark"
  >
    <template v-if="$slots.title" #title>
      <slot name="title"></slot>
    </template>
    <template v-if="$slots.content" #content>
      <slot name="content">
        <a-menu @click="handleClickMenu">
          <template v-for="option in optionsMark" :key="option[sKey]">
            <template v-if="!option.is_hidden && option?.children?.length > 0">
              <a-sub-menu :key="option[sKey]" popup-class-name="dropdown-design-submenu">
                <template v-if="option?.icon" #icon>
                  <component :is="option?.icon" />
                </template>
                <template #title>
                  <span>{{ option[sValue] || option[sKey] }}</span>
                </template>
                <template #expandIcon>
                  <PhCaretRight />
                </template>
                <template v-for="child in option?.children" :key="child[sKey]">
                  <a-menu-item
                    v-if="!child.is_hidden"
                    :key="child[sKey]"
                    class="dropdown-design-item"
                    @click.stop="() => handleClick(child)"
                  >
                    <template v-if="child?.icon" #icon>
                      <component :is="child?.icon" />
                    </template>
                    <span>{{ child[sValue] || child[sKey] }}</span>
                  </a-menu-item>
                </template>
              </a-sub-menu>
            </template>
            <template v-else-if="!option.is_hidden">
              <a-menu-item :key="option[sKey]" class="dropdown-design-item" @click.stop="() => handleClick(option)">
                <template v-if="option?.icon" #icon>
                  <component :is="option?.icon" />
                </template>
                <span>
                  {{ option[sValue] || option[sKey] }}
                </span>
              </a-menu-item>
            </template>
          </template>
        </a-menu>
      </slot>
    </template>
    <slot></slot>
  </a-popover>
</template>

<script>
  import { Popover as APopover, Menu as AMenu, MenuItem as AMenuItem, SubMenu as ASubMenu } from 'ant-design-vue'
  import 'ant-design-vue/lib/popover/style/css'
  import 'ant-design-vue/lib/menu/style/css'
  import { PhCaretRight } from '@phosphor-icons/vue'

  export default {
    components: {
      APopover,
      AMenu,
      AMenuItem,
      ASubMenu,
      PhCaretRight,
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
      maxHeight: {
        type: [Number, String],
        default: undefined,
      },
      minWidth: {
        type: [Number, String],
        default: undefined,
      },
      overlayStyle: {
        type: Object,
        default: () => ({}),
      },
      useArrow: {
        type: Boolean,
        default: false,
      },
      overlayClassName: {
        type: String,
        default: '',
      },
    },
    emits: ['click-item', 'click-menu'],
    computed: {
      optionsMark() {
        return this.handleOptions(this.options)
      },
      overlayStyleMark() {
        const style = {}
        if (this.maxHeight)
          style['--max-height'] = typeof this.maxHeight === 'number' ? `${this.maxHeight}px` : this.maxHeight

        if (this.minWidth) {
          style['--min-width'] = typeof this.minWidth === 'number' ? `${this.minWidth}px` : this.minWidth
          style['min-width'] = 'var(--min-width)'
        }
        return { ...style, ...this.overlayStyle }
      },
    },
    methods: {
      handleClick(option) {
        if (option?.onclick) option.onclick({ value: this.value, option })
        this.$emit('click-item', option)
      },
      handleOptions(options) {
        return options.map((option) => {
          if (option?.icon) {
            switch (option.icon) {
              case 'link':
                option.icon = 'PhLink'
                break
              case 'edit':
              case 'pencil':
                option.icon = 'PhPencilSimple'
                break
              case 'remove':
              case 'trash':
              case 'delete':
                option.icon = 'PhTrash'
                break
              case 'eye':
                option.icon = 'PhEye'
                break
              case 'eye-slash':
                option.icon = 'PhEyeSlash'
                break
              default:
                break
            }
          }

          if (option.children) option.children = this.handleOptions(option.children)

          return option
        })
      },
      handleClickMenu(e) {
        this.$emit('click-menu', e)
      },
    },
  }
</script>
