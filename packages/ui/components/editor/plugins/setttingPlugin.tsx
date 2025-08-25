import { EllipsisVertical } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/shadcn/popover';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/shadcn/command';
import { SettingFontSize } from './settings/fontSize';
import { HeadingSetting } from './settings/heading';

type SettingPluginProps = {};

export function SettingPlugin({}: SettingPluginProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <EllipsisVertical
          size={19}
          color="gray"
        />
      </PopoverTrigger>
      <PopoverContent
        className="p-0 w-auto min-w-40"
        align="end"
      >
        <Command>
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
            <CommandGroup heading="user">
              <CommandSeparator />
              <CommandItem></CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
