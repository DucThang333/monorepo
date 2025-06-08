import {
  HoverCard as HoverCardBase,
  HoverCardContent,
  HoverCardTrigger,
} from "../inits/hover-card";
import React from "react";
import { cn } from "../../lib/utils";

export interface HoverCardProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  contentClassName?: string;
  openDelay?: number;
  closeDelay?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
}

export function HoverCard({
  trigger,
  content,
  className,
  contentClassName,
  openDelay = 300,
  closeDelay = 200,
  open,
  onOpenChange,
  align = "center",
  side = "bottom",
  ...props
}: HoverCardProps) {
  return (
    <HoverCardBase
      open={open}
      onOpenChange={onOpenChange}
      openDelay={openDelay}
      closeDelay={closeDelay}
    >
      <HoverCardTrigger className={className} asChild>
        {trigger}
      </HoverCardTrigger>
      <HoverCardContent
        className={cn("w-80", contentClassName)}
        align={align}
        side={side}
        {...props}
      >
        {content}
      </HoverCardContent>
    </HoverCardBase>
  );
}

export { HoverCardTrigger, HoverCardContent };
