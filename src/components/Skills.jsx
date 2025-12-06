import React from "react";
import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks / Libraries",
    items: [
      "React",
      "Next.js",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Mongoose",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Runtime",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Postman",
      "Vite",
      "Render",
      "Redux",
      "Supabase",
    ],
  },
];

const learningNow = ["GraphQL", "Docker", "AWS"];

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.23em] text-emerald-300/80">
          Skills
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
          Tech I work with
        </h2>
        <p className="mx-auto max-w-2xl text-xs text-slate-400">
          A focused MERN stack with an emphasis on clean REST APIs, solid
          authentication and responsive UIs. This list will keep growing as I
          learn and build more.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-6 rounded-3xl border border-white/10 bg-black/50 p-5 shadow-xl shadow-black/60"
      >
        {groups.map((group) => (
          <div key={group.title} className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.19em] text-slate-400">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillPill key={item}>{item}</SkillPill>
              ))}
            </div>
          </div>
        ))}

        <div className="space-y-2 border-t border-white/5 pt-3">
          <p className="text-[11px] uppercase tracking-[0.19em] text-slate-400">
            Currently exploring
          </p>
          <div className="flex flex-wrap gap-2">
            {learningNow.map((item) => (
              <SkillPill key={item} highlight>
                {item}
              </SkillPill>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SkillPill({ children, highlight }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${
        highlight
          ? "border-emerald-400/70 bg-emerald-500/10 text-emerald-100"
          : "border-white/12 bg-white/5 text-slate-100"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-emerald-300 via-slate-100 to-emerald-500" />
      {children}
    </span>
  );
}
