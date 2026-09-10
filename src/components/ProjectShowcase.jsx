import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import homeImg from "../assets/Images/home.png";
import serviceImg from "../assets/Images/service.png";
import loginImg from "../assets/Images/login.png";
import contactImg from "../assets/Images/contact.png";

import ScrollReveal from "./ScrollReveal";

function ProjectShowcase() {
  const slides = [
    {
      src: homeImg,
      label: "Home",
    },
    {
      src: serviceImg,
      label: "Service",
    },
    {
      src: loginImg,
      label: "Login",
    },
    {
      src: contactImg,
      label: "Contact",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef(null);

  // ================= AUTO SLIDER =================

  useEffect(() => {
    if (paused || slides.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [paused, slides.length]);

  // ================= PREVIOUS =================

  const prev = () => {
    setIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  // ================= NEXT =================

  const next = () => {
    setIndex((current) => (current + 1) % slides.length);
  };

  // ================= MOBILE SWIPE START =================

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    setPaused(true);
  };

  // ================= MOBILE SWIPE END =================

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchEndX - touchStartX.current;

    if (difference > 50) {
      prev();
    } else if (difference < -50) {
      next();
    }

    touchStartX.current = null;
    setPaused(false);
  };

  // ================= FEATURES =================

  const features = [
    "Responsive Design",
    "Modern UI",
    "Fast Performance",
    "Dark Theme",
  ];

  return (
    <section className="min-h-screen py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= SECTION HEADER ================= */}

        <ScrollReveal direction="up">
          <div className="text-center">
            <p
              className="
                text-cyan-600
                dark:text-cyan-400
                font-medium
                tracking-[0.2em]
                uppercase
                transition-colors duration-300
              "
            >
              Featured Projects
            </p>

            <h2
              className="
                mt-4
                text-4xl md:text-5xl
                font-bold
                text-slate-900
                dark:text-white
                transition-colors duration-300
              "
            >
              Projects I've Built
            </h2>

            <p
              className="
                mt-4
                mx-auto
                max-w-3xl
                text-base md:text-xl
                text-slate-600
                dark:text-gray-400
                leading-8
                transition-colors duration-300
              "
            >
              A collection of modern web applications built with clean
              architecture, responsive design and exceptional user experience.
            </p>
          </div>
        </ScrollReveal>

        {/* ================= PROJECT ================= */}

        <div
          className="
            mt-16 lg:mt-20
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* ================= LEFT SIDE DETAILS ================= */}

          <ScrollReveal direction="left">
            <div>
              {/* Featured Badge */}

              <span
                className="
                  inline-block
                  px-4 py-2
                  rounded-full

                  bg-cyan-500/10
                  dark:bg-cyan-400/10

                  border
                  border-cyan-500/20
                  dark:border-cyan-400/20

                  text-cyan-700
                  dark:text-cyan-400

                  text-sm
                  font-medium

                  transition-all duration-300

                  hover:bg-cyan-400/15
                  hover:border-cyan-400/40
                "
              >
                Featured Project
              </span>

              {/* Project Title */}

              <h2
                className="
                  mt-6
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-slate-900
                  dark:text-white
                  transition-colors duration-300
                "
              >
                FitZone
              </h2>

              {/* Project Subtitle */}

              <p
                className="
                  mt-2
                  text-xl
                  md:text-2xl
                  text-cyan-600
                  dark:text-cyan-400
                  transition-colors duration-300
                "
              >
                Modern Fitness Website
              </p>

              {/* Project Description */}

              <p
                className="
                  mt-6
                  text-base
                  md:text-lg
                  leading-8
                  text-slate-600
                  dark:text-gray-400
                  transition-colors duration-300
                "
              >
                FitZone is a modern fitness website built with React and
                Tailwind CSS. It provides a responsive user experience,
                attractive UI, smooth animations and optimized performance
                across all devices.
              </p>

              {/* ================= TECH + FEATURES ================= */}

              <div
                className="
                  mt-10
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-10
                "
              >
                {/* ================= TECH STACK ================= */}

                <ScrollReveal direction="up" delay={100}>
                  <div
                    className="
                      premium-card
                      rounded-3xl
                      bg-white/20
                      dark:bg-white/5
                      backdrop-blur-xl
                      border
                      border-slate-300/30
                      dark:border-white/10
                      p-5
                    "
                  >
                    <h3
                      className="
                        text-slate-900
                        dark:text-white
                        text-xl
                        md:text-2xl
                        font-semibold
                        mb-6
                        transition-colors duration-300
                      "
                    >
                      Tech Stack
                    </h3>

                    <div className="space-y-6">
                      {/* Frontend */}

                      <div>
                        <h4
                          className="
                            text-slate-900
                            dark:text-white
                            font-semibold
                            mb-2
                          "
                        >
                          Frontend
                        </h4>

                        <div
                          className="
                            flex
                            flex-wrap
                            gap-2
                            text-slate-600
                            dark:text-gray-400
                            text-sm
                          "
                        >
                          <span>React</span>
                          <span>•</span>
                          <span>Tailwind CSS</span>
                          <span>•</span>
                          <span>JavaScript</span>
                        </div>
                      </div>

                      {/* Backend */}

                      <div>
                        <h4
                          className="
                            text-slate-900
                            dark:text-white
                            font-semibold
                            mb-2
                          "
                        >
                          Backend
                        </h4>

                        <div
                          className="
                            flex
                            flex-wrap
                            gap-2
                            text-slate-600
                            dark:text-gray-400
                            text-sm
                          "
                        >
                          <span>Node.js</span>
                          <span>•</span>
                          <span>Express.js</span>
                        </div>
                      </div>

                      {/* Database */}

                      <div>
                        <h4
                          className="
                            text-slate-900
                            dark:text-white
                            font-semibold
                            mb-2
                          "
                        >
                          Database
                        </h4>

                        <div
                          className="
                            flex
                            flex-wrap
                            gap-2
                            text-slate-600
                            dark:text-gray-400
                            text-sm
                          "
                        >
                          <span>MongoDB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ================= KEY FEATURES ================= */}

                <ScrollReveal direction="up" delay={200}>
                  <div
                    className="
                      premium-card
                      rounded-3xl
                      bg-white/20
                      dark:bg-white/5
                      backdrop-blur-xl
                      border
                      border-slate-300/30
                      dark:border-white/10
                      p-5
                    "
                  >
                    <h3
                      className="
                        text-slate-900
                        dark:text-white
                        text-xl
                        md:text-2xl
                        font-semibold
                        mb-6
                        transition-colors duration-300
                      "
                    >
                      Key Features
                    </h3>

                    <div className="space-y-5">
                      {features.map((feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-3

                            text-slate-600
                            dark:text-gray-300

                            transition-all
                            duration-300

                            hover:translate-x-1
                          "
                        >
                          <CheckCircle
                            size={20}
                            className="
                              text-cyan-600
                              dark:text-cyan-400
                              shrink-0
                            "
                          />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* ================= LIVE DEMO ================= */}

              <ScrollReveal direction="up" delay={250}>
                <div className="mt-10">
                  <a
                    href="https://fitzone-8db19.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2

                      px-10
                      py-4

                      rounded-full

                      bg-white/45
                      dark:bg-white/5

                      backdrop-blur-xl

                      text-slate-800
                      dark:text-white

                      font-semibold

                      border
                      border-slate-300/40
                      dark:border-white/10

                      transition-all duration-300

                      hover:scale-105

                      hover:bg-cyan-400
                      hover:text-black

                      hover:border-cyan-300

                      hover:shadow-[0_0_40px_rgba(34,211,238,.5)]
                    "
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* ================= RIGHT SIDE SLIDER ================= */}

          <ScrollReveal direction="right" delay={150}>
            <div>
              <div
                className="
                  relative

                  h-[300px]
                  sm:h-[400px]
                  lg:h-[520px]

                  rounded-3xl
                  overflow-hidden

                  bg-white/35
                  dark:bg-white/5

                  backdrop-blur-xl

                  border
                  border-slate-300/40
                  dark:border-white/10

                  transition-all duration-500

                  premium-card
                "
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* ================= IMAGES ================= */}

                {slides.map((slide, slideIndex) => (
                  <div
                    key={slide.label}
                    className={`
                      absolute
                      inset-0

                      p-4
                      sm:p-6

                      transition-opacity
                      duration-700
                      ease-in-out

                      ${slideIndex === index ? "opacity-100" : "opacity-0"}
                    `}
                  >
                    <div className="w-full h-full relative group">
                      <img
                        src={slide.src}
                        alt={`${slide.label} screenshot`}
                        draggable={false}
                        loading={slideIndex === 0 ? "eager" : "lazy"}
                        className="
                          w-full
                          h-full

                          object-contain

                          rounded-2xl

                          border
                          border-slate-300/40
                          dark:border-white/10

                          shadow-2xl

                          transition-all
                          duration-500

                          group-hover:scale-[1.015]
                        "
                      />

                      {/* Image Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-2xl

                          bg-cyan-400/5

                          opacity-0
                          group-hover:opacity-100

                          transition-opacity
                          duration-500
                        "
                      />
                    </div>
                  </div>
                ))}

                {/* ================= CURRENT LABEL ================= */}

                <span
                  className="
                    absolute
                    top-4
                    right-4

                    px-3
                    py-1.5

                    text-xs
                    rounded-full

                    bg-blue-100/80
                    dark:bg-black/50

                    text-slate-800
                    dark:text-white

                    border
                    border-slate-300/40
                    dark:border-white/10

                    backdrop-blur-md

                    shadow-lg

                    transition-all duration-300
                  "
                >
                  {slides[index].label}
                </span>

                {/* ================= BOTTOM CONTROLS ================= */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-1/2
                    -translate-x-1/2
                  "
                >
                  <div
                    className="
                      flex
                      items-center

                      gap-2
                      sm:gap-3

                      px-3
                      py-2

                      rounded-full

                      bg-blue-100/75
                      dark:bg-black/50

                      border
                      border-slate-300/40
                      dark:border-white/10

                      backdrop-blur-md

                      shadow-lg
                    "
                  >
                    {/* ================= PREVIOUS ================= */}

                    <button
                      type="button"
                      aria-label="Previous screenshot"
                      onClick={prev}
                      className="
                        w-9
                        h-9
                        sm:w-10
                        sm:h-10

                        rounded-full

                        bg-white/50
                        dark:bg-white/10

                        text-slate-700
                        dark:text-white

                        flex
                        items-center
                        justify-center

                        transition-all
                        duration-300

                        hover:bg-cyan-400
                        hover:text-black

                        hover:scale-110
                      "
                    >
                      <ChevronLeft size={20} />
                    </button>

                    {/* ================= DOTS ================= */}

                    <div className="flex items-center gap-2 px-1">
                      {slides.map((slide, slideIndex) => (
                        <button
                          type="button"
                          key={slide.label}
                          aria-label={`Show ${slide.label} screenshot`}
                          aria-current={
                            slideIndex === index ? "true" : undefined
                          }
                          onClick={() => setIndex(slideIndex)}
                          className={`
                            rounded-full

                            transition-all
                            duration-300

                            ${
                              slideIndex === index
                                ? "w-6 h-2.5 bg-cyan-500 dark:bg-cyan-400"
                                : "w-2.5 h-2.5 bg-slate-400/60 dark:bg-white/40 hover:bg-cyan-400/70"
                            }
                          `}
                        />
                      ))}
                    </div>

                    {/* ================= NEXT ================= */}

                    <button
                      type="button"
                      aria-label="Next screenshot"
                      onClick={next}
                      className="
                        w-9
                        h-9
                        sm:w-10
                        sm:h-10

                        rounded-full

                        bg-white/50
                        dark:bg-white/10

                        text-slate-700
                        dark:text-white

                        flex
                        items-center
                        justify-center

                        transition-all
                        duration-300

                        hover:bg-cyan-400
                        hover:text-black

                        hover:scale-110
                      "
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;
