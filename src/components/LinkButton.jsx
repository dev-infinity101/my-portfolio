import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function LinkButton({ to, href, imageUrl, variant = 'outline', children }) {
  const isInternal = !!to;
  const MotionComponent = isInternal ? motion(Link) : motion.a;

  const baseStyles = "w-full font-medium text-center p-4 transition-all duration-300 ease-in-out flex items-center justify-center gap-3 border rounded-none";
  
  const variants = {
    filled: "bg-[#00FF88] text-black border-transparent hover:bg-[#00D080]",
    outline: "bg-transparent text-primaryText dark:text-white border-gray-200 dark:border-white hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white"
  };

  const props = {
    whileHover: { y: -2, transition: { duration: 0.2 } },
    whileTap: { scale: 0.98 },
    className: `${baseStyles} ${variants[variant]}`,
    ...(isInternal
      ? { to }
      : { href, target: '_blank', rel: 'noopener noreferrer' }),
  };

  return (
    <MotionComponent {...props}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
      )}
      <span className="flex-grow text-center">{children}</span>
    </MotionComponent>
  );
}

export default LinkButton;