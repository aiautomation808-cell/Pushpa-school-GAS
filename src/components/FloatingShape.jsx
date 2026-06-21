import { motion } from 'motion/react';

export function FloatingShape({ 
  type = 'circle', 
  className = '', 
  delay = 0, 
  size = 100, 
  color = 'bg-primary-300' 
}) {
  const shapeClasses = 
    type === 'circle' ? 'rounded-full' : 
    type === 'square' ? 'rounded-[2rem] rotate-12' : 
    'rounded-[3rem] rotate-45';
    
  return (
    <motion.div
      className={`absolute pointer-events-none mix-blend-overlay ${shapeClasses} ${color} ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: type === 'circle' ? 0 : [0, 20, -10, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 6 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    />
  );
}
