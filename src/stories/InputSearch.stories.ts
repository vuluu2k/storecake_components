import type { Meta, StoryObj } from '@storybook/vue3-vite'

import InputSearch from '../components/InputSearch.vue'

const meta = {
  title: 'Data Entry/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', description: 'Property value of the InputSearch' },
    useDebounce: { control: 'boolean', description: 'Property useDebounce of the InputSearch' },
    placeholder: { control: 'text', description: 'Property placeholder of the InputSearch' },
  },
  args: { value: '', useDebounce: false, placeholder: '' },
} satisfies Meta<typeof InputSearch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: '', useDebounce: false, placeholder: '' },
}
