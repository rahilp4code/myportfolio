import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("top");

  // Simple loader timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  // Scroll spy for active nav item
  useEffect(() => {
    const sectionIds = ["top", "skills", "projects", "about", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: 0.35,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#020617] to-black text-slate-100">
      {/* Loader overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 animate-pulse rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/50" />
            <p className="text-xs tracking-[0.22em] text-slate-400 uppercase">
              Loading portfolio
            </p>
          </div>
        </div>
      )}

      <Navbar activeSection={activeSection} />

      <main className="mx-auto flex max-w-5xl flex-col gap-32 px-4 pb-32 pt-28">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Ehsaan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
