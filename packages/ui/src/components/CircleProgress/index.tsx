import { CircleProgress as CircleProgressBase } from "@/components/inits/circle-progress";
import React from "react";
import { cn } from "@/lib/utils";

export interface CircleProgressProps {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
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
  // Calculate percentage
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  
  // Define size values in pixels
  const sizeValues = {
    sm: 64,  // 16*4 = 64px
    md: 96,  // 24*4 = 96px
    lg: 128, // 32*4 = 128px
  };
  
  // Define stroke width based on size
  const strokeWidth = {
    sm: 4,
    md: 6,
    lg: 8,
  };

  const colorClasses = {
    default: "text-gray-500",
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-green-500",
    warning: "text-yellow-500",
    danger: "text-destructive",
  };

  return (
    <div className={cn("relative flex items-center justify-center", 
      sizeValues[size], colorClasses[color], className)}>
      <CircleProgressBase
        size={sizeValues[size]}
        percentage={percentage}
        strokeWidth={strokeWidth[size]}
        {...props}
      />
      {/* Remove the text from CircleProgressBase if we're showing it here */}
      {showValue && (
        <span className="absolute font-medium">
          {percentage}%
        </span>
      )}
    </div>
  );
}