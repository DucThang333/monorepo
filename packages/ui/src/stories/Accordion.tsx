import React from "react";
import { Accordion } from "@/components/Accordion";

/** Primary UI component for user interaction */
export const AccordionExample = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f8fafc] rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#1e293b]">FAQ</h2>
      <Accordion 
        className="w-full space-y-3"
        itemClassName="border border-[#e2e8f0] rounded-lg bg-white hover:bg-[#f8fafc] transition-colors"
        triggerClassName="px-4 py-3 font-medium hover:text-[#0f172a]"
        contentClassName="px-4 py-3 text-[#475569] border-t border-[#f1f5f9]"
        items={[
          {
            value: "item-1",
            trigger: "Is it accessible?",
            content: "Yes. It adheres to the WAI-ARIA design patterns."
          },
          {
            value: "item-2",
            trigger: "Is it styled?",
            content: "Yes. It comes with default styles that matches the other components' aesthetic."
          },
          {
            value: "item-3",
            trigger: "Is it animated?",
            content: "Yes. It's animated by default, but you can disable it if you prefer."
          }
        ]}
      />
    </div>
  );
};
