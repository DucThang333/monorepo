import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@package/ui/components/dialog';
import { Button } from '@package/ui/components/button';

type ConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  onConfirm: () => void;
};

export function ConfirmModal({ open, onClose, title, description, onConfirm }: ConfirmModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onClose}
            variant="outline"
          >
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
