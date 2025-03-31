import {
  CircleProgress as CircleProgressBase
} from "@/components/circle-progress";
import React from "react";
import { cn } from "@/lib/utils";

export interface CircleProgressProps {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  className?: string;
}

export function CircleProgress({
  value = 0,
  max = 100,
  size = "md",
  showValue = false,
  color = "primary",
  className,
  ...props
}: CircleProgressProps) {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32"
  };

  const colorClasses = {
    default: "text-gray-500",
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-green-500",
    warning: "text-yellow-500",
    danger: "text-destructive"
  };

  return (
    <div className="relative flex items-center justify-center">
      <CircleProgressBase
        value={value}
        max={max}
        className={cn(sizeClasses[size], colorClasses[color], className)}
        {...props}
      />
      {showValue && (
        <span className="absolute font-medium">
          {Math.round((value / max) * 100)}%
        </span>
      )}
    </div>
  );
}
