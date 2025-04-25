import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@/components/Tabs";
import { 
  DefaultExample, 
  WithDefaultValueExample, 
  WithIconsExample, 
  WithDisabledTabExample, 
  CustomStylingExample, 
  AllTabsExample,
  basicItems
} from "./Tabs";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The initial active tab value",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the tabs container",
    },
    listClassName: {
      control: "text",
      description: "Additional CSS classes for the tabs list",
    },
    triggerClassName: {
      control: "text",
      description: "Additional CSS classes for individual tab triggers",
    },
    contentClassName: {
      control: "text",
      description: "Additional CSS classes for tab content panels",
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples as stories using the example components
export const Default: Story = {
  render: () => DefaultExample()
};

export const WithDefaultValue: Story = {
  render: () => WithDefaultValueExample()
};

export const WithIcons: Story = {
  args: { items: basicItems },
  render: () => WithIconsExample()
};

export const WithDisabledTab: Story = {
  args: { items: basicItems },
  render: () => WithDisabledTabExample()
};

export const CustomStyling: Story = {
  args: { items: basicItems },
  render: () => CustomStylingExample()
};

// Story that accepts args
export const WithArgs: Story = {
  args: {
    items: basicItems,
    defaultValue: "account",
    className: "max-w-md",
  },
};

// Complex demo
export const AllTabs: Story = {
  args: { items: basicItems },
  render: () => AllTabsExample(),
  parameters: {
    layout: "fullscreen",
  }
};
