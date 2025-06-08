"use client"
import React, { ReactNode, ReactElement } from "react";
import {
  useForm as useReactHookForm,
  FormProvider,
  UseFormProps,
  UseFormReturn,
  FieldValues,
  FieldPath,
  useFormContext,
  Controller,
  ControllerProps,
  ControllerRenderProps,
  FieldErrors,
} from "react-hook-form";
import { cn } from "../../lib/utils";

// Create form with zod validation for type safety

export interface FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  form: UseFormReturn<TFieldValues, TContext>;
  onSubmit?: (values: TFieldValues) => void | Promise<void>;
  children: ReactNode;
  className?: string;
}

export function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>({
  form,
  onSubmit,
  children,
  className,
  ...props
}: FormProps<TFieldValues, TContext>) {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(async (values) => {
          await onSubmit?.(values);
        })}
        className={cn("space-y-4", className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
>(props?: UseFormProps<TFieldValues, TContext>) {
  return useReactHookForm<TFieldValues, TContext>(props);
}

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  field: ControllerRenderProps<TFieldValues, TName>;
};

export interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  children: (props: { field: ControllerRenderProps<TFieldValues, TName>; formState: { errors: FieldErrors<TFieldValues> } }) => React.ReactNode;
}

export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ 
  name, 
  control,
  defaultValue,
  rules,
  shouldUnregister,
  children,
  ...props
}: FormFieldProps<TFieldValues, TName>) {
  const form = useFormContext<TFieldValues>();
  return (
    <Controller
      name={name}
      control={control || form.control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field, formState }) => {
        return children({ field, formState }) as ReactElement;
      }}
      {...props}
    />
  );
}

export { useFormContext };
