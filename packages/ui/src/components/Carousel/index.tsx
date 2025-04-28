import * as React from "react";
import { cn } from "../../lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  activeIndex?: number;
  onChange?: (index: number) => void;
  showControls?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  activeIndex: controlledIndex,
  onChange,
  showControls = true,
  showIndicators = true,
  autoPlay = false,
  interval = 5000,
  className,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = React.useState(controlledIndex ?? 0);
  const [isHovering, setIsHovering] = React.useState(false);
  const slides = React.Children.toArray(children);
  const count = slides.length;
  const trackRef = React.useRef<HTMLDivElement>(null);

  // Normalize index to handle edge cases
  const normalizeIndex = (index: number) => {
    if (index < 0) return count - 1;
    if (index >= count) return 0;
    return index;
  };

  const goTo = (idx: number) => {
    const normalizedIndex = normalizeIndex(idx);
    setActiveIndex(normalizedIndex);
    onChange?.(normalizedIndex);
  };

  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  // Handle controlled index changes
  React.useEffect(() => {
    if (controlledIndex !== undefined) {
      setActiveIndex(normalizeIndex(controlledIndex));
    }
  }, [controlledIndex]);

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || isHovering || count <= 1) return;
    
    const intervalId = setInterval(() => {
      next();
    }, interval);
    
    return () => clearInterval(intervalId);
  }, [autoPlay, interval, activeIndex, isHovering, count]);

  // Apply transform to show the current slide
  React.useEffect(() => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth / count;
      trackRef.current.style.transform = `translateX(-${activeIndex * slideWidth}px)`;
    }
  }, [activeIndex, count]);

  return (
    <div 
      className={cn("carousel relative overflow-hidden", className)} 
      {...props}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="region"
      aria-roledescription="carousel"
    >
      {/* Carousel track - container for all slides */}
      <div 
        ref={trackRef}
        className="carousel-track flex transition-transform duration-300 ease-in-out w-full h-full"
        style={{ width: `${count * 100}%` }}
      >
        {slides.map((child, idx) => (
          <div
            className="carousel-slide w-full h-full flex-shrink-0"
            key={idx}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${count}`}
            aria-hidden={idx !== activeIndex}
            style={{ width: `${100 / count}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {showControls && count > 1 && (
        <div className="carousel-arrows absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            onClick={prev}
            className="carousel-prev rounded-full bg-background/80 p-2 shadow-md hover:bg-background pointer-events-auto"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="carousel-next rounded-full bg-background/80 p-2 shadow-md hover:bg-background pointer-events-auto"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Indicators/dots */}
      {showIndicators && count > 1 && (
        <div className="carousel-indicators absolute bottom-3 left-0 right-0 flex gap-2 justify-center">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                idx === activeIndex ? "bg-primary w-3" : "bg-muted"
              )}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === activeIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
