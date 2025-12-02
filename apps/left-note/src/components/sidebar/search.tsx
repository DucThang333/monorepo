import { useMenuContext } from './menu';
import { Dialog, DialogContent, DialogTitle } from '@package/ui/components/dialog';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@package/ui/components/shadcn/command';

export function SearchInputModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { notebookContext, setFocusItem } = useMenuContext();

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogTitle></DialogTitle>
      <DialogContent showCloseButton={false}>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {notebookContext.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => {
                  setFocusItem({ type: item.type, record: item.record });
                  onClose();
                }}
              >
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
