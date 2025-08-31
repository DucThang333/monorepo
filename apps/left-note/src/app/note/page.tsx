'use client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@package/ui/components/resizable';
import { Tiptap } from '@package/tiptap/tiptap';
import { fullExtension } from '@left-note/constants/tiptapKey';
import { Profiler } from 'react';
export default function NotePage() {
  console.log('Loading Note Page');
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="min-w-40">Left Side</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="min-w-1/2">
        <div className=".menu" />
        <Profiler
          id="Tiptap"
          onRender={() => {}}
        >
          <Tiptap
            extensionKey={fullExtension}
            enableHeaderMenu
            tiptapKey="note-page"
            className="mt-16"
          />
        </Profiler>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="min-w-40">Right Side</ResizablePanel>
    </ResizablePanelGroup>
  );
}
