import { Label as LabelBase } from "@/components/inits/label";
import React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  optional?: boolean;
}

export function Label({
  children,
  className,
  required,
  optional,
  ...props
}: LabelProps) {
  return (
    <LabelBase
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="ml-1 text-destructive">*</span>}
      {optional && (
        <span className="ml-1 text-muted-foreground text-xs">(optional)</span>
      )}
    </LabelBase>
  );
}
