import { useState } from "react";

function ModeToggle({ mode, setMode }) {
  return (
    <div
      className="flex items-center rounded-full p-1 bg-white/45 dark:bg-white/10 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 shadow-sm hover:scale-105 transition-all duration-300 select-none"
    >
      {/* ================= DEVELOPER ================= */}
      <button
        type="button"
        onClick={() => setMode("developer")}
        className={`
          px-4 py-2
          rounded-full
          transition-all duration-300
          text-sm
          font-medium

          ${
            mode === "developer"
              ? `
                bg-cyan-400/20
                dark:bg-white/10
                text-cyan-700
                dark:text-white
                shadow-[0_0_18px_rgba(34,211,238,0.18)]
              `
              : `
                text-slate-600
                dark:text-gray-400
              `
          }

          hover:text-cyan-700
          dark:hover:text-cyan-300
        `}
      >
        Developer
      </button>

      {/* ================= CUSTOMER ================= */}
      <button
        type="button"
        onClick={() => setMode("customer")}
        className={`
          px-4 py-2
          rounded-full
          transition-all duration-300
          text-sm
          font-medium

          ${
            mode === "customer"
              ? `
                bg-cyan-400/20
                dark:bg-white/10
                text-cyan-700
                dark:text-white
                shadow-[0_0_18px_rgba(34,211,238,0.18)]
              `
              : `
                text-slate-600
                dark:text-gray-400
              `
          }

          hover:text-cyan-700
          dark:hover:text-cyan-300
        `}
      >
        Customer
      </button>
    </div>
  );
}

export default ModeToggle;
