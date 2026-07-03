"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Container from "./Container";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <Container>

        <p className="text-blue-500 font-semibold">
          PROJECTS
        </p>

        <h2 className="text-4xl font-bold mt-2 mb-12">
          Featured Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {portfolio.projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl"
            >

              <div className="relative h-56">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-slate-800 dark:text-blue-400"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-8 flex gap-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}