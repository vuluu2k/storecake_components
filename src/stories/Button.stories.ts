import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Button from '../components/Button.vue'

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

export const Default: Story = {
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
}
export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    label: 'Button',
    type: 'secondary',
  },
}
export const Gray: Story = {
  args: {
    label: 'Button',
    type: 'gray',
  },
}
export const Info: Story = {
  args: {
    label: 'Button',
    type: 'info',
  },
}
export const Warning: Story = {
  args: {
    label: 'Button',
    type: 'warning',
  },
}
export const Black: Story = {
  args: {
    label: 'Button',
    type: 'black',
  },
}
export const Gold: Story = {
  args: {
    label: 'Button',
    type: 'gold',
  },
}
export const Error: Story = {
  args: {
    label: 'Button',
    type: 'error',
  },
}
export const Danger: Story = {
  args: {
    label: 'Button',
    type: 'danger',
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
