import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Background from "./components/Background/Background";
import HeroButton from "./components/Hero/HeroButtons";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import wallpaper from "./assets/Images/wallpaper.jpeg";
import CustomCursor from "./components/CustomCursor";
import Service from "./components/Service";
import ProjectShowcase from "./components/ProjectShowcase";
import About from "./components/About";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "developer";
  });

  const handleModeChange = (newMode) => {
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  return (
    <>
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Main Website */}
      <BrowserRouter>
        <CustomCursor />

        <Background wallpaper={wallpaper}>
          <Navbar mode={mode} setMode={handleModeChange} />

          <Routes>
            <Route path="/" element={<HeroButton mode={mode} />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/service" element={<Service />} />

            <Route path="/projects" element={<ProjectShowcase />} />

            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </Background>
      </BrowserRouter>
    </>
  );
}

export default App;
