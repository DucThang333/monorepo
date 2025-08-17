import {
  Column,
  flexRender,
  PaginationState,
  Table,
  useReactTable as useTanStackReactTable,
  ColumnDef,
  getCoreRowModel,
  TableOptions,
  getPaginationRowModel,
} from '@tanstack/react-table';

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table as TableShad,
} from '@/components/shadcn/table';

import { ArrowDownUp, ArrowDownWideNarrow, ArrowUpNarrowWide } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Pagination } from '@/components/pagination';

function useReactTable<TData>(options: TableOptions<TData>) {
  return useTanStackReactTable({
    // overite default options
    enableSorting: true,
    enableFilters: true,
    enableColumnResizing: false,
    ...options, // allow override
  });
}

type TableProps<T> = {
  table: Table<T>;
};
function TableCustom<T>(props: TableProps<T>) {
  const { table } = props;
  console.log(table.getState().pagination.pageSize);
  return (
    <div className="p-2">
      <div className="h-2" />
      <TableShad>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    <div
                      {...{
                        className: cn(
                          'flex items-center',
                          header.column.columnDef.enableSorting
                            ? 'cursor-pointer select-none flex gap-1'
                            : ''
                        ),
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.columnDef.enableSorting &&
                        ({
                          asc: <ArrowUpNarrowWide size={17} />,
                          desc: <ArrowDownWideNarrow size={17} />,
                        }[header.column.getIsSorted() as string] ?? <ArrowDownUp size={17} />)}
                      {header.column.columnDef.enableColumnFilter ? (
                        <div>
                          <Filter
                            column={header.column}
                            table={table}
                          />
                        </div>
                      ) : null}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </TableShad>
      <Pagination
        pageIndex={table.getState().pagination.pageIndex}
        pageSize={table.getState().pagination.pageSize}
        totalPage={Math.ceil(table.getRowCount() / table.getState().pagination.pageSize)}
        setPageIndex={(index) => {
          table.setPageIndex(index);
        }}
        setPageSize={(pageSize) => {
          table.setPageSize(pageSize);
        }}
      />
    </div>
  );
}

type FilterProps<T> = {
  column: Column<any, any>;
  table: Table<T>;
};

function Filter<T>(props: FilterProps<T>) {
  const { table, column } = props;
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === 'number' ? (
    <div
      className="flex space-x-2"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [e.target.value, old?.[1]])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [old?.[0], e.target.value])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      className="w-36 border shadow rounded"
      onChange={(e) => column.setFilterValue(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? '') as string}
    />
  );
}

export { TableCustom, Filter, useReactTable, getCoreRowModel, getPaginationRowModel };
export type { TableProps, FilterProps, PaginationState, ColumnDef };
