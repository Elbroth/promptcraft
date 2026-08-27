"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Copy, Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { CopyButton } from "@/components/shared/copy-button";
import { EXAMPLE_PROMPTS } from "@/lib/constants";

export function Examples() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Example Prompts"
          title="See the craft in action"
          description="Real prompts, real results. Every instruction has a purpose."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {EXAMPLE_PROMPTS.map((prompt, index) => (
            <motion.div
              key={prompt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-amber-500/30">
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">
                      {prompt.platform}
                    </span>
                    <span className="text-xs text-white/40">{prompt.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {prompt.title}
                  </h3>
                  <p className="text-sm text-white/60">{prompt.description}</p>
                </div>

                {/* Code Preview */}
                <div className="border-t border-white/10">
                  <div className="relative">
                    <pre className="p-6 text-xs text-white/70 font-mono overflow-hidden max-h-48">
                      {prompt.preview}
                    </pre>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Expand / Copy */}
                  <div className="flex items-center justify-between border-t border-white/10 px-6 py-3">
                    <button
                      onClick={() =>
                        setExpandedIndex(
                          expandedIndex === index ? null : index
                        )
                      }
                      className="flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      />
                      {expandedIndex === index ? "Collapse" : "View Full"}
                    </button>
                    <CopyButton text={prompt.preview} />
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 p-6">
                        <pre className="text-xs text-white/70 font-mono whitespace-pre-wrap">
                          {prompt.preview}
                        </pre>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}