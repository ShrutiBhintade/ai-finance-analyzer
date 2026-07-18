import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-blue-600">
          AI Finance Analyzer
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
          AI Powered Personal Finance
        </span>

        <h2 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Take Control of
          <br />
          Your Money with AI
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Upload your bank statements, analyze your spending, detect fraud,
          forecast expenses, and receive intelligent financial insights in
          seconds.
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
        <div className="rounded-2xl bg-white p-8 shadow">
          <h3 className="mb-3 text-xl font-bold">
            📊 Smart Analytics
          </h3>
          <p className="text-gray-600">
            Track spending, budgets and savings using beautiful dashboards.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow">
          <h3 className="mb-3 text-xl font-bold">
            🤖 AI Insights
          </h3>
          <p className="text-gray-600">
            Receive personalized financial recommendations powered by AI.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow">
          <h3 className="mb-3 text-xl font-bold">
            🔒 Fraud Detection
          </h3>
          <p className="text-gray-600">
            Detect suspicious transactions automatically before they become a
            problem.
          </p>
        </div>
      </section>
    </main>
  );
}