"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-amber-400">
          {eyebrow}
        </span>
      )}
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-white/60">
          {description}
        </p>
      )}
    </motion.div>
  );
}
