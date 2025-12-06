import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const skills = [
    "Java", "MySQL", "React", "JavaScript", "HTML", "CSS",
    "Problem Solving", "Team Collaboration",
    "Customer Communication", "Live Chat Support",
    "Account Management", "Conflict Resolution"
  ];

  return (
    <AnimatedSection direction="zoom">
      <section id="skills" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-yellow-400 dark:text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)] mb-6 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-yellow-100 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
