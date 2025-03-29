declare module "lucide-react" {
  import * as React from "react";

  export interface LucideProps extends React.SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = (props: LucideProps) => JSX.Element;

  export const ChevronDown: LucideIcon;
  export const Copy: LucideIcon;
  export const Check: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const Circle: LucideIcon;
  export const Search: LucideIcon;
  export const X: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const Loader2: LucideIcon;
  // Add other icons as needed
}

declare module "lucide-react/dist/esm/icons/chevron-down" {
  import { LucideIcon } from "lucide-react";
  const ChevronDown: LucideIcon;
  export { ChevronDown };
}

declare module "lucide-react/dist/esm/icons/copy" {
  import { LucideIcon } from "lucide-react";
  const Copy: LucideIcon;
  export { Copy };
}

declare module "lucide-react/dist/esm/icons/check" {
  import { LucideIcon } from "lucide-react";
  const Check: LucideIcon;
  export { Check };
}

declare module "lucide-react/dist/esm/icons/chevron-right" {
  import { LucideIcon } from "lucide-react";
  const ChevronRight: LucideIcon;
  export { ChevronRight };
}

declare module "lucide-react/dist/esm/icons/chevron-left" {
  import { LucideIcon } from "lucide-react";
  const ChevronLeft: LucideIcon;
  export { ChevronLeft };
}

declare module "lucide-react/dist/esm/icons/circle" {
  import { LucideIcon } from "lucide-react";
  const Circle: LucideIcon;
  export { Circle };
}

declare module "lucide-react/dist/esm/icons/search" {
  import { LucideIcon } from "lucide-react";
  const Search: LucideIcon;
  export { Search };
}

declare module "lucide-react/dist/esm/icons/x" {
  import { LucideIcon } from "lucide-react";
  const X: LucideIcon;
  export { X };
}

declare module "lucide-react/dist/esm/icons/chevron-up" {
  import { LucideIcon } from "lucide-react";
  const ChevronUp: LucideIcon;
  export { ChevronUp };
}
declare module "lucide-react/dist/esm/icons/loader-2" {
  import { LucideIcon } from "lucide-react";
  const Loader2: LucideIcon;
  export { Loader2 };
}
