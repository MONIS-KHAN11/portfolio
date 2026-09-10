import { useState } from "react";
import {
  Code2,
  Database,
  Server,
  Globe,
  Smartphone,
  GraduationCap,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function About() {
  const profile = {
    name: "Mohammed Monis khan",
    role: "Full Stack Developer",
    summary:
      "I build fast, accessible user interfaces and reliable backends. I care about clean code, performance, and delightful UX.",
    avatar: "/profile.jpg",
  };

  const quickInfo = [
    {
      icon: Briefcase,
      label: "Role",
      value: "Full Stack Developer",
    },
    {
      icon: Smartphone,
      label: "Focus",
      value: "Web Applications",
    },
    {
      icon: Globe,
      label: "Languages",
      value: "English, Hindi",
    },
  ];

  const stats = [
    {
      number: "2+",
      label: "Projects Built",
    },
    {
      number: "Full Stack",
      label: "Development",
    },
    {
      number: "100%",
      label: "Responsive",
    },
    {
      number: "Clean",
      label: "Code",
    },
  ];

  const coreSkills = [
    { name: "React.js", level: 90 },
    { name: "Tailwind CSS", level: 88 },
    { name: "JavaScript (ES6+)", level: 86 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 78 },
    { name: "MongoDB", level: 75 },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      icon: Code2,
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      items: ["Node.js", "Express.js", "REST API"],
    },
    {
      title: "Database",
      icon: Database,
      items: ["MongoDB", "Firebase"],
    },
    {
      title: "Tools & Others",
      icon: Globe,
      items: ["Git", "GitHub", "Vite", "Responsive Design"],
    },
  ];

  const personalInfo = [
    {
      label: "Name",
      value: "Mohammed Monis khan",
    },
    {
      label: "Role",
      value: "Full Stack Developer",
    },
    {
      label: "Experience",
      value: "Fresher (Intern-ready)",
    },
    {
      label: "Languages",
      value: "English, Hindi",
    },
  ];

  const education = [
    {
      degree: "Senior Secondary (Class XII)",
      institution: "RBSE",
      year: "2022",
      details:
        "Arts with Computer Science — Built a foundation in programming and web development.",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Mohanlal Sukhadia University, Udaipur (Raj)",
      year: "2023 — 2026",
      details:
        "Core CS fundamentals, web development, DBMS, OOP, and project-based learning.",
    },
    {
      degree: "Master Of Computer Applications",
      institution:
        "Janardan Rai Nagar Rajasthan Vidyapeeth University, Udaipur (Raj)",
      year: "2026 — Present",
      details: "Currently pursuing MCA with a focus on full-stack development.",
    },
  ];

  const highlights = [
    "Modern, responsive interfaces",
    "Scalable front/back-end architecture",
    "Clean, reusable and maintainable code",
    "Performance-driven UX",
  ];

  const [showIconFallback, setShowIconFallback] = useState(false);

  return (
    <section className="relative min-h-screen py-24 md:py-28 overflow-hidden">
      {/* =========================
          BACKGROUND GLOW
      ========================= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute -top-32 -left-20
            h-72 w-72 sm:h-96 sm:w-96
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        <div
          className="
            absolute -bottom-32 -right-20
            h-72 w-72 sm:h-96 sm:w-96
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* =========================
            HERO
        ========================= */}
        <ScrollReveal direction="up">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT TEXT */}
            <div>
              <h1
                className="
                  mt-4
                  text-2xl md:text-5xl
                  font-bold
                  text-slate-900 dark:text-white
                  leading-tight
                "
              >
                I build digital experiences
                <span className="text-cyan-600 dark:text-cyan-400">
                  {" "}
                  that matter.
                </span>
              </h1>

              <p
                className="
                  mt-6
                  text-slate-700 dark:text-gray-400
                  text-base md:text-lg
                  leading-8
                  max-w-2xl
                "
              >
                {profile.summary}
              </p>

              {/* QUICK INFO */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {quickInfo.map((q) => {
                  const Icon = q.icon;

                  return (
                    <div
                      key={q.label}
                      className="
                        premium-card
                        flex items-center gap-4
                        p-4
                        rounded-2xl

                        bg-white/35 dark:bg-white/5
                        backdrop-blur-xl

                        border
                        border-slate-300/40
                        dark:border-white/10

                        hover:border-cyan-500/40
                        dark:hover:border-cyan-300/40

                        transition-all duration-300
                      "
                    >
                      <Icon
                        size={22}
                        className="
                          premium-card-icon
                          text-cyan-600
                          dark:text-cyan-400
                          shrink-0
                        "
                      />

                      <div>
                        <p className="text-sm text-slate-500 dark:text-gray-500">
                          {q.label}
                        </p>

                        {q.href ? (
                          <a
                            href={q.href}
                            className="
                              text-slate-900
                              dark:text-white
                              hover:text-cyan-600
                              dark:hover:text-cyan-300
                              hover:underline
                              transition-colors
                            "
                          >
                            {q.value}
                          </a>
                        ) : (
                          <p className="text-slate-900 dark:text-white">
                            {q.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PROFILE CARD */}
            <div className="relative">
              <div
                className="
                  absolute -inset-4
                  bg-cyan-400/10
                  blur-3xl
                  rounded-3xl
                "
              />

              <div
                className="
                  premium-card
                  relative
                  rounded-3xl

                  bg-white/35 dark:bg-white/5
                  backdrop-blur-xl

                  border
                  border-slate-300/40
                  dark:border-white/10

                  p-8 md:p-10

                  hover:border-cyan-500/40
                  dark:hover:border-cyan-300/40

                  transition-all duration-500

                  hover:shadow-[0_0_50px_rgba(34,211,238,.15)]
                "
              >
                {/* PROFILE IMAGE */}
                <div className="flex justify-center">
                  <div
                    className="
                      w-40 h-40
                      rounded-full

                      border
                      border-cyan-500/30
                      dark:border-cyan-300/30

                      bg-gradient-to-br
                      from-cyan-400/15
                      to-blue-600/15

                      relative
                      overflow-hidden

                      flex items-center justify-center
                    "
                  >
                    {!showIconFallback && (
                      <img
                        src={profile.avatar}
                        alt={`${profile.name} profile`}
                        className="w-full h-full object-cover"
                        onError={() => setShowIconFallback(true)}
                      />
                    )}

                    {showIconFallback && (
                      <Code2
                        size={60}
                        className="text-cyan-600 dark:text-cyan-400"
                      />
                    )}
                  </div>
                </div>

                {/* PROFILE INFO */}
                <div className="text-center mt-8">
                  <h2
                    className="
                      text-3xl md:text-4xl
                      font-bold
                      text-slate-900 dark:text-white
                    "
                  >
                    {profile.name}
                  </h2>

                  <p className="mt-3 text-lg text-cyan-600 dark:text-cyan-400">
                    {profile.role}
                  </p>
                </div>

                {/* HIGHLIGHTS */}
                <div className="mt-8 space-y-3">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="
                          text-cyan-600
                          dark:text-cyan-400
                          mt-0.5
                          shrink-0
                        "
                      />

                      <p className="text-slate-700 dark:text-gray-300">{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================
            STATS
        ========================= */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="
                  premium-card

                  p-6 md:p-8
                  text-center
                  rounded-3xl

                  bg-white/35 dark:bg-white/5
                  backdrop-blur-xl

                  border
                  border-slate-300/40
                  dark:border-white/10

                  hover:border-cyan-500/40
                  dark:hover:border-cyan-300/40

                  hover:bg-white/45
                  dark:hover:bg-white/[0.07]

                  transition-all duration-300
                "
              >
                <h3 className="text-2xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                  {s.number}
                </h3>

                <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-gray-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* =========================
            ACADEMIC JOURNEY
        ========================= */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mt-20">
            <h3
              className="
                mt-4
                text-2xl md:text-3xl
                font-bold
                text-slate-900 dark:text-white
              "
            >
              My Academic Journey
            </h3>

            {/* HORIZONTAL TIMELINE */}
            <div className="mt-6 relative">
              {/* Horizontal Line */}
              <div
                className="
                  absolute
                  top-5
                  left-5
                  right-5
                  h-px

                  bg-gradient-to-r
                  from-cyan-500/60
                  dark:from-cyan-400/60
                  via-cyan-500/20
                  dark:via-cyan-400/20
                  to-transparent

                  hidden md:block
                "
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {education.map((ed) => (
                  <div key={ed.degree} className="relative">
                    {/* Timeline Dot */}
                    <div
                      className="
                        relative z-10
                        w-10 h-10
                        rounded-full

                        bg-cyan-400/10

                        border
                        border-cyan-500/30
                        dark:border-cyan-400/30

                        flex items-center justify-center
                        mb-5
                      "
                    >
                      <GraduationCap
                        size={20}
                        className="text-cyan-600 dark:text-cyan-400"
                      />
                    </div>

                    {/* EDUCATION CARD */}
                    <div
                      className="
                        premium-card

                        p-6 md:p-7
                        rounded-3xl

                        bg-white/35 dark:bg-white/5
                        backdrop-blur-xl

                        border
                        border-slate-300/40
                        dark:border-white/10

                        hover:border-cyan-500/40
                        dark:hover:border-cyan-300/40

                        hover:bg-white/45
                        dark:hover:bg-white/[0.07]

                        hover:shadow-[0_0_30px_rgba(34,211,238,.12)]

                        transition-all duration-300
                      "
                    >
                      <div className="flex flex-col gap-2">
                        <h4
                          className="
                            text-lg md:text-xl
                            font-semibold
                            text-slate-900 dark:text-white
                          "
                        >
                          {ed.degree}
                        </h4>

                        <p className="text-cyan-600 dark:text-cyan-400">
                          {ed.institution}
                        </p>

                        <span className="text-sm text-slate-500 dark:text-gray-500">
                          {ed.year}
                        </span>
                      </div>

                      <p className="mt-4 text-slate-700 dark:text-gray-400 leading-7">
                        {ed.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================
            SKILLS
        ========================= */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mt-24 grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* CORE SKILLS */}
            <div className="lg:col-span-2">
              <span
                className="
                  inline-block
                  px-4 py-2
                  rounded-full

                  bg-cyan-400/10

                  border
                  border-cyan-500/20
                  dark:border-cyan-400/20

                  text-cyan-600
                  dark:text-cyan-400

                  text-sm
                  font-medium
                "
              >
                Core Skills
              </span>

              <h3
                className="
                  mt-4
                  text-2xl md:text-3xl
                  font-bold
                  text-slate-900 dark:text-white
                "
              >
                What I&apos;m good at
              </h3>

              <div className="mt-6 space-y-5">
                {coreSkills.map((s) => (
                  <div key={s.name}>
                    <div
                      className="
                        flex items-center justify-between
                        text-sm
                        text-slate-700 dark:text-gray-300
                      "
                    >
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>

                    <div
                      className="
                        mt-2
                        h-2
                        rounded-full

                        bg-slate-300/60
                        dark:bg-white/10

                        overflow-hidden
                      "
                    >
                      <div
                        className="
                          h-full
                          rounded-full

                          bg-gradient-to-r
                          from-cyan-400
                          to-blue-500
                        "
                        style={{
                          width: `${s.level}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TECH STACK */}
            <div className="lg:col-span-3">
              <span
                className="
                  inline-block
                  px-4 py-2
                  rounded-full

                  bg-cyan-400/10

                  border
                  border-cyan-500/20
                  dark:border-cyan-400/20

                  text-cyan-600
                  dark:text-cyan-400

                  text-sm
                  font-medium
                "
              >
                Tech Stack
              </span>

              <h3
                className="
                  mt-4
                  text-2xl md:text-3xl
                  font-bold
                  text-slate-900 dark:text-white
                "
              >
                Tools & Technologies
              </h3>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <div
                      key={group.title}
                      className="
                        premium-card
                        group

                        p-6
                        rounded-3xl

                        bg-white/35 dark:bg-white/5
                        backdrop-blur-xl

                        border
                        border-slate-300/40
                        dark:border-white/10

                        hover:border-cyan-500/40
                        dark:hover:border-cyan-300/40

                        hover:bg-white/45
                        dark:hover:bg-white/[0.07]

                        transition-all duration-300
                      "
                    >
                      {/* ICON */}
                      <div
                        className="
                          premium-card-icon

                          w-10 h-10
                          rounded-2xl

                          bg-cyan-400/10

                          border
                          border-cyan-500/20
                          dark:border-cyan-400/20

                          flex items-center justify-center

                          group-hover:bg-cyan-400
                          transition-all duration-300
                        "
                      >
                        <Icon
                          size={22}
                          className="
                            text-cyan-600
                            dark:text-cyan-400
                            group-hover:text-slate-950
                          "
                        />
                      </div>

                      {/* TITLE */}
                      <h4
                        className="
                          mt-5
                          text-lg
                          font-semibold
                          text-slate-900 dark:text-white
                        "
                      >
                        {group.title}
                      </h4>

                      {/* ITEMS */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="
                              px-3 py-1.5
                              rounded-full

                              text-xs md:text-xs

                              text-slate-700
                              dark:text-gray-300

                              bg-white/40
                              dark:bg-white/5

                              border
                              border-slate-300/40
                              dark:border-white/10
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default About;
