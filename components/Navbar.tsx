"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { TypeAnimation } from "react-type-animation";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">

          <a href="/" className="flex items-center rounded-md border border-slate-300 bg-slate-100 px-3 py-1 font-mono text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <span className="text-green-500">➜ </span>
            <span className="text-blue-500">~ </span>

            <TypeAnimation
              sequence={[
                "mohammedashik@ubuntu:~$",
                2500,
                "",
                300,
                "mohammedashik@portfolio:~$",
                2500,
                "",
                300,
                "mohammedashik@nextjs:~$",
                2500,
                "",
                300,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
              cursor={true}
              className="text-black dark:text-green-400"
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}

            {mounted && (
              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="rounded-full border p-2 hover:scale-110 transition"
              >
                {theme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </nav>
      </Container>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden border-t bg-[var(--background)]"
          >
            <Container>

              <div className="flex flex-col py-6 gap-5">

                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}

                {mounted && (
                  <button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="flex items-center gap-2"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun size={18} />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon size={18} />
                        Dark Mode
                      </>
                    )}
                  </button>
                )}

              </div>

            </Container>
          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}