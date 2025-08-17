import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from '@/components/label';
import { Switch } from '@/components/switch';

export function SwitchStory() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

const meta = {
  title: 'Component/Switch',
  component: SwitchStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof SwitchStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
