import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitch } from './LanguageSwitch';
import { Table } from '@/components/tables/table';
import { useTranslation } from '@package/i18next';
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

// Define demo data type
type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
};

// Generate mock data
const generateData = (start: number, count: number): Person[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: (start + i).toString(),
    firstName: `FirstName${start + i}`,
    lastName: `LastName${start + i}`,
    age: Math.floor(Math.random() * 50) + 20,
    visits: Math.floor(Math.random() * 15),
    status: ['active', 'inactive', 'pending'][Math.floor(Math.random() * 3)],
  }));
};

const meta = {
  title: 'Components/LanguageSwitch',
  component: LanguageSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LanguageSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story
export const Basic: Story = {
  args: {},
};

// Create a wrapper component to demonstrate integration with Table
const LanguageSwitchWithTable = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Person[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [fetchingState, setFetchingState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Column helper
  const columnHelper = createColumnHelper<Person>();

  // Define columns
  const columns = [
    columnHelper.accessor('firstName', {
      header: () => t('common.first_name', 'First Name'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('lastName', {
      header: () => t('common.last_name', 'Last Name'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('age', {
      header: () => t('common.age', 'Age'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('visits', {
      header: () => t('common.visits', 'Visits'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('status', {
      header: () => t('common.status', 'Status'),
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('id', {
      header: () => t('common.actions', 'Actions'),
      cell: info => (
        <div className="flex gap-2">
          <button className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
            {t('common.view', 'View')}
          </button>
          <button className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
            {t('common.edit', 'Edit')}
          </button>
          <button className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
            {t('common.delete', 'Delete')}
          </button>
        </div>
      ),
    }),
  ];

  useEffect(() => {
    // Load initial data
    setData(generateData(0, 10));
  }, []);

  const fetchMoreData = () => {
    setFetchingState('loading');
    // Simulate API call
    setTimeout(() => {
      if (data.length >= 50) {
        setHasMore(false);
        setFetchingState('success');
      } else {
        setData(prev => [...prev, ...generateData(prev.length, 5)]);
        setFetchingState('idle');
      }
    }, 1500);
  };

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">
          {t('titles.language_switch', 'Language Switch')}
        </h2>
        <LanguageSwitch onLanguageChange={handleLanguageChange} />
      </div>
      
      <div>
        <h2 className="text-xl font-bold mb-2">
          {t('titles.table_example', 'Table Example With Infinity Scroll')}
        </h2>
          <Table 
            table={table}
            isLoading={isLoading}
            fetchingMore={fetchMoreData}
            isHasLoadMore={hasMore}
            stateFetchingMore={fetchingState}
            className="h-[800px]"
          />
      </div>
    </div>
  );
};

// Story that showcases language switch with table
export const WithTableExample: Story = {
  render: () => <LanguageSwitchWithTable />,
}; 