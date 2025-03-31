import type { Meta, StoryObj } from "@storybook/react";
import { FormCheckbox } from "../components/Form/form-checkbox";
import { useForm, Controller } from "react-hook-form";

// We need a wrapper component because FormCheckbox requires react-hook-form context
const FormCheckboxWrapper = (args: any) => {
  const { control, formState } = useForm({
    defaultValues: {
      acceptTerms: args.checked || false,
    },
  });

  return (
    <Controller
      control={control}
      name="acceptTerms"
      render={({ field }) => (
        <FormCheckbox
          field={field}
          formState={formState}
          label={args.label}
          description={args.description}
          error={args.error}
        />
      )}
    />
  );
};

const meta = {
  title: "Form/FormCheckbox",
  component: FormCheckboxWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the checkbox",
    },
    description: {
      control: "text",
      description: "Description text displayed below the label",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    checked: {
      control: "boolean",
      description: "Initial checked state",
    },
  },
} satisfies Meta<typeof FormCheckboxWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
    description: "You must accept the terms and conditions to continue",
    checked: false,
  },
};

export const WithoutDescription: Story = {
  args: {
    label: "Subscribe to newsletter",
    checked: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Accept terms and conditions",
    description: "You must accept the terms and conditions to continue",
    error: "This field is required",
    checked: false,
  },
};
