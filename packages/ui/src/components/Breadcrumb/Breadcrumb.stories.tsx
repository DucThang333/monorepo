import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from ".";

const meta: Meta<typeof Breadcrumb> = {
  title: "UI/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <span>Home</span>
      <span>Library</span>
      <span>Data</span>
    </Breadcrumb>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumb separator={">"}>
      <span>Dashboard</span>
      <span>Settings</span>
      <span>Profile</span>
    </Breadcrumb>
  ),
};
