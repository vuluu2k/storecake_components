import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Button from '../components/Button.vue'

const meta = {
  title: 'Auto/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    loading: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'gray', 'info', 'warning', 'black', 'gold', 'error', 'danger'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    danger: { control: 'boolean' },
    ghost: { control: 'boolean' },
    disabled: { control: 'boolean' },
    classes: { control: 'text' },
  },
  args: {
    label: '',
    loading: false,
    type: 'primary',
    size: 'md',
    danger: false,
    ghost: false,
    disabled: false,
    classes: '',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    type: 'primary',
    label: 'Button',
    size: 'lg',
  },
}

export const Small: Story = {
  args: {
    type: 'primary',
    label: 'Button',
    size: 'sm',
  },
}
