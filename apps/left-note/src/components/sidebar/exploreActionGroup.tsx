'use client';
import { useState } from 'react';
import { useContext } from 'react';
import { MenuContext } from './menu';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { toast } from '@package/ui/components/sonner';
import { deleteNoteBook, getNotebooks } from '@left-note/actions/notebook';
import { ConfirmModal } from '../modal/confirmModal';
import { FilePlusIcon, CopyMinusIcon, Trash2Icon, SearchIcon, FolderIcon } from '@package/ui/icons/lucide-react';
import { InseartModal } from './insertNotebook';
import { SearchInputModal } from './search';
import { NoteType } from './index';

export function ExplorerActionGroup() {
  const [openAdd, setOpenAdd] = useState<NoteType | null>(null);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const { setOpenItems, focusItem, openSearch, setOpenSearch } = useContext(MenuContext);

  const dispatch = useDispatch();

  const mutateDeleteNoteBook = useMutation({
    mutationFn: (id: string) => deleteNoteBook(id),
    onSuccess: () => {
      // reload notebooks
      getNotebooks(dispatch);
      setOpenConfirmDelete(false);
      toast.success(`Archived notebook successfully`);
    },
  });

  return (
    <>
      <div className="flex py-2 gap-2 flex-row-reverse">
        <CopyMinusIcon
          size={14}
          className="hover:text-highlight cursor-pointer"
          onClick={() => setOpenItems(['note'])}
        />
        <Trash2Icon
          size={14}
          className="hover:text-highlight cursor-pointer"
          onClick={() => {
            if (!focusItem) return;
            setOpenConfirmDelete(true);
          }}
        />
        <FolderIcon
          size={14}
          className="hover:text-highlight cursor-pointer"
          onClick={() => setOpenAdd(NoteType.NOTEBOOK)}
        />
        <FilePlusIcon
          size={14}
          className="hover:text-highlight cursor-pointer"
          onClick={() => setOpenAdd(NoteType.NOTE)}
        />
        <SearchIcon
          size={14}
          className="hover:text-highlight cursor-pointer"
          onClick={() => setOpenSearch(true)}
        />
      </div>
      {openAdd && (
        <InseartModal
          open={!!openAdd}
          onClose={() => setOpenAdd(null)}
          type={openAdd}
        />
      )}
      <SearchInputModal
        open={openSearch}
        onClose={() => setOpenSearch(false)}
      />
      <ConfirmModal
        open={openConfirmDelete}
        onClose={() => setOpenConfirmDelete(false)}
        title={`Archive Notebook`}
        description="Are you sure you want to archive this notebook?"
        onConfirm={() => {
          if (!focusItem?.record) return;
          mutateDeleteNoteBook.mutate(focusItem.record?.id as string);
        }}
      />
    </>
  );
}
