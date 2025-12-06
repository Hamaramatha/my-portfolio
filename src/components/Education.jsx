import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  const [selected, setSelected] = useState(null);

  const educationData = [
    {
      degree: "B.Tech in Information Technology",
      institution:
        "Lakshmi Narain College of Technology Excellence, Bhopal",
      duration: "2021 – 2025",
      details: "CGPA: 7.49",
      highlights: [
        "Focused on Full Stack Development and Software Engineering.",
        "Active in hackathons and NCC (C & B Certificates).",
      ],
    },
    {
      degree: "12th Grade (Higher Secondary Education)",
      institution:
        "Shree Ramkrishna Public School, Raipura, Panna",
      duration: "2018 – 2020",
      details: "Percentage: 89.6%",
      highlights: ["Excelled in PCM subjects."],
    },
    {
      degree: "10th Grade (Secondary Education)",
      institution:
        "Shree Ramkrishna Public School, Raipura, Panna",
      duration: "2016 – 2018",
      details: "Percentage: 93.8%",
      highlights: ["Awarded for academic excellence and discipline."],
    },
  ];

  return (
    <AnimatedSection direction="left">
      <section id="education" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-yellow-400 dark:text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)] mb-6 text-center">
            Education
          </h2>

          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <div
                key={i}
                onClick={() => setSelected(edu)}
                className="fancy-card p-6 cursor-pointer"
              >
                <h3 className="text-2xl font-semibold text-black mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500 mb-1">{edu.duration}</p>
                <p className="text-gray-700">{edu.details}</p>
              </div>
            ))}
          </div>

          {selected && (
            <div
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-yellow-500 text-xl font-bold"
                >
                  ✕
                </button>

                <h3 className="text-2xl font-bold text-black mb-2">
                  {selected.degree}
                </h3>
                <p className="text-gray-600">{selected.institution}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {selected.duration}
                </p>
                <p className="text-gray-700 font-medium mb-4">
                  {selected.details}
                </p>
                <ul className="list-disc list-inside text-left text-gray-600 space-y-1">
                  {selected.highlights.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </AnimatedSection>
  );
}
