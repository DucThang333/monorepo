import { ColorPicker } from '@package/ui/components/color-picker';
import { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
  title: 'Component/ColorPicker',
  component: ColorPicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    color: '#FF0000',
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#FF0000',
  },
};
