import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, SkeletonText } from "../components/skeleton";

const meta = {
  title: "Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "card", "text", "avatar", "button", "input"],
      description: "Variant of the skeleton",
    },
    width: {
      control: "text",
      description: "Width of the skeleton (px or CSS value)",
    },
    height: {
      control: "text",
      description: "Height of the skeleton (px or CSS value)",
    },
    animated: {
      control: { type: "boolean" },
      description: "Whether the skeleton should have loading animation",
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    width: 200,
    height: 20,
    animated: true,
  },
};

export const Card: Story = {
  args: {
    variant: "card",
    animated: true,
  },
};

export const Avatar: Story = {
  args: {
    variant: "avatar",
    animated: true,
  },
};

export const Button: Story = {
  args: {
    variant: "button",
    animated: true,
  },
};

export const Input: Story = {
  args: {
    variant: "input",
    animated: true,
  },
};

export const TextLines: Story = {
  render: (args) => (
    <SkeletonText lines={3} lastLineWidth="60%" animated={args.animated} />
  ),
  args: {
    animated: true,
  },
};
