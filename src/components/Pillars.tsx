import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Film, Cpu, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: Film,
    title: 'Clear Storytelling',
    description: 'Every frame serves the narrative. We craft stories that resonate, engage, and leave lasting impact.',
  },
  {
    icon: Cpu,
    title: 'Technical Precision',
    description: 'From pre-production planning to post-production excellence, every detail is executed with studio-grade discipline.',
  },
  {
    icon: CheckCircle,
    title: 'Dependable Delivery',
    description: 'On time, on budget, on brief. We deliver what we promise, every single time.',
  },
];

export function Pillars() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-[#0B0B0B]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[#C9A24D] text-xl tracking-[0.3em] uppercase mb-4 block">What Defines Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['Playfair_Display'] text-white">
            Our Core Principles
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#121212] border border-[#C9A24D]/10 p-8 lg:p-10 transition-all duration-500 hover:border-[#C9A24D]/40"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/0 via-[#C9A24D]/0 to-[#C9A24D]/0 group-hover:from-[#C9A24D]/5 group-hover:to-[#C9A24D]/0 transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 w-14 h-14 flex items-center justify-center bg-[#C9A24D]/10 group-hover:bg-[#C9A24D]/20 transition-colors duration-500">
                  <pillar.icon className="text-[#C9A24D]" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-['Playfair_Display'] text-white mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[#999999] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Border Accent */}
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '60px' } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                className="absolute bottom-0 left-8 h-[2px] bg-[#C9A24D]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}