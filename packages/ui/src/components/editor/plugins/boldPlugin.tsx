import { EditorButtton } from './editorButton';
import { ExtensionTextStyleKey } from '../constants/extensionKey';
import { Editor, useEditorState } from '@package/tiptap';
import { Bold } from 'lucide-react';

type BoldPluginProps = {
  extensionKeys: ExtensionTextStyleKey[];
  editor: Editor;
};

export function BoldPlugin(props: BoldPluginProps) {
  const { extensionKeys, editor } = props;
  if (!editor || !extensionKeys.includes(ExtensionTextStyleKey.BOLD)) return;
  console.log('loading button component');

  const { isBold } = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      isBold: editorS.isActive('bold'),
    }),
    equalityFn: (a, b) => a.isBold === b.isBold,
  });

  return (
    <EditorButtton
      onClick={() => editor.chain().focus().toggleBold().run()}
      isActive={isBold}
    >
      <Bold size={17} />
    </EditorButtton>
  );
}
