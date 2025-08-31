import { EditorButtton } from './editorButton';
import { ExtensionTextStyleKey } from '../constants/extensionKey';
import { Editor, useEditorState } from '@package/tiptap';
import { Italic } from 'lucide-react';

type ItalicPluginProps = {
  extensionKeys: ExtensionTextStyleKey[];
  editor: Editor;
};

export function ItalicPlugin(props: ItalicPluginProps) {
  const { extensionKeys, editor } = props;
  if (!editor || !extensionKeys.includes(ExtensionTextStyleKey.ITALIC)) return;
  const { isItalic } = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      isItalic: editorS.isActive('italic'),
    }),
    equalityFn: (a, b) => a.isItalic === b.isItalic,
  });
  return (
    <EditorButtton
      onClick={() => editor.chain().focus().toggleItalic().run()}
      isActive={isItalic}
    >
      <Italic size={17} />
    </EditorButtton>
  );
}
