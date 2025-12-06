import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#020617] to-black text-slate-100">
      <Navbar />

      {/* <main className="mx-auto flex max-w-5xl flex-col gap-24 px-4 pb-24 pt-28"> */}
      <main className="mx-auto flex max-w-5xl flex-col gap-36 px-4 pb-36 pt-28">
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
