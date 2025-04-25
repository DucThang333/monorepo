import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@/components/Select";

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Text displayed when no option is selected",
    },
    options: {
      control: "object",
      description: "Array of options with value, label, and optional disabled property",
    },
    label: {
      control: "text",
      description: "Label text displayed above the select",
    },
    error: {
      control: "text",
      description: "Error message displayed below the select",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
    },
    defaultValue: {
      control: "text",
      description: "Initially selected value",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample options
const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "br", label: "Brazil" },
  { value: "ar", label: "Argentina" },
  { value: "co", label: "Colombia" },
  { value: "pe", label: "Peru" },
  { value: "cl", label: "Chile" },
];

const fruitOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "strawberry", label: "Strawberry" },
  { value: "kiwi", label: "Kiwi" },
];

// Basic examples
export const Default: Story = {
  args: {
    options: countryOptions,
    placeholder: "Select a country",
  },
};

export const WithLabel: Story = {
  args: {
    options: countryOptions,
    placeholder: "Select a country",
    label: "Country",
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: countryOptions,
    placeholder: "Select a country",
    label: "Country",
    defaultValue: "ca",
  },
};

export const WithError: Story = {
  args: {
    options: countryOptions,
    placeholder: "Select a country",
    label: "Country",
    error: "Please select a valid country",
  },
};

export const Disabled: Story = {
  args: {
    options: countryOptions,
    placeholder: "Select a country",
    label: "Country",
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico", disabled: true },
      { value: "br", label: "Brazil" },
      { value: "ar", label: "Argentina", disabled: true },
    ],
    placeholder: "Select a country",
    label: "Country with some disabled options",
  },
};

// All Select Variations
export const AllVariations = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-md">
      {/* Basic Select */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Basic Select</h3>
        <Select 
          options={countryOptions}
          placeholder="Select a country"
        />
      </div>
      
      {/* With Label */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">With Label</h3>
        <Select 
          options={countryOptions}
          placeholder="Select a country"
          label="Country"
        />
      </div>
      
      {/* With Default Value */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">With Default Value</h3>
        <Select 
          options={countryOptions}
          placeholder="Select a country"
          label="Country"
          defaultValue="br"
        />
      </div>
      
      {/* With Error State */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">With Error State</h3>
        <Select 
          options={countryOptions}
          placeholder="Select a country"
          label="Country"
          error="Please select a valid country"
        />
      </div>
      
      {/* Disabled Select */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Disabled Select</h3>
        <Select 
          options={countryOptions}
          placeholder="Select a country"
          label="Country"
          disabled
        />
      </div>
      
      {/* With Disabled Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">With Disabled Options</h3>
        <Select 
          options={[
            { value: "apple", label: "Apple" },
            { value: "banana", label: "Banana", disabled: true },
            { value: "orange", label: "Orange" },
            { value: "grape", label: "Grape", disabled: true },
          ]}
          placeholder="Select a fruit"
          label="Fruit"
        />
      </div>
      
      {/* Custom Styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Custom Styling</h3>
        <Select 
          options={fruitOptions}
          placeholder="Select a fruit"
          label="Fruit with custom styling"
          triggerClassName="border-primary bg-primary/5"
          contentClassName="border-primary"
        />
      </div>
      
      {/* Different Width */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Different Widths</h3>
        <div className="grid grid-cols-2 gap-4">
          <Select 
            options={fruitOptions}
            placeholder="Small"
            className="w-full"
          />
          <Select 
            options={fruitOptions}
            placeholder="Small"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
