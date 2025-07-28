import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DatePicker from '../components/DatePicker.vue'

const meta = {
  title: 'Auto/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    classes: { control: 'text', description: 'Classes of the DatePicker' },
    value: { control: 'text', description: 'Property value of the DatePicker' },
  },
  args: { classes: '', value: '' },
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { classes: '', value: '' },
}
