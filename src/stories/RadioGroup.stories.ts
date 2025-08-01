import type { Meta, StoryObj } from '@storybook/vue3-vite'

import RadioGroup from '../components/RadioGroup.vue'

const meta = {
  title: 'Data Entry/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'array', description: 'Property options of the RadioGroup' },
    sKey: { control: 'text', description: 'Select a property of option is Key' },
    sValue: { control: 'text', description: 'Select a property of option is Value' },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Property direction of the RadioGroup',
    },
  },
  args: { sKey: 'key', sValue: 'value', direction: 'horizontal' },
} satisfies Meta<typeof RadioGroup>

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
    direction: 'horizontal',
  },
}
