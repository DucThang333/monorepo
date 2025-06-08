import {
  Collapsible as CollapsibleBase,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../inits/collapsible";
import React from "react";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

export interface CollapsibleProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  triggerClassName?: string;
  icon?: React.ReactNode;
}

export function Collapsible({
  defaultOpen,
  open,
  onOpenChange,
  title,
  children,
  className,
  contentClassName,
  triggerClassName,
  icon = <ChevronDown className="h-4 w-4 transition-transform duration-200" />,
  ...props
}: CollapsibleProps) {
  return (
    <CollapsibleBase
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      className={cn("w-full", className)}
      {...props}
    >
      <div className="flex items-center justify-between">
        <CollapsibleTrigger
          className={cn(
            "flex items-center gap-2 font-medium",
            triggerClassName
          )}
        >
          {title}
          <span className="collapsible-icon">{icon}</span>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className={cn("pt-2", contentClassName)}>
        {children}
      </CollapsibleContent>
    </CollapsibleBase>
  );
}

export { CollapsibleContent, CollapsibleTrigger };
