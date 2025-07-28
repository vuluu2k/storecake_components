import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Divider from '../components/Divider.vue'

const meta = {
  title: 'Auto/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Property direction of the Divider',
    },
    height: { control: 'number', description: 'Property height of the Divider' },
    width: { control: 'number', description: 'Property width of the Divider' },
    space: { control: 'number', description: 'Property space of the Divider' },
  },
  args: { direction: 'horizontal' },
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { direction: 'horizontal' },
}
