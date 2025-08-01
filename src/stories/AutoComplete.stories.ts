import type { Meta, StoryObj } from '@storybook/vue3-vite'

import AutoComplete from '../components/AutoComplete.vue'

const meta = {
  title: 'Data Entry/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'array', description: 'Property options of the AutoComplete' },
    sKey: { control: 'text', description: 'Select a property of option is Key' },
    sValue: { control: 'text', description: 'Select a property of option is Value' },
    title: { control: 'text', description: 'Property title of the AutoComplete' },
  },
  args: { sKey: 'key', sValue: 'value' },
} satisfies Meta<typeof AutoComplete>

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
  },
}
