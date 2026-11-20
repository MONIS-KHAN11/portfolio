import { Orbit } from "lucide-react";

function ModeToggle({ mode, setMode }) {
  return (
    <div
      role="group"
      aria-label="Portfolio mode"
      className="relative flex w-[14.5rem] items-center rounded-full p-1 bg-white/45 dark:bg-white/10 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 shadow-sm transition-transform duration-200 hover:scale-[1.02] select-none"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-1 left-1 w-28 rounded-full bg-cyan-400/20 dark:bg-white/10 shadow-[0_0_18px_rgba(34,211,238,0.18)] transition-transform duration-300 ease-out ${
          mode === "customer" ? "translate-x-28" : ""
        }`}
      />
      <button
        type="button"
        aria-pressed={mode === "developer"}
        onClick={() => setMode("developer")}
        className={`
          relative z-10 flex h-10 w-28 items-center justify-center gap-1.5 rounded-full
          text-sm font-medium transition-colors duration-200
          ${mode === "developer" ? "text-cyan-700 dark:text-white" : "text-slate-600 dark:text-gray-400"}
          hover:text-cyan-700
          dark:hover:text-cyan-300
        `}
      >
        {mode === "developer" && (
          <Orbit key={mode} size={14} className="md:hidden animate-[spin_0.55s_ease-out]" />
        )}
        Developer
      </button>

      <button
        type="button"
        aria-pressed={mode === "customer"}
        onClick={() => setMode("customer")}
        className={`
          relative z-10 flex h-10 w-28 items-center justify-center gap-1.5 rounded-full
          text-sm font-medium transition-colors duration-200
          ${mode === "customer" ? "text-cyan-700 dark:text-white" : "text-slate-600 dark:text-gray-400"}
          hover:text-cyan-700
          dark:hover:text-cyan-300
        `}
      >
        {mode === "customer" && (
          <Orbit key={mode} size={14} className="md:hidden animate-[spin_0.55s_ease-out]" />
        )}
        Customer
      </button>
    </div>
  );
}

export default ModeToggle;
