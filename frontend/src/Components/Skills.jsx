import { motion } from "framer-motion";

const skills = [
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "OpenAI API",
  "Chrome Extension Making",
  "Socket.io",
  "Postman",
  "Vercel",
  "Render",
  "Git",
  "GitHub",
  "JavaScript",
  "DBMS",
  "MySQL",
  "Python",
  "Java"
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-800 py-20 px-6 min-h-screen">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-gray-700 text-white px-5 py-3 rounded-full font-medium shadow hover:shadow-lg transition transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
