"use client";

import { useState } from "react";

export default function Home(): React.ReactElement {
  const [text, setText] = useState<string>("");

  const getEmoji = (): string => {
    if (text.length === 0) return "🤔";
    if (text.length < 10) return "🙂";
    if (text.length < 25) return "😂";
    return "🔥";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const clearText = (): void => {
    setText("");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 p-6">
      <div className="w-full max-w-lg bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 space-y-6">
        
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Fancy Text Playground ✨
        </h1>

        <div className="relative">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Type something funny, wild, or random..."
            className="w-full px-5 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 transition"
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">
            {getEmoji()}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>Characters: {text.length}</span>
          <button
            onClick={clearText}
            className="text-red-500 hover:text-red-600 transition font-medium"
          >
            Clear
          </button>
        </div>

        <div className="min-h-[4rem] flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-inner p-4">
          <p className="text-xl font-semibold text-gray-800 text-center break-words animate-pulse">
            {text || "Your masterpiece will appear here 🚀"}
          </p>
        </div>

        <div className="flex justify-center gap-3 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            Live Preview
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Emoji Reaction
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            Character Counter
          </span>
        </div>

      </div>
    </main>
  );
}
