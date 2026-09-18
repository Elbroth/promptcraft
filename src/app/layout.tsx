import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PromptCraft — Elite AI Prompt Engineering",
  description:
    "Production-ready prompts for any AI platform, any use case. We don't guess — we discover, build, and deliver prompts that exceed expectations.",
  keywords: [
    "prompt engineering",
    "AI prompts",
    "ChatGPT prompts",
    "Claude prompts",
    "prompt design",
    "AI consulting",
  ],
  openGraph: {
    title: "PromptCraft — Elite AI Prompt Engineering",
    description:
      "Production-ready prompts for any AI platform, any use case.",
    type: "website",
    locale: "en_US",
    siteName: "PromptCraft",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptCraft — Elite AI Prompt Engineering",
    description:
      "Production-ready prompts for any AI platform, any use case.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}