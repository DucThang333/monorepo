import {
  Tooltip as TooltipBase,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/inits/tooltip";
import React from "react";
import { cn } from "@/lib/utils";

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  contentClassName?: string;
  delayDuration?: number;
  skipDelayDuration?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  disabled?: boolean;
}

export function Tooltip({
  children,
  content,
  className,
  contentClassName,
  delayDuration = 300,
  skipDelayDuration,
  open,
  onOpenChange,
  side = "top",
  align = "center",
  disabled = false,
  ...props
}: TooltipProps) {
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <TooltipProvider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
    >
      <TooltipBase open={open} onOpenChange={onOpenChange}>
        <TooltipTrigger className={className} asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className={cn("z-50", contentClassName)}
          {...props}
        >
          {content}
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  );
}

export { TooltipTrigger, TooltipContent, TooltipProvider };
