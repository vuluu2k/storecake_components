import type { Meta, StoryObj } from '@storybook/vue3-vite'

import InputPhoneCountry from '../components/InputPhoneCountry.vue'

const meta = {
  title: 'Data Entry/InputPhoneCountry',
  component: InputPhoneCountry,
  tags: ['autodocs'],
  argTypes: { countryValue: { control: 'text', description: 'Property countryValue of the InputPhoneCountry' } },
  args: { countryValue: 'VN' },
} satisfies Meta<typeof InputPhoneCountry>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { countryValue: 'VN' },
}
