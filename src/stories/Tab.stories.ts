import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Tab from '../components/Tab.vue'

const meta = {
  title: 'Auto/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Tab>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
