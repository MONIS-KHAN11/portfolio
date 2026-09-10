import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-300/40
        dark:border-white/10
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ================= MAIN FOOTER ================= */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-[2fr_1fr_1fr]
            gap-10
            md:gap-16
            items-start
          "
        >
          {/* ================= BRAND ================= */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Code2
                size={30}
                className="
                  text-cyan-600
                  dark:text-cyan-400
                  transition-colors duration-300
                "
              />

              <h2
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-slate-900
                  dark:text-white
                  transition-colors duration-300
                "
              >
                KhanCodeX
              </h2>
            </div>

            <p
              className="
                mt-4
                text-slate-700
                dark:text-gray-400
                leading-7
                md:leading-8
                transition-colors duration-300
              "
            >
              Full Stack Developer passionate about building modern, scalable
              and high-performance web applications with clean architecture and
              exceptional user experience.
            </p>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="md:justify-self-center">
            <h3
              className="
                text-slate-900
                dark:text-white
                text-lg
                md:text-xl
                font-semibold
                mb-5
                transition-colors duration-300
              "
            >
              Navigation
            </h3>

            <div className="flex flex-col gap-4">
              {/* Home */}
              <a
                href="/"
                className="
                  text-slate-700
                  dark:text-gray-400

                  hover:text-cyan-600
                  dark:hover:text-cyan-400

                  hover:translate-x-2

                  transition-all duration-300
                "
              >
                Home
              </a>

              {/* About */}
              <a
                href="/about"
                className="
                  text-slate-700
                  dark:text-gray-400

                  hover:text-cyan-600
                  dark:hover:text-cyan-400

                  hover:translate-x-2

                  transition-all duration-300
                "
              >
                About
              </a>

              {/* Projects */}
              <a
                href="/projects"
                className="
                  text-slate-700
                  dark:text-gray-400

                  hover:text-cyan-600
                  dark:hover:text-cyan-400

                  hover:translate-x-2

                  transition-all duration-300
                "
              >
                Projects
              </a>
            </div>
          </div>

          {/* ================= CONNECT ================= */}
          <div className="md:justify-self-end">
            <h3
              className="
                text-slate-900
                dark:text-white
                text-lg
                md:text-xl
                font-semibold
                mb-5
                transition-colors duration-300
              "
            >
              Connect
            </h3>

            <div className="flex flex-col gap-4">
              {/* ================= GITHUB ================= */}
              <a
                href="https://github.com/MONIS-KHAN11"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3

                  text-slate-700
                  dark:text-gray-400

                  hover:text-cyan-600
                  dark:hover:text-cyan-400

                  hover:translate-x-2

                  transition-all duration-300
                "
              >
                <FaGithub
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span>GitHub</span>
              </a>

              {/* ================= LINKEDIN ================= */}
              <a
                href="https://www.linkedin.com/in/monis-khan-724887407"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3

                  text-slate-700
                  dark:text-gray-400

                  hover:text-cyan-600
                  dark:hover:text-cyan-400

                  hover:translate-x-2

                  transition-all duration-300
                "
              >
                <FaLinkedin
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span>LinkedIn</span>
              </a>

              {/* ================= INSTAGRAM ================= */}
              <a
                href="https://www.instagram.com/thekhan.stack/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3

                  text-slate-700
                  dark:text-gray-400

                  hover:text-cyan-600
                  dark:hover:text-cyan-400

                  hover:translate-x-2

                  transition-all duration-300
                "
              >
                <FaInstagram
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div
          className="
            border-t
            border-slate-300/40
            dark:border-white/10

            mt-10
            pt-6

            text-center

            transition-colors duration-500
          "
        >
          <p
            className="
              text-sm
              md:text-base

              text-slate-600
              dark:text-gray-500

              leading-6

              transition-colors duration-300
            "
          >
            © 2026 Monis Khan • Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
