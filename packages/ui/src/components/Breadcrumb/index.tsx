import * as React from "react";
import { cn } from "../../lib/utils";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
  children: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  separator = "/",
  children,
  className,
  ...props
}) => {
  const items = React.Children.toArray(children);
  return (
    <nav className={cn("breadcrumb flex items-center gap-2 text-sm", className)} {...props} aria-label="Breadcrumb">
      {items.map((child, idx) => (
        <React.Fragment key={idx}>
          {child}
          {idx < items.length - 1 && <span className="mx-1 text-muted-foreground">{separator}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
