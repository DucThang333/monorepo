import { Meta, StoryObj } from '@storybook/react-webpack5';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/input-otp';

export function InputOTPStory() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}

const meta = {
  title: 'Component/InputOTP',
  component: InputOTPStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof InputOTPStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
