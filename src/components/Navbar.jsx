import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, when: 'beforeChildren', staggerChildren: 0.07 } },
  exit: { opacity: 0, transition: { duration: 0.25, when: 'afterChildren' } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 h-20 flex items-center transition-all duration-500 ${
          scrolled
            ? 'bg-bg-primary/95 border-b border-gold/30 shadow-lg shadow-black/30 backdrop-blur-md'
            : 'glass'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <span className="text-gold-gradient font-heading text-2xl sm:text-3xl tracking-wide">
              Royal Spice
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative text-text-muted text-sm uppercase tracking-widest font-body hover:text-gold transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>


          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-gold p-2 -mr-2 focus:outline-none"
            aria-label="Open menu"
          >
            <FiMenu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-bg-primary/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={closeMobile}
              className="absolute top-6 right-5 text-gold p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <FiX className="w-8 h-8" />
            </button>

            {/* Logo in overlay */}
            <motion.span
              variants={linkVariants}
              className="text-gold-gradient font-heading text-3xl tracking-wide mb-10"
            >
              Royal Spice
            </motion.span>

            {/* Links */}
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map(({ label, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  variants={linkVariants}
                  onClick={closeMobile}
                  className="text-text text-xl uppercase tracking-[0.25em] font-body hover:text-gold transition-colors duration-300"
                >
                  {label}
                </motion.a>
              ))}

            </nav>

            {/* Decorative divider */}
            <motion.div variants={linkVariants} className="gold-divider w-32 mt-12" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
