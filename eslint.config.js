// eslint.config.js
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['src/**/*.{js,jsx,vue}'],
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  },
])
