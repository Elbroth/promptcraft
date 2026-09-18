"use client";

import { motion } from "framer-motion";
import {
  Search,
  Wrench,
  Rocket,
  Target,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";

const values = [
  {
    icon: Search,
    title: "Discovery Before Building",
    description:
      "We never assume. Every prompt starts with deep discovery — understanding your exact needs, context, constraints, and goals. The questions we ask are as important as the prompts we build.",
  },
  {
    icon: Wrench,
    title: "Depth Over Brevity",
    description:
      "A prompt isn't a sentence — it's an architecture. We build prompts with structure, context, guardrails, and nuance. Depth is what separates a working prompt from an exceptional one.",
  },
  {
    icon: Target,
    title: "Specificity Always",
    description:
      "Generic prompts produce generic results. Every instruction we write is specific, intentional, and tested. We optimize for your exact use case, not a one-size-fits-all template.",
  },
];

const phases = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Discovery",
    description:
      "We ask the right questions. What's your goal? Who's the audience? What platform? What constraints? This phase alone often reveals insights you hadn't considered.",
  },
  {
    icon: Wrench,
    phase: "Phase 2",
    title: "Construction",
    description:
      "We build your prompt with precision. System instructions, context windows, output formats, edge case handling — every element is crafted and tested.",
  },
  {
    icon: Rocket,
    phase: "Phase 3",
    title: "Delivery",
    description:
      "You receive a production-ready prompt with full documentation. Every decision explained, variations included, and edge cases covered. Ready to use immediately.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-amber-400">
            About PromptCraft
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            We build prompts that{" "}
            <GradientText>actually work</GradientText>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/60 leading-relaxed">
            PromptCraft isn't a generic AI tool. It's a consultative, high-craft
            service that builds production-ready prompts for any use case, any AI
            platform, and any audience. We don't guess — we discover, build, and
            deliver prompts that exceed expectations.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-32 rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/5 to-orange-500/5 p-12 md:p-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <Lightbulb className="mx-auto mb-6 h-12 w-12 text-amber-400" />
            <h2 className="mb-6 text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Make AI actually work for people. Not in theory — in practice. We
              believe that the difference between a mediocre AI interaction and an
              exceptional one comes down to the prompt. And most people don't have
              the time, expertise, or patience to craft prompts that truly work.
              That's where we come in.
            </p>
          </div>
        </motion.section>

        {/* Philosophy */}
        <section className="mb-32">
          <SectionHeader
            eyebrow="Philosophy"
            title="How we think about prompts"
            description="Three principles that guide every prompt we build."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <value.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-32">
          <SectionHeader
            eyebrow="The Process"
            title="Three phases to exceptional prompts"
            description="Every prompt goes through our rigorous 3-phase process."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Connector */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(100%+0.5rem)] w-4 h-px bg-gradient-to-r from-amber-500/50 to-transparent" />
                )}

                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30">
                  {/* Phase Badge */}
                  <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-bold text-black">
                    {phase.phase}
                  </div>

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <phase.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {phase.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team / Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-12 md:p-16"
        >
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Users className="h-8 w-8 text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Built by prompt engineers
                </h2>
                <p className="text-white/40">For people who need AI to work</p>
              </div>
            </div>

            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                PromptCraft started with a simple observation: most people use AI
                at 10% of its capability. Not because the AI is limited — but
                because the prompts are.
              </p>
              <p>
                We've spent thousands of hours studying how AI models interpret
                instructions, how context affects output quality, and how small
                changes in prompt structure can dramatically change results. This
                isn't guesswork — it's engineering.
              </p>
              <p>
                Every prompt we build is the result of deep discovery, careful
                construction, and rigorous testing. We don't just write prompts —
                we architect them.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}