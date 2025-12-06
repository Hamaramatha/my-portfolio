export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900 text-yellow-400 py-6 text-center">
      <p className="text-sm">© {new Date().getFullYear()} Deepak Pratap Singh. All rights reserved.</p>
      <p className="text-xs mt-1 opacity-80">Built with ❤️ using React & Tailwind CSS</p>
    </footer>
  );
}
