'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { cn } from '@package/ui/lib/utils';
import { Label } from '@package/ui/components/shadcn/label';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id, labelCols, contentCols, align } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    labelCols,
    contentCols,
    align,
    ...fieldState,
  };
};

type FormItemProps = {
  labelCols?: number;
  contentCols?: number;
  align?: 'start' | 'end' | 'center' | 'between';
};

type FormItemContextValue = {
  id: string;
} & FormItemProps;

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

function FormItem({
  className,
  labelCols,
  contentCols,
  align,
  ...props
}: React.ComponentProps<'div'> & FormItemProps) {
  const id = React.useId();
  const cols = !labelCols || !contentCols ? 1 : labelCols + contentCols;

  return (
    <FormItemContext.Provider value={{ id, labelCols, contentCols, align }}>
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId, labelCols, align } = useFormField();

  const labelAlign = React.useMemo(() => {
    if (align === 'center' || align === 'end') {
      return 'end';
    }
    return 'start';
  }, [align]);

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn(
        'data-[error=true]:text-destructive',
        `col-span-${labelCols}`,
        className,
        align && `justify-${labelAlign}`
      )}
      style={{
        gridColumn: `span ${labelCols}/span ${labelCols}`,
      }}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ className, ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId, contentCols, align } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      style={{
        gridColumn: `span ${contentCols}/span ${contentCols}`,
      }}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn('text-destructive text-sm', className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};

export type { FormItemProps };
