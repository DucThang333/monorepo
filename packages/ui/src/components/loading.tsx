import { LoaderCircleIcon, type LucideProps } from 'lucide-react';
import { cn } from '@package/ui/lib/utils';

type SpinnerVariantProps = Omit<LucideProps, 'variant'>;

export const Circle = ({ className, ...props }: SpinnerVariantProps) => (
  <LoaderCircleIcon
    className={cn('animate-spin', className)}
    {...props}
  />
);
