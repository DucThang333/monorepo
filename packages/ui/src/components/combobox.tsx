'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@package/ui/lib/utils';
import { Button } from '@package/ui/components/shadcn/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@package/ui/components/shadcn/command';
import { Popover, PopoverContent, PopoverTrigger } from '@package/ui/components/shadcn/popover';

export type ComboboxItemType = {
  value: string;
  label: React.ReactNode;
};

export type ComboboxProps = {
  items: ComboboxItemType[];
  placeholder?: string;
  model?: string;
  isSearching?: boolean;
  classPopoverContent?: string;
  classPopoverTrigger?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function Combobox(props: ComboboxProps) {
  const {
    items,
    placeholder,
    model,
    isSearching,
    classPopoverContent,
    classPopoverTrigger,
    value,
    onChange,
  } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('w-[200px] justify-between', classPopoverTrigger)}
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : `Select ${model ?? 'item'}...`}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn('w-[200px] p-0', classPopoverContent)}>
        <Command>
          {isSearching && (
            <CommandInput
              placeholder={placeholder ?? `Search ${model ?? 'item'}...`}
              className="h-9"
            />
          )}
          <CommandList>
            <CommandEmpty>No {model ?? 'item'} found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    if (onchange) onChange(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn('ml-auto', value === item.value ? 'opacity-100' : 'opacity-0')}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
