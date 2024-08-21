import type { Meta, StoryObj } from '@storybook/react';

import Toggle from './index';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    id: 'toggle',
    label: 'Toggle Label',
  },
};

export const Checked: Story = {
  args: {
    id: 'toggle',
    label: 'Toggle Label',
    checked: true,
  },
};

export const RightLabel: Story = {
  args: {
    id: 'toggle',
    label: 'Toggle Label',
    labelSide: 'right',
  },
};
