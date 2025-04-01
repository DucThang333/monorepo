import { Calendar as CalendarBase } from "@/components/inits/calendar";
import React from "react";
import { cn } from "@/lib/utils";

export interface CalendarProps {
  mode?: "single" | "range" | "multiple";
  selected?: Date | Date[] | { from: Date; to: Date };
  onSelect?: (
    value: Date | Date[] | { from: Date; to: Date } | undefined
  ) => void;
  disabled?: boolean;
  className?: string;
  initialFocus?: boolean;
}

export function Calendar({
  mode = "single",
  selected,
  onSelect,
  disabled = false,
  className,
  initialFocus,
  ...props
}: CalendarProps) {
  return (
    <CalendarBase
      mode={mode}
      selected={selected}
      onSelect={onSelect}
      disabled={disabled}
      initialFocus={initialFocus}
      className={cn("rounded-md border shadow", className)}
      {...props}
    />
  );
}
