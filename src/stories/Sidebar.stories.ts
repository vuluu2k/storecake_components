import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Sidebar from '../components/Sidebar.vue'

const meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', description: 'Property value of the Sidebar' },
    options: { control: 'array', description: 'Property options of the Sidebar' },
    label: { control: 'text', description: 'Label of the Sidebar' },
    isDefault: { control: 'boolean', description: 'Property isDefault of the Sidebar' },
  },
  args: { isDefault: true },
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
    isDefault: true,
  },
}
