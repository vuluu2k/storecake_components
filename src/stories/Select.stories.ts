import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Select from '../components/Select.vue'

const meta = {
  title: 'Data Entry/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Property title of the Select' },
    value: { control: 'number', description: 'Property value of the Select' },
    options: {
      control: 'array',
      description: 'Property options of the Select',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the Select',
    },
    sKey: {
      control: 'text',
      description: 'Select a property of option is Key',
    },
    sValue: {
      control: 'text',
      description: 'Select a property of option is Value',
    },
    useNone: {
      control: 'boolean',
      description: 'Property useNone of the Select',
    },
    mode: {
      control: 'select',
      options: ['multiple', 'single', 'tags'],
      description: 'Property mode of the Select',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the Select',
    },
    sShow: { control: 'text', description: 'Property sShow of the Select' },
    dropdownClassName: {
      control: 'text',
      description: 'Property dropdownClassName of the Select',
    },
    questionInfo: {
      control: 'text',
      description: 'Property questionInfo of the Select',
    },
    loading: { control: 'boolean', description: 'Loading state of the Select' },
  },
  args: {
    title: '',
    size: 'md',
    sKey: 'key',
    sValue: 'value',
    useNone: true,
    mode: 'single',
    disabled: false,
    loading: false,
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
    size: 'md',
    sKey: 'key',
    sValue: 'value',
    useNone: true,
    mode: 'single',
    disabled: false,
    loading: false,
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
