import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Tabs from '../components/Tabs.vue'

const meta = {
  title: 'Auto/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'array', description: 'Property options of the Tabs' },
    sKey: { control: 'text', description: 'Select a property of option is Key' },
    sValue: { control: 'text', description: 'Select a property of option is Value' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Size of the Tabs' },
    isSizeTabDivideEqually: { control: 'boolean', description: 'Property isSizeTabDivideEqually of the Tabs' },
    maxHeight: { control: 'number', description: 'Property maxHeight of the Tabs' },
    bordered: { control: 'boolean', description: 'Property bordered of the Tabs' },
  },
  args: { sKey: 'key', sValue: 'value', size: 'md', isSizeTabDivideEqually: false, bordered: false },
} satisfies Meta<typeof Tabs>

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
    isSizeTabDivideEqually: false,
    bordered: false,
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
