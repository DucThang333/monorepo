import { Textarea as TextareaBase } from "@/components/inits/textarea";
import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  hint?: string;
  label?: string;
  counterText?: (current: number, max?: number) => string;
}

export function Textarea({
  className,
  error,
  hint,
  label,
  counterText,
  maxLength,
  value,
  defaultValue,
  ...props
}: TextareaProps) {
  const [textLength, setTextLength] = React.useState(() => {
    if (value !== undefined) return String(value).length;
    if (defaultValue !== undefined) return String(defaultValue).length;
    return 0;
  });

  React.useEffect(() => {
    if (value !== undefined) {
      setTextLength(String(value).length);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextLength(e.target.value.length);
    props.onChange?.(e);
  };

  const defaultCounterText = (current: number, max?: number) => {
    return max ? `${current}/${max}` : `${current} characters`;
  };

  const renderCounter = counterText || defaultCounterText;

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={props.id}
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            error && "text-destructive"
          )}
        >
          {label}
        </label>
      )}
      <TextareaBase
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        className={cn(
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        maxLength={maxLength}
        {...props}
      />
      <div className="flex justify-between">
        {hint && (
          <p
            className={cn(
              "text-xs",
              error ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {hint}
          </p>
        )}
        {maxLength && (
          <p
            className={cn(
              "ml-auto text-xs text-muted-foreground",
              textLength > maxLength * 0.9 && "text-amber-500",
              textLength >= maxLength && "text-destructive"
            )}
          >
            {renderCounter(textLength, maxLength)}
          </p>
        )}
      </div>
    </div>
  );
}
