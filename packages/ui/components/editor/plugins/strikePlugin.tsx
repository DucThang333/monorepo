import { EditorButtton } from './editorButton';
import { ExtensionTextStyleKey } from '../constants/extensionKey';
import { Editor } from '@package/tiptap';
import { Strikethrough } from 'lucide-react';

type StrikePluginProps = {
  extensionKeys: ExtensionTextStyleKey[];
  editor: Editor;
};

export function StrikePlugin(props: StrikePluginProps) {
  const { extensionKeys, editor } = props;
  if (!editor || !extensionKeys.includes(ExtensionTextStyleKey.STRIKE)) return;
  return (
    <EditorButtton
      onClick={() => editor.chain().focus().toggleStrike().run()}
      isActive={editor.isActive('strike')}
    >
      <Strikethrough
        size={17}
        color="gray"
      />
    </EditorButtton>
  );
}
