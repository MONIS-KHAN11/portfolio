import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const animationFrame = useRef(null);

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) return;

    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const target = e.target;

      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select",
      );

      setHovering(!!interactive);
    };

    const animateCursor = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.18;

      current.current.y += (mouse.current.y - current.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(
            ${current.current.x}px,
            ${current.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      animationFrame.current = requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", moveCursor, {
      passive: true,
    });

    animationFrame.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`
        fixed
        top-0
        left-0
        rounded-full
        pointer-events-none
        z-[9999]
        bg-cyan-500
        will-change-transform
        transition-all
        duration-200
        ease-out

        ${
          hovering
            ? "w-8 h-8 opacity-40 shadow-[0_0_25px_rgba(34,211,238,0.9)]"
            : "w-4 h-4 opacity-100 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        }
      `}
    />
  );
}

export default CustomCursor;
