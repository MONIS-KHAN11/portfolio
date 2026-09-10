import {
  Code2,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Database,
} from "lucide-react";

import { FaHandsClapping, FaReact, FaNodeJs } from "react-icons/fa6";

import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollReveal from "../ScrollReveal";

const skills = [
  { Icon: FaReact, color: "text-cyan-400", angle: 0 },
  { Icon: SiRedux, color: "text-violet-400", angle: 45 },
  { Icon: FaNodeJs, color: "text-green-400", angle: 90 },
  {
    Icon: SiExpress,
    color: "text-gray-300 dark:text-gray-300",
    angle: 135,
  },
  { Icon: SiMongodb, color: "text-green-500", angle: 180 },
  { Icon: SiTypescript, color: "text-blue-500", angle: 225 },
  { Icon: SiTailwindcss, color: "text-sky-400", angle: 270 },
  { Icon: SiNextdotjs, color: "text-white", angle: 315 },
];

function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    if (isDownloading) return;

    setIsDownloading(true);

    const link = document.createElement("a");

    link.href = "/Mohammed%20Monis%20Khan.pdf";
    link.download = "Mohammed Monis Khan.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 5000);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-start lg:items-center py-28 md:py-32 lg:py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-8">
            {/* ================= LEFT SIDE ================= */}
            <div>
              {/* Hero Card */}
              <ScrollReveal direction="up">
                <div
                  className="
                    premium-card

                    w-full max-w-xl lg:w-150
                    min-h-100
                    rounded-4xl

                    bg-white/60 dark:bg-white/5
                    backdrop-blur-xl

                    border border-slate-900/10 dark:border-white/10

                    hover:border-cyan-500/40
                    dark:hover:border-cyan-300/40

                    shadow-lg dark:shadow-none

                    transition-all duration-300

                    lg:-ml-20
                    mt-2 lg:mt-6
                    select-none
                  "
                >
                  {/* Greeting */}
                  <div className="flex items-center gap-3 mt-10 md:mt-16 ml-5 md:ml-6">
                    <FaHandsClapping
                      className="
                        premium-card-icon
                        text-cyan-500
                        dark:text-cyan-400
                        text-3xl
                      "
                    />

                    <p className="text-cyan-500 dark:text-cyan-400 text-2xl md:text-3xl font-medium">
                      Hello, I'm
                    </p>
                  </div>

                  {/* Name */}
                  <h1
                    className="
                      mt-3
                      text-4xl sm:text-5xl md:text-6xl
                      font-bold
                      leading-tight
                      text-slate-900 dark:text-white
                      ml-5 md:ml-8
                      italic
                      transition-colors duration-300
                    "
                  >
                    Monis Khan
                  </h1>

                  {/* Role */}
                  <h2
                    className="
                      mt-2
                      text-2xl sm:text-3xl
                      font-semibold
                      text-slate-700 dark:text-gray-300
                      ml-5 md:ml-8
                      transition-colors duration-300
                    "
                  >
                    Full Stack Developer
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      mt-6
                      text-base sm:text-xl md:text-2xl
                      leading-7 md:leading-8
                      text-slate-600 dark:text-gray-400
                      ml-5 md:ml-8
                      mr-5 md:mr-8
                      transition-colors duration-300
                    "
                  >
                    I build modern, responsive and scalable web applications
                    with React, Node.js and MongoDB.
                  </p>
                </div>
              </ScrollReveal>

              {/* Buttons */}
              <ScrollReveal direction="up" delay={150}>
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full px-5 md:px-0">
                  {/* View Projects */}
                  <Link
                    to="/projects"
                    className="
                      inline-flex items-center justify-center
                      px-8 md:px-22
                      py-3
                      rounded-full

                      bg-white/60 dark:bg-white/5
                      backdrop-blur-xl

                      text-slate-900 dark:text-white
                      font-medium

                      border border-slate-900/10 dark:border-white/10

                      transition-all duration-300

                      hover:bg-cyan-400
                      hover:text-black

                      hover:border-cyan-300/40
                      hover:shadow-[0_0_40px_rgba(34,211,238,.5)]

                      ml-0 lg:-ml-18
                    "
                  >
                    View Projects
                  </Link>

                  {/* Download Resume */}
                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className={`
                      inline-flex items-center justify-center

                      px-8 md:px-18
                      py-3
                      rounded-full

                      bg-white/60 dark:bg-white/5
                      backdrop-blur-xl

                      border border-slate-900/10 dark:border-white/10

                      font-medium
                      transition-all duration-300

                      ml-0

                      ${
                        isDownloading
                          ? "cursor-not-allowed bg-cyan-400/30 border-cyan-400/20 text-slate-700 dark:text-slate-800"
                          : "text-slate-900 dark:text-white hover:bg-cyan-400 hover:text-black hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(34,211,238,.5)]"
                      }
                    `}
                  >
                    {isDownloading ? "Please wait..." : "Download Resume"}
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* ================= RIGHT SIDE / ORBIT ================= */}
            <ScrollReveal direction="scale" delay={200}>
              <div
                className="
                  w-40
                  h-40
                  mr-0
                  lg:mr-30
                  relative
                  scale-75
                  sm:scale-90
                  md:scale-100
                "
              >
                {/* Center Circle */}
                <div
                  className="
                    premium-card

                    w-40
                    h-40
                    rounded-full

                    bg-white/60 dark:bg-white/5
                    backdrop-blur-xl

                    border border-cyan-500/20
                    dark:border-cyan-400/20

                    flex items-center justify-center

                    shadow-[0_0_40px_rgba(34,211,238,.20)]

                    transition-all duration-300
                  "
                >
                  <Code2
                    size={70}
                    className="
                      premium-card-icon
                      text-cyan-500
                      dark:text-cyan-400
                    "
                  />
                </div>

                {/* Orbit */}
                <div className="absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                  <div className="relative w-40 h-40">
                    {skills.map(({ Icon, color, angle }, index) => (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-180px)`,
                        }}
                      >
                        <div className="orbit-reverse">
                          <div
                            className="
                              premium-card

                              w-20 h-20
                              rounded-full

                              bg-white/60 dark:bg-white/10
                              backdrop-blur-xl

                              border border-slate-900/10
                              dark:border-white/10

                              flex items-center justify-center

                              shadow-[0_0_40px_rgba(34,211,238,.20)]

                              transition-all duration-300
                            "
                          >
                            <Icon
                              className={`
                                premium-card-icon
                                ${color}
                                text-4xl
                              `}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= WHAT I BUILD ================= */}
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <ScrollReveal direction="up">
            <div className="text-center">
              <h2
                className="
                  mt-4
                  text-3xl sm:text-4xl md:text-5xl
                  font-bold
                  text-slate-900 dark:text-white
                  transition-colors duration-300
                "
              >
                What I Build
              </h2>

              <p
                className="
                  mt-5 md:mt-6
                  max-w-3xl mx-auto
                  px-2
                  text-base sm:text-lg md:text-xl
                  text-slate-600 dark:text-gray-400
                  leading-7 md:leading-8
                  transition-colors duration-300
                "
              >
                I create modern websites, powerful web applications and scalable
                backend systems with clean UI, smooth user experience and high
                performance.
              </p>
            </div>
          </ScrollReveal>

          {/* Web / App Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16 px-4 md:px-0 justify-items-center">
            {/* Web Development */}
            <ScrollReveal direction="left">
              <div
                className="
                  premium-card
                  group

                  w-full max-w-2xl
                  min-h-[320px] md:min-h-[280px]
                  rounded-[32px]

                  bg-white/60 dark:bg-white/5
                  backdrop-blur-xl

                  border border-slate-900/10 dark:border-white/10

                  p-6 md:p-10

                  flex flex-col items-center text-center
                "
              >
                <div
                  className="
                    premium-card-icon

                    w-14 h-14
                    rounded-2xl

                    bg-cyan-400/10
                    border border-cyan-400/20

                    flex items-center justify-center

                    group-hover:bg-cyan-400/20
                    transition-all duration-300
                  "
                >
                  <Globe
                    size={30}
                    className="text-cyan-500 dark:text-cyan-400"
                  />
                </div>

                <h3
                  className="
                    mt-4
                    text-2xl md:text-3xl
                    font-bold
                    text-slate-900 dark:text-white
                  "
                >
                  Web Development
                </h3>

                <p
                  className="
                    mt-4
                    text-slate-600 dark:text-gray-400
                    text-base md:text-lg
                    leading-8
                  "
                >
                  Building modern, responsive and high-performance web
                  applications with clean architecture, scalable code and
                  exceptional user experience.
                </p>
              </div>
            </ScrollReveal>

            {/* App Development */}
            <ScrollReveal direction="right" delay={120}>
              <div
                className="
                  premium-card
                  group

                  w-full max-w-2xl
                  min-h-[320px] md:min-h-[280px]
                  rounded-[32px]

                  bg-white/60 dark:bg-white/5
                  backdrop-blur-xl

                  border border-slate-900/10 dark:border-white/10

                  p-6 md:p-10

                  flex flex-col items-center text-center
                "
              >
                <div
                  className="
                    premium-card-icon

                    w-14 h-14
                    rounded-2xl

                    bg-cyan-400/10
                    border border-cyan-400/20

                    flex items-center justify-center

                    group-hover:bg-cyan-400/20
                    transition-all duration-300
                  "
                >
                  <Smartphone
                    size={30}
                    className="text-cyan-500 dark:text-cyan-400"
                  />
                </div>

                <h3
                  className="
                    mt-4
                    text-2xl md:text-3xl
                    font-bold
                    text-slate-900 dark:text-white
                  "
                >
                  App Development
                </h3>

                <p
                  className="
                    mt-4
                    text-slate-600 dark:text-gray-400
                    text-base md:text-lg
                    leading-8
                  "
                >
                  Developing fast, scalable and cross-platform applications with
                  modern design, optimized performance and maintainable code.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ================= TECH STACK ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-8 px-4 md:px-0">
            {/* Frontend */}
            <ScrollReveal direction="up" delay={100}>
              <div
                className="
                  premium-card
                  group

                  w-full
                  rounded-4xl

                  bg-white/60 dark:bg-white/5
                  backdrop-blur-xl

                  border border-slate-900/10 dark:border-white/10

                  p-6

                  justify-items-center
                "
              >
                <div
                  className="
                    premium-card-icon

                    w-12 h-12
                    rounded-xl

                    bg-cyan-400/10
                    border border-cyan-400/20

                    flex items-center justify-center

                    group-hover:bg-cyan-400/20
                    transition-all duration-300
                  "
                >
                  <Monitor
                    size={26}
                    className="text-cyan-500 dark:text-cyan-400"
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  Frontend
                </h3>

                <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm leading-6 text-center">
                  React • Next.js • Tailwind CSS • HTML • CSS • JavaScript •
                  TypeScript
                </p>
              </div>
            </ScrollReveal>

            {/* Backend */}
            <ScrollReveal direction="up" delay={200}>
              <div
                className="
                  premium-card
                  group

                  w-full
                  rounded-4xl

                  bg-white/60 dark:bg-white/5
                  backdrop-blur-xl

                  border border-slate-900/10 dark:border-white/10

                  p-6

                  justify-items-center
                "
              >
                <div
                  className="
                    premium-card-icon

                    w-12 h-12
                    rounded-xl

                    bg-cyan-400/10
                    border border-cyan-400/20

                    flex items-center justify-center

                    group-hover:bg-cyan-400/20
                    transition-all duration-300
                  "
                >
                  <Server
                    size={26}
                    className="text-cyan-500 dark:text-cyan-400"
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  Backend
                </h3>

                <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm leading-6 text-center">
                  Node.js • Express.js • REST APIs • JWT • Authentication •
                  Socket.io
                </p>
              </div>
            </ScrollReveal>

            {/* Database */}
            <ScrollReveal direction="up" delay={300}>
              <div
                className="
                  premium-card
                  group

                  w-full
                  rounded-4xl

                  bg-white/60 dark:bg-white/5
                  backdrop-blur-xl

                  border border-slate-900/10 dark:border-white/10

                  p-6

                  justify-items-center
                "
              >
                <div
                  className="
                    premium-card-icon

                    w-12 h-12
                    rounded-xl

                    bg-cyan-400/10
                    border border-cyan-400/20

                    flex items-center justify-center

                    group-hover:bg-cyan-400/20
                    transition-all duration-300
                  "
                >
                  <Database
                    size={26}
                    className="text-cyan-500 dark:text-cyan-400"
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  Database
                </h3>

                <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm leading-6 text-center">
                  MongoDB • Firebase • MySQL • Cloud Storage • Database Design
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <ScrollReveal direction="up" delay={150}>
        <div
          className="
            text-center
            border-b border-slate-900/10 dark:border-white/10
            pb-8 mb-8
          "
        >
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              mt-12 md:mt-18
              font-bold
              text-slate-900 dark:text-white
              px-4
            "
          >
            Let's Build Something Amazing
          </h2>

          <p
            className="
              mt-4
              mx-auto
              max-w-2xl
              px-4
              text-base sm:text-lg md:text-xl
              text-slate-600 dark:text-gray-400
              leading-7 md:leading-8
            "
          >
            Have an idea or project in mind? Let's work together and build
            something modern, scalable and impactful.
          </p>

          <Link
            to="/contact"
            className="
              inline-flex items-center justify-center

              px-10 md:px-18
              py-4
              rounded-full

              bg-white/60 dark:bg-white/5
              backdrop-blur-xl

              text-slate-900 dark:text-white
              font-medium

              transition-all duration-300

              hover:bg-cyan-300
              hover:text-black

              border border-cyan-500/20
              dark:border-cyan-400/20

              hover:border-cyan-300/20
              hover:shadow-[0_0_40px_rgba(34,211,238,.5)]

              mt-4 mb-4
            "
          >
            Contact Me
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}

export default Hero;
