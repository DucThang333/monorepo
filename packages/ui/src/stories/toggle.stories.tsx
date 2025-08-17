import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Bold } from 'lucide-react';

import { Toggle } from '@/components/toggle';

export function ToggleStory() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}

const meta = {
  title: 'Component/Toggle',
  component: ToggleStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof ToggleStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
