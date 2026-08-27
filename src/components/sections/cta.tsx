"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/gradient-text";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20">
            <Sparkles className="h-8 w-8 text-amber-400" />
          </div>

          {/* Headline */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to build prompts that{" "}
            <GradientText>actually work</GradientText>?
          </h2>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60">
            Stop wasting time with mediocre prompts. Let PromptCraft build
            something exceptional for you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="xl" asChild>
              <Link href="/prompt">
                Start Your Prompt
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/waitlist">Join the Waitlist</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}