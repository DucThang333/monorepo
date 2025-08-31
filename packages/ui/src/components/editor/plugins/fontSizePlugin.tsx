import { EditorButtton } from './editorButton';
import { ExtensionCommonKey } from '../constants/extensionKey';
import { Editor, useEditorState } from '@package/tiptap';
import { Minus, Plus } from 'lucide-react';
import { Input } from '@package/ui/components/shadcn/input';
import { formatNumber } from '../utils';
import { useContext } from 'react';
import { EditorContext } from '../provider/editorProvider';
import { FONT_TEXT, TypographyKey } from '../constants/cscKey';

type FontSizePluginProps = {
  extensionKeys: ExtensionCommonKey[];
  editor: Editor;
};

const MIN_FONT_SIZE = 0.3;
const MAX_FONT_SIZE = 3;

export function FontSizePlugin(props: FontSizePluginProps) {
  const { extensionKeys, editor } = props;
  const { editorKey } = useContext(EditorContext);
  if (!editor || !extensionKeys.includes(ExtensionCommonKey.FONT_SIZE)) return;
  let fontSize = editor.getAttributes('textStyle').fontSize
    ? parseFloat(editor.getAttributes('textStyle').fontSize)
    : getFontSizeText(editor, editorKey)
      ? parseFloat(getFontSizeText(editor, editorKey) as string)
      : undefined;

  const {} = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      fontSize: editorS.getAttributes('textStyle').fontSize
        ? parseFloat(editorS.getAttributes('textStyle').fontSize)
        : getFontSizeText(editorS, editorKey)
          ? parseFloat(getFontSizeText(editorS, editorKey) as string)
          : undefined,
    }),
    equalityFn: (a, b) => a.fontSize === b.fontSize,
  });

  const handleIncreaseFontSize = (type: 'increase' | 'decrease') => {
    const fontSizeUpdated = (fontSize ?? 1) + (type === 'increase' ? 0.05 : -0.05);
    editor.commands.setFontSize(formatNumber(fontSizeUpdated) + 'em');
  };
  return (
    <div className="flex gap-0.5">
      <EditorButtton
        onClick={() => handleIncreaseFontSize('decrease')}
        disabled={!fontSize || fontSize <= MIN_FONT_SIZE}
      >
        <Minus size={16} />
      </EditorButtton>
      <Input
        className="h-8 w-20 text-center focus-visible:border-gray-200 focus-visible:ring-0"
        value={fontSize ? fontSize + ' em' : '...'}
        readOnly
        type="text"
      />
      <EditorButtton
        onClick={() => handleIncreaseFontSize('increase')}
        disabled={!fontSize || fontSize >= MAX_FONT_SIZE}
      >
        <Plus size={16} />
      </EditorButtton>
    </div>
  );
}

function getFontSizeText(editor: Editor, editorKey: string): string | undefined {
  const element = document.getElementById(editorKey);
  if (!element) return undefined;
  if (editor.isActive('heading', { level: 1 }))
    return getComputedStyle(element).getPropertyValue(FONT_TEXT + TypographyKey.H1);
  if (editor.isActive('heading', { level: 2 }))
    return getComputedStyle(element).getPropertyValue(FONT_TEXT + TypographyKey.H2);
  if (editor.isActive('heading', { level: 3 }))
    return getComputedStyle(element).getPropertyValue(FONT_TEXT + TypographyKey.H3);
  if (editor.isActive('heading', { level: 4 }))
    return getComputedStyle(element).getPropertyValue(FONT_TEXT + TypographyKey.H4);
  if (editor.isActive('heading', { level: 5 }))
    return getComputedStyle(element).getPropertyValue(FONT_TEXT + TypographyKey.H5);
  if (editor.isActive('heading', { level: 6 }))
    return getComputedStyle(element).getPropertyValue(FONT_TEXT + TypographyKey.H6);
  if (editor.isActive('paragraph'))
    return getComputedStyle(element).getPropertyValue(FONT_TEXT + TypographyKey.P);
  return undefined;
}
