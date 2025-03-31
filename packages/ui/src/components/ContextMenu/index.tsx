import {
  ContextMenu as ContextMenuBase,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "../context-menu";
import React from "react";
import { cn } from "@/lib/utils";

export interface ContextMenuProps {
  children: React.ReactNode;
  menuContent: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function ContextMenu({
  children,
  menuContent,
  className,
  contentClassName,
  ...props
}: ContextMenuProps) {
  return (
    <ContextMenuBase>
      <ContextMenuTrigger className={className} {...props}>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className={cn("min-w-[12rem]", contentClassName)}>
        {menuContent}
      </ContextMenuContent>
    </ContextMenuBase>
  );
}

export {
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
