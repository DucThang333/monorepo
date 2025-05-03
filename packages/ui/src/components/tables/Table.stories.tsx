import React, { useEffect, useCallback, useState } from "react";
import type { Meta } from "@storybook/react";
import { Table } from "@/components/tables/table";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
} from "@/tanstack-react-table";
import { ColumnResizeDirection } from "@tanstack/react-table";

// Sample data type
interface Person {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}

// Status color mapping
const statusColors = {
  active: 'bg-green-500',
  inactive: 'bg-red-500',
  pending: 'bg-yellow-500'
};

export default {
  title: "UI/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    enablePagination: {
      control: { type: "boolean" },
      description: "Whether to enable pagination controls",
    },
    isLoading: {
      control: { type: "boolean" },
      description: "Whether to show loading state",
    },
    columnResizeDirection: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description: 'Direction of column resize',
      defaultValue: 'ltr'
    }
  },
} as Meta<typeof Table>;

// Create the showcase story with a table instance
export const Showcase = ({ 
  enablePagination = true, 
  columnResizeDirection = "ltr" as ColumnResizeDirection
}) => {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5
  });
  const [isLoading, setIsLoading] = React.useState(true);

  // Sample data
  const data = React.useMemo<Person[][]>(
    () => [[
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        age: 32,
        visits: 5,
        status: 'active',
        progress: 66,
      },
      {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        age: 28,
        visits: 10,
        status: 'inactive',
        progress: 45,
      },
      {
        id: '3',
        firstName: 'Bob',
        lastName: 'Johnson',
        age: 45,
        visits: 3,
        status: 'active',
        progress: 90,
      },
      {
        id: '4',
        firstName: 'Alice',
        lastName: 'Brown',
        age: 37,
        visits: 8,
        status: 'active',
        progress: 75,
      },
      {
        id: '5',
        firstName: 'Michael',
        lastName: 'Davis',
        age: 52,
        visits: 2,
        status: 'inactive',
        progress: 30,
      },
    ],[
      {
        id: '6',
        firstName: 'Sarah',
        lastName: 'Wilson',
        age: 42,
        visits: 1,
        status: 'active',
        progress: 80,
      },
      {
        id: '7',
        firstName: 'William',
        lastName: 'Taylor',
        age: 39,
        visits: 7,
        status: 'inactive',
        progress: 55,
      },
    ]],
    []
  );

  // Define columns
  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 60,
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 120,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 120,
      },
      {
        accessorKey: 'age',
        header: 'Age',
        size: 80,
      },
      {
        accessorKey: 'visits',
        header: 'Visits',
        size: 80,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 120,
        cell: (info) => {
          const status = info.getValue() as string;
          return (
            <div className="flex items-center">
              <span className={`h-2 w-2 rounded-full ${statusColors[status as keyof typeof statusColors]}`}></span>
              <span className="ml-2 capitalize">{status}</span>
            </div>
          );
        }
      },
      {
        accessorKey: 'progress',
        header: 'Progress',
        size: 120,
        cell: (info) => {
          const progress = info.getValue() as number;
          return (
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          );
        }
      },
    ],
    []
  );

  // Create table instance
  const table = useReactTable({
    data: data?.[pagination.pageIndex],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: pagination,
    },
    onPaginationChange: (e)=>{
      setPagination(e)
      setIsLoading(true)
      setTimeout(()=>{
        setIsLoading(false)
      },500)
    },
    rowCount: data?.flat().length || 0,
  });
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
  },[])



  return (
    <div className="flex flex-col h-screen p-4">
      <Table 
        table={table} 
        enablePagination={enablePagination}
        columnResizeDirection={columnResizeDirection}
        isLoading={isLoading}
      />
    </div>
  );
};

// Loading state story
export const LoadingState = () => {
  return <Showcase  />;
};

// Without pagination
export const WithoutPagination = () => {
  return <Showcase enablePagination={false} />;
};

// Generate mock data function
const generateMoreData = (start: number, count: number): Person[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: (start + i).toString(),
    firstName: `FirstName${start + i}`,
    lastName: `LastName${start + i}`,
    age: Math.floor(Math.random() * 50) + 20,
    visits: Math.floor(Math.random() * 15),
    status: ['active', 'inactive', 'pending'][Math.floor(Math.random() * 3)],
    progress: Math.floor(Math.random() * 100),
  }));
};

// Infinity scroll story
export const InfinityScroll = () => {
  const [data, setData] = useState<Person[]>(() => generateMoreData(0, 100));
  const [fetchState, setFetchState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 60,
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 120,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 120,
      },
      {
        accessorKey: 'age',
        header: 'Age',
        size: 80,
      },
      {
        accessorKey: 'visits',
        header: 'Visits',
        size: 80,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 120,
        cell: (info) => {
          const status = info.getValue() as string;
          return (
            <div className="flex items-center">
              <span className={`h-2 w-2 rounded-full ${statusColors[status as keyof typeof statusColors]}`}></span>
              <span className="ml-2 capitalize">{status}</span>
            </div>
          );
        }
      },
      {
        accessorKey: 'progress',
        header: 'Progress',
        size: 120,
        cell: (info) => {
          const progress = info.getValue() as number;
          return (
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          );
        }
      },
    ],
    []
  );

  const fetchMoreData = useCallback(() => {
    if (fetchState === "loading") return;
    
    setFetchState("loading");
    // Simulate API call
    setTimeout(() => {
      const newData = generateMoreData(data.length, 100);
      setData(prev => [...prev, ...newData]);
      setFetchState("success");
    }, 1000);
  }, [data.length, fetchState]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="flex flex-col h-screen p-4">
      <Table 
        table={table}
        enablePagination={false}
        // fetchingMore={fetchMoreData}
        isHasLoadMore={data.length <= 200}
        stateFetchingMore={"error"}
      />
    </div>
  );
};

InfinityScroll.parameters = {
  docs: {
    description: {
      story: 'This story demonstrates the infinity scroll functionality. The table will load more data when scrolled to the bottom.',
    },
  },
};
