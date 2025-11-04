'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Determine basePath at runtime
  const basePath = process.env.NODE_ENV === 'production' ? '/lowkeycoki' : '';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={`${basePath}/girl-smoking-hookah.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-midnight/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Main headline with increased letter spacing */}
          <h1 className="text-6xl md:text-8xl font-bold text-sand tracking-widest leading-tight">
            Lowkey Coki
          </h1>
          <h3 className="text-3xl md:text-4xl font-bold text-sand tracking-tight leading-tight">
            New Hookah Spot right on Coki beach
          </h3>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-sand/90 font-light tracking-wide max-w-2xl mx-auto">
            Sunsets · Beach · Beats & Clouds
          </p>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-0.5 bg-gold mx-auto"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <a
              href="#reserve"
              className="bg-coral text-white px-8 py-4 rounded-full hover:bg-coral/90 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-coral/50"
            >
              Reserve Your Spot
            </a>
            <a
              href="#menu"
              className="border-2 border-sand text-sand px-8 py-4 rounded-full hover:bg-sand hover:text-midnight transition-all duration-300 font-medium text-lg"
            >
              View Menu
            </a>
          </motion.div>

          {/* Location tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-sand/70 text-sm tracking-widest mt-8"
          >
            COKI BEACH · ST. THOMAS, USVI
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-sand/60" size={32} />
        </motion.div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent z-10" />
    </section>
  );
}
