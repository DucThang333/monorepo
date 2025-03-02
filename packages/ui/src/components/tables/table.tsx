import { CellContext, ColumnDef, ColumnDefTemplate, ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, HeaderContext, useReactTable, type Table } from "@tanstack/react-table"
import { Pagination } from "./pagination"
import { Filter } from "./filter"
import { DefinedUseQueryResult} from "@package/query"


type TableParams<T> = {
    columns: ColumnDef<T>[],
    flexRender:(header:ColumnDefTemplate<HeaderContext<any, unknown>> | undefined,
        context: HeaderContext<any, unknown>)=>JSX.Element,
    enablePagination?:boolean,
    query:DefinedUseQueryResult<T[], any>,
    columnFilters?:ColumnFiltersState
}
export function Table<T>({
    columns,
    query,
    flexRender,
    columnFilters,
    enablePagination
}:TableParams<T>){
    const table = useReactTable({
        columns,
        data:query.data,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: ()=>{},
        //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
        state: {
          pagination:{
            pageIndex:1,
            pageSize:20
          },
          columnFilters:columnFilters
        },
        // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
      })
    return <div className="p-2 block max-w-full overflow-x-scroll overflow-y-hidden">
    <div className="h-2" />
    <table className="w-full ">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              return (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{ position: 'relative', width: header.getSize() }}
                >
                  {header.isPlaceholder
                    ? null
                    : (flexRender ? 
                        flexRender(     
                            header.column.columnDef.header,
                            header.getContext())
                        :flexRenderDefault(
                        header.column.columnDef.header,
                        header.getContext()
                      ))}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      ) : null}
                  {header.column.getCanResize() && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`resizer ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`}
                    ></div>
                  )}
                </th>
              )
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                return (
                  <td key={cell.id} style={{ width: cell.column.getSize() }}>
                    {flexRenderDefault(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    {enablePagination && <Pagination table={table}/>}
    <div className="h-4" />
  </div>
}

function flexRenderDefault(
        header:ColumnDefTemplate<HeaderContext<any, unknown>> | ColumnDefTemplate<CellContext<any, unknown>> | undefined,
        context: HeaderContext<any, unknown> | CellContext<any, unknown>){
    return <div>content</div>
}