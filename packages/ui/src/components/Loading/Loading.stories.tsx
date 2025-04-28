import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "@/components/Loading";
import { useState, useEffect } from "react";

const meta = {
  title: "UI/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the loading spinner",
    },
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "destructive"],
      description: "Color variant of the loading spinner",
    },
    label: {
      control: "text",
      description: "Optional label text to display below the spinner",
    },
    fullPage: {
      control: "boolean",
      description: "Whether to display as a full page overlay",
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Loading...",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Loading...",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Loading...",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Loading...",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    label: "Loading...",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Loading...",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Loading...",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    label: "Loading...",
  },
};

export const FullPage: Story = {
  args: {
    fullPage: true,
    size: "lg",
    label: "Please wait...",
  },
  parameters: {
    layout: "fullscreen",
  },
};

// Demo component showing loading in action
const LoadingDemoComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center p-8 border rounded-md">
      {isLoading ? (
        <Loading label="Loading content..." />
      ) : (
        <div className="text-center">
          <p className="text-xl font-medium">Content loaded!</p>
          <p className="text-muted-foreground">Loading indicator has been replaced with content</p>
        </div>
      )}
    </div>
  );
};

export const Interactive: Story = {
  render: () => <LoadingDemoComponent />,
};
