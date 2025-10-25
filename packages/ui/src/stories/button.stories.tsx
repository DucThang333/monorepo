import { Button, ButtonProps } from '@package/ui/components/button';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { GitBranch, Settings2Icon, SettingsIcon } from 'lucide-react';

const meta = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    children: 'button',
    variant: 'default',
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'default',
  },
};
export const LoadingButton: Story = {
  args: {
    children: 'Loading',
    isLoading: true,
  },
};
export const DestructiveButton: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};
export const SecondaryButton: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const OutlineButton: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const LinkButton: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const GhostButton: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const WithIconButton: Story = {
  args: {
    children: (
      <div className="flex gap-2">
        <GitBranch /> New Branch
      </div>
    ),
  },
};

export const WithIconAndLoadingButton: Story = {
  args: {
    children: <SettingsIcon/>,
    variant: 'outline',
  },
};