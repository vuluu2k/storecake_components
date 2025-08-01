import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Popover from '../components/Popover.vue'

const meta = {
  title: 'Data Display/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'array', description: 'Property options of the Popover' },
    sKey: { control: 'text', description: 'Select a property of option is Key' },
    sValue: { control: 'text', description: 'Select a property of option is Value' },
    maxHeight: { control: 'number', description: 'Property maxHeight of the Popover' },
    minWidth: { control: 'number', description: 'Property minWidth of the Popover' },
    overlayStyle: { control: 'text', description: 'Property overlayStyle of the Popover' },
    useArrow: { control: 'boolean', description: 'Property useArrow of the Popover' },
    overlayClassName: { control: 'text', description: 'Property overlayClassName of the Popover' },
  },
  args: { sKey: 'key', sValue: 'value', useArrow: false, overlayClassName: '' },
} satisfies Meta<typeof Popover>

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
    useArrow: false,
    overlayClassName: '',
  },
}
