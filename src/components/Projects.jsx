import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Daily To-Do List",
    tagline: "Stay on top of your day with authenticated, date-based tasks.",
    bullets: [
      "Full CRUD to add, edit, complete and delete tasks persisted in MongoDB.",
      "Tasks are grouped and saved by date so you can see your daily progress.",
      "Login required so each user has their own private task space.",
    ],
    stack: "React · Node.js · Express · MongoDB · Mongoose · JWT",
    status: "In Progress",
  },
  {
    name: "WorldRev",
    tagline:
      "Map-based travel reviews where every place you visit becomes a pin.",
    bullets: [
      "Leaflet map integration to drop pins for locations you've visited.",
      "Attach ratings, notes and visit dates to build a travel history.",
      "Redux handles filters, active locations and review form state.",
    ],
    stack: "React · Redux · Node.js · Express · MongoDB · Mongoose · Leaflet",
    status: "In Progress",
  },
  {
    name: "JWT Auth API",
    tagline: "Production-ready authentication boilerplate for MERN apps.",
    bullets: [
      "Implements signup, login, logout, refresh tokens and protected routes.",
      "Password hashing, validation and role-based access ready to plug in.",
      "Reusable starter for future full-stack projects with secure auth.",
    ],
    stack: "Node.js · Express · MongoDB · Mongoose · JWT",
    status: "Featured",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.23em] text-emerald-300/80">
          Projects
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
          Selected work
        </h2>
        <p className="mx-auto max-w-2xl text-xs text-slate-400">
          A few projects that show how I think about building real products:
          authentication, maps, and everyday CRUD apps that actually solve
          problems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-5 shadow-xl shadow-black/70 transition hover:border-emerald-400/70"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-400/10 opacity-0 transition group-hover:opacity-100" />

            <div className="relative space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-50">
                  {project.name}
                </h3>
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-0.5 text-[10px] uppercase tracking-[0.16em] ${
                    project.status === "Featured"
                      ? "border-emerald-400/80 bg-emerald-500/10 text-emerald-100"
                      : "border-amber-400/70 bg-amber-500/10 text-amber-100"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-xs text-slate-300">{project.tagline}</p>

              <ul className="space-y-1.5 text-xs text-slate-400">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] h-1 w-1 rounded-full bg-slate-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-1 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Stack: </span>
                {project.stack}
              </p>

              <div className="flex flex-wrap gap-3 pt-3 text-[11px]">
                <a
                  href="#"
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-100 transition hover:bg-white/10"
                >
                  Live (soon)
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/10 bg-transparent px-3 py-1 text-slate-300 transition hover:bg-white/5"
                >
                  GitHub (soon)
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
