import { Checkbox as CheckboxBase } from "@/components/inits/checkbox";
import React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  label?: string;
  description?: string;
  className?: string;
  error?: string;
}

export function Checkbox({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  required,
  name,
  value,
  id,
  label,
  description,
  className,
  error,
  ...props
}: CheckboxProps) {
  return (
    <div className="flex items-start gap-2">
      <CheckboxBase
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        id={id}
        className={cn(error && "border-destructive", className)}
        {...props}
      />
      {(label || description || error) && (
        <div className="space-y-1 leading-none">
          {label && (
            <label
              htmlFor={id}
              className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                error && "text-destructive"
              )}
            >
              {label}
            </label>
          )}
          {description && !error && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
      )}
    </div>
  );
}
