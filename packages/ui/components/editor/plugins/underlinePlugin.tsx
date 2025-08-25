import { EditorButtton } from './editorButton';
import { ExtensionTextStyleKey } from '../constants/extensionKey';
import { Editor } from '@package/tiptap';
import { Underline } from 'lucide-react';

type UnderlinePluginProps = {
  extensionKeys: ExtensionTextStyleKey[];
  editor: Editor;
};

export function UnderlinePlugin(props: UnderlinePluginProps) {
  const { extensionKeys, editor } = props;
  if (!editor || !extensionKeys.includes(ExtensionTextStyleKey.UNDERLINE)) return;
  return (
    <EditorButtton
      onClick={() => editor.chain().focus().toggleUnderline().run()}
      isActive={editor.isActive('underline')}
    >
      <Underline
        size={17}
        color="gray"
      />
    </EditorButtton>
  );
}
