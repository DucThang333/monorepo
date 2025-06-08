import {
  Button as ButtonDefault,
  ButtonProps as ButtonPropsDefault,
} from "../inits/button";
import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
export type ButtonProps = ButtonPropsDefault & {
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
};

export function Button(props: ButtonProps) {
  const { isLoading, children, disabled, ...rest } = props;
  return (
    <ButtonDefault
      disabled={disabled || isLoading}
      {...rest}
      className={cn("cursor-pointer", rest.className)}
    >
      {isLoading ? (
        <div className="relative">
          <Loader2 className="h-5 w-5 animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          {children}
        </div>
      ) : (
        children
      )}
    </ButtonDefault>
  );
}
