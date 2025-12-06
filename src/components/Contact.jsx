import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.23em] text-emerald-300/80">
          Contact
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
          Let&apos;s build something
        </h2>
        <p className="mx-auto max-w-2xl text-xs text-slate-400">
          Open to full-time roles, internships and freelance work. Feel free to
          reach out if you want to work together or just talk about an idea.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid gap-6 md:grid-cols-[1.2fr,1.4fr]"
      >
        {/* Links */}
        <div className="space-y-3 rounded-3xl border border-white/10 bg-black/60 p-5 shadow-xl shadow-black/70 text-sm">
          <h3 className="text-sm font-semibold text-slate-100">
            Direct links
          </h3>
          <p className="text-xs text-slate-400">
            Replace these with your real profiles whenever you&apos;re ready.
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <span className="font-semibold text-slate-200">Email:</span>{" "}
              <a
                href="#"
                className="underline decoration-dotted underline-offset-2 hover:text-emerald-300"
              >
                your-email-here
              </a>
            </li>
            <li>
              <span className="font-semibold text-slate-200">GitHub:</span>{" "}
              <a
                href="#"
                className="underline decoration-dotted underline-offset-2 hover:text-emerald-300"
              >
                your-github
              </a>
            </li>
            <li>
              <span className="font-semibold text-slate-200">LinkedIn:</span>{" "}
              <a
                href="#"
                className="underline decoration-dotted underline-offset-2 hover:text-emerald-300"
              >
                your-linkedin
              </a>
            </li>
            <li>
              <span className="font-semibold text-slate-200">X / Twitter:</span>{" "}
              <a
                href="#"
                className="underline decoration-dotted underline-offset-2 hover:text-emerald-300"
              >
                your-twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Form (frontend only) */}
        <form className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-black/60 to-black p-5 shadow-xl shadow-black/70">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none transition focus:border-emerald-400/80"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none transition focus:border-emerald-400/80"
              />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              rows={4}
              placeholder="Tell me about your project or idea..."
              className="w-full resize-none rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none transition focus:border-emerald-400/80"
            />
          </Field>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
          >
            Send Message (dummy)
          </button>
          <p className="text-[10px] text-slate-500">
            This form is frontend-only right now. You can hook it up to an API
            or a service like Formspree later.
          </p>
        </form>
      </motion.div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block space-y-1 text-xs text-slate-200">
      <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      {children}
    </label>
  );
}
