<template>
  <div class="LogoSpinning-root relative" :style="style">
    <slot></slot>
    <div
      v-if="loading"
      class="absolute z-[999] top-0 left-0 bg-opacity-60 bg-white w-full h-full flex items-center justify-center rounded-common"
    >
      <div class="spinning">
        <div class="spinning-edge"></div>

        <div class="spinning-logo flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.10815 9.00024C4.4379 9.38841 3.58003 9.16004 3.1925 8.48979C2.80433 7.81954 3.0327 6.96168 3.70294 6.57415L11.2976 2.18907C11.753 1.92511 12.2952 1.94646 12.7177 2.19748L20.1978 6.51592C20.2055 6.52045 20.2133 6.52433 20.2211 6.52822C20.683 6.75853 21 7.23534 21 7.78655V10.5588C21 11.11 20.6823 11.5868 20.2204 11.8171C20.2126 11.821 20.2049 11.8255 20.1971 11.8294L17.6449 13.3032C17.1674 13.5801 16.5942 13.5432 16.164 13.2566L9.90209 9.64137C9.56891 9.44858 9.56891 8.96789 9.90209 8.7751L11.7006 7.73673C11.8553 7.64745 12.0461 7.64745 12.2007 7.73673L16.6893 10.3284C16.8439 10.4177 17.0348 10.4177 17.1894 10.3284L17.9392 9.89563C18.0939 9.80635 18.189 9.64137 18.189 9.46281V8.88314C18.189 8.70458 18.0939 8.53961 17.9392 8.45033L12.2499 5.16572C12.0953 5.07644 11.9044 5.07644 11.7498 5.16572L5.10815 9.00024Z"
              fill="white"
              style="fill: white; fill-opacity: 1"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.8919 15.3414C19.5621 14.9533 20.42 15.1816 20.8075 15.8519C21.1957 16.5221 20.9673 17.38 20.297 17.7675L12.7024 22.1519C12.247 22.4159 11.7048 22.3946 11.2823 22.1435L3.80222 17.8251C3.79446 17.8206 3.7867 17.8167 3.77894 17.8128C3.31701 17.5825 3 17.1057 3 16.5545V13.7823C3 13.231 3.31766 12.7542 3.77959 12.5239C3.78735 12.52 3.7951 12.5155 3.80287 12.5116L6.35511 11.0379C6.83257 10.761 7.40578 10.7978 7.83601 11.0844L14.0979 14.6996C14.4311 14.8924 14.4311 15.3731 14.0979 15.5659L12.2994 16.6043C12.1447 16.6936 11.9539 16.6936 11.7993 16.6043L7.31067 14.0126C7.15605 13.9233 6.9652 13.9233 6.81057 14.0126L6.06076 14.4454C5.90614 14.5347 5.81038 14.6996 5.81038 14.8782V15.4579C5.81038 15.6364 5.90549 15.8014 6.06076 15.8907L11.7501 19.1753C11.9047 19.2646 12.0956 19.2646 12.2502 19.1753L18.8919 15.3408V15.3414Z"
              fill="white"
              style="fill: white; fill-opacity: 1"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      size: {
        type: Number,
        default: 36,
      },
    },
    computed: {
      style() {
        const style = {
          '--size-logo-spinning': `${this.size}px`,
        }
        return style
      },
    },
  }
</script>

<style lang="scss">
  .spinning {
    position: relative;
    overflow: hidden;
    --size-plus: 8px;
    --size-logo-edge: calc(var(--size-logo-spinning) + var(--size-plus));
    width: var(--size-logo-edge);
    height: var(--size-logo-edge);
    border-radius: calc(var(--size-logo-spinning) / 4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinning-edge {
    position: absolute;
    border: 2px solid var(--color-border-brand);
    opacity: 0.6;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 140%;
      height: 100%;
      transform: translate(-50%, -50%);
      background: var(--color-bg-white);
      border-radius: inherit;
      animation: rotate-logo 1.2s ease infinite;
    }
  }

  .spinning-logo {
    position: absolute;
    width: var(--size-logo-spinning);
    height: var(--size-logo-spinning);
    background-color: var(--color-bg-brand);
    border-radius: calc(var(--size-logo-spinning) / 4);

    svg {
      width: calc(var(--size-logo-spinning) / 2);
      height: calc(var(--size-logo-spinning) / 2);
      animation: spinning-logo 1.2s linear infinite;
    }
  }

  @keyframes spinning-logo {
    0% {
      transform: scale(0.8);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(0.8);
    }
  }

  @keyframes rotate-logo {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
      height: 100%;
    }

    50% {
      transform: translate(-50%, -50%) rotate(220deg);
      height: 60%;
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
      height: 100%;
    }
  }
</style>
