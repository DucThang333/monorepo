'use client';
// src/Tiptap.tsx
import { useEditor, EditorContent } from '@tiptap/react';
import { UndoRedo } from './extensions/extensions';
import BubbleMenuCustom from './bubble-menu';
import FloatingMenuCustom from './floating-menu';

import Heading from './extensions/extension-heading';
import Document from './extensions/extension-document';
import Paragraph from './extensions/extension-paragraph';
import Text from './extensions/extension-text';
import { cn } from '@package/ui/lib/utils';
import { HeaderMenu } from './header-menu';
import { ExtensionKey } from '@package/ui/components/editor/constants/extensionKey';
import { EditorProvider } from '@package/ui/components/editor/provider/editorProvider';
import { KeyboardShortcutInit } from './shortcut';

import { BulletList, ListItem, OrderedList, TaskItem, TaskList } from './extensions/extension-list';
import {
  FontFamily,
  TextStyle,
  FontSize,
  Color,
  BackgroundColor,
} from './extensions/extension-text-style';
import Bold from './extensions/extension-bold';
import Italic from './extensions/extension-italic';
import Strike from './extensions/extension-strike';
import Underline from './extensions/extension-underline';
import { Placeholder } from '@tiptap/extensions/placeholder';

type TiptapProps = {
  content?: string;
  className?: string;
  classNameEditor?: string;
  extensionKey: ExtensionKey;
  enableBubbleMenu?: boolean;
  enableFloatingMenu?: boolean;
  enableHeaderMenu?: boolean;
  tiptapKey: string;
  placeholder?: string;
};

function Tiptap({
  className,
  extensionKey,
  classNameEditor,
  content,
  enableBubbleMenu,
  enableFloatingMenu,
  enableHeaderMenu,
  tiptapKey,
  placeholder,
}: TiptapProps) {
  if (!tiptapKey) throw new Error('Tiptap editor key is missing. Please check initialization.');

  const editorKey = `tiptap-editor-${tiptapKey}`;
  const editor = useEditor({
    extensions: [
      Bold,
      Italic,
      Strike,
      Underline,
      Document,
      Text,
      TextStyle,
      FontFamily,
      FontSize,
      Color.configure({ types: ['textStyle'] }),
      BackgroundColor,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      Paragraph,
      UndoRedo,
      BulletList,
      OrderedList,
      ListItem,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Placeholder.configure({
        placeholder: placeholder || 'Write something ...',
      }),
    ],
    content: content, // initial content
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: cn('tiptap focus:outline-none pt-2 px-3 font-[sans-serif]', classNameEditor),
        id: editorKey,
        style:
          '--font-size-tiptap-2xl: 19px;' +
          '--font-size-tiptap-xl: 18px;' +
          '--font-size-tiptap-lg: 17px;' +
          '--font-size-tiptap-md: 16px;' +
          '--font-size-tiptap-sm: 15px;' +
          '--font-text-tiptap-h1: 2em;' +
          '--font-text-tiptap-h2: 1.8em;' +
          '--font-text-tiptap-h3: 1.5em;' +
          '--font-text-tiptap-h4: 1.3em;' +
          '--font-text-tiptap-h5: 1.2em;' +
          '--font-text-tiptap-h6: 1.1em;' +
          '--font-text-tiptap-p: 0.9em',
      },
    },
    shouldRerenderOnTransaction: false,
  });

  return (
    <EditorProvider editorKey={editorKey}>
      <div className={cn('relative border border-border rounded-md', className)}>
        {editor && (
          <>
            {enableHeaderMenu && (
              <div className="border-b border-border">
                <HeaderMenu
                  editor={editor}
                  extensionKey={extensionKey}
                />
              </div>
            )}
            {enableBubbleMenu && (
              <BubbleMenuCustom
                editor={editor}
                extensionKey={extensionKey}
              />
            )}
            {enableFloatingMenu && <FloatingMenuCustom editor={editor} />}
            <KeyboardShortcutInit
              editor={editor}
              extensionKey={extensionKey}
            />
          </>
        )}
        <EditorContent
          editor={editor}
          allowFullScreen={true}
        />
      </div>
    </EditorProvider>
  );
}

export { Tiptap };
