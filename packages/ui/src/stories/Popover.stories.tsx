import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "@/components/Popover";
import { Button } from "@/components/Button";

const meta = {
  title: "Popover",
  component: Popover,
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
      description: "Alignment of the popover",
    },
    side: {
      control: {
        type: "select",
      },
      options: ["top", "right", "bottom", "left"],
      description: "Side the popover appears on",
    },
    modal: {
      control: { type: "boolean" },
      description: "Whether the popover should be modal",
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    trigger: <Button>Click me</Button>,
    content: (
      <div className="grid gap-4">
        <h4 className="font-medium leading-none">Popover Content</h4>
        <p className="text-sm text-muted-foreground">
          This is an example of a popover component.
        </p>
      </div>
    ),
    align: "center",
    side: "bottom",
    modal: false,
  },
};

export const TopPlacement: Story = {
  args: {
    trigger: <Button>Open Top</Button>,
    content: (
      <div className="grid gap-4">
        <h4 className="font-medium leading-none">Top Popover</h4>
        <p className="text-sm text-muted-foreground">
          This popover appears above the trigger.
        </p>
      </div>
    ),
    align: "center",
    side: "top",
    modal: false,
  },
};

export const LeftPlacement: Story = {
  args: {
    trigger: <Button>Open Left</Button>,
    content: (
      <div className="grid gap-4">
        <h4 className="font-medium leading-none">Left Popover</h4>
        <p className="text-sm text-muted-foreground">
          This popover appears to the left of the trigger.
        </p>
      </div>
    ),
    align: "center",
    side: "left",
    modal: false,
  },
};
