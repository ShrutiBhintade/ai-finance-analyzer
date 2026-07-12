import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Personal Finance Analyzer",
  description: "Your intelligent personal finance companion — coming soon.",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-16">
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          AI Personal Finance Analyzer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Your intelligent personal finance companion — powered by AI.
        </p>
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white text-lg font-medium">
          Coming Soon
        </div>
      </div>
    </main>
  );
}