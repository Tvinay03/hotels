import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import aboutImg from '../assets/images/about-restaurant.png';
import chefImg from '../assets/images/chef.png';

const stats = [
  { number: 15, suffix: '+', label: 'Years of Excellence' },
  { number: 50000, suffix: '+', label: 'Happy Customers' },
  { number: 200, suffix: '+', label: 'Signature Dishes' },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num;
  };

  return (
    <span className="text-3xl font-heading text-gold-gradient">
      {formatNumber(count)}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section id="about" className="section-padding bg-bg-primary">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase font-body">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-text mt-4 mb-6">
            A Legacy of Flavour & Tradition
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column — Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative gold border accent */}
            <div className="absolute -top-3 -left-3 w-full h-full rounded-xl border-2 border-gold/30 pointer-events-none" />
            <img
              src={aboutImg}
              alt="Royal Spice Restaurant exterior"
              className="relative w-full rounded-xl gold-glow object-cover aspect-[4/3]"
            />
            {/* Bottom-right decorative accent */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-gold/40 rounded-br-xl pointer-events-none" />
          </motion.div>

          {/* Right Column — Text */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-text-muted leading-relaxed text-base lg:text-lg">
              Nestled in the heart of Visakhapatnam, Royal Spice Restaurant has been
              crafting culinary masterpieces since 2008. Our passion for authentic
              Indian cuisine drives us to source the finest ingredients and prepare
              each dish with love and tradition.
            </p>
            <p className="text-text-muted leading-relaxed text-base lg:text-lg">
              From the aromatic biryanis of Hyderabad to the robust curries of the
              coast, every plate tells a story of heritage, skill, and an unwavering
              commitment to excellence.
            </p>

            {/* Chef Card */}
            <div className="flex items-center gap-4 mt-4 p-4 rounded-lg bg-bg-card border border-gold/10">
              <img
                src={chefImg}
                alt="Chef Rajesh Kumar"
                className="w-16 h-16 rounded-full object-cover border-2 border-gold/40"
              />
              <div>
                <h4 className="text-gold font-heading text-lg">Chef Rajesh Kumar</h4>
                <p className="text-text-muted text-sm">Head Chef & Founder</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card rounded-xl p-8 text-center flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            >
              <AnimatedCounter
                target={stat.number}
                suffix={stat.suffix}
                inView={statsInView}
              />
              <span className="text-text-muted text-sm mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
