import shortcutManager from '@package/keyboard-shortcut';
import {
  KEYBOARD_SHORTCUT,
  SHORTCUT_FEATURE,
  SHORTCUT_MODEL,
  SHORTCUT_SCOPE,
} from '@package/keyboard-shortcut/constant';
import {
  ExtensionKey,
  ExtensionTextStyleKey,
} from '@package/ui/components/editor/constants/extensionKey';
import { Editor } from '@tiptap/react';

type InitKeyboardShortcutType = {
  editor: Editor;
  extensionKey: ExtensionKey;
};
export function KeyboardShortcutInit({ editor, extensionKey }: InitKeyboardShortcutType) {
  if (!editor) return;

  // mark bold
  if (extensionKey.textStyle.includes(ExtensionTextStyleKey.BOLD)) {
    shortcutManager.register({
      scope: SHORTCUT_SCOPE.EDITOR,
      model: SHORTCUT_MODEL.BOLD,
      feature: SHORTCUT_FEATURE.TOGGLE,
      handler: () => editor.chain().focus().toggleBold().run(),
      keyboardShortcuts: [[KEYBOARD_SHORTCUT.CTRL, KEYBOARD_SHORTCUT.B]],
    });
  }

  // mark italic
  if (extensionKey.textStyle.includes(ExtensionTextStyleKey.ITALIC)) {
    shortcutManager.register({
      scope: SHORTCUT_SCOPE.EDITOR,
      model: SHORTCUT_MODEL.ITALIC,
      feature: SHORTCUT_FEATURE.TOGGLE,
      handler: () => editor.chain().focus().toggleItalic().run(),
      keyboardShortcuts: [[KEYBOARD_SHORTCUT.CTRL, KEYBOARD_SHORTCUT.I]],
    });
  }

  return null;
}
