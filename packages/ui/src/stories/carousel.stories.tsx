import { Meta, StoryObj } from '@storybook/react-webpack5';
import * as React from 'react';
import { Card, CardContent } from '@package/ui/components/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@package/ui/components/carousel';

export function CarouselStory() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({
          length: 5,
        }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const meta = {
  title: 'Component/Carousel',
  component: CarouselStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof CarouselStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
