import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Placeholder',
  },
};
export const Date: Story = {
  args: {
    label: 'Input',
    type: 'date',
  },
};
export const Disabled: Story = {
  args: {
    label: 'Input',
    disabled: true,
    placeholder: 'Disabled',
  },
};
export const Icon: Story = {
  args: {
    label: 'Input',
    icon: <span>Icon</span>,
    placeholder: 'With Icon',
  },
};
