import type { Meta, StoryObj } from '@storybook/vue3-vite';
    
    import Avatar from '../components/Avatar.vue'

    const meta = {
      title: 'Auto/Avatar',
      component: Avatar,
      tags: ['autodocs'],
      argTypes: {"src":{"control":"text","description":"Property src of the Avatar"},"size":{"control":"number","description":"Size of the Avatar"},"icon":{"control":"text","description":"Property icon of the Avatar"},"online":{"control":"boolean","description":"Property online of the Avatar"},"useOnline":{"control":"boolean","description":"Property useOnline of the Avatar"},"boxShadow":{"control":"boolean","description":"Property boxShadow of the Avatar"}},
      args: {"src":"","size":32,"icon":"","online":false,"useOnline":false,"boxShadow":false},
    } satisfies Meta<typeof Avatar>;

    export default meta;

    type Story = StoryObj<typeof meta>;

    export const Default: Story = {
    args: {"src":"","size":32,"icon":"","online":false,"useOnline":false,"boxShadow":false},
  };