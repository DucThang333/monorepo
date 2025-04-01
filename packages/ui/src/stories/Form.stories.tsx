import type { Meta, StoryObj } from "@storybook/react";
import { FormDemo } from "./Form";

const meta = {
  title: "Form",
  component: FormDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (values) => console.log("Form submitted:", values),
  },
};
