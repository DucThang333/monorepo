import {
  Separator as SeparatorBase
} from "../separator";
import React from "react";
import { cn } from "@/lib/utils";

export interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  decorative?: boolean;
  variant?: "default" | "muted" | "accent";
  thickness?: "thin" | "normal" | "thick";
}

export function Separator({
  orientation = "horizontal",
  className,
  decorative = true,
  variant = "default",
  thickness = "normal",
  ...props
}: SeparatorProps) {
  const variantClasses = {
    default: "bg-border",
    muted: "bg-muted",
    accent: "bg-primary/20",
  };
  
  const thicknessClasses = {
    thin: orientation === "horizontal" ? "h-px" : "w-px",
    normal: orientation === "horizontal" ? "h-[1px]" : "w-[1px]",
    thick: orientation === "horizontal" ? "h-0.5" : "w-0.5",
  };

  return (
    <SeparatorBase
      orientation={orientation}
      decorative={decorative}
      className={cn(
        variantClasses[variant],
        thicknessClasses[thickness],
        className
      )}
      {...props}
    />
  );
}
