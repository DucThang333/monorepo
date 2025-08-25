import { Button } from '@/components/shadcn/button';
import { cn } from '@/lib/utils';

type EditorButtonProps = {
  isActive?: boolean;
} & React.ComponentPropsWithoutRef<typeof Button>;

function EditorButtton({ children, isActive, ...props }: EditorButtonProps) {
  return (
    <Button
      className={cn(
        'rounded-sm w-8 h-8  flex items-center justify-center border border-gray-200 hover:bg-gray-100 cursor-pointer bg-transparent',
        isActive && 'bg-gray-300/50'
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export { EditorButtton };
