import React from "react";

import img from "../assets/avator.png";
const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-500/10 text-sm font-semibold text-emerald-300 shadow-md">
            E
          </div>
          <span className="text-sm font-medium tracking-wide text-slate-200">
            Ehsaan
          </span>
        </a>

        <div className="hidden items-center gap-6 text-xs md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-emerald-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-200 shadow-sm hover:bg-emerald-500/20 transition"
        >
          Available for work
        </a>
      </nav>
    </header>
  );
}
