import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Progress from '../components/Progress.vue'

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: { type: { control: 'select', options: ['primary'], description: 'Type of the Progress' } },
  args: {},
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
export const Primary: Story = {
  args: {
    type: 'primary',
  },
}
