import type { Meta, StoryObj } from "@storybook/react";
import { 
  ContextMenu,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
  ContextMenuRadioItem
} from "../components/ContextMenu";

const meta = {
  title: "ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    contentClassName: {
      control: "text",
      description: "Additional classes for the menu content",
    },
  },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <div className="border border-dashed border-gray-300 rounded-md flex items-center justify-center w-64 h-32 bg-gray-50">
        Right click here
      </div>
    ),
    menuContent: (
      <>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>View</ContextMenuItem>
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-red-500">Delete</ContextMenuItem>
      </>
    ),
  },
};

export const WithShortcuts: Story = {
  args: {
    children: (
      <div className="border border-dashed border-gray-300 rounded-md flex items-center justify-center w-64 h-32 bg-gray-50">
        Right click for options
      </div>
    ),
    menuContent: (
      <>
        <ContextMenuItem>
          Cut <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Paste <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Select All <ContextMenuShortcut>⌘A</ContextMenuShortcut>
        </ContextMenuItem>
      </>
    ),
  },
};

export const WithCheckboxes: Story = {
  args: {
    children: (
      <div className="border border-dashed border-gray-300 rounded-md flex items-center justify-center w-64 h-32 bg-gray-50">
        Right click for display options
      </div>
    ),
    menuContent: (
      <>
        <ContextMenuLabel>View Options</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Hidden Files
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          Show File Extensions
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          Show Path Bar
        </ContextMenuCheckboxItem>
      </>
    ),
  },
};

export const WithRadioItems: Story = {
  args: {
    children: (
      <div className="border border-dashed border-gray-300 rounded-md flex items-center justify-center w-64 h-32 bg-gray-50">
        Right click for sorting options
      </div>
    ),
    menuContent: (
      <>
        <ContextMenuLabel>Sort By</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="name">
          <ContextMenuRadioItem value="name">
            Name
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="date">
            Date Modified
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="size">
            Size
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="type">
            Type
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </>
    ),
  },
};

export const WithSubMenu: Story = {
  args: {
    children: (
      <div className="border border-dashed border-gray-300 rounded-md flex items-center justify-center w-64 h-32 bg-gray-50">
        Right click for advanced options
      </div>
    ),
    menuContent: (
      <>
        <ContextMenuItem>Refresh</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Save As...</ContextMenuItem>
            <ContextMenuItem>Print...</ContextMenuItem>
            <ContextMenuItem>Properties</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Help</ContextMenuItem>
      </>
    ),
  },
};
