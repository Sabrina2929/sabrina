"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700 p-6">
      
      {/* Decorative blurred shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-40" />

      <div className="relative w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 space-y-6 border border-white/30">
        
        <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent tracking-wide">
          Fancy Text Magic ✨
        </h1>

        <input
          className="w-full px-5 py-4 text-xl font-semibold rounded-2xl bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-pink-400 transition shadow-inner"
          placeholder="Type something funny!"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="min-h-[3.5rem] flex items-center justify-center rounded-2xl bg-gradient-to-r from-white/60 to-white/30 shadow-inner">
          <p className="text-xl font-bold text-gray-900 tracking-wide break-words animate-pulse">
            {name || "Your words appear here ✨"}
          </p>
        </div>

      </div>
    </main>
  );
}
