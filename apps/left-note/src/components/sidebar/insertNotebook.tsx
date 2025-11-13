'use client';
import { useContext } from 'react';
import { MenuContext } from './menu';
import { Dialog, DialogContent, DialogTitle } from '@package/ui/components/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@package/ui/components/shadcn/form';
import { useForm } from '@package/ui/deps/react-hook-form';
import { z } from '@package/ui/deps/zod';
import { zodResolver } from '@package/ui/deps/resolvers/zod';
import { toast } from '@package/ui/components/sonner';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { createNoteBook, CreateNoteBookPayload } from '@left-note/actions/notebook';
import { getNotebooks } from '@left-note/actions/notebook';
import { Input } from '@package/ui/components/input';
import { Button } from '@package/ui/components/button';
import { createNote, CreateNotePayload } from '@left-note/actions/note';
import { NoteType } from './index';

const insertSchema = z.object({
  name: z.string(),
});

export function InseartModal({ open, onClose, type }: { open: boolean; onClose: () => void; type: NoteType }) {
  const { focusItem } = useContext(MenuContext);

  const form = useForm({
    resolver: zodResolver(insertSchema),
  });

  const dispatch = useDispatch();

  const handleOnsubmit = (data: { name: string }) => {
    if (!focusItem?.record) return;

    const notebook_id = focusItem?.type === NoteType.NOTEBOOK ? (focusItem.record?.id as string) : (focusItem.record?.notebook_id as string);

    if (type === NoteType.NOTEBOOK) {
      mutateCreateNoteBook.mutate({
        title: data.name,
        notebook_id,
      });
    }

    if (type === NoteType.NOTE) {
      mutateCreateNote.mutate({
        title: data.name,
        notebook_id,
      });
    }
  };

  const mutateCreateNoteBook = useMutation({
    mutationFn: (params: CreateNoteBookPayload) => createNoteBook(params),
    onSuccess: () => {
      // reload notebooks
      getNotebooks(dispatch);
      toast.success(`${type === NoteType.NOTEBOOK ? 'Notebook' : 'Note'} created successfully`);
      onClose();
    },
  });

  const mutateCreateNote = useMutation({
    mutationFn: (params: CreateNotePayload) => createNote(params),
    onSuccess: () => {
      // reload notebooks
      getNotebooks(dispatch);
      toast.success(`${type === NoteType.NOTE ? 'Note' : 'Notebook'} created successfully`);
      onClose();
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogTitle></DialogTitle>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleOnsubmit)}>
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> {type === NoteType.NOTEBOOK ? 'Notebook' : 'Note'} Name </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`Enter ${type === NoteType.NOTEBOOK ? 'notebook' : 'note'} name`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2 mt-5">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                type="submit"
                variant="outline"
                isLoading={mutateCreateNoteBook.isPending}
              >
                Add {type === NoteType.NOTEBOOK ? 'Notebook' : 'Note'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
