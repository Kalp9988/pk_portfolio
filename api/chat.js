import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const { message, systemPrompt } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: message,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
        maxOutputTokens: 150,
      },
    });

    return res.status(200).json({
      reply: response.text,
    });
  } catch (err) {
    console.error("Gemini Error:", err);

    return res.status(500).json({
      error: err.message,
    });
  }
}