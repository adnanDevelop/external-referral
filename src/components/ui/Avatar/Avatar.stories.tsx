import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./index";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Image: Story = {
  args: {
    type: "image",
    imageProps: {
      src: "https://i.pravatar.cc/300",
      alt: "Avatar",
    },
  },
};
export const Placeholder: Story = {
  args: {
    type: "placeholder",
    placeholderProps: {
      placeholder: "JD",
    },
  },
};
