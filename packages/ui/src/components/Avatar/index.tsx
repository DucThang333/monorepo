import {
  Avatar as AvatarBase,
  AvatarFallback,
  AvatarImage
} from "@/components/avatar";
import React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Avatar({
  src,
  alt = "",
  fallback,
  className,
  size = "md",
  ...props
}: AvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  };

  return (
    <AvatarBase className={cn(sizeClasses[size], className)} {...props}>
      {src && <AvatarImage src={src} alt={alt} />}
      {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
    </AvatarBase>
  );
}

export { AvatarImage, AvatarFallback }
