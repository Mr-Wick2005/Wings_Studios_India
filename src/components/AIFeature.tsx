import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Eye } from 'lucide-react';
import { Media } from './Media';

interface AIFeatureProps {
  image: string;
}

export function AIFeature({ image }: AIFeatureProps) {
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

  const features = [
    {
      icon: Sparkles,
      title: 'AI Storyboarding',
      description: 'Rapidly visualize concepts and iterate on creative ideas',
    },
    {
      icon: Eye,
      title: 'Concept Visualization',
      description: 'Preview complex scenes before production begins',
    },
    {
      icon: Zap,
      title: 'Smart Workflows',
      description: 'Accelerate production timelines without compromising quality',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-[#0B0B0B] to-[#121212] overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
            className="absolute top-[20%] w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Media
                  src={image}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/30 via-transparent to-[#0B0B0B]/50" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-[#C9A24D]/10 backdrop-blur-sm border border-[#C9A24D]/30 flex items-center justify-center"
              >
                <Sparkles className="text-[#C9A24D]" size={32} />
              </motion.div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#C9A24D]/50" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#C9A24D]/50" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-[#C9A24D] text-xl tracking-[0.3em] uppercase">The Future of Production</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['Playfair_Display'] text-white mb-8 leading-tight"
            >
              AI-Assisted Filmmaking
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[#CCCCCC] text-lg leading-relaxed mb-10"
            >
              Blending cinematic expertise with AI-assisted workflows to visualize faster, produce smarter, 
              and expand creative possibilities. We leverage cutting-edge technology while maintaining the 
              human touch that makes stories resonate.
            </motion.p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center group-hover:bg-[#C9A24D]/20 transition-colors duration-300">
                    <feature.icon className="text-[#C9A24D]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-1">{feature.title}</h4>
                    <p className="text-[#999999] text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}