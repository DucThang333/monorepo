import { CellContext, ColumnDefTemplate, ColumnResizeDirection, HeaderContext, type Table as TableType } from "@tanstack/react-table"
import { Pagination } from "./pagination"
import { Filter } from "./filter"
import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableScrollCustom,
} from "@/components/inits/table"
import { capitalizeFirstLetter } from "@package/utils"

// Import table styles
import './table.css'
import { cn } from "@/lib/utils"
import { Loading } from "../Loading"
import { useCallback, useEffect, useRef } from "react"
import { useTranslation } from "@package/i18next"

type TableParams<T> = {
  table: TableType<T>,
  flexHeaderRender?: (header: ColumnDefTemplate<HeaderContext<any, unknown>> | undefined,
    context: HeaderContext<any, unknown>) => JSX.Element,
  flexCellRender?: (cell: ColumnDefTemplate<CellContext<any, unknown>> | undefined,
    context: CellContext<any, unknown>) => JSX.Element,
  enablePagination?: boolean
  columnResizeDirection?: ColumnResizeDirection
  isLoading?: boolean
  fetchingMore?: ()=>void
  isHasLoadMore?: boolean
  stateFetchingMore?: "idle" | "loading" | "success" | "error"
  className?: string
}
export function Table<T>({
  table,
  flexHeaderRender,
  flexCellRender,
  enablePagination,
  columnResizeDirection = "ltr",
  isLoading = false,
  fetchingMore,
  isHasLoadMore = false,
  stateFetchingMore = "idle",
  className = ""
}: TableParams<T>) {
  const ref = useRef<HTMLTableElement>(null)
  const { t } = useTranslation()
  const handleScroll = useCallback(() => {
    if(!ref.current || !fetchingMore || !isHasLoadMore || stateFetchingMore === "loading") return  
    if(ref.current.scrollTop + ref.current.clientHeight >= ref.current.scrollHeight - 100){
      console.log("fetching more data...")
      fetchingMore()
    }
  }, [stateFetchingMore, fetchingMore, isHasLoadMore])

  useEffect(() => {
    if(!ref.current || !fetchingMore) return  
    console.log("fetching more data...")
    const fillUntilScroll = async () => {
      if(!ref.current?.scrollHeight || !ref.current?.clientHeight) return
      while (ref.current.scrollHeight < ref.current.clientHeight && isHasLoadMore) {
        console.log("fetching more data...")
        await fetchingMore(); // fetch more data
      }
    };
  
    fillUntilScroll();
  }, [ref.current, fetchingMore, isHasLoadMore]);


  return (
    <div className={cn("flex-1 p-2 flex flex-col max-w-full overflow-x-scroll overflow-y-hidden border border-gray-200", className)}>
      <TableScrollCustom ref={ref} onScroll={handleScroll} >
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{
                    position: 'relative',
                    width: header.getSize()
                  }}
                >
                  {/* Render header content if not a placeholder */}
                  {!header.isPlaceholder && (
                    <div className="flex flex-col space-y-1 p-2">
                      <div className="flex items-center">
                        {/* Use custom renderer or default */}
                        {flexHeaderRender
                          ? flexHeaderRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )
                          : flexRenderHeaderDefault(
                            header.column.columnDef.header,
                            header.getContext()
                          )
                        }

                        {/* Sort indicators */}
                        {header.column.getCanSort() && (
                          <span
                            className="ml-1 cursor-pointer inline-flex items-center justify-center"
                            onClick={() => header.column.toggleSorting()}
                          >
                            {header.column.getIsSorted() === 'asc' ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                <path d="m5 15 7-7 7 7" />
                              </svg>
                            ) : header.column.getIsSorted() === 'desc' ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                <path d="m19 9-7 7-7-7" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground opacity-50">
                                <path d="m7 15 5 5 5-5" />
                                <path d="m7 9 5-5 5 5" />
                              </svg>
                            )}
                          </span>
                        )}
                      </div>

                      {/* Filter component if applicable */}
                      {header.column.getCanFilter() && (
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Resizer handle */}
                  {header.column.getCanResize() && (
                    <div
                      onDoubleClick={() => header.column.resetSize()}
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={cn('resizer', {
                        'isResizing': header.column.getIsResizing()
                      }, columnResizeDirection)}
                    />
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            // Create a single row with the same number of cells as in the header
            <TableRow>
              <TableCell className="!h-[200px] text-center p-0" colSpan={100}>
                <div className="relative h-full w-full flex items-center justify-center">
                  <Loading label="Loading..." size="lg" variant="primary" />
                </div>
              </TableCell>
            </TableRow>
          ) : (
            // Actual data rows
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell
                    key={cell.id}
                    style={{ width: cell.column.getSize() }}
                  >
                    {/* Use custom cell renderer or default */}
                    {flexCellRender
                      ? flexCellRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )
                      : flexRenderCellDefault(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )
                    }
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
          {isHasLoadMore && stateFetchingMore === "loading" && (
            <TableRow className="!h-[100px]">
              <TableCell colSpan={100} className="text-center">
                <Loading label={capitalizeFirstLetter(t("tables.loading_more"))} size="lg" variant="primary" />
              </TableCell>
            </TableRow>
          )}
          {isHasLoadMore && stateFetchingMore === "error" && (
            <TableRow className="!h-[100px]">
              <TableCell colSpan={100} className="text-center">
                <p>{capitalizeFirstLetter(t("tables.error_load_more"))}</p>
              </TableCell>
            </TableRow>
          )}
          {!isHasLoadMore && stateFetchingMore === "success" && (
            <TableRow className="!h-[100px]">
              <TableCell colSpan={100} className="text-center">
                <p>{capitalizeFirstLetter(t("tables.no_more_data"))}</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableScrollCustom>
      <div className="mt-auto pb-3">
        <Pagination enablePagination={enablePagination ?? false} table={table} isLoading={isLoading} />
      </div>
    </div>
  )
}

function flexRenderHeaderDefault(
  header: ColumnDefTemplate<HeaderContext<any, unknown>> | ColumnDefTemplate<CellContext<any, unknown>> | undefined,
  context: HeaderContext<any, unknown> | CellContext<any, unknown>) {
  // Type guard to check if we have a valid function before calling it
  if (typeof header === 'function') {
    // Need to cast context as any to avoid TypeScript errors with the union type
    return header(context as any)
  }
  return <p className="text-gray-500 text-md font-black">{header}</p>;
}

function flexRenderCellDefault(
  cell: ColumnDefTemplate<CellContext<any, unknown>> | undefined,
  context: CellContext<any, unknown>): JSX.Element {
  // Type guard to check if we have a valid function before calling it
  if (typeof cell === 'function') {
    // Need to cast context as any to avoid TypeScript errors with the union type
    return cell(context as any)
  }
  return <></>;
}
