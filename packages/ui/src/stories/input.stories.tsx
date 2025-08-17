import { Input } from '@/components/input';
import { Meta, StoryObj } from '@storybook/react-webpack5';

function InputStory(props: typeof Input) {
  return <Input {...props} />;
}

const meta = {
  title: 'Component/InputStory',
  component: InputStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    placeholder: 'placeholder',
  },
} satisfies Meta<typeof InputStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DisableInput: Story = {
  args: {
    placeholder: 'disable',
    disabled: true,
  },
};
