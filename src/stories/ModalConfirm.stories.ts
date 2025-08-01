import type { Meta, StoryObj } from '@storybook/vue3-vite'

import ModalConfirm from '../components/ModalConfirm.vue'

const meta = {
  title: 'Auto/ModalConfirm',
  component: ModalConfirm,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Property title of the ModalConfirm' },
    content: { control: 'text', description: 'Property content of the ModalConfirm' },
    visible: { control: 'boolean', description: 'Property visible of the ModalConfirm' },
    type: {
      control: 'select',
      options: ['primary', 'warning', 'info', 'error', 'danger'],
      description: 'Type of the ModalConfirm',
    },
    danger: { control: 'boolean', description: 'Danger state of the ModalConfirm' },
    okText: { control: 'text', description: 'Property okText of the ModalConfirm' },
    cancelText: { control: 'text', description: 'Property cancelText of the ModalConfirm' },
    confirmLoading: { control: 'boolean', description: 'Property confirmLoading of the ModalConfirm' },
  },
  args: { visible: false, type: 'primary', danger: false, okText: '', cancelText: '', confirmLoading: false },
} satisfies Meta<typeof ModalConfirm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { visible: false, type: 'primary', danger: false, okText: '', cancelText: '', confirmLoading: false },
}
export const Primary: Story = {
  args: {
    type: 'primary',
  },
}
export const Warning: Story = {
  args: {
    type: 'warning',
  },
}
export const Info: Story = {
  args: {
    type: 'info',
  },
}
export const Error: Story = {
  args: {
    type: 'error',
  },
}
export const Danger: Story = {
  args: {
    type: 'danger',
  },
}
