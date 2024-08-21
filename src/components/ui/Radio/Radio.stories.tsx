import type { Meta, StoryObj } from '@storybook/react';

import Radio from './index';

const meta: Meta<typeof Radio> = {
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    id: 'radio',
    label: 'Radio Label',
    name: 'radio',
    value: 'radio',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    id: 'radio',
    label: 'Radio Label',
    name: 'radio',
    value: 'radio',
    checked: true,
    wrapperClassName: 'w-96 bg-[#E8E8E8]',
  },
};

export const LeftLabel: Story = {
  args: {
    id: 'radio',
    label: 'Radio Label',
    name: 'radio',
    value: 'radio',
    checked: false,
    labelSide: 'left',
  },
};
