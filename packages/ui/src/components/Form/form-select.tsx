import React from "react";
import {
  ControllerRenderProps,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import { Select } from "@/components/inits/select";
import { Label } from "@/components/inits/label";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
}

export interface FormSelectProps {
  field: ControllerRenderProps<any, any>;
  formState?: { errors: FieldErrors<FieldValues> };
  label?: string;
  description?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  className?: string;
}

export function FormSelect({
  field,
  formState,
  label,
  description,
  options,
  placeholder = "Select an option",
  error,
  className,
}: FormSelectProps) {
  // Get error from either explicit error prop or from form state errors
  const fieldError =
    error || (formState?.errors[field.name]?.message as string | undefined);

  return (
    <div className="space-y-2">
      {label && (
        <Label
          htmlFor={field.name}
          className={cn(fieldError && "text-destructive")}
        >
          {label}
        </Label>
      )}
      <Select
        defaultValue={field.value}
        onValueChange={field.onChange}
        name={field.name}
        options={options}
        placeholder={placeholder}
        className={className}
      />
      {description && !fieldError && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {fieldError && (
        <p className="text-sm font-medium text-destructive">{fieldError}</p>
      )}
    </div>
  );
}
