<template>
  <a-dropdown
    v-bind="$attrs"
    :trigger="trigger"
    :overlay-class-name="`dropdown-design-overlay ${size}`"
    :overlay-style="overlayStyleMark"
    :placement="placement"
    @click.stop
    @visible-change="handleVisibleChange"
  >
    <slot>
      <div class="dropdown-design">
        <PhDotsThree class="dropdown-design-icon" />
      </div>
    </slot>
    <template #overlay>
      <slot name="overlay">
        <a-menu @click="handleClickMenu">
          <template v-for="option in optionsMark" :key="option[sKey]">
            <template v-if="(!option.is_hidden && option?.children?.length > 0) || !!option.extraItem">
              <a-sub-menu
                :key="option[sKey]"
                :class="{ is_active: option?.is_active }"
                :popup-class-name="`dropdown-design-submenu ${option?.class || ''}`"
                :popup-offset="option?.popupOffset"
                @click.stop="() => handleClick(option)"
              >
                <template #title>
                  <template v-if="option?.icon">
                    <component :is="option?.icon" />
                  </template>
                  <span>{{ option[sValue] || option[sKey] }}</span>
                </template>
                <template #expandIcon>
                  <PhCaretRight />
                </template>
                <template v-if="option?.children?.length">
                  <template v-for="child in option?.children" :key="child[sKey]">
                    <a-menu-item v-if="!child.is_hidden" :key="child[sKey]" @click.stop="() => handleClick(child)">
                      <div :class="['dropdown-design-item gap-2', { is_active: child?.is_active }]">
                        <template v-if="child?.icon">
                          <component :is="child?.icon" />
                        </template>
                        <span>{{ child[sValue] || child[sKey] }}</span>
                      </div>
                    </a-menu-item>
                  </template>
                </template>
                <template v-else>
                  <div class="p-4"><Empty :size="50" :label="$t('design.no_data')" /></div>
                </template>
                <slot v-if="!!option.extraItem" :key="option[sKey]" name="subExtra" :option="option">
                  <Divider class="my-1" />
                  <div class="dropdown-design-item gap-2" @click="handleClick(option?.extraItem)">
                    <template v-if="option?.extraItem?.icon"><component :is="option?.extraItem?.icon" /></template>
                    <span>{{ option?.extraItem?.value }}</span>
                  </div>
                </slot>
              </a-sub-menu>
            </template>
            <template v-else-if="!option.is_hidden">
              <a-menu-item :key="option[sKey]" @click.stop="() => handleClick(option)">
                <Tooltip :title="option?.tooltip" placement="right">
                  <div :class="['dropdown-design-item gap-2', { is_active: option?.is_active }]">
                    <div class="flex items-center gap-2">
                      <template v-if="option?.icon">
                        <component :is="option?.icon" />
                      </template>
                      <span>
                        {{ option[sValue] || option[sKey] }}
                      </span>
                    </div>
                    <Switch
                      v-if="typeof option?.switchValue !== 'undefined'"
                      :checked="option.switchValue"
                      :disabled="option?.switchDisabled"
                      size="sm"
                      @change="option?.onSwitch"
                    />
                  </div>
                </Tooltip>
              </a-menu-item>
            </template>
          </template>
          <slot v-if="!!extraItem || $slots.extra" name="extra">
            <Divider class="my-1" />
            <div class="dropdown-design-item gap-2" @click="handleClick(extraItem)">
              <template v-if="extraItem?.icon"><component :is="extraItem?.icon" /></template>
              <span>{{ extraItem?.value }}</span>
            </div>
          </slot>
        </a-menu>
      </slot>
    </template>
  </a-dropdown>
</template>

<script>
  import Divider from './Divider.vue'
  import Tooltip from './Tooltip.vue'
  import Switch from './Switch.vue'
  import Empty from './Empty.vue'
  import {
    PhPlus,
    PhDotsThree,
    PhLink,
    PhPencil,
    PhTrash,
    PhEye,
    PhEyeSlash,
    PhTrashSimple,
    PhPencilSimple,
    PhCheckSquare,
    PhExport,
    PhDownloadSimple,
    PhGear,
    PhHandbagSimple,
    PhWarehouse,
    PhList,
    PhListDashes,
    PhTagChevron,
    PhTagSimple,
    PhMinusSquare,
    PhMoney,
    PhReceiptX,
    PhNotebook,
    PhLinkSimple,
    PhCopySimple,
    PhPencilSimpleLine,
    PhLock,
    PhSealCheck,
    PhCheckCircle,
    PhTextbox,
    PhSwap,
    PhPaintRoller,
    PhFolderOpen,
    PhGlobeSimple,
    PhClockClockwise,
    PhCaretRight,
    PhTShirt,
    PhProhibit,
    PhTag,
    PhBackspace,
    PhUsers,
    PhShare,
    PhArrowsClockwise,
    PhSlidersHorizontal,
    PhKey,
    PhPause,
    PhCloudWarning,
    PhCloudCheck,
    PhCloudX,
    PhFunnelSimple,
    PhMinusCircle,
    PhQuestion,
    PhEmpty,
    PhUserGear,
    PhGlobeSimpleX,
    PhBasket,
    PhTextIndent,
    PhPlaceholder,
    PhEquals,
    PhCopy,
    PhWrench,
    PhSignature,
    PhCoatHanger,
    PhArrowCounterClockwise,
  } from '@phosphor-icons/vue'
  import { Dropdown as ADropdown, Menu as AMenu, SubMenu as ASubMenu, MenuItem as AMenuItem } from 'ant-design-vue'

  export default {
    components: {
      Divider,
      Tooltip,
      Switch,
      Empty,
      PhPlus,
      PhDotsThree,
      PhLink,
      PhPencil,
      PhTrash,
      PhEye,
      PhEyeSlash,
      PhTrashSimple,
      PhPencilSimple,
      PhCheckSquare,
      PhExport,
      PhDownloadSimple,
      PhGear,
      PhHandbagSimple,
      PhWarehouse,
      PhList,
      PhListDashes,
      PhTagChevron,
      PhTagSimple,
      PhMinusSquare,
      PhMoney,
      PhReceiptX,
      PhNotebook,
      PhLinkSimple,
      PhCopySimple,
      PhPencilSimpleLine,
      PhLock,
      PhSealCheck,
      PhCheckCircle,
      PhTextbox,
      PhSwap,
      PhPaintRoller,
      PhFolderOpen,
      PhGlobeSimple,
      PhClockClockwise,
      PhCaretRight,
      PhTShirt,
      PhProhibit,
      PhTag,
      PhBackspace,
      PhUsers,
      PhShare,
      PhArrowsClockwise,
      PhSlidersHorizontal,
      PhKey,
      PhPause,
      PhCloudWarning,
      PhCloudCheck,
      PhCloudX,
      PhFunnelSimple,
      PhMinusCircle,
      PhQuestion,
      PhEmpty,
      PhUserGear,
      PhGlobeSimpleX,
      PhBasket,
      PhTextIndent,
      PhPlaceholder,
      PhEquals,
      PhCopy,
      PhWrench,
      PhSignature,
      PhCoatHanger,
      PhArrowCounterClockwise,
      ADropdown,
      AMenu,
      ASubMenu,
      AMenuItem,
    },
    props: {
      value: {
        type: [Number, String, Boolean],
        default: '',
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
      trigger: {
        type: Array,
        default: () => ['click'],
        validator: (value) => {
          // The value must match one of these strings
          return value.every((item) => ['click', 'hover', 'contextmenu'].includes(item))
        },
      },
      placement: {
        type: String,
        default: 'bottomLeft',
        validator: (value) => {
          // The value must match one of these strings
          return ['bottomLeft', 'bottom', 'bottomRight', 'topLeft', 'top', 'topRight'].includes(value)
        },
      },
      overlayStyle: {
        type: Object,
        default: () => ({}),
      },
      extraItem: {
        type: Object,
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
    },
    emits: ['click', 'click-item', 'click-menu', 'visibleChange', 'update:visible'],
    setup() {
      return {}
    },
    data() {
      return {
        dropdownIndex: 0,
      }
    },
    computed: {
      optionsMark() {
        return this.handleOptions(this.options)
      },
      overlayStyleMark() {
        return { '--z-index': this.dropdownIndex, ...this.overlayStyle }
      },
    },
    methods: {
      handleClick(option) {
        if (option?.onclick) option.onclick({ value: this.value, option })
        this.$emit('click-item', option)
        this.$emit('update:visible', false)
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
              case 'check':
                option.icon = 'PhCheck'
                break
              case 'x':
                option.icon = 'PhX'
                break
              case 'chats':
                option.icon = 'PhChats'
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
      handleVisibleChange(value) {
        if (!window.dropdownIndex) window.dropdownIndex = 0
        if (value) {
          window.dropdownIndex = window.dropdownIndex + 1
          this.dropdownIndex = window.dropdownIndex
        }

        this.$emit('update:visible', value)
        this.$emit('visibleChange', value)
      },
    },
  }
</script>
