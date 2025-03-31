import React from "react";
import { cn } from "@/lib/utils";

export interface ComponentLoaderProps {
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  loadingText?: string;
  loadingComponent?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export function ComponentLoader({
  isLoading = false,
  children,
  className,
  loadingText = "Loading...",
  loadingComponent,
  size = "md",
  ...props
}: ComponentLoaderProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  if (isLoading) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center p-4",
          className
        )}
        {...props}
      >
        {loadingComponent || (
          <>
            <div
              className={cn(
                "animate-spin rounded-full border-2 border-current border-t-transparent",
                sizeClasses[size]
              )}
            />
            {loadingText && (
              <p className="mt-2 text-sm text-muted-foreground">
                {loadingText}
              </p>
            )}
          </>
        )}
      </div>
    );
  }

  return <>{children}</>;
}
