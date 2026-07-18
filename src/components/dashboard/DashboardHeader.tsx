"use client";

import { Bell, Search, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardHeader() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();

    alert("Logged out successfully!");

    router.push("/login");
  }

  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Welcome back! Here's your financial overview.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              bg-slate-800
              border
              border-slate-700
              rounded-lg
              pl-10
              pr-4
              py-2
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>

        <button className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition">
          <Bell size={20} className="text-gray-300" />
        </button>

        <button
          onClick={handleLogout}
          className="
            flex items-center gap-2
            bg-red-600
            hover:bg-red-700
            text-white
            px-4
            py-2
            rounded-lg
            transition
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}