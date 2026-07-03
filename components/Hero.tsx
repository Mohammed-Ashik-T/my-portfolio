"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "./Container";
import FloatingSkills from "./FloatingSkills";
import RobotAnimation from "./RobotAnimation";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero-bg relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">

      {/* background glow text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
        <h1 className="text-[120px] font-black tracking-widest">
          DEVELOPER
        </h1>
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-white/80 px-5 py-2 shadow-lg shadow-cyan-500/20 backdrop-blur-xl dark:bg-slate-900/80"
            >
              {/* Live Dot */}
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
              </span>

              <span className="font-mono text-sm font-semibold text-green-500">
                OPEN TO WORK
              </span>

              <span className="text-slate-400">•</span>

              <span className="text-sm text-slate-700 dark:text-slate-300">
                Engineering Modern Experiences for the Web
              </span>
            </motion.div>

            {/* main heading */}
            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Building{" "}
              <span className="gradient-text">
                Tomorrow's
              </span>{" "}
              Digital Products Today.
            </h1>

            {/* subtitle */}
            <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
              Creating high-performance web applications with modern technologies,
              intuitive design, and seamless user experiences that leave a lasting impact.
            </p>

            {/* buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href={portfolio.resume}
                className="flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Download size={18} />
                Resume
              </a>

            </div>

            {/* social */}
            <div className="mt-8 flex items-center gap-6">

              <a href={portfolio.social.github}>
                <FaGithub className="text-2xl hover:text-blue-500 transition" />
              </a>

              <a href={portfolio.social.linkedin}>
                <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
              </a>

              <a href={portfolio.social.email}>
                <Mail className="text-2xl hover:text-blue-500 transition" />
              </a>

            </div>

            {/* floating skills */}
            
          </motion.div>

          {/* RIGHT SIDE (ANIMATED ROBOT) */}
          {/* RIGHT SIDE (ANIMATED ROBOT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative -mt-20">

              {/* Glow */}
              <div className="absolute -inset-16 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur-3xl animate-pulse" />

              {/* Robot */}
              <div className="relative scale-110">
                <RobotAnimation />
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}