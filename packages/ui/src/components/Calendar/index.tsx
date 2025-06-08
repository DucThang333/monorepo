import { Calendar as CalendarBase } from "../inits/calendar";
import React from "react";
import { cn } from "../../lib/utils";
import { DayPickerSingleProps, DayPickerRangeProps, DayPickerMultipleProps } from "react-day-picker";


type CalendarProps = (DayPickerSingleProps|DayPickerRangeProps|DayPickerMultipleProps)&{
  disabled?: boolean;
  className?: string;
  initialFocus?: boolean;
};


export function Calendar({
  disabled = false,
  className,
  initialFocus,
  ...props
}: CalendarProps) {
  return (
    <CalendarBase
      disabled={disabled}
      initialFocus={initialFocus}
      className={cn("rounded-md border shadow", className)}
      {...props}
    />
  );
}
