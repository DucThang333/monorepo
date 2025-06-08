import { Slider as SliderBase } from "../inits/slider";
import React from "react";
import { cn } from "../../lib/utils";

export interface SliderProps {
  defaultValue?: number[];
  value?: number[];
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  showValue?: boolean;
  valueDisplay?: (value: number[]) => string;
  className?: string;
  variant?: "default" | "primary" | "secondary";
  thickness?: "thin" | "normal" | "thick";
}

export function Slider({
  defaultValue,
  value,
  onValueChange,
  onValueCommit,
  min = 0,
  max = 100,
  step = 1,
  orientation = "horizontal",
  disabled = false,
  showValue = false,
  valueDisplay,
  className,
  variant = "default",
  thickness = "normal",
  ...props
}: SliderProps) {
  const variantClasses = {
    default: "bg-primary",
    primary: "bg-primary",
    secondary: "bg-secondary",
  };

  const thicknessClasses = {
    thin: "h-1.5",
    normal: "h-2",
    thick: "h-3",
  };

  const formatValue =
    valueDisplay ||
    ((val) =>
      val.length === 1
        ? val[0].toString()
        : `${val[0]} - ${val[val.length - 1]}`);

  return (
    <div className="space-y-2">
      <SliderBase
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        onValueCommit={onValueCommit}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className={cn(thicknessClasses[thickness], className)}
        orientation={orientation}
        {...props}
      />
      {showValue && (
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{min}</span>
          <span>{formatValue(value || defaultValue || [min])}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
