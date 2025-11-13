import { NoteBook } from '@left-note/models/notebooks';
import { UpdateNoteBookPayload } from '@left-note/actions/notebook';
import { useDispatch } from 'react-redux';
import { getNotebookState } from '@left-note/actions/notebook';
import { renderTreeMap } from '@left-note/utils';
import { toast } from '@package/ui/components/sonner';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { updateNoteBook } from '@left-note/actions/notebook';
import { SHORTCUT_FEATURE, SHORTCUT_SCOPE } from '@package/keyboard-shortcut/src/constants/shortcut';
import { SHORTCUT_MODEL } from '@left-note/shortcuts/constant';
import shortcutManager from '@package/keyboard-shortcut/src';
import { KEYBOARD_SHORTCUT } from '@package/keyboard-shortcut/src/constants/shortcut';
import { LayoutDashboardIcon, PencilLine, File, Folder } from '@package/ui/icons/lucide-react';
import { createContext } from 'react';
import { ExplorerActionGroup } from './exploreActionGroup';
import { getNotebooks } from '@left-note/actions/notebook';
import type { MenuItemsType, MenuType } from './menuItem';
import { StateEnum } from '@left-note/types/state';
import { parseStateEnum } from '@left-note/utils/query';
import { Note } from '@left-note/models/note';
import { NoteType } from './index';

const menuInitItems: MenuType = {
  main: [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboardIcon />,
    },
    {
      id: 'note',
      label: 'Note',
      icon: <PencilLine />,
      url: 'note',
      suffixItem: <ExplorerActionGroup />,
      items: [],
    },
  ],
  footer: [],
};

type NoteBookTreeType = NoteBook & { children: NoteBookTreeType[] };

function renderNoteBookTree(notebooks: NoteBookTreeType[]): MenuItemsType[] {
  return notebooks.map((notebook) => {
    return {
      id: notebook.id,
      label: notebook.title,
      icon: <Folder />,
      url: `note/${notebook.id}`,
      type: NoteType.NOTEBOOK,
      items: [
        ...(notebook.children ? renderNoteBookTree(notebook.children) : []),
        ...(notebook.notes?.map((note) => ({
          id: note.id,
          label: note.title,
          icon: <File />,
          url: `note/${note.id}`,
          type: NoteType.NOTE,
          record: note,
        })) || []),
      ],
      record: notebook,
    };
  });
}

type FocusItemType = {
  type?: NoteType;
  record?: NoteBook | Note;
};

export const MenuContext = createContext<{
  focusItem: FocusItemType | null;
  setFocusItem: (item: FocusItemType) => void;
  openItems: string[];
  setOpenItems: (items: string[]) => void;
  menuItems: MenuType;
  notebookContext: string[];
  dragItem: { tab: string; notebook_id: string | null } | null;
  setDragItem: (item: { tab: string; notebook_id: string | null } | null) => void;
  openEditName: boolean;
  setOpenEditName: (open: boolean) => void;
  updateNotebook: (payload: UpdateNoteBookPayload) => void;
  updateNotebookState: StateEnum;
  openSearch: boolean;
  setOpenSearch: (open: boolean) => void;
}>({
  focusItem: null,
  setFocusItem: () => {},
  openItems: [],
  setOpenItems: () => {},
  menuItems: menuInitItems,
  notebookContext: [],
  dragItem: null,
  setDragItem: () => {},
  openEditName: false,
  setOpenEditName: () => {},
  updateNotebook: () => {},
  updateNotebookState: StateEnum.IDLE,
  openSearch: false,
  setOpenSearch: () => {},
});

export const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [focusItem, setFocusItem] = useState<FocusItemType | null>(null);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [dragItem, setDragItem] = useState<{ tab: string; notebook_id: string | null } | null>(null);
  const [openSearch, setOpenSearch] = useState(false);
  const [openEditName, setOpenEditName] = useState(false);

  const dispatch = useDispatch();

  const { notebooks } = getNotebookState();

  const notebooksTree = useMemo(() => renderTreeMap(notebooks, 'id', 'notebook_id'), [notebooks]);

  const menuItems = useMemo(() => {
    return {
      ...menuInitItems,
      main: menuInitItems.main.map((item) => {
        // add notebooks in menuItems
        if (item.id === 'note') {
          return {
            ...item,
            items: renderNoteBookTree(notebooksTree),
            type: NoteType.NOTEBOOK,
          };
        }
        return item;
      }),
    };
  }, [notebooksTree]);

  const notebookContext = useMemo(() => {
    function render(tree: NoteBookTreeType[], parent: string | null): string[] {
      return tree.reduce((acc: string[], notebook: NoteBookTreeType) => {
        const title = `${parent ? parent + '/' : ''}${notebook.title}`;
        if (notebook.children) {
          return [...acc, title, ...render(notebook.children, title)];
        }
        return [...acc, title];
      }, []);
    }
    return render(notebooksTree, null);
  }, [notebooksTree]);

  const mutateUpdateNoteBook = useMutation({
    mutationFn: (params: UpdateNoteBookPayload) => updateNoteBook(params),
    onSuccess: (res) => {
      // reload notebooks
      getNotebooks(dispatch);
      setFocusItem({
        type: NoteType.NOTEBOOK,
        record: res.data.notebook,
      });
      toast.success('Update notebook successfully');
    },
    onMutate: () => {
      setDragItem(null);
    },
  });

  useEffect(() => {
    shortcutManager.register({
      scope: SHORTCUT_SCOPE.APP,
      model: SHORTCUT_MODEL.NOTEBOOK,
      feature: SHORTCUT_FEATURE.OPEN,
      keyboardShortcuts: [[KEYBOARD_SHORTCUT.CTRL, KEYBOARD_SHORTCUT.E]],
      handler: () => {
        setOpenEditName((prev) => !prev);
      },
    });

    shortcutManager.register({
      scope: SHORTCUT_SCOPE.APP,
      model: SHORTCUT_MODEL.SEARCH_EXPLORER_FILE,
      feature: SHORTCUT_FEATURE.TOGGLE,
      keyboardShortcuts: [[KEYBOARD_SHORTCUT.CTRL, KEYBOARD_SHORTCUT.P]],
      handler: () => {
        setOpenSearch((prev) => !prev);
      },
    });
  }, []);

  useEffect(() => {
    if (openEditName && focusItem?.record) {
      const item = document.getElementById(focusItem?.record.id || '') as HTMLInputElement;
      // focus item
      item?.focus();
      // slect all character
      item?.select();
    }
  }, [openEditName]);

  return (
    <MenuContext.Provider
      value={{
        focusItem,
        setFocusItem,
        openItems,
        setOpenItems,
        menuItems,
        notebookContext,
        dragItem,
        setDragItem,
        openEditName,
        setOpenEditName,
        updateNotebook: mutateUpdateNoteBook.mutate,
        updateNotebookState: parseStateEnum(mutateUpdateNoteBook),
        openSearch,
        setOpenSearch,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
