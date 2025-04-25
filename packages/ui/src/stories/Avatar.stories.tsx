import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "The size of the avatar",
    },
    src: {
      control: "text",
      description: "URL of the avatar image",
    },
    alt: {
      control: "text",
      description: "Alternative text for the avatar image",
    },
    fallback: {
      control: "text",
      description: "Text to display when image fails to load or no image is provided",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample image URLs
const sampleImages = [
  "https://github.com/shadcn.png", 
  "https://avatars.githubusercontent.com/u/124599?v=4",
  null
];

// Basic example
export const Default: Story = {
  args: {
    src: sampleImages[0] ?? undefined,
    alt: "User avatar",
    size: "md",
  },
};

// Size variants
export const Small: Story = {
  args: {
    src: sampleImages[0] ?? undefined,
    alt: "User avatar",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    src: sampleImages[0] ?? undefined,
    alt: "User avatar",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    src: sampleImages[0] ?? undefined,
    alt: "User avatar",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    src: sampleImages[0] ?? undefined,
    alt: "User avatar",
    size: "xl",
  },
};

// With fallback
export const WithFallback: Story = {
  args: {
    fallback: "JD",
    alt: "User avatar",
    size: "md",
  },
};

export const WithBrokenImage: Story = {
  args: {
    src: "broken-url.jpg",
    fallback: "JD",
    alt: "User avatar",
    size: "md",
  },
};

// All Avatar Sizes Demo
export const AllSizes = () => {
  const sizes = ["sm", "md", "lg", "xl"];
  
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4">
        <h3 className="text-lg font-medium">Avatar Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Avatar 
                src={sampleImages[0] ?? undefined}
                alt="User avatar"
                size={size as any}
              />
              <span className="text-sm">{size}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid gap-4">
        <h3 className="text-lg font-medium">With Fallback Text</h3>
        <div className="flex flex-wrap items-center gap-4">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Avatar 
                fallback="JD"
                alt="User avatar"
                size={size as any}
              />
              <span className="text-sm">{size}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <h3 className="text-lg font-medium">Different Users</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar src={sampleImages[0] ?? undefined} fallback="SH" alt="User 1" />
          <Avatar src={sampleImages[1] ?? undefined} fallback="GH" alt="User 2" />
          <Avatar fallback="JD" alt="User 3" />
          <Avatar fallback="AB" alt="User 4" className="bg-primary text-primary-foreground" />
          <Avatar fallback="CD" alt="User 5" className="bg-secondary text-secondary-foreground" />
        </div>
      </div>
    </div>
  );
};
