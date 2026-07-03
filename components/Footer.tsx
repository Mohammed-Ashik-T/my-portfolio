"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-8 md:flex-row">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            THANK YOU
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            See you in the next commit.
          </h3>
        </motion.div>

        {/* Right */}
        <div className="flex items-center gap-5">

          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:scale-110 hover:text-blue-500"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:scale-110 hover:text-blue-500"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href={portfolio.social.email}
            className="rounded-full border px-5 py-2 text-sm transition hover:bg-blue-600 hover:text-white"
          >
            Contact
          </a>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full border p-3 transition hover:bg-blue-600 hover:text-white"
          >
            <ArrowUpRight size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}