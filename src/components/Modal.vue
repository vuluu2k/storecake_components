<template>
  <a-modal :visible="visible" class="modal-design" v-bind="$attrs" :centered="centered" :width="800" @cancel="onCancel">
    <slot></slot>
    <template #closeIcon>
      <slot name="closeIcon">
        <PhX />
      </slot>
    </template>
    <template #footer>
      <slot name="footer">
        <div class="flex justify-between">
          <slot name="footerLeft">
            <div></div>
          </slot>
          <slot name="footerRight">
            <div class="flex">
              <Button
                v-if="!hiddenCancel"
                v-bind="cancelButtonProps"
                type="secondary"
                :label="cancelText || $t('design.cancel')"
                @click.stop="onCancel"
              ></Button>
              <Button
                v-if="!hiddenOk"
                v-bind="okButtonProps"
                :loading="confirmLoading"
                type="primary"
                :label="okText || $t('design.ok')"
                @click.stop="onOk"
              ></Button>
            </div>
          </slot>
        </div>
      </slot>
    </template>
    <template v-if="$slots.title || title" #title>
      <slot name="title">{{ title }}</slot>
    </template>
  </a-modal>
</template>

<script>
  import Button from './Button.vue'
  import { PhX } from '@phosphor-icons/vue'
  import { Modal as AModal } from 'ant-design-vue'
  import 'ant-design-vue/lib/modal/style/css'

  export default {
    components: {
      Button,
      PhX,
      AModal,
    },
    props: {
      title: {
        type: String,
        default: '',
      },
      visible: {
        type: Boolean,
        default: false,
      },
      cancelText: {
        type: String,
        default: '',
      },
      okText: {
        type: String,
        default: '',
      },
      confirmLoading: {
        type: Boolean,
        default: false,
      },
      centered: {
        type: Boolean,
        default: false,
      },
      hiddenCancel: {
        type: Boolean,
        default: false,
      },
      hiddenOk: {
        type: Boolean,
        default: false,
      },
      okButtonProps: {
        type: Object,
        default: () => ({}),
      },
      cancelButtonProps: {
        type: Object,
        default: () => ({}),
      },
    },
    emits: ['update:visible', 'cancel', 'ok'],
    setup() {
      return {}
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
