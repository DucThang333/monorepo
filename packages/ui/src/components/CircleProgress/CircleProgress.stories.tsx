import type { Meta, StoryObj } from "@storybook/react";
import { CircleProgress } from "@/components/CircleProgress";
import { useState, useEffect } from "react";

const meta = {
  title: "UI/CircleProgress",
  component: CircleProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 100 },
      description: "Current progress value",
    },
    max: {
      control: { type: "number", min: 1 },
      description: "Maximum progress value",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the progress circle",
    },
    showValue: {
      control: "boolean",
      description: "Whether to show the progress value",
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
      description: "Color of the progress circle",
    },
  },
} satisfies Meta<typeof CircleProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    value: 45,
    max: 100,
    size: "md",
    showValue: true,
    color: "primary",
  },
};

export const Small: Story = {
  args: {
    value: 25,
    max: 100,
    size: "sm",
    showValue: true,
  },
};

export const Medium: Story = {
  args: {
    value: 50,
    max: 100,
    size: "md",
    showValue: true,
  },
};

export const Large: Story = {
  args: {
    value: 75,
    max: 100,
    size: "lg",
    showValue: true,
  },
};

export const NoValue: Story = {
  args: {
    value: 60,
    showValue: false,
    size: "md",
  },
};

export const CustomMax: Story = {
  args: {
    value: 8,
    max: 10,
    showValue: true,
    size: "md",
  },
};

// Color variants
export const Primary: Story = {
  args: {
    value: 65,
    color: "primary",
    showValue: true,
  },
};

export const Secondary: Story = {
  args: {
    value: 65,
    color: "secondary",
    showValue: true,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    color: "success",
    showValue: true,
  },
};

export const Warning: Story = {
  args: {
    value: 80,
    color: "warning",
    showValue: true,
  },
};

export const Danger: Story = {
  args: {
    value: 25,
    color: "danger",
    showValue: true,
  },
};

// Animated progress demo
export const Animated = () => {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center gap-8">
      <CircleProgress value={value} showValue size="md" />
      <p className="text-sm text-muted-foreground">Animated progress: {value}%</p>
    </div>
  );
};

// Demo with all variations
export const AllVariations = () => {
  const sizes = ["sm", "md", "lg"];
  const colors = ["default", "primary", "secondary", "success", "warning", "danger"];
  
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Sizes</h3>
        <div className="flex flex-wrap items-center gap-8">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <CircleProgress 
                value={75} 
                size={size as any} 
                showValue
              />
              <span className="text-sm">{size}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Colors</h3>
        <div className="flex flex-wrap items-center gap-8">
          {colors.map((color) => (
            <div key={color} className="flex flex-col items-center gap-2">
              <CircleProgress 
                value={75} 
                color={color as any} 
                showValue
              />
              <span className="text-sm capitalize">{color}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Progress Values</h3>
        <div className="flex flex-wrap items-center gap-8">
          {[0, 25, 50, 75, 100].map((value) => (
            <div key={value} className="flex flex-col items-center gap-2">
              <CircleProgress 
                value={value} 
                showValue
              />
              <span className="text-sm">{value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
