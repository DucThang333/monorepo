import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "danger" | "warning";
}

export const Badge: React.FC<BadgeProps> = ({ variant = "default", className, ...props }) => {
  return (
    <span
      className={cn(
        "inline-block rounded px-2 py-0.5 text-xs font-semibold",
        variant === "default" && "bg-primary text-white",
        variant === "secondary" && "bg-muted text-foreground",
        variant === "success" && "bg-green-500 text-white",
        variant === "danger" && "bg-red-500 text-white",
        variant === "warning" && "bg-yellow-400 text-black",
        className
      )}
      {...props}
    />
  );
};

export default Badge;
