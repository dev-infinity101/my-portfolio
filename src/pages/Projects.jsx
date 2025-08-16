import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

// Placeholder project data - replace with your actual projects
const projects = [
  {
    title: 'Resume AI ',

    description: 'A tool that optimizes resumes for job applications, using AI to generate personalized cover letters and job descriptions.',
    tags: ['Next.js', 'python', 'MongoDB', 'gemini api'],
    imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI interviewer',

    description: 'An interactive AI agent that uses AI to help you prepare for job interviews, by providing real-time feedback and personalized practice questions.',
    tags: ['Next.js', 'python', 'MongoDB', 'gemini tss sst','deepgram api'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with Vite, React, and Framer Motion.',
    tags: ['Vite', 'React', 'Framer Motion', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  // Add more projects here
];

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
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
          className="text-4xl sm:text-5xl font-bold mb-8 text-primaryText dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({ project, variants }) {
  return (
    <motion.div 
      variants={variants}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200/80 dark:border-gray-700/60 group"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-primaryText dark:text-white">{project.title}</h3>
        <p className="text-secondaryText dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primaryText dark:hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primaryText dark:hover:text-white transition-colors">
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;