import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);

    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div
      className="
        flex items-center
        rounded-full
        p-1

        bg-white/45 dark:bg-white/10
        backdrop-blur-xl

        border border-slate-300/40 dark:border-white/10

        shadow-sm

        select-none
        transition-all duration-300

        hover:scale-105
      "
    >
      {/* ================= DARK MODE ================= */}
      <button
        type="button"
        onClick={() => handleThemeChange("dark")}
        aria-label="Enable dark mode"
        className={`
          flex items-center justify-center

          w-10 h-9
          rounded-full

          transition-all duration-300

          ${
            theme === "dark"
              ? `
                bg-slate-900/15
                dark:bg-white/10

                text-slate-700
                dark:text-white

                shadow-[0_0_18px_rgba(34,211,238,0.18)]
              `
              : `
                text-slate-500
                dark:text-gray-400
              `
          }

          hover:text-cyan-600
          dark:hover:text-cyan-300

          hover:scale-105
        `}
      >
        <Moon size={14} />
      </button>

      {/* ================= LIGHT MODE ================= */}
      <button
        type="button"
        onClick={() => handleThemeChange("light")}
        aria-label="Enable light mode"
        className={`
          flex items-center justify-center

          w-10 h-9
          rounded-full

          transition-all duration-300

          ${
            theme === "light"
              ? `
                bg-cyan-400/20
                dark:bg-white/10

                text-cyan-700
                dark:text-white

                shadow-[0_0_18px_rgba(34,211,238,0.18)]
              `
              : `
                text-slate-500
                dark:text-gray-400
              `
          }

          hover:text-cyan-600
          dark:hover:text-cyan-300

          hover:scale-105
        `}
      >
        <Sun size={14} />
      </button>
    </div>
  );
}

export default ThemeToggle;
