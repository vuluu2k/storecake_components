import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Tooltip from '../components/Tooltip.vue'

const meta = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Property title of the Tooltip' },
    visible: {
      control: 'boolean',
      description: 'Property visible of the Tooltip',
    },
  },
  args: { title: '', visible: false },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { title: 'Storecake top 1 vietnam', visible: false },
}
