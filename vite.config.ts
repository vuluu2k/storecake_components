/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Tự động inject CSS vào file JS khi build
    cssInjectedByJsPlugin({
      relativeCSSInjection: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@stories': resolve(__dirname, './src/stories'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
  // Cấu hình build cho thư viện
  build: {
    lib: {
      // Điểm vào cho thư viện
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'StoreCakeComponents',
      fileName: (format) => `storecake-components.${format}.js`,
    },
    rollupOptions: {
      // Đảm bảo các thư viện bên ngoài được xử lý đúng cách
      external: ['vue'],
      output: {
        // Cung cấp các biến toàn cục để sử dụng trong UMD build
        globals: {
          vue: 'Vue',
        },
      },
    },
    // Tạo sourcemap để dễ debug
    sourcemap: true,
    // Giảm kích thước file output
    minify: 'terser',
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        storybookTest({
          configDir: path.join(__dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});