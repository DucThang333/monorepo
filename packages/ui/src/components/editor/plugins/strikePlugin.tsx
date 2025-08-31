import { EditorButtton } from './editorButton';
import { ExtensionTextStyleKey } from '../constants/extensionKey';
import { Editor, useEditorState } from '@package/tiptap';
import { Strikethrough } from 'lucide-react';

type StrikePluginProps = {
  extensionKeys: ExtensionTextStyleKey[];
  editor: Editor;
};

export function StrikePlugin(props: StrikePluginProps) {
  const { extensionKeys, editor } = props;
  if (!editor || !extensionKeys.includes(ExtensionTextStyleKey.STRIKE)) return;
  const { isStrike } = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      isStrike: editorS.isActive('strike'),
    }),
    equalityFn: (a, b) => a.isStrike === b.isStrike,
  });
  return (
    <EditorButtton
      onClick={() => editor.chain().focus().toggleStrike().run()}
      isActive={isStrike}
    >
      <Strikethrough size={17} />
    </EditorButtton>
  );
}
