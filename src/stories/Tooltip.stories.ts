import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Tooltip from '../components/Tooltip.vue'

const meta = {
  title: 'Auto/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
