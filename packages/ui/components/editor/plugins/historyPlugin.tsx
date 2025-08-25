import { Redo, Undo } from 'lucide-react';
import { EditorButtton } from './editorButton';
import { ExtensionCommonKey } from '../constants/extensionKey';
import { Editor } from '@package/tiptap';

type HistoryPluginProps = {
  extensionKeys: ExtensionCommonKey[];
  editor: Editor;
};

export function HistoryPlugin(props: HistoryPluginProps) {
  const { extensionKeys, editor } = props;
  if (!extensionKeys.includes(ExtensionCommonKey.HISTORY)) return;
  if (!editor) return;
  return (
    <div className="flex gap-0.5">
      <EditorButtton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
      >
        <Undo
          size={17}
          color="gray"
        />
      </EditorButtton>
      <EditorButtton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
      >
        <Redo
          size={17}
          color="gray"
        />
      </EditorButtton>
    </div>
  );
}
