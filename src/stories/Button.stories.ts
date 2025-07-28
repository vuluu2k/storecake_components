import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Button from '../components/button/Button.vue'

const meta = {
  title: 'Auto/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label of the Button' },
    loading: { control: 'boolean', description: 'Loading state of the Button' },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'gray', 'info', 'warning', 'black', 'gold', 'error', 'danger'],
      description: 'Type of the Button',
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Size of the Button' },
    danger: { control: 'boolean', description: 'Danger state of the Button' },
    ghost: { control: 'boolean', description: 'Ghost state of the Button' },
    disabled: { control: 'boolean', description: 'Disabled state of the Button' },
    classes: { control: 'text', description: 'Classes of the Button' },
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
export const Gray: Story = {
  args: {
    type: 'gray',
    label: 'Button',
  },
}
export const Info: Story = {
  args: {
    type: 'info',
    label: 'Button',
  },
}
export const Warning: Story = {
  args: {
    type: 'warning',
    label: 'Button',
  },
}
export const Black: Story = {
  args: {
    type: 'black',
    label: 'Button',
  },
}
export const Gold: Story = {
  args: {
    type: 'gold',
    label: 'Button',
  },
}
export const Error: Story = {
  args: {
    type: 'error',
    label: 'Button',
  },
}
export const Danger: Story = {
  args: {
    type: 'danger',
    label: 'Button',
  },
}
export const Sm: Story = {
  args: {
    label: 'Button',
    size: 'sm',
  },
}
export const Md: Story = {
  args: {
    label: 'Button',
    size: 'md',
  },
}
export const Lg: Story = {
  args: {
    label: 'Button',
    size: 'lg',
  },
}
