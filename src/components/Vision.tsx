import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Cubes from './Cubes';

export function Vision() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-[#0B0B0B] overflow-hidden">
      {/* 3D Cubes Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <Cubes
          gridSize={10}
          maxAngle={35}
          radius={4}
          borderStyle="1px solid #C9A24D"
          faceColor="#0B0B0B"
          rippleColor="#C9A24D"
          rippleSpeed={1.2}
          autoAnimate={true}
          rippleOnClick={false}
          shadow="0 0 20px rgba(201, 162, 77, 0.2)"
          duration={{ enter: 0.4, leave: 0.8 }}
        />
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A24D 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[#C9A24D] text-sm tracking-[0.3em] uppercase">Our Vision</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-['Playfair_Display'] text-white mb-8 leading-tight"
          >
            "To build a future-ready creative studio blending cinematic tradition with emerging technology."
          </motion.h2>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#C9A24D]" />
            <div className="w-2 h-2 bg-[#C9A24D] rotate-45" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#C9A24D]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="text-[#999999] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We believe in the power of stories that move people. Our commitment is to push creative boundaries 
            while maintaining the discipline and craft that defines great filmmaking.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}