import React from "react";
import type { Meta } from "@storybook/react";
import { Dialog } from "@/components/Dialog";
import { Button } from "@/components/Button";
import { Input } from "@/components/input";

export default {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    showCloseButton: { control: 'boolean' },
    className: { control: 'text' },
  },
} as Meta<typeof Dialog>;

// Showcase different dialog variants
export const Showcase = () => {
  return (
    <div className="space-y-8 p-4 bg-background rounded-lg border border-border">
      <h2 className="text-xl font-semibold">Dialog Examples</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <h3 className="text-md font-medium">Basic Dialog</h3>
          <Dialog 
            trigger={<Button>Open Dialog</Button>}
            title="Basic Dialog"
            description="This is a simple dialog with default styling."
            content={
              <div className="py-4">
                <p>This is the content area of the dialog.</p>
                <p className="mt-2">You can include any React components here.</p>
              </div>
            }
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-md font-medium">With Form</h3>
          <Dialog 
            trigger={<Button variant="secondary">Edit Profile</Button>}
            title="Edit Profile"
            description="Make changes to your profile settings."
            content={
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    defaultValue="John Doe"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="username" className="text-right text-sm font-medium">
                    Username
                  </label>
                  <Input
                    id="username"
                    defaultValue="@johndoe"
                    className="col-span-3"
                  />
                </div>
              </div>
            }
            footer={
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save changes</Button>
              </div>
            }
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-md font-medium">Without Close Button</h3>
        <Dialog 
          trigger={<Button variant="outline">Terms of Service</Button>}
          title="Terms of Service"
          description="Please read our terms of service."
          showCloseButton={false}
          content={
            <div className="space-y-2 py-4 max-h-[300px] overflow-auto">
              <p>These are the terms and conditions for using our service.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          }
          footer={
            <div className="flex justify-between w-full">
              <Button variant="ghost">Decline</Button>
              <Button>Accept</Button>
            </div>
          }
        />
      </div>
    </div>
  );
};

// Configurable story
export const Configurable = ({ 
  title = "Configurable Dialog",
  description = "Try changing the props in the controls panel.",
  showCloseButton = true,
  className = "sm:max-w-[425px]",
}) => {
  return (
    <Dialog 
      trigger={<Button>Open Configurable Dialog</Button>}
      title={title}
      description={description}
      showCloseButton={showCloseButton}
      className={className}
      content={
        <div className="py-4">
          <p>This dialog can be configured using the Storybook controls.</p>
          <p className="mt-2">Try adjusting the properties to see how they affect the dialog.</p>
        </div>
      }
      footer={
        <Button className="w-full">Close</Button>
      }
    />
  );
};
