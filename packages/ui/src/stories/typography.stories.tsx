import { Meta, StoryObj } from '@storybook/react-webpack5';
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@package/ui/components/typography';

type TypegraphyStoryProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'example';
};
function TypographyStory(props: TypegraphyStoryProps) {
  const content = () => {
    switch (props.type) {
      case 'h1':
        return <TypographyH1>Typography H1</TypographyH1>;
      case 'h2':
        return <TypographyH2>Typography H2</TypographyH2>;
      case 'h3':
        return <TypographyH3>Typography H3</TypographyH3>;
      case 'h4':
        return <TypographyH4>Typography H4</TypographyH4>;
      case 'p':
        return <TypographyP>Typography P</TypographyP>;
      case 'blockquote':
        return <TypographyBlockquote>Typography blockquote</TypographyBlockquote>;

      default:
        return (
          <div>
            <TypographyH1>Taxing Laughter: The Joke Tax Chronicles</TypographyH1>
            <TypographyH2>The People of the Kingdom</TypographyH2>
            <TypographyH3>The Joke Tax</TypographyH3>
            <TypographyH4> People stopped telling jokes</TypographyH4>
            <TypographyP>
              {' '}
              The king, seeing how much happier his subjects were, realized the error of his ways
              and repealed the joke tax.
            </TypographyP>
            <TypographyBlockquote>
              {' '}
              &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only
              fair that they should pay for the privilege.&quot;
            </TypographyBlockquote>
          </div>
        );
    }
  };

  return <div>{content()}</div>;
}

const meta = {
  title: 'Component/Typography',
  component: TypographyStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    type: 'example',
  },
} satisfies Meta<typeof TypographyStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    type: 'example',
  },
};

export const h1: Story = {
  args: {
    type: 'h1',
  },
};
export const h2: Story = {
  args: {
    type: 'h2',
  },
};
export const h3: Story = {
  args: {
    type: 'h3',
  },
};
export const H4: Story = {
  args: {
    type: 'h4',
  },
};
export const p: Story = {
  args: {
    type: 'p',
  },
};
export const blockquote: Story = {
  args: {
    type: 'blockquote',
  },
};
