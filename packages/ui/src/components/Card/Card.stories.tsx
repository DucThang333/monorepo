import React from "react";
import type { Meta } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/Card";
import { Button } from "@/components/Button";

export default {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'ghost'],
      defaultValue: 'default',
    },
    className: { control: 'text' },
  },
} as Meta<typeof Card>;

// Showcase all card variants
export const Showcase = () => {
  return (
    <div className="space-y-8 w-[800px]">
      <h2 className="text-xl font-semibold">Card Component</h2>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <h3 className="text-md font-medium">Default</h3>
          <Card className="w-[250px]">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Card with shadow and background</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the default card style with a subtle shadow.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-md font-medium">Bordered</h3>
          <Card variant="bordered" className="w-[250px]">
            <CardHeader>
              <CardTitle>Bordered Card</CardTitle>
              <CardDescription>Card with border</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card has a border instead of a shadow.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-md font-medium">Ghost</h3>
          <Card variant="ghost" className="w-[250px]">
            <CardHeader>
              <CardTitle>Ghost Card</CardTitle>
              <CardDescription>No border or shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card has no border or shadow.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-md font-medium">With Footer</h3>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Card with Footer</CardTitle>
            <CardDescription>Complete example with all sections</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card demonstrates a complete example with header, content, and footer sections.</p>
            <p className="mt-4">The footer typically contains actions related to the card content.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

// Configurable story
export const Configurable = ({ 
  variant = 'default',
  className = 'w-[350px]',
}) => {
  return (
    <Card 
      variant={variant as "default" | "bordered" | "ghost"}
      className={className}
    >
      <CardHeader>
        <CardTitle>Configurable Card</CardTitle>
        <CardDescription>Try changing the props in controls</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card can be configured using the Storybook controls.</p>
        <p className="mt-2">Try changing the variant and other properties.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Action Button</Button>
      </CardFooter>
    </Card>
  );
};
