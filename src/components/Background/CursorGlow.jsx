import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-20 h-[350px] w-[350px] rounded-full transition-transform duration-75"
      style={{
        left: position.x - 175,
        top: position.y - 175,
        background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(6,182,212,0.18) 40%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  );
}

export default CursorGlow;
