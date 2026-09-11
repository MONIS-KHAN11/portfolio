import { useEffect, useRef, useState } from "react";

function ScrollReveal({ children, className="", direction = "up", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",

    down: visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10",

    left: visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",

    right: visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",

    scale: visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all
        duration-700
        ease-out
        will-change-transform
        ${directionClasses[direction] || directionClasses.up}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
