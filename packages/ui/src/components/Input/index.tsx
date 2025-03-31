import {
  Input as InputBase
} from "@/components/input";
import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: boolean;
  hint?: string;
}

export function Input({
  className,
  icon,
  error,
  hint,
  ...props
}: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </div>
      )}
      <InputBase
        className={cn(
          icon && "pl-10",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        {...props}
      />
      {hint && (
        <p className={cn(
          "mt-1 text-xs",
          error ? "text-destructive" : "text-muted-foreground"
        )}>
          {hint}
        </p>
      )}
    </div>
  );
}
