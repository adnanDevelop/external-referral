import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './index';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: 'h-10 w-10',
  },
};
