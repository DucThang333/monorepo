import {
  ScrollArea as ScrollAreaBase,
  ScrollBar
} from "../scroll-area";
import React from "react";
import { cn } from "@/lib/utils";

export interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  viewportClassName?: string;
  orientation?: "horizontal" | "vertical" | "both";
  scrollHideDelay?: number;
  type?: "auto" | "always" | "scroll" | "hover";
  scrollbarClassName?: string;
}

export function ScrollArea({
  children,
  className,
  viewportClassName,
  orientation = "vertical",
  scrollHideDelay,
  type = "auto",
  scrollbarClassName,
  ...props
}: ScrollAreaProps) {
  return (
    <ScrollAreaBase
      className={cn("relative overflow-hidden", className)}
      type={type}
      scrollHideDelay={scrollHideDelay}
      {...props}
    >
      <div className={cn("h-full w-full rounded-[inherit]", viewportClassName)}>
        {children}
      </div>
      {(orientation === "vertical" || orientation === "both") && (
        <ScrollBar 
          orientation="vertical" 
          className={scrollbarClassName}
        />
      )}
      {(orientation === "horizontal" || orientation === "both") && (
        <ScrollBar 
          orientation="horizontal"
          className={scrollbarClassName}
        />
      )}
    </ScrollAreaBase>
  );
}

export { ScrollBar };
