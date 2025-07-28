import type { Meta, StoryObj } from '@storybook/vue3-vite'

import AutoComplete from '../components/AutoComplete.vue'

const meta = {
  title: 'Auto/AutoComplete',
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
  args: { sKey: 'key', sValue: 'value' },
}
