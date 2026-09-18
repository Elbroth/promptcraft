import type { Metadata } from "next";
import { ChatInterface } from "@/components/chat/chat-interface";

export const metadata: Metadata = {
  title: "Try PromptCraft — AI Prompt Engineering Consultation",
  description:
    "Start your prompt engineering consultation. Describe your goal, and PromptCraft will build a production-ready prompt for you.",
};

export default function PromptPage() {
  return <ChatInterface />;
}