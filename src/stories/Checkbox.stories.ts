import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Checkbox from '../components/Checkbox.vue'

const meta = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', description: 'Property value of the Checkbox' },
    label: { control: 'text', description: 'Label of the Checkbox' },
    subLabel: { control: 'text', description: 'Property subLabel of the Checkbox' },
    checked: { control: 'boolean', description: 'Property checked of the Checkbox' },
    disabled: { control: 'boolean', description: 'Disabled state of the Checkbox' },
    indeterminate: { control: 'boolean', description: 'Property indeterminate of the Checkbox' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Size of the Checkbox' },
  },
  args: { value: '', label: '', subLabel: '', checked: false, disabled: false, indeterminate: false, size: 'md' },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: '', label: '', subLabel: '', checked: false, disabled: false, indeterminate: false, size: 'md' },
}

export const Sm: Story = {
  args: {
    size: 'sm',
  },
}
export const Md: Story = {
  args: {
    size: 'md',
  },
}
export const Lg: Story = {
  args: {
    size: 'lg',
  },
}
