import { motion } from "framer-motion";

const projects = [
  {
    title: "Cogniflow",
    description: "GPT-powered cognitive study planner tracking user focus in real time, providing personalized weekly study plans.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "OpenAI API",
      "Chrome Extension",
      "Socket.io",
      "Postman",
      "Vercel",
      "Render",
      "Git",
      "GitHub"
    ],
    link: "#",
  },
  
  {
    title: "Portfolio Website",
    description: "Responsive, animated portfolio built with React & Tailwind.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "tailwind", "netlify"],
    link: "#",
  },
  {
    title: "Bubble Game",
    description: "Interactive game with GSAP animations and levels.",
    tech: ["JavaScript", "GSAP", "HTML", "CSS", "netlify", "Git", "Github"],
    link: "https://bubble-pop-game-kritika.netlify.app/",
  },
  {
  title: "ThinkBoard",
  description: "A sleek note-taking app with category organization, dark mode, and persistent storage.",
  tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "daisy ui", "render", "Git", "Github"],
  link: "https://thinkboard-5vxt.onrender.com/",
}
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-20 px-6 min-h-screen">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
