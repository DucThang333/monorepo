export enum SHORTCUT_SCOPE {
  APP = 'app',
  EDITOR = 'editor',
}

export enum SHORTCUT_FEATURE {
  TOGGLE = 'Toggle',
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export enum SHORTCUT_MODEL {
  SIDEBAR = 'sidebar',
  BOLD = 'bold',
  ITALIC = 'italic',
  STRIKE = 'strike',
  UNDERLINE = 'underline',
}

export const enum KEYBOARD_SHORTCUT {
  // --- Modifier keys ---
  CTRL = 'Control',
  ALT = 'Alt',
  SHIFT = 'Shift',
  META = 'Meta', // ⌘ Command on Mac, Windows key on Windows

  // --- Numbers (top row) ---
  DIGIT_0 = '0',
  DIGIT_1 = '1',
  DIGIT_2 = '2',
  DIGIT_3 = '3',
  DIGIT_4 = '4',
  DIGIT_5 = '5',
  DIGIT_6 = '6',
  DIGIT_7 = '7',
  DIGIT_8 = '8',
  DIGIT_9 = '9',

  // --- Letters (A–Z) ---
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
  E = 'e',
  F = 'f',
  G = 'g',
  H = 'h',
  I = 'i',
  J = 'j',
  K = 'k',
  L = 'l',
  M = 'm',
  N = 'n',
  O = 'o',
  P = 'p',
  Q = 'q',
  R = 'r',
  S = 's',
  T = 't',
  U = 'u',
  V = 'v',
  W = 'w',
  X = 'x',
  Y = 'y',
  Z = 'z',

  // --- Function keys ---
  F1 = 'F1',
  F2 = 'F2',
  F3 = 'F3',
  F4 = 'F4',
  F5 = 'F5',
  F6 = 'F6',
  F7 = 'F7',
  F8 = 'F8',
  F9 = 'F9',
  F10 = 'F10',
  F11 = 'F11',
  F12 = 'F12',

  // --- Navigation keys ---
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
  HOME = 'Home',
  END = 'End',
  PAGE_UP = 'PageUp',
  PAGE_DOWN = 'PageDown',

  // --- Editing keys ---
  BACKSPACE = 'Backspace',
  DELETE = 'Delete',
  ENTER = 'Enter',
  ESCAPE = 'Escape',
  TAB = 'Tab',
  SPACE = ' ', // spacebar

  // --- Symbols ---
  MINUS = '-',
  EQUAL = '=',
  BRACKET_LEFT = '[',
  BRACKET_RIGHT = ']',
  BACKSLASH = '\\',
  SEMICOLON = ';',
  QUOTE = "'",
  COMMA = ',',
  PERIOD = '.',
  SLASH = '/',
  BACKQUOTE = '`', // backtick/tilde

  // --- Numpad keys ---
  NUMPAD_0 = '0',
  NUMPAD_1 = '1',
  NUMPAD_2 = '2',
  NUMPAD_3 = '3',
  NUMPAD_4 = '4',
  NUMPAD_5 = '5',
  NUMPAD_6 = '6',
  NUMPAD_7 = '7',
  NUMPAD_8 = '8',
  NUMPAD_9 = '9',
  NUMPAD_ADD = '+',
  NUMPAD_SUBTRACT = '-',
  NUMPAD_MULTIPLY = '*',
  NUMPAD_DIVIDE = '/',
  NUMPAD_DECIMAL = '.',
}

export const shortcutPriority: Record<SHORTCUT_SCOPE, number> = {
  [SHORTCUT_SCOPE.APP]: 1,
  [SHORTCUT_SCOPE.EDITOR]: 2,
};
