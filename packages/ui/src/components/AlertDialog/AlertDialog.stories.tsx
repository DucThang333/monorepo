import React from "react";
import type { Meta } from "@storybook/react";
import { AlertDialog } from "@/components/AlertDialog";
import { Button } from "@/components/Button";

export default {
  title: "UI/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    cancelText: { control: 'text' },
    actionText: { control: 'text' },
    isActionLoading: { control: 'boolean' },
    actionVariant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost'],
    },
  },
} as Meta<typeof AlertDialog>;

// Showcase all alertdialog variants
export const Showcase = () => {
  return (
    <div className="space-y-8 p-4 bg-background rounded-lg border border-border">
      <h2 className="text-xl font-semibold">AlertDialog Examples</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-md font-medium">Default</h3>
          <AlertDialog 
            trigger={<Button>Open Alert</Button>}
            title="Are you absolutely sure?"
            description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
            cancelText="Cancel"
            actionText="Continue"
            onAction={() => console.log('Action clicked')}
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-md font-medium">Destructive</h3>
          <AlertDialog 
            trigger={<Button variant="destructive">Delete Item</Button>}
            title="Delete this item?"
            description="This will permanently remove this item from your account."
            cancelText="Cancel"
            actionText="Delete"
            actionVariant="destructive"
            onAction={() => console.log('Delete clicked')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-md font-medium">Loading State</h3>
        <AlertDialog 
          trigger={<Button>Save Changes</Button>}
          title="Save changes?"
          description="Your changes will be saved and can't be reverted."
          cancelText="Cancel"
          actionText="Save"
          isActionLoading={true}
          onAction={() => new Promise(resolve => setTimeout(resolve, 2000))}
        />
      </div>
    </div>
  );
};

// Configurable story
export const Configurable = ({ 
  title = "Are you sure?",
  description = "This is a configurable alert dialog. Try changing the props in the controls panel.",
  cancelText = "Cancel",
  actionText = "Continue",
  actionVariant = "default",
  isActionLoading = false,
}) => {
  return (
    <AlertDialog 
      trigger={<Button>Open Configurable Alert</Button>}
      title={title}
      description={description}
      cancelText={cancelText}
      actionText={actionText}
      actionVariant={actionVariant as "default" | "destructive" | "outline" | "secondary" | "ghost"}
      isActionLoading={isActionLoading}
      onAction={() => console.log('Configurable action clicked')}
    />
  );
};
