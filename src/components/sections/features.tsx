"use client";

import { motion } from "framer-motion";
import {
  Search,
  Layers,
  Brain,
  GitBranch,
  Shield,
  BookOpen,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Layers,
  Brain,
  GitBranch,
  Shield,
  BookOpen,
};

export function Features() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why PromptCraft"
          title="Not just prompts — precision instruments"
          description="Every prompt is built with intention, tested against edge cases, and delivered with full transparency."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30">
                  {/* Icon */}
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    {Icon && <Icon className="h-6 w-6 text-amber-400" />}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}