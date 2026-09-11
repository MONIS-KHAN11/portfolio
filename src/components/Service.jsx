import { useState } from "react";
import { Globe, ShoppingCart, LayoutDashboard, UserRound, Palette, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Business Website",
    description: "A professional website that helps your business build trust and attract more customers.",
    Icon: Globe,
    features: ["Modern responsive design", "Business-focused pages", "Mobile friendly layout", "Contact & enquiry sections"],
  },
  {
    title: "E-commerce Website",
    description: "Sell your products online with a smooth, secure and user-friendly shopping experience.",
    Icon: ShoppingCart,
    features: ["Product listing & categories", "Shopping cart functionality", "Responsive product pages", "Secure checkout integration"],
  },
  {
    title: "Custom Web Application",
    description: "Custom dashboards, booking systems and digital solutions built around your workflow.",
    Icon: LayoutDashboard,
    features: ["Custom dashboard", "User authentication", "API integration", "Scalable architecture"],
  },
  {
    title: "Portfolio Website",
    description: "Showcase your skills, projects and experience with a modern personal portfolio.",
    Icon: UserRound,
    features: ["Modern portfolio design", "Project showcase", "Responsive layout", "Contact integration"],
  },
  {
    title: "UI/UX Design",
    description: "Clean and intuitive designs focused on a better experience for your customers.",
    Icon: Palette,
    features: ["Modern UI design", "User-friendly layouts", "Responsive interfaces", "Design consistency"],
  },
  {
    title: "Maintenance & Support",
    description: "Regular updates, fixes and support to keep your website running smoothly.",
    Icon: Wrench,
    features: ["Bug fixing", "Content updates", "Performance improvements", "Technical support"],
  },
];

function Service() {
  const [activeService, setActiveService] = useState(null);

  const handleCardClick = (title) => {
    setActiveService(activeService === title ? null : title);
  };

  return (
    <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* =========================
            HEADING
        ========================= */}
        <ScrollReveal direction="up">
          <div className="text-center">
            <p className="text-cyan-900 dark:text-cyan-300 text-sm sm:text-base font-medium tracking-widest uppercase">What I Offer</p>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">My Services</h1>

            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-7 text-slate-700 dark:text-gray-400">Digital solutions designed to help businesses, brands and individuals build a strong online presence.</p>
          </div>
        </ScrollReveal>

        {/* =========================
            SERVICES
        ========================= */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map(({ title, description, Icon, features }, index) => (
            <ScrollReveal key={title} direction="up" delay={index * 100}>
              <div
                onClick={() => handleCardClick(title)}
                className={`
                    premium-card
                    group relative min-h-80 overflow-hidden rounded-3xl

                    bg-white/35 dark:bg-white/5
                    backdrop-blur-xl

                    border border-slate-300/40 dark:border-white/10

                    p-6 cursor-pointer

                    transition-all duration-300

                    hover:border-cyan-500/40
                    dark:hover:border-cyan-300/40

                    hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]

                    ${
                      activeService === title
                        ? `
                          border-cyan-500/40
                          dark:border-cyan-300/40
                          shadow-[0_0_30px_rgba(34,211,238,0.15)]
                        `
                        : ""
                    }
                  `}
              >
                {/* =========================
                      NORMAL CARD
                  ========================= */}
                <div
                  className={`
                      h-full flex flex-col
                      transition-all duration-300

                      ${activeService === title ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0"}

                      md:group-hover:opacity-0
                      md:group-hover:-translate-y-5
                    `}
                >
                  {/* Icon */}
                  <div
                    className="premium-card-icon w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-300/20 flex items-center justify-center"
                  >
                    <Icon
                      size={28}
                      className="text-cyan-600 dark:text-cyan-300 sm:w-8 sm:h-8"
                    />
                  </div>

                  {/* Title */}
                  <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">{title}</h2>

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-base leading-6 text-slate-700 dark:text-gray-400">{description}</p>

                  {/* Bottom */}
                  <div className="mt-auto pt-6">
                    <span className="text-sm text-cyan-600 dark:text-cyan-300">View Details â†’</span>
                  </div>
                </div>

                {/* =========================
                      DETAIL CARD
                  ========================= */}
                <div
                  className={`
                      absolute inset-0

                      flex flex-col justify-between

                      rounded-3xl

                      bg-blue-50/95
                      dark:bg-slate-950/95

                      p-6

                      border border-transparent
                      dark:border-transparent

                      transition-all duration-300

                      ${activeService === title ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"}

                      md:opacity-0
                      md:translate-y-8
                      md:pointer-events-none

                      md:group-hover:opacity-100
                      md:group-hover:translate-y-0
                      md:group-hover:pointer-events-auto
                    `}
                >
                  <div>
                    {/* Detail Title */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-300/20 flex items-center justify-center shrink-0"
                      >
                        <Icon size={22} className="text-cyan-600 dark:text-cyan-300" />
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
                    </div>

                    {/* Features */}
                    <div className="mt-6 space-y-3">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div
                            className="mt-1 w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0"
                          >
                            <span className="text-cyan-600 dark:text-cyan-300 text-xs">âœ“</span>
                          </div>

                          <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote Button */}
                  <Link
                    to="/contact?quote=true"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-6 w-full py-3 rounded-xl bg-cyan-400 text-slate-950 text-center font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}
        <ScrollReveal direction="up" delay={200}>
          <div
            className="premium-card mt-14 sm:mt-16 rounded-3xl border border-slate-300/40 dark:border-white/10 bg-white/35 dark:bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Have a project in mind?</h2>

            <p
              className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-slate-700 dark:text-gray-400 leading-6"
            >
              Let's discuss your idea and create a modern digital solution that fits your business needs.
            </p>

            <Link
              to="/contact?quote=true"
              className="inline-flex mt-6 px-7 sm:px-8 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              Start a Project
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Service;
