import React from "react";
import { Tabs } from "@/components/Tabs";
import { Home, Settings, User, Mail, CalendarDays } from "lucide-react";

// Sample tab items
export const basicItems = [
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

export const iconItems = [
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
        <p className="text-muted-foreground">
          Welcome to your dashboard overview.
        </p>
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
        <p className="text-muted-foreground">
          Update your profile information.
        </p>
      </div>
    ),
  },
];

// Basic examples
export function DefaultExample() { return <Tabs items={basicItems} />; };

export const WithDefaultValueExample = () => (
  <Tabs items={basicItems} defaultValue="password" />
);

export const WithIconsExample = () => <Tabs items={iconItems} />;

export const WithDisabledTabExample = () => (
  <Tabs
    items={[
      ...basicItems.slice(0, 2),
      {
        ...basicItems[2],
        disabled: true,
      },
    ]}
  />
);

export const CustomStylingExample = () => (
  <Tabs
    items={basicItems}
    className="max-w-lg"
    listClassName="bg-muted"
    triggerClassName="font-medium"
    contentClassName="border rounded-md mt-2"
  />
);

// All tabs variations demo
export const AllTabsExample = () => {
  const tabSets = [
    {
      title: "Basic Tabs",
      tabs: basicItems,
    },
    {
      title: "Tabs with Icons",
      tabs: iconItems,
    },
    {
      title: "Many Tabs",
      tabs: [
        {
          value: "inbox",
          label: (
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Inbox</span>
            </div>
          ),
          content: <div className="p-4">Inbox content</div>,
        },
        {
          value: "sent",
          label: "Sent",
          content: <div className="p-4">Sent emails content</div>,
        },
        {
          value: "drafts",
          label: "Drafts",
          content: <div className="p-4">Draft emails content</div>,
        },
        {
          value: "junk",
          label: "Junk",
          content: <div className="p-4">Junk emails content</div>,
        },
        {
          value: "trash",
          label: "Trash",
          content: <div className="p-4">Deleted emails content</div>,
        },
      ],
    },
    {
      title: "With Disabled Tabs",
      tabs: [
        {
          value: "today",
          label: (
            <div className="flex items-center space-x-2">
              <CalendarDays className="h-4 w-4" />
              <span>Today</span>
            </div>
          ),
          content: <div className="p-4">Today's schedule</div>,
        },
        {
          value: "tomorrow",
          label: "Tomorrow",
          content: <div className="p-4">Tomorrow's schedule</div>,
        },
        {
          value: "upcoming",
          label: "Upcoming",
          disabled: true,
          content: <div className="p-4">Upcoming events</div>,
        },
        {
          value: "past",
          label: "Past",
          disabled: true,
          content: <div className="p-4">Past events</div>,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-3xl">
      {tabSets.map((set, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-lg font-medium">{set.title}</h3>
          <Tabs items={set.tabs} className="w-full" />
        </div>
      ))}
    </div>
  );
};
