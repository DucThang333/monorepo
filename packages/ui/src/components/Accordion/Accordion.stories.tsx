import React from "react";
import type { Meta } from "@storybook/react";
import { Accordion } from "@/components/Accordion";

export default {
  title: "UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      defaultValue: 'multiple',
    },
    className: { control: 'text' },
    itemClassName: { control: 'text' },
    triggerClassName: { control: 'text' },
    contentClassName: { control: 'text' },
  },
} as Meta<typeof Accordion>;

// Showcase all accordion variants
export const Showcase = () => {
  return (
    <div className="w-[400px] space-y-6 p-4 bg-background rounded-lg border border-border">
      <h2 className="text-lg font-semibold">Accordion Component</h2>
      
      <div className="space-y-4">
        <h3 className="text-md font-medium">Default</h3>
        <Accordion 
          className="w-full space-y-3"
          items={[
            {
              value: "item-1",
              trigger: "Is it accessible?",
              content: "Yes. It adheres to the WAI-ARIA design patterns."
            },
            {
              value: "item-2",
              trigger: "Is it styled?",
              content: "Yes. It comes with default styles that matches the other components' aesthetic."
            },
            {
              value: "item-3",
              trigger: "Is it animated?",
              content: "Yes. It's animated by default, but you can disable it if you prefer."
            }
          ]}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-md font-medium">Single Type</h3>
        <Accordion 
          type="single"
          className="w-full space-y-3"
          itemClassName="border rounded-lg bg-white hover:bg-gray-50 transition-colors"
          triggerClassName="px-4 py-3 font-medium"
          contentClassName="px-4 py-3 text-muted-foreground border-t"
          items={[
            {
              value: "item-1",
              trigger: "Item One",
              content: "Content for item one"
            },
            {
              value: "item-2",
              trigger: "Item Two",
              content: "Content for item two"
            },
            {
              value: "item-3",
              trigger: "Item Three",
              content: "Content for item three"
            }
          ]}
        />
      </div>
    </div>
  );
};

// Configurable story
export const Configurable = ({ 
  type = "multiple",
  className = "w-full space-y-3",
  itemClassName = "border rounded-lg",
  triggerClassName = "px-4 py-3 font-medium",
  contentClassName = "px-4 py-3 text-muted-foreground border-t",
}) => {
  return (
    <Accordion 
      type={type as "single" | "multiple"}
      className={className}
      itemClassName={itemClassName}
      triggerClassName={triggerClassName}
      contentClassName={contentClassName}
      items={[
        {
          value: "item-1",
          trigger: "Configurable Item One",
          content: "This accordion can be configured via Storybook controls"
        },
        {
          value: "item-2",
          trigger: "Configurable Item Two",
          content: "Try changing the type, classNames and other properties"
        },
        {
          value: "item-3",
          trigger: "Configurable Item Three",
          content: "The changes will be reflected in this preview"
        }
      ]}
    />
  );
};
