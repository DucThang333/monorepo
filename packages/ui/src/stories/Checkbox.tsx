import React from "react";
import { Checkbox } from "@/components/checkbox";

/** Primary UI component for user interaction */
export const CheckboxExample = () => {
  console.log("CheckboxExample");
  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f8fafc] rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#1e293b]">
        Checkbox Component
      </h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="marketing" defaultChecked />
          <label
            htmlFor="marketing"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Receive marketing emails
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <label
            htmlFor="disabled"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled option
          </label>
        </div>

        <div className="border rounded-md p-4 bg-white">
          <div className="mb-3 text-sm font-medium">
            Select your preferred contact methods:
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="email" />
              <label
                htmlFor="email"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sms" />
              <label
                htmlFor="sms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                SMS
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="phone" />
              <label
                htmlFor="phone"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Phone
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
