import {
  CodeXml,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Quote,
  Text,
} from 'lucide-react';
import { EditorCollabsible, EditorCollabsibleItem } from './editorCollabsible';
import { ExtensionFormatTextKey } from '../constants/extensionKey';
import { Editor, useEditorState } from '@package/tiptap';

const items: EditorCollabsibleItem[] = [
  {
    value: ExtensionFormatTextKey.PARAGRAPH,
    label: (
      <>
        <Text size={17} />
        Paragraph
      </>
    ),
  },
  {
    value: ExtensionFormatTextKey.H1,
    label: (
      <>
        <Heading1 size={17} />
        Heading 1
      </>
    ),
  },
  {
    value: ExtensionFormatTextKey.H2,
    label: (
      <>
        <Heading2 size={17} />
        Heading 2
      </>
    ),
  },
  {
    value: ExtensionFormatTextKey.H3,
    label: (
      <>
        <Heading3 size={17} />
        Heading 3
      </>
    ),
  },
  {
    value: ExtensionFormatTextKey.H4,
    label: (
      <>
        <Heading4 size={17} />
        Heading 4
      </>
    ),
  },
  {
    value: ExtensionFormatTextKey.H5,
    label: (
      <>
        <Heading5 size={17} />
        Heading 5
      </>
    ),
  },
  {
    value: ExtensionFormatTextKey.H6,
    label: (
      <>
        <Heading6 size={17} />
        Heading 6
      </>
    ),
  },
  {
    value: ExtensionFormatTextKey.CODE,
    label: (
      <>
        <CodeXml size={17} />
        Code
      </>
    ),
  },
  {
    value: ExtensionFormatTextKey.QUOTE,
    label: (
      <>
        <Quote size={17} />
        Quote
      </>
    ),
  },
];

type CollabsibleFormatTextPluginProps = {
  extensionKeys: ExtensionFormatTextKey[];
  editor: Editor;
};

export function CollabsibleFormatTextPlugin(props: CollabsibleFormatTextPluginProps) {
  const { extensionKeys, editor } = props;
  if (!editor || !extensionKeys.some((ex) => items.find((item) => item.value === ex))) return;
  const { typograph } = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      typograph: getActiveKeyFormatText(editorS),
    }),
    equalityFn: (a, b) => a.typograph === b.typograph,
  });
  return (
    <>
      <EditorCollabsible
        items={items.filter((item) => extensionKeys.includes(item.value as ExtensionFormatTextKey))}
        value={typograph}
        onValueChange={(value) =>
          handleKeyFormatText({ editor: editor, key: value as ExtensionFormatTextKey })
        }
      />
    </>
  );
}

function getActiveKeyFormatText(editor: Editor) {
  if (editor.isActive('heading', { level: 1 })) return ExtensionFormatTextKey.H1;
  if (editor.isActive('heading', { level: 2 })) return ExtensionFormatTextKey.H2;
  if (editor.isActive('heading', { level: 3 })) return ExtensionFormatTextKey.H3;
  if (editor.isActive('heading', { level: 4 })) return ExtensionFormatTextKey.H4;
  if (editor.isActive('heading', { level: 5 })) return ExtensionFormatTextKey.H5;
  if (editor.isActive('heading', { level: 6 })) return ExtensionFormatTextKey.H6;
  if (editor.isActive('paragraph')) return ExtensionFormatTextKey.PARAGRAPH;
  return ExtensionFormatTextKey.PARAGRAPH;
}
function handleKeyFormatText({ editor, key }: { editor: Editor; key: ExtensionFormatTextKey }) {
  if (ExtensionFormatTextKey.H1 === key) editor.chain().focus().setHeading({ level: 1 }).run();
  if (ExtensionFormatTextKey.H2 === key) editor.chain().focus().setHeading({ level: 2 }).run();
  if (ExtensionFormatTextKey.H3 === key) editor.chain().focus().setHeading({ level: 3 }).run();
  if (ExtensionFormatTextKey.H4 === key) editor.chain().focus().setHeading({ level: 4 }).run();
  if (ExtensionFormatTextKey.H5 === key) editor.chain().focus().setHeading({ level: 5 }).run();
  if (ExtensionFormatTextKey.H6 === key) editor.chain().focus().setHeading({ level: 6 }).run();
  if (ExtensionFormatTextKey.PARAGRAPH === key) editor.commands.setParagraph();
}
