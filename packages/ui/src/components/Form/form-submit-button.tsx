import React from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { Button, ButtonProps } from "../inits/button";
import { cn } from "../../lib/utils";

export interface FormSubmitButtonProps extends Omit<ButtonProps, 'form'> {
  form?: UseFormReturn<any>;
  children?: React.ReactNode;
}

export function FormSubmitButton({
  form,
  children = "Submit",
  className,
  disabled,
  ...props
}: FormSubmitButtonProps) {
  const isSubmitting = form?.formState.isSubmitting;
  const isValid = form ? form.formState.isValid : true;

  return (
    <Button
      type="submit"
      className={cn(className)}
      disabled={disabled || isSubmitting || !isValid}
      {...props}
    >
      {isSubmitting ? (
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>Submitting...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
