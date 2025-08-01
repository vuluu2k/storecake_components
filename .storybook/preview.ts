import type { Preview } from '@storybook/vue3-vite'
import 'ant-design-vue/dist/antd.css'
import '@/styles/main.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    options: {
      storySort: {
        order: ['General', 'Layout', 'Navigation', 'Data Entry', 'Data Display', 'Feedback'],
      },
    },
  },
}

export default preview
