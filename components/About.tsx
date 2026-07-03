"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Counter from "./Counter";

export default function About() {
  return (
    <section
      id="about"
      className="section py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 font-semibold mb-2">
            ABOUT ME
          </p>

          <h2 className="text-4xl font-bold mb-8">
            Crafting Digital Experiences That Make an Impact
          </h2>

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-8 shadow-xl">

            <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
              I'm a passionate <span className="font-semibold text-blue-500">Full Stack Developer</span>
              who loves transforming ideas into modern digital products.
              My focus is on building responsive, scalable, and high-performance web
              applications using technologies like Python, GenAI, Node.js,
              and modern cloud tools.

              <br /><br />

              I enjoy solving real-world problems, continuously learning new technologies,
              and creating user experiences that are both beautiful and functional.
              Every project is an opportunity to improve my skills and deliver meaningful value.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

              <div>
                <h3 className="text-4xl font-bold gradient-text">
                  <Counter end={10} suffix="+" />
                </h3>
                <p>Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold gradient-text">
                  <Counter end={2} suffix="+" />
                </h3>
                <p>Years Learning</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold gradient-text">
                  <Counter end={10} suffix="+" />
                </h3>
                <p>Technologies</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold gradient-text">
                  <Counter end={100} suffix="%" />
                </h3>
                <p>Dedication</p>
              </div>

            </div>

            <div className="mt-10 border-l-4 border-blue-500 pl-5 italic text-slate-500 dark:text-slate-400">
              "Great software isn't just written—it's thoughtfully engineered to solve
              real problems and create exceptional user experiences."
            </div>

          </div>

        </motion.div>
      </Container>
    </section>
  );
}