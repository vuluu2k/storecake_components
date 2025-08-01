import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Button from '../components/Button.vue'

const meta = {
  title: 'General/Button',
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
    label: 'Click me!',
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
    type: 'primary',
    label: 'Click me!',
  },
}
export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Click me!',
  },
}
export const Gray: Story = {
  args: {
    type: 'gray',
    label: 'Click me!',
  },
}
export const Info: Story = {
  args: {
    type: 'info',
    label: 'Click me!',
  },
}
export const Warning: Story = {
  args: {
    type: 'warning',
    label: 'Click me!',
  },
}
export const Black: Story = {
  args: {
    type: 'black',
    label: 'Click me!',
  },
}
export const Gold: Story = {
  args: {
    type: 'gold',
    label: 'Click me!',
  },
}
export const Error: Story = {
  args: {
    type: 'error',
    label: 'Click me!',
  },
}
export const Danger: Story = {
  args: {
    type: 'danger',
    label: 'Click me!',
  },
}
export const Sm: Story = {
  args: {
    size: 'sm',
    label: 'Click me!',
  },
}
export const Md: Story = {
  args: {
    size: 'md',
    label: 'Click me!',
  },
}
export const Lg: Story = {
  args: {
    size: 'lg',
    label: 'Click me!',
  },
}
