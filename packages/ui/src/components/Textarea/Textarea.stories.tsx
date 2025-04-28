import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@/components/Textarea";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
    label: {
      control: "text",
      description: "Label text displayed above the textarea",
    },
    hint: {
      control: "text",
      description: "Helper text displayed below the textarea",
    },
    error: {
      control: "boolean",
      description: "Whether the textarea has an error",
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
    },
    rows: {
      control: { type: "number", min: 1 },
      description: "Number of rows in the textarea",
    },
    maxLength: {
      control: { type: "number", min: 1 },
      description: "Maximum number of characters allowed",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
    rows: 4,
  },
};

export const WithLabel: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here...",
    rows: 4,
  },
};

export const WithHint: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here...",
    hint: "Please keep your message brief and to the point.",
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here...",
    error: true,
    hint: "This field is required",
    rows: 4,
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here...",
    rows: 4,
    maxLength: 200,
    defaultValue: "This is a sample text to demonstrate character counting in the textarea component.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Message",
    placeholder: "This textarea is disabled",
    disabled: true,
    rows: 4,
  },
};

export const CustomHeight: Story = {
  args: {
    placeholder: "This textarea has 8 rows",
    rows: 8,
  },
};

export const CustomCounter: Story = {
  args: {
    label: "Tweet",
    placeholder: "What's happening?",
    rows: 4,
    maxLength: 280,
    counterText: (current, max) => `${current} / ${max} characters`,
    defaultValue: "This is a sample tweet to demonstrate custom character counting in the textarea component.",
  },
};

// Interactive examples
export const InteractiveTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-md space-y-4">
      <Textarea
        label="Interactive Textarea"
        placeholder="Type something here..."
        hint="As you type, you'll see the character count update."
        rows={4}
        maxLength={100}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      
      <div className="text-sm text-muted-foreground">
        Current text: {value.length > 0 ? `"${value}"` : "(empty)"}
      </div>
    </div>
  );
};

// All Textarea Variations
export const AllVariations = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-xl">
      {/* Basic Textarea */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Basic Textarea</h3>
        <Textarea 
          placeholder="Basic textarea without any additional props"
          rows={3}
        />
      </div>
      
      {/* With Label and Hint */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">With Label and Hint</h3>
        <Textarea 
          label="Feedback"
          placeholder="Please provide your feedback"
          hint="Your feedback helps us improve our service"
          rows={3}
        />
      </div>
      
      {/* With Character Counter */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">With Character Counter</h3>
        <Textarea 
          label="Bio"
          placeholder="Write a short bio"
          hint="Tell us about yourself"
          maxLength={150}
          rows={4}
          defaultValue="This is a sample bio text to demonstrate the character counter functionality in the textarea component."
        />
      </div>
      
      {/* With Error State */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">With Error State</h3>
        <Textarea 
          label="Description"
          placeholder="Enter a description"
          error={true}
          hint="Description is required and must be at least 20 characters"
          rows={3}
        />
      </div>
      
      {/* Disabled Textarea */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Disabled Textarea</h3>
        <Textarea 
          label="Read-only content"
          defaultValue="This textarea is disabled and cannot be edited."
          disabled
          rows={3}
        />
      </div>
      
      {/* Resize Variations */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Resize Variations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Textarea 
            label="Vertical resize only"
            placeholder="Can be resized vertically"
            className="resize-y"
            rows={2}
          />
          <Textarea 
            label="No resize"
            placeholder="Cannot be resized"
            className="resize-none"
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};
