import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IoLeaf, IoShield, IoHeart, IoTime, IoStar } from 'react-icons/io5';

const features = [
  {
    icon: IoLeaf,
    title: 'Fresh Ingredients',
    description:
      'We source the freshest local ingredients daily, ensuring every dish bursts with natural flavours.',
  },
  {
    icon: IoShield,
    title: 'Hygienic Kitchen',
    description:
      'Our kitchen follows the highest standards of cleanliness and food safety for your peace of mind.',
  },
  {
    icon: IoHeart,
    title: 'Family Friendly',
    description:
      'A warm, welcoming atmosphere perfect for family gatherings, celebrations, and cozy dinners.',
  },
  {
    icon: IoTime,
    title: 'Fast Service',
    description:
      'From order to plate in minutes. Efficient service without compromising on quality or presentation.',
  },
  {
    icon: IoStar,
    title: 'Premium Dining',
    description:
      'An elevated dining experience with attention to every detail — from ambience to plating.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      variants={cardVariants}
      className="glass-card rounded-xl p-8 text-center border border-transparent hover:border-gold/60 transition-all duration-300 hover:-translate-y-1 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
    >
      <div className="flex justify-center mb-4">
        <Icon className="text-4xl text-gold" />
      </div>
      <h3 className="font-heading text-lg text-text mb-2">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-[0.2em] font-body font-medium">
            Why Royal Spice
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text mt-4 mb-6">
            Why Choose Us
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-6"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
