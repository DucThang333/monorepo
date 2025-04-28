import * as React from "react";
import { cn } from "../../lib/utils";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  width?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed = false,
  width = 250,
  className,
  style,
  children,
  ...props
}) => (
  <aside
    className={cn(
      "sidebar h-full bg-muted border-r transition-all duration-200 overflow-auto",
      collapsed ? "w-0 min-w-0" : `w-[${width}px] min-w-[${width}px]`,
      className
    )}
    style={style}
    {...props}
  >
    {children}
  </aside>
);

export default Sidebar;
