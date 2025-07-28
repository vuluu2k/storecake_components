import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Alert from '../components/Alert.vue'

const meta = {
  title: 'Auto/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['info', 'warning', 'error'], description: 'Type of the Alert' },
    buttonText: { control: 'text', description: 'Property buttonText of the Alert' },
    title: { control: 'text', description: 'Property title of the Alert' },
    subTitle: { control: 'text', description: 'Property subTitle of the Alert' },
  },
  args: { type: 'info' },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    type: 'info',
  },
}
export const Warning: Story = {
  args: {
    type: 'warning',
  },
}
export const Error: Story = {
  args: {
    type: 'error',
  },
}
