'use client';
import { Dialog, DialogContent, DialogTitle } from '@package/ui/components/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@package/ui/components/shadcn/form';
import { useForm } from '@package/ui/deps/react-hook-form';
import { z } from '@package/ui/deps/zod';
import { zodResolver } from '@package/ui/deps/resolvers/zod';
import { useDispatch } from 'react-redux';
import { createNotebook, getNotebookState } from '@left-note/actions/notebook';
import { Input } from '@package/ui/components/input';
import { Button } from '@package/ui/components/button';
import { createNote } from '@left-note/actions/note';
import { NoteType } from './index';
import { useMenuContext } from './menu';
import { bindActionCreators } from 'redux';
import { StateEnum } from '@left-note/types/state';

const insertSchema = z.object({
  name: z.string(),
});

export function InseartModal({ open, onClose, type }: { open: boolean; onClose: () => void; type: NoteType }) {
  const { focusItem } = useMenuContext();

  const { state } = getNotebookState();

  const form = useForm({
    resolver: zodResolver(insertSchema),
  });

  const dispatch = useDispatch();
  const createNotebookAction = bindActionCreators(createNotebook, dispatch);
  const createNoteAction = bindActionCreators(createNote, dispatch);

  const handleOnsubmit = (data: { name: string }) => {
    if (!focusItem?.record) return;

    const notebook_id =
      focusItem?.type === NoteType.NOTEBOOK
        ? (focusItem.record?.id as string)
        : (focusItem.record?.notebook_id as string);

    if (type === NoteType.NOTEBOOK) {
      createNotebookAction({
        title: data.name,
        notebook_id,
      });
    }

    if (type === NoteType.NOTE) {
      createNoteAction({
        title: data.name,
        notebook_id,
      });
    }
  };

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
                isLoading={state === StateEnum.LOADING}
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
