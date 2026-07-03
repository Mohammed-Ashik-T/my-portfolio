"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Docker",
];

export default function FloatingSkills() {
  return (
    <div className="mt-16 flex flex-wrap gap-4">

      {skills.map((skill, index) => (

        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * .1,
          }}
          whileHover={{
            scale: 1.1,
            rotate: -2,
          }}
          className="rounded-full border bg-white dark:bg-slate-900 px-5 py-3 shadow-lg"
        >
          {skill}
        </motion.div>

      ))}

    </div>
  );
}