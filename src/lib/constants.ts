export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/prompt", label: "Try PromptCraft" },
  { href: "/examples", label: "Examples" },
  { href: "/about", label: "About" },
  { href: "/waitlist", label: "Join Waitlist" },
] as const;

export const USE_CASES = [
  {
    title: "Medical Education Tutor",
    description: "AI-powered medical study assistant that adapts to your learning style and knowledge gaps.",
    icon: "Stethoscope",
    category: "Education",
  },
  {
    title: "Betting Advisor Bot",
    description: "Data-driven betting analysis with risk assessment and strategic recommendations.",
    icon: "TrendingUp",
    category: "Finance",
  },
  {
    title: "Discord Server Architect",
    description: "Complete Discord server setup with roles, channels, bots, and community guidelines.",
    icon: "MessageSquare",
    category: "Community",
  },
  {
    title: "Exam Question Generator",
    description: "Creates exam-style questions with varying difficulty and detailed explanations.",
    icon: "FileText",
    category: "Education",
  },
  {
    title: "Relationship Counselor",
    description: "Empathetic AI counselor for communication advice and relationship guidance.",
    icon: "Heart",
    category: "Personal",
  },
  {
    title: "Coding Assistant",
    description: "Expert-level coding help with architecture decisions, debugging, and code review.",
    icon: "Code",
    category: "Technical",
  },
] as const;

export const FEATURES = [
  {
    title: "Discovery-First Approach",
    description: "We interview before we build. Every prompt starts with understanding your exact needs, context, and goals.",
    icon: "Search",
  },
  {
    title: "Multi-Platform Support",
    description: "ChatGPT, Claude, Gemini, Grok, Midjourney, Stable Diffusion — we craft prompts for any AI platform.",
    icon: "Layers",
  },
  {
    title: "Domain Specialization",
    description: "Medical, legal, creative, technical, educational, marketing — deep expertise across every field.",
    icon: "Brain",
  },
  {
    title: "Variations & Alternatives",
    description: "Every prompt delivery includes variations and alternatives for different approaches and edge cases.",
    icon: "GitBranch",
  },
  {
    title: "Edge Case Stress-Testing",
    description: "We test prompts against edge cases and failure modes before delivery. No surprises.",
    icon: "Shield",
  },
  {
    title: "Full Decision Transparency",
    description: "Every choice explained. You understand why each instruction exists and how to modify it.",
    icon: "BookOpen",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    content: "PromptCraft transformed our AI chatbot from a generic responder into a precise, context-aware assistant. The discovery process alone was worth it — they asked questions we hadn't even considered.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Medical Researcher",
    content: "I needed prompts for medical literature analysis. PromptCraft delivered prompts that consistently extract structured data from complex research papers. Game-changer for my workflow.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Content Creator",
    content: "The prompts I got weren't just good — they were exceptional. Each one came with variations and explanations. I learned more about prompt engineering from one delivery than months of trial and error.",
    rating: 5,
  },
] as const;

export const EXAMPLE_PROMPTS = [
  {
    title: "Medical Education Tutor",
    category: "Education & Study",
    platform: "ChatGPT / Claude",
    description: "Adaptive medical study assistant that identifies knowledge gaps and creates personalized learning paths.",
    preview: `You are MedTutor, an expert medical education assistant with 20 years of clinical teaching experience.

## Core Behavior
- Assess the student's current knowledge level through diagnostic questions
- Adapt explanation complexity based on their responses
- Use clinical scenarios to illustrate concepts
- Reference current medical guidelines (AMA, WHO) when applicable

## Discovery Phase
Before teaching any topic, ask:
1. What's your current level? (Pre-med, Med student, Resident, Practicing)
2. What's your learning goal? (Exam prep, Concept review, Clinical application)
3. How do you learn best? (Visual, Case-based, Step-by-step, Comparative)

## Teaching Method
- Start with the "why" before the "what"
- Use real clinical scenarios with patient presentations
- Include differential diagnosis thinking
- End each topic with 3 practice questions at varying difficulty`,
  },
  {
    title: "Discord Server Architect",
    category: "Community & Social",
    platform: "ChatGPT / Claude",
    description: "Complete Discord server design with roles, channels, bots, and community management strategy.",
    preview: `You are DiscordArchitect, a community design specialist who has built 500+ thriving Discord servers.

## Discovery Questions
Ask these before designing anything:
1. What's the server's purpose? (Gaming, Brand, Education, Creator community)
2. Target audience size? (Small <50, Medium 50-500, Large 500+)
3. Monetization plans? (Free, Nitro boosts, Premium roles)
4. Moderation style? (Lax, Moderate, Strict)
5. Existing brand guidelines?

## Output Format
Deliver a complete server blueprint:
- Channel structure with descriptions and permissions
- Role hierarchy with color codes and permission sets
- Bot recommendations with specific configurations
- Welcome flow and onboarding sequence
- Moderation rules and auto-mod settings
- Growth strategy and engagement tactics`,
  },
  {
    title: "Coding Assistant",
    category: "Technical & Development",
    platform: "Claude / ChatGPT",
    description: "Expert-level coding assistant with architecture decisions, debugging, and code review capabilities.",
    preview: `You are CodeCraft, a senior software engineer with expertise across multiple languages and frameworks.

## Behavior Rules
- Always ask about the tech stack before suggesting solutions
- Provide working code, not pseudocode
- Include error handling in every code example
- Explain trade-offs when multiple approaches exist
- Reference official documentation when applicable

## Code Review Mode
When reviewing code, check for:
1. Security vulnerabilities (OWASP Top 10)
2. Performance bottlenecks
3. Code smell and maintainability
4. Test coverage gaps
5. Accessibility issues (for frontend)

## Response Format
- Problem analysis (1-2 sentences)
- Solution with complete, runnable code
- Explanation of key decisions
- Alternative approaches with trade-offs
- Testing suggestions`,
  },
] as const;

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying PromptCraft",
    features: [
      "1 prompt request",
      "Standard delivery (48h)",
      "Basic discovery questions",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For power users and professionals",
    features: [
      "Unlimited prompt requests",
      "Priority delivery (24h)",
      "Full discovery interview",
      "Prompt variations included",
      "Edge case testing",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Custom prompt frameworks",
      "Team collaboration tools",
      "API access",
      "Dedicated prompt engineer",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
] as const;

export const EXAMPLE_CATEGORIES = [
  "All",
  "Education & Study",
  "Business & Automation",
  "Creative & Content",
  "Technical & Development",
  "Personal & Lifestyle",
  "Medical & Healthcare",
] as const;

export const GALLERY_ITEMS = [
  {
    title: "SAT Exam Prep Tutor",
    category: "Education & Study",
    platform: "ChatGPT",
    description: "Adaptive SAT preparation with personalized practice questions and strategy coaching.",
    fullPrompt: `You are SATMaster, an expert SAT preparation tutor...`,
  },
  {
    title: "E-commerce Product Descriptions",
    category: "Business & Automation",
    platform: "Claude",
    description: "Generates compelling, SEO-optimized product descriptions that convert browsers to buyers.",
    fullPrompt: `You are CopyCraft, a conversion-focused e-commerce copywriter...`,
  },
  {
    title: "Fantasy World Builder",
    category: "Creative & Content",
    platform: "ChatGPT",
    description: "Creates rich, consistent fantasy worlds with detailed lore, geography, and character backgrounds.",
    fullPrompt: `You are WorldForge, a master worldbuilder and storyteller...`,
  },
  {
    title: "API Documentation Writer",
    category: "Technical & Development",
    platform: "Claude",
    description: "Transforms code into clear, comprehensive API documentation with examples and error handling.",
    fullPrompt: `You are DocCraft, a technical documentation specialist...`,
  },
  {
    title: "Fitness & Nutrition Planner",
    category: "Personal & Lifestyle",
    platform: "ChatGPT",
    description: "Personalized workout and meal plans based on goals, preferences, and medical considerations.",
    fullPrompt: `You are FitCoach, a certified fitness and nutrition expert...`,
  },
  {
    title: "Clinical Case Analyzer",
    category: "Medical & Healthcare",
    platform: "Claude",
    description: "Analyzes clinical presentations with differential diagnoses and evidence-based recommendations.",
    fullPrompt: `You are ClinCase, a clinical reasoning assistant...`,
  },
  {
    title: "Social Media Content Calendar",
    category: "Business & Automation",
    platform: "ChatGPT",
    description: "Creates strategic content calendars with platform-specific posts, hashtags, and engagement tactics.",
    fullPrompt: `You are SocialStrategist, a social media marketing expert...`,
  },
  {
    title: "Research Paper Summarizer",
    category: "Education & Study",
    platform: "Claude",
    description: "Distills complex research papers into clear summaries with key findings and methodology analysis.",
    fullPrompt: `You are ResearchBot, an academic research specialist...`,
  },
  {
    title: "Brand Voice Guide Creator",
    category: "Creative & Content",
    platform: "ChatGPT",
    description: "Develops comprehensive brand voice guidelines with tone, vocabulary, and messaging frameworks.",
    fullPrompt: `You are BrandVoice, a brand strategy consultant...`,
  },
] as const;
