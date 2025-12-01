'use client';

import { Notebook } from '@left-note/models/notebooks';
import { connect, useDispatch } from 'react-redux';
import { renderTreeMap } from '@left-note/utils';
import { toast } from '@package/ui/components/sonner';
import { useMutation } from '@tanstack/react-query';
import { useContext, useEffect, useMemo, useState } from 'react';
import { getNotebookState, updateNotebook, UpdateNotebookPayload } from '@left-note/actions/notebook';
import { SHORTCUT_FEATURE, SHORTCUT_SCOPE } from '@package/keyboard-shortcut/src/constants/shortcut';
import { SHORTCUT_MODEL } from '@left-note/shortcuts/constant';
import shortcutManager from '@package/keyboard-shortcut/src';
import { KEYBOARD_SHORTCUT } from '@package/keyboard-shortcut/src/constants/shortcut';
import { LayoutDashboardIcon, PencilLine, File, Folder } from '@package/ui/icons/lucide-react';
import { createContext } from 'react';
import { ExplorerActionGroup } from './exploreActionGroup';
import type { MenuItemsType, MenuType } from './menuItem';
import { StateEnum } from '@left-note/types/state';
import { parseStateEnum } from '@left-note/utils/query';
import { Note } from '@left-note/models/note';
import { NoteType } from './index';
import { useRouter } from 'next/navigation';

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

type NotebookTreeType = Notebook & { children: NotebookTreeType[] };

function renderNotebookTree(notebooks: NotebookTreeType[]): MenuItemsType[] {
  return notebooks.map((notebook) => {
    return {
      id: notebook.id,
      label: notebook.title,
      icon: <Folder />,
      url: `note/${notebook.id}`,
      type: NoteType.NOTEBOOK,
      items: [
        ...(notebook.children ? renderNotebookTree(notebook.children) : []),
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
  record?: Notebook | Note;
};

type NotebookContext = {
  id: string;
  type: NoteType;
  title: string;
  record: Notebook | Note;
  path: string[];
};

const MenuContext = createContext<{
  focusItem: FocusItemType | null;
  setFocusItem: (item: FocusItemType) => void;
  openItems: string[];
  setOpenItems: (items: string[]) => void;
  menuItems: MenuType;
  notebookContext: NotebookContext[];
  dragItem: { tab: string; type: NoteType; notebook_id: string | null } | null;
  setDragItem: (item: { tab: string; type: NoteType; notebook_id: string | null } | null) => void;
  openEditName: boolean;
  setOpenEditName: (open: boolean) => void;
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
  updateNotebookState: StateEnum.IDLE,
  openSearch: false,
  setOpenSearch: () => {},
});

const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [focusItem, setFocusItem] = useState<FocusItemType | null>(null);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [dragItem, setDragItem] = useState<{ tab: string; type: NoteType; notebook_id: string | null } | null>(null);
  const [openSearch, setOpenSearch] = useState(false);
  const [openEditName, setOpenEditName] = useState(false);

  const dispatch = useDispatch();

  const { notebooks } = getNotebookState();

  const notebooksTree = useMemo(() => renderTreeMap(notebooks, 'id', 'notebook_id'), [notebooks]);

  const router = useRouter();

  const menuItems = useMemo(() => {
    return {
      ...menuInitItems,
      main: menuInitItems.main.map((item) => {
        // add notebooks in menuItems
        if (item.id === 'note') {
          return {
            ...item,
            items: renderNotebookTree(notebooksTree),
            type: NoteType.NOTEBOOK,
          };
        }
        return item;
      }),
    };
  }, [notebooksTree]);

  const notebookContext = useMemo(() => {
    function render(tree: NotebookTreeType[], path: string[], parent: string | null): NotebookContext[] {
      return tree.reduce((acc: NotebookContext[], notebook: NotebookTreeType) => {
        const newPath = [...path, notebook.id];
        const title = `${parent ? parent + '/' : ''}${notebook.title}`;
        const newContext: NotebookContext[] = [
          {
            id: notebook.id,
            type: NoteType.NOTEBOOK,
            title,
            record: notebook,
            path: newPath,
          },
        ];
        // case have notes => add note tocontext
        if (notebook.notes && notebook.notes.length > 0) {
          // add notes to context
          notebook.notes.forEach((note) => {
            newContext.push({
              id: note.id,
              type: NoteType.NOTE,
              title: note.title,
              record: note,
              path: [...newPath, note.id],
            });
          });
        }

        // case have children inside => continue recursion
        if (notebook.children) {
          return [...acc, ...newContext, ...render(notebook.children, newPath, title)];
        }
        // return notebook as leaf node
        return [...acc, ...newContext];
      }, []);
    }
    return render(notebooksTree, ['note'], null).sort((a, b) => a.title.localeCompare(b.title));
  }, [notebooksTree]);

  const mutateUpdateNotebook = useMutation({
    mutationFn: (params: UpdateNotebookPayload) => updateNotebook(dispatch, params),
    onSuccess: (res) => {
      // reload notebooks
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
    console.log('register short cut');
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
        console.log('search');
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

  function setFocusItemCustom(item: NotebookContext) {
    // need open this file
    const context = notebookContext.find((c) => c.id === item.record?.id);

    if (context) {
      setOpenItems((prev) => [
        ...prev,
        ...(context.type === NoteType.NOTEBOOK ? context.path : [context.id, ...context.path]),
      ]);
    } else {
      setOpenItems((prev) => [...prev, 'note']);
    }

    // access route if it is note
    if (item.type === NoteType.NOTE) {
      router.push(`/note/${item.record?.id}`);
    }

    //set focus item
    setFocusItem(item);
  }

  return (
    <MenuContext.Provider
      value={{
        focusItem,
        setFocusItem: setFocusItemCustom,
        openItems,
        setOpenItems,
        menuItems,
        notebookContext,
        dragItem,
        setDragItem,
        openEditName,
        setOpenEditName,
        updateNotebookState: parseStateEnum(mutateUpdateNotebook),
        openSearch,
        setOpenSearch,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);

export default MenuContextProvider;
