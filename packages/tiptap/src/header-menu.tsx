import { Editor } from '@tiptap/react';
import { ExtensionKey } from '@package/ui/components/editor/constants/extensionKey';
import { HistoryPlugin } from '@package/ui/components/editor/plugins/historyPlugin';
import { CollabsibleFormatTextPlugin } from '@package/ui/components/editor/plugins/collabsibleFormatTextPlugin';
import { CollabsibleFontFamilyPlugin } from '@package/ui/components/editor/plugins/collabsibleFontFamilyPlugin';
import { ListPlugin } from '@package/ui/components/editor/plugins/listPlugin';
import { BoldPlugin } from '@package/ui/components/editor/plugins/boldPlugin';
import { ItalicPlugin } from '@package/ui/components/editor/plugins/italicPlugin';
import { StrikePlugin } from '@package/ui/components/editor/plugins/strikePlugin';
import { UnderlinePlugin } from '@package/ui/components/editor/plugins/underlinePlugin';
import { FontSizePlugin } from '@package/ui/components/editor/plugins/fontSizePlugin';
import { SettingPlugin } from '@package/ui/components/editor/plugins/setttingPlugin';

type HeaderMenuProps = {
  editor: Editor;
  extensionKey: ExtensionKey;
};

export function HeaderMenu(props: HeaderMenuProps) {
  const { extensionKey, editor } = props;
  return (
    <div className="flex justify-between gap-6">
      <div className="flex flex-wrap gap-2 items-center p-2 rounded-tl-md">
        <HistoryPlugin
          extensionKeys={extensionKey.commons}
          editor={editor}
        />
        {extensionKey.formatTexts.length > 0 && (
          <CollabsibleFormatTextPlugin
            extensionKeys={extensionKey.formatTexts}
            editor={editor}
          />
        )}
        {extensionKey.fontFamilies.length > 0 && (
          <CollabsibleFontFamilyPlugin
            extensionKeys={extensionKey.fontFamilies}
            editor={editor}
          />
        )}
        <FontSizePlugin
          editor={editor}
          extensionKeys={extensionKey.commons}
        />
        {extensionKey.textStyle.length > 0 && (
          <div className="flex gap-0.5">
            <BoldPlugin
              editor={editor}
              extensionKeys={extensionKey.textStyle}
            />
            <ItalicPlugin
              editor={editor}
              extensionKeys={extensionKey.textStyle}
            />
            <StrikePlugin
              editor={editor}
              extensionKeys={extensionKey.textStyle}
            />
            <UnderlinePlugin
              editor={editor}
              extensionKeys={extensionKey.textStyle}
            />
          </div>
        )}
        <ListPlugin
          editor={editor}
          extensionKeys={extensionKey.commons}
        />
      </div>
      <SettingPlugin />
    </div>
  );
}
