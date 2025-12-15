import React, { useState } from "react";
import avatar from "../assets/avatar.png";

const links = [
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#about", label: "About", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <img
            src={avatar}
            alt="Logo"
            className="h-9 w-9 rounded-full border border-emerald-400/40 object-cover shadow-md"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 text-xs md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "text-emerald-300"
                    : "text-slate-400 hover:text-emerald-300"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 right-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-emerald-300 transition-transform duration-300 group-hover:scale-x-100 ${
                    isActive ? "scale-x-100" : ""
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right CTA / mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-200 shadow-sm hover:bg-emerald-500/20 transition md:inline-flex"
          >
            Available for work
          </a>

          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xs text-slate-200 md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-black/90 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 text-xs">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`uppercase tracking-[0.16em] py-1 ${
                  activeSection === link.id
                    ? "text-emerald-300"
                    : "text-slate-300"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-medium text-emerald-200"
            >
              Available for work
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
