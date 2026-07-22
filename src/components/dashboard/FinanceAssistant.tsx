"use client";

import { useState, useRef, useEffect } from "react";
import { useTransactions } from "@/context/TransactionsContext";
import ReactMarkdown from "react-markdown";

type Message = {
  sender: "user" | "ai";
  text: string;
};

export default function FinanceAssistant() {
  const { transactions } = useTransactions();

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "👋 Hello! I'm your FinPilot Copilot.\n\nAsk me anything about your uploaded financial data.",
    },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function answerQuestion() {
    if (!question.trim() || loading) return;

    const currentQuestion = question;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: currentQuestion,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: currentQuestion,
          transactions,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.answer ?? "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Sorry, something went wrong while contacting Gemini.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border bg-card shadow-sm">

      {/* Header */}

      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold">
          🤖 FinPilot Copilot
        </h2>

        <p className="text-muted-foreground mt-1">
          Ask questions about your uploaded transactions.
        </p>
      </div>

      {/* Chat */}

      <div
        ref={chatContainerRef}
        className="h-[500px] overflow-y-auto px-6 py-6 space-y-5"
      >

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-4 leading-7 ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-muted"
              }`}
            >
              <ReactMarkdown>
                {message.text}
              </ReactMarkdown>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-2xl px-5 py-4 animate-pulse">
              🤖 Gemini is thinking...
            </div>
          </div>
        )}

      </div>

      {/* Suggestions */}

      <div className="px-5 pb-4 flex flex-wrap gap-2">

        {[
          "What is my income?",
          "Where did I spend the most?",
          "Am I overspending?",
          "Give me saving tips",
          "Any suspicious transactions?",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setQuestion(item)}
            className="rounded-full border px-3 py-1 text-sm hover:bg-muted transition"
          >
            {item}
          </button>
        ))}

      </div>

      {/* Input */}

      <div className="border-t p-5">

        <div className="flex gap-3">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                answerQuestion();
              }
            }}
            placeholder="Ask about your finances..."
            className="flex-1 rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={answerQuestion}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Send"}
          </button>

        </div>

      </div>

    </div>
  );
}