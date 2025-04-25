import React from "react";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const loadingVariants = cva(
  "animate-spin text-muted-foreground inline-block", 
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12",
      },
      variant: {
        default: "stroke-current",
        primary: "stroke-primary",
        secondary: "stroke-secondary",
        destructive: "stroke-destructive",
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface LoadingProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  label?: string;
  fullPage?: boolean;
}

export function Loading({ 
  className, 
  size,
  variant,
  label,
  fullPage = false,
  ...props 
}: LoadingProps) {
  const LoadingIndicator = (
    <div className={cn("flex flex-col items-center justify-center gap-2", className)} {...props}>
      <Loader2 className={cn(loadingVariants({ size, variant }))}/>
      {label && (
        <p className={cn(
          "text-muted-foreground animate-pulse",
          size === "sm" ? "text-xs" : "",
          size === "lg" ? "text-base" : "",
          size === "xl" ? "text-lg font-medium" : "",
        )}>
          {label}
        </p>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        {LoadingIndicator}
      </div>
    );
  }

  return LoadingIndicator;
}
