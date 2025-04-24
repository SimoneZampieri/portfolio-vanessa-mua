import React from "react";
import { FaGithub } from "react-icons/fa";

const DefLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-200">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-stone-100 rounded-lg shadow-lg p-6 min-h-[80vh]">
          {children}
        </div>
      </main>

      <footer className="py-6 flex justify-center items-center">
        <a
          href="https://github.com/SimoneZampieri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group"
        >
          <h3 className="font-['Playfair_Display'] text-lg text-pink-600 group-hover:text-pink-800 transition-all duration-300 tracking-wide">
            Designed by Simone Zampieri
          </h3>
          <FaGithub size={28} className="text-pink-600 group-hover:text-pink-800 group-hover:scale-110 transition-all duration-300" />
        </a>
      </footer>
    </div>
  );
};

export default DefLayout;
