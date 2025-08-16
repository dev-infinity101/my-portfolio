import { motion } from 'framer-motion';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import SocialIcons from '../components/SocialIcons';
import LinkButton from '../components/LinkButton';
import Footer from '../components/Footer';
import projectIcon from '../assets/dev-smile.svg'; // profile pic

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <motion.div
        className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-soft p-6 text-center border border-white/20 dark:bg-gray-800/80 dark:border-gray-700"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Header />
        <motion.main className="flex flex-col items-center gap-4 -mt-12" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <ProfileSection />
          </motion.div>
          <motion.div className="flex flex-col gap-4 w-full mt-4" variants={containerVariants}>
            <motion.div variants={itemVariants}><LinkButton to="/about">About Me</LinkButton></motion.div>
            <motion.div variants={itemVariants}><LinkButton to="/projects">Projects</LinkButton></motion.div>
            <motion.div variants={itemVariants}><LinkButton href="#">Blog</LinkButton></motion.div>
            <motion.div variants={itemVariants}><LinkButton to="/resume">Resume</LinkButton></motion.div>
          </motion.div>
          <motion.div variants={itemVariants}><SocialIcons /></motion.div>
        </motion.main>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Home;