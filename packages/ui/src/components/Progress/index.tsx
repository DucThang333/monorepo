import { Progress as ProgressBase } from "@/components/inits/progress";
import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps {
  value?: number;
  max?: number;
  showValue?: boolean;
  valueFormat?: (value: number, max: number) => string;
  className?: string;
  variant?: "default" | "success" | "info" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

export function Progress({
  value = 0,
  max = 100,
  showValue = false,
  valueFormat,
  className,
  variant = "default",
  size = "md",
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

  const variantClasses = {
    default: "bg-primary",
    success: "bg-green-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
    danger: "bg-destructive",
  };

  const sizeClasses = {
    sm: "h-1",
    md: "h-2.5",
    lg: "h-4",
  };

  const formatValue =
    valueFormat || ((val, maximum) => `${Math.round((val / maximum) * 100)}%`);

  return (
    <div className="w-full space-y-1.5">
      <ProgressBase
        value={value}
        max={max}
        className={cn(sizeClasses[size], className)}
        {...props}
      >
        <div
          className={cn("h-full transition-all", variantClasses[variant])}
          style={{ width: `${percentage}%` }}
        />
      </ProgressBase>
      {showValue && (
        <div className="text-right text-xs text-muted-foreground">
          {formatValue(value, max)}
        </div>
      )}
    </div>
  );
}
