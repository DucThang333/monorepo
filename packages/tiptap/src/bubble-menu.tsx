import { Editor } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/react/menus';

import { CollabsibleFormatTextPlugin } from '@package/ui/components/editor/plugins/collabsibleFormatTextPlugin';
import { ExtensionKey } from '@package/ui/components/editor/constants/extensionKey';
import { BoldPlugin } from '@package/ui/components/editor/plugins/boldPlugin';
import { ItalicPlugin } from '@package/ui/components/editor/plugins/italicPlugin';
import { StrikePlugin } from '@package/ui/components/editor/plugins/strikePlugin';
import { CollabsibleFontFamilyPlugin } from '@package/ui/components/editor/plugins/collabsibleFontFamilyPlugin';
import { EllipsisVertical } from '@package/ui/icons/lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@package/ui/components/popover';
import { ListPlugin } from '@package/ui/components/editor/plugins/listPlugin';
import { ColorPlugin } from '@package/ui/components/editor/plugins/colorPlugin';

export default function BubbleMenuCustom({
  editor,
  extensionKey,
}: {
  editor: Editor;
  extensionKey: ExtensionKey;
}) {
  return (
    <BubbleMenu
      editor={editor}
      options={{
        placement: 'bottom-start',
        offset: 8,
      }}
      className="border border-border rounded-sm px-2 py-1"
    >
      <div className="flex gap-2">
        <CollabsibleFormatTextPlugin
          extensionKeys={extensionKey.formatTexts}
          editor={editor}
        />
        <CollabsibleFontFamilyPlugin
          extensionKeys={extensionKey.fontFamilies}
          editor={editor}
        />
        <BoldPlugin
          extensionKeys={extensionKey.textStyle}
          editor={editor}
        />
        <ItalicPlugin
          extensionKeys={extensionKey.textStyle}
          editor={editor}
        />
        <StrikePlugin
          extensionKeys={extensionKey.textStyle}
          editor={editor}
        />
        <ColorPlugin
          extensionKeys={extensionKey.commons}
          editor={editor}
        />
        <MoreOptionMenu
          editor={editor}
          extensionKey={extensionKey}
        />
      </div>
    </BubbleMenu>
  );
}

function MoreOptionMenu({ editor, extensionKey }: { editor: Editor; extensionKey: ExtensionKey }) {
  return (
    <Popover>
      <PopoverTrigger className="h-fit ">
        <div className="hover:text-highlight cursor-pointer w-8 h-8 flex items-center justify-center">
          <EllipsisVertical size={19} />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 w-auto px-2 py-1"
        align="end"
        side="top"
      >
        <div className="flex gap-2">
          <ListPlugin
            editor={editor}
            extensionKeys={extensionKey.commons}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
