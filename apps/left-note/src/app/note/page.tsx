'use client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@package/ui/components/resizable';
import { Tiptap } from '@package/tiptap/tiptap';
import { fullExtension } from '@left-note/constants/tiptapKey';
import { Input } from '@package/ui/components/input';

export default function NotePage() {
  const fixedPanel = false;
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="min-w-0">Left Side</ResizablePanel>
      <ResizableHandle
        className={fixedPanel ? 'hidden' : ''}
        disabled={fixedPanel}
      />
      <ResizablePanel className="min-w-1/2">
        <Input
          variant="underline"
          placeholder="Enter your note title"
          input_size="lg"
          className="my-5 rounded-none"
        />
        <Tiptap
          extensionKey={fullExtension}
          tiptapKey="note-page"
          className="rounded-none border-none"
          enableBubbleMenu
          enableHeaderMenu
        />
      </ResizablePanel>
      <ResizableHandle
        className={fixedPanel ? 'hidden' : ''}
        disabled={fixedPanel}
      />
      <ResizablePanel className="min-w-0">Right Side</ResizablePanel>
    </ResizablePanelGroup>
  );
}
