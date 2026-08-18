import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, systemPrompt } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      config: {
        systemInstruction: systemPrompt,
        maxOutputTokens: 120,
        temperature: 0.7,
      },
      contents: message,
    });

    res.status(200).json({
      reply: response.text,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Gemini failed",
    });
  }
}