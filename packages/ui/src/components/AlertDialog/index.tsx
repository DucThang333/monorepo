import React from "react";
import {
  AlertDialog as AlertDialogDefault,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/inits/alert-dialog";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type AlertDialogProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogDefault
> & {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  cancelText?: string;
  actionText?: string;
  onAction?: () => void | Promise<void>;
  isActionLoading?: boolean;
  actionVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
};

export function AlertDialog(props: AlertDialogProps) {
  const {
    trigger,
    title,
    description,
    cancelText = "Hủy",
    actionText = "Tiếp tục",
    onAction,
    isActionLoading = false,
    actionVariant = "default",
    ...rest
  } = props;

  return (
    <AlertDialogDefault {...rest}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction
            onClick={onAction}
            disabled={isActionLoading}
            className={cn(
              actionVariant === "destructive" && "bg-red-600 hover:bg-red-700"
            )}
          >
            {isActionLoading ? (
              <div className="relative">
                <Loader2 className="h-5 w-5 animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <span className="opacity-0">{actionText}</span>
              </div>
            ) : (
              actionText
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogDefault>
  );
}

export {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
};
