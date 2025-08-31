import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from '@package/ui/components/label';
import { RadioGroup, RadioGroupItem } from '@package/ui/components/radio-group';

export function RadioGroupStory() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem
          value="default"
          id="r1"
        />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem
          value="comfortable"
          id="r2"
        />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem
          value="compact"
          id="r3"
        />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}

const meta = {
  title: 'Component/RadioGroup',
  component: RadioGroupStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof RadioGroupStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
