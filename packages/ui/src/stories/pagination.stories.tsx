import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Pagination } from '@package/ui/components/pagination';
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@package/ui/components/table';

export function PaginationStory() {
  const table = useReactTable({
    data: [],
    columns: [],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: 99,
    initialState: {
      pagination: {
        pageIndex: 8,
        pageSize: 10,
      },
    },
  });
  console.log('pageIndex', table.getState().pagination.pageIndex);
  return (
    <Pagination
      pageIndex={table.getState().pagination.pageIndex}
      totalPage={Math.ceil(table.getRowCount() / table.getState().pagination.pageSize)}
      setPageIndex={(index) => {
        table.setPageIndex(index);
      }}
    />
  );
}

const meta = {
  title: 'Component/Pagination',
  component: PaginationStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof PaginationStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
