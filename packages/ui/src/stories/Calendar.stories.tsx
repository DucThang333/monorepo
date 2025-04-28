import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/components/Calendar";
import { Button } from "@/components/Button";
import dayjs from "@package/date";

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
      from: dayjs().toDate(),
      to: dayjs().add(7, "day").toDate(),
    },
  },
};

export const Multiple: Story = {
  args: {
    mode: "multiple",
    selected: [dayjs().toDate(), dayjs().add(2, "day").toDate(), dayjs().add(5, "day").toDate()],
  },
};

export const WithDefaultSelected: Story = {
  args: {
    mode: "single",
    selected: dayjs().toDate(),
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
        Selected date: {date ? dayjs(date).format("PPP") : "None"}
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
    from: dayjs().toDate(),
    to: dayjs().add(7, "day").toDate(),
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
              {dayjs(dateRange.from).format("PPP")} - {dayjs(dateRange.to).format("PPP")}
            </>
          ) : (
            dayjs(dateRange.from).format("PPP")
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
              from: dayjs().toDate(),
              to: dayjs().add(7, "day").toDate(),
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
    dayjs().toDate(),
    dayjs().add(2, "day").toDate(),
    dayjs().add(5, "day").toDate(),
  ]);

  return (
    <div className="space-y-4 w-[1800px]">
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
            setDates([dayjs().toDate(), dayjs().add(2, "day").toDate(), dayjs().add(5, "day").toDate()])
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
    from: dayjs().toDate(),
    to: dayjs().add(7, "day").toDate(),
  });
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    dayjs().toDate(),
    dayjs().add(2, "day").toDate(),
    dayjs().add(5, "day").toDate(),
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-center">Single Date</h3>
        <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={singleDate}
          onSelect={setSingleDate}
          className="rounded-md border mx-auto"
        />
        </div>
        <p className="text-center text-sm text-muted-foreground">
          {singleDate ? dayjs(singleDate).format("PPP") : "No date selected"}
        </p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-center">Date Range</h3>
        <div className="flex justify-center"> 
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            className="rounded-md border mx-auto"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground">
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {dayjs(dateRange.from).format("PPP")} to {dayjs(dateRange.to).format("PPP")}
              </>
            ) : (
              dayjs(dateRange.from).format("PPP")
            )
          ) : (
            "No range selected"
          )}
        </p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-center">Multiple Dates</h3>
        <div className="flex justify-center">
        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDates}
          className="rounded-md border mx-auto"
        />
        </div>
        <p className="text-center text-sm text-muted-foreground">
          {multipleDates?.length 
            ? `${multipleDates.length} dates selected` 
            : "No dates selected"}
        </p>
      </div>
    </div>
  );
};
