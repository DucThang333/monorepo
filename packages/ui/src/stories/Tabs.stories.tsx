import React from "react";
import type { Meta } from "@storybook/react";
import { Tabs, TabItem } from "@/components/Tabs";
import { Home, Settings, User } from "lucide-react";

// Sample tab items
const basicItems: TabItem[] = [
  {
    value: "account",
    label: "Account",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium">Account Settings</h3>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
    ),
  },
  {
    value: "password",
    label: "Password",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium">Change Password</h3>
        <p className="text-muted-foreground">
          Update your password and security settings.
        </p>
      </div>
    ),
  },
  {
    value: "notifications",
    label: "Notifications",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <p className="text-muted-foreground">
          Configure how you receive notifications.
        </p>
      </div>
    ),
  },
];

// Items with icons
const iconItems: TabItem[] = [
  {
    value: "home",
    label: (
      <div className="flex items-center space-x-2">
        <Home className="h-4 w-4" />
        <span>Home</span>
      </div>
    ),
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium">Home Dashboard</h3>
        <p className="text-muted-foreground">View your home dashboard.</p>
      </div>
    ),
  },
  {
    value: "settings",
    label: (
      <div className="flex items-center space-x-2">
        <Settings className="h-4 w-4" />
        <span>Settings</span>
      </div>
    ),
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-muted-foreground">
          Configure your application settings.
        </p>
      </div>
    ),
  },
  {
    value: "profile",
    label: (
      <div className="flex items-center space-x-2">
        <User className="h-4 w-4" />
        <span>Profile</span>
      </div>
    ),
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium">User Profile</h3>
        <p className="text-muted-foreground">Manage your profile information.</p>
      </div>
    ),
  },
];

// Items with one disabled tab
const disabledItems: TabItem[] = [
  {
    value: "active",
    label: "Active",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium">Active Tab</h3>
        <p className="text-muted-foreground">This tab is active and can be selected.</p>
      </div>
    ),
  },
  {
    value: "disabled",
    label: "Disabled",
    disabled: true,
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium">Disabled Tab</h3>
        <p className="text-muted-foreground">
          This tab is disabled and cannot be selected.
        </p>
      </div>
    ),
  },
  {
    value: "another",
    label: "Another Tab",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium">Another Tab</h3>
        <p className="text-muted-foreground">This is another active tab.</p>
      </div>
    ),
  },
];

export default {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The initial active tab value",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the tabs container",
    },
    listClassName: {
      control: "text",
      description: "Additional CSS classes for the tabs list",
    },
    triggerClassName: {
      control: "text",
      description: "Additional CSS classes for individual tab triggers",
    },
    contentClassName: {
      control: "text",
      description: "Additional CSS classes for tab content panels",
    },
  },
} as Meta<typeof Tabs>;

// Showcase all tabs variants
export const Showcase = () => {
  return (
    <div className="space-y-8 p-4 bg-background rounded-lg border border-border w-[800px]">
      <h2 className="text-xl font-semibold">Tabs Component</h2>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Default Tabs</h3>
          <Tabs items={basicItems} className="max-w-md" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-medium">With Default Value</h3>
          <Tabs items={basicItems} defaultValue="password" className="max-w-md" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-medium">With Icons</h3>
          <Tabs items={iconItems} className="max-w-md" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-medium">With Disabled Tab</h3>
          <Tabs items={disabledItems} className="max-w-md" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Custom Styling</h3>
          <Tabs 
            items={basicItems} 
            className="max-w-md" 
            listClassName="bg-muted/50 p-1"
            triggerClassName="data-[state=active]:bg-background data-[state=active]:shadow-sm"
            contentClassName="border rounded-md mt-2 p-2"
          />
        </div>
      </div>
    </div>
  );
};

// Individual configurable story
export const Configurable = ({ 
  defaultValue = undefined,
  className = "max-w-md",
  listClassName = "",
  triggerClassName = "",
  contentClassName = "",
}) => {
  return (
    <Tabs 
      items={basicItems}
      defaultValue={defaultValue}
      className={className}
      listClassName={listClassName}
      triggerClassName={triggerClassName}
      contentClassName={contentClassName}
    />
  );
};

// Individual stories
export const Default = () => <Tabs items={basicItems} className="max-w-md" />;

export const WithDefaultValue = () => (
  <Tabs items={basicItems} defaultValue="password" className="max-w-md" />
);

export const WithIcons = () => <Tabs items={iconItems} className="max-w-md" />;

export const WithDisabledTab = () => <Tabs items={disabledItems} className="max-w-md" />;

export const CustomStyling = () => (
  <Tabs 
    items={basicItems} 
    className="max-w-md" 
    listClassName="bg-muted/50 p-1"
    triggerClassName="data-[state=active]:bg-background data-[state=active]:shadow-sm"
    contentClassName="border rounded-md mt-2 p-2"
  />
);
