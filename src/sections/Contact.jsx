import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Using FormSubmit for background email sending without a backend
      const response = await fetch("https://formsubmit.co/ajax/shubhanshus450@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      // Fallback to local mail client if fetch fails
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      window.location.href = `mailto:shubhanshus450@gmail.com?subject=${subject}&body=${body}`;

      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="section-container px-4 py-32 bg-transparent relative overflow-hidden"
    >
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm mb-8 backdrop-blur-md">
            <Mail className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-bold text-black/70 dark:text-white/70 uppercase tracking-widest">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-black dark:text-white">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Connect.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            I'm currently open for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

          <div className="relative bg-white dark:bg-zinc-900/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-[0_20px_40px_rgb(0,0,0,0.06)] dark:shadow-[0_20px_40px_rgb(0,0,0,0.3)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-black/70 dark:text-white/70 mb-2 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-2 border-transparent focus:border-blue-500/50 outline-none transition-all duration-300 text-black dark:text-white shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-black/70 dark:text-white/70 mb-2 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-2 border-transparent focus:border-purple-500/50 outline-none transition-all duration-300 text-black dark:text-white shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-black/70 dark:text-white/70 mb-2 ml-1">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border-2 border-transparent focus:border-cyan-500/50 outline-none transition-all duration-300 text-black dark:text-white shadow-sm resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <Motion.button
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                disabled={status !== "idle"}
                className={`relative overflow-hidden w-full py-4 rounded-2xl font-bold shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${status === "success"
                  ? "bg-green-500 text-white"
                  : "bg-black text-white dark:bg-white dark:text-black hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
                  }`}
              >
                {status === "idle" && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-10 dark:hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </span>
                  </>
                )}
                {status === "sending" && (
                  <span className="relative z-10 flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-t-white dark:border-t-black animate-spin" />
                    Sending...
                  </span>
                )}
                {status === "success" && (
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    Message Sent <CheckCircle className="w-5 h-5" />
                  </span>
                )}
              </Motion.button>
            </form>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
