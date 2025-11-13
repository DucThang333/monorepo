'use client';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@package/ui/components/resizable';
import { Input } from '@package/ui/components/input';
import { Tiptap } from '@package/tiptap/tiptap';

import { fullExtension } from '@left-note/constants/tiptapKey';
import DockMenu from '@left-note/components/menu/dockMenu';
import { withAuth } from '@left-note/hoocs/auth';
import { getNoteSettingState } from '@left-note/actions/note';

const NotePage = () => {
  const { isUpdate, isLocked } = getNoteSettingState();

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
};

export default withAuth(NotePage);
