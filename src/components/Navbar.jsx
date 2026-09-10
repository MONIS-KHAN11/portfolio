import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import ModeToggle from "../components/ModeToggle";
import { NavLink, useLocation } from "react-router-dom";

function Navbar({ mode, setMode }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        px-4 md:px-6 py-4

        bg-blue-50/55 dark:bg-slate-950/20
        backdrop-blur-xl

        border-b border-slate-300/40 dark:border-white/10
        shadow-lg

        transition-all duration-300
      "
    >
      {/* ================= NAVBAR ================= */}
      <div className="flex items-center justify-between">
        {/* ================= LEFT SIDE / LOGO ================= */}
        <div
          className="
            flex items-center gap-2 md:gap-3
            px-4 md:px-6 py-1
            rounded-full

            bg-white/45 dark:bg-white/5
            backdrop-blur-xl

            border border-slate-300/40 dark:border-white/10
            shadow-lg

            hover:bg-white/65 dark:hover:bg-white/10

            transition-all duration-300

            mt-4

            hover:shadow-[0_0_40px_rgba(34,211,238,0.30)]
            hover:border-cyan-400/40 dark:hover:border-cyan-300/40

            hover:scale-105
          "
        >
          <Code2
            size={24}
            className="
              md:w-[30px] md:h-[30px]
              text-cyan-600 dark:text-cyan-300
              transition-colors duration-300
            "
          />

          <h1
            className="
              text-xl md:text-3xl
              font-semibold
              text-slate-900 dark:text-white
              select-none
              transition-colors duration-300
            "
          >
            KhanCodeX
          </h1>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <div
          className="
            hidden md:flex
            absolute left-1/2 -translate-x-1/2

            animate-[float_4s_ease-in-out_infinite]

            items-center gap-4
            px-6 py-1
            rounded-full

            bg-white/45 dark:bg-white/5
            backdrop-blur-xl

            border border-slate-300/40 dark:border-white/10
            shadow-lg

            mt-4

            hover:scale-102
            hover:shadow-[0_0_40px_rgba(34,211,238,0.30)]
            hover:border-cyan-400/40 dark:hover:border-cyan-300/40

            select-none
            transition-all duration-300
          "
        >
          {/* ================= HOME ================= */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
                px-4 py-2
                rounded-full
                border border-transparent

                transition-all duration-300

                hover:bg-cyan-500/10 dark:hover:bg-white/10
                hover:border-cyan-500/40 dark:hover:border-cyan-300/40
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]

                ${
                  isActive
                    ? "bg-cyan-500/10 dark:bg-white/10 text-cyan-700 dark:text-white border-cyan-400/20"
                    : "text-slate-700 dark:text-gray-400"
                }
              `
            }
          >
            Home
          </NavLink>

          {/* ================= ABOUT ================= */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `
                px-4 py-2
                rounded-full
                border border-transparent

                transition-all duration-300

                hover:bg-cyan-500/10 dark:hover:bg-white/10
                hover:border-cyan-500/40 dark:hover:border-cyan-300/40
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]

                ${
                  isActive
                    ? "bg-cyan-500/10 dark:bg-white/10 text-cyan-700 dark:text-white border-cyan-400/20"
                    : "text-slate-700 dark:text-gray-400"
                }
              `
            }
          >
            About
          </NavLink>

          {/* ================= CONTACT ================= */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `
                px-4 py-2
                rounded-full
                border border-transparent

                transition-all duration-300

                hover:bg-cyan-500/10 dark:hover:bg-white/10
                hover:border-cyan-500/40 dark:hover:border-cyan-300/40
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]

                ${
                  isActive
                    ? "bg-cyan-500/10 dark:bg-white/10 text-cyan-700 dark:text-white border-cyan-400/20"
                    : "text-slate-700 dark:text-gray-400"
                }
              `
            }
          >
            Contact
          </NavLink>
        </div>

        {/* ================= DESKTOP RIGHT SIDE ================= */}
        <div className="hidden md:flex gap-4 mt-4 text-lg mr-8">
          {isHomePage && <ModeToggle mode={mode} setMode={setMode} />}

          <ThemeToggle />
        </div>

        {/* ================= MOBILE RIGHT SIDE ================= */}
        <div className="flex md:hidden items-center gap-2 mt-4">
          {/* Dark / Light */}
          <ThemeToggle />

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="
              w-11 h-11
              flex items-center justify-center
              rounded-full

              bg-white/45 dark:bg-white/5
              backdrop-blur-xl

              border border-slate-300/40 dark:border-white/10

              text-slate-900 dark:text-white

              transition-all duration-300

              hover:bg-white/65 dark:hover:bg-white/10
              hover:text-cyan-600 dark:hover:text-cyan-300

              hover:border-cyan-500/40 dark:hover:border-cyan-300/40
              hover:shadow-[0_0_25px_rgba(34,211,238,0.30)]
            "
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div
          className="
            md:hidden
            mt-4 mx-1 p-4
            rounded-3xl

            bg-blue-50/90 dark:bg-slate-950/95
            backdrop-blur-xl

            border border-slate-300/40 dark:border-white/10

            shadow-[0_0_40px_rgba(34,211,238,0.15)]

            transition-all duration-300
          "
        >
          <div className="flex flex-col gap-2">
            {/* Home */}
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `
                  px-4 py-3
                  rounded-2xl
                  border border-transparent

                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-cyan-500/10 dark:bg-white/10 text-cyan-700 dark:text-white border-cyan-400/30 dark:border-cyan-300/30"
                      : "text-slate-700 dark:text-gray-400"
                  }

                  hover:bg-cyan-500/10 dark:hover:bg-white/10
                  hover:text-cyan-600 dark:hover:text-cyan-300
                  hover:border-cyan-500/30 dark:hover:border-cyan-300/30
                `
              }
            >
              Home
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `
                  px-4 py-3
                  rounded-2xl
                  border border-transparent

                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-cyan-500/10 dark:bg-white/10 text-cyan-700 dark:text-white border-cyan-400/30 dark:border-cyan-300/30"
                      : "text-slate-700 dark:text-gray-400"
                  }

                  hover:bg-cyan-500/10 dark:hover:bg-white/10
                  hover:text-cyan-600 dark:hover:text-cyan-300
                  hover:border-cyan-500/30 dark:hover:border-cyan-300/30
                `
              }
            >
              About
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `
                  px-4 py-3
                  rounded-2xl
                  border border-transparent

                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-cyan-500/10 dark:bg-white/10 text-cyan-700 dark:text-white border-cyan-400/30 dark:border-cyan-300/30"
                      : "text-slate-700 dark:text-gray-400"
                  }

                  hover:bg-cyan-500/10 dark:hover:bg-white/10
                  hover:text-cyan-600 dark:hover:text-cyan-300
                  hover:border-cyan-500/30 dark:hover:border-cyan-300/30
                `
              }
            >
              Contact
            </NavLink>
          </div>

          {/* ================= MOBILE MODE TOGGLE ================= */}
          {isHomePage && (
            <div
              className="
                mt-4 pt-4
                border-t border-slate-300/40 dark:border-white/10
                flex justify-center
              "
            >
              <ModeToggle mode={mode} setMode={setMode} />
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
