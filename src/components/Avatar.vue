<template>
  <div :class="['avatar-design', { 'avatar-design-box-shadow': boxShadow }]" :style="style">
    <ImageDesign v-if="src" :src="src" :width="size" :height="size" />
    <component :is="icon || 'PhUser'" v-else />
    <sub v-if="useOnline">
      <div v-if="$slots.iconOnline" class="avatar-design-icon-online">
        <div class="avatar-design-icon-online-inner">
          <slot name="iconOnline"></slot>
        </div>
      </div>
      <Status v-else :type="online ? 'success' : 'secondary'" :size="size / 4" />
    </sub>
  </div>
</template>

<script>
  import ImageDesign from './Image.vue'
  import Status from './Status.vue'
  import { PhUser } from '@phosphor-icons/vue'

  export default {
    components: {
      ImageDesign,
      Status,
      PhUser,
    },
    props: {
      src: {
        type: String,
        default: '',
      },
      size: {
        type: Number,
        default: 32,
      },
      icon: {
        type: String,
        default: '',
      },
      online: {
        type: Boolean,
        default: false,
      },
      useOnline: {
        type: Boolean,
        default: false,
      },
      boxShadow: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      style() {
        return {
          '--size': this.size + 'px',
        }
      },
    },
  }
</script>
