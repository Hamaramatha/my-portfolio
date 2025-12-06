import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

/**
 * DarkModeToggle
 * - toggles 'dark' class on document.documentElement (html)
 * - persists to localStorage under key "theme"
 * - default follows previous saved value, otherwise prefers system
 */
export default function DarkModeToggle({ size = 18 }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      // default to system preference
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-yellow-300 shadow-sm hover:scale-105 transition"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <FaSun size={size} className="text-yellow-300" /> : <FaMoon size={size} className="text-gray-700 dark:text-yellow-300" />}
    </button>
  );
}
