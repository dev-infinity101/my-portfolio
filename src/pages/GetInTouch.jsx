import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Send, Mail, Linkedin, Instagram, Github, MapPin, ArrowRight, Sparkles } from 'lucide-react';

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
      transition: { duration: 0.8, staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const inputClass = "block w-full rounded-md border py-3 px-4 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 border-gray-200 dark:border-gray-700 shadow-sm";

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prabodhq89@gmail.com',
      href: 'mailto:prabodhq89@gmail.com',
      color: 'text-indigo-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/',
      color: 'text-blue-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@_prabodh_.dev_',
      href: 'https://www.instagram.com/_prabodh_.dev_/',
      color: 'text-pink-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'https://github.com/dev-infinity101',
      color: 'text-gray-800 dark:text-gray-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
          mixBlendMode: 'multiply',
        }}
      ></div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-6xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I'm here to discuss your project needs and explore how we can work together to achieve outstanding results.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12"
        >
          <motion.div 
            variants={itemVariants} 
            className="order-2 lg:order-1"
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-md">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/50 rounded-md flex items-center justify-center">
                  <Send size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Send a Message</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Expect a response within one business day.</p>
                </div>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      name="firstName" 
                      placeholder="First Name" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      className={inputClass}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-600 mt-2">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="lastName" 
                      placeholder="Last Name" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      className={inputClass}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-600 mt-2">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div className="relative">
                  <textarea 
                    name="message" 
                    placeholder="Describe your project or inquiry..." 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium py-3 px-6 rounded-md hover:from-orange-500 hover:to-orange-700 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight size={16} />
                </motion.button>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 dark:bg-green-800/30 rounded-md p-4 text-center text-green-700 dark:text-green-300 text-sm mt-4">
                    Message sent successfully. Thank you for reaching out.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 dark:bg-red-800/30 rounded-md p-4 text-center text-red-700 dark:text-red-300 text-sm mt-4">
                    There was an issue sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="order-1 lg:order-2 space-y-8"
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-md">
              <div className="mb-8">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/50 rounded-md flex items-center justify-center mb-4">
                  <MapPin size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Connect With Me</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  I'm eager to discuss potential collaborations and how my expertise can support your goals. Feel free to connect via any channel below.
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <div className={`w-8 h-8 flex items-center justify-center ${social.color}`}>
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white text-base">
                          {social.label}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {social.value}
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-gray-400" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-800/20 rounded-xl p-6 border border-green-100 dark:border-green-700/30">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-md"></div>
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200 text-base">Open to New Opportunities</p>
                  <p className="text-green-700 dark:text-green-300 text-sm mt-1">Accepting freelance projects • Available for remote and on-site work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;