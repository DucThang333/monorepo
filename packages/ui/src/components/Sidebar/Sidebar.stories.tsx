import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";

const meta: Meta<typeof Sidebar> = {
  title: "UI/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <Sidebar style={{ height: 300 }}>
      <div style={{ padding: 16 }}>Sidebar content</div>
    </Sidebar>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Sidebar collapsed style={{ height: 300 }}>
      <div style={{ padding: 16 }}>Should be hidden</div>
    </Sidebar>
  ),
};
