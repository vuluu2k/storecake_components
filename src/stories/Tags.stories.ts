import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Tags from '../components/Tags.vue'

const meta = {
  title: 'Auto/Tags',
  component: Tags,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Size of the Tags' },
    type: {
      control: 'select',
      options: ['secondary', 'primary', 'info', 'success', 'warning', 'error'],
      description: 'Type of the Tags',
    },
    bordered: { control: 'boolean', description: 'Property bordered of the Tags' },
    closable: { control: 'boolean', description: 'Property closable of the Tags' },
  },
  args: { size: 'md', type: 'primary', bordered: false, closable: false },
} satisfies Meta<typeof Tags>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 'md', type: 'primary', bordered: false, closable: false },
}
export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
}
export const Primary: Story = {
  args: {
    type: 'primary',
  },
}
export const Info: Story = {
  args: {
    type: 'info',
  },
}
export const Success: Story = {
  args: {
    type: 'success',
  },
}
export const Warning: Story = {
  args: {
    type: 'warning',
  },
}
export const Error: Story = {
  args: {
    type: 'error',
  },
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
