import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Table from '../components/Table.vue'

const meta = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    height: { control: 'number', description: 'Property height of the Table' },
    columnHeight: {
      control: 'number',
      description: 'Property columnHeight of the Table',
    },
    rowSelection: {
      control: 'text',
      description: 'Property rowSelection of the Table',
    },
    columns: { control: 'array', description: 'Property columns of the Table' },
    loading: { control: 'boolean', description: 'Loading state of the Table' },
    classes: { control: 'text', description: 'Classes of the Table' },
    emptyLabel: {
      control: 'text',
      description: 'Property emptyLabel of the Table',
    },
    bodyHeight: {
      control: 'number',
      description: 'Property bodyHeight of the Table',
    },
    bordered: {
      control: 'boolean',
      description: 'Property bordered of the Table',
    },
    headerColor: {
      control: 'text',
      description: 'Property headerColor of the Table',
    },
    isHasTabs: {
      control: 'boolean',
      description: 'Property isHasTabs of the Table',
    },
    scroll: { control: 'text', description: 'Property scroll of the Table' },
    headerColorV2: {
      control: 'boolean',
      description: 'Property headerColorV2 of the Table',
    },
    minHeight: {
      control: 'number',
      description: 'Property minHeight of the Table',
    },
  },
  args: {
    loading: false,
    classes: '',
    bordered: true,
    isHasTabs: false,
    headerColorV2: false,
  },
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    loading: false,
    classes: '',
    bordered: true,
    isHasTabs: false,
    headerColorV2: false,
  },
}
