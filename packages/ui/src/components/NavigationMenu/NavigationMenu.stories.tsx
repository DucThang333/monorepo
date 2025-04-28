import React from "react";
import type { Meta } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/NavigationMenu";

export default {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
    className: { control: 'text' },
    viewportClassName: { control: 'text' },
  },
} as Meta<typeof NavigationMenu>;

// Showcase all navigation menu variants
export const Showcase = () => {
  return (
    <div className="space-y-8 p-4 bg-background rounded-lg border border-border w-[800px]">
      <h2 className="text-xl font-semibold">NavigationMenu Component</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-md font-medium">Horizontal Navigation (Default)</h3>
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2" href="#">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">Advanced Features</h4>
                    <p className="text-sm text-muted-foreground">Take your app to the next level with our premium features.</p>
                  </div>
                  <NavigationMenuLink className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted" href="#">
                    Analytics
                  </NavigationMenuLink>
                  <NavigationMenuLink className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted" href="#">
                    Automation
                  </NavigationMenuLink>
                  <NavigationMenuLink className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted" href="#">
                    Reports
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2" href="#">
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2" href="#">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-md font-medium">Vertical Navigation</h3>
          <NavigationMenu orientation="vertical" className="w-[200px]">
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 block w-full" href="#">
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-4 w-[200px]">
                  <NavigationMenuLink className="px-2 py-1 rounded hover:bg-muted" href="#">
                    Profile
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-2 py-1 rounded hover:bg-muted" href="#">
                    Preferences
                  </NavigationMenuLink>
                  <NavigationMenuLink className="px-2 py-1 rounded hover:bg-muted" href="#">
                    Security
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 block w-full" href="#">
                Help
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

// Configurable story
export const Configurable = ({ 
  orientation = "horizontal",
  className = "",
  viewportClassName = "",
}) => {
  return (
    <NavigationMenu 
      orientation={orientation as "horizontal" | "vertical"}
      className={className}
      viewportClassName={viewportClassName}
    >
      <NavigationMenuItem>
        <NavigationMenuLink className="px-3 py-2" href="#">
          Home
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-2 p-4 w-[200px]">
            <NavigationMenuLink className="px-2 py-1 rounded hover:bg-muted" href="#">
              Product 1
            </NavigationMenuLink>
            <NavigationMenuLink className="px-2 py-1 rounded hover:bg-muted" href="#">
              Product 2
            </NavigationMenuLink>
            <NavigationMenuLink className="px-2 py-1 rounded hover:bg-muted" href="#">
              Product 3
            </NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink className="px-3 py-2" href="#">
          Contact
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};
