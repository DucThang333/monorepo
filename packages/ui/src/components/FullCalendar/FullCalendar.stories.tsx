import { Meta, StoryObj } from '@storybook/react';
import { FullCalendar } from './index';

const meta: Meta<typeof FullCalendar> = {
  title: 'Components/FullCalendar',
  component: FullCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FullCalendar>;

// Sample events for the calendar
const events = [
  {
    id: '1',
    title: 'Project Kickoff',
    start: new Date(new Date().setDate(new Date().getDate() - 2)),
    end: new Date(new Date().setDate(new Date().getDate() - 2)),
    allDay: true,
  },
  {
    id: '2',
    title: 'Team Meeting',
    start: new Date(),
    end: new Date(new Date().setHours(new Date().getHours() + 2)),
    backgroundColor: '#4CAF50',
  },
  {
    id: '3',
    title: 'Client Presentation',
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    end: new Date(new Date().setDate(new Date().getDate() + 1)),
  },
  {
    id: '4',
    title: 'Product Release',
    start: new Date(new Date().setDate(new Date().getDate() + 3)),
    end: new Date(new Date().setDate(new Date().getDate() + 3)),
    backgroundColor: '#FFC107',
  },
  {
    id: '5',
    title: 'Quarterly Review',
    start: new Date(new Date().setDate(new Date().getDate() + 5)),
    end: new Date(new Date().setDate(new Date().getDate() + 5)),
    backgroundColor: '#9C27B0',
  },
];

export const Default: Story = {
  args: {
    className: 'max-w-[800px] max-h-[800px] overflow-auto',
    events: events,
    initialView: 'dayGridMonth',
    weekends: true,
  },
};

export const WeekView: Story = {
  args: {
    className: 'max-w-[800px] max-h-[800px] overflow-auto',
    events: events,
    initialView: 'timeGridWeek',
    weekends: true,
  },
};

export const DayView: Story = {
  args: {
    className: 'max-w-[800px] max-h-[800px] overflow-auto',
    events: events,
    initialView: 'timeGridDay',
    weekends: true,
  },
};

export const ListView: Story = {
  args: {
    className: 'max-w-[800px] max-h-[800px] overflow-auto',
    events: events,
    initialView: 'listWeek',
    weekends: true,
  },
};

export const Interactive: Story = {
  args: {
    className: 'max-w-[800px] max-h-[800px] overflow-auto',
    events: events,
    initialView: 'dayGridMonth',
    weekends: true,
    selectable: true,
    editable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This version allows selecting date ranges and dragging/resizing events.',
      },
    },
  },
};
