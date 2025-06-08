import {
  Popover as PopoverBase,
  PopoverContent,
  PopoverTrigger,
} from "../inits/popover";
import React from "react";
import { cn } from "../../lib/utils";

export interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  contentClassName?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
}

export function Popover({
  trigger,
  content,
  className,
  contentClassName,
  open,
  onOpenChange,
  modal,
  align = "center",
  side = "bottom",
  ...props
}: PopoverProps) {
  return (
    <PopoverBase open={open} onOpenChange={onOpenChange} modal={modal}>
      <PopoverTrigger className={className} asChild>
        {trigger}
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-72 p-4", contentClassName)}
        align={align}
        side={side}
        {...props}
      >
        {content}
      </PopoverContent>
    </PopoverBase>
  );
}

export { PopoverTrigger, PopoverContent };
