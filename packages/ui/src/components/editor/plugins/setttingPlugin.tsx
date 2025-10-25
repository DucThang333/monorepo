import { EllipsisVertical } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@package/ui/components/shadcn/popover';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@package/ui/components/shadcn/command';
import { SettingFontSize } from './settings/fontSize';
import { HeadingSetting } from './settings/heading';

type SettingPluginProps = {};

export function SettingPlugin({}: SettingPluginProps) {
  return (
    <Popover>
      <PopoverTrigger className="p-2 h-fit ">
          <div className='hover:text-highlight cursor-pointer w-8 h-8 flex items-center justify-center'>
            <EllipsisVertical size={19} />
          </div>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 w-auto min-w-40"
        align="end"
      >
        <Command className="bg-transparent">
          <CommandList>
            <CommandGroup heading="Global">
              <CommandSeparator />
              <CommandItem>
                <SettingFontSize />
              </CommandItem>
              <CommandItem>
                <HeadingSetting />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
