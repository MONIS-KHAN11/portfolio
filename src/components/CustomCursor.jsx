import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const lastHovering = useRef(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 768px)");

    if (!mediaQuery.matches) return;

    const moveCursor = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      }

      const interactive = event.target.closest("a, button, [role='button'], input, textarea, select");
      const isHovering = !!interactive;

      if (isHovering !== lastHovering.current) {
        lastHovering.current = isHovering;
        setHovering(isHovering);
      }
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });

    return () => {
      window.removeEventListener("pointermove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`
        custom-cursor
        fixed
        top-0
        left-0
        rounded-full
        pointer-events-none
        z-[9999]
        bg-cyan-500
        will-change-transform
        transition-[width,height,opacity,box-shadow]
        duration-150
        ease-out

        ${hovering ? "w-8 h-8 opacity-40 shadow-[0_0_25px_rgba(34,211,238,0.9)]" : "w-4 h-4 opacity-100 shadow-[0_0_12px_rgba(34,211,238,0.8)]"}
      `}
    />
  );
}

export default CustomCursor;
