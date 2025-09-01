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
  shortcuts: RegisteredShortcut[] = [];
  customKeyboardShortcuts: Omit<RegisteredShortcut, 'handler'>[] = [];
  private listener?: (event: KeyboardEvent) => void;

  register({ scope, model, feature, handler, keyboardShortcuts }: RegisteredShortcut) {
    // check shortcut is exist
    const indexShortcut = this.shortcuts.findIndex(
      (sc) => sc.scope === scope && sc.model === model && sc.feature === feature
    );
    // check short was custom keyboard
    const indexCustomKeyboardShortcut = this.customKeyboardShortcuts.findIndex(
      (sc) => sc.scope === scope && sc.model === model && sc.feature === feature
    );
    // modifired keyboard shortcut = first priority is custom keyboard shortcut second priority is new keyboard shortcut
    const keyboardShortcutRegistered =
      indexCustomKeyboardShortcut !== -1
        ? this.customKeyboardShortcuts[indexCustomKeyboardShortcut].keyboardShortcuts
        : keyboardShortcuts;

    // not found push new item
    if (indexShortcut === -1) {
      this.shortcuts.push({
        feature,
        handler,
        keyboardShortcuts: keyboardShortcutRegistered,
        model,
        scope,
      });
    } else {
      // found update
      this.shortcuts[indexShortcut] = {
        ...this.shortcuts[indexShortcut],
        handler,
        keyboardShortcuts: keyboardShortcutRegistered,
      };
    }
  }

  resgiterShortcutCustom({
    scope,
    model,
    feature,
    keyboardShortcuts,
  }: Omit<RegisteredShortcut, 'handler'>) {
    const indexKeyboardShortcut = this.customKeyboardShortcuts.findIndex(
      (sc) => sc.scope === scope && sc.feature === feature && sc.model === model
    );
    // not found => push new item
    if (indexKeyboardShortcut === -1) {
      this.customKeyboardShortcuts.push({
        scope,
        feature,
        model,
        keyboardShortcuts,
      });
    } else {
      // found => update
      this.customKeyboardShortcuts[indexKeyboardShortcut] = {
        scope,
        feature,
        model,
        keyboardShortcuts,
      };
    }
    // in case shortcut was exist => update
    const indexShortcut = this.shortcuts.findIndex(
      (sc) => sc.scope === scope && sc.model === model && sc.feature === feature
    );
    if (indexShortcut !== -1) {
      this.shortcuts[indexShortcut] = {
        ...this.shortcuts[indexShortcut],
        keyboardShortcuts,
      };
    }
  }

  listen() {
    // remove if old version
    if (this.listener) {
      window.removeEventListener('keydown', this.listener);
    }
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
