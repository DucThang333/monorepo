import React from "react";
import {
  Form,
  FormField,
  useForm,
  FormCheckbox,
  FormInput,
  FormSubmitButton,
  FormTextarea,
  FormSelect,
} from "@/components/form";
import { z } from "@package/validation/libs/zod";
import { zodResolver } from "@package/validation/libs/resolver";
import { Control, FieldValues } from "react-hook-form";

export interface FormDemoProps {
  onSubmit?: (values: any) => void;
}

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  role: z.string().min(1, {
    message: "Please select a role.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(500, {
      message: "Message must not exceed 500 characters.",
    }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

// Define the form type
type FormValues = z.infer<typeof formSchema>;

export function FormDemo({ onSubmit }: FormDemoProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      message: "",
      termsAccepted: false,
    },
  });

  // Type assertion for form control to work with FormField
  const control = form.control as unknown as Control<FieldValues>;

  function handleSubmit(values: FormValues) {
    console.log(values);
    onSubmit?.(values);
  }

  return (
    <Form
      form={form}
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md mx-auto"
    >
      <div className="space-y-4">
        <FormField control={control} name="name">
          {({ field, formState }) => (
            <FormInput
              field={field}
              formState={formState}
              label="Name"
              type="text"
            />
          )}
        </FormField>

        <FormField control={control} name="email">
          {({ field, formState }) => (
            <FormInput
              field={field}
              formState={formState}
              label="Email"
              type="email"
            />
          )}
        </FormField>

        <FormField control={control} name="role">
          {({ field, formState }) => (
            <FormSelect
              field={field}
              formState={formState}
              label="Role"
              placeholder="Select a role"
              options={[
                { value: "user", label: "User" },
                { value: "admin", label: "Administrator" },
                { value: "editor", label: "Editor" },
              ]}
            />
          )}
        </FormField>

        <FormField control={control} name="message">
          {({ field, formState }) => (
            <FormTextarea
              field={field}
              formState={formState}
              label="Message"
              placeholder="Enter your message here..."
            />
          )}
        </FormField>

        <FormField control={control} name="termsAccepted">
          {({ field, formState }) => (
            <FormCheckbox
              field={field}
              formState={formState}
              label="I accept the terms and conditions"
            />
          )}
        </FormField>
      </div>

      <FormSubmitButton form={form}>Submit</FormSubmitButton>
    </Form>
  );
}
