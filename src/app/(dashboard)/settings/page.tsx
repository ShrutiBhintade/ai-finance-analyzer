import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | AI Personal Finance Analyzer",
  description: "Manage your account and preferences",
};

export default function SettingsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-16">
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Settings
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Manage your account, notifications, and preferences.
        </p>
      </div>
    </main>
  );
}