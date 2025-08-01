<template>
  <a-modal
    :class="['modal-confirm-design', type, { danger }]"
    :visible="visible"
    v-bind="$attrs"
    :footer="false"
    :z-index="1010"
    @cancel="onCancel"
  >
    <template #closeIcon>
      <PhX />
    </template>

    <slot>
      <div class="flex gap-4">
        <div class="modal-confirm-icon">
          <slot name="icon">
            <PhInfo weight="fill" />
          </slot>
        </div>
        <div class="flex flex-col gap-1">
          <div v-if="titleMark" class="modal-confirm-title">
            <slot name="title">
              {{ titleMark }}
            </slot>
          </div>
          <div v-if="contentMark" class="modal-confirm-content">
            <slot name="content">
              {{ contentMark }}
            </slot>
          </div>
        </div>
      </div>
    </slot>

    <slot name="action">
      <div class="flex justify-end gap-2 mt-4">
        <Button :label="cancelText || 'Cancel'" type="secondary" @click.stop="onCancel"></Button>
        <Button
          :label="okText || 'OK'"
          :type="type"
          :danger="danger"
          :loading="confirmLoading"
          @click.stop="onOk"
        ></Button>
      </div>
    </slot>
  </a-modal>
</template>

<script>
  import Button from './Button.vue'
  import { PhX, PhInfo } from '@phosphor-icons/vue'
  import { Modal as AModal } from 'ant-design-vue'
  import 'ant-design-vue/lib/modal/style/css'

  export default {
    components: {
      Button,
      PhX,
      PhInfo,
      AModal,
    },
    props: {
      title: {
        type: String,
      },
      content: {
        type: String,
      },
      visible: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'warning', 'info', 'error', 'danger'].includes(value),
      },
      danger: {
        type: Boolean,
        default: false,
      },
      okText: {
        type: String,
        default: '',
      },
      cancelText: {
        type: String,
        default: '',
      },
      confirmLoading: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:visible', 'cancel', 'ok'],
    setup() {
      return {}
    },
    computed: {
      titleMark() {
        if (this.title) return this.title
        return 'Title Modal Confirm'
      },
      contentMark() {
        if (this.content) return this.content
        return 'Content Modal Confirm'
      },
    },
    methods: {
      onCancel() {
        this.$emit('update:visible', false)
        this.$emit('cancel')
      },
      onOk() {
        this.$emit('ok')
      },
    },
  }
</script>
