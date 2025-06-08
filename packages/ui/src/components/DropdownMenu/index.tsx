import {
  DropdownMenu as DropdownMenuBase,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "../inits/dropdown-menu";
import React from "react";
import { cn } from "../../lib/utils";

export interface DropdownMenuProps {
  children: React.ReactNode;
  menuContent: React.ReactNode;
  className?: string;
  contentClassName?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  dir?: "ltr" | "rtl";
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
}

export function DropdownMenu({
  children,
  menuContent,
  className,
  contentClassName,
  open,
  onOpenChange,
  modal,
  dir,
  align,
  side,
  ...props
}: DropdownMenuProps) {
  return (
    <DropdownMenuBase
      open={open}
      onOpenChange={onOpenChange}
      modal={modal}
      dir={dir}
    >
      <DropdownMenuTrigger className={className} {...props}>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn("min-w-[12rem]", contentClassName)}
        align={align}
        side={side}
      >
        {menuContent}
      </DropdownMenuContent>
    </DropdownMenuBase>
  );
}

export {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
