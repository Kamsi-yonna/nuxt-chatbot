export default defineEventHandler(async (event) => {
  interface ChatMessage {
    id?: number;
    actor: "AI" | "Human";
    message: string;
  }

  // console.log("API endpoint reached");
  const config = useRuntimeConfig();

  try {
    const incomingMessages = (await readBody(event)) as ChatMessage[];
    console.log("Received messages:", incomingMessages);

    const prompt =
      incomingMessages
        .map((message: ChatMessage) => `${message.actor}: ${message.message}`)
        .join("\n") + "\nAI:";

    console.log("Generated prompt:", prompt);

    const req = await fetch("https://api.together.xyz/inference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.TOGETHER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-ai/DeepSeek-V3",
        prompt: prompt,
        max_tokens: 300,
        temperature: 0.7,
        top_p: 0.02,
        repetition_penalty: 1,
        stop: ["Human:", "AI:"],
      }),
    });

    const res = await req.json();
    console.log("Raw API response:", res);

    if (!req.ok) {
      console.error("Together API error:", res);
      throw createError({
        statusCode: req.status,
        message: res.message || "Together API error",
      });
    }

    const text =
      res.output?.text ||
      res.text ||
      (Array.isArray(res.choices) && res.choices[0]?.text);

    if (!text) {
      console.error("Unexpected API response structure:", res);
      throw createError({
        statusCode: 500,
        message: "Could not extract text from API response",
      });
    }

    return {
      message: text.trim(),
    };
  } catch (error) {
    console.error("Server error:", error);
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
});
