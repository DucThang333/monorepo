import React from "react";
import { Button, ButtonProps } from "../components/Button";

/** Primary UI component for user interaction */
export type ButtonComponentProps = ButtonProps;

export const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <Button {...props}>
      <div dangerouslySetInnerHTML={{ __html: props.children as string }}></div>
    </Button>
  );
};
