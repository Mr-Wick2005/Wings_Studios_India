import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Media } from './Media';

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  const [inView, setInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-32 bg-[#0B0B0B]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[#C9A24D] text-xl tracking-[0.3em] uppercase mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['Playfair_Display'] text-white">
            End-to-End Production
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative h-[500px] overflow-hidden cursor-pointer"
              style={{
                filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(4px) brightness(0.5)' : 'none',
                transition: 'filter 0.5s ease',
              }}
            >
              {/* Background Media */}
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Media
                  src={service.image}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? 0.95 : 0.85,
                }}
                transition={{ duration: 0.4 }}
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#0B0B0B]/95
                  via-[#0B0B0B]/70
                  to-[#0B0B0B]/20
                "
              />


              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                {/* Service Number */}
                <div className="text-[#C9A24D] font-['Playfair_Display'] text-lg mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-['Playfair_Display'] text-white mb-6">
                  {service.title}
                </h3>

                {/* Description - Always visible on hover */}
                <motion.div
  animate={{
    opacity: hoveredIndex === index ? 1 : 0,
    y: hoveredIndex === index ? 0 : 20,
  }}
  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  className="
    space-y-4
    bg-black/40
    backdrop-blur-sm
    p-4
    rounded-md
  "
>
  <p
    className="
      text-white
      text-base
      leading-relaxed
      font-medium
      drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]
    "
  >
    {service.description}
  </p>

  <ul className="space-y-2 pt-2">
    {service.features.map((feature, i) => (
      <li
        key={i}
        className="
          text-[#F5F5F5]
          text-sm
          flex
          items-center
          gap-3
          font-normal
          drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]
        "
      >
        <span className="w-1.5 h-1.5 bg-[#C9A24D] flex-shrink-0" />
        {feature}
      </li>
    ))}
  </ul>
</motion.div>


                {/* Divider */}
                <motion.div
                  initial={{ width: '60px' }}
                  animate={{
                    width: hoveredIndex === index ? '120px' : '60px',
                  }}
                  transition={{ duration: 0.5 }}
                  className="h-[2px] bg-[#C9A24D] mt-6"
                />
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-[#C9A24D]/20 group-hover:border-[#C9A24D]/80 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}