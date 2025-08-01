import type { Meta, StoryObj } from '@storybook/vue3-vite'

import RangePicker from '../components/RangePicker.vue'

const meta = {
  title: 'Auto/RangePicker',
  component: RangePicker,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof RangePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
