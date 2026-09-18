"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Copy, Check, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeader } from "@/components/shared/section-header";
import { CopyButton } from "@/components/shared/copy-button";
import { EXAMPLE_CATEGORIES, GALLERY_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ExamplesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <SectionHeader
          eyebrow="Examples Gallery"
          title="Prompts that deliver results"
          description="Browse our collection of production-ready prompts across multiple categories and AI platforms."
        />

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative mx-auto max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <Input
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {EXAMPLE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  selectedCategory === category
                    ? "bg-amber-500 text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-amber-500/30">
                  {/* Header */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">
                        {item.platform}
                      </span>
                      <span className="text-xs text-white/40">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-2">
                      {item.description}
                    </p>
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
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedIndex === index && "rotate-180"
                        )}
                      />
                      View Prompt
                    </button>
                    <CopyButton text={item.fullPrompt} />
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
                        <div className="border-t border-white/10 p-6 bg-black/30">
                          <pre className="text-xs text-white/70 font-mono whitespace-pre-wrap leading-relaxed">
                            {item.fullPrompt}
                          </pre>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Filter className="mx-auto h-12 w-12 text-white/20 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              No prompts found
            </h3>
            <p className="text-white/40">
              Try adjusting your search or filter criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}