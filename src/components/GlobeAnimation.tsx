import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const MERIDIANS = 12;
const PARALLELS = 6;

export default function GlobeAnimation() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Generate meridian paths
  const getMeridianPath = (index: number) => {
    const angle = (index * 360) / MERIDIANS;
    const startX = 250 + 150 * Math.cos((angle * Math.PI) / 180);
    const startY = 100;
    const endX = 250 + 150 * Math.cos((angle * Math.PI) / 180);
    const endY = 400;
    return `M ${startX} ${startY} Q 250 250, ${endX} ${endY}`;
  };

  // Generate parallel paths
  const getParallelPath = (index: number) => {
    const height = 100 + (index * 300) / PARALLELS;
    const compression = Math.sin(((height - 100) / 300) * Math.PI);
    const rx = 150;
    const ry = 30 * compression;
    return `M ${250 - rx} ${height} A ${rx} ${ry} 0 1 0 ${250 + rx} ${height} A ${rx} ${ry} 0 1 0 ${250 - rx} ${height}`;
  };

  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 0.6,
      transition: { 
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const sphereVariants = {
    animate: {
      rotateY: 360,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity
      },
    },
  };

  return (
    <motion.svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      initial="initial"
      animate="animate"
      variants={sphereVariants}
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="sphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="dark:stop-white stop-black" stopOpacity="0.1" />
          <stop offset="100%" className="dark:stop-white stop-black" stopOpacity="0.02" />
        </linearGradient>
        <radialGradient id="sphereRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" className="dark:stop-white stop-black" stopOpacity="0.1" />
          <stop offset="100%" className="dark:stop-white stop-black" stopOpacity="0" />
        </radialGradient>
      </defs>

      <motion.circle
        cx="250"
        cy="250"
        r="150"
        fill="url(#sphereRadial)"
        className="dark:opacity-20 opacity-10"
      />

      {/* Meridians */}
      {Array.from({ length: MERIDIANS }).map((_, i) => (
        <motion.path
          key={`meridian-${i}`}
          d={getMeridianPath(i)}
          className="dark:stroke-white/20 stroke-black/20"
          strokeWidth="1"
          fill="none"
          variants={lineVariants}
        />
      ))}

      {/* Parallels */}
      {Array.from({ length: PARALLELS }).map((_, i) => (
        <motion.path
          key={`parallel-${i}`}
          d={getParallelPath(i + 1)}
          className="dark:stroke-white/20 stroke-black/20"
          strokeWidth="1"
          fill="none"
          variants={lineVariants}
        />
      ))}

      {/* Equator highlight */}
      <motion.circle
        cx="250"
        cy="250"
        r="150"
        className="dark:stroke-white/30 stroke-black/30"
        strokeWidth="2"
        fill="none"
        variants={lineVariants}
      />
    </motion.svg>
  );
}