import {
  RadioGroup as RadioGroupBase,
  RadioGroupItem,
} from "../inits/radio-group";
import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../label";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

export function RadioGroup({
  options,
  value,
  defaultValue,
  onValueChange,
  orientation = "vertical",
  className,
  name,
  disabled = false,
  required = false,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupBase
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      name={name}
      disabled={disabled}
      required={required}
      className={cn(
        "flex gap-4",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
      {...props}
    >
      {options.map((option) => (
        <div key={option.value} className="flex items-start space-x-2">
          <RadioGroupItem
            value={option.value}
            id={`${name}-${option.value}`}
            disabled={option.disabled || disabled}
          />
          <div className="space-y-1 leading-none">
            <Label
              htmlFor={`${name}-${option.value}`}
              className="cursor-pointer"
            >
              {option.label}
            </Label>
            {option.description && (
              <p className="text-sm text-muted-foreground">
                {option.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </RadioGroupBase>
  );
}

export { RadioGroupItem };
