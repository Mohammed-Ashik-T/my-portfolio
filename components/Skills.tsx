"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const skills = [
  "Python",
  "Html5 & CSS3",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "angularJS",
  "Postman",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section py-24"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <p className="text-blue-500 font-semibold">
            SKILLS
          </p>

          <h2 className="text-4xl font-bold mt-2 mb-10">
            Technologies I Work With
          </h2>

          <div className="flex flex-wrap gap-5">

            {skills.map((skill, index) => (

              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .05,
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: -2,
                }}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-4 text-white font-semibold shadow-lg cursor-default"
              >
                {skill}
              </motion.div>

            ))}

          </div>

        </motion.div>

      </Container>
    </section>
  );
}