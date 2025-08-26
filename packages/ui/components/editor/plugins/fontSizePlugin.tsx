import { EditorButtton } from './editorButton';
import { ExtensionCommonKey } from '../constants/extensionKey';
import { Editor } from '@package/tiptap';
import { Minus, Plus } from 'lucide-react';
import { Input } from '@/components/shadcn/input';
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
  if (!editor || !extensionKeys.includes(ExtensionCommonKey.FONT_SIZE)) return;
  let fontSize = editor.getAttributes('textStyle').fontSize
    ? parseFloat(editor.getAttributes('textStyle').fontSize)
    : parseFloat(getFontSizeText(editor));
  const handleIncreaseFontSize = (type: 'increase' | 'decrease') => {
    const fontSizeUpdated = (fontSize ?? 1) + (type === 'increase' ? 0.05 : -0.05);
    editor.commands.setFontSize(formatNumber(fontSizeUpdated) + 'em');
  };
  return (
    <div className="flex gap-0.5">
      <EditorButtton
        onClick={() => handleIncreaseFontSize('decrease')}
        disabled={fontSize <= MIN_FONT_SIZE}
      >
        <Minus
          size={16}
          color="gray"
        />
      </EditorButtton>
      <Input
        className="h-8 w-20 text-center focus-visible:border-gray-200 focus-visible:ring-0"
        value={fontSize ? fontSize + ' em' : '...'}
        readOnly
        type="text"
      />
      <EditorButtton
        onClick={() => handleIncreaseFontSize('increase')}
        disabled={fontSize >= MAX_FONT_SIZE}
      >
        <Plus
          size={16}
          color="gray"
        />
      </EditorButtton>
    </div>
  );
}

function getFontSizeText(editor: Editor) {
  const { editorKey } = useContext(EditorContext);
  const element = document.getElementById(editorKey);
  if (!element) return;
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
