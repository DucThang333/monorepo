import * as React from "react";
import { cn } from "../../lib/utils";

export interface ResizableProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  min?: number;
  max?: number;
}

export const Resizable = React.forwardRef<HTMLDivElement, ResizableProps>(
  ({ direction = "horizontal", min = 100, max = 600, className, style, children, ...props }, ref) => {
    const [size, setSize] = React.useState((min + max) / 2);
    const isHorizontal = direction === "horizontal";
    const dragging = React.useRef(false);
    const lastPos = React.useRef(0);

    const onMouseDown = (e: React.MouseEvent) => {
      dragging.current = true;
      lastPos.current = isHorizontal ? e.clientX : e.clientY;
      document.body.style.cursor = isHorizontal ? "col-resize" : "row-resize";
    };

    React.useEffect(() => {
      const onMouseMove = (e: MouseEvent) => {
        if (!dragging.current) return;
        const delta = (isHorizontal ? e.clientX : e.clientY) - lastPos.current;
        setSize((prev) => {
          let next = prev + delta;
          if (next < min) next = min;
          if (next > max) next = max;
          return next;
        });
        lastPos.current = isHorizontal ? e.clientX : e.clientY;
      };
      const onMouseUp = () => {
        dragging.current = false;
        document.body.style.cursor = "";
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
    }, [isHorizontal, min, max]);

    return (
      <div
        ref={ref}
        className={cn(
          "resizable flex",
          isHorizontal ? "flex-row" : "flex-col",
          className
        )}
        style={{ ...style, [isHorizontal ? "width" : "height"]: size }}
        {...props}
      >
        {children}
        <div
          className={cn(
            "resizer bg-muted hover:bg-primary transition cursor-pointer",
            isHorizontal ? "w-2 h-full" : "h-2 w-full"
          )}
          onMouseDown={onMouseDown}
        />
      </div>
    );
  }
);
Resizable.displayName = "Resizable";

export default Resizable;
