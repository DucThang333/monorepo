import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/components/Calendar";
import { Button } from "@/components/Button";
import { addDays, format } from "date-fns";

const meta = {
  title: "UI/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "range", "multiple"],
      description: "Selection mode of the calendar",
    },
    disabled: {
      control: "boolean",
      description: "Whether the calendar is disabled",
    },
    initialFocus: {
      control: "boolean",
      description: "Whether to focus the calendar initially",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    mode: "single",
  },
};

export const Range: Story = {
  args: {
    mode: "range",
    selected: {
      from: new Date(),
      to: addDays(new Date(), 7),
    },
  },
};

export const Multiple: Story = {
  args: {
    mode: "multiple",
    selected: [new Date(), addDays(new Date(), 2), addDays(new Date(), 5)],
  },
};

export const WithDefaultSelected: Story = {
  args: {
    mode: "single",
    selected: new Date(),
  },
};

export const Disabled: Story = {
  args: {
    mode: "single",
    disabled: true,
  },
};

// Interactive examples
export const SingleSelectInteractive = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      <p className="text-center text-muted-foreground">
        Selected date: {date ? format(date, "PPP") : "None"}
      </p>
      <div className="flex justify-center space-x-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setDate(new Date())}
        >
          Today
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setDate(undefined)}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export const RangeSelectInteractive = () => {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to?: Date | undefined;
  } | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          className="rounded-md border"
        />
      </div>
      <p className="text-center text-muted-foreground">
        {dateRange?.from ? (
          dateRange.to ? (
            <>
              {format(dateRange.from, "PPP")} - {format(dateRange.to, "PPP")}
            </>
          ) : (
            format(dateRange.from, "PPP")
          )
        ) : (
          "No date selected"
        )}
      </p>
      <div className="flex justify-center space-x-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            setDateRange({
              from: new Date(),
              to: addDays(new Date(), 7),
            })
          }
        >
          This week
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setDateRange(undefined)}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export const MultipleSelectInteractive = () => {
  const [dates, setDates] = useState<Date[] | undefined>([
    new Date(),
    addDays(new Date(), 2),
    addDays(new Date(), 5),
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <Calendar
          mode="multiple"
          selected={dates}
          onSelect={setDates}
          className="rounded-md border"
        />
      </div>
      <p className="text-center text-muted-foreground">
        Selected dates: {dates?.length || 0}
      </p>
      <div className="flex justify-center space-x-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            setDates([new Date(), addDays(new Date(), 2), addDays(new Date(), 5)])
          }
        >
          Select 3 days
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setDates([])}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

// Demo with all modes side by side
export const AllCalendarModes = () => {
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to?: Date | undefined;
  } | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    new Date(),
    addDays(new Date(), 2),
    addDays(new Date(), 5),
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-center">Single Date</h3>
        <Calendar
          mode="single"
          selected={singleDate}
          onSelect={setSingleDate}
          className="rounded-md border mx-auto"
        />
        <p className="text-center text-sm text-muted-foreground">
          {singleDate ? format(singleDate, "PPP") : "No date selected"}
        </p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-center">Date Range</h3>
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          className="rounded-md border mx-auto"
        />
        <p className="text-center text-sm text-muted-foreground">
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, "PPP")} to {format(dateRange.to, "PPP")}
              </>
            ) : (
              format(dateRange.from, "PPP")
            )
          ) : (
            "No range selected"
          )}
        </p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-center">Multiple Dates</h3>
        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDates}
          className="rounded-md border mx-auto"
        />
        <p className="text-center text-sm text-muted-foreground">
          {multipleDates?.length 
            ? `${multipleDates.length} dates selected` 
            : "No dates selected"}
        </p>
      </div>
    </div>
  );
};
