import React from "react";
import { motion } from "framer-motion";
import todoImg from "../assets/projects/to_do.png";
import worldrevImg from "../assets/projects/map.png";
import jwtImg from "../assets/projects/jwt_api.png";

const projects = [
  {
    name: "Daily To-Do List",
    image: todoImg,
    tagline: "Authenticated to-do list with date-based progress tracking.",
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
    image: worldrevImg,
    tagline: "Map-based travel reviews for places you actually visited.",
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
    image: jwtImg,
    tagline: "Production-ready authentication boilerplate for MERN apps.",
    bullets: [
      "Signup, login, logout, refresh tokens and protected routes.",
      "Password hashing, validation and role-based access built-in.",
      "Designed as a reusable starter for future full-stack projects.",
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
          A few projects that show how I think about building products:
          authentication, maps, and everyday tools that people can actually use.
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
            // className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-xl shadow-black/70 transition hover:border-emerald-400/70 hover:shadow-emerald-500/20"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-xl transition hover:border-emerald-400/70"
          >
            {/* Thumbnail area */}
            {/* <div className="relative h-32 w-full overflow-hidden bg-gradient-to-tr from-emerald-500/20 via-slate-900 to-black">
              <div className="absolute inset-0 scale-110 bg-[radial-gradient(circle_at_10%_0%,rgba(16,185,129,0.4),transparent_50%),radial-gradient(circle_at_90%_100%,rgba(52,211,153,0.5),transparent_55%)] opacity-70 transition-transform duration-500 group-hover:scale-100" />
              <div className="relative flex h-full items-end justify-between px-4 pb-3">
                <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] text-emerald-100">
                  {project.name}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] ${
                    project.status === "Featured"
                      ? "border-emerald-400/80 bg-emerald-500/15 text-emerald-100"
                      : "border-amber-400/70 bg-amber-500/10 text-amber-100"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div> */}
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title + status */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] text-emerald-100">
                  {project.name}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] ${
                    project.status === "Featured"
                      ? "border-emerald-400/80 bg-emerald-500/15 text-emerald-100"
                      : "border-amber-400/70 bg-amber-500/10 text-amber-100"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative space-y-3 p-5">
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
