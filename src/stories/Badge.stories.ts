import type { Meta, StoryObj } from '@storybook/vue3-vite';
    
    import Badge from '../components/Badge.vue'

    const meta = {
      title: 'Auto/Badge',
      component: Badge,
      tags: ['autodocs'],
      argTypes: {"count":{"control":"number","description":"Property count of the Badge"},"type":{"control":"select","options":["secondary","primary","positive","info","success","warning","error"],"description":"Type of the Badge"},"ghost":{"control":"boolean","description":"Ghost state of the Badge"},"dot":{"control":"boolean","description":"Property dot of the Badge"},"overflowCount":{"control":"number","description":"Property overflowCount of the Badge"},"size":{"control":"select","options":["sm","md"],"description":"Size of the Badge"},"showZero":{"control":"boolean","description":"Property showZero of the Badge"},"position":{"control":"text","description":"Property position of the Badge"},"minLength":{"control":"number","description":"Property minLength of the Badge"}},
      args: {"type":"primary","ghost":false,"dot":false,"size":"md","showZero":false,"minLength":1},
    } satisfies Meta<typeof Badge>;

    export default meta;

    type Story = StoryObj<typeof meta>;

    export const Default: Story = {
    args: {"count":1,"type":"primary","ghost":false,"dot":false,"size":"md","showZero":false,"minLength":1},
  };
    export const Secondary: Story = {
      args: {
        
        type: 'secondary',
        count: 1,
      },
    };
export const Primary: Story = {
      args: {
        
        type: 'primary',
        count: 1,
      },
    };
export const Positive: Story = {
      args: {
        
        type: 'positive',
        count: 1,
      },
    };
export const Info: Story = {
      args: {
        
        type: 'info',
        count: 1,
      },
    };
export const Success: Story = {
      args: {
        
        type: 'success',
        count: 1,
      },
    };
export const Warning: Story = {
      args: {
        
        type: 'warning',
        count: 1,
      },
    };
export const Error: Story = {
      args: {
        
        type: 'error',
        count: 1,
      },
    };
    export const Sm: Story = {
      args: {
        
        size: 'sm',
        count: 1,
      },
    };
export const Md: Story = {
      args: {
        
        size: 'md',
        count: 1,
      },
    };