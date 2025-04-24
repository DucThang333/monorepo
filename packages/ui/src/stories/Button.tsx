import React from "react";
import { Button as OriginalButton, ButtonProps } from "@/components/Button";

/** Primary UI component for user interaction */
export type ButtonComponentProps = ButtonProps;

export const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <OriginalButton {...props}>
      <div dangerouslySetInnerHTML={{ __html: props.children as string }}></div>
    </OriginalButton>
  );
};

// Re-export Button to fix stories that import from './Button'
export const Button = ButtonComponent;
