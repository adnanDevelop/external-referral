import type { Meta, StoryObj } from '@storybook/react';

import Select from './index';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    id: 'select',
    label: 'Select Label',
    name: 'select',
    value: 'select',
    children: (
      <>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </>
    ),
  },
};
