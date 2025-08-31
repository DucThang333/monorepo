import shortcutManager from '@package/keyboard-shortcut';
import {
  KEYBOARD_SHORTCUT,
  SHORTCUT_FEATURE,
  SHORTCUT_MODEL,
  SHORTCUT_SCOPE,
} from '@package/keyboard-shortcut/constant';
import { Editor } from '@tiptap/react';

type InitKeyboardShortcutType = {
  editor: Editor;
};
export function KeyboardShortcutInit({ editor }: InitKeyboardShortcutType) {
  if (!editor) return;
  // bold
  shortcutManager.register({
    scope: SHORTCUT_SCOPE.EDITOR,
    model: SHORTCUT_MODEL.BOLD,
    feature: SHORTCUT_FEATURE.TOGGLE,
    handler: () => editor.chain().focus().toggleBold().run(),
    keyboardShortcuts: [[KEYBOARD_SHORTCUT.CTRL, KEYBOARD_SHORTCUT.B]],
  });

  return null;
}
