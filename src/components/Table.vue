<template>
  <div
    :class="[
      'table-component',
      { 'not-height': !height && !bodyHeight && !minHeight, bordered: bordered, ishastabs: isHasTabs },
    ]"
    :style="style"
  >
    <LogoSpinning :size="36" :loading="loading">
      <a-table
        :class="['table-design', classes]"
        v-bind="$attrs"
        :columns="columns"
        :row-selection="rowSelectionMark"
        :pagination="false"
        :loading="false"
        :scroll="scrollMark"
      >
        <template v-if="$slots.expandedRowRender" #expandedRowRender="{ record }">
          <slot name="expandedRowRender" :record="record"></slot>
        </template>
        <template v-if="$slots.headerCell" #headerCell="{ title, column }">
          <slot name="headerCell" :title="title" :column="column"></slot>
        </template>
        <template v-if="$slots.bodyCell" #bodyCell="{ column, record, index }">
          <slot name="bodyCell" :column="column" :record="record" :index="index"></slot>
        </template>
        <template #emptyText>
          <slot name="emptyText">
            <Empty :label="emptyLabelMark" />
          </slot>
        </template>

        <slot></slot>
      </a-table>
    </LogoSpinning>
    <div v-if="$attrs.pagination" class="table-pagination">
      <Pagination
        v-bind="{ ...$attrs.pagination, change: undefined, showSizeChange: undefined }"
        v-on="{ change: $attrs.pagination?.change, showSizeChange: $attrs.pagination?.showSizeChange }"
      />
    </div>
  </div>
</template>

<script>
  import Pagination from './Pagination.vue'
  import LogoSpinning from './LogoSpinning.vue'
  import Empty from './Empty.vue'
  export default {
    components: {
      Pagination,
      LogoSpinning,
      Empty,
    },
    inheritAttrs: false,
    props: {
      height: {
        type: [String, Number],
        default: undefined,
      },
      columnHeight: {
        type: Number,
        default: undefined,
      },
      rowSelection: {
        type: Object,
        default: undefined,
      },
      columns: {
        type: Array,
        default: undefined,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      classes: {
        type: String,
        default: '',
      },
      emptyLabel: {
        type: String,
        default: undefined,
      },
      bodyHeight: {
        type: [String, Number],
        default: undefined,
      },
      bordered: {
        type: Boolean,
        default: true,
      },
      headerColor: {
        type: String,
        default: undefined,
      },
      // isHasTabs là có commponent tabs ở trên table => mục đích dùng là bỏ border-radius góc trái bên trên của table, các góc table còn lại vẫn border-radius bình thường
      isHasTabs: {
        type: Boolean,
        default: false,
      },
      scroll: {
        type: Object,
        default: undefined,
      },
      headerColorV2: {
        type: Boolean,
        default: false,
      },
      minHeight: {
        type: [String, Number],
        default: undefined,
      },
    },
    computed: {
      style() {
        const style = {}
        if (this.height) {
          style['--height-table'] = typeof this.height == 'string' ? this.height : `${this.height}px`
        }

        if (this.minHeight) {
          style['--min-height-table'] = typeof this.minHeight == 'string' ? this.minHeight : `${this.minHeight}px`
        }

        if (this.columnHeight) {
          style['--column-height'] = `${this.columnHeight}px`
        }

        if (this.bodyHeight) {
          style['--body-height-table'] = typeof this.bodyHeight == 'string' ? this.bodyHeight : `${this.bodyHeight}px`
        }

        if (this.headerColor) {
          style['--tr-table-header'] = this.headerColor
        }

        if (this.headerColorV2) {
          style['--tr-table-header'] = 'var(--tr-table-header-v2)'
        }

        return style
      },
      rowSelectionMark() {
        if (this.rowSelection) {
          return {
            columnWidth: 40,
            ...this.rowSelection,
          }
        } else return null
      },
      emptyLabelMark() {
        if (this.emptyLabel) return this.emptyLabel
        else return this.$t('design.no_data')
      },
      scrollMark() {
        if (this.scroll) return this.scroll
        if (this.height) {
          let scrollY
          if (typeof this.height == 'string') {
            scrollY = this.height.replace(/\)$/, '') + ' - 39px)'
          } else {
            scrollY = `${this.height - 39}px`
          }
          return {
            y: scrollY,
          }
        }
        return undefined
      },
    },
  }
</script>
