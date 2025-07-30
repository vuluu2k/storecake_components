import type { Meta, StoryObj } from '@storybook/vue3-vite';
    
    import InputMoney from '../components/InputMoney.vue'

    const meta = {
      title: 'Auto/InputMoney',
      component: InputMoney,
      tags: ['autodocs'],
      argTypes: {"value":{"control":"number","description":"Property value of the InputMoney"},"size":{"control":"select","options":["xs","sm","md","lg","xl"],"description":"Size of the InputMoney"},"suffix":{"control":"text","description":"Property suffix of the InputMoney"},"currency":{"control":"text","description":"Property currency of the InputMoney"},"classes":{"control":"text","description":"Classes of the InputMoney"},"useDebounce":{"control":"boolean","description":"Property useDebounce of the InputMoney"},"require":{"control":"boolean","description":"Property require of the InputMoney"}},
      args: {"value":0,"size":"md","suffix":"","currency":"VND","classes":"","useDebounce":false,"require":false},
    } satisfies Meta<typeof InputMoney>;

    export default meta;

    type Story = StoryObj<typeof meta>;

    export const Default: Story = {
    args: {"value":0,"size":"md","suffix":"","currency":"VND","classes":"","useDebounce":false,"require":false},
  };
    
    export const Xs: Story = {
      args: {
        size: 'xs',
        
      },
    };
export const Sm: Story = {
      args: {
        size: 'sm',
        
      },
    };
export const Md: Story = {
      args: {
        size: 'md',
        
      },
    };
export const Lg: Story = {
      args: {
        size: 'lg',
        
      },
    };
export const Xl: Story = {
      args: {
        size: 'xl',
        
      },
    };