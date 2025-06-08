"use client";

import React from 'react';
import FullCalendarComponent from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { cn } from '../../lib/utils';

export type FullCalendarBaseProps = Omit<React.ComponentProps<typeof FullCalendarComponent>, 'plugins'> & {
  className?: string;
};

function FullCalendarBase({
  className,
  ...props
}: FullCalendarBaseProps) {
  // The className prop needs to be applied to a wrapper div, not directly to FullCalendarComponent
  return (
    <div className={cn('fullcalendar-container', className)}>
      <FullCalendarComponent
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
        dayMaxEvents={true}
        height="auto"
        themeSystem="standard"
        // Custom styling to match the design system
        eventColor="#E5EBD7" // Using the muted color from your design system
        eventTextColor="#000000"
        {...props}
      />
    </div>
  );
}

FullCalendarBase.displayName = "FullCalendarBase";

export { FullCalendarBase };
