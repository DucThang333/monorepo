// components/ShortcutInit.tsx
'use client';

import { useEffect } from 'react';
import shortcutManager from '@package/keyboard-shortcut';

export function ShortcutInit() {
  useEffect(() => {
    shortcutManager.listen();
    return shortcutManager.close();
  }, []);

  return null; // no UI
}
