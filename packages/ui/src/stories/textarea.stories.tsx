import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Textarea } from '@package/ui/components/textarea';

export function TextareaStory() {
  return <Textarea placeholder="Type your message here." />;
}

const meta = {
  title: 'Component/Textarea',
  component: TextareaStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof TextareaStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
