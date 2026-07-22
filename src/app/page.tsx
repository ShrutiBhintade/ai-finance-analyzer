import Link from "next/link";
import { Brain, Bot, TrendingUp, Shield, Target, FileText, Sparkles, Upload, Lightbulb, Flag, Cpu } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-blue-600">
          FinPilot AI
        </h1>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="rounded-lg border border-gray-300 px-5 py-2 font-medium hover:bg-gray-100 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Your Autonomous Financial Co-Pilot
        </span>

        <h2 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Your Financial Future,
          <br />
          Piloted by AI
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Upload transactions, receive personalized financial coaching, predict
          future expenses, detect financial risks, and achieve your goals with
          Gemini-powered intelligence.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/signup"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-gray-300 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl gap-6 px-8 pb-20 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition-shadow">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Brain className="h-6 w-6" />
          </div>
          <h3 className="mb-3 text-xl font-bold">
            Smart Financial Intelligence
          </h3>
          <p className="text-gray-600">
            Analyze spending patterns and uncover hidden financial trends using AI.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition-shadow">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
            <Bot className="h-6 w-6" />
          </div>
          <h3 className="mb-3 text-xl font-bold">
            AI Financial Coach
          </h3>
          <p className="text-gray-600">
            Receive personalized recommendations and actionable savings strategies.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition-shadow">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
            <TrendingUp className="h-6 w-6" />
          </div>
          <h3 className="mb-3 text-xl font-bold">
            Predictive Planning
          </h3>
          <p className="text-gray-600">
            Forecast future expenses, savings, and financial risks before they happen.
          </p>
        </div>
      </section>

      {/* Why FinPilot AI */}
      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Why FinPilot AI?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Powered by Google's Gemini AI, FinPilot analyzes your financial behavior, predicts future spending trends, identifies financial risks, and helps you achieve your goals through personalized financial coaching.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition-shadow border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              AI Financial Coach
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Personalized financial guidance tailored to your spending habits.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition-shadow border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Expense Forecasting
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Predict future expenses and prepare for upcoming financial needs.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition-shadow border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Risk Detection
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Identify unusual spending patterns and financial risks early.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition-shadow border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Goal Planning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create and track savings goals with AI-powered recommendations.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition-shadow border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              AI Reports
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Generate detailed financial reports and monthly summaries.
            </p>
          </div>
        </div>
      </section>

      {/* How FinPilot AI Works */}
      <section className="mx-auto max-w-7xl px-8 py-20 bg-white/50 dark:bg-gray-900/50 rounded-3xl mx-8 my-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            How FinPilot AI Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            From upload to insights in minutes — powered by Gemini AI
          </p>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {/* Step 1: Upload */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                <div className="relative">
                  <Upload className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                  <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                    1
                  </span>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Upload Transactions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Securely upload your bank statements or CSV files. We support all major formats.
              </p>
            </div>

            {/* Step 2: AI Analysis */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/30">
                <div className="relative">
                  <Cpu className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold">
                    2
                  </span>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                AI Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gemini AI categorizes transactions, detects patterns, and identifies anomalies automatically.
              </p>
            </div>

            {/* Step 3: Smart Insights */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/30">
                <div className="relative">
                  <Lightbulb className="h-12 w-12 text-green-600 dark:text-green-400" />
                  <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white text-sm font-bold">
                    3
                  </span>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Smart Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get personalized financial coaching, spending analysis, and risk assessments instantly.
              </p>
            </div>

            {/* Step 4: Achieve Goals */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-900/30">
                <div className="relative">
                  <Flag className="h-12 w-12 text-orange-600 dark:text-orange-400" />
                  <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold">
                    4
                  </span>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Achieve Goals
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track progress, forecast savings, and reach financial milestones with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}