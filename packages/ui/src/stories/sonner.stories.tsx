import { Meta, StoryObj } from '@storybook/react-webpack5';
import { toast, ToasterProps } from 'sonner';

import { Button } from '@package/ui/components/button';
import { Toaster, ToasterIOS } from '@package/ui/components/sonner';

export function SonnerStory({ typeToaster,status,...props }: ToasterProps & { typeToaster:"default" | "ios"} & { status?: "default" | "success" | "error" | "warning" | "info" }) {

  const handleClick = () => {
    switch(status) {
      case "default":
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
        break;
      case "success":
        toast.success('Event has been success', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
        })
        break;
      case "error":
        toast.error('Event has been error', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
        })
        break;
      case "warning":
        toast.warning('Event has been warning', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
        })
        break;
      case "info":
        toast.info('Event has been info', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
        })
        break;
      default:
        toast('Event has been default', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
        })
        break;
    }
  }

  return (
    <div>
      {typeToaster === "default" ? <Toaster position='top-right' {...props} richColors={true}/> : <ToasterIOS position='top-right' {...props} richColors={true}/>}
      <Button
        variant="outline"
        onClick={handleClick}
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

export const Default: Story = {
  args: {
    typeToaster: 'default',
    status: 'default',
  },
};

export const IOS: Story = {
  args: {
    typeToaster: 'ios',
  },
};

export const Success: Story = {
  args: {
    typeToaster: 'default',
    status: 'success',
  },
};

export const Error: Story = {
  args: {
    typeToaster: 'default',
    status: 'error',
  },
};

export const Warning: Story = {
  args: {
    typeToaster: 'default',
    status: 'warning',
  },
};

export const Info: Story = {
  args: {
    typeToaster: 'default',
    status: 'info',
  },
};
