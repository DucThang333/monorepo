import React from "react";
import type { Meta } from "@storybook/react";
import { Checkbox } from "@/components/Checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'text' },
  },
} as Meta<typeof Checkbox>;

// Showcase all checkbox variants
export const Showcase = () => {
  const [checked, setChecked] = React.useState(false);
  
  return (
    <div className="space-y-8 p-4 bg-background rounded-lg border border-border w-[400px]">
      <h2 className="text-xl font-semibold">Checkbox Component</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-md font-medium">States</h3>
          <div className="space-y-3">
            <Checkbox 
              id="default"
              label="Default"
              description="This is a description for the checkbox"
            />
            
            <Checkbox 
              id="checked"
              label="Checked"
              defaultChecked
            />
            
            <Checkbox 
              id="disabled"
              label="Disabled"
              disabled
            />
            
            <Checkbox 
              id="checked-disabled"
              label="Checked & Disabled"
              checked
              disabled
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-md font-medium">With Error</h3>
          <Checkbox 
            id="error"
            label="With Error"
            error="This field is required"
          />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-md font-medium">Interactive</h3>
          <Checkbox 
            id="interactive"
            label={`Toggle me (${checked ? 'on' : 'off'})`}
            description="This checkbox is interactive"
            checked={checked}
            onCheckedChange={setChecked}
          />
        </div>
      </div>
    </div>
  );
};

// Configurable story
export const Configurable = ({ 
  checked = false,
  disabled = false,
  required = false,
  label = "Configurable Checkbox",
  description = "Try changing the props in the controls panel",
  error = "",
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  
  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  
  return (
    <Checkbox 
      id="configurable"
      label={label}
      description={description}
      error={error}
      disabled={disabled}
      required={required}
      checked={isChecked}
      onCheckedChange={setIsChecked}
    />
  );
};
