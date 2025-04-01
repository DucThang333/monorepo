import React from "react";
import {
  Select as SelectDefault,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/inits/select";
import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = React.ComponentPropsWithoutRef<
  typeof SelectDefault
> & {
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  error?: string;
  onChange?: (value: string) => void;
};

export function Select(props: SelectProps) {
  const {
    options,
    label,
    placeholder = "Chọn một mục",
    className,
    triggerClassName,
    contentClassName,
    error,
    onChange,
    ...rest
  } = props;

  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && <label className="text-sm font-medium">{label}</label>}
      <SelectDefault onValueChange={onChange} {...rest}>
        <SelectTrigger
          className={cn(
            "w-full",
            error && "border-red-500 focus:ring-red-500",
            triggerClassName
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className={contentClassName}>
          <SelectGroup>
            {options?.length > 0 ? (
              options?.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))
            ) : (
              <div>no option</div>
            )}
          </SelectGroup>
        </SelectContent>
      </SelectDefault>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
};
