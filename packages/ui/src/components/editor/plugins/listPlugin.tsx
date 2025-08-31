import { List, ListOrdered, ListTodo, Redo, Undo } from 'lucide-react';
import { EditorButtton } from './editorButton';
import { ExtensionCommonKey } from '../constants/extensionKey';
import { Editor, useEditorState } from '@package/tiptap';

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

  const { isOrderedList } = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      isOrderedList: editorS.isActive('orderedList'),
    }),
    equalityFn: (a, b) => a.isOrderedList === b.isOrderedList,
  });
  const { isBulletList } = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      isBulletList: editorS.isActive('bulletList'),
    }),
    equalityFn: (a, b) => a.isBulletList === b.isBulletList,
  });

  const { isTaskList } = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      isTaskList: editorS.isActive('taskList'),
    }),
    equalityFn: (a, b) => a.isTaskList === b.isTaskList,
  });

  return (
    <div className="flex gap-0.5">
      {extensionKeys.includes(ExtensionCommonKey.NUMBERED_LIST) && (
        <EditorButtton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={isOrderedList}
        >
          <ListOrdered size={17} />
        </EditorButtton>
      )}
      {extensionKeys.includes(ExtensionCommonKey.BULLETED_LIST) && (
        <EditorButtton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={isBulletList}
        >
          <List size={17} />
        </EditorButtton>
      )}
      {extensionKeys.includes(ExtensionCommonKey.BULLETED_LIST) && (
        <EditorButtton
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          isActive={isTaskList}
        >
          <ListTodo size={17} />
        </EditorButtton>
      )}
    </div>
  );
}
