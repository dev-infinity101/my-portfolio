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
const MotionLink = motion(Link);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:bg-none dark:bg-dark-bg text-primaryText dark:text-dark-text-primary">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl opacity-50 dark:opacity-20"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl opacity-50 dark:opacity-20"></div>
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
            <Link to="/" className="inline-flex items-center gap-2 text-secondaryText dark:text-dark-text-secondary hover:text-primaryText dark:hover:text-dark-accent transition-all duration-300 group">
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
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 dark:from-dark-accent dark:via-emerald-500 dark:to-teal-500 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"
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
                  className="relative w-full max-w-sm h-auto rounded-2xl shadow-2xl object-cover border-4 border-white dark:border-dark-surface group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ 
                    scale: 1.08,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
            </motion.div>
            
            {/* Right side: Introduction */}
            <motion.div className="lg:w-3/5" variants={itemVariants}>
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-dark-accent dark:to-emerald-400 bg-clip-text text-transparent leading-tight"
                variants={slideInVariants}
              >
                About Me
              </motion.h1>
              
              <motion.div 
                className="space-y-6 text-lg leading-relaxed"
                variants={slideInVariants}
              >
                <p className="text-secondaryText dark:text-dark-text-secondary">
                  Hi, I'm <span className="font-semibold text-blue-600 dark:text-dark-accent">Prabodh Upadhyay AKA DEV on Twitter</span>, 
                  a freelance developer from Lucknow, India. I specialize in crafting modern, 
                  scalable web applications with a focus on user experience and performance.
                </p>
                
                <p className="text-secondaryText dark:text-dark-text-secondary">
                  I work primarily with <span className="font-semibold text-purple-600 dark:text-purple-400">Next.js</span>, 
                  <span className="font-semibold text-yellow-600 dark:text-yellow-400"> Python</span>, and sometimes 
                  dabble in <span className="font-semibold text-green-600 dark:text-emerald-400">GenAI</span>. 
                  You can find me on Twitter, usually shitposting and occasionally posting Useful stuff too.
                </p>
                
                <MotionLink 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#00FF88] text-black px-6 py-3 rounded font-medium hover:bg-[#00D080] transition-all duration-300 glow-outline border border-transparent"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Briefcase size={18} />
                  Hire me 
                </MotionLink>
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
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-dark-accent dark:to-emerald-400 bg-clip-text text-transparent">
          My Experiences
        </h2>
        <p className="text-lg text-secondaryText dark:text-dark-text-secondary max-w-2xl mx-auto">
          A diverse range of experiences that shape my approach to development and problem-solving
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="group relative"
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.25 }}
          >
            <div className={`rounded-none p-[1px] bg-gradient-to-r ${experience.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,255,136,0.15)]`}>
              <div className="relative bg-[#111111] text-white p-8 rounded-none border border-[#2A2A2A] ring-1 ring-[#00FF88]/50 hover:ring-[#00FF88]/80 shadow-[0_0_18px_rgba(0,255,136,0.12)] group-hover:shadow-[0_0_50px_rgba(0,255,136,0.35)] transition-all duration-300 h-full glow-outline">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#00FF8820] text-[#00FF88] border border-[#00FF88]/50 shadow-[0_0_16px_rgba(0,255,136,0.25)]">
                    {experience.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-[#D1D1D1] leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
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
      className="mb-12"
    >
      <motion.div className="text-center mb-8" variants={itemVariants}> 
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-dark-accent dark:to-emerald-400 bg-clip-text text-transparent"> 
          Professional Journey
        </h2>
        <p className="text-base text-secondaryText dark:text-dark-text-secondary max-w-xl mx-auto"> 
          Milestones across roles and time
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 dark:from-dark-accent dark:via-emerald-500 dark:to-teal-500 opacity-30"></div>
        <div className="space-y-10"> 
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
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
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

  const parseStart = (duration) => {
    const m = duration.match(/(\d{4})\s+([A-Za-z]+)/);
    if (m) return `${m[2]} ${m[1]}`;
    return duration;
  };

  const isLeft = index % 2 !== 0;

  return (
    <motion.div 
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative grid grid-cols-11 gap-4 items-center"
    >
      <div className={`${isLeft ? 'col-span-5 col-start-1 text-right' : 'col-span-5 col-start-7 text-left'}`}>
        <div className="text-sm font-semibold text-blue-600 dark:text-dark-accent tracking-wide">
          {parseStart(item.duration)}
        </div>
      </div>

      <div className="col-span-1 col-start-6 flex justify-center">
        <motion.div 
          className="relative w-16 h-16 rounded-full bg-[#1C1C1C] text-white flex items-center justify-center ring-4 ring-[#00FF88] shadow-[0_0_30px_rgba(0,255,136,0.35)]"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-lg font-bold text-[#00FF88]">{String(index + 1)}</span>
        </motion.div>
      </div>

      <div className={`${isLeft ? 'col-span-5 col-start-7' : 'col-span-5 col-start-1'}`}>
        <motion.div 
          className="bg-white/80 dark:bg-dark-surface/90 backdrop-blur-md p-4 md:p-6 rounded-none shadow-md border border-gray-200/50 dark:border-dark-surface/50 glow-outline"
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg md:text-xl font-bold text-primaryText dark:text-white">{item.company}</h3>
            <span className={`px-2 py-0.5 text-xs font-semibold text-white rounded-none bg-gradient-to-r ${getTypeColor(item.type)} shadow-sm`}>{getTypeLabel(item.type)}</span>
          </div>
          <div className="text-blue-600 dark:text-dark-accent font-semibold mb-1">{item.role}</div>
          <div className="text-xs text-gray-500 dark:text-dark-text-secondary mb-3">{item.duration}</div>
          <p className="text-gray-700 dark:text-dark-text-secondary text-sm leading-relaxed mb-3">{item.description}</p>
          {item.technologies && (
            <div className="flex flex-wrap gap-1">
              {item.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-dark-text-secondary rounded-none font-medium hover:bg-blue-100 dark:hover:bg-dark-accent/20 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
