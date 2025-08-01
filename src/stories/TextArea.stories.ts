import type { Meta, StoryObj } from '@storybook/vue3-vite'

import TextArea from '../components/TextArea.vue'

const meta = {
  title: 'Data Entry/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', description: 'Property value of the TextArea' },
    classes: { control: 'text', description: 'Classes of the TextArea' },
    placeholder: { control: 'text', description: 'Property placeholder of the TextArea' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Size of the TextArea' },
    label: { control: 'text', description: 'Label of the TextArea' },
    labelInfo: { control: 'text', description: 'Property labelInfo of the TextArea' },
    questionInfo: { control: 'text', description: 'Property questionInfo of the TextArea' },
    isError: { control: 'boolean', description: 'Property isError of the TextArea' },
    isLink: { control: 'boolean', description: 'Property isLink of the TextArea' },
    message: { control: 'text', description: 'Property message of the TextArea' },
    id: { control: 'text', description: 'Property id of the TextArea' },
    disabled: { control: 'boolean', description: 'Disabled state of the TextArea' },
    allowClear: { control: 'boolean', description: 'Property allowClear of the TextArea' },
    useDebounce: { control: 'boolean', description: 'Property useDebounce of the TextArea' },
  },
  args: {
    classes: '',
    placeholder: '',
    size: 'md',
    label: '',
    labelInfo: '',
    questionInfo: '',
    isError: false,
    isLink: false,
    message: '',
    id: '',
    disabled: false,
    allowClear: false,
    useDebounce: false,
  },
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    classes: '',
    placeholder: '',
    size: 'md',
    label: '',
    labelInfo: '',
    questionInfo: '',
    isError: false,
    isLink: false,
    message: '',
    id: '',
    disabled: false,
    allowClear: false,
    useDebounce: false,
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
