import type { Meta, StoryObj } from '@storybook/vue3-vite';
    
    import Status from '../components/Status.vue'

    const meta = {
      title: 'Auto/Status',
      component: Status,
      tags: ['autodocs'],
      argTypes: {"type":{"control":"select","options":["success","secondary","info","warning","error"],"description":"Type of the Status"},"size":{"control":"number","description":"Size of the Status"}},
      args: {"type":"success","size":8},
    } satisfies Meta<typeof Status>;

    export default meta;

    type Story = StoryObj<typeof meta>;

    export const Default: Story = {
    args: {"type":"success","size":8},
  };
    export const Success: Story = {
      args: {
        type: 'success',
        
      },
    };
export const Secondary: Story = {
      args: {
        type: 'secondary',
        
      },
    };
export const Info: Story = {
      args: {
        type: 'info',
        
      },
    };
export const Warning: Story = {
      args: {
        type: 'warning',
        
      },
    };
export const Error: Story = {
      args: {
        type: 'error',
        
      },
    };