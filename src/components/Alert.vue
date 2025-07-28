<template>
  <div :class="['alert-design', type]">
    <div class="alert-design-grid-line">
      <div v-for="i in 200" :key="i" class="grid-line"></div>
    </div>

    <div class="alert-design-left">
      <div class="alert-design-icon">
        <slot name="icon">
          <PhSealWarning weight="duotone" />
        </slot>
      </div>
      <div class="alert-design-content">
        <div v-if="title" class="alert-design-title">{{ title }}</div>
        <div v-if="subTitle" class="alert-design-sub-title">{{ subTitle }}</div>
      </div>
    </div>

    <div v-if="buttonText" class="alert-design-right">
      <Button :label="buttonText" :type="type" @click.stop="$emit('btnClick')">
        <template v-if="$slots.buttonPrefix" #icon>
          <slot name="buttonPrefix"></slot>
        </template>
        <template v-if="$slots.buttonSuffix" #suffix>
          <slot name="buttonSuffix"></slot>
        </template>
      </Button>
    </div>
  </div>
</template>

<script>
  import Button from './Button.vue'
  import { PhSealWarning } from '@phosphor-icons/vue'

  export default {
    components: {
      Button,
      PhSealWarning,
    },
    props: {
      type: {
        type: String,
        default: 'info',
        validator: (value) => ['info', 'warning', 'error'].includes(value),
      },
      buttonText: {
        type: String,
        default: undefined,
      },
      title: {
        type: String,
        default: undefined,
      },
      subTitle: {
        type: String,
        default: undefined,
      },
    },
    emits: ['btnClick'],
  }
</script>
