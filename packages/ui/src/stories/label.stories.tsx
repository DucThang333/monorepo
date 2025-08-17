import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Checkbox } from '@/components/checkbox';
import { Label } from '@/components/label';

export function LabelStory() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}

const meta = {
  title: 'Component/Label',
  component: LabelStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof LabelStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
