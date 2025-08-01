import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Pagination from '../components/Pagination.vue'

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'], description: 'Size of the Pagination' },
    pageSizeOptions: { control: 'array', description: 'Property pageSizeOptions of the Pagination' },
    showSizeChanger: { control: 'boolean', description: 'Property showSizeChanger of the Pagination' },
    total: { control: 'number', description: 'Property total of the Pagination' },
    pageSize: { control: 'number', description: 'Property pageSize of the Pagination' },
    current: { control: 'number', description: 'Property current of the Pagination' },
    attrs: { control: 'text', description: 'Property attrs of the Pagination' },
  },
  args: { size: 'sm', total: 10, pageSize: 10, current: 1 },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 'sm', total: 10, pageSize: 10, current: 1 },
}

export const Sm: Story = {
  args: {
    size: 'sm',
  },
}
export const Md: Story = {
  args: {
    size: 'md',
  },
}
