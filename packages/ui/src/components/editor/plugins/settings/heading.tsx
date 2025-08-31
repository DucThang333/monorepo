import { Popover, PopoverTrigger } from '@package/ui/components/shadcn/popover';
import { Heading } from 'lucide-react';

export function HeadingSetting() {
  return (
    <Popover>
      <PopoverTrigger>
        {' '}
        <div className="flex items-center gap-2">
          <Heading />
          Heading
        </div>
      </PopoverTrigger>
    </Popover>
  );
}
