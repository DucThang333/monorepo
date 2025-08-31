import { Meta, StoryObj } from '@storybook/react-webpack5';
import { toast } from 'sonner';

import { Button } from '@package/ui/components/button';
import { Toaster } from '@package/ui/components/sonner';

export function SonnerStory() {
  return (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}

const meta = {
  title: 'Component/Sonner',
  component: SonnerStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof SonnerStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
