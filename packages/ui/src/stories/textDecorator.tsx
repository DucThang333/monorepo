import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type TextDecoratorProps = {
  text?: string;
  textColor?: string;
  textFontFamily?: string[];
  textFontWeight?: string;
  textSizes?: string[];
  is_italic?: boolean;
};

export const TextDecorator = (props: TextDecoratorProps) => {
  const style = document.documentElement.style;
  const {
    textColor,
    text,
    textFontFamily,
    textFontWeight,
    textSizes,
    is_italic,
  } = props;
  console.log("textSizes: ", textSizes);
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-2",
        (textFontFamily?.length ?? 0) > 1
          ? (textFontFamily?.length ?? 0) > 2
            ? "grid-cols-3"
            : "grid-cols-2"
          : "grid-cols-1",
        textFontWeight
      )}
      style={{
        color: textColor,
      }}
    >
      {textFontFamily?.map((fontFamily) => (
        <div className="border border-gray-300 rounded-md p-2" key={fontFamily}>
          <p className="underline font-semibold">{fontFamily}</p>
          {textSizes?.map((size) => (
            <div
              key={size}
              className={cn(
                "flex items-center justify-between ",
                is_italic ? "italic" : "",
                size,
                fontFamily,
                textFontWeight
              )}
            >
              <span className={size}>{text}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
