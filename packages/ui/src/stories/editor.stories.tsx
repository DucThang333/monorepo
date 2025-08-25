import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Tiptap } from '@package/tiptap/tiptap';
import {
  ExtensionCommonKey,
  ExtensionFontFamilyKey,
  ExtensionFormatTextKey,
  ExtensionKey,
  ExtensionTextStyleKey,
} from '@/components/editor/constants/extensionKey';

const extensionKey: ExtensionKey = {
  fontFamilies: [
    ExtensionFontFamilyKey.ANTON,
    ExtensionFontFamilyKey.CAVEAT_BRUSH,
    ExtensionFontFamilyKey.EB_GARAMOND,
    ExtensionFontFamilyKey.JET_BRAINS_MONO,
    ExtensionFontFamilyKey.LOBSTER,
    ExtensionFontFamilyKey.MONTSERRAT,
    ExtensionFontFamilyKey.NUNITO,
    ExtensionFontFamilyKey.OSWALD,
    ExtensionFontFamilyKey.POPPINS,
    ExtensionFontFamilyKey.SANS_SERIF,
    ExtensionFontFamilyKey.MONO,
  ],
  formatTexts: [
    ExtensionFormatTextKey.CODE,
    ExtensionFormatTextKey.H1,
    ExtensionFormatTextKey.H2,
    ExtensionFormatTextKey.H3,
    ExtensionFormatTextKey.H4,
    ExtensionFormatTextKey.H5,
    ExtensionFormatTextKey.H6,
    ExtensionFormatTextKey.PARAGRAPH,
    ExtensionFormatTextKey.QUOTE,
  ],
  commons: [
    ExtensionCommonKey.HISTORY,
    ExtensionCommonKey.CHECK_LIST,
    ExtensionCommonKey.BULLETED_LIST,
    ExtensionCommonKey.NUMBERED_LIST,
    ExtensionCommonKey.FONT_SIZE,
  ],
  textStyle: [
    ExtensionTextStyleKey.BOLD,
    ExtensionTextStyleKey.ITALIC,
    ExtensionTextStyleKey.STRIKE,
    ExtensionTextStyleKey.UNDERLINE,
  ],
};

function EditorStory() {
  return (
    <Tiptap
      extensionKey={extensionKey}
      tiptapKey="storybook"
      enableHeaderMenu={true}
      className="w-[1000px]"
      content='<h1><strong>Tilte Heading 1</strong></h1><h2><strong>Tilte Heading 2</strong></h2><h3><strong>Tilte Heading 3</strong></h3><h4><strong>Tilte Heading 4</strong></h4><h5><strong>Tilte Heading 5</strong></h5><h6><strong>Tilte Heading 6</strong></h6><p>Paragraph</p>
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
        '
    />
  );
}

const meta = {
  title: 'Component/Editor',
  component: EditorStory,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EditorStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
