import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function LinkButton({ to, href, imageUrl, children }) {
  const isInternal = !!to;
  const MotionComponent = isInternal ? motion(Link) : motion.a;

  const props = {
    whileHover: { scale: 1.03, transition: { duration: 0.2 } },
    whileTap: { scale: 0.98 },
    className:
      'w-full bg-white text-primaryText font-semibold text-center rounded-full p-4 shadow-soft hover:shadow-soft-hover transition-all duration-300 ease-in-out flex items-center justify-center gap-3 border border-gray-200 hover:border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:border-gray-500',
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