import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import heroBg from '../assets/images/hero-bg.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Royal Spice ambiance"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-bg-primary" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Premium Label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-6"
        >
          ✦ PREMIUM INDIAN DINING ✦
        </motion.p>

        {/* Restaurant Name */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading text-gold-gradient text-5xl md:text-7xl lg:text-8xl font-bold mb-3"
        >
          Royal Spice
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-text-muted text-lg tracking-[0.25em] uppercase mb-6"
        >
          RESTAURANT
        </motion.p>

        {/* Gold Divider */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-6"
        >
          <div className="gold-divider w-24" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading italic text-text text-xl md:text-2xl mb-10"
        >
          Authentic Flavours, Memorable Experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#menu" className="btn-gold">
            View Menu
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaWhatsapp className="text-lg" />
            Order on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiChevronDown className="text-3xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
