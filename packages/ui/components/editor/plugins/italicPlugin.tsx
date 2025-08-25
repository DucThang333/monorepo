import { EditorButtton } from './editorButton';
import { ExtensionTextStyleKey } from '../constants/extensionKey';
import { Editor } from '@package/tiptap';
import { Italic } from 'lucide-react';

type ItalicPluginProps = {
  extensionKeys: ExtensionTextStyleKey[];
  editor: Editor;
};

export function ItalicPlugin(props: ItalicPluginProps) {
  const { extensionKeys, editor } = props;
  if (!editor || !extensionKeys.includes(ExtensionTextStyleKey.ITALIC)) return;
  return (
    <EditorButtton
      onClick={() => editor.chain().focus().toggleItalic().run()}
      isActive={editor.isActive('italic')}
    >
      <Italic
        size={17}
        color="gray"
      />
    </EditorButtton>
  );
}
