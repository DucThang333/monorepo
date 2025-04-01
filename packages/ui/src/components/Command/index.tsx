import {
  Command as CommandBase,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/inits/command";
import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export interface CommandProps {
  children: React.ReactNode;
  className?: string;
  placeholder?: string;
  filter?: (value: string, search: string) => number;
  loop?: boolean;
}

export function Command({
  children,
  className,
  placeholder = "Type a command or search...",
  filter,
  loop,
  ...props
}: CommandProps) {
  return (
    <CommandBase
      filter={filter}
      loop={loop}
      className={cn("rounded-lg border shadow-md", className)}
      {...props}
    >
      <CommandInput placeholder={placeholder} />
      <CommandList>{children}</CommandList>
    </CommandBase>
  );
}

export interface CommandBarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  placeholder?: string;
}

export function CommandBar({
  open,
  onOpenChange,
  children,
  placeholder = "Type a command or search...",
}: CommandBarProps) {
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder={placeholder} />
      <CommandList>{children}</CommandList>
    </CommandDialog>
  );
}

export {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
