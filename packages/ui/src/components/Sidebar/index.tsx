import * as React from "react";
import { cn } from "../../lib/utils";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";

// Constants
const SIDEBAR_WIDTH = "250px";
const SIDEBAR_WIDTH_COLLAPSED = "60px";
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// Context for sidebar state
type SidebarContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextType | null>(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

interface SidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function SidebarProvider({
  children,
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  ...props
}: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  
  // Handle controlled state
  const handleOpenChange = React.useCallback(
    (value: boolean) => {
      if (setOpenProp) {
        setOpenProp(value);
      } else {
        setOpen(value);
      }
      
      // Set cookie for persistence
      if (typeof document !== "undefined") {
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      }
    },
    [setOpenProp]
  );
  
  const toggleSidebar = React.useCallback(() => {
    handleOpenChange(!open);
  }, [open, handleOpenChange]);
  
  // Use controlled state if provided
  const isOpen = openProp !== undefined ? openProp : open;
  
  return (
    <SidebarContext.Provider
      value={{
        open: isOpen,
        setOpen: handleOpenChange,
        toggleSidebar,
      }}
    >
      <div className="flex h-full" {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  width?: number;
  collapsedWidth?: number;
  side?: "left" | "right";
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ 
    className, 
    children, 
    collapsed, 
    width = 250, 
    collapsedWidth = 60,
    side = "left",
    ...props 
  }, ref) => {
    const { open } = useSidebar();
    const isCollapsed = collapsed !== undefined ? collapsed : !open;
    
    return (
      <aside
        ref={ref}
        data-state={isCollapsed ? "collapsed" : "expanded"}
        data-side={side}
        className={cn(
          "sidebar relative z-10 flex h-full flex-col bg-background text-foreground",
          "border-r shadow-sm transition-all duration-300 ease-in-out",
          side === "right" && "border-l border-r-0 ml-auto",
          className
        )}
        style={{
          width: isCollapsed ? `${collapsedWidth}px` : `${width}px`,
          minWidth: isCollapsed ? `${collapsedWidth}px` : `${width}px`,
        }}
        {...props}
      >
        {children}
      </aside>
    );
  }
);
Sidebar.displayName = "Sidebar";

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref}
      className={cn("sidebar-header px-4 py-3 border-b sticky top-0 bg-background z-10", className)}
      {...props} 
    />
  )
);
SidebarHeader.displayName = "SidebarHeader";

export interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref}
      className={cn("sidebar-content flex-1 overflow-auto py-2", className)}
      {...props}
    />
  )
);
SidebarContent.displayName = "SidebarContent";

export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref}
      className={cn("sidebar-footer px-4 py-3 border-t mt-auto bg-background", className)}
      {...props} 
    />
  )
);
SidebarFooter.displayName = "SidebarFooter";

export interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, label, children, ...props }, ref) => (
    <div 
      ref={ref}
      className={cn("sidebar-group px-2 py-2", className)}
      {...props}
    >
      {label && (
        <h3 className="sidebar-group-label mb-2 px-2 text-xs font-medium text-muted-foreground">{label}</h3>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
);
SidebarGroup.displayName = "SidebarGroup";

export interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  ({ className, ...props }, ref) => {
    const { open, toggleSidebar } = useSidebar();
    
    return (
      <button
        ref={ref}
        type="button"
        onClick={toggleSidebar}
        className={cn(
          "sidebar-trigger inline-flex h-9 w-9 items-center justify-center rounded-md border",
          "text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          className
        )}
        {...props}
      >
        {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        <span className="sr-only">Toggle Sidebar</span>
      </button>
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";

export interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {}

export const SidebarMenu = React.forwardRef<HTMLUListElement, SidebarMenuProps>(
  ({ className, ...props }, ref) => (
    <ul 
      ref={ref}
      className={cn("sidebar-menu space-y-1 py-1", className)}
      {...props}
    />
  )
);
SidebarMenu.displayName = "SidebarMenu";

export interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export const SidebarMenuItem = React.forwardRef<HTMLLIElement, SidebarMenuItemProps>(
  ({ className, ...props }, ref) => (
    <li 
      ref={ref}
      className={cn("sidebar-menu-item", className)}
      {...props}
    />
  )
);
SidebarMenuItem.displayName = "SidebarMenuItem";

export interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, active, ...props }, ref) => (
    <button
      ref={ref}
      data-active={active ? "true" : "false"}
      className={cn(
        "sidebar-menu-button w-full text-left flex items-center gap-2 rounded-md px-3 py-2",
        "text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
        active && "bg-muted text-foreground",
        className
      )}
      {...props}
    />
  )
);
SidebarMenuButton.displayName = "SidebarMenuButton";

export interface SidebarMenuBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const SidebarMenuBadge = React.forwardRef<HTMLSpanElement, SidebarMenuBadgeProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "sidebar-menu-badge ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1",
        "text-[0.625rem] font-medium text-primary-foreground",
        className
      )}
      {...props}
    />
  )
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

export interface SidebarSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarSeparator = React.forwardRef<HTMLDivElement, SidebarSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref}
      className={cn("sidebar-separator my-2 h-px bg-border", className)}
      {...props}
    />
  )
);
SidebarSeparator.displayName = "SidebarSeparator";

export default Sidebar;
