import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard } from "../components/hoverCard";
import { Button } from "@/components/button";
import { Avatar } from "../components/avatar";

const meta = {
  title: "HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: {
        type: "select",
      },
      options: ["start", "center", "end"],
      description: "Alignment of the hover card",
    },
    side: {
      control: {
        type: "select",
      },
      options: ["top", "right", "bottom", "left"],
      description: "Side the hover card appears on",
    },
    openDelay: {
      control: { type: "number" },
      description: "Delay in ms before the hover card opens",
    },
    closeDelay: {
      control: { type: "number" },
      description: "Delay in ms before the hover card closes",
    },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    trigger: <Button variant="outline">Hover over me</Button>,
    content: (
      <div className="p-4 space-y-2">
        <h4 className="text-sm font-semibold">Hover Card</h4>
        <p className="text-sm">This is a hover card component example.</p>
      </div>
    ),
    align: "center",
    side: "bottom",
    openDelay: 300,
    closeDelay: 200,
  },
};

export const UserProfile: Story = {
  args: {
    trigger: <Button variant="ghost">@johndoe</Button>,
    content: (
      <div className="flex space-x-4 p-4">
        <Avatar className="h-12 w-12">
          <div className="bg-blue-500 h-full w-full flex items-center justify-center text-white">
            JD
          </div>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">John Doe</h4>
          <p className="text-xs">Software Developer at Acme Corp</p>
          <div className="flex items-center pt-2">
            <span className="text-xs text-muted-foreground">
              Joined April 2023
            </span>
          </div>
        </div>
      </div>
    ),
    align: "start",
    side: "right",
    openDelay: 300,
    closeDelay: 200,
  },
};

export const CustomDelays: Story = {
  args: {
    trigger: <Button>Quick hover</Button>,
    content: (
      <div className="p-4">
        <h4 className="text-sm font-semibold">Fast hover card</h4>
        <p className="text-sm">Opens quickly, closes slowly</p>
      </div>
    ),
    align: "center",
    side: "bottom",
    openDelay: 100,
    closeDelay: 500,
  },
};
