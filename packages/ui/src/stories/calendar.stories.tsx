import { Meta, StoryObj } from '@storybook/react-webpack5';
import * as React from 'react';
import { Calendar } from '@/components/calendar';
export function CalendarStory() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  );
}
const meta = {
  title: 'Component/Calendar',
  component: CalendarStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof CalendarStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
