import { EditorButtton } from './editorButton';
import { ExtensionTextStyleKey } from '../constants/extensionKey';
import { Editor, useEditorState } from '@package/tiptap';
import { Underline } from 'lucide-react';

type UnderlinePluginProps = {
  extensionKeys: ExtensionTextStyleKey[];
  editor: Editor;
};

export function UnderlinePlugin(props: UnderlinePluginProps) {
  const { extensionKeys, editor } = props;
  if (!editor || !extensionKeys.includes(ExtensionTextStyleKey.UNDERLINE)) return;
  const { isUnderline } = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      isUnderline: editorS.isActive('underline'),
    }),
    equalityFn: (a, b) => a.isUnderline === b.isUnderline,
  });
  return (
    <EditorButtton
      onClick={() => editor.chain().focus().toggleUnderline().run()}
      isActive={isUnderline}
    >
      <Underline size={17} />
    </EditorButtton>
  );
}
