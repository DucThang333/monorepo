import { Meta, StoryObj } from '@storybook/react-webpack5';
import {
  ColumnDef,
  useReactTable,
  TableCustom,
  getCoreRowModel,
  getPaginationRowModel,
} from '@/components/table';
import { useMemo } from 'react';
import { Checkbox } from '@/components/checkbox';
import { Badge } from '@/components/badge';
import { Switch } from '@/components/switch';
import { EllipsisVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';

enum InvoiceStatus {
  PAID = 'paid',
  PENDING = 'pending',
  UN_PAID = 'unPaid',
}

class InvoiceStatusHelper {
  static getName(status: InvoiceStatus): string {
    switch (status) {
      case InvoiceStatus.PAID:
        return 'Thanh toán';
      case InvoiceStatus.PENDING:
        return 'Đang chờ duyệt';
      case InvoiceStatus.UN_PAID:
        return 'Chưa thanh toán';
    }
  }

  static getColor(status: InvoiceStatus): string {
    switch (status) {
      case InvoiceStatus.PAID:
        return 'green';
      case InvoiceStatus.PENDING:
        return 'orange';
      case InvoiceStatus.UN_PAID:
        return 'red';
    }
  }
  static getClassName(status: InvoiceStatus): string {
    switch (status) {
      case InvoiceStatus.PAID:
        return 'bg-green-600/70';
      case InvoiceStatus.PENDING:
        return 'bg-orange-600/70';
      case InvoiceStatus.UN_PAID:
        return 'bg-red-600/60';
    }
  }
}
type Invoice = {
  invoice: string;
  paymentStatus: InvoiceStatus;
  totalAmount: string;
  paymentMethod: string;
  isActive: boolean;
};

const invoices: Invoice[] = [
  {
    invoice: 'INV001',
    paymentStatus: InvoiceStatus.PAID,
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
    isActive: true,
  },
  {
    invoice: 'INV002',
    paymentStatus: InvoiceStatus.PENDING,
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
    isActive: false,
  },
  {
    invoice: 'INV003',
    paymentStatus: InvoiceStatus.UN_PAID,
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
    isActive: true,
  },
  {
    invoice: 'INV004',
    paymentStatus: InvoiceStatus.PAID,
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
    isActive: false,
  },
  {
    invoice: 'INV005',
    paymentStatus: InvoiceStatus.PAID,
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
    isActive: false,
  },
  {
    invoice: 'INV006',
    paymentStatus: InvoiceStatus.PENDING,
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
    isActive: true,
  },
  {
    invoice: 'INV007',
    paymentStatus: InvoiceStatus.UN_PAID,
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
    isActive: false,
  },
];

export function TableStory() {
  const columns = useMemo<ColumnDef<Invoice>[]>(() => {
    return [
      {
        accessorKey: '#',
        header: (props) => {
          return (
            <Checkbox
              onCheckedChange={() => {
                props.table.toggleAllRowsSelected();
              }}
              checked={props.table.getIsAllRowsSelected()}
            />
          );
        },
        cell: (props) => {
          return (
            <Checkbox
              checked={props.row.getIsSelected()}
              onCheckedChange={() => {
                props.row.toggleSelected();
              }}
            />
          );
        },
      },
      {
        accessorKey: 'invoice',
        header: 'ID',
        enableSorting: false,
      },
      {
        accessorKey: 'paymentMethod',
        header: 'Method',
        enableSorting: true,
      },
      {
        accessorKey: 'totalAmount',
        header: 'Total',
      },
      {
        accessorKey: 'paymentStatus',
        header: 'Status',
        cell: (props) => {
          const value = props.getValue() as InvoiceStatus;
          return (
            <Badge className={InvoiceStatusHelper.getClassName(value)}>
              {InvoiceStatusHelper.getName(value)}
            </Badge>
          );
        },
      },
      {
        accessorKey: 'isActive',
        header: 'Active',
        cell: (props) => {
          return (
            <Switch
              checked={props.getValue() as boolean}
              className="data-[state=checked]:bg-green-600/80"
            />
          );
        },
      },
      {
        id: 'action',
        header: () => {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical size={17} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => {
                    alert('bulk update');
                  }}
                >
                  Bulk Update
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    alert('bulk insert');
                  }}
                >
                  Insert
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
        cell: (props) => {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical size={17} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => {
                    alert(`update element has id : ${props.row.original.invoice}`);
                  }}
                >
                  Update
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    alert(`delete element has id : ${props.row.original.invoice}`);
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ];
  }, []);
  const table = useReactTable<Invoice>({
    data: invoices,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 1,
        pageSize: 15,
      },
    },
    manualPagination: true,
    rowCount: 127,
  });
  return <TableCustom table={table}></TableCustom>;
}

const meta = {
  title: 'Component/Table',
  component: TableStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof TableStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
