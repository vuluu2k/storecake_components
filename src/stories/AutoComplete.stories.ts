import type { Meta, StoryObj } from '@storybook/vue3-vite'

import AutoComplete from '../components/AutoComplete.vue'

const meta = {
  title: 'Auto/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'text', description: 'Property options of the AutoComplete' },
    sKey: { control: 'text', description: 'Property sKey of the AutoComplete' },
    sValue: { control: 'text', description: 'Property sValue of the AutoComplete' },
    title: { control: 'text', description: 'Property title of the AutoComplete' },
  },
  args: { sKey: 'key', sValue: 'value' },
} satisfies Meta<typeof AutoComplete>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { sKey: 'key', sValue: 'value' },
}
