// components/ShortcutInit.tsx
'use client';

import { useEffect } from 'react';
import shortcutManager from '@package/keyboard-shortcut';

export default function ShortcutInit() {
  useEffect(() => {
    shortcutManager.listen();
    return () => shortcutManager.close();
  }, []);

  return null; // no UI
}
