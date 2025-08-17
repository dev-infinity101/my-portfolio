import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

// Placeholder project data - replace with your actual projects
const projects = [
  {
    title: 'Resume AI',
    description: 'A tool that optimizes resumes for job applications, using AI to generate personalized cover letters and job descriptions.',
    techStack: ['Next.js', 'Python', 'MongoDB', 'Gemini API'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'AI Interviewer',
    description: 'An interactive AI agent that uses AI to help you prepare for job interviews, by providing real-time feedback and personalized practice questions.',
    techStack: ['Next.js', 'Python', 'MongoDB', 'Gemini TTS/STT', 'Deepgram API'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with Vite, React, and Framer Motion.',
    techStack: ['Vite', 'React', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  // Add more projects here
];

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/" className="flex items-center gap-2 text-secondaryText dark:text-gray-400 hover:text-primaryText dark:hover:text-white transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </motion.div>

        <motion.h1
          className="text-6xl font-bold mb-12 text-primaryText dark:text-white font-mono transform -rotate-6 md:text-left text-center" // Added font-mono here
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: 'font-mono,' }}
        >
          Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} variants={itemVariants} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}


function ProjectCard({ project, variants, index }) {
  return (
    <motion.div
      variants={variants}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200/80 dark:border-gray-700/60 group transform md:hover:rotate-0 transition-transform duration-300 md:rotate-[${index % 2 === 0 ? '3' : '-3'}deg]"
      whileHover={{ scale: 1.05, rotate: 0, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
    >
      <div className="p-6">
        <h3 className="text-3xl font-bold mb-2 text-primaryText dark:text-white">{`0${index + 1}`} {project.title}</h3>
        <p className="text-secondaryText dark:text-gray-300 mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 dark:text-white">Tech Stack:</h4>
          <ul className="list-disc pl-5 text-secondaryText dark:text-gray-300">
            {project.techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center gap-2"
          >
            GitHub <Github size={18} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition flex items-center gap-2"
          >
            Live Demo <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;