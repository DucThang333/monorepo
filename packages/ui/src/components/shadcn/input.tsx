import * as React from 'react';
import { cn } from '@package/ui/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    variants: {
      variant: {
        default:
          'border focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        outline:
          'border-2 border-input focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[2px]',
        ghost:
          'border-transparent bg-transparent hover:bg-muted/30 focus-visible:ring-2 focus-visible:ring-ring/40',
        borderless:
          'border-0 shadow-none bg-transparent focus-visible:ring-2 focus-visible:ring-ring/40',
        underline:
          'border-0 border-b border-input bg-transparent rounded-none focus-visible:border-ring focus-visible:ring-0',
      },
      input_size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3 text-md',
        sm: 'h-8 text-sm rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 text-lg rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      input_size: 'default',
    },
  }
);

function Input({
  className,
  type,
  variant,
  input_size,
  prefix,
  suffix,
  placeholder,
  ...props
}: React.InputHTMLAttributes<HTMLDivElement> &
  React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    prefix?: string | React.ReactNode;
    suffix?: string | React.ReactNode;
  }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-md border px-3',
        inputVariants({ variant, input_size })
      )}
      {...props}
    >
      {prefix && <span className="text-gray-500">{prefix}</span>}
      <input
        type={type}
        className={cn('flex-1 bg-transparent outline-none', className)}
        placeholder={placeholder}
      />
      {suffix && <span className="text-gray-500">{suffix}</span>}
    </div>
  );
}

export { Input };
