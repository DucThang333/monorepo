import { Table } from "@tanstack/react-table"
import { cn } from "@/lib/utils"
import { Input } from "@/components/inits/input"
import LeftArrow from "@/components/icons/left-arrow"
import {debounce} from "@package/lodash"
import { useEffect, useMemo, useState } from "react"

type PaginationParams = {
    table: Table<any>
}

export function Pagination({
    table
}: PaginationParams) {
    const [directPage, setDirectPage] = useState<Number|undefined>(table.getState().pagination.pageIndex + 1)
    const changeDirectPage = useMemo(() => debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        const page = e.target.value ? Number(e.target.value) - 1 : 0
        table.setPageIndex(page)
    },300), [table])
    useEffect(() => {
        setDirectPage(table.getState().pagination.pageIndex + 1)
    }, [table.getState().pagination.pageIndex])
    return (
        <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button
                        className={cn(
                            "flex h-8 items-center justify-center ",
                            !table.getCanPreviousPage() ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer hover:text-neutral-600"
                        )}
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        aria-label="Go to previous page"
                    >
                        <LeftArrow />Previous
                    </button>
                    <div className="flex items-center">
                        <span className="text-sm font-medium">
                            Page {table.getState().pagination.pageIndex + 1} of{' '}
                            {table.getPageCount().toLocaleString()}
                        </span>
                    </div>
                    <button
                        className={cn(
                            "flex h-8 items-center justify-center",
                            !table.getCanNextPage() ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer hover:text-neutral-600"
                        )}
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        aria-label="Go to next page">
                        Next<LeftArrow className="rotate-180" />
                    </button>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Go to page:</span>
                        <Input
                            type="number"
                            min="1"
                            max={table.getPageCount()}
                            value={String(directPage)}
                            onChange={(e)=>{
                                if(!e.target.value) {
                                    setDirectPage(undefined)
                                    return
                                }
                                if(Number(e.target.value) < 1 || Number(e.target.value) > table.getPageCount()) {
                                    return
                                }
                                setDirectPage(Number(e.target.value))
                                changeDirectPage(e)
                            }}
                            className="h-8 w-16 px-2 py-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <label className="text-sm text-muted-foreground">
                            Rows per page
                        </label>
                        <select
                            value={table.getState().pagination.pageSize}
                            onChange={e => {
                                table.setPageSize(Number(e.target.value))
                            }}
                            className="h-8 rounded-lg border border-input bg-background px-2 text-sm focus:outline-none"
                        >
                            {[10, 20, 30, 40, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}