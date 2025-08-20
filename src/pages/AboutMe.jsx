import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Code, 
  Brain, 
  GraduationCap,
  Award,
  Users,
  Zap
} from 'lucide-react';
import profilePic from '../assets/dev-smile.svg';

function AboutMe() {
  const timelineItems = [
    {
      company: 'Shunyaa.ek pvt ltd',
      role: 'Frontend Intern',
      duration: '2025 July - Present',
      description: 'Architecting scalable, high-performance user interfaces with React and Next.js. Driving the adoption of modern frontend practices and mentoring junior developers.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      type: 'internship'
    },
    {
      company: 'Slothpays',
      role: 'Artificial Intelligence Intern',
      duration: '2025 April - 2025 June',
      description: 'Worked on various projects using GenAI frameworks. Gained experience in natural language processing and machine learning. Made a custom voice assistant using RAG model and Langchain.',
      technologies: ['Python', 'LangChain', 'RAG', 'NLP', 'GenAI'],
      type: 'internship'
    },
    {
      company: 'Self Employed',
      role: 'Python Tutor',
      duration: '2024 Oct - 2025',
      description: 'Taught Python to students in school. Gained experience in teaching and mentoring students. Helped students in understanding the concepts of Python programming.',
      technologies: ['Python', 'Teaching', 'Mentoring'],
      type: 'freelance'
    },
  ];

  const experiences = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Specialized in React, Next.js, and modern JavaScript frameworks with focus on performance and user experience.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI & Machine Learning',
      description: 'Experience with GenAI frameworks, natural language processing, and building intelligent applications.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Teaching & Mentoring',
      description: 'Passionate about sharing knowledge and helping others learn programming concepts effectively.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Full-Stack Solutions',
      description: 'Building end-to-end applications with modern technologies and best practices.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-primaryText dark:text-gray-200">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Navigation */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-secondaryText dark:text-gray-400 hover:text-primaryText dark:hover:text-white transition-all duration-300 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left side: Profile Image */}
            <motion.div 
              className="lg:w-2/5 flex justify-center items-start"
              variants={itemVariants}
            >
              <div className="relative group">
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                ></motion.div>
                <motion.img 
                  src={profilePic} 
                  alt="Profile" 
                  className="relative w-full max-w-sm h-auto rounded-2xl shadow-2xl object-cover border-4 border-white dark:border-gray-700 group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ 
                    scale: 1.08,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">Lucknow, India</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right side: Introduction */}
            <motion.div className="lg:w-3/5" variants={itemVariants}>
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight"
                variants={slideInVariants}
              >
                About Me
              </motion.h1>
              
              <motion.div 
                className="space-y-6 text-lg leading-relaxed"
                variants={slideInVariants}
              >
                <p className="text-secondaryText dark:text-gray-300">
                  Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Devv</span>, 
                  a freelance developer from Lucknow, India. I specialize in crafting modern, 
                  scalable web applications with a focus on user experience and performance.
                </p>
                
                <p className="text-secondaryText dark:text-gray-300">
                  I work primarily with <span className="font-semibold text-purple-600 dark:text-purple-400">Next.js</span>, 
                  <span className="font-semibold text-yellow-600 dark:text-yellow-400"> Python</span>, and sometimes 
                  dabble in <span className="font-semibold text-green-600 dark:text-green-400">GenAI</span>. 
                  You can find me on Twitter, usually shitposting and occasionally posting Useful stuff too.
                </p>
                
                <motion.div 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Briefcase size={18} />
                  Open to Work
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Experiences Section */}
          <ExperiencesSection experiences={experiences} />

          {/* Timeline Section */}
          <TimelineSection timelineItems={timelineItems} />
        </div>
      </div>
    </div>
  );
}

function ExperiencesSection({ experiences }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.section 
      ref={ref}
      className="mb-20"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className="text-center mb-12" variants={itemVariants}>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          My Experiences
        </h2>
        <p className="text-lg text-secondaryText dark:text-gray-300 max-w-2xl mx-auto">
          A diverse range of experiences that shape my approach to development and problem-solving
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="group relative"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl" 
                 style={{ backgroundImage: `linear-gradient(to right, ${experience.color.split(' ')[1]}, ${experience.color.split(' ')[3]})` }}>
            </div>
            
            <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${experience.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {experience.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-primaryText dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {experience.title}
              </h3>
              
              <p className="text-secondaryText dark:text-gray-300 leading-relaxed">
                {experience.description}
              </p>
              
              <motion.div 
                className="absolute bottom-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function TimelineSection({ timelineItems }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.section 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className="text-center mb-12" variants={itemVariants}>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Professional Journey
        </h2>
        <p className="text-lg text-secondaryText dark:text-gray-300 max-w-2xl mx-auto">
          My career path and the experiences that have shaped my professional growth
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30"></div>
        
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function TimelineItem({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: index * 0.1 }
    },
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'full-time': return 'from-green-500 to-emerald-500';
      case 'internship': return 'from-blue-500 to-cyan-500';
      case 'freelance': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'full-time': return 'Full-time';
      case 'internship': return 'Internship';
      case 'freelance': return 'Freelance';
      default: return 'Experience';
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative flex items-start gap-6 md:gap-8 group"
    >
      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div 
          className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-125 transition-transform duration-300"
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0.4)",
              "0 0 0 10px rgba(59, 130, 246, 0)",
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: index * 0.5
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="flex-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 group-hover:bg-white/90 dark:group-hover:bg-gray-800/90"
        whileHover={{ y: -5, scale: 1.01 }}
      >
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-primaryText dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {item.company}
          </h3>
          <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${getTypeColor(item.type)} shadow-sm`}>
            {getTypeLabel(item.type)}
          </span>
        </div>
        
        <h4 className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
          {item.role}
        </h4>
        
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={16} />
          <span className="font-medium">{item.duration}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
          {item.description}
        </p>
        
        {item.technologies && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default AboutMe;