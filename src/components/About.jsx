import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.23em] text-emerald-300/80">
          About
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
          A bit about me
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid gap-6 rounded-3xl border border-white/10 bg-black/60 p-5 shadow-xl shadow-black/70 md:grid-cols-[1.6fr,1.2fr]"
      >
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            I&apos;m a full-stack developer who enjoys building end-to-end web
            applications—everything from MongoDB schemas and REST APIs to
            responsive UIs in React. I like taking ideas from a note in my phone
            to something real that people can click and use.
          </p>
          <p>
            I hold a{" "}
            <span className="font-semibold text-slate-100">
              B.Sc in Computer Science (2025)
            </span>{" "}
            and I&apos;m especially interested in the MERN stack, authentication
            flows and real dashboards. Next up for me: going deeper into DevOps,
            Web3 and eventually more AI-driven projects.
          </p>
          <p>
            When I&apos;m not shipping code, I&apos;m probably watching anime,
            following sports highlights or in the gym trying to stay athletic.
          </p>
        </div>

        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-sm font-semibold text-slate-100">Quick facts</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>💻 Built 30+ projects across frontend and backend.</li>
            <li>🧠 Wanna learn DevOps &amp; Web3.</li>
            <li>🏋️‍♂️ Into anime, sports, gym and staying athletic.</li>
            <li>🚀 Actively looking for opportunities to gain experience.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
