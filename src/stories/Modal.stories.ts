import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Modal from '../components/Modal.vue'

const meta = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Property title of the Modal' },
    visible: {
      control: 'boolean',
      description: 'Property visible of the Modal',
    },
    cancelText: {
      control: 'text',
      description: 'Property cancelText of the Modal',
    },
    okText: { control: 'text', description: 'Property okText of the Modal' },
    confirmLoading: {
      control: 'boolean',
      description: 'Property confirmLoading of the Modal',
    },
    centered: {
      control: 'boolean',
      description: 'Property centered of the Modal',
    },
    hiddenCancel: {
      control: 'boolean',
      description: 'Property hiddenCancel of the Modal',
    },
    hiddenOk: {
      control: 'boolean',
      description: 'Property hiddenOk of the Modal',
    },
    okButtonProps: {
      control: 'text',
      description: 'Property okButtonProps of the Modal',
    },
    cancelButtonProps: {
      control: 'text',
      description: 'Property cancelButtonProps of the Modal',
    },
  },
  args: {
    title: '',
    visible: false,
    cancelText: '',
    okText: '',
    confirmLoading: false,
    centered: false,
    hiddenCancel: false,
    hiddenOk: false,
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '',
    visible: false,
    cancelText: '',
    okText: '',
    confirmLoading: false,
    centered: false,
    hiddenCancel: false,
    hiddenOk: false,
  },
}
