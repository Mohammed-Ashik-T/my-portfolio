"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Container from "./Container";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 font-semibold tracking-widest">
            EXPERIENCE
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            My Journey
          </h2>

          <div className="relative mt-16">

            {/* Timeline line */}

            <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

            {portfolio.experience.map((item, index) => (

              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative mb-12 flex gap-8"
              >

                {/* Circle */}

                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <Briefcase size={18} />
                </div>

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">

                  <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    {item.year}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-medium text-blue-500">
                    {item.company}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {item.skills.map((skill) => (

                      <span
                        key={skill}
                        className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>
      </Container>
    </section>
  );
}