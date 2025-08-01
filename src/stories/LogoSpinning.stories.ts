import type { Meta, StoryObj } from '@storybook/vue3-vite'

import LogoSpinning from '../components/LogoSpinning.vue'

const meta = {
  title: 'Auto/LogoSpinning',
  component: LogoSpinning,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean', description: 'Loading state of the LogoSpinning' },
    size: { control: 'number', description: 'Size of the LogoSpinning' },
  },
  args: { loading: false, size: 36 },
} satisfies Meta<typeof LogoSpinning>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { loading: false, size: 36 },
}
