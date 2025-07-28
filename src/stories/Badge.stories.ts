import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Badge from '../components/Badge.vue'

const meta = {
  title: 'Auto/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
