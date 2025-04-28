import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/components/Switch";

const meta = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default-switch",
    label: "Default Switch",
  },
};

export const Checked: Story = {
  args: {
    id: "checked-switch",
    label: "Checked Switch",
    checked: true,
  },
};

export const Small: Story = {
  args: {
    id: "small-switch",
    label: "Small Switch",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    id: "medium-switch",
    label: "Medium Switch",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    id: "large-switch",
    label: "Large Switch",
    size: "lg",
  },
};

export const WithDescription: Story = {
  args: {
    id: "description-switch",
    label: "With Description",
    description: "This is a description for the switch",
  },
};

export const WithError: Story = {
  args: {
    id: "error-switch",
    label: "With Error",
    error: "Something went wrong",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-switch",
    label: "Disabled Switch",
    disabled: true,
  },
};
