import React from "react";
import type { Meta } from "@storybook/react";
import { 
  Check, 
  CreditCard, 
  Download, 
  Mail, 
  Plus, 
  Settings, 
  Trash,
  CalendarDays,
  Calendar
} from "lucide-react";
import { Button } from "@/components/Button";


export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      defaultValue: 'default',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      defaultValue: 'default',
    },
    isLoading: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean', 
      defaultValue: false,
    },
    className: { control: 'text' },
  },
} as Meta<typeof Button>;

// Showcase all button variants
export const Showcase = () => {
  return (
    <div className="space-y-8 p-6 bg-background rounded-lg border border-border w-[800px]">
      <h2 className="text-xl font-semibold">Button Component</h2>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="default">Default Size</Button>
            <Button size="sm">Small Size</Button>
            <Button size="lg">Large Size</Button>
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">With Icons</h3>
          <div className="flex flex-wrap gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
            <Button variant="secondary">
              <Settings className="mr-2 h-4 w-4" /> Settings
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">States</h3>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
            <Button isLoading variant="outline">Loading</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual configurable stories
export const Default = ({ 
  variant = 'default',
  size = 'default',
  disabled = false,
  isLoading = false,
  className = '',
}) => (
  <Button 
    variant={variant as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"}
    size={size as "default" | "sm" | "lg" | "icon"}
    disabled={disabled}
    isLoading={isLoading}
    className={className}
  >
    Button
  </Button>
);

export const WithIcon = ({ 
  variant = 'default',
  size = 'default',
}) => (
  <Button 
    variant={variant as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"}
    size={size as "default" | "sm" | "lg" | "icon"}
  >
    <Check className="mr-2 h-4 w-4" /> Accept
  </Button>
);

export const Destructive = () => (
  <Button variant="destructive">
    <Trash className="mr-2 h-4 w-4" /> Delete
  </Button>
);

export const Loading = () => (
  <Button isLoading>Processing...</Button>
);

export const IconButton = () => (
  <Button size="icon">
    <Calendar className="h-4 w-4" />
  </Button>
);

// Complex button group example
export const ButtonGroup = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-medium">Button Group Example</h3>
    <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 w-fit">
      <Button variant="ghost" className="rounded-sm px-3">
        <CreditCard className="mr-2 h-4 w-4" /> Pay Now
      </Button>
      <Button variant="ghost" className="rounded-sm px-3">
        Save
      </Button>
      <Button className="rounded-sm px-3">
        Submit
      </Button>
    </div>
  </div>
);
