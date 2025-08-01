import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Segment from '../components/Segment.vue'

const meta = {
  title: 'Data Display/Segment',
  component: Segment,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', description: 'Property value of the Segment' },
    options: { control: 'array', description: 'Property options of the Segment' },
    sKey: { control: 'text', description: 'Select a property of option is Key' },
    sValue: { control: 'text', description: 'Select a property of option is Value' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Size of the Segment' },
    isToggle: { control: 'boolean', description: 'Property isToggle of the Segment' },
  },
  args: { sKey: 'key', sValue: 'value', size: 'md', isToggle: false },
} satisfies Meta<typeof Segment>

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
    isToggle: false,
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
