import { useMenuContext } from './menu';
import { Dialog, DialogContent, DialogTitle } from '@package/ui/components/dialog';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@package/ui/components/shadcn/command';

export function SearchInputModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { notebookContext } = useMenuContext();

  const handleOnsubmit = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogTitle></DialogTitle>
      <DialogContent showCloseButton={false}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleOnsubmit();
          }}
        >
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {notebookContext.map((item) => (
                <CommandItem
                  key={item}
                  onSelect={() => {
                    onClose();
                  }}
                >
                  <span>{item}</span>
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </form>
      </DialogContent>
    </Dialog>
  );
}
