import { CellContext, ColumnDefTemplate, HeaderContext, type Table as TableType } from "@tanstack/react-table"
import { Pagination } from "./pagination"
import { Filter } from "./filter"
import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/inits/table"


type TableParams<T> = {
    table: TableType<T>,
    flexHeaderRender?:(header:ColumnDefTemplate<HeaderContext<any, unknown>> | undefined,
        context: HeaderContext<any, unknown>)=>JSX.Element,
    flexCellRender?:(cell:ColumnDefTemplate<CellContext<any, unknown>> | undefined,
        context: CellContext<any, unknown>)=>JSX.Element,
    enablePagination?:boolean
}
export function Table<T>({
    table,
    flexHeaderRender,
    flexCellRender,
    enablePagination
}:TableParams<T>) {
    return (
      <div className="p-2 block max-w-full overflow-x-scroll overflow-y-hidden">
        <div className="h-2" />
        <UITable>
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
                        <span className="ml-1">
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </span>
                      )}
                    </div>
                    
                    {/* Filter component if applicable */}
                    {header.column.getCanFilter() && (
                      <div className="mt-1">
                        <Filter column={header.column} table={table} />
                      </div>
                    )}
                  </div>
                )}
                
                {/* Resizer handle */}
                {header.column.getCanResize() && (
                  <div
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`resizer ${
                      header.column.getIsResizing() ? 'isResizing' : ''
                    }`}
                  />
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map(row => (
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
        ))}
          </TableBody>
        </UITable>
        {enablePagination && <Pagination table={table}/>}
        <div className="h-4" />
      </div>
    )
}

function flexRenderHeaderDefault(
        header:ColumnDefTemplate<HeaderContext<any, unknown>> | ColumnDefTemplate<CellContext<any, unknown>> | undefined,
        context: HeaderContext<any, unknown> | CellContext<any, unknown>){
    // Type guard to check if we have a valid function before calling it
    if(typeof header === 'function') {
        // Need to cast context as any to avoid TypeScript errors with the union type
        return header(context as any)
    }
    return <p className="text-gray-500 text-md">{header}</p>;
}

function flexRenderCellDefault(
        cell:ColumnDefTemplate<CellContext<any, unknown>> | undefined,
        context: CellContext<any, unknown>):JSX.Element{
            // Type guard to check if we have a valid function before calling it
      if(typeof cell === 'function') {
          // Need to cast context as any to avoid TypeScript errors with the union type
          return cell(context as any)
      }
      return <></>;
}
