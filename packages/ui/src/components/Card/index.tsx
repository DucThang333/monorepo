import {
  Card as CardBase,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/inits/card";
import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "ghost";
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  className,
  children,
  ...props
}: CardProps) {
  const variantClasses = {
    default: "bg-card shadow-sm",
    bordered: "border bg-background",
    ghost: "border-none bg-transparent shadow-none",
  };

  return (
    <CardBase className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </CardBase>
  );
}

export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
