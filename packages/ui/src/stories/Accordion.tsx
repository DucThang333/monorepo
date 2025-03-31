import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";

/** Primary UI component for user interaction */
export const AccordionExample = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f8fafc] rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#1e293b]">FAQ</h2>
      <Accordion type="multiple" collapsible className="w-full space-y-3">
        <AccordionItem
          value="item-1"
          className="border border-[#e2e8f0] rounded-lg bg-white hover:bg-[#f8fafc] transition-colors"
        >
          <AccordionTrigger className="px-4 py-3 font-medium text-red hover:text-[#0f172a]">
            Is it accessible?s
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-[#475569] border-t border-[#f1f5f9]">
            Yes. It adheres to the WAI-ARIA design patterns.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border border-[#e2e8f0] rounded-lg bg-white hover:bg-[#f8fafc] transition-colors"
        >
          <AccordionTrigger className="px-4 py-3 font-medium text-[#334155] hover:text-[#0f172a]">
            Is it styled?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-[#475569] border-t border-[#f1f5f9]">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border border-[#e2e8f0] rounded-lg bg-white hover:bg-[#f8fafc] transition-colors"
        >
          <AccordionTrigger className="px-4 py-3 font-medium text-[#334155] hover:text-[#0f172a]">
            Is it animated?
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 text-[#475569] border-t border-[#f1f5f9]">
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
