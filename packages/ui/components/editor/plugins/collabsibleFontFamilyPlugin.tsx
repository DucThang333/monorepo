import { SelectValue } from '@/components/select';
import { ExtensionFontFamilyKey } from '../constants/extensionKey';
import { EditorCollabsible, EditorCollabsibleItem } from './editorCollabsible';
import { Type } from 'lucide-react';
import { Editor } from '@package/tiptap';

type CollabsibleFontFamilyPluginProps = {
  extensionKeys: ExtensionFontFamilyKey[];
  editor?: Editor;
};

const items: EditorCollabsibleItem[] = [
  {
    value: ExtensionFontFamilyKey.SANS_SERIF,
    label: 'Sans serif',
  },
  {
    value: ExtensionFontFamilyKey.MONO,
    label: 'Mono',
  },
  {
    value: ExtensionFontFamilyKey.ANTON,
    label: 'Anto',
  },
  {
    value: ExtensionFontFamilyKey.CAVEAT_BRUSH,
    label: 'Caveat Brush',
  },
  {
    value: ExtensionFontFamilyKey.EB_GARAMOND,
    label: 'EB Gramond',
  },
  {
    value: ExtensionFontFamilyKey.JET_BRAINS_MONO,
    label: 'Jet brains mono',
  },
  {
    value: ExtensionFontFamilyKey.LOBSTER,
    label: 'Lobster',
  },
  {
    value: ExtensionFontFamilyKey.MONTSERRAT,
    label: 'Montserrat',
  },
  {
    value: ExtensionFontFamilyKey.NUNITO,
    label: 'Nunito',
  },
  {
    value: ExtensionFontFamilyKey.OSWALD,
    label: 'Oswald',
  },
  {
    value: ExtensionFontFamilyKey.POPPINS,
    label: 'Poppins',
  },
];

function CollabsibleFontFamilyPlugin(props: CollabsibleFontFamilyPluginProps) {
  const { extensionKeys, editor } = props;
  if (!editor || !extensionKeys.some((ex) => items.find((item) => item.value === ex))) return;
  console.log('refresh');
  return (
    <EditorCollabsible
      items={items.filter((item) => extensionKeys.includes(item.value as ExtensionFontFamilyKey))}
      value={getActiveKeyFormatText(editor)}
      onValueChange={(value) =>
        handleKeyFormatText({ editor: editor, key: value as ExtensionFontFamilyKey })
      }
      selectValueNode={
        <>
          <Type />
          <SelectValue />
        </>
      }
    />
  );
}

function getActiveKeyFormatText(editor: Editor) {
  if (editor.isActive('textStyle', { fontFamily: 'sans-serif' }))
    return ExtensionFontFamilyKey.SANS_SERIF;
  if (editor.isActive('textStyle', { fontFamily: 'mono' })) return ExtensionFontFamilyKey.MONO;
  if (editor.isActive('textStyle', { fontFamily: 'anton' })) return ExtensionFontFamilyKey.ANTON;
  if (editor.isActive('textStyle', { fontFamily: 'caveat-brush' }))
    return ExtensionFontFamilyKey.CAVEAT_BRUSH;
  if (editor.isActive('textStyle', { fontFamily: 'e-b-garamond' }))
    return ExtensionFontFamilyKey.EB_GARAMOND;
  if (editor.isActive('textStyle', { fontFamily: 'Jet-brains-mono' }))
    return ExtensionFontFamilyKey.JET_BRAINS_MONO;
  if (editor.isActive('textStyle', { fontFamily: 'lobster' }))
    return ExtensionFontFamilyKey.LOBSTER;
  if (editor.isActive('textStyle', { fontFamily: 'montserrat' }))
    return ExtensionFontFamilyKey.MONTSERRAT;
  if (editor.isActive('textStyle', { fontFamily: 'nunito' })) return ExtensionFontFamilyKey.NUNITO;
  if (editor.isActive('textStyle', { fontFamily: 'oswald' })) return ExtensionFontFamilyKey.OSWALD;
  if (editor.isActive('textStyle', { fontFamily: 'poppins' }))
    return ExtensionFontFamilyKey.POPPINS;
  return ExtensionFontFamilyKey.SANS_SERIF;
}
function handleKeyFormatText({ editor, key }: { editor: Editor; key: ExtensionFontFamilyKey }) {
  if (ExtensionFontFamilyKey.ANTON === key) editor.chain().focus().setFontFamily('anton').run();
  if (ExtensionFontFamilyKey.CAVEAT_BRUSH === key)
    editor.chain().focus().setFontFamily('caveat-brush').run();
  if (ExtensionFontFamilyKey.EB_GARAMOND === key)
    editor.chain().focus().setFontFamily('e-b-garamond').run();
  if (ExtensionFontFamilyKey.JET_BRAINS_MONO === key)
    editor.chain().focus().setFontFamily('Jet-brains-mono').run();
  if (ExtensionFontFamilyKey.LOBSTER === key) editor.chain().focus().setFontFamily('lobster').run();
  if (ExtensionFontFamilyKey.MONTSERRAT === key)
    editor.chain().focus().setFontFamily('montserrat').run();
  if (ExtensionFontFamilyKey.POPPINS === key) editor.chain().focus().setFontFamily('poppins').run();
  if (ExtensionFontFamilyKey.NUNITO === key) editor.chain().focus().setFontFamily('nunito').run();
  if (ExtensionFontFamilyKey.OSWALD === key) editor.chain().focus().setFontFamily('oswald').run();
  if (ExtensionFontFamilyKey.SANS_SERIF === key)
    editor.chain().focus().setFontFamily('sans-serif').run();
  if (ExtensionFontFamilyKey.MONO === key) editor.chain().focus().setFontFamily('mono').run();
}

export { CollabsibleFontFamilyPlugin };
export type { CollabsibleFontFamilyPluginProps };
