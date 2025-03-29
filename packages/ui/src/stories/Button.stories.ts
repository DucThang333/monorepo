import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ButtonComponent } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: ButtonComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  argTypes: {
    // Optional argTypes to control the component's props in the Storybook UI. More info: https://storybook.js.org/docs/react/essentials/controls
    variant: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "link",
        "destructive",
      ],
      description: "Variant of the button",
    },
    size: {
      control: {
        type: "select",
      },
      options: ["default", "sm", "lg", "icon"],
    },
    isLoading: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    isLoading: false,
  },
};
