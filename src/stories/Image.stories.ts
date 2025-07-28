import type { Meta, StoryObj } from '@storybook/vue3-vite';
    
    import Image from '../components/Image.vue'

    const meta = {
      title: 'Auto/Image',
      component: Image,
      tags: ['autodocs'],
      argTypes: {"src":{"control":"text","description":"Property src of the Image"},"alt":{"control":"text","description":"Property alt of the Image"},"width":{"control":"number","description":"Property width of the Image"},"height":{"control":"number","description":"Property height of the Image"},"compressedType":{"control":"select","options":["webp","webp0"],"description":"Property compressedType of the Image"},"fixedSize":{"control":"boolean","description":"Property fixedSize of the Image"}},
      args: {"alt":"","compressedType":"webp","fixedSize":false},
    } satisfies Meta<typeof Image>;

    export default meta;

    type Story = StoryObj<typeof meta>;

    export const Default: Story = {
    args: {"alt":"","compressedType":"webp","fixedSize":false},
  };