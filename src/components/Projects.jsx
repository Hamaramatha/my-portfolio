import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const closeBtnRef = useRef(null);

  const projects = [
    {
      title: "InterviewCracker",
      organization: "KodNest Technologies",
      duration: "Jul 2025 – Aug 2025",
      description:
        "Developed a full-stack mock interview platform using React, Tailwind CSS, and Supabase. Integrated OpenAI API for AI-based question generation, speech-to-text, and feedback. Implemented OTP verification, resume parsing, and dynamic AI scoring.",
      link: "https://interviewcracker.netlify.app/",
      github: "https://github.com/Hamaramatha/InterviewCracker",
      tech: ["React", "Tailwind", "Supabase", "TypeScript", "OpenAI API"],
    },
    {
      title: "Interactive Colorful Calendar",
      organization: "KodNest (Internship Project)",
      duration: "Sep 2025 – Oct 2025",
      description:
        "Built a visually vibrant calendar web app where each date box can have colors, stickers, and images. Added event notes, reminders, and animations for a delightful user experience. Deployed using Netlify.",
      link: "https://calenderappdeepak.netlify.app/",
      github: "https://github.com/Hamaramatha/calendar-app",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "Movies Recommendation System",
      organization: "LNCT Excellence, Bhopal",
      duration: "Jul 2023 – Dec 2023",
      description:
        "Machine-learning project that recommends movies based on content similarity using Python, Pandas, and Scikit-learn. Enhanced user personalization through efficient cosine similarity algorithms.",
      tech: ["Python", "Pandas", "Scikit-learn"],
    },
    {
      title: "SMS Spam Detection",
      organization: "LNCT Excellence, Bhopal",
      duration: "Feb 2024 – Jun 2024",
      description:
        "Created an NLP-based spam detection model to classify messages using TF-IDF vectorization and Naive Bayes classifier with high accuracy on real datasets.",
      tech: ["Python", "NLP", "Scikit-learn"],
    },
  ];

  // lock scroll + focus management when modal open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      // focus close button after modal opens
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  // keyboard handler for card (Enter or Space)
  const handleCardKey = (e, proj) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(proj);
    }
  };

  return (
    <AnimatedSection direction="up">
      <section id="projects" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-yellow-400 dark:text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)] mb-6 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div
                key={i}
                role="button"
                tabIndex={0}
                aria-pressed={selected === proj}
                onClick={() => setSelected(proj)}
                onKeyDown={(e) => handleCardKey(e, proj)}
                className="fancy-card p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <h3
                  className="text-2xl font-semibold text-black mb-2 cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-yellow-400 hover:brightness-110 hover-glow"
                  title="Click for full project details"
                >
                  {proj.title}
                </h3>

                <p className="text-sm text-gray-600 mb-1">{proj.organization}</p>
                <p className="text-gray-700 line-clamp-3">{proj.description}</p>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selected && (
            <div
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative border-2 border-yellow-400"
                role="dialog"
                aria-modal="true"
                aria-label={`${selected.title} details`}
              >
                <button
                  ref={closeBtnRef}
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-yellow-500 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                  aria-label="Close project details"
                >
                  ✕
                </button>

                <h3 className="text-3xl font-bold text-yellow-500 mb-3">
                  {selected.title}
                </h3>

                <p className="text-gray-600 font-medium mb-1">
                  {selected.organization}
                </p>

                {selected.duration && (
                  <p className="text-sm text-gray-500 mb-4">{selected.duration}</p>
                )}

                <p className="text-gray-700 mb-4">{selected.description}</p>

                {selected.tech && selected.tech.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-black font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-yellow-100 text-black px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-yellow-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 hover:text-black transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-black text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 hover:text-black transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </AnimatedSection>
  );
}
