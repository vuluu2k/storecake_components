import type { Meta, StoryObj } from '@storybook/vue3-vite'

import MessageAlert from '../components/MessageAlert.vue'

const meta = {
  title: 'Feedback/MessageAlert',
  component: MessageAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Type of the MessageAlert',
    },
    message: { control: 'text', description: 'Property message of the MessageAlert' },
  },
  args: { type: 'success' },
} satisfies Meta<typeof MessageAlert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { type: 'success' },
}
export const Success: Story = {
  args: {
    type: 'success',
  },
}
export const Error: Story = {
  args: {
    type: 'error',
  },
}
export const Warning: Story = {
  args: {
    type: 'warning',
  },
}
export const Info: Story = {
  args: {
    type: 'info',
  },
}
