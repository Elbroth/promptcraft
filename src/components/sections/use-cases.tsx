"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  TrendingUp,
  MessageSquare,
  FileText,
  Heart,
  Code,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { USE_CASES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  TrendingUp,
  MessageSquare,
  FileText,
  Heart,
  Code,
};

export function UseCases() {
  return (
    <section className="relative py-32 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Use Cases"
          title="Prompts for every need"
          description="From medical education to Discord servers — we build prompts that deliver results."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase, index) => {
            const Icon = iconMap[useCase.icon];
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-white/10"
              >
                {/* Category Badge */}
                <div className="mb-4 inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                  {useCase.category}
                </div>

                {/* Icon & Title */}
                <div className="mb-3 flex items-center gap-3">
                  {Icon && <Icon className="h-6 w-6 text-amber-400" />}
                  <h3 className="text-lg font-semibold text-white">
                    {useCase.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60">{useCase.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
