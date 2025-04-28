import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from ".";

const meta: Meta<typeof Carousel> = {
  title: "UI/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel>
      <div style={{ background: '#f5f5f5', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Slide 1</div>
      <div style={{ background: '#e0e0e0', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Slide 2</div>
      <div style={{ background: '#d0d0d0', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Slide 3</div>
    </Carousel>
  ),
};
