import { Skeleton as SkeletonBase } from ".";
import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps {
  className?: string;
  variant?: "default" | "card" | "text" | "avatar" | "button" | "input";
  width?: string | number;
  height?: string | number;
  animated?: boolean;
}

export function Skeleton({
  className,
  variant = "default",
  width,
  height,
  animated = true,
  ...props
}: SkeletonProps) {
  const style: React.CSSProperties = {
    width: width
      ? typeof width === "number"
        ? `${width}px`
        : width
      : undefined,
    height: height
      ? typeof height === "number"
        ? `${height}px`
        : height
      : undefined,
  };

  // Default variant has no specific styling, other variants have predefined sizes
  let variantClass = "";

  switch (variant) {
    case "card":
      variantClass = "h-48 w-full rounded-lg";
      break;
    case "text":
      variantClass = "h-4 w-full";
      break;
    case "avatar":
      variantClass = "h-12 w-12 rounded-full";
      break;
    case "button":
      variantClass = "h-10 w-24 rounded-md";
      break;
    case "input":
      variantClass = "h-10 w-full rounded-md";
      break;
  }

  return (
    <SkeletonBase
      className={cn(variantClass, !animated && "animate-none", className)}
      style={style}
      {...props}
    />
  );
}

export function SkeletonText({
  className,
  lines = 3,
  lastLineWidth = "60%",
  ...props
}: {
  className?: string;
  lines?: number;
  lastLineWidth?: string | number;
} & Omit<SkeletonProps, "variant">) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          width={index === lines - 1 && lastLineWidth ? lastLineWidth : "100%"}
          {...props}
        />
      ))}
    </div>
  );
}
