import { Switch as SwitchBase } from "../inits/switch";
import React from "react";
import { cn } from "../../lib/utils";

export interface SwitchProps {
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
  size?: "sm" | "md" | "lg";
}

export function Switch({
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
  size = "md",
  ...props
}: SwitchProps) {
  const sizeClasses = {
    sm: "h-4 w-7",
    md: "h-5 w-9",
    lg: "h-6 w-11",
  };

  const thumbSizeClasses = {
    sm: "14",
    md: "18",
    lg: "22",
  };

  return (
    <div className="flex items-start space-x-2">
      <SwitchBase
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        id={id}
        className={cn(
          sizeClasses[size],
          "border border-primary ",
          error && "border-destructive data-[state=checked]:bg-destructive",
          className
        )}
        {...props}
        style={{
          "--thumb-size": thumbSizeClasses[size] + "px",
        } as React.CSSProperties}
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
