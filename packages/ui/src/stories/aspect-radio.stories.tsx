import { Input } from "@/components/ui/input";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { AspectRatio } from "@/components/ui/aspect-ratio"
function AspectRatioStory() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </AspectRatio>
  )
}

const meta = {
    title: "Component/Aspect Radio",
    component: AspectRatioStory,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof AspectRatioStory>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}