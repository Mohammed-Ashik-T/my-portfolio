"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import Container from "./Container";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /*const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };*/
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");


    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );


      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err: any) {

      setError(
        err?.text ||
        err?.message ||
        "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-blue-500">
              CONTACT
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Let's Build Something Amazing 🚀
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Whether you have a project idea, freelance opportunity,
              collaboration, or just want to say hello, I'd love to hear from
              you.
            </p>

            <div className="mt-8 space-y-2 text-slate-500 dark:text-slate-400">
              <p>📍 Available for Remote Work</p>
              <p>💼 Open to Full-time Opportunities</p>
              <p>⚡ Usually replies within 24 hours</p>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                disabled={loading}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {success && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-xl bg-green-500/10 p-3 text-center text-green-600 dark:text-green-400"
                >
                  ✅ Your message has been sent successfully!
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-xl bg-red-500/10 p-3 text-center text-red-600 dark:text-red-400"
                >
                  {error}
                </motion.div>
              )}

            </div>
          </motion.form>

        </div>
      </Container>
    </section>
  );
}