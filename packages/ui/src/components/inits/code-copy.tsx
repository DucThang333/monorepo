"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/button";
import React from "react";

interface Props {
  content: string;
  className?: string;
}

const CodeCopy = ({ content, className }: Props) => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = async () => {
    try {
      setIsCopy(true);
      await navigator.clipboard.writeText(content);
    } catch (error) {
      setIsCopy(false);
    }
  };

  useEffect(() => {
    if (isCopy) setTimeout(() => setIsCopy(false), 1000);
  }, [isCopy]);

  return (
    <Button
      size="icon"
      variant="secondary"
      onClick={handleCopy}
      className={cn("w-8 h-8 ", className)}
    >
      {isCopy ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </Button>
  );
};

export default CodeCopy;
