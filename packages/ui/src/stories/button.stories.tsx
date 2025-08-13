import { Button } from "@/components/ui/button";
import { Meta, StoryObj } from "@storybook/react-webpack5";

const meta = {
    title: "Component/Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}