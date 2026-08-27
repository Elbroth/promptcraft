"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientText({
  children,
  className,
  gradient = "from-amber-400 via-orange-400 to-amber-500",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradient,
        className
      )}
    >
      {children}
    </span>
  );
}
