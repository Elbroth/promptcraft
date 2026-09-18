"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Start free. Upgrade when you need more."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div
                className={cn(
                  "relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300",
                  plan.popular
                    ? "border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-orange-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1 text-xs font-semibold text-black">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    {"period" in plan && plan.period && (
                      <span className="text-white/40">{(plan as { period?: string }).period}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-white/60">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link href="/waitlist">{plan.cta}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}