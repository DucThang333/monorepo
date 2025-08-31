import {
  Pagination as PaginationShad,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationStart,
  PaginationEnd,
} from '@package/ui/components/shadcn/pagination';
import { Select, SelectContent, SelectTrigger, SelectValue } from '@package/ui/components/select';
import { Combobox, ComboboxItemType } from './combobox';

type PaginationProps = {
  pageIndex: number;
  pageSize: number;
  totalPage: number;
  setPageIndex: (page: number) => void;
  setPageSize: (pageSize: number) => void;
};

const paginationSizes: ComboboxItemType[] = [
  {
    label: '15',
    value: '15',
  },
  {
    label: '25',
    value: '25',
  },
  {
    label: '50',
    value: '50',
  },
  {
    label: '100',
    value: '100',
  },
];

export function Pagination(props: PaginationProps) {
  const { pageIndex, totalPage, setPageIndex, setPageSize, pageSize } = props;
  const ltPagiantion = Array.from(
    {
      length: totalPage < 6 ? totalPage - 2 : pageIndex > 4 && pageIndex + 3 < totalPage ? 3 : 4,
    },
    (_, i) => {
      if (pageIndex > 4 && pageIndex + 3 < totalPage) return pageIndex - 1 + i;
      if (pageIndex > 4) return totalPage - 4 + i;
      if (pageIndex + 3 < totalPage || totalPage < 6) return i + 2;
    }
  );
  return (
    <PaginationShad className="justify-between">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPageIndex(pageIndex - 1)}
            disabled={pageIndex === 1}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive={pageIndex === 1}
            onClick={() => setPageIndex(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
        {pageIndex - 1 > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {ltPagiantion.map((pg) => (
          <PaginationItem onClick={() => setPageIndex(pg)}>
            <PaginationLink isActive={pg === pageIndex}>{pg}</PaginationLink>
          </PaginationItem>
        ))}
        {totalPage > pageIndex + 3 && totalPage > 6 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {totalPage !== 1 && (
          <PaginationItem>
            <PaginationLink
              isActive={totalPage === pageIndex}
              onClick={() => setPageIndex(totalPage)}
            >
              {totalPage}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPageIndex(pageIndex + 1)}
            disabled={pageIndex === totalPage}
          />
        </PaginationItem>
      </PaginationContent>
      <div className="flex gap-1 items-center">
        <p className="text-sm text-gray-500">items per page</p>
        <Combobox
          items={paginationSizes}
          model="page size"
          placeholder="page size"
          classPopoverContent="w-[70px]"
          classPopoverTrigger="w-[70px]"
          value={String(pageSize)}
          setValue={(value) => setPageSize(Number(value))}
        />
      </div>
    </PaginationShad>
  );
}
