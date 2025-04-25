import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "@/components/RadioGroup";

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation of the radio group",
    },
    disabled: {
      control: "boolean",
      description: "Whether the entire radio group is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether a selection is required",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample options
const fruitOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
];

const planOptions = [
  {
    value: "free",
    label: "Free",
    description: "Basic features, up to 5 projects",
  },
  {
    value: "pro",
    label: "Pro",
    description: "Advanced features, up to 20 projects",
  },
  {
    value: "enterprise",
    label: "Enterprise",
    description: "All features, unlimited projects, priority support",
  },
];

// Basic examples
export const Default: Story = {
  args: {
    options: fruitOptions,
    defaultValue: "apple",
    orientation: "vertical",
  },
};

export const Horizontal: Story = {
  args: {
    options: fruitOptions,
    defaultValue: "banana",
    orientation: "horizontal",
  },
};

export const WithDescriptions: Story = {
  args: {
    options: planOptions,
    defaultValue: "pro",
    orientation: "vertical",
  },
};

export const Disabled: Story = {
  args: {
    options: fruitOptions,
    defaultValue: "apple",
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana", disabled: true },
      { value: "orange", label: "Orange" },
      { value: "grape", label: "Grape" },
    ],
    defaultValue: "apple",
  },
};

export const Required: Story = {
  args: {
    options: fruitOptions,
    defaultValue: "apple",
    required: true,
  },
};

// Interactive examples
export const Interactive = () => {
  const [value, setValue] = useState("apple");

  return (
    <div className="w-full max-w-md space-y-4">
      <RadioGroup
        options={fruitOptions}
        value={value}
        onValueChange={setValue}
      />
      
      <div className="text-sm text-muted-foreground">
        Selected fruit: <span className="font-medium">{value}</span>
      </div>
    </div>
  );
};

export const PlanSelector = () => {
  const [plan, setPlan] = useState("free");

  const getPlanDetails = () => {
    switch (plan) {
      case "free":
        return {
          price: "$0",
          projects: 5,
          features: ["Basic analytics", "1GB storage", "Email support"],
        };
      case "pro":
        return {
          price: "$29",
          projects: 20,
          features: ["Advanced analytics", "10GB storage", "Priority email support", "API access"],
        };
      case "enterprise":
        return {
          price: "$99",
          projects: "Unlimited",
          features: ["Custom analytics", "Unlimited storage", "24/7 phone support", "API access", "Custom integrations"],
        };
      default:
        return { price: "$0", projects: 0, features: [] };
    }
  };

  const details = getPlanDetails();

  return (
    <div className="w-full max-w-lg space-y-6">
      <h3 className="text-lg font-medium">Choose a plan</h3>
      
      <RadioGroup
        options={planOptions}
        value={plan}
        onValueChange={setPlan}
      />
      
      <div className="rounded-md border p-4 mt-4">
        <h4 className="text-md font-medium">Selected Plan: {planOptions.find(p => p.value === plan)?.label}</h4>
        <p className="text-lg font-bold">{details.price}/month</p>
        <p className="text-sm text-muted-foreground">Up to {details.projects} projects</p>
        
        <h5 className="text-sm font-medium mt-4 mb-2">Features:</h5>
        <ul className="text-sm space-y-1">
          {details.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// All RadioGroup Variations
export const AllVariations = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl">
      {/* Basic Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Basic Options (Vertical)</h3>
        <RadioGroup
          options={fruitOptions}
          defaultValue="apple"
          orientation="vertical"
        />
      </div>
      
      {/* Horizontal Layout */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Horizontal Layout</h3>
        <RadioGroup
          options={fruitOptions}
          defaultValue="apple"
          orientation="horizontal"
        />
      </div>
      
      {/* With Descriptions */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">With Descriptions</h3>
        <RadioGroup
          options={planOptions}
          defaultValue="pro"
          orientation="vertical"
        />
      </div>
      
      {/* Disabled States */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Disabled States</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-medium mb-2">Entire Group Disabled</h4>
            <RadioGroup
              options={fruitOptions.slice(0, 3)}
              defaultValue="apple"
              disabled
            />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">One Option Disabled</h4>
            <RadioGroup
              options={[
                { value: "apple", label: "Apple" },
                { value: "banana", label: "Banana", disabled: true },
                { value: "orange", label: "Orange" },
              ]}
              defaultValue="apple"
            />
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Custom Styles</h3>
        <RadioGroup
          options={[
            { value: "light", label: "Light Theme" },
            { value: "dark", label: "Dark Theme" },
            { value: "system", label: "System Default" },
          ]}
          defaultValue="system"
          className="bg-muted p-4 rounded-md"
        />
      </div>
    </div>
  );
};
