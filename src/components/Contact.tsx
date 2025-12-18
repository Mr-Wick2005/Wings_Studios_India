import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import SplashCursor from './SplashCursor';

export function Contact() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 bg-gradient-to-b from-[#121212] to-[#0B0B0B]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[#C9A24D] text-xl tracking-[0.3em] uppercase mb-4 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['Playfair_Display'] text-white">
            Let's Create Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-[#F5F5F5] mb-2 text-sm uppercase tracking-wider">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1A1A1A] border-[#C9A24D]/20 text-white focus:border-[#C9A24D] transition-colors h-12"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-[#F5F5F5] mb-2 text-sm uppercase tracking-wider">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1A1A1A] border-[#C9A24D]/20 text-white focus:border-[#C9A24D] transition-colors h-12"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-[#F5F5F5] mb-2 text-sm uppercase tracking-wider">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#1A1A1A] border-[#C9A24D]/20 text-white focus:border-[#C9A24D] transition-colors min-h-[150px] resize-none"
                  required
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#C9A24D] text-[#0B0B0B] py-4 uppercase tracking-wider hover:bg-[#D4AD5A] transition-colors duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center group-hover:bg-[#C9A24D]/20 transition-colors">
                  <Mail className="text-[#C9A24D]" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Email</h4>
                  <a href="mailto:contact@wingsstudios.in" className="text-[#999999] hover:text-[#C9A24D] transition-colors">
                    wingsstudiosindia@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center group-hover:bg-[#C9A24D]/20 transition-colors">
                  <Phone className="text-[#C9A24D]" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Phone</h4>
                  <a href="tel:+912212345678" className="text-[#999999] hover:text-[#C9A24D] transition-colors">
                    +91 99678929399
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center group-hover:bg-[#C9A24D]/20 transition-colors">
                  <MapPin className="text-[#C9A24D]" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Location</h4>
                  <p className="text-[#999999]">
                    201  2nd Floor 
                    ACME Plaza No 2
                    Opp. Sangam Cinema 
                    Andheri Kurla Road 
                    Andheri East
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-8 border-t border-[#C9A24D]/20"
            >
              <h4 className="text-white mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { Icon: Instagram, href: '#', label: 'Instagram' },
                  { Icon: Facebook, href: '#', label: 'Facebook' },
                  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { Icon: Youtube, href: '#', label: 'YouTube' },
                  { 
                    Icon: () => (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    ), 
                    href: '#', 
                    label: 'X' 
                  },
                ].map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center hover:bg-[#C9A24D] hover:text-[#0B0B0B] text-[#C9A24D] transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <SplashCursor containerRef={sectionRef} />
    </section>
  );
}