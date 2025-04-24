import React from "react";
import { Dialog } from "@/components/Dialog";
import { Button } from "@/components/Button";

/** Primary UI component for user interaction */
export const DialogExample = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f8fafc] rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#1e293b]">Dialog Component</h2>
      <Dialog
        trigger={<Button variant="outline">Open Dialog</Button>}
        title="Edit Profile"
        description="Make changes to your profile here. Click save when you're done."
        content={
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                defaultValue="John Doe"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="username" className="text-right text-sm font-medium">
                Username
              </label>
              <input
                id="username"
                defaultValue="@johndoe"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        }
        footer={
          <Button type="submit">Save changes</Button>
        }
        className="sm:max-w-[425px]"
        showCloseButton={true}
        onOpenChange={(open) => console.log("Dialog open state:", open)}
      />
    </div>
  );
};
