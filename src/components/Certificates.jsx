import AnimatedSection from "./AnimatedSection";

export default function Certificates() {
  const certificates = [
    {
      title: "Salesforce Developer Virtual Internship",
      organization: "SmartInternz (Virtual)",
      date: "Jan 2023",
    },
    {
      title: "Cisco Networking Academy – Introduction to Cybersecurity",
      organization: "LNCT Group of Colleges",
      date: "May 2023",
    },
    {
      title: "Cybersecurity Essentials – Cisco Networking Academy",
      organization: "LNCT Group of Colleges",
      date: "May 2023",
    },
    {
      title: "CCSK v4.1 Foundation Training – Cloud Security Alliance",
      organization: "CSA",
      date: "May 2023",
    },
  ];

  return (
    <AnimatedSection direction="right">
      <section id="certificates" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-yellow-400 dark:text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)] mb-6 text-center">
            Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((c, i) => (
              <div key={i} className="fancy-card p-6">
                <h3 className="text-2xl font-semibold text-black mb-1">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-500">{c.organization}</p>
                <p className="text-sm text-gray-400">{c.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
