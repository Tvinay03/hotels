import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import butterChicken from '../assets/images/dish-butter-chicken.png';
import biryani from '../assets/images/dish-biryani.png';
import tandoori from '../assets/images/dish-tandoori.png';
import paneerTikka from '../assets/images/dish-paneer-tikka.png';
import gulabJamun from '../assets/images/dish-gulab-jamun.png';
import muttonCurry from '../assets/images/dish-mutton-curry.png';

const dishes = [
  {
    name: 'Butter Chicken',
    image: butterChicken,
    price: '₹450',
    description: 'Tender chicken in rich, creamy tomato-butter sauce with aromatic spices',
    veg: false,
  },
  {
    name: 'Hyderabadi Biryani',
    image: biryani,
    price: '₹399',
    description: 'Fragrant basmati rice layered with succulent meat, saffron & caramelized onions',
    veg: false,
  },
  {
    name: 'Tandoori Platter',
    image: tandoori,
    price: '₹549',
    description: 'Assorted tandoori meats marinated in yogurt spices, charcoal grilled',
    veg: false,
  },
  {
    name: 'Paneer Tikka',
    image: paneerTikka,
    price: '₹349',
    description: 'Cottage cheese cubes marinated in spiced yogurt, grilled to perfection',
    veg: true,
  },
  {
    name: 'Gulab Jamun',
    image: gulabJamun,
    price: '₹199',
    description: 'Golden milk dumplings soaked in cardamom-infused rose sugar syrup',
    veg: true,
  },
  {
    name: 'Mutton Rogan Josh',
    image: muttonCurry,
    price: '₹599',
    description: 'Slow-cooked mutton in aromatic Kashmiri spices with rich gravy',
    veg: false,
  },
];

const DishCard = ({ dish, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="glass-card rounded-xl overflow-hidden gold-glow-hover transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`inline-block w-3 h-3 rounded-full border-2 ${
              dish.veg
                ? 'bg-green-500 border-green-400'
                : 'bg-red-500 border-red-400'
            }`}
          />
          <h3 className="font-heading text-lg text-gold">{dish.name}</h3>
        </div>

        <p className="text-text-muted text-sm mb-4 leading-relaxed">
          {dish.description}
        </p>

        <div className="flex items-center justify-end">
          <span className="text-gold font-heading text-xl">{dish.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedDishes = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section id="featured" className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 lg:mb-16"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-body font-medium">
            CHEF&apos;S SELECTION
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text mt-4 mb-6">
            Featured Dishes
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish, index) => (
            <DishCard key={dish.name} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
