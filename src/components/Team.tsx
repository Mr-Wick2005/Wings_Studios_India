import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Founder {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface TeamProps {
  founder: Founder;
  members: TeamMember[];
}

export function Team({ founder, members }: TeamProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#0B0B0B] to-[#121212]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* ===================== */}
        {/* FOUNDER SECTION */}
        {/* ===================== */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#C9A24D] text-sm tracking-[0.3em] uppercase block mb-4">
              Founder
            </span>

            <h2 className="text-4xl lg:text-6xl font-['Playfair_Display'] text-white mb-6">
              The Visionary Behind the Studio
            </h2>

            <p className="text-[#B5B5B5] text-lg leading-relaxed max-w-xl">
              {founder.description}
            </p>
          </motion.div>

          {/* Right: Founder Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group relative max-w-md ml-auto max-h-[420px]"
          >
            <div className="relative aspect-[4/3] max-h-[420px] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url(${founder.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
            </div>

            <div className="absolute inset-0 border border-[#C9A24D]/30 group-hover:border-[#C9A24D]/70 transition-colors duration-500" />

            <div className="text-center mt-6">
              <h3 className="text-2xl font-['Playfair_Display'] text-white">
                {founder.name}
              </h3>
              <p className="text-[#999999] text-sm uppercase tracking-wider mt-1">
                {founder.role}
              </p>
            </div>
          </motion.div>
        </div>
        <br />
        <br />
        <br />

        {/* ===================== */}
        {/* TEAM HEADER */}
        {/* ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-[#C9A24D] text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Team
          </span>
          <h2 className="text-4xl lg:text-6xl font-['Playfair_Display'] text-white">
            The People Behind the Vision
          </h2>
        </motion.div>

        {/* ===================== */}
        {/* TEAM GRID */}
        {/* ===================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                </div>

                <div className="absolute inset-0 border border-[#C9A24D]/20 group-hover:border-[#C9A24D]/60 transition-colors duration-500" />
              </div>

              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-['Playfair_Display'] text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#999999] text-sm uppercase tracking-wider">
                  {member.role}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '40px' } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="h-[1px] bg-[#C9A24D] mx-auto mt-4"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
