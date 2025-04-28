import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Resizable } from ".";

const meta: Meta<typeof Resizable> = {
  title: "UI/Resizable",
  component: Resizable,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Resizable>;

export const Horizontal: Story = {
  render: () => (
    <Resizable direction="horizontal" style={{ height: 120, background: '#f5f5f5' }}>
      <div style={{ padding: 16 }}>Drag the right edge</div>
    </Resizable>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Resizable direction="vertical" style={{ width: 200, background: '#e0e0e0' }}>
      <div style={{ padding: 16 }}>Drag the bottom edge</div>
    </Resizable>
  ),
};
