"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { GradientText } from "@/components/shared/gradient-text";

const useCaseOptions = [
  { value: "", label: "Select your use case" },
  { value: "personal", label: "Personal" },
  { value: "business", label: "Business" },
  { value: "education", label: "Education" },
  { value: "creative", label: "Creative" },
  { value: "technical", label: "Technical" },
  { value: "other", label: "Other" },
];

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    use_case: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate
    if (!formData.name || !formData.email || !formData.use_case || !formData.description) {
      setError("All fields are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="mx-auto max-w-2xl px-6">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-20"
            >
              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20">
                <CheckCircle className="h-10 w-10 text-emerald-400" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white">
                You&apos;re on the list!
              </h2>
              <p className="mb-8 text-lg text-white/60">
                Thank you for your interest in PromptCraft. We&apos;ll be in touch
                soon with next steps.
              </p>
              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="mb-12 text-center">
                <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-amber-400">
                  Join the Waitlist
                </span>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Get early access to{" "}
                  <GradientText>PromptCraft</GradientText>
                </h1>
                <p className="mx-auto max-w-xl text-lg text-white/60">
                  Tell us about your needs and we&apos;ll prioritize your access.
                  Early members get exclusive benefits.
                </p>
              </div>

              {/* Form */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Use Case */}
                  <div>
                    <label
                      htmlFor="use_case"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Use Case
                    </label>
                    <Select
                      id="use_case"
                      options={useCaseOptions}
                      value={formData.use_case}
                      onChange={(e) =>
                        setFormData({ ...formData, use_case: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      What do you want to build?
                    </label>
                    <Textarea
                      id="description"
                      placeholder="Describe the prompts or AI applications you're interested in..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      disabled={isSubmitting}
                      rows={4}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400"
                    >
                      {error}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Join the Waitlist
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Trust Signals */}
              <div className="mt-8 text-center">
                <p className="text-sm text-white/40">
                  No spam. No sharing your data. Just early access to exceptional
                  prompts.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}