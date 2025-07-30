import type { Meta, StoryObj } from '@storybook/vue3-vite';
    
    import Empty from '../components/Empty.vue'

    const meta = {
      title: 'Auto/Empty',
      component: Empty,
      tags: ['autodocs'],
      argTypes: {"size":{"control":"number","description":"Size of the Empty"},"label":{"control":"text","description":"Label of the Empty"}},
      args: {"size":97},
    } satisfies Meta<typeof Empty>;

    export default meta;

    type Story = StoryObj<typeof meta>;

    export const Default: Story = {
    args: {"size":97},
  };