import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Send , Mail, Linkedin, Instagram, Github } from 'lucide-react';

const GetInTouch = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const formRef = useRef();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: serverTimestamp(),
        read: false,
      });
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Firebase error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.5, staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const inputClass = "block w-full rounded-md border-0 py-2.5 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow duration-300";

  return (
    <div ref={ref} className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center py-16 px-4">
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col md:flex-row max-w-6xl w-full overflow-hidden"
      >
        {/* Left Side - Form */}
        <motion.div variants={itemVariants} className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">I'd love to hear from you. Send a message!</p>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="w-full">
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={inputClass} />
                {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
              </div>
              <div className="w-full">
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={inputClass} />
                {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className={inputClass} />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} className={`${inputClass} rounded-xl`}></textarea>
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {submitStatus === 'success' && <p className="text-green-500 text-center">Message sent successfully! Thank you.</p>}
            {submitStatus === 'error' && <p className="text-red-500 text-center">Failed to send message. Please try again later.</p>}
          </form>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 bg-gray-50 dark:bg-gray-800/50 p-8 md:p-12 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8" >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out ;-; .
          </p>
          <div className="space-y-6">
            <a href="mailto:example@email.com" className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 group">
              <Mail size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
              <span className="group-hover:text-indigo-600 transition-colors">example@email.com</span>
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 group">
              <Linkedin size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
              <span className="group-hover:text-indigo-600 transition-colors">LinkedIn Profile</span>
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 group">
              <Instagram size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
              <span className="group-hover:text-indigo-600 transition-colors">@your-instagram</span>
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 group">
              <Github size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
              <span className="group-hover:text-indigo-600 transition-colors">GitHub Profile</span>
            </a>
          </div>
          <motion.p 
            variants={itemVariants}
            className="mt-12 text-md italic text-gray-500 dark:text-gray-400 border-l-4 border-indigo-500 pl-4"
           >
            "Available for freelance projects"
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;