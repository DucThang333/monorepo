import { Editor, useEditorState } from '@tiptap/react';
import { ExtensionKey } from '@package/ui/component/editor/constants/extensionKey';
import { HistoryPlugin } from '@package/ui/component/editor/plugins/historyPlugin';
import { CollabsibleFormatTextPlugin } from '@package/ui/component/editor/plugins/collabsibleFormatTextPlugin';
import { CollabsibleFontFamilyPlugin } from '@package/ui/component/editor/plugins/collabsibleFontFamilyPlugin';
import { ListPlugin } from '@package/ui/component/editor/plugins/listPlugin';
import { BoldPlugin } from '@package/ui/component/editor/plugins/boldPlugin';
import { ItalicPlugin } from '@package/ui/component/editor/plugins/italicPlugin';
import { StrikePlugin } from '@package/ui/component/editor/plugins/strikePlugin';
import { UnderlinePlugin } from '@package/ui/component/editor/plugins/underlinePlugin';
import { FontSizePlugin } from '@package/ui/component/editor/plugins/fontSizePlugin';
import { SettingPlugin } from '@package/ui/component/editor/plugins/setttingPlugin';

type HeaderMenuProps = {
  editor: Editor;
  extensionKey: ExtensionKey;
};

export function HeaderMenu(props: HeaderMenuProps) {
  const { extensionKey, editor } = props;

  return (
    <div className="flex justify-between">
      <div className="flex gap-2 overflow-auto">
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
