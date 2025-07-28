<template>
  <img v-bind="$attrs" :src="srcPreview" :alt="alt" :width="width" :height="height" />
</template>

<script>
  import { getImagePreview } from '@/utils/resize'

  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: '',
      },
      width: {
        type: Number,
        default: undefined,
      },
      height: {
        type: Number,
        default: undefined,
      },
      compressedType: {
        type: String,
        default: 'webp',
        validator: (value) => ['webp', 'webp0'].includes(value),
      },
      fixedSize: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      return {}
    },
    computed: {
      srcPreview() {
        return (
          getImagePreview({
            url: this.src,
            width: this.width,
            height: this.height,
            keep_resolution: this.compressedType == 'webp0',
            fixedSize: this.fixedSize,
          }) ||
          'https://content.pancake.vn/1/s752x752/fwebp/54/69/e4/13/d02869f068e9b7c043efc7c551d2042a678a104b32495639f71c33a1.png'
        )
      },
    },
  }
</script>
