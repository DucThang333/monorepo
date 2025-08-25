'use client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@package/ui/component/resizable';
import { Tiptap } from '@package/tiptap/tiptap';
import { fullExtension } from '@/constants/tiptapKey';
export default function NotePage() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="min-w-40">Left Side</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="min-w-1/2">
        Main content
        <div className=".menu" />
        <Tiptap
          extensionKey={fullExtension}
          enableHeaderMenu
          tiptapKey="note-page"
        />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="min-w-40">Right Side</ResizablePanel>
    </ResizablePanelGroup>
  );
}
