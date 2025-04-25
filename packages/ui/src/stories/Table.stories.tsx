import type { Meta, StoryObj } from "@storybook/react";
import { TableDemo } from "./Table";

const meta = {
  title: "UI/Table",
  component: TableDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    pageSize: {
      control: { type: "number" },
      description: "Number of rows per page",
    },
    enablePagination: {
      control: { type: "boolean" },
      description: "Whether to enable pagination controls",
    },
  },
} satisfies Meta<typeof TableDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageSize: 10,
    enablePagination: true,
  },
};

export const WithoutPagination: Story = {
  args: {
    enablePagination: false,
  },
};
