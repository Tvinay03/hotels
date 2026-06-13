import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaGoogle } from 'react-icons/fa';

const reviews = [
  {
    text: 'The biryani here is absolutely divine! Best we\'ve had in Vizag. The ambience is perfect for family dinners.',
    name: 'Priya Sharma',
    stars: 5,
    date: '2 weeks ago',
  },
  {
    text: 'Celebrated our anniversary here. The staff was incredibly attentive, and the butter chicken was to die for!',
    name: 'Rahul & Meena',
    stars: 5,
    date: '1 month ago',
  },
  {
    text: 'Fresh ingredients, authentic flavours. The tandoori platter is a must-try. Will definitely come back!',
    name: 'Arjun Reddy',
    stars: 5,
    date: '3 weeks ago',
  },
  {
    text: 'Best fine dining experience in Visakhapatnam. The chef personally came to recommend dishes. Outstanding!',
    name: 'Sneha Patel',
    stars: 5,
    date: '1 week ago',
  },
  {
    text: 'The mutton rogan josh transported me to Kashmir. Incredible depth of flavour. Premium experience at fair prices.',
    name: 'Vikram Singh',
    stars: 4,
    date: '2 months ago',
  },
  {
    text: 'Royal Spice never disappoints. From starters to desserts, every dish is crafted with perfection. Our go-to restaurant!',
    name: 'Lakshmi Devi',
    stars: 5,
    date: '3 days ago',
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        className={i < count ? 'text-gold' : 'text-bg-elevated'}
        size={16}
      />
    ))}
  </div>
);

const ReviewCard = ({ review, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="glass-card rounded-xl p-6 min-w-[300px] md:min-w-[380px] snap-center flex flex-col justify-between shrink-0"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <StarRating count={review.stars} />
          <div className="flex items-center gap-1.5 bg-bg-elevated/60 px-2.5 py-1 rounded-full">
            <FaGoogle className="text-[#4285F4]" size={12} />
            <span className="text-text-muted text-[10px] font-medium tracking-wide uppercase">
              Google
            </span>
          </div>
        </div>
        <p className="text-text italic text-sm md:text-base leading-relaxed mb-6">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>
      <div className="flex items-center justify-between border-t border-gold/10 pt-4">
        <div>
          <p className="font-heading text-gold text-sm">{review.name}</p>
          <p className="text-text-muted text-xs mt-0.5">{review.date}</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold font-heading text-sm">
          {review.name.charAt(0)}
        </div>
      </div>
    </motion.div>
  );
};

const Reviews = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section id="reviews" className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="text-gold text-xs md:text-sm font-semibold tracking-[0.25em] uppercase font-body">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text mt-4 mb-6">
            What Our Guests Say
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* Overall Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center mb-10"
        >
          <div className="glass-card rounded-2xl px-8 py-5 flex items-center gap-6">
            <div className="flex items-baseline gap-2">
              <span className="text-gold font-heading text-4xl md:text-5xl font-bold">
                4.9
              </span>
              <FaStar className="text-gold" size={24} />
            </div>
            <div className="h-10 w-px bg-gold/20" />
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-gold" size={14} />
                ))}
              </div>
              <p className="text-text-muted text-xs md:text-sm">
                Based on <span className="text-text font-medium">500+</span> Reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <div
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-text-muted text-xs text-center mt-4 md:hidden"
        >
          Swipe to see more reviews →
        </motion.p>
      </div>
    </section>
  );
};

export default Reviews;
