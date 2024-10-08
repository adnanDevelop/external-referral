import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox',
  },
};
export const RightSideLabel: Story = {
  args: {
    label: 'Checkbox',
    labelSide: 'right',
  },
};
