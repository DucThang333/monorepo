"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { Copy, Check } from "lucide-react";

export interface CodeCopyProps {
  code: string;
  className?: string;
  buttonClassName?: string;
  successDuration?: number;
}

export function CodeCopy({
  code,
  className,
  buttonClassName,
  successDuration = 2000,
  ...props
}: CodeCopyProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), successDuration);
  };

  return (
    <div className={cn("relative", className)} {...props}>
      <pre className="w-full overflow-auto rounded-md bg-muted p-4">
        <code className="text-sm">{code}</code>
      </pre>
      <button
        type="button"
        onClick={copyToClipboard}
        className={cn(
          "absolute right-2 top-2 rounded-md p-1 text-muted-foreground hover:bg-muted-foreground/20",
          buttonClassName
        )}
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
