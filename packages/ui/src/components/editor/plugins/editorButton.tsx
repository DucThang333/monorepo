import { Button } from '@package/ui/components/shadcn/button';
import { cn } from '@package/ui/lib/utils';

type EditorButtonProps = {
  isActive?: boolean;
} & React.ComponentPropsWithoutRef<typeof Button>;

function EditorButtton({ children, isActive, ...props }: EditorButtonProps) {
  return (
    <Button
      className={cn(
        'rounded-sm w-8 h-8  flex items-center justify-center border cursor-pointer bg-transparent dark:bg-transparent dark:hover:bg-accent',
        isActive && 'bg-gray-300/50 dark:bg-accent'
      )}
      variant="outline"
      {...props}
    >
      {children}
    </Button>
  );
}

export { EditorButtton };
