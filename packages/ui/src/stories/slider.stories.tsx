import { Meta, StoryObj } from '@storybook/react-webpack5';
import { cn } from '@package/ui/lib/utils';
import { Slider } from '@package/ui/components/slider';

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderStory({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn('w-[60%]', className)}
      {...props}
    />
  );
}
const meta = {
  title: 'Component/Slider',
  component: SliderStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof SliderStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
