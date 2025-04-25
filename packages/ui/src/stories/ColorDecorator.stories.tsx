import type { Meta, StoryObj } from "@storybook/react";
import { ColorDecorator } from "./ColorDecorator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Color Decorator",
  component: ColorDecorator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  argTypes: {
    // Optional argTypes to control the component's props in the Storybook UI. More info: https://storybook.js.org/docs/react/essentials/controls
    primary: {
      control: { type: "color" },
      description: "Primary color for the component",
    },
    primaryLight: {
      control: { type: "color" },
      description: "Primary light color for the component",
    },
    primaryDark: {
      control: { type: "color" },
      description: "Primary dark color for the component",
    },
    primaryForeground: {
      control: { type: "color" },
      description:
        "Primary foreground (useful when something inside the component needs to match the primary color) color for the component",
    },
    secondary: {
      control: { type: "color" },
      description: "Secondary color for the component",
    },
    secondaryLight: {
      control: { type: "color" },
      description: "Secondary light color for the component",
    },
    secondaryDark: {
      control: { type: "color" },
      description: "Secondary dark color for the component",
    },
    secondaryForeground: {
      control: { type: "color" },
      description:
        "Secondary foreground color (useful when something inside the component needs to match the primary color) for the component",
    },
    accent: {
      control: { type: "color" },
      description: "Accent color for the component",
    },
    accentLight: {
      control: { type: "color" },
      description: "Accent light color for the component",
    },
    accentDark: {
      control: { type: "color" },
      description: "Accent dark color for the component",
    },
    accentForeground: {
      control: { type: "color" },
      description:
        "Accent foreground color (useful when something inside the component needs to match the primary color) for the component",
    },
    destructive: {
      control: { type: "color" },
      description: "Destructive color for the component",
    },
    destructiveLight: {
      control: { type: "color" },
      description: "Destructive light color for the component",
    },
    destructiveDark: {
      control: { type: "color" },
      description: "Destructive dark color for the component",
    },
    destructiveForeground: {
      control: { type: "color" },
      description:
        "Destructive foreground color (useful when something inside the component needs to match the primary color) for the component",
    },
    background: {
      control: { type: "color" },
      description: "Background color for the component",
    },
  },
} satisfies Meta<typeof ColorDecorator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
