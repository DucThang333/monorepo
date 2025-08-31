import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from '@package/ui/components/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@package/ui/components/tooltip';

export function TooltipStory() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}

const meta = {
  title: 'Component/Tooltip',
  component: TooltipStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof TooltipStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
