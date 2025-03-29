import { Meta, StoryObj } from "@storybook/react";
import { TextDecorator } from "./textDecorator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Text Decorator",
  component: TextDecorator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // This is the default export for the component. It will be used to generate the documentation page.
  // More info: https://storybook.js.org/docs/writing-docs/doc-blocks#default-export
  argTypes: {
    textFontFamily: {
      control: { type: "check" },
      options: [
        "font-sans",
        "font-serif",
        "font-mono",
        "font-anton",
        "font-caveat-brush",
        "font-e-b-garamond",
        "font-lobster",
        "font-poppins",
        "font-nunito",
        "font-oswald",
        "font-montserrat",
        "font-jet-brains-mono",
      ],
      description: "Font family",
    },
    textFontWeight: {
      control: { type: "select" },
      options: [
        "font-thin",
        "font-extralight",
        "font-light",
        "font-normal",
        "font-medium",
        "font-semibold",
        "font-bold",
        "font-extrabold",
        "font-black",
      ],
      description: "Font weight",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "font-normal" },
      },
    },
    text: {
      control: { type: "text" },
      description: "Text to be displayed",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Text" },
      },
    },
    textColor: {
      control: { type: "color" },
      description: "Text color",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#000000" },
      },
    },

    textSizes: {
      control: { type: "check" },
      options: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl"],
      description: "Text size",
    },
    is_italic: {
      control: { type: "boolean" },
      description: "Italic text",
    },
  },
} satisfies Meta<typeof TextDecorator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    textColor: "#000000",
    textFontFamily: ["font-sans"],
    textFontWeight: "font-normal",
    textSizes: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl"],
    is_italic: false,
  },
};
