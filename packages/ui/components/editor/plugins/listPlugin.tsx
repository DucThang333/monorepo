import { List, ListOrdered, ListTodo, Redo, Undo } from 'lucide-react';
import { EditorButtton } from './editorButton';
import { ExtensionCommonKey } from '../constants/extensionKey';
import { Editor } from '@package/tiptap';

type HistoryPluginProps = {
  extensionKeys: ExtensionCommonKey[];
  editor: Editor;
};

export function ListPlugin(props: HistoryPluginProps) {
  const { extensionKeys, editor } = props;
  if (
    !extensionKeys.some((ex) =>
      [
        ExtensionCommonKey.NUMBERED_LIST,
        ExtensionCommonKey.BULLETED_LIST,
        ExtensionCommonKey.CHECK_LIST,
      ].includes(ex)
    )
  )
    return;
  if (!editor) return;
  return (
    <div className="flex gap-0.5">
      <EditorButtton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList')}
      >
        <ListOrdered
          size={17}
          color="gray"
        />
      </EditorButtton>
      <EditorButtton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
      >
        <List
          size={17}
          color="gray"
        />
      </EditorButtton>
      <EditorButtton
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        isActive={editor.isActive('taskList')}
      >
        <ListTodo
          size={17}
          color="gray"
        />
      </EditorButtton>
    </div>
  );
}
