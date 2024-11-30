import { motion } from 'framer-motion';

export default function KineticLogo() {
  return (
    <motion.svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      initial="initial"
      animate="animate"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="dark:stop-white stop-black" stopOpacity="0.2" />
          <stop offset="100%" className="dark:stop-white stop-black" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      
      <motion.circle
        cx="250"
        cy="250"
        r="200"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M150 250 L350 250 M250 150 L250 350"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="dark:text-white text-black"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      />
      
      <motion.circle
        cx="250"
        cy="250"
        r="50"
        className="dark:text-white text-black"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      />
    </motion.svg>
  );
}