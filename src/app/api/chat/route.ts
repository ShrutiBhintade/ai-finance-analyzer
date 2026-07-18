import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { question, transactions } = await req.json();

    if (!question) {
      return NextResponse.json(
        { answer: "Please ask a question." },
        { status: 400 }
      );
    }

    const prompt = `
You are an AI Personal Finance Assistant.

Below is the user's financial transaction data.

${JSON.stringify(transactions, null, 2)}

The user asks:

"${question}"

Instructions:
- Answer ONLY from the provided transaction data.
- If asked about income, expenses, balance, savings or spending, calculate from the data.
- If asked for advice, give 3 practical financial suggestions based on the data.
- Do not invent information.
- Keep answers under 150 words.
- Use ₹ when mentioning money.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
    });

    console.log("===== GEMINI RESPONSE =====");
    console.dir(response, { depth: null });
    console.log("===========================");

    return NextResponse.json({
      answer: response.text ?? "Gemini returned an empty response.",
    });
  } catch (error: any) {
    console.error("===== GEMINI ERROR =====");
    console.error(error);
    console.error("========================");

    return NextResponse.json({
      answer: "Gemini request failed.",
    });
  }
}