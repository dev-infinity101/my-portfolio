import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import profilePic from '../assets/dev-smile.svg';

function AboutMe() {
  const timelineItems = [
    {
      company: 'Innovatech Solutions',
      role: 'Lead Frontend Architect',
      duration: '2021 - Present',
      description: 'Architecting scalable, high-performance user interfaces with React and Next.js. Driving the adoption of modern frontend practices and mentoring junior developers.',
    },
    {
      company: 'Creative Code Inc.',
      role: 'Senior UI/UX Engineer',
      duration: '2019 - 2021',
      description: 'Translated complex design systems into pixel-perfect, responsive web applications. Specialized in creating fluid animations and optimizing for user experience.',
    },
    {
      company: 'Digital Dynamos',
      role: 'Junior Web Developer',
      duration: '2017 - 2019',
      description: 'Developed and maintained client websites using HTML, CSS, and JavaScript. Gained foundational experience in an agile development environment.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 text-primaryText dark:text-gray-200">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-2 text-secondaryText dark:text-gray-400 hover:text-primaryText dark:hover:text-white transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side: Profile Image */}
          <motion.div 
            className="md:w-2/5 flex justify-center items-start"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img 
              src={profilePic} 
              alt="Profile" 
              className="w-full max-w-sm h-auto rounded-2xl shadow-2xl object-cover border-4 border-white dark:border-gray-700"
            />
          </motion.div>
          
          {/* Right side: Content */}
          <motion.div className="md:w-3/5" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primaryText dark:text-white">
              About Me
            </h1>
            <p className="text-lg mb-8 text-secondaryText dark:text-gray-300">
              Hi, I'm Prabodh Upadhyay aka Devv , a freelance developer from Lucknow, India. I work with Next.js and python along GenAI frameworks sometimes. You can find me on Twitter, usually shitposting (and occasionally posting useless stuff too). I'm open to work!
            </p>
            
            <div className="relative border-l-2 border-blue-500/30 dark:border-blue-400/30 pl-8">
              {timelineItems.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function TimelineItem({ item }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.div 
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-10 relative"
    >
      <div className="absolute -left-[2.2rem] top-1 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 transition-transform duration-300 group-hover:scale-125"></div>
      <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl shadow-md border border-gray-200/80 dark:border-gray-700/60 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-primaryText dark:text-white">{item.company}</h3>
        <h4 className="text-lg font-medium text-secondaryText dark:text-gray-300">{item.role}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.duration}</p>
        <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default AboutMe;