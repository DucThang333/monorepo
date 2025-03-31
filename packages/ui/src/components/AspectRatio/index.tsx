import {
  AspectRatio as AspectRatioBase
} from "@/components/aspect-ratio";
import React from "react";

export interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
  className?: string;
}

export function AspectRatio({
  ratio = 16 / 9,
  children,
  className,
  ...props
}: AspectRatioProps) {
  return (
    <AspectRatioBase ratio={ratio} className={className} {...props}>
      {children}
    </AspectRatioBase>
  );
}
