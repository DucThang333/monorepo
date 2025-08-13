import { Input } from "@/components/ui/input";
import { Meta, StoryObj } from "@storybook/react-webpack5";

const meta = {
    title: "Component/Input",
    component: Input,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}