import type { Meta, StoryObj } from '@storybook/react';

import Loader from './index';

const meta: Meta<typeof Loader> = {
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};

export const Sizexs: Story = {
  args: {
    size: 'xs',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'sm',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'md',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'lg',
  },
};
