import { useEffect, useState } from "react";
import "./SplashScreen.css";

const particles = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: `${Math.random() * 3 + 1}px`,
  delay: `${Math.random() * 1.5}s`,
  duration: `${Math.random() * 1.5 + 0.8}s`,
}));

function SplashScreen({ onComplete }) {
  const [text, setText] = useState("");
  const [showRole, setShowRole] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [exit, setExit] = useState(false);

  const name = "MOHAMMED MONIS KHAN";

  useEffect(() => {
    let index = 0;
    let typingInterval;

    // Start typing
    const typingStart = setTimeout(() => {
      typingInterval = setInterval(() => {
        index += 1;

        setText(name.slice(0, index));

        if (index >= name.length) {
          clearInterval(typingInterval);

          setTimeout(() => {
            setShowRole(true);
          }, 200);
        }
      }, 75);
    }, 500);

    // Glitch near the end
    const glitchTimer = setTimeout(() => {
      setGlitch(true);
    }, 2150);

    // Exit splash
    const exitTimer = setTimeout(() => {
      setExit(true);

      setTimeout(() => {
        onComplete();
      }, 700);
    }, 2700);

    return () => {
      clearTimeout(typingStart);
      clearTimeout(glitchTimer);
      clearTimeout(exitTimer);

      if (typingInterval) {
        clearInterval(typingInterval);
      }
    };
  }, [onComplete]);

  return (
    <div className={`splash-screen ${exit ? "splash-exit" : ""}`}>
      {/* Background */}
      <div className="splash-background" />

      {/* Glitch particles */}
      <div className="particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Center glow */}
      <div className="center-glow" />

      {/* Main */}
      <div className="splash-content">
        {/* Energy Core */}
        <div className="energy-core">
          <div className="energy-ring ring-one" />
          <div className="energy-ring ring-two" />

          <div className="energy-point" />
        </div>

        {/* Name */}
        <div
          className={`splash-name ${glitch ? "name-glitch" : ""}`}
          data-text={text}
        >
          {text}
          <span className="cursor-line">|</span>
        </div>

        {/* Role */}
        <div className={`splash-role ${showRole ? "role-visible" : ""}`}>
          FULL STACK DEVELOPER
        </div>
      </div>

      {/* CRT scan lines */}
      <div className="scan-lines" />
    </div>
  );
}

export default SplashScreen;
