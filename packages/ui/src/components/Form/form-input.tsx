import React from 'react';
import { ControllerRenderProps, FieldErrors, FieldValues } from 'react-hook-form';
import { Input } from '../input';
import { Label } from '../label';
import { cn } from '../../lib/utils';

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  field: ControllerRenderProps<any, any>;
  formState?: { errors: FieldErrors<FieldValues> };
  label?: string;
  description?: string;
  error?: string;
}

export function FormInput({
  field,
  formState,
  label,
  description,
  className,
  error,
  ...props
}: FormInputProps) {
  // Get error from either explicit error prop or from form state errors
  const fieldError = 
    error || 
    (formState?.errors[field.name]?.message as string | undefined);
  
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
      <Input
        id={field.name}
        className={cn(fieldError && "border-destructive", className)}
        {...props}
        {...field}
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
