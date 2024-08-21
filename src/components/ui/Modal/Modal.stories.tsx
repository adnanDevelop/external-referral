import type { Meta, StoryObj } from '@storybook/react';

import Modal from './index';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    id: 'modal',
    title: 'Modal Title',
    open: true,
    setOpen: () => {},
    children: 'Modal Content',
  },
};
export const NoTitle: Story = {
  args: {
    id: 'modal',
    open: true,
    setOpen: () => {},
    children: 'Modal Content',
  },
};
