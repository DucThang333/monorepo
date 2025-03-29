import {
  Accordion as AccordionDefault,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import React from "react";
import { cn } from "@/lib/utils";

export type AccordionProps = {
  items: {
    trigger: React.ReactNode;
    content: React.ReactNode;
    value: string;
  }[];
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
};

export function Accordion(props: AccordionProps) {
  const {
    items,
    className,
    itemClassName,
    triggerClassName,
    contentClassName,
    ...rest
  } = props;

  return (
    <AccordionDefault
      type="multiple"
      className={cn("w-full", className)}
      {...rest}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className={cn("border-b", itemClassName)}
        >
          <AccordionTrigger
            className={cn("hover:no-underline", triggerClassName)}
          >
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className={contentClassName}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionDefault>
  );
}

export { AccordionContent, AccordionItem, AccordionTrigger };
