import { Button as Comp } from '@package/ui/components/shadcn/button';
import { Loader2Icon } from 'lucide-react';
import React from 'react';
export type ButtonProps = React.ComponentProps<typeof Comp> & {
  isLoading?: boolean;
};

export function Button(props: ButtonProps) {
  const { isLoading, children, ...restProps } = props;
  return (
    <Comp
      disabled={isLoading}
      {...restProps}
    >
      {isLoading && <Loader2Icon className="animate-spin" />}
      {children}
    </Comp>
  );
}
