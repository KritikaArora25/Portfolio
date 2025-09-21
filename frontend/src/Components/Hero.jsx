import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I’m <span className="text-indigo-500">Kritika Arora</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Final-year B.Tech (CSE, AI & ML) | Full-Stack Developer (MERN) | DSA Enthusiast
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Navigation Links */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition transform hover:scale-105"
          >
            🚀 View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl bg-white text-gray-900 font-medium shadow-md hover:bg-gray-200 transition transform hover:scale-105"
          >
            📩 Contact Me
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
