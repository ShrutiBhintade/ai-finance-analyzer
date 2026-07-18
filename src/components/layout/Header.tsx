"use client";

import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
}

export function Header({ title = "Dashboard" }: HeaderProps) {
  return (
    <header className={cn(
      "sticky top-0 z-40 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
    )}>
      <div className="flex h-full items-center justify-between px-6">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">U</span>
          </div>
        </div>
      </div>
    </header>
  );
}