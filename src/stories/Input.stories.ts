import type { Meta, StoryObj } from '@storybook/vue3-vite';
    
    import Input from '../components/Input.vue'

    const meta = {
      title: 'Auto/Input',
      component: Input,
      tags: ['autodocs'],
      argTypes: {"value":{"control":"number","description":"Property value of the Input"},"classes":{"control":"text","description":"Classes of the Input"},"placeholder":{"control":"text","description":"Property placeholder of the Input"},"size":{"control":"select","options":["sm","md","lg"],"description":"Size of the Input"},"label":{"control":"text","description":"Label of the Input"},"labelInfo":{"control":"text","description":"Property labelInfo of the Input"},"questionInfo":{"control":"text","description":"Property questionInfo of the Input"},"isError":{"control":"boolean","description":"Property isError of the Input"},"isLink":{"control":"boolean","description":"Property isLink of the Input"},"message":{"control":"text","description":"Property message of the Input"},"id":{"control":"text","description":"Property id of the Input"},"disabled":{"control":"boolean","description":"Disabled state of the Input"},"allowClear":{"control":"boolean","description":"Property allowClear of the Input"},"isTextArea":{"control":"boolean","description":"Property isTextArea of the Input"},"rows":{"control":"number","description":"Property rows of the Input"},"useDebounce":{"control":"boolean","description":"Property useDebounce of the Input"},"require":{"control":"boolean","description":"Property require of the Input"},"isNumber":{"control":"boolean","description":"Property isNumber of the Input"}},
      args: {"classes":"","placeholder":"","size":"md","label":"","labelInfo":"","questionInfo":"","isError":false,"isLink":false,"message":"","id":"","disabled":false,"allowClear":false,"rows":2,"useDebounce":false,"require":false,"isNumber":false},
    } satisfies Meta<typeof Input>;

    export default meta;

    type Story = StoryObj<typeof meta>;

    export const Default: Story = {
    args: {"classes":"","placeholder":"","size":"md","label":"","labelInfo":"","questionInfo":"","isError":false,"isLink":false,"message":"","id":"","disabled":false,"allowClear":false,"rows":2,"useDebounce":false,"require":false,"isNumber":false},
  };
    
    export const Sm: Story = {
      args: {
        label: 'Input',
        size: 'sm',
        
      },
    };
export const Md: Story = {
      args: {
        label: 'Input',
        size: 'md',
        
      },
    };
export const Lg: Story = {
      args: {
        label: 'Input',
        size: 'lg',
        
      },
    };