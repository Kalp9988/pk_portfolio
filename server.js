import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, systemPrompt } = req.body;

    const response = await ai.models.generateContent({
  model: "gemini-3.6-flash",
  config: {
    systemInstruction: systemPrompt,
  },
  contents: message,
});

    res.json({
      reply: response.text,
    });
  } catch (err) {
    console.error("========== GEMINI ERROR ==========");
    console.error(err);
    console.error("=================================");

    res.status(500).json({
      error: err.message || String(err),
    });
  }
});

const server = app.listen(3001, () => {
  console.log("API running on http://localhost:3001");
});

server.on("error", (err) => {
  console.error(err);
});