import type { Meta, StoryObj } from '@storybook/react';

import Toast from './index';

const meta: Meta<typeof Toast> = {
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: 'This is a toast message',
  },
};

export const Success: Story = {
  args: {
    message: 'This is a success toast message',
    type: 'success',
  },
};

export const Error: Story = {
  args: {
    message: 'This is an error toast message',
    type: 'error',
  },
};
