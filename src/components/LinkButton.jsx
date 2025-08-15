import { motion } from 'framer-motion'

function LinkButton({ href, imageUrl, children }) {
  return (
    <motion.a
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-white text-primaryText font-semibold text-center rounded-full p-4 shadow-soft hover:shadow-soft-hover transition-all duration-300 ease-in-out flex items-center justify-center gap-3 border border-gray-200 hover:border-gray-300"
    >
      {imageUrl && (
        <img src={imageUrl} alt="" className="w-8 h-8 rounded-full object-cover" />
      )}
      <span className="flex-grow text-center">{children}</span>
    </motion.a>
  )
}

export default LinkButton