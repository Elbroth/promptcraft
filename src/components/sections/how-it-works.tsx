"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Zap } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

const steps = [
  {
    icon: MessageSquare,
    title: "Describe Your Goal",
    description: "Tell us what you want to achieve with AI. Be as specific or as vague as you want — we'll figure out the rest.",
    step: "01",
  },
  {
    icon: Search,
    title: "We Ask the Right Questions",
    description: "Our discovery process uncovers requirements you didn't know you had. Context, constraints, edge cases — we cover it all.",
    step: "02",
  },
  {
    icon: Zap,
    title: "Receive Your Perfect Prompt",
    description: "Get a production-ready prompt with variations, explanations, and stress-testing. Ready to use immediately.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="How It Works"
          title="Three steps to exceptional prompts"
          description="Our process is designed to extract maximum value from every interaction."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%+0.5rem)] w-4 h-px bg-gradient-to-r from-amber-500/50 to-transparent" />
              )}

              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-white/10">
                {/* Step Number */}
                <div className="absolute top-4 right-6 text-6xl font-bold text-white/5 pointer-events-none select-none">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                  <step.icon className="h-7 w-7 text-amber-400" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-white/60">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
