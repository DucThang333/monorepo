import { Meta, StoryObj } from '@storybook/react-webpack5';
import * as React from 'react';
import { Progress } from '@/components/progress';

export function ProgressStory() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(
      () =>
        setProgress((prev) => {
          return (prev % 100) + 10;
        }),
      500
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      value={progress}
      className="w-[200px]"
    />
  );
}

const meta = {
  title: 'Component/Progress',
  component: ProgressStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof ProgressStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
