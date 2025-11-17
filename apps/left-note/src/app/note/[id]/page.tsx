'use client';
import { Tiptap } from '@package/tiptap/tiptap';
// import { useParams } from 'next/navigation';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@package/ui/components/resizable';
import { Input } from '@package/ui/components/input';
import { fullExtension } from '@left-note/constants/tiptapKey';
import DockMenu from '@left-note/components/menu/dockMenu';
import { getNoteSettingState } from '@left-note/actions/note';
import { useMenuContext } from '@left-note/components/sidebar/menu';

export default function Page() {
  // const params = useParams();
  const { isUpdate, isLocked } = getNoteSettingState();
  const { focusItem } = useMenuContext();

  return (
    <div className="flex h-full w-full relative">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="min-w-0"></ResizablePanel>
        <ResizableHandle disabled={isLocked} />
        <ResizablePanel className="min-w-1/2">
          <Input
            variant="underline"
            placeholder="Enter your note title"
            input_size="lg"
            className="my-5 rounded-none"
            disabled={!isUpdate}
            readOnly={!isUpdate}
            // value={note?.title}
          />
          <Tiptap
            extensionKey={fullExtension}
            tiptapKey="note-page"
            className="rounded-none border-none"
            enableBubbleMenu={isUpdate}
            enableHeaderMenu={isUpdate}
          />
        </ResizablePanel>
        <ResizableHandle disabled={isLocked} />
        <ResizablePanel className="min-w-0"></ResizablePanel>
      </ResizablePanelGroup>
      <DockMenu
        positions={['right', 'top', 'bottom']}
        hidden={false}
        direction="vertical"
      />
    </div>
  );
}
