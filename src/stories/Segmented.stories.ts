import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Segmented from '../components/Segmented.vue'

const meta = {
  title: 'Data Display/Segmented',
  component: Segmented,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Property value of the Segmented',
    },
    options: {
      control: 'array',
      description: 'Property options of the Segmented',
    },
    sKey: {
      control: 'text',
      description: 'Select a property of option is Key',
    },
    sValue: {
      control: 'text',
      description: 'Select a property of option is Value',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the Segmented',
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'primary_v2'],
      description: 'Type of the Segmented',
    },
    isToggle: {
      control: 'boolean',
      description: 'Property isToggle of the Segmented',
    },
    autoFit: {
      control: 'boolean',
      description: 'Property autoFit of the Segmented',
    },
  },
  args: {
    sKey: 'key',
    sValue: 'value',
    size: 'md',
    type: 'primary',
    isToggle: false,
    autoFit: false,
  },
} satisfies Meta<typeof Segmented>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
    sKey: 'key',
    sValue: 'value',
    size: 'md',
    type: 'primary',
    isToggle: false,
    autoFit: false,
  },
}
export const Primary: Story = {
  args: {
    type: 'primary',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
  },
}
export const Secondary: Story = {
  args: {
    type: 'secondary',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
  },
}
export const Primary_v2: Story = {
  args: {
    type: 'primary_v2',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
  },
}
export const Xs: Story = {
  args: {
    size: 'xs',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
  },
}
export const Sm: Story = {
  args: {
    size: 'sm',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
  },
}
export const Md: Story = {
  args: {
    size: 'md',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
  },
}
export const Lg: Story = {
  args: {
    size: 'lg',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
  },
}
