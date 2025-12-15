import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[70vh] flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        {/* Avatar */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-emerald-500/40 via-emerald-400/10 to-transparent blur-xl opacity-70" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black text-3xl font-semibold text-slate-100 shadow-2xl">
            <img
              // src={img}
              src="/src/assets/image.png"
              alt="Ehsaan"
              className="h-20 w-20 rounded-[1.5rem] object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-300/80">
            Software · Full-Stack · MERN
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Hey, I&apos;m{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-slate-50 to-emerald-400 bg-clip-text text-transparent">
              Ehsaan
            </span>
            .
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-300">
            Full-stack developer crafting responsive, scalable apps from
            database to UI.{" "}
            <span className="font-medium text-slate-100">
              Actively looking for full-stack roles, open for freelance projects
            </span>{" "}
            and always building cool side projects.
          </p>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3 text-[11px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/15 px-4 py-1 text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-slate-200">
            Based in Shirdi, Maharashtra
          </span>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 pt-2"
        >
          <a
            href="#projects"
            className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
          >
            View Projects
          </a>
          <a
            href="/rahilp4Code_Resume.pdf" // resume link later
            download
            className="rounded-full border border-white/15 bg-transparent px-6 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/5"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
