import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import CircularGallery from './CircularGallery';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Transform projects to gallery items format with title showing "Title - Category"
  const galleryItems = projects.map(project => ({
    image: project.image,
    text: `${project.title} - ${project.category}`
  }));

  return (
    <section id="work" ref={ref} className="relative py-24 lg:py-32 bg-[#0B0B0B]">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24D] text-sm tracking-[0.3em] uppercase mb-4 block">Our Work</span>
          <h2 className="text-4xl lg:text-6xl font-['Playfair_Display'] text-white">
            Selected Projects
          </h2>
        </motion.div>

        {/* Circular Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative"
          style={{ height: '600px' }}
        >
          <CircularGallery 
            items={galleryItems}
            bend={3}
            textColor="#C9A24D"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={2}
            font="bold 28px 'Playfair Display', serif"
          />
        </motion.div>

        {/* Interaction Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[#999999] text-sm tracking-wider uppercase">
            Drag or scroll to explore our portfolio
          </p>
        </motion.div>
      </div>
    </section>
  );
}
