"use client";

import React, { useState, useEffect } from 'react';
import { FullCalendarBase } from "@/components/inits/fullcalendar";
import { cn } from "@/lib/utils";
import { EventSourceInput, DateSelectArg, EventClickArg } from '@fullcalendar/core';
import "./style.css"
export interface FullCalendarProps {
  /**
   * Additional class names to apply
   */
  className?: string;
  
  /**
   * Array of events to display on the calendar
   */
  events?: EventSourceInput;
  
  /**
   * Initial view to display (dayGridMonth, timeGridWeek, timeGridDay, listWeek)
   */
  initialView?: string;
  
  /**
   * Whether to show weekend days
   */
  weekends?: boolean;
  
  /**
   * Whether to allow selecting date ranges
   */
  selectable?: boolean;
  
  /**
   * Whether to allow event dragging and resizing
   */
  editable?: boolean;
  
  /**
   * Handler for when a date or date range is selected
   */
  onDateSelect?: (info: DateSelectArg) => void;
  
  /**
   * Handler for when an event is clicked
   */
  onEventClick?: (info: EventClickArg) => void;
}

export function FullCalendar({
  className,
  events = [],
  initialView = 'dayGridMonth',
  weekends = true,
  selectable = false,
  editable = false,
  onDateSelect,
  onEventClick,
  ...props
}: FullCalendarProps) {
  const [mounted, setMounted] = useState(false);

  // Handle client-side only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("min-h-[400px] rounded-md border shadow", className)}>Loading calendar...</div>;
  }

  return (
    <div className={cn("rounded-md border shadow p-5", className)}>
      <FullCalendarBase
        initialView={initialView}
        events={events}
        weekends={weekends}
        selectable={selectable}
        editable={editable}
        dayMaxEvents={true}
        select={onDateSelect}
        eventClick={onEventClick}
        {...props}
      />
    </div>
  );
}


