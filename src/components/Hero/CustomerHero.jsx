import { Globe, Smartphone, Monitor, Rocket, Search, Zap, TrendingUp, BriefcaseBusiness, LayoutDashboard, ShoppingCart, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { FaHandsClapping } from "react-icons/fa6";
import ScrollReveal from "../ScrollReveal";

const customerSkills = [
  {
    Icon: Globe,
    color: "text-cyan-500 dark:text-cyan-400",
    angle: 0,
  },
  {
    Icon: TrendingUp,
    color: "text-green-500 dark:text-green-400",
    angle: 45,
  },
  {
    Icon: Rocket,
    color: "text-violet-500 dark:text-violet-400",
    angle: 90,
  },
  {
    Icon: Search,
    color: "text-blue-500 dark:text-blue-400",
    angle: 135,
  },
  {
    Icon: Smartphone,
    color: "text-pink-500 dark:text-pink-400",
    angle: 180,
  },
  {
    Icon: Zap,
    color: "text-yellow-500 dark:text-yellow-400",
    angle: 225,
  },
  {
    Icon: Monitor,
    color: "text-sky-500 dark:text-sky-400",
    angle: 270,
  },
  {
    Icon: BriefcaseBusiness,
    color: "text-slate-700 dark:text-white",
    angle: 315,
  },
];

function CustomerHero() {
  return (
    <>
      <ScrollReveal direction="up">
        <section className="min-h-screen flex items-start lg:items-center py-24 sm:py-28 md:py-32 lg:py-0 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-8">
              <div>
                <div className="w-full max-w-xl lg:w-150 min-h-100 rounded-4xl bg-white/35 dark:bg-white/5 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 hover:border-cyan-400/40 dark:hover:border-cyan-300/40 shadow-lg transition-all duration-500 lg:-ml-20 mt-2 lg:mt-6 select-none premium-card">
                  <div className="flex items-center gap-3 mt-10 md:mt-16 ml-5 md:ml-8">
                    <FaHandsClapping className="text-cyan-600 dark:text-cyan-400 text-2xl md:text-3xl" />
                    <p className="text-cyan-700 dark:text-cyan-400 text-2xl md:text-3xl font-medium">Hello, I'm</p>
                  </div>
                  <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white ml-5 md:ml-8 italic transition-colors duration-300">Monis Khan</h1>
                  <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-slate-800 dark:text-gray-300 ml-5 md:ml-8 mr-5 md:mr-8 transition-colors duration-300">Digital Solutions That Grow Your Business</h2>

                  <p
                    className="mt-6 text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-slate-700 dark:text-gray-400 ml-5 md:ml-8 mr-5 md:mr-8 transition-colors duration-300"
                  >
                    I help businesses build modern, high-performance websites and digital experiences that attract customers, build trust and turn ideas into meaningful growth.
                  </p>
                </div>

                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full px-5 md:px-0">
                  <Link
                    to="/contact?quote=true"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 md:px-22 py-3 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-xl text-slate-800 dark:text-white font-medium border border-slate-300/40 dark:border-white/10 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,.5)] ml-0 lg:-ml-18"
                  >
                    Get Free Quote
                  </Link>

                  <Link
                    to="/service"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 md:px-18 py-3 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 text-slate-800 dark:text-white font-medium transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,.5)] ml-0 lg:ml-4"
                  >
                    View Services
                  </Link>
                </div>
              </div>

              <ScrollReveal direction="scale" delay={200}>
                <div
                  className="w-40 h-40 mr-0 lg:mr-30 relative scale-75 sm:scale-90 md:scale-100"
                >
                  {/* Center */}

                  <div
                    className="w-40 h-40 rounded-full bg-white/35 dark:bg-white/5 backdrop-blur-xl border border-cyan-400/30 dark:border-cyan-400/20 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,.25)] transition-all duration-500"
                  >
                    <Globe
                      size={70}
                      className="text-cyan-600 dark:text-cyan-400"
                    />
                  </div>

                  <div
                    className="absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite]"
                  >
                    <div className="relative w-40 h-40">
                      {customerSkills.map(({ Icon, color, angle }, index) => (
                        <div
                          key={index}
                          className="absolute top-1/2 left-1/2"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-180px)`,
                          }}
                        >
                          <div className="orbit-reverse">
                            <div
                              className="w-20 h-20 rounded-full bg-white/45 dark:bg-white/10 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,.20)] transition-all duration-300"
                            >
                              <Icon className={`${color} text-4xl`} />
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
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              {/* Heading */}

              <h2
                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white px-2 transition-colors duration-300"
              >
                What I Can Build For Your Business
              </h2>

              <p
                className="mt-5 md:mt-6 max-w-3xl mx-auto px-2 text-base sm:text-lg md:text-xl text-slate-700 dark:text-gray-400 leading-7 md:leading-8 transition-colors duration-300"
              >
                From business websites to custom web applications, I create digital solutions designed to look professional, perform smoothly and help your business grow online.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16 px-4 md:px-0 justify-items-center"
          >
            {/* ================= BUSINESS WEBSITES ================= */}

            <ScrollReveal direction="left">
              <div
                className="group premium-card w-full max-w-2xl min-h-60 h-auto rounded-4xl bg-white/35 dark:bg-white/5 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 p-6 md:p-10 flex flex-col items-center text-center"
              >
                <div
                  className="premium-card-icon w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400/20 transition-all duration-300"
                >
                  <Globe
                    size={30}
                    className="text-cyan-600 dark:text-cyan-400"
                  />
                </div>

                <h3
                  className="mt-4 text-3xl font-bold text-slate-900 dark:text-white"
                >
                  Business Websites
                </h3>

                <p
                  className="mt-2 text-slate-700 dark:text-gray-400 text-lg leading-8 text-center"
                >
                  Professional, responsive websites that showcase your brand, build customer trust and help your business stand out online.
                </p>
              </div>
            </ScrollReveal>

            {/* ================= E-COMMERCE ================= */}

            <ScrollReveal direction="right" delay={120}>
              <div
                className="group premium-card w-full max-w-2xl min-h-60 h-auto rounded-4xl bg-white/35 dark:bg-white/5 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 p-6 md:p-10 flex flex-col items-center text-center"
              >
                <div
                  className="premium-card-icon w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400/20 transition-all duration-300"
                >
                  <ShoppingCart
                    size={30}
                    className="text-cyan-600 dark:text-cyan-400"
                  />
                </div>

                <h3
                  className="mt-4 text-2xl md:text-3xl font-bold text-slate-900 dark:text-white"
                >
                  E-Commerce Solutions
                </h3>

                <p
                  className="mt-4 text-slate-700 dark:text-gray-400 text-base md:text-lg leading-7 md:leading-8 text-center"
                >
                  Modern online stores designed to provide a smooth shopping experience and help businesses sell their products online.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={150}>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-8 px-4 md:px-0"
            >
              <div
                className="group premium-card w-full max-w-2xl min-h-60 h-auto rounded-4xl bg-white/35 dark:bg-white/5 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 p-6 md:p-10 flex flex-col items-center text-center"
              >
                <div
                  className="premium-card-icon w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                >
                  <LayoutDashboard
                    size={26}
                    className="text-cyan-600 dark:text-cyan-400"
                  />
                </div>

                <h3
                  className="mt-5 text-xl font-semibold text-slate-900 dark:text-white"
                >
                  Web Applications
                </h3>

                <p
                  className="mt-3 text-slate-700 dark:text-gray-400 text-sm leading-6 text-center"
                >
                  Custom web applications built around your business needs, with smooth user experiences and scalable functionality.
                </p>
              </div>

              <div
                className="group premium-card w-full rounded-4xl bg-white/35 dark:bg-white/5 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 p-6 flex flex-col items-center text-center"
              >
                <div
                  className="premium-card-icon w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                >
                  <Palette
                    size={26}
                    className="text-cyan-600 dark:text-cyan-400"
                  />
                </div>

                <h3
                  className="mt-5 text-xl font-semibold text-slate-900 dark:text-white"
                >
                  Modern UI & Design
                </h3>

                <p
                  className="mt-3 text-slate-700 dark:text-gray-400 text-sm leading-6 text-center"
                >
                  Clean, modern and user-friendly interfaces that make your website look professional and easy to use.
                </p>
              </div>

              <div
                className="group premium-card w-full rounded-4xl bg-white/35 dark:bg-white/5 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 p-6 flex flex-col items-center text-center"
              >
                <div
                  className="premium-card-icon w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                >
                  <Zap
                    size={26}
                    className="text-cyan-600 dark:text-cyan-400"
                  />
                </div>

                <h3
                  className="mt-5 text-xl font-semibold text-slate-900 dark:text-white"
                >
                  Performance & SEO
                </h3>
                <p className="mt-3 text-slate-700 dark:text-gray-400 text-sm leading-6 text-center">
                  Fast, responsive and search-friendly websites optimized for better performance and a stronger
                  <br />
                  online presence.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <div className="text-center border-b border-slate-300/40 dark:border-white/10 pb-8 mb-8 transition-colors duration-500">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mt-12 md:mt-18 font-bold text-slate-900 dark:text-white px-4">Ready to Grow Your Business Online?</h2>
          <p className="mt-4 mx-auto max-w-2xl px-4 text-base sm:text-lg md:text-xl text-slate-700 dark:text-gray-400 leading-7 md:leading-8">Letâ€™s turn your idea into a modern digital experience that helps your business attract customers and stand out online.</p>
          <Link to="/contact?quote=true" className="inline-flex items-center justify-center w-auto px-10 md:px-18 py-4 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-xl text-slate-800 dark:text-white font-medium border border-cyan-400/30 dark:border-cyan-400/20 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,.5)] mt-4 mb-4">
            Start Your Project
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}

export default CustomerHero;
