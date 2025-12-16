import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoopingSplitTextProps {
  text: string;
  className?: string;
  repeatDelay?: number; // Delay in seconds before animation repeats
}

export function LoopingSplitText({ 
  text, 
  className = '',
  repeatDelay = 5 
}: LoopingSplitTextProps) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, repeatDelay * 1000);

    return () => clearInterval(interval);
  }, [repeatDelay]);

  const chars = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Increased delay between each letter
        delayChildren: 0.2, // Start animation sooner
      }
    }
  };

  const child = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -90,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 120,
        duration: 0.6,
      }
    }
  };

  return (
    <motion.h1
      key={key}
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        perspective: 1000,
        display: 'inline-block',
      }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          style={{
            display: 'inline-block',
            transformOrigin: 'center bottom',
            transformStyle: 'preserve-3d',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}