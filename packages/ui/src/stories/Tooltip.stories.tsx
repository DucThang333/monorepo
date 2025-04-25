import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";
import { Info, HelpCircle, Settings, Bell, User } from "lucide-react";

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "Content to show in the tooltip",
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "Side of the trigger to show the tooltip",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alignment of the tooltip relative to the trigger",
    },
    delayDuration: {
      control: "number",
      description: "Delay in milliseconds before showing the tooltip",
    },
    disabled: {
      control: "boolean",
      description: "When true, tooltip will not be shown",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    content: "This is a tooltip",
    children: <Button>Hover me</Button>,
  },
};

export const WithIcon: Story = {
  args: {
    content: "More information",
    children: (
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
        <Info className="h-4 w-4" />
      </span>
    ),
  },
};

export const SideTop: Story = {
  args: {
    content: "Top tooltip",
    side: "top",
    children: <Button>Top</Button>,
  },
};

export const SideRight: Story = {
  args: {
    content: "Right tooltip",
    side: "right",
    children: <Button>Right</Button>,
  },
};

export const SideBottom: Story = {
  args: {
    content: "Bottom tooltip",
    side: "bottom",
    children: <Button>Bottom</Button>,
  },
};

export const SideLeft: Story = {
  args: {
    content: "Left tooltip",
    side: "left",
    children: <Button>Left</Button>,
  },
};

export const AlignStart: Story = {
  args: {
    content: "Aligned to start",
    align: "start",
    children: <Button>Align Start</Button>,
  },
};

export const AlignCenter: Story = {
  args: {
    content: "Aligned to center",
    align: "center",
    children: <Button>Align Center</Button>,
  },
};

export const AlignEnd: Story = {
  args: {
    content: "Aligned to end",
    align: "end",
    children: <Button>Align End</Button>,
  },
};

export const NoDelay: Story = {
  args: {
    content: "Immediate tooltip",
    delayDuration: 0,
    children: <Button>No Delay</Button>,
  },
};

export const LongDelay: Story = {
  args: {
    content: "Wait for it...",
    delayDuration: 1000,
    children: <Button>Long Delay (1s)</Button>,
  },
};

export const Disabled: Story = {
  args: {
    content: "You won't see this",
    disabled: true,
    children: <Button>Disabled Tooltip</Button>,
  },
};

// Demo with all variations
export const AllVariations = () => {
  const sides = ["top", "right", "bottom", "left"];
  const icons = [
    { icon: <Info className="h-4 w-4" />, name: "Info" },
    { icon: <HelpCircle className="h-4 w-4" />, name: "Help" },
    { icon: <Settings className="h-4 w-4" />, name: "Settings" },
    { icon: <Bell className="h-4 w-4" />, name: "Notifications" },
    { icon: <User className="h-4 w-4" />, name: "User" },
  ];
  
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Button Tooltips</h3>
        <div className="flex flex-wrap items-center gap-4">
          {sides.map((side) => (
            <Tooltip 
              key={side} 
              content={`Tooltip on ${side}`}
              side={side as any}
            >
              <Button variant="outline" size="sm">
                {side.charAt(0).toUpperCase() + side.slice(1)}
              </Button>
            </Tooltip>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Icon Tooltips</h3>
        <div className="flex flex-wrap items-center gap-4">
          {icons.map((item, index) => (
            <Tooltip 
              key={index} 
              content={item.name}
              side={sides[index % sides.length] as any}
            >
              <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                {item.icon}
              </span>
            </Tooltip>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Rich Content</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip 
            content={
              <div className="flex max-w-xs flex-col space-y-1 text-sm">
                <p className="font-semibold">Profile Settings</p>
                <p className="text-muted-foreground">
                  Manage your account settings and preferences.
                </p>
              </div>
            }
          >
            <Button>Rich Tooltip</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
