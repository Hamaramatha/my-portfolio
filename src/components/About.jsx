import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection direction="left">
      <section id="about" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-yellow-400 dark:text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)] mb-6 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            I’m a passionate Full Stack Developer and Chat Support Associate who
            loves building efficient, user-friendly web applications. With a
            background in Artificial Intelligence & Machine Learning and real-world experience at
            KodNest and Sutherland, I combine technical skills with excellent
            communication and teamwork.
          </p>
        </div>
      </section>
    </AnimatedSection>
  );
}
