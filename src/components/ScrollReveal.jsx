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
        rootMargin: "0px 0px 96px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",

    down: visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5",

    left: visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5",

    right: visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5",

    scale: visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-[opacity,transform]
        duration-500
        ease-out
        ${directionClasses[direction] || directionClasses.up}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
