import myPhoto from "../assets/me.jpg";
import DarkModeToggle from "./DarkModeToggle";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-black via-[#2b0000] to-[#5c0000] text-white px-6">
      <div className="flex items-center gap-4">
        {/* Toggle on left of photo */}
        <div className="mr-2">
          <DarkModeToggle />
        </div>

        {/* Photo */}
        <img
          src={myPhoto}
          className="w-40 h-40 rounded-full border-4 border-yellow-400 shadow-lg mb-6"
          alt="Deepak Pratap Singh"
        />
      </div>

      <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
        Hi, I'm Deepak Pratap Singh 👋
      </h1>

      <p className="text-xl opacity-90 mb-6 max-w-2xl">
        Full Stack Developer | Chat Support Specialist
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="bg-black text-yellow-400 px-6 py-3 border border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
          View My Work
        </a>
        <a href="#contact" className="bg-black text-yellow-400 px-6 py-3 border border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
          Contact Me
        </a>
      </div>
    </section>
  );
}
