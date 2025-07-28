import type { Meta, StoryObj } from '@storybook/vue3-vite'

import CheckboxGroup from '../components/CheckboxGroup.vue'

const meta = {
  title: 'Auto/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'array', description: 'Property value of the CheckboxGroup' },
    options: { control: 'array', description: 'Property options of the CheckboxGroup' },
    sKey: { control: 'text', description: 'Select a property of option is Key' },
    sValue: { control: 'text', description: 'Select a property of option is Value' },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Property direction of the CheckboxGroup',
    },
    useAll: { control: 'boolean', description: 'Property useAll of the CheckboxGroup' },
  },
  args: { sKey: 'key', sValue: 'value', direction: 'horizontal', useAll: false },
} satisfies Meta<typeof CheckboxGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { sKey: 'key', sValue: 'value', direction: 'horizontal', useAll: false },
}
