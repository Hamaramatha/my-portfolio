export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-black text-yellow-400 font-extrabold rounded-lg shadow-md border border-yellow-400 hover:scale-110 transition">
            DB
          </div>

          <h1 className="text-2xl font-bold text-black dark:text-yellow-300 hover:text-yellow-500 transition">
            Deepak Singh
          </h1>
        </div>

        <ul className="hidden md:flex space-x-6 font-medium">
          {["about","projects","skills","achievements","education","certificates","contact"].map((sec) => (
            <li key={sec}>
              <a href={`#${sec}`} className="text-black dark:text-gray-200 hover:text-yellow-500">
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
