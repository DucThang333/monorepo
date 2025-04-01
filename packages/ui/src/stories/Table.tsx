import React from "react";
import { Table as UITable } from "../components/tables/table";
import { ColumnDef, flexRender } from "@tanstack/react-table";

// Create a mock DefinedUseQueryResult to simulate the query prop
interface MockQueryResult<T> {
  data: T[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export interface TableDemoProps {
  pageSize?: number;
  enablePagination?: boolean;
}

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

export function TableDemo({ pageSize = 10, enablePagination = true }: TableDemoProps) {
  // Sample data
  const data: Person[] = React.useMemo(
    () => [
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
      {
        id: '6',
        firstName: 'Sarah',
        lastName: 'Wilson',
        age: 29,
        visits: 12,
        status: 'active',
        progress: 80,
      },
      {
        id: '7',
        firstName: 'David',
        lastName: 'Miller',
        age: 42,
        visits: 7,
        status: 'active',
        progress: 55,
      },
      {
        id: '8',
        firstName: 'Emily',
        lastName: 'Taylor',
        age: 31,
        visits: 4,
        status: 'inactive',
        progress: 40,
      },
      {
        id: '9',
        firstName: 'James',
        lastName: 'Anderson',
        age: 38,
        visits: 9,
        status: 'active',
        progress: 70,
      },
      {
        id: '10',
        firstName: 'Emma',
        lastName: 'Thomas',
        age: 27,
        visits: 6,
        status: 'active',
        progress: 85,
      },
    ],
    []
  );

  // Define columns
  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        header: 'Name',
        footer: props => props.column.id,
        columns: [
          {
            accessorKey: 'firstName',
            header: 'First Name',
            cell: info => info.getValue(),
          },
          {
            accessorFn: row => row.lastName,
            id: 'lastName',
            header: 'Last Name',
            cell: info => info.getValue(),
          },
        ],
      },
      {
        header: 'Info',
        footer: props => props.column.id,
        columns: [
          {
            accessorKey: 'age',
            header: 'Age',
            cell: info => info.getValue(),
          },
          {
            accessorKey: 'visits',
            header: 'Visits',
            cell: info => info.getValue(),
          },
          {
            accessorKey: 'status',
            header: 'Status',
            cell: info => (
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  info.getValue() === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {info.getValue() as string}
              </span>
            ),
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            cell: info => (
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${info.getValue()}%` }}
                ></div>
              </div>
            ),
          },
        ],
      },
    ],
    []
  );

  // Mock query result
  const mockQuery: MockQueryResult<Person> = {
    data,
    isLoading: false,
    isError: false,
    error: null,
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <UITable
        columns={columns}
        query={mockQuery as any}
        flexRender={flexRender}
        enablePagination={enablePagination}
      />
    </div>
  );
}
