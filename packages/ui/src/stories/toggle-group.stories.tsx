import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Bold, Italic, Underline } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from '@package/ui/components/toggle-group';

export function ToggleGroupStory() {
  return (
    <ToggleGroup
      variant="outline"
      type="multiple"
    >
      <ToggleGroupItem
        value="bold"
        aria-label="Toggle bold"
      >
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="italic"
        aria-label="Toggle italic"
      >
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="strikethrough"
        aria-label="Toggle strikethrough"
      >
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

const meta = {
  title: 'Component/ToggleGroup',
  component: ToggleGroupStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof ToggleGroupStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
