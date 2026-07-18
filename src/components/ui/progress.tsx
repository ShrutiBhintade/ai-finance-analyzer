"use client";

interface ProgressProps {
  value: number;
}

export function Progress({ value }: ProgressProps) {
  return (
    <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">
      <div
        className="h-full rounded-full bg-blue-500 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}