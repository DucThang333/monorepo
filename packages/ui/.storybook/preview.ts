import type { Preview } from "@storybook/react";
import "./global_output.css";
import "@package/i18next/i18n"

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
