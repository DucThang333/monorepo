import React from "react";
import { Switch } from "@/components/Switch";

/** Primary UI component for user interaction */
export const SwitchExample = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f8fafc] rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#1e293b]">Switch Component</h2>
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <Switch id="airplane-mode" />
          <label
            htmlFor="airplane-mode"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Airplane Mode
          </label>
        </div>
        
        <div className="flex items-center space-x-4">
          <Switch id="notifications" defaultChecked />
          <label
            htmlFor="notifications"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Enable Notifications
          </label>
        </div>
        
        <div className="flex items-center space-x-4">
          <Switch id="disabled-switch" disabled />
          <label
            htmlFor="disabled-switch"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled
          </label>
        </div>
        
        <div className="border rounded-md p-5 bg-white">
          <h3 className="text-base font-semibold mb-4">Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="dark-mode"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Dark Mode
              </label>
              <Switch id="dark-mode" />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="autoplay"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Autoplay Videos
              </label>
              <Switch id="autoplay" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="sound"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Sound Effects
              </label>
              <Switch id="sound" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
