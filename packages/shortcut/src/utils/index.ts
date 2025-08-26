import { KEYBOARD_SHORTCUT } from '../constants/shortcut';

export function isShortcutPressed(event: KeyboardEvent, combo: KEYBOARD_SHORTCUT[]): boolean {
  const pressed: string[] = [];

  if (event.ctrlKey) pressed.push(KEYBOARD_SHORTCUT.CTRL.toLowerCase());
  if (event.metaKey) pressed.push(KEYBOARD_SHORTCUT.META.toLowerCase());
  if (event.altKey) pressed.push(KEYBOARD_SHORTCUT.ALT.toLowerCase());
  if (event.shiftKey) pressed.push(KEYBOARD_SHORTCUT.SHIFT.toLowerCase());

  pressed.push(event.key.toLowerCase()); // capture actual pressed key

  return combo.every((key) => pressed.includes(key.toLowerCase()));
}
