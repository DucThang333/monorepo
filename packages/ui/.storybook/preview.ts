import type { Preview } from '@storybook/react-webpack5';
import '../src/styles/globals.css';
import '../src/styles/theme.css';
// import '@package/tiptap/style'
// import './fonts.css';
import { withThemeByClassName } from '@storybook/addon-themes';

/* snipped for brevity */

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
