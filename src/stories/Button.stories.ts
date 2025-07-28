import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Button from '../components/Button.vue'

const meta = {
  title: 'Auto/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    loading: { control: { type: 'boolean' } },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'gray', 'info', 'warning', 'black', 'gold', 'error', 'danger'],
      },
    },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    danger: { control: { type: 'boolean' } },
    ghost: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    classes: { control: { type: 'text' } },
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
    primary: true,
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
}
