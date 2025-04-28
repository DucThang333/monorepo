import {
  useReactTable as useTanStackTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  TableOptions,
  Row,
  RowData,
  Table,
  PaginationState,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  ColumnOrderState,
  ExpandedState,
  GroupingState,
  ColumnPinningState,
} from '@tanstack/react-table';

// Re-export all TanStack table exports
export {
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type ColumnDef,
  type Row,
  type RowData,
  type Table,
  type PaginationState,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  type ColumnOrderState,
  type ExpandedState,
  type GroupingState,
  type ColumnPinningState,
};

/**
 * Custom useReactTable hook that sets manualPagination to true by default
 * This makes it easier to implement server-side pagination or custom pagination logic
 */
export function useReactTable<TData extends RowData>(
  options: Omit<TableOptions<TData>, 'manualPagination'> & { manualPagination?: boolean }
): Table<TData> {
  return useTanStackTable<TData>({
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    manualPagination: true, // Always true by default
    autoResetPageIndex: false,
    ...options, // Allow user to override if needed
  });
}
