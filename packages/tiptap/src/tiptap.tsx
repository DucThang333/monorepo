'use client';
// src/Tiptap.tsx
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react';
import { UndoRedo } from '@tiptap/extensions';
import Heading from './extensions/extension-heading';
import Document from '@tiptap/extension-document';
import Paragraph from './extensions/extension-paragraph';
import Text from '@tiptap/extension-text';
import { cn } from '@package/ui/lib/utils';
import { HeaderMenu } from './header-menu';
import { ExtensionKey } from '@package/ui/components/editor/constants/extensionKey';
import { BulletList, ListItem, OrderedList, TaskItem, TaskList } from '@tiptap/extension-list';
import { FontFamily, TextStyle, FontSize } from '@tiptap/extension-text-style';
import Bold from './extensions/extension-bold';
import Italic from './extensions/extension-italic';
import Strike from '@tiptap/extension-strike';
import Underline from '@tiptap/extension-underline';
import { EditorProvider } from '@package/ui/components/editor/provider/editorProvider';
import { KeyboardShortcutInit } from './shortcut';

type TiptapProps = {
  content?: string;
  className?: string;
  classNameEditor?: string;
  extensionKey: ExtensionKey;
  enableBubbleMenu?: boolean;
  enableFloatingMenu?: boolean;
  enableHeaderMenu?: boolean;
  tiptapKey: string;
};

function Tiptap(props: TiptapProps) {
  const {
    className,
    extensionKey,
    classNameEditor,
    content,
    enableBubbleMenu,
    enableFloatingMenu,
    enableHeaderMenu,
    tiptapKey,
  } = props;
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
    ], // define your extension array
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
      <div className={cn('relative border border-gray-300 rounded-md', className)}>
        {editor && (
          <>
            {enableHeaderMenu && (
              <div className="border-b p-1 border-gray-300">
                <HeaderMenu
                  editor={editor}
                  extensionKey={extensionKey}
                />
              </div>
            )}
            {enableBubbleMenu && (
              <BubbleMenu
                editor={editor}
                options={{ placement: 'bottom' }}
                className="h-0"
              >
                bubble menu
              </BubbleMenu>
            )}
            {enableFloatingMenu && (
              <FloatingMenu
                editor={editor}
                className="h-0"
              >
                floating menu
              </FloatingMenu>
            )}
            <KeyboardShortcutInit editor={editor} />
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
