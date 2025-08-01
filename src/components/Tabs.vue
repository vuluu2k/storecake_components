<template>
  <a-tabs
    :class="['tabs-design', size, { 'tabs-design-divide-equally': isSizeTabDivideEqually, bordered: bordered }]"
    :style="style"
    overlay-class-name="tabs-design-dropdown"
    v-bind="$attrs"
  >
    <slot>
      <Tab v-for="option in options" :key="option[sKey]" :disabled="!!option.disabled">
        <template #tab>
          <slot :key="option[sKey]" name="tab" :value="option[sValue]" :option="option">
            <div class="tabs-design-title">
              <component :is="option['icon']" v-if="option['icon']" />
              <div>{{ option[sValue] || option[sKey] }}</div>
              <Badge v-if="option['badge']" v-bind="option['badge']" />
            </div>
          </slot>
        </template>
        <slot :key="option[sKey]" name="tabPane" :value="option[sValue]" :option="option"></slot>
      </Tab>
    </slot>
  </a-tabs>
</template>

<script>
  import Tab from './Tab.vue'
  import Badge from './Badge.vue'
  import { Tabs as ATabs } from 'ant-design-vue'
  import 'ant-design-vue/es/tabs/style/css'

  import {
    PhChartLineUp,
    PhChartBar,
    PhFolderUser,
    PhUserCirclePlus,
    PhUserList,
    PhSealPercent,
    PhGift,
    PhWallet,
    PhThumbsUp,
    PhCrownSimple,
    PhChatCenteredText,
    PhChatCircleText,
    PhArrowsClockwise,
    PhGlobe,
    PhListMagnifyingGlass,
    PhTreeStructure,
    PhBrowsers,
    PhBrowser,
    PhChatText,
    PhRobot,
    PhTranslate,
    PhGlobeHemisphereWest,
    PhCurrencyCircleDollar,
    PhLetterCircleP,
    PhCircle,
    PhPaypalLogo,
    PhStripeLogo,
    PhLetterCircleV,
    PhCardholder,
    PhPackage,
    PhListBullets,
  } from '@phosphor-icons/vue'

  export default {
    components: {
      ATabs,
      Tab,
      Badge,
      PhChartLineUp,
      PhChartBar,
      PhFolderUser,
      PhUserCirclePlus,
      PhUserList,
      PhSealPercent,
      PhGift,
      PhWallet,
      PhThumbsUp,
      PhCrownSimple,
      PhChatCenteredText,
      PhChatCircleText,
      PhArrowsClockwise,
      PhGlobe,
      PhListMagnifyingGlass,
      PhTreeStructure,
      PhBrowsers,
      PhBrowser,
      PhChatText,
      PhRobot,
      PhTranslate,
      PhGlobeHemisphereWest,
      PhCurrencyCircleDollar,
      PhLetterCircleP,
      PhCircle,
      PhPaypalLogo,
      PhStripeLogo,
      PhLetterCircleV,
      PhCardholder,
      PhPackage,
      PhListBullets,
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
      size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].includes(value),
      },
      isSizeTabDivideEqually: {
        type: Boolean,
        default: false,
      },
      maxHeight: {
        type: [String, Number],
        default: undefined,
      },
      bordered: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      style() {
        const style = {}

        if (this.maxHeight) {
          style['--max-height'] = typeof this.maxHeight === 'number' ? `${this.maxHeight}px` : this.maxHeight
        }

        return style
      },
    },
  }
</script>
