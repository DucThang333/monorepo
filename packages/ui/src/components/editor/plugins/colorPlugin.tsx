'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@package/ui/components/popover';
import { Editor, useEditorState } from '@package/tiptap';
import { ExtensionCommonKey } from '../constants/extensionKey';
import { Separator } from '../../separator';
import { useState } from 'react';
import { BanIcon, BrushIcon } from 'lucide-react';
import { ColorPicker } from '../../color-picker';

type ColorType = {
  color?: string;
  backgroundColor?: string;
  type:
    | 'text'
    | 'highlight'
    | 'picker-text'
    | 'picker-highlight'
    | 'none-text'
    | 'none-highlight'
    | 'trigger';
};

const textColor: Pick<ColorType, 'color'>[] = [
  { color: '#000000' }, // black — strongest text color
  { color: '#ffffff' }, // pure white — clean on dark bg
  { color: '#475569' }, // gray — secondary text
  { color: '#2563eb' }, // blue — links, trust
  { color: '#16a34a' }, // green — success, positive
  { color: '#dc2626' }, // red — error, alert
  { color: '#ca8a04' }, // yellow — warning, highlight
  { color: '#9333ea' }, // purple — creativity, accent
  { color: '#f97316' }, // orange — energy, call-to-action
  { color: '#0d9488' }, // teal — calm, balanced
];

const textHighlight: Pick<ColorType, 'backgroundColor'>[] = [
  { backgroundColor: '#000000' },
  { backgroundColor: '#ffffff' }, // light
  { backgroundColor: '#93c5fd' }, // sky blue — bright attention
  { backgroundColor: '#1d4ed8' }, // strong blue — active selection
  { backgroundColor: '#dcfce7' }, // mint green — success
  { backgroundColor: '#86efac' }, // lime green — fresh / natural
  { backgroundColor: '#fee2e2' }, // light red — alert background
  { backgroundColor: '#fca5a5' }, // salmon — emotional highlight
  { backgroundColor: '#fde68a' }, // light amber — warm note
  { backgroundColor: '#fbbf24' }, // amber — strong attention
];

export function ColorPlugin({
  editor,
  extensionKeys,
}: {
  editor: Editor;
  extensionKeys: ExtensionCommonKey[];
}) {
  const [recentlyUsed, setRecentlyUsed] = useState<ColorType[]>([]);

  const handleColorChange = ({ color, backgroundColor, type }: ColorType) => {
    if (type === 'text' || type === 'picker-text' || type === 'none-text') {
      editor.chain().focus().setColor(color).run();
    }
    if (type === 'highlight' || type === 'picker-highlight' || type === 'none-highlight') {
      editor.chain().focus().setBackgroundColor(backgroundColor).run();
    }
    if (type === 'text' || type === 'highlight') {
      setRecentlyUsed([{ color, type }, ...recentlyUsed.slice(0, 5)]);
    }
  };

  const { color, backgroundColor } = useEditorState({
    editor,
    selector: ({ editor: editorS }) => ({
      color: editorS.getAttributes('textStyle').color,
      backgroundColor: editorS.getAttributes('textStyle').backgroundColor,
    }),
    equalityFn: (a, b) => a.color === b.color && a.backgroundColor === b.backgroundColor,
  });

  return (
    <Popover>
      <PopoverTrigger>
        <ColorItem
          color={color}
          backgroundColor={backgroundColor}
          type="trigger"
        />
      </PopoverTrigger>
      <PopoverContent
        className="w-auto min-w-40 p-3 max-w-xs bg-neutral-800/50"
        align="end"
        side="bottom"
      >
        {recentlyUsed.length > 0 && (
          <div>
            <p className="text-md font-semibold text-gray-200">Recently Used</p>
            <div className="flex gap-4 flex-wrap w-full mt-2">
              {recentlyUsed.map((item, index) => (
                <ColorItem
                  key={index}
                  color={item.color}
                  backgroundColor={item.backgroundColor}
                  type={item.type}
                  onClick={handleColorChange}
                />
              ))}
            </div>
            <Separator className="my-2" />
          </div>
        )}
        <div>
          <p className="text-md font-semibold text-gray-200">Text Color</p>
          <div className="flex gap-4 flex-wrap w-full mt-2">
            {textColor.map((item) => (
              <ColorItem
                key={item.color}
                color={item.color}
                type="text"
                onClick={handleColorChange}
              />
            ))}
            <ColorItem
              type="picker-text"
              onClick={handleColorChange}
            />
            <ColorItem
              type="none-text"
              onClick={handleColorChange}
            />
          </div>
        </div>
        <Separator className="my-2" />
        <div>
          <p className="text-md font-semibold text-gray-200">Highlight Color</p>
          <div className="flex gap-4 flex-wrap w-full mt-2">
            {textHighlight.map((item) => (
              <ColorItem
                key={item.backgroundColor}
                backgroundColor={item.backgroundColor}
                type="highlight"
                onClick={handleColorChange}
              />
            ))}
            <ColorItem
              type="picker-highlight"
              onClick={handleColorChange}
            />
            <ColorItem
              type="none-highlight"
              onClick={handleColorChange}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ColorItem({
  color,
  backgroundColor,
  type,
  onClick,
}: {
  onClick?: (color: ColorType) => void;
  color?: ColorType['color'];
  backgroundColor?: ColorType['backgroundColor'];
  type?: ColorType['type'];
}) {
  const [open, setOpen] = useState(false);

  const renderContent = () => {
    switch (type) {
      case 'text':
        return 'A';
      case 'highlight':
        return '';
      case 'none-text':
      case 'none-highlight':
        return <BanIcon />;
      case 'trigger':
        return 'A';
      default:
        return '';
    }
  };
  return (
    <>
      {type === 'picker-text' || type === 'picker-highlight' ? (
        <ModalColorPicker
          open={open}
          onClose={() => setOpen(false)}
        />
      ) : (
        <div
          className="w-8 h-8 rounded-sm hover:bg-gray-300/30 flex items-center justify-center cursor-pointer"
          onClick={() => onClick && onClick({ color, backgroundColor, type })}
        >
          <div
            className="w-7 h-7 flex items-center justify-center rounded-full border-2 font-semibold"
            style={{ color: color, borderColor: color, backgroundColor: backgroundColor }}
          >
            {renderContent()}
          </div>
        </div>
      )}
    </>
  );
}

const ModalColorPicker = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="w-8 h-8 rounded-sm hover:bg-gray-300/30 flex items-center justify-center cursor-pointer">
          <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 font-semibold">
            <BrushIcon size={14} />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <ColorPicker />
      </PopoverContent>
    </Popover>
  );
};
