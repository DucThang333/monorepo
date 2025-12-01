'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNotebook, getNotebookState } from '@left-note/actions/notebook';
import { ConfirmModal } from '../modal/confirmModal';
import {
  FilePlusIcon,
  CopyMinusIcon,
  CopyPlusIcon,
  Trash2Icon,
  SearchIcon,
  FolderIcon,
} from '@package/ui/icons/lucide-react';
import { InseartModal } from './insertNotebook';
import { SearchInputModal } from './search';
import { NoteType } from './index';
import { useMenuContext } from './menu';
import { StateEnum } from '@left-note/types/state';
import { deleteNote } from '@left-note/actions/note';

export function ExplorerActionGroup() {
  const [openAdd, setOpenAdd] = useState<NoteType | null>(null);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const { setOpenItems, focusItem, openSearch, setOpenSearch, notebookContext } = useMenuContext();

  const { deleteNoteState, deleteNotebookState } = getNotebookState();

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex py-2 gap-2 flex-row-reverse">
        <CopyMinusIcon
          size={14}
          className="hover:text-highlight cursor-pointer"
          onClick={() => setOpenItems(['note'])}
        />
        <CopyPlusIcon
          size={14}
          className="hover:text-highlight cursor-pointer"
          onClick={() => {
            const ids = notebookContext?.map((ctx) => ctx.id) || [];
            setOpenItems(['note', ...ids]);
          }}
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
      <InseartModal
        open={!!openAdd}
        onClose={() => setOpenAdd(null)}
        type={openAdd as NoteType}
      />
      <SearchInputModal
        open={openSearch}
        onClose={() => setOpenSearch(false)}
      />
      <ConfirmModal
        open={openConfirmDelete}
        onClose={() => setOpenConfirmDelete(false)}
        title={`Archive Notebook`}
        description="Are you sure you want to archive this notebook?"
        isPending={deleteNoteState === StateEnum.LOADING || deleteNotebookState === StateEnum.LOADING}
        onConfirm={() => {
          if (!focusItem?.record?.id) return;
          if (focusItem.type === NoteType.NOTE) {
            deleteNote(dispatch, focusItem.record.id).then(() => {
              setOpenConfirmDelete(false);
            });
            return;
          } else if (focusItem.type === NoteType.NOTEBOOK) {
            deleteNotebook(dispatch, focusItem.record.id).then(() => {
              setOpenConfirmDelete(false);
            });
          }
        }}
      />
    </>
  );
}
