import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("✅ Message sent successfully!");
  };

  return (
    <AnimatedSection direction="up">
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-yellow-400 dark:text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)] mb-6 text-center">Contact Me</h2>
          <p className="text-gray-600 mb-8">
            Have a question or opportunity? Let’s connect.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-black text-yellow-400 w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-black text-yellow-400 w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className="bg-black text-yellow-400 w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-yellow-400 border border-yellow-400 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-yellow-600">{status}</p>}
        </div>
      </section>
    </AnimatedSection>
  );
}
