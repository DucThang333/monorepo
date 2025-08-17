import { Meta, StoryObj } from '@storybook/react-webpack5';

export function ChartStory() {
  return <div>chart</div>;
}
const meta = {
  title: 'Component/Chart',
  component: ChartStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof ChartStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
