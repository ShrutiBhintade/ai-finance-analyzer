"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Target, TrendingUp, Shield, AlertTriangle, Loader2 } from "lucide-react";

type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
};

const suggestedPrompts = [
  "Help me save ₹50,000",
  "Analyze my spending",
  "How can I reduce expenses?",
  "Create a monthly budget",
  "What financial risks do I have?",
];

export default function CopilotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "👋 Welcome to FinPilot Copilot!\n\nI can help you:\n• Create savings plans\n• Analyze spending habits\n• Forecast future expenses\n• Detect financial risks\n• Achieve financial goals\n\nWhat would you like to do today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: "This is a demo response. Connect Gemini API to enable real AI responses.",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const usePrompt = (prompt: string) => {
    setInput(prompt);
    handleSend();
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row p-6 lg:p-8 gap-8 max-w-7xl mx-auto w-full">
        {/* Welcome Card */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                FinPilot Copilot
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your AI-powered financial coach.
            </p>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <p className="font-medium text-gray-900 dark:text-white">I can help you:</p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-500" />
                  Create savings plans
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  Analyze spending habits
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-purple-500" />
                  Forecast future expenses
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  Detect financial risks
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-orange-500" />
                  Achieve financial goals
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Chat Interface */}
        <section className="flex-1 flex flex-col min-w-0">
          {/* Chat Header */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 mb-4 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Chat with Copilot
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Ask me anything about your finances
            </p>
          </div>

          {/* Chat History */}
          <div className="flex-1 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-4 leading-7 ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-tr-sm"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-tl-sm"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-5 py-4 rounded-tl-sm flex items-center gap-2">
                    <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
                    <span className="text-gray-600 dark:text-gray-300">FinPilot is thinking...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                Suggested prompts
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => usePrompt(prompt)}
                    disabled={loading}
                    className="rounded-full border border-gray-200 dark:border-gray-600 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition disabled:opacity-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about your finances..."
                  disabled={loading}
                  className="flex-1 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="rounded-xl bg-blue-600 px-6 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Thinking...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}