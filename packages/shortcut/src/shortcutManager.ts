import React from 'react';
import {
  SHORTCUT_FEATURE,
  KEYBOARD_SHORTCUT,
  SHORTCUT_MODEL,
  SHORTCUT_SCOPE,
} from './constants/shortcut';
import { isShortcutPressed } from './utils';

type RegisteredShortcut = {
  scope: SHORTCUT_SCOPE;
  model: SHORTCUT_MODEL;
  feature: SHORTCUT_FEATURE;
  handler: () => void;
  keyboardShortcuts: KEYBOARD_SHORTCUT[][];
};
export default class ShortcutManager {
  private shortcuts: RegisteredShortcut[] = [];
  private listener?: (event: KeyboardEvent) => void;

  register({ scope, model, feature, handler, keyboardShortcuts }: RegisteredShortcut) {
    const indexShortcut = this.shortcuts.findIndex(
      (sc) => sc.scope === scope && sc.feature === feature && sc.model === model
    );
    if (indexShortcut == -1) {
      this.shortcuts.push({
        feature,
        model,
        scope,
        handler,
        keyboardShortcuts,
      });
      return;
    }

    this.shortcuts[indexShortcut] = {
      scope,
      feature,
      model,
      keyboardShortcuts,
      handler,
    };
  }

  listen() {
    this.listener = (event: KeyboardEvent) => {
      for (const { scope, keyboardShortcuts, handler } of this.shortcuts) {
        keyboardShortcuts.forEach((keyboardShortcut) => {
          if (isShortcutPressed(event, keyboardShortcut)) {
            event.preventDefault();
            if (this.getKeypressContext(event) === scope) handler();
          }
        });
      }
    };
    window.addEventListener('keydown', this.listener);
  }

  close() {
    if (this.listener) {
      window.removeEventListener('keydown', this.listener);
      this.listener = undefined; // cleanup
    }
  }

  private getKeypressContext(event: KeyboardEvent): SHORTCUT_SCOPE | undefined {
    const target = event.target as HTMLElement | null;
    if (!target) return undefined;
    if (target.closest('.tiptap')) return SHORTCUT_SCOPE.EDITOR; // any div or component marked as editor
    // fallback: anywhere else in app
    return SHORTCUT_SCOPE.APP;
  }
}
