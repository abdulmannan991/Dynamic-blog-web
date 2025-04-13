// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/../public/animations/success.json";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] to-[#c4b5fd]
 px-4 py-16">
      <motion.div
        className="bg-white/10 backdrop-blur-2xl shadow-2xl p-10 rounded-3xl w-full max-w-2xl border border-white/20 relative"
        initial={{ opacity: 0, y: 50, rotateX: -20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-black text-center mb-8 tracking-tight">Contact Us</h2>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center h-64">
            <Lottie animationData={animationData} loop={false} className="w-40 h-40" />
            <p className="text-black text-lg mt-4">Thanks for reaching out! 🚀</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Floating Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full px-4 pt-6 pb-2 text-black bg-transparent border border-black rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your Name"
              />
              <label className="absolute left-4 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 transition-all">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full px-4 pt-6 pb-2 text-black bg-transparent border border-black rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your Email"
              />
              <label className="absolute left-4 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 transition-all">
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="peer w-full px-4 pt-6 pb-2 text-black bg-transparent border border-black rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your Message"
              />
              <label className="absolute left-4 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 transition-all">
                Your Message
              </label>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                />
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
