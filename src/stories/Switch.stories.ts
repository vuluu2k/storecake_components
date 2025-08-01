import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Switch from '../components/Switch.vue'

const meta = {
  title: 'Data Entry/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', description: 'Property checked of the Switch' },
    label: { control: 'text', description: 'Label of the Switch' },
    subLabel: { control: 'text', description: 'Property subLabel of the Switch' },
    size: { control: 'text', description: 'Size of the Switch' },
    disabled: { control: 'boolean', description: 'Disabled state of the Switch' },
  },
  args: { checked: false, label: '', subLabel: '', size: 'md', disabled: false },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { checked: false, label: '', subLabel: '', size: 'md', disabled: false },
}
