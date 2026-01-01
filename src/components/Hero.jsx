import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import avatar from "../assets/portfolio.png";

const Hero = () => {
  const [showHey, setShowHey] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Intro timing
    const t1 = setTimeout(() => setShowHey(true), 200);
    const t2 = setTimeout(() => setShowWave(true), 700);
    const t3 = setTimeout(() => setShowHero(true), 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // When hero shows, remove intro
  useEffect(() => {
    if (showHero) {
      setShowWave(false);
      setShowHey(false);
    }
  }, [showHero]);

  return (
    <section className="min-h-screen relative">
      <div className="flex items-center justify-center max-w-7xl mx-auto px-4 pt-20 md:pt-24">
        {/* INTRO OVERLAY */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out
            ${
              showHey
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-y-3 pointer-events-none"
            }`}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 text-center">
            Hey there{" "}
            <span
              className={`inline-block origin-bottom-right ${
                showWave ? "animate-wave" : ""
              }`}
            >
              👋
            </span>
          </h2>
        </div>

        {/* HERO CONTENT */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700
            ${
              showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* Avatar */}
          <div className="mb-10">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-lg">
                <img
                  src={avatar}
                  alt="Syafiq avatar"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full shadow-md" />
            </div>
          </div>

          {/* Name */}
          <h2 className="text-xl md:text-2xl font-medium text-slate-600 mb-2 text-center">
            Hi, I'm Syafiq
          </h2>

          {/* Role */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 text-center text-balance">
            Junior Backend Developer
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-10 text-center text-balance leading-relaxed max-w-3xl">
            Building robust APIs and database solutions with clean, maintainable
            code
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-3 text-lg font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 text-lg font-medium rounded-md border border-slate-300 text-slate-800 hover:bg-slate-100 transition"
            >
              Get In Touch
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 justify-center">
            <a
              href="https://github.com/angelfila2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-3 rounded-full hover:bg-slate-100 transition bg-gray-200"
              aria-label="GitHub"
            >
              <Github className="h-7 w-7 sm:h-5 sm:w-5" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-3 rounded-full hover:bg-slate-100 transition bg-gray-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7 sm:h-5 sm:w-5" />
            </a>

            <a
              href="mailto:syafiq2023@gmail.com"
              className="p-4 sm:p-3 rounded-full hover:bg-slate-100 transition bg-gray-200"
              aria-label="Email"
            >
              <Mail className="h-7 w-7 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
