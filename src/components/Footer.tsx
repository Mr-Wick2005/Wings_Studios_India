import { motion } from 'motion/react';
import { useRef } from 'react';
import SplashCursor from './SplashCursor';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  
  return (
    <footer ref={footerRef} className="relative bg-[#0B0B0B] border-t border-[#C9A24D]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#C9A24D] flex items-center justify-center">
              <span className="text-[#0B0B0B] font-bold text-xl font-['Playfair_Display']">W</span>
            </div>
            <span className="text-white font-['Playfair_Display'] tracking-wide">
              WINGS STUDIOS
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#999999] text-sm text-center md:text-left"
          >
            © 2024 Wings Studios India. All rights reserved.
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-6 text-sm"
          >
            <a href="#" className="text-[#999999] hover:text-[#C9A24D] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#999999] hover:text-[#C9A24D] transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>
      <SplashCursor containerRef={footerRef} />
    </footer>
  );
}