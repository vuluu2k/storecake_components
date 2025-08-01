import type { Meta, StoryObj } from '@storybook/vue3-vite'

import SelectOption from '../components/SelectOption.vue'

const meta = {
  title: 'Data Entry/SelectOption',
  component: SelectOption,
  tags: ['autodocs'],
  argTypes: {
    key: { control: 'number', description: 'Property key of the SelectOption' },
    value: { control: 'number', description: 'Property value of the SelectOption' },
    label: { control: 'number', description: 'Label of the SelectOption' },
    title: { control: 'number', description: 'Property title of the SelectOption' },
  },
  args: {},
} satisfies Meta<typeof SelectOption>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
