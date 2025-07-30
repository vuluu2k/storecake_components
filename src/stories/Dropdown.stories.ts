import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Dropdown from '../components/Dropdown.vue'

const meta = {
  title: 'Auto/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', description: 'Property value of the Dropdown' },
    options: { control: 'array', description: 'Property options of the Dropdown' },
    sKey: { control: 'text', description: 'Select a property of option is Key' },
    sValue: { control: 'text', description: 'Select a property of option is Value' },
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'contextmenu'],
      description: 'Property trigger of the Dropdown',
    },
    placement: {
      control: 'select',
      options: ['bottomLeft', 'bottom', 'bottomRight', 'topLeft', 'top', 'topRight'],
      description: 'Property placement of the Dropdown',
    },
    overlayStyle: { control: 'text', description: 'Property overlayStyle of the Dropdown' },
    extraItem: { control: 'text', description: 'Property extraItem of the Dropdown' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Size of the Dropdown' },
  },
  args: { value: '', sKey: 'key', sValue: 'value', placement: 'bottomLeft', size: 'md' },
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
    sKey: 'key',
    sValue: 'value',
    placement: 'bottomLeft',
    size: 'md',
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
