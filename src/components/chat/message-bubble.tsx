"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/shared/copy-button";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export function MessageBubble({ role, content, isStreaming }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("flex gap-3", isUser ? "justify-end" : "justify-start")}
    >
      {!isUser && (
        <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
          <Bot className="h-4 w-4 text-black" />
        </div>
      )}

      <div
        className={cn(
          "group relative max-w-[80%] rounded-2xl px-4 py-3",
          isUser
            ? "bg-amber-500/20 border border-amber-500/30 text-white"
            : "bg-white/5 border border-white/10 text-white/90"
        )}
      >
        {/* Content */}
        <div className="prose prose-invert prose-sm max-w-none">
          {content.split("\n").map((line, i) => {
            // Handle code blocks
            if (line.startsWith("```")) {
              return null; // Skip code fence markers for basic rendering
            }
            // Handle headers
            if (line.startsWith("## ")) {
              return (
                <h3 key={i} className="text-base font-semibold mt-3 mb-1 text-white">
                  {line.replace("## ", "")}
                </h3>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h4 key={i} className="text-sm font-semibold mt-2 mb-1 text-white/90">
                  {line.replace("### ", "")}
                </h4>
              );
            }
            // Handle list items
            if (line.startsWith("- ")) {
              return (
                <div key={i} className="flex gap-2 text-sm">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>{line.replace("- ", "")}</span>
                </div>
              );
            }
            if (/^\d+\.\s/.test(line)) {
              return (
                <div key={i} className="flex gap-2 text-sm">
                  <span className="text-amber-400 font-mono text-xs mt-0.5">{line.match(/^\d+/)?.[0]}.</span>
                  <span>{line.replace(/^\d+\.\s/, "")}</span>
                </div>
              );
            }
            // Handle bold
            const boldRegex = /\*\*(.*?)\*\*/g;
            if (boldRegex.test(line)) {
              const parts = line.split(boldRegex);
              return (
                <p key={i} className="text-sm leading-relaxed">
                  {parts.map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="font-semibold text-white">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            }
            // Regular lines
            if (line.trim() === "") return <br key={i} />;
            return (
              <p key={i} className="text-sm leading-relaxed">
                {line}
                {isStreaming && i === content.split("\n").length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-amber-400 ml-0.5 align-middle"
                  />
                )}
              </p>
            );
          })}
        </div>

        {/* Copy Button for assistant messages */}
        {!isUser && !isStreaming && (
          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <CopyButton text={content} />
          </div>
        )}
      </div>

      {isUser && (
        <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
          <User className="h-4 w-4 text-white/60" />
        </div>
      )}
    </motion.div>
  );
}