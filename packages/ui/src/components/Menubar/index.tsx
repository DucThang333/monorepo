import {
  Menubar as MenubarBase,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarGroup,
  MenubarLabel,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "../inits/menubar";
import React from "react";
import { cn } from "../../lib/utils";

export interface MenubarProps {
  className?: string;
  children: React.ReactNode;
}

export function Menubar({ className, children, ...props }: MenubarProps) {
  return (
    <MenubarBase
      className={cn(
        "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
        className
      )}
      {...props}
    >
      {children}
    </MenubarBase>
  );
}

export {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarGroup,
  MenubarLabel,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
};
