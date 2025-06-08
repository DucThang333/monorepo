import {
  NavigationMenu as NavigationMenuBase,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from "../inits/navigation-menu";
import React from "react";
import { cn } from "../../lib/utils";

export interface NavigationMenuProps {
  className?: string;
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  viewportClassName?: string;
}

export function NavigationMenu({
  className,
  children,
  orientation = "horizontal",
  viewportClassName,
  ...props
}: NavigationMenuProps) {
  return (
    <NavigationMenuBase
      className={cn(
        "relative",
        orientation === "horizontal" ? "flex" : "flex flex-col",
        className
      )}
      {...props}
    >
      <NavigationMenuList
        className={cn(orientation === "vertical" && "flex-col space-y-2")}
      >
        {children}
      </NavigationMenuList>
      <NavigationMenuViewport className={viewportClassName} />
    </NavigationMenuBase>
  );
}

export {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuIndicator,
};
