import { Redo, Undo } from 'lucide-react';
import { EditorButtton } from './editorButton';
import { ExtensionCommonKey } from '../constants/extensionKey';
import { Editor, useEditorState } from '@package/tiptap';

type HistoryPluginProps = {
  extensionKeys: ExtensionCommonKey[];
  editor: Editor;
};

export function HistoryPlugin(props: HistoryPluginProps) {
  const { extensionKeys, editor } = props;
  if (!extensionKeys.includes(ExtensionCommonKey.HISTORY)) return;
  if (!editor) return;

  const { canRedo, canUndo } = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      canUndo: editorS.can().undo(),
      canRedo: editorS.can().redo(),
    }),
    equalityFn: (a, b) => a.canUndo === b.canUndo && a.canRedo === b.canRedo,
  });

  return (
    <div className="flex gap-0.5">
      <EditorButtton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!canUndo}
      >
        <Undo size={17} />
      </EditorButtton>
      <EditorButtton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!canRedo}
      >
        <Redo size={17} />
      </EditorButtton>
    </div>
  );
}
