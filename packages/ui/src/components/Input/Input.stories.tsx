import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/Input";
import { Search, Mail, Lock, User, Info, AlertCircle } from "lucide-react";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    icon: {
      control: "boolean",
      description: "Whether to show an icon",
    },
    error: {
      control: "boolean",
      description: "Whether the input has an error",
    },
    hint: {
      control: "text",
      description: "Helper text shown below the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search"],
      description: "The type of input",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    placeholder: "Type something here...",
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Search...",
    icon: <Search className="h-4 w-4" />,
  },
};

export const WithHint: Story = {
  args: {
    placeholder: "Enter email address",
    hint: "We'll never share your email with anyone else.",
    icon: <Mail className="h-4 w-4" />,
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Enter email address",
    error: true,
    hint: "Please enter a valid email address",
    icon: <Mail className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    icon: <Lock className="h-4 w-4" />,
  },
};

// Demo with all input variations
export const AllInputs = () => {
  return (
    <div className="flex flex-col gap-6 w-80">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Basic Inputs</h3>
        <Input placeholder="Default input" />
        <Input placeholder="Disabled input" disabled />
        <Input placeholder="With icon" icon={<Search className="h-4 w-4" />} />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Input Types</h3>
        <Input type="text" placeholder="Text input" icon={<User className="h-4 w-4" />} />
        <Input type="email" placeholder="Email input" icon={<Mail className="h-4 w-4" />} />
        <Input type="password" placeholder="Password input" icon={<Lock className="h-4 w-4" />} />
        <Input type="number" placeholder="Number input" />
        <Input type="search" placeholder="Search input" icon={<Search className="h-4 w-4" />} />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-medium">With Helper Text</h3>
        <Input 
          placeholder="With helper text" 
          hint="This is a helpful message" 
          icon={<Info className="h-4 w-4" />} 
        />
        <Input 
          placeholder="With error message" 
          hint="This field is required" 
          error={true}
          icon={<AlertCircle className="h-4 w-4" />} 
        />
      </div>
    </div>
  );
};
