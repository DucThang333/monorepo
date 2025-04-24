import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/DropdownMenu";
import { Button } from "@/components/Button";

const meta = {
  title: "DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: {
        type: "select",
      },
      options: ["start", "center", "end"],
      description: "Alignment of the dropdown menu",
    },
    side: {
      control: {
        type: "select",
      },
      options: ["top", "right", "bottom", "left"],
      description: "Side the dropdown menu appears on",
    },
    modal: {
      control: { type: "boolean" },
      description: "Whether the dropdown menu is modal",
    },
    dir: {
      control: {
        type: "select",
      },
      options: ["ltr", "rtl"],
      description: "Text direction",
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <Button>Open Menu</Button>,
    menuContent: (
      <>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </>
    ),
    align: "center",
    side: "bottom",
    modal: false,
  },
};

export const WithShortcuts: Story = {
  args: {
    children: <Button>Actions</Button>,
    menuContent: (
      <>
        <DropdownMenuItem>
          New Tab <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>New Incognito Window</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Save Page As... <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </>
    ),
    align: "end",
    side: "bottom",
    modal: false,
  },
};

export const WithCheckboxes: Story = {
  args: {
    children: <Button>Preferences</Button>,
    menuContent: (
      <>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>
          Show Toolbar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Show Bookmarks Bar</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Show Full URLs</DropdownMenuCheckboxItem>
      </>
    ),
    align: "start",
    side: "bottom",
    modal: false,
  },
};

export const WithRadioItems: Story = {
  args: {
    children: <Button>Options</Button>,
    menuContent: (
      <>
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="light">
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </>
    ),
    align: "center",
    side: "bottom",
    modal: false,
  },
};

export const WithSubMenu: Story = {
  args: {
    children: <Button>More Options</Button>,
    menuContent: (
      <>
        <DropdownMenuItem>Back</DropdownMenuItem>
        <DropdownMenuItem>Forward</DropdownMenuItem>
        <DropdownMenuItem>Reload</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Save Page As...</DropdownMenuItem>
            <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
            <DropdownMenuItem>Developer Tools</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </>
    ),
    align: "center",
    side: "bottom",
    modal: false,
  },
};
