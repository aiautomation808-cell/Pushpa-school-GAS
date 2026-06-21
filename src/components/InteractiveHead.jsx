import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function InteractiveHead() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Calculate eye rotation/translation based on mouse position
  const calculateEyeTransform = (eyeXFromCenter, eyeYFromCenter) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 + eyeXFromCenter;
    const centerY = rect.top + rect.height / 2 + eyeYFromCenter;
    
    const deltaX = mousePos.x - centerX;
    const deltaY = mousePos.y - centerY;
    
    const maxMovement = 8;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 20, maxMovement);
    
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  const leftEye = calculateEyeTransform(-30, -10);
  const rightEye = calculateEyeTransform(30, -10);

  return (
    <div ref={containerRef} className="relative flex h-full min-h-[350px] w-full items-center justify-center">
      {/* Container for Head + Body */}
      <motion.div 
        className="relative"
        animate={{
          rotateX: (mousePos.y - window.innerHeight / 2) / -30,
          rotateY: (mousePos.x - window.innerWidth / 2) / 30,
          scale: isClicking ? 0.95 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      >
        {/* Head Base */}
        <div 
          className="relative h-48 w-48 rounded-[4rem] bg-[#ffd7b5] shadow-2xl shadow-primary-900/20 ring-1 ring-white/10 overflow-visible"
        >
          {/* Hair (Slightly graying) */}
          <div className="absolute -top-4 -left-4 w-56 h-20 bg-slate-400 rounded-[3rem] -z-10" style={{ transform: 'translateZ(-5px)' }}></div>
          <div className="absolute -top-6 left-8 w-32 h-16 bg-slate-300 rounded-[3rem] -z-10" style={{ transform: 'translateZ(-5px)' }}></div>
          
          {/* Ears */}
          <div className="absolute top-1/2 -left-4 w-8 h-12 bg-[#f4cbab] rounded-l-full -translate-y-1/2 shadow-inner"></div>
          <div className="absolute top-1/2 -right-4 w-8 h-12 bg-[#f4cbab] rounded-r-full -translate-y-1/2 shadow-inner"></div>

          {/* Glasses */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 w-[85%] justify-center pointer-events-none" style={{ transform: 'translateZ(30px)' }}>
            {/* Left Lens */}
            <div className="relative h-16 w-16 rounded-full border-[5px] border-primary-900 bg-white/40 backdrop-blur-sm shadow-xl flex items-center justify-center overflow-hidden">
              <div className="h-10 w-10 rounded-full bg-white relative shadow-inner">
                <motion.div 
                  className="absolute h-6 w-6 bg-slate-800 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ x: leftEye.x, y: leftEye.y, scale: isClicking ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-white opacity-90"></div>
                </motion.div>
              </div>
            </div>
            
            {/* Bridge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-1.5 bg-primary-900 rounded-full"></div>

            {/* Right Lens */}
            <div className="relative h-16 w-16 rounded-full border-[5px] border-primary-900 bg-white/40 backdrop-blur-sm shadow-xl flex items-center justify-center overflow-hidden">
              <div className="h-10 w-10 rounded-full bg-white relative shadow-inner">
                 <motion.div 
                  className="absolute h-6 w-6 bg-slate-800 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ x: rightEye.x, y: rightEye.y, scale: isClicking ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-white opacity-90"></div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Nose */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-6 h-8 bg-[#e8be9d] rounded-full shadow-md" style={{ transform: 'translateZ(25px)' }}></div>

          {/* Mustache / Smile */}
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2" style={{ transform: 'translateZ(20px)' }}>
             <motion.div 
               className="h-8 w-20 bg-white rounded-full shadow-lg overflow-hidden border-b-4 border-slate-200"
               animate={{ height: isClicking ? 12 : 8, borderRadius: isClicking ? '2rem' : '4rem 4rem 1rem 1rem' }}
             />
          </div>
          
          {/* Eyebrows */}
          <motion.div className="absolute top-[20%] left-[15%] w-12 h-3 bg-slate-500 rounded-full" animate={{ y: isClicking ? -5 : 0 }} style={{ transform: 'translateZ(25px)' }}></motion.div>
          <motion.div className="absolute top-[20%] right-[15%] w-12 h-3 bg-slate-500 rounded-full" animate={{ y: isClicking ? -5 : 0 }} style={{ transform: 'translateZ(25px)' }}></motion.div>
        </div>

        {/* Neck & Body/Collar */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 flex flex-col items-center" style={{ transform: 'translateZ(-10px)' }}>
           {/* Neck */}
           <div className="w-12 h-10 bg-[#e8be9d]"></div>
           {/* Shirt Collar & Tie */}
           <div className="relative w-48 h-20 bg-white rounded-t-[3rem] shadow-xl overflow-hidden border-t border-slate-200">
              {/* Suit Jacket */}
              <div className="absolute inset-0 border-[16px] border-primary-900 rounded-t-[3rem]"></div>
              {/* Tie */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-24 bg-gold-500 rounded-b-xl transform origin-top rotate-[-5deg]"></div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
