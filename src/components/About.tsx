import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface AboutProps {
  image: string;
}

export function About({ image }: AboutProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCount1(Math.floor(120 * progress));
        setCount2(Math.floor(30 * progress));
        setCount3(Math.floor(2015 + (2015 - 2015) * progress));
        
        if (step >= steps) {
          clearInterval(timer);
          setCount1(120);
          setCount2(30);
          setCount3(2015);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-[#C9A24D] text-sm tracking-[0.3em] uppercase">Who We Are</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-['Playfair_Display'] text-white mb-8 leading-tight"
            >
              A Fully Integrated Film Studio
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-[#CCCCCC] text-lg leading-relaxed">
                Wings Studios India is a fully integrated film and digital production company delivering 
                end-to-end solutions—from concept development to final delivery.
              </p>
              <p className="text-[#999999] leading-relaxed">
                Based in Mumbai, we combine cinematic excellence with cutting-edge technology to create 
                compelling narratives for brands, agencies, and content platforms. Our approach blends 
                traditional storytelling mastery with AI-assisted workflows, enabling us to visualize 
                faster and produce smarter.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div className="border-l-2 border-[#C9A24D] pl-4">
                <div className="text-4xl lg:text-5xl font-['Playfair_Display'] text-[#C9A24D] mb-2">
                  {count1}+
                </div>
                <div className="text-sm text-[#999999] uppercase tracking-wide">Projects</div>
              </div>
              <div className="border-l-2 border-[#C9A24D] pl-4">
                <div className="text-4xl lg:text-5xl font-['Playfair_Display'] text-[#C9A24D] mb-2">
                  {count2}+
                </div>
                <div className="text-sm text-[#999999] uppercase tracking-wide">Team Members</div>
              </div>
              <div className="border-l-2 border-[#C9A24D] pl-4">
                <div className="text-4xl lg:text-5xl font-['Playfair_Display'] text-[#C9A24D] mb-2">
                  {count3}
                </div>
                <div className="text-sm text-[#999999] uppercase tracking-wide">Established</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/5] bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A24D]/20 via-transparent to-transparent" />
              {/* Border Frame */}
              <div className="absolute inset-0 border border-[#C9A24D]/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}