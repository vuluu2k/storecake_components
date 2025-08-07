import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Radio from '../components/Radio.vue'

const meta = {
  title: 'Data Entry/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label of the Radio' },
    subLabel: {
      control: 'text',
      description: 'Property subLabel of the Radio',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the Radio',
    },
  },
  args: { disabled: false },
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { disabled: false },
}
