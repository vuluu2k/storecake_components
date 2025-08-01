<template>
  <div class="pagination-component">
    <a-pagination
      :class="['pagination-design', size]"
      v-bind="$attrs"
      :show-size-changer="false"
      :total="totalMark"
      :page-size="pageSize"
      :current="current"
      @change="handleChange"
    />
    <Select
      v-if="useSizeChanger"
      :value="pageSize"
      class="pagination-select"
      :size="size"
      :options="sizeOptions"
      :use-none="false"
      @change="showSizeChange"
    />
  </div>
</template>

<script>
  import Select from './Select.vue'
  import { Pagination as APagination } from 'ant-design-vue'
  import 'ant-design-vue/lib/pagination/style/css'

  export default {
    components: {
      Select,
      APagination,
    },
    props: {
      size: {
        type: String,
        default: 'sm',
        validator: (value) => ['sm', 'md'].includes(value),
      },
      pageSizeOptions: {
        type: Array,
        default: () => ['10', '20', '50', '100'],
      },
      showSizeChanger: {
        type: Boolean,
        default: undefined,
      },
      total: {
        type: Number,
        default: 10,
      },
      pageSize: {
        type: Number,
        default: 10,
      },
      current: {
        type: Number,
        default: 1,
      },
      attrs: {
        type: Object,
      },
    },
    emits: ['update:current', 'update:pageSize', 'showSizeChange', 'change'],
    computed: {
      sizeOptions() {
        return this.pageSizeOptions.map((pz) => {
          return {
            key: Number(pz),
            value: `${pz} / ${this.$t('settings.pages')}`,
          }
        })
      },
      useSizeChanger() {
        if (typeof this.showSizeChanger !== 'undefined') {
          return this.showSizeChanger
        } else {
          return this.total > 50
        }
      },
      totalMark() {
        if (this.total) return this.total
        return 1
      },
    },
    methods: {
      showSizeChange(value) {
        const totalPage = Math.ceil(this.total / Number(value))
        const current = this.current <= totalPage ? this.current : totalPage

        this.$emit('update:current', current)
        this.$emit('update:pageSize', value)
        this.$emit('showSizeChange', current, value)
        this.$emit('change', current, value)
      },
      handleChange(page, pageSize) {
        this.$emit('change', page, pageSize)
      },
    },
  }
</script>
