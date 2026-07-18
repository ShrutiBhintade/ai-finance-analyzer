"use client";

import { useState } from "react";
import { useTransactions } from "@/context/TransactionsContext";
import ReactMarkdown from "react-markdown";

export default function AIReport() {
  const { transactions } = useTransactions();

  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateReport() {
    setLoading(true);

    try {
      const response = await fetch("/api/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transactions,
        }),
      });

      const data = await response.json();

      setReport(data.report);
    } catch (error) {
      console.error(error);

      setReport(
        "❌ Failed to generate AI Report. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">

      <div className="rounded-2xl border bg-card p-8 shadow-md">

        <h1 className="text-4xl font-bold">
          📄 AI Financial Report
        </h1>

        <p className="mt-3 text-muted-foreground">
          Generate a complete AI-powered financial analysis based on
          your uploaded transactions.
        </p>

        <button
          onClick={generateReport}
          disabled={loading}
          className="
            mt-6
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            disabled:opacity-50
          "
        >
          {loading
            ? "Generating Report..."
            : "✨ Generate AI Report"}
        </button>

      </div>

      {(loading || report) && (
        <div className="rounded-2xl border bg-card p-8 shadow-md">

          {loading ? (
            <div className="space-y-4">

              <div className="h-6 w-64 animate-pulse rounded bg-muted"></div>

              <div className="h-4 w-full animate-pulse rounded bg-muted"></div>

              <div className="h-4 w-5/6 animate-pulse rounded bg-muted"></div>

              <div className="h-4 w-4/6 animate-pulse rounded bg-muted"></div>

            </div>
          ) : (
            <article
              className="
                prose
                prose-invert
                max-w-none
                prose-headings:text-white
                prose-strong:text-blue-400
                prose-li:marker:text-blue-500
              "
            >
              <ReactMarkdown>
                {report}
              </ReactMarkdown>
            </article>
          )}

        </div>
      )}

    </div>
  );
}