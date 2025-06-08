import React from "react";
import {
  Dialog as DialogDefault,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../inits/dialog";
import { Button } from "../inits/button";
import { cn } from "../../lib/utils";
import { X } from "lucide-react";

export type DialogProps = React.ComponentPropsWithoutRef<
  typeof DialogDefault
> & {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function Dialog(props: DialogProps) {
  const {
    trigger,
    title,
    description,
    content,
    footer,
    className,
    showCloseButton = true,
    onOpenChange,
    ...rest
  } = props;

  return (
    <DialogDefault onOpenChange={onOpenChange} {...rest}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={cn("sm:max-w-[425px]", className)}>
        {showCloseButton && (
          <div className="absolute right-4 top-4">
            <Button
              variant="ghost"
              className="h-6 w-6 p-0 rounded-full"
              onClick={() => onOpenChange?.(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Đóng</span>
            </Button>
          </div>
        )}

        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        {content}

        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </DialogDefault>
  );
}

export {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
