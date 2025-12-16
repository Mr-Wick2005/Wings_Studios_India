import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { LoopingSplitText } from './LoopingSplitText';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ken Burns zoom effect
      const handleScroll = () => {
        const scrolled = window.scrollY;
        const maxScroll = window.innerHeight;
        const scale = 1 + (scrolled / maxScroll) * 0.1;
        if (videoRef.current) {
          videoRef.current.style.transform = `scale(${Math.min(scale, 1.15)})`;
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={videoRef}
        className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0B0B0B]" />

      {/* Film Grain */}
      <div className="absolute inset-0 film-grain" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#C9A24D] flex items-center justify-center mx-auto mb-6">
            <span className="text-[#0B0B0B] font-bold text-4xl lg:text-5xl font-['Playfair_Display']">W</span>
          </div>
        </motion.div>

        {/* Main Headline with Looping SplitText Animation */}
        <LoopingSplitText
          text="WINGS STUDIOS INDIA"
          className="text-5xl sm:text-6xl lg:text-8xl font-['Playfair_Display'] text-white mb-6 tracking-tight max-w-5xl"
          repeatDelay={5}
        />

        {/* Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-[#C9A24D] mb-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl lg:text-3xl text-[#F5F5F5] mb-3 font-light tracking-wide max-w-3xl"
        >
          Cinematic storytelling. Engineered for the future.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm lg:text-base text-[#999999] tracking-[0.3em] uppercase"
        >
          Film & Digital Production · Mumbai
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[#C9A24D] text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="text-[#C9A24D]" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}