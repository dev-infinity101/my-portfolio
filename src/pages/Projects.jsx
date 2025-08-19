import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Clock, CheckCircle, Star, Calendar, Code, Layers, Zap, Target, Sparkles } from 'lucide-react';

// Enhanced project data with status and additional fields
const projects = [
  {
    id: 1,
    title: 'Resume AI',
    description: 'A sophisticated tool that optimizes resumes for job applications, using advanced AI to generate personalized cover letters and job descriptions tailored to specific roles.',
    techStack: ['Next.js', 'Python', 'MongoDB', 'Gemini API', 'TailwindCSS', 'Node.js'],
    status: 'ongoing',
    githubUrl: '#',
    liveUrl: '#',
    features: ['AI-powered resume optimization', 'Custom cover letter generation', 'ATS compatibility checker'],
    startedDate: '2025-08-15',
    expectedCompletion: '2025-09-15',
    progress: 85,
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80'
  },
  {
    id: 2,
    title: 'AI Interviewer',
    description: 'An interactive AI-powered interview preparation platform that provides real-time feedback, personalized practice questions, and comprehensive performance analytics.',
    techStack: ['Next.js', 'Python', 'MongoDB', 'Gemini TTS/STT', 'Deepgram API', 'WebRTC'],
    status: 'ongoing',
    githubUrl: '#',
    liveUrl: '#',
    features: ['Real-time speech analysis', 'Personalized question generation', 'Performance tracking'],
    startedDate: '2025-04-30',
    expectedCompletion: '2025-09-30',
    progress: 75,
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio showcasing skills and projects with smooth animations, dark mode support, and optimized performance.',
    techStack: ['Vite', 'React', 'Framer Motion', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    status: 'completed',
    githubUrl: '#',
    liveUrl: '#',
    features: ['Responsive design', 'Dark mode toggle', 'Smooth animations', 'SEO optimized'],
    completedDate: '2025-08-16',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80'
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle,
    label: 'Completed',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    accentColor: 'from-emerald-400 to-teal-500'
  },
  ongoing: {
    icon: Clock,
    label: 'In Progress',
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-200 dark:border-amber-800',
    accentColor: 'from-amber-400 to-orange-500'
  }
};

const categoryIcons = {
  'AI/ML': Zap,
  'Web Development': Code
};

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    }
  };

  const ongoingProjects = projects.filter(p => p.status === 'ongoing');
  const completedProjects = projects.filter(p => p.status === 'completed');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full border border-indigo-200/50 dark:border-indigo-700/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Featured Work</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 dark:from-slate-100 dark:via-indigo-100 dark:to-purple-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Projects
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Crafting digital experiences that blend innovation with purpose, one project at a time
            </motion.p>
          </motion.div>

          {/* Projects Sections */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Ongoing Projects Section */}
            <motion.div variants={sectionVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 rounded-2xl border border-amber-200/50 dark:border-amber-700/50">
                  <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">In Progress</h2>
                  <div className="px-3 py-1 bg-amber-600/20 dark:bg-amber-400/20 rounded-full">
                    <span className="text-sm font-bold text-amber-700 dark:text-amber-300">{ongoingProjects.length}</span>
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-300/50 to-transparent"></div>
              </div>
              
              <div className="grid gap-8">
                {ongoingProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Completed Projects Section */}
            <motion.div variants={sectionVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Completed</h2>
                  <div className="px-3 py-1 bg-emerald-600/20 dark:bg-emerald-400/20 rounded-full">
                    <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">{completedProjects.length}</span>
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-300/50 to-transparent"></div>
              </div>
              
              <div className="grid gap-8">
                {completedProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const StatusIcon = statusConfig[project.status].icon;
  const CategoryIcon = categoryIcons[project.category];
  const config = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative"
    >
      {/* Main Card Container */}
      <div className={`relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border ${config.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-0">
          {/* Image Section */}
          <div className="lg:col-span-2 relative">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 group-hover:from-black/10 group-hover:to-black/20 transition-all duration-500"></div>
              
              {/* Floating Status Badge */}
              <div className="absolute top-6 left-6">
                <div className={`flex items-center gap-2 px-4 py-2 ${config.bgColor} backdrop-blur-sm rounded-2xl border ${config.borderColor} shadow-lg`}>
                  <StatusIcon className={`w-4 h-4 ${config.color}`} />
                  <span className={`text-sm font-semibold ${config.color}`}>
                    {config.label}
                  </span>
                </div>
              </div>

              {/* Progress Indicator for Ongoing Projects */}
              {project.status === 'ongoing' && project.progress && (
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex justify-between items-center text-white text-sm mb-2">
                      <span className="font-medium">Progress</span>
                      <span className="font-bold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <motion.div 
                        className={`h-2.5 rounded-full bg-gradient-to-r ${config.accentColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 p-8 lg:p-12">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <CategoryIcon className={`w-6 h-6 ${config.color}`} />
                  <span className={`text-sm font-semibold ${config.color} uppercase tracking-wider`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <div className="text-6xl font-black text-slate-200/50 dark:text-slate-700/50">
                {String(project.id).padStart(2, '0')}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Features & Tech Stack Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Key Features */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Star className={`w-5 h-5 ${config.color}`} />
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${config.accentColor} mt-2 flex-shrink-0`} />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Layers className={`w-5 h-5 ${config.color}`} />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Timeline */}
              <div className={`flex items-center gap-3 px-4 py-3 ${config.bgColor} rounded-2xl border ${config.borderColor}`}>
                <Calendar className={`w-5 h-5 ${config.color}`} />
                <div className="text-sm">
                  {project.status === 'completed' ? (
                    <span className="text-slate-700 dark:text-slate-300">
                      Completed {new Date(project.completedDate).toLocaleDateString()}
                    </span>
                  ) : (
                    <div className="space-y-1">
                      <div className="text-slate-600 dark:text-slate-400">
                        Started: {new Date(project.startedDate).toLocaleDateString()}
                      </div>
                      <div className={`font-semibold ${config.color}`}>
                        Target: {new Date(project.expectedCompletion).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-700 text-white py-3 px-6 rounded-2xl hover:bg-slate-800 dark:hover:bg-slate-600 transition-all duration-300 text-sm font-semibold group/btn shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Code
                </motion.a>
                
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 bg-gradient-to-r ${config.accentColor} text-white py-3 px-6 rounded-2xl hover:shadow-xl transition-all duration-300 text-sm font-semibold group/btn shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;