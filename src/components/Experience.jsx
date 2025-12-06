import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  const experiences = [
    {
      role: "Account Management Associate (Chat Support)",
      company: "Sutherland Global Services",
      duration: "Oct 2025 – Present",
      description:
        "Providing chat-based customer support for Shutterfly—resolving issues, ensuring satisfaction, and managing accounts efficiently.",
    },
    {
      role: "Software Development Intern",
      company: "KodNest Technologies",
      duration: "Jun 2025 – Oct 2025",
      description:
        "Worked on full-stack web projects using React, Tailwind CSS, and Supabase.",
      highlights: [
        "Built InterviewCracker – AI-powered mock interview platform.",
        "Created Interactive Colorful Calendar app with animated UI.",
      ],
    },
  ];

  return (
    <AnimatedSection direction="right">
      <section id="experience" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-yellow-400 dark:text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)] mb-6 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="fancy-card p-6">
                <h3 className="text-2xl font-semibold text-black mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                <p className="text-gray-700 mb-2">{exp.description}</p>
                {exp.highlights && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
