import https from "https";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  let prompt =
    "This is a conversation with an AI assistant" +
    "The assistant is helpful, creative, clever, and very friendly. The assistant always goes into details. " +
    "The assistant provided very detailed explanations for his answers. Be very verbose. The assistant marks code with markdown. " +
    "The assistant always provides code examples when it can.\n\n";

  let messages = [
    {
      actor: "Human",
      message: "Hello, how are you.",
    },
    {
      actor: "AI",
      message: "Hey hey, how can I assist you?",
    },
  ];

  const prevMessages = await readBody(event);
  messages = messages.concat(prevMessages);

  prompt +=
    messages
      .map((message) => `${message.actor}: ${message.message}`)
      .join("\n") + "\nAI:";

  const req = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003", // Specifies which model to use for generating completions
      prompt: prompt, // The input text that you want the model to respond to
      temperature: 0.9, // Controls randomness in the output (higher values = more random)
      max_tokens: 512, // Maximum number of tokens (words and punctuation) in the generated response
      top_p: 1.0, // Controls diversity via nucleus sampling (higher values = more diverse)
      frequency_penalty: 0, // Reduces repetition of words in the output (0 = no penalty)
      presence_penalty: 0.6, // Increases the likelihood of new topics being introduced (higher values = more likely)
      stop: [" Human:", " AI:"],
    }),
  });

  const res = await req.json();
  console.log(res, "from GPT3 after I beat him");

  const result = res.choices[0];
  return {
    message: result.text,
    finish_reason: result.finish_reason,
  };
});
