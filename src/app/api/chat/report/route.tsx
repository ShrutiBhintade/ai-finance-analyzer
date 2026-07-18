import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { transactions } = await req.json();

    if (!transactions || transactions.length === 0) {
      return NextResponse.json({
        report: "No transaction data found. Please upload a CSV first.",
      });
    }

    const prompt = `
You are an expert AI Financial Advisor.

Analyze the following financial transactions and generate a professional financial report.

Transactions:
${JSON.stringify(transactions, null, 2)}

Generate the report using EXACTLY this Markdown structure.

# 📊 AI Financial Report

## 💰 Financial Summary

- Total Income
- Total Expenses
- Net Balance
- Savings Rate

## 📈 Spending Analysis

- Highest spending category
- Spending breakdown
- Spending behaviour

## ⚠ Risk Analysis

Mention any:
- Overspending
- Unusual expenses
- Budget concerns
- Financial risks

## 💡 AI Recommendations

Provide 5 personalized recommendations.

## ⭐ Financial Health Score

Give a score out of 100 and explain why.

Keep the report professional, concise and under 400 words.

Use Markdown formatting.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
    });

    return NextResponse.json({
      report:
        response.text ??
        "Gemini returned an empty report.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      report:
        "❌ Failed to generate AI Financial Report. Please try again.",
    });
  }
}