"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  variant?: "words" | "characters";
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: delay,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  variant = "words",
}: AnimatedTextProps) {
  const items = variant === "words" ? text.split(" ") : text.split("");

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
      className={cn("inline-block", className)}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
        >
          {item}
          {variant === "words" && index < items.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}
