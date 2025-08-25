import { EditorButtton } from './editorButton';
import { ExtensionTextStyleKey } from '../constants/extensionKey';
import { Editor } from '@package/tiptap';
import { Bold } from 'lucide-react';

type BoldPluginProps = {
  extensionKeys: ExtensionTextStyleKey[];
  editor: Editor;
};

export function BoldPlugin(props: BoldPluginProps) {
  const { extensionKeys, editor } = props;
  if (!editor || !extensionKeys.includes(ExtensionTextStyleKey.BOLD)) return;
  return (
    <EditorButtton
      onClick={() => editor.chain().focus().toggleBold().run()}
      isActive={editor.isActive('bold')}
    >
      <Bold
        size={17}
        color="gray"
      />
    </EditorButtton>
  );
}
