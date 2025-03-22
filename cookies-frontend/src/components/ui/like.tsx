"use client";
import { cn } from "@/utils/utils";
import { Heart } from "lucide-react";
import { useState } from "react";

interface Props {
  className?: string;
}

export function Like({ className }: Props) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked((previousState) => !previousState);
  };

  return (
    <button onClick={handleClick}>
      <Heart
        className={cn(
          "transition-colors",
          isLiked && "stroke-dahlia fill-dahlia",
          className,
        )}
      />
    </button>
  );
}
