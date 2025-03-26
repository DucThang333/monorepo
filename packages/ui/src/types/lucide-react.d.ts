declare module 'lucide-react' {
  import * as React from 'react';
  
  export interface LucideProps extends React.SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }
  
  export type LucideIcon = React.FC<LucideProps>;
  
  export const ChevronDown: LucideIcon;
  // Add other icons as needed
}

declare module 'lucide-react/dist/esm/icons/chevron-down' {
  import { LucideIcon } from 'lucide-react';
  const ChevronDown: LucideIcon;
  export { ChevronDown };
}
