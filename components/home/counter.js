"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="text-center p-10">
      <p className="text-2xl mb-4">Compteur : {count}</p>

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded"
        onClick={() => setCount(count + 1)}
      >
        Incrémenter
      </button>
    </section>
  );
}