import React from "react";
import {
  Tabs as TabsDefault,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/tabs";
import { cn } from "@/lib/utils";

export type TabItem = {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

export type TabsProps = React.ComponentPropsWithoutRef<typeof TabsDefault> & {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
  listClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  onChange?: (value: string) => void;
};

export function Tabs(props: TabsProps) {
  const {
    items,
    defaultValue = items[0]?.value,
    className,
    listClassName,
    triggerClassName,
    contentClassName,
    onChange,
    ...rest
  } = props;

  return (
    <TabsDefault
      defaultValue={defaultValue}
      onValueChange={onChange}
      className={cn("w-full", className)}
      {...rest}
    >
      <TabsList className={cn("grid grid-cols-" + items.length, listClassName)}>
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className={triggerClassName}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent
          key={item.value}
          value={item.value}
          className={contentClassName}
        >
          {item.content}
        </TabsContent>
      ))}
    </TabsDefault>
  );
}

export { TabsContent, TabsList, TabsTrigger };
