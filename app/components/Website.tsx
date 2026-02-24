"use client";

import { useState } from "react";
import Image from "next/image";

type Pastry = {
  name: string;
  description: string;
  image: string;
};

const pastries: Pastry[] = [
  {
    name: "makroud",
    description: "Semolina pastry filled with dates and honey.",
    image: "/images/makroud.jpg",
  },
  {
    name: "Baklava",
    description: "Layers of filo, nuts, and orange blossom syrup.",
    image: "/images/baklava.jpg",
  },
  {
    name: "Kalbellouz",
    description: "Soft semolina cake soaked in syrup.",
    image: "/images/kalbellouz.jpg",
  },
];

export default function Website() {
  const [selected, setSelected] = useState<Pastry | null>(null);

  return (
    <main className="relative min-h-screen bg-gradient-to-r from-green-900 via-white to-white text-gray-800 overflow-hidden">

      {/* ALGERIAN FLAG AS HEART – LEFT SIDE */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
        <svg
          width="300"
          height="280"
          viewBox="0 0 512 512"
          className="animate-float opacity-40"
        >
          <defs>
            {/* Heart shape */}
            <clipPath id="heartClip">
              <path d="M256 448s-192-112-192-272c0-61.9 50.1-112 112-112 45.5 0 84.5 27.4 104 66.5C299.5 91.4 338.5 64 384 64c61.9 0 112 50.1 112 112 0 160-240 272-240 272z" />
            </clipPath>
          </defs>

          {/* Flag inside heart */}
          <g clipPath="url(#heartClip)">
            {/* Green half */}
            <rect x="0" y="0" width="256" height="512" fill="#006233" />
            {/* White half */}
            <rect x="256" y="0" width="256" height="512" fill="#ffffff" />

            {/* Crescent */}
            <circle cx="290" cy="256" r="90" fill="#D21034" />
            <circle cx="310" cy="256" r="75" fill="#ffffff" />

            {/* Star */}
            <polygon
              fill="#D21034"
              points="
                290,210
                302,242
                336,242
                308,262
                320,296
                290,276
                260,296
                272,262
                244,242
                278,242
              "
            />
          </g>
        </svg>
      </div>

      {/* HERO */}
      <section className="relative text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-900">
          Délices d’Algérie 🇩🇿
        </h1>
        <p className="mt-6 text-xl max-w-2xl mx-auto text-gray-700">
          Authentic Algerian pastries crafted with tradition, love, and golden sweetness.
        </p>
      </section>

      {/* ABOUT */}
      <section className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-red-700 mb-4">
            Our Heritage
          </h2>
          <p className="text-lg leading-relaxed">
            Algerian pastries represent hospitality and culture.
            Each recipe is passed down through generations and prepared with care.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-200">
          <ul className="space-y-4 text-lg">
            <li>🍯 Traditional Recipes</li>
            <li>🌰 Premium Ingredients</li>
            <li>🥮 Handmade Daily</li>
            <li>✨ Authentic Taste</li>
          </ul>
        </div>
      </section>

      {/* PASTRIES */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          Our Signature Pastries
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastries.map((pastry) => (
            <div
              key={pastry.name}
              onClick={() => setSelected(pastry)}
              className="cursor-pointer bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition border-t-4 border-green-800"
            >
              <h3 className="text-2xl font-bold text-red-700 mb-2">
                {pastry.name}
              </h3>
              <p className="text-gray-600">{pastry.description}</p>
              <p className="mt-4 text-sm text-green-700 font-semibold">
                Click to view image
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-center mb-4">
              {selected.name}
            </h3>

            <img
  src={selected.image}
  alt={selected.name}
  className="rounded-xl mx-auto"
/>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 block mx-auto px-6 py-2 rounded-full bg-red-700 text-white hover:bg-red-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="relative bg-green-900 text-white py-10 text-center">
        <p className="text-lg font-semibold">
          © 2026 Délices d’Algérie — Sweet Traditions 🇩🇿
        </p>
      </footer>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-35px) scale(1.05);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

    </main>
  );
}
