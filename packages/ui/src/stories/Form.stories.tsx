import React from "react";
import type { Meta } from "@storybook/react";
import {
  Form,
  FormField,
  useForm,
  FormCheckbox,
  FormInput,
  FormSubmitButton,
  FormTextarea,
  FormSelect,
} from "@/components/Form";
import { z } from "@package/validation/libs/zod";
import { zodResolver } from "@package/validation/libs/resolver";
import { Control, FieldValues } from "react-hook-form";

export default {
  title: "UI/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Form>;

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

// Create a basic contact form example
export const ContactForm = () => {
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
    console.log("Form submitted:", values);
  }

  return (
    <div className="space-y-6 p-4 bg-background rounded-lg border border-border w-[500px]">
      <h2 className="text-xl font-semibold">Contact Form</h2>
      <Form
        form={form}
        onSubmit={handleSubmit}
        className="space-y-4"
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
    </div>
  );
};

// Login form example
export const LoginForm = () => {
  // Define a simple login schema
  const loginSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    rememberMe: z.boolean().optional(),
  });

  type LoginValues = z.infer<typeof loginSchema>;

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Type assertion for form control
  const control = form.control as unknown as Control<FieldValues>;

  function handleSubmit(values: LoginValues) {
    console.log("Login form submitted:", values);
  }

  return (
    <div className="space-y-6 p-4 bg-background rounded-lg border border-border w-[400px]">
      <h2 className="text-xl font-semibold">Login</h2>
      <Form
        form={form}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="space-y-4">
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

          <FormField control={control} name="password">
            {({ field, formState }) => (
              <FormInput
                field={field}
                formState={formState}
                label="Password"
                type="password"
              />
            )}
          </FormField>

          <FormField control={control} name="rememberMe">
            {({ field, formState }) => (
              <FormCheckbox
                field={field}
                formState={formState}
                label="Remember me"
              />
            )}
          </FormField>
        </div>

        <FormSubmitButton form={form}>Login</FormSubmitButton>
      </Form>
    </div>
  );
};

// Form showcase with multiple examples
export const Showcase = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Form Components</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <LoginForm />
      </div>
    </div>
  );
};
