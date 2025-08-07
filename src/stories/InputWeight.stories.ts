import type { Meta, StoryObj } from '@storybook/vue3-vite'

import InputWeight from '../components/InputWeight.vue'

const meta = {
  title: 'Data Entry/InputWeight',
  component: InputWeight,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Property value of the InputWeight',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the InputWeight',
    },
    classes: { control: 'text', description: 'Classes of the InputWeight' },
  },
  args: { value: 0, size: 'md', classes: '' },
} satisfies Meta<typeof InputWeight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 0, size: 'md', classes: '' },
}

export const Xs: Story = {
  args: {
    size: 'xs',
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
export const Xl: Story = {
  args: {
    size: 'xl',
  },
}
