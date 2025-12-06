import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { FaMedal } from "react-icons/fa";
import nccC from "../assets/ncc-c-certificate.jpg";

export default function Achievements() {
  const [viewImage, setViewImage] = useState(null);

  const achievements = [
    {
      title: "NCC 'C' Certificate",
      year: "2025",
      description:
        "Awarded by the Ministry of Defence, Government of India. Completed training under 12 MP BN NCC, Bhopal, and passed the 'C' certificate examination with B grade.",
      image: nccC,
    },
    {
      title: "NCC 'B' Certificate",
      year: "2024",
      description:
        "Successfully completed NCC 'B' certificate training and evaluation, demonstrating leadership, teamwork, and discipline under MP & CG Directorate.",
    },
  ];

  return (
    <AnimatedSection direction="zoom">
      <section id="achievements" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">

        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-10">
            <FaMedal className="text-yellow-500 text-4xl" />
            <h2 className="text-4xl font-extrabold text-yellow-400 dark:text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)] mb-6 text-center">Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((a, i) => (
              <div
                key={i}
                onClick={() => a.image && setViewImage(a.image)}
                className={`bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl transition border border-gray-100 ${
                  a.image ? "cursor-pointer" : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <FaMedal className="text-yellow-500 text-xl" />
                  <h3 className="text-2xl font-semibold text-black">
                    {a.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">{a.year}</p>
                <p className="text-gray-700 leading-relaxed">{a.description}</p>
                {a.image && (
                  <p className="text-sm text-yellow-600 mt-3 underline">
                    Click to view certificate
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Image popup */}
          {viewImage && (
            <div
              onClick={() => setViewImage(null)}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-4 rounded-xl shadow-2xl max-w-3xl w-[95%] relative"
              >
                <button
                  onClick={() => setViewImage(null)}
                  className="absolute top-2 right-3 text-gray-500 hover:text-yellow-500 text-2xl font-bold"
                >
                  ✕
                </button>
                <img
                  src={viewImage}
                  alt="NCC Certificate"
                  className="rounded-xl max-h-[80vh] w-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </AnimatedSection>
  );
}
