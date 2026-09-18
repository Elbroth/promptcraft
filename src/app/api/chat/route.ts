import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      // Return a mock response if no API key is configured
      const mockResponse = getMockResponse(messages[messages.length - 1]?.content || "");
      return new NextResponse(
        generateMockStream(mockResponse),
        {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive",
          },
        }
      );
    }

    // Use Anthropic API with streaming
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4000,
        stream: true,
        messages: messages.filter((m: { role: string }) => m.role !== "system"),
        system: messages.find((m: { role: string }) => m.role === "system")?.content,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Anthropic API error:", error);
      throw new Error("API request failed");
    }

    // Transform Anthropic stream to OpenAI-compatible format
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        if (!reader) {
          controller.close();
          return;
        }

        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6).trim();
                if (data === "[DONE]") continue;

                try {
                  const parsed = JSON.parse(data);
                  if (parsed.type === "content_block_delta" && parsed.delta?.text) {
                    const chunk = JSON.stringify({
                      choices: [{ delta: { content: parsed.delta.text } }],
                    });
                    controller.enqueue(`data: ${chunk}\n\n`);
                  }
                } catch {
                  // Skip invalid JSON
                }
              }
            }
          }

          controller.enqueue("data: [DONE]\n\n");
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function getMockResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();

  if (lower.includes("medical") || lower.includes("health")) {
    return `Great choice! Medical prompts require precision and safety considerations. Let me ask a few questions:

## Discovery Questions

1. **What's the specific use case?** (e.g., patient education, clinical decision support, medical study, documentation)
2. **Who's the target audience?** (patients, students, healthcare professionals)
3. **Which AI platform?** (ChatGPT, Claude, Gemini — each has different strengths for medical content)
4. **Any compliance requirements?** (HIPAA considerations, disclaimer needs)

Once I understand your needs, I'll build a production-ready prompt with:
- Clear medical context and safety guardrails
- Structured output format
- Edge case handling
- Appropriate disclaimers

What's your specific goal?`;
  }

  if (lower.includes("code") || lower.includes("developer") || lower.includes("programming")) {
    return `Excellent — coding prompts are one of my specialties. Let me gather some context:

## Discovery Questions

1. **What's the primary function?** (code generation, debugging, code review, architecture decisions, documentation)
2. **What languages/frameworks?** (TypeScript, Python, React, etc.)
3. **Target AI platform?** (Claude excels at code, ChatGPT is also strong)
4. **Any specific patterns or standards?** (clean code, specific style guides, company conventions)

I'll build a prompt that:
- Understands your tech stack deeply
- Produces production-quality code
- Includes error handling and edge cases
- Follows best practices for your stack

Tell me more about what you're building.`;
  }

  return `I'd love to help build that! To create something exceptional, I need to understand your needs better.

## Discovery Questions

1. **What's your primary goal?** What should this prompt accomplish?
2. **Who's the audience?** Who will be using the output?
3. **Which AI platform?** ChatGPT, Claude, Gemini, or others?
4. **Any specific requirements?** Format, tone, constraints?

The more context you give me, the better the prompt. I don't build generic templates — I build precision instruments tailored to your exact needs.

What are you looking to create?`;
}

function generateMockStream(text: string): ReadableStream {
  const encoder = new TextEncoder();
  const words = text.split(" ");

  return new ReadableStream({
    async start(controller) {
      for (let i = 0; i < words.length; i++) {
        const chunk = JSON.stringify({
          choices: [{ delta: { content: (i === 0 ? "" : " ") + words[i] } }],
        });
        controller.enqueue(encoder.encode(`data: ${chunk}\n\n`));
        await new Promise((resolve) => setTimeout(resolve, 30));
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });
}