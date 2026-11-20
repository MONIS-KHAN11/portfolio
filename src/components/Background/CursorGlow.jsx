import { useEffect, useRef } from "react";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    if (!mediaQuery.matches) return;

    let animationFrame = null;
    let x = 0;
    let y = 0;

    const updateGlow = (event) => {
      x = event.clientX - 175;
      y = event.clientY - 175;

      if (animationFrame !== null) return;

      animationFrame = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        animationFrame = null;
      });
    };

    window.addEventListener("pointermove", updateGlow, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updateGlow);
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="cursor-glow pointer-events-none fixed left-0 top-0 z-20 h-[350px] w-[350px] rounded-full will-change-transform"
      style={{
        background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(6,182,212,0.18) 40%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  );
}

export default CursorGlow;
