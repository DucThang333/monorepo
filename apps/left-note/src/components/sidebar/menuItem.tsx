import { useMenuContext } from './menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@package/ui/components/shadcn/collapsible';
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from '@package/ui/components/sidebar';
import { useState } from 'react';
import { ReactNode } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@package/ui/icons/lucide-react';
import { Notebook } from '@left-note/models/notebooks';
import { SidebarMenuSubItem } from '@package/ui/components/sidebar';
import { Input } from '@package/ui/components/input';
import { cn } from '@package/ui/lib/utils';
import { useRouter } from 'next/navigation';
import { Note } from '@left-note/models/note';
import { NoteType } from './index';
import { updateNotebook } from '@left-note/actions/notebook';
import { useDispatch } from 'react-redux';
import { updateNote } from '@left-note/actions/note';

export type MenuItemsType = {
  id: string;
  label?: string;
  icon?: ReactNode;
  url?: string;
  suffixItem?: ReactNode;
  prefixItem?: ReactNode;
  items?: MenuItemsType[];
  record?: Notebook | Note;
  type?: NoteType;
};

export type MenuType = {
  main: MenuItemsType[];
  footer: MenuItemsType[];
};

export function MenuItem({ item, path }: { item: MenuItemsType; path: string }) {
  const { focusItem, openItems, setOpenItems, setFocusItem } = useMenuContext();
  const router = useRouter();

  const handleClick = () => {
    setFocusItem({
      type: NoteType.NOTEBOOK,
      record: item.record,
    });
    router.push(`/${item.url}`);
  };

  return (
    <Collapsible
      open={openItems.includes(item.id)}
      onOpenChange={(open) => {
        if (open) {
          setOpenItems([...openItems, item.id]);
        } else {
          setOpenItems(openItems.filter((id) => id !== item.id));
        }
      }}
      key={item.id}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            isActive={path === '/' + item.url || focusItem === item.id}
            className="rounded-[0.2rem]"
            onClick={handleClick}
          >
            {item.icon}
            {item.label}
            {item?.items &&
              item.items.length > 0 &&
              (openItems.includes(item.id) ? (
                <ChevronDownIcon className="ml-auto hover:text-highlight" />
              ) : (
                <ChevronRightIcon className="ml-auto hover:text-highlight" />
              ))}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.suffixItem}
          {item.items &&
            item.items.map((item) => (
              <MenuSubItem
                key={item.id}
                item={item}
                path={path}
              />
            ))}
          {item.prefixItem}
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function MenuSubItem({ item, path }: { item: MenuItemsType; path: string }) {
  const { focusItem, openItems, setOpenItems } = useMenuContext();

  const handleClick = () => {};

  return (
    <SidebarMenuSub className="mr-0 ml-2 pl-2 pr-0 cursor-pointer">
      <Collapsible
        open={openItems.includes(item.id)}
        onOpenChange={(open) => {
          if (open) {
            setOpenItems([...openItems, item.id]);
          } else {
            setOpenItems(openItems.filter((id) => id !== item.id));
          }
        }}
      >
        <SidebarMenuSubItem>
          <CollapsibleTrigger
            asChild
            className="p-0"
          >
            <SidebarMenuSubButton
              className="rounded-[0.2rem] px-2 py-0.5"
              isActive={path === '/' + item.url || focusItem === item.id}
              onClick={handleClick}
            >
              {item.icon}
              {item.label}
              {item?.items &&
                item.items.length > 0 &&
                (openItems.includes(item.id) ? (
                  <ChevronDownIcon className="ml-auto hover:text-highlight" />
                ) : (
                  <ChevronRightIcon className="ml-auto hover:text-highlight" />
                ))}
            </SidebarMenuSubButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {item.suffixItem}
            {item.items &&
              item.items.length > 0 &&
              item.items.map((item) => (
                <MenuSubItem
                  key={item.id}
                  item={item}
                  path={path}
                />
              ))}
            {item.prefixItem}
          </CollapsibleContent>
        </SidebarMenuSubItem>
      </Collapsible>
    </SidebarMenuSub>
  );
}

export function MenuNoteItem({ item, path }: { item: MenuItemsType; path: string }) {
  const { focusItem, setFocusItem, openItems, setOpenItems, dragItem, setDragItem } = useMenuContext();

  const open = openItems.includes(item.id);

  return (
    <Collapsible
      open={open}
      onOpenChange={(open) => {
        if (open) {
          setOpenItems([...openItems, item.id]);
        } else {
          setOpenItems(openItems.filter((id) => id !== item.id));
        }
      }}
      key={item.id}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            isActive={path === '/' + item.url || focusItem === item.id || dragItem?.tab === item.id}
            className="rounded-[0.2rem]"
            onClick={() =>
              setFocusItem({
                type: NoteType.NOTEBOOK,
                record: item.record,
              })
            }
            onDragOver={() => {
              if (!openItems.includes(item.id)) {
                setOpenItems([...openItems, item.id]);
              }
              if (dragItem?.notebook_id !== item.id) {
                setDragItem({
                  tab: 'note',
                  type: NoteType.NOTEBOOK,
                  notebook_id: item.id,
                });
              }
            }}
          >
            {item.icon}
            {item.label}
            {item?.items &&
              item.items.length > 0 &&
              (openItems.includes(item.id) ? (
                <ChevronDownIcon className="ml-auto hover:text-highlight" />
              ) : (
                <ChevronRightIcon className="ml-auto hover:text-highlight" />
              ))}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent
          forceMount
          className={cn(
            'pl-0',
            open ? 'block' : 'hidden',
            dragItem?.notebook_id === item.id && focusItem?.type === NoteType.NOTEBOOK && 'bg-gray-500/5'
          )}
        >
          {item.suffixItem}
          {item.items &&
            item.items.map((item) => (
              <MenuNoteSubItem
                key={item.id}
                item={item}
                path={path}
              />
            ))}
          {item.prefixItem}
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function MenuNoteSubItem({ item, path }: { item: MenuItemsType; path: string }) {
  const { focusItem, setFocusItem, openItems, setOpenItems, dragItem, setDragItem, openEditName, setOpenEditName } =
    useMenuContext();

  const [label, setLabel] = useState(item.label);

  const dispatch = useDispatch();

  return (
    <SidebarMenuSub className="mr-0 ml-4 pl-0 pr-0 cursor-pointer border-l-0">
      <Collapsible
        open={openItems.includes(item.id)}
        onOpenChange={(open) => {
          if (open) {
            setOpenItems([...openItems, item.id]);
          } else {
            setOpenItems(openItems.filter((id) => id !== item.id));
          }
        }}
      >
        <SidebarMenuSubItem>
          <CollapsibleTrigger
            asChild
            className="p-0"
          >
            <SidebarMenuSubButton
              className={cn('rounded-[0.2rem] px-0 py-0.5', path === '/' + item.url && 'text-highlight')}
              isActive={focusItem?.record?.id === item.id || dragItem?.notebook_id === item.id}
              onClick={() => {
                setFocusItem({
                  type: item.type,
                  record: item.record,
                });
              }}
              draggable
              onDragStart={() => {
                setFocusItem({
                  type: item.type,
                  record: item.record,
                });
              }}
              onDragOver={() => {
                if (!openItems.includes(item.id)) {
                  setOpenItems([...openItems, item.id]);
                }
                if (dragItem?.notebook_id !== (item.type === NoteType.NOTEBOOK ? item.id : item.record?.notebook_id)) {
                  setDragItem({
                    tab: 'note',
                    type: item.type as NoteType,
                    notebook_id: item.type === NoteType.NOTEBOOK ? item.id : (item?.record?.notebook_id ?? null),
                  });
                }
              }}
              onDragEnd={() => {
                setDragItem(null);
                // in case target item is note => not need update move to same notebook
                if (item.type === NoteType.NOTEBOOK) {
                  if (dragItem?.notebook_id !== item.id) return;
                  updateNotebook(dispatch, {
                    id: item.id,
                    notebook_id: dragItem?.notebook_id === 'note' ? null : dragItem?.notebook_id,
                  });
                } else {
                  if (dragItem?.notebook_id === 'note' || dragItem?.notebook_id === item?.record?.notebook_id) return;
                  updateNote(dispatch, {
                    id: item.id,
                    notebook_id: dragItem?.notebook_id,
                  });
                }
              }}
            >
              {item.icon}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (item.type === NoteType.NOTEBOOK) {
                    updateNotebook(dispatch, {
                      id: item.id,
                      title: label,
                    });
                  } else {
                    updateNote(dispatch, {
                      id: item.id,
                      title: label,
                    });
                  }
                  setOpenEditName(false);
                }}
              >
                <Input
                  id={item.id}
                  value={label}
                  readOnly={!openEditName || item.id !== focusItem?.record?.id}
                  inputClassName={cn(
                    openEditName && item.id === focusItem ? '' : 'pointer-events-none',
                    'w-full overflow-hidden text-ellipsis whitespace-nowrap'
                  )}
                  className="h-auto p-0 border-0 w-full"
                  onBlur={() => {
                    if (item.id === focusItem && openEditName) {
                      setOpenEditName(false);
                    }
                  }}
                  onChange={(e) => {
                    setLabel(e.target.value as string);
                  }}
                />
              </form>
              {item?.items &&
                item.items.length > 0 &&
                (openItems.includes(item.id) ? (
                  <ChevronDownIcon className="ml-auto hover:text-highlight" />
                ) : (
                  <ChevronRightIcon className="ml-auto hover:text-highlight" />
                ))}
            </SidebarMenuSubButton>
          </CollapsibleTrigger>
          <CollapsibleContent className={cn('pl-0 border-l-1', dragItem?.notebook_id === item.id && 'bg-gray-500/10')}>
            {item.suffixItem}
            {item.items &&
              item.items.length > 0 &&
              item.items.map((item) => (
                <MenuNoteSubItem
                  key={item.id}
                  item={item}
                  path={path}
                />
              ))}
            {item.prefixItem}
          </CollapsibleContent>
        </SidebarMenuSubItem>
      </Collapsible>
    </SidebarMenuSub>
  );
}
