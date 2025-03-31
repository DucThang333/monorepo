import React from "react";
import {
  ControllerRenderProps,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import { Checkbox } from "../checkbox";
import { Label } from "../label";
import { cn } from "../../lib/utils";

export interface FormCheckboxProps {
  field: ControllerRenderProps<any, any>;
  formState?: { errors: FieldErrors<FieldValues> };
  label?: string;
  description?: string;
  error?: string;
}

export function FormCheckbox({
  field,
  formState,
  label,
  description,
  error,
}: FormCheckboxProps) {
  // Get error from either explicit error prop or from form state errors
  const fieldError =
    error || (formState?.errors[field.name]?.message as string | undefined);

  return (
    <div className="flex items-start space-x-2">
      <Checkbox
        id={field.name}
        checked={field.value ?? false}
        onCheckedChange={(checked) => field.onChange(checked)}
        onBlur={field.onBlur}
        name={field.name}
        ref={field.ref}
      />
      <div className="space-y-1 leading-none">
        {label && (
          <Label
            htmlFor={field.name}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              fieldError && "text-destructive"
            )}
          >
            {label}
          </Label>
        )}
        {description && !fieldError && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {fieldError && (
          <p className="text-sm font-medium text-destructive">{fieldError}</p>
        )}
      </div>
    </div>
  );
}
