import { useState } from "react";
import { IoMdMailUnread, IoIosSend } from "react-icons/io";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function Contact() {
  const location = useLocation();

  const isQuoteRequest = new URLSearchParams(location.search).get("quote") === "true";

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const response = await fetch("https://formsubmit.co/ajax/Khanmonis77929@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Portfolio Contact Message",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      setShowSuccess(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });

      setTimeout(() => setShowSuccess(false), 3500);
    } catch (error) {
      alert("Message send nahi hua. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center py-14 z-50 mt-16">
      <div className="max-w-5xl mx-auto w-full px-6">
        {/* =========================
            HEADING
        ========================= */}

        <ScrollReveal direction="up">
          <div className="text-center mb-8">
            <h1
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
            >
              Let's Work Together
            </h1>

            <p className="mt-3 text-lg text-slate-700 dark:text-gray-400">Have a project or idea in mind? Let's talk.</p>
          </div>
        </ScrollReveal>

        {/* =========================
            CONTACT CONTENT
        ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* =========================
              LEFT SIDE
          ========================= */}

          <ScrollReveal direction="left">
            <div
              className="h-full rounded-3xl bg-white/35 dark:bg-white/5 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 p-6 transition-all duration-300 premium-card"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>

              <p
                className="mt-3 text-base text-slate-700 dark:text-gray-400 leading-7"
              >
                Whether you have a project idea, a business requirement, or simply want to discuss an opportunity, feel free to reach out.
              </p>

              <div className="mt-6 space-y-6">
                {/* ================= EMAIL ================= */}

                <a
                  href="mailto:Khanmonis77929@gmail.com"
                  className="flex items-center gap-3 rounded-2xl bg-white/35 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 p-3 transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-300/40 hover:shadow-[0_0_20px_rgba(34,211,238,.16)] premium-card"
                >
                  <div
                    className="premium-card-icon w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-400/20 flex items-center justify-center shrink-0"
                  >
                    <IoMdMailUnread size={20} className="text-cyan-600 dark:text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500">Email</p>

                    <p className="text-sm text-slate-900 dark:text-white mt-1 break-all">Khanmonis77929@gmail.com</p>
                  </div>
                </a>

                {/* ================= LINKEDIN ================= */}

                <a
                  href="https://www.linkedin.com/in/monis-khan-724887407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white/35 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 p-3 transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-300/40 hover:shadow-[0_0_20px_rgba(34,211,238,.16)] premium-card"
                >
                  <div
                    className="premium-card-icon w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-400/20 flex items-center justify-center shrink-0"
                  >
                    <FaLinkedinIn size={20} className="text-cyan-600 dark:text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500">LinkedIn</p>

                    <p className="text-sm text-slate-900 dark:text-white mt-1">Connect with me</p>
                  </div>
                </a>

                {/* ================= GITHUB ================= */}

                <a
                  href="https://github.com/MONIS-KHAN11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white/35 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 p-3 transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-300/40 hover:shadow-[0_0_20px_rgba(34,211,238,.16)] premium-card"
                >
                  <div
                    className="premium-card-icon w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-400/20 flex items-center justify-center shrink-0"
                  >
                    <FaGithub size={20} className="text-cyan-600 dark:text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500">GitHub</p>

                    <p className="text-sm text-slate-900 dark:text-white mt-1">View my work</p>
                  </div>
                </a>

                {/* ================= INSTAGRAM ================= */}

                <a
                  href="https://www.instagram.com/thekhan.stack/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white/35 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 p-3 transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-300/40 hover:shadow-[0_0_20px_rgba(34,211,238,.16)] premium-card"
                >
                  <div
                    className="premium-card-icon w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-400/20 flex items-center justify-center shrink-0"
                  >
                    <FaInstagram size={20} className="text-cyan-600 dark:text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-500">Instagram</p>

                    <p className="text-sm text-slate-900 dark:text-white mt-1">Follow me</p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <ScrollReveal direction="right" delay={150}>
            <div
              className="relative h-full rounded-3xl bg-white/35 dark:bg-white/5 backdrop-blur-xl border border-slate-300/40 dark:border-white/10 p-5 md:p-8 premium-card"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send a Message</h2>

              <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
                {/* =========================
                    NAME + PHONE
                ========================= */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* NAME */}

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2"
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      className="w-full rounded-xl bg-white/45 dark:bg-slate-950/40 border border-slate-300/50 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none focus:border-cyan-500/60 dark:focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                    />

                    {errors.name && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name}</p>}
                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2"
                    >
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        const onlyNumbers = e.target.value.replace(/\D/g, "");

                        setFormData((prev) => ({
                          ...prev,
                          phone: onlyNumbers,
                        }));

                        setErrors((prev) => ({
                          ...prev,
                          phone: "",
                        }));
                      }}
                      placeholder="10-digit phone number"
                      required
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      autoComplete="tel"
                      title="Please enter a valid 10-digit phone number"
                      className="w-full rounded-xl bg-white/45 dark:bg-slate-950/40 border border-slate-300/50 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none focus:border-cyan-500/60 dark:focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                    />

                    {errors.phone && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.phone}</p>}
                  </div>
                </div>

                {/* =========================
                    EMAIL + SERVICE
                ========================= */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* EMAIL */}

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl bg-white/45 dark:bg-slate-950/40 border border-slate-300/50 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none focus:border-cyan-500/60 dark:focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                    />

                    {errors.email && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>}
                  </div>

                  {/* SERVICE */}

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2"
                    >
                      Service Interested In
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`
                        w-full
                        rounded-xl

                        bg-white/45
                        dark:bg-slate-950/40

                        border
                        border-slate-300/50
                        dark:border-white/10

                        px-4
                        py-3

                        text-sm

                        outline-none

                        transition-all

                        focus:border-cyan-500/60
                        dark:focus:border-cyan-400/60

                        focus:ring-1
                        focus:ring-cyan-400/30

                        ${formData.service ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-gray-500"}
                      `}
                    >
                      <option value="" disabled className="bg-white dark:bg-slate-900 text-slate-500">
                        Select a service
                      </option>

                      <option value="portfolio" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                        Portfolio Website
                      </option>

                      <option value="business" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                        Business Website
                      </option>

                      <option value="ecommerce" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                        E-commerce Website
                      </option>

                      <option value="uiux" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                        UI/UX Design
                      </option>

                      <option value="other" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                        Other
                      </option>
                    </select>

                    {errors.service && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.service}</p>}
                  </div>
                </div>

                {/* =========================
                    ESTIMATED BUDGET
                ========================= */}

                {isQuoteRequest && (
                  <ScrollReveal direction="up">
                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2"
                      >
                        Estimated Budget <span className="normal-case text-slate-500 dark:text-gray-500">(Optional)</span>
                      </label>

                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`
                          w-full
                          rounded-xl

                          bg-white/45
                          dark:bg-slate-950/40

                          border
                          border-slate-300/50
                          dark:border-white/10

                          px-4
                          py-3

                          text-sm

                          outline-none

                          transition-all

                          focus:border-cyan-500/60
                          dark:focus:border-cyan-400/60

                          focus:ring-1
                          focus:ring-cyan-400/30

                          ${formData.budget ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-gray-500"}
                        `}
                      >
                        <option value="" disabled className="bg-white dark:bg-slate-900 text-slate-500">
                          Select your budget range
                        </option>

                        <option value="under-10k" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                          Under â‚¹14,999
                        </option>

                        <option value="10k-25k" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                          â‚¹14,999 - â‚¹24,999
                        </option>

                        <option value="25k-50k" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                          â‚¹24,999 - â‚¹49,999
                        </option>

                        <option value="50k-plus" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                          â‚¹49,999 +
                        </option>
                      </select>
                    </div>
                  </ScrollReveal>
                )}

                {/* =========================
                    MESSAGE
                ========================= */}

                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    minLength={10}
                    className="w-full rounded-xl bg-white/45 dark:bg-slate-950/40 border border-slate-300/50 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none resize-none focus:border-cyan-500/60 dark:focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                  />

                  {errors.message && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.message}</p>}
                </div>

                {/* =========================
                    SUBMIT BUTTON
                ========================= */}

                <ScrollReveal direction="up" delay={100}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full

                      flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl
                      border

                      py-3

                      font-semibold

                      transition-all duration-300

                      ${
                        isSubmitting
                          ? `
                            cursor-not-allowed

                            bg-cyan-500/40
                            border-cyan-400/20

                            text-slate-900
                          `
                          : `
                            bg-white/40
                            dark:bg-white/5

                            border-slate-300/50
                            dark:border-white/10

                            text-slate-900
                            dark:text-white

                            hover:bg-cyan-400
                            hover:text-slate-950

                            hover:border-cyan-400

                            hover:shadow-[0_0_25px_rgba(34,211,238,.45)]

                            hover:scale-[1.01]
                          `
                      }
                    `}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}

                    {!isSubmitting && <IoIosSend size={17} />}
                  </button>
                </ScrollReveal>
              </form>

              {/* =========================
                  SUCCESS POPUP
              ========================= */}

              {showSuccess && (
                <div
                  className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm"
                >
                  <div
                    className="mx-6 rounded-2xl border border-cyan-500/30 dark:border-cyan-400/30 bg-white/90 dark:bg-slate-900 p-6 text-center shadow-[0_0_30px_rgba(34,211,238,.25)]"
                  >
                    <div
                      className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-2xl text-cyan-600 dark:text-cyan-400"
                    >
                      âœ“
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>

                    <p className="mt-2 text-sm text-slate-600 dark:text-gray-400">Thanks! I will get back to you soon.</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
