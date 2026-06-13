import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { IoLeaf } from 'react-icons/io5';
import { GiMeat } from 'react-icons/gi';

const menuData = {
  Starters: [
    { name: 'Chicken 65', desc: 'Spicy deep-fried chicken tossed with curry leaves', price: '₹279', veg: false },
    { name: 'Paneer Tikka', desc: 'Grilled cottage cheese with bell peppers', price: '₹299', veg: true },
    { name: 'Fish Fry', desc: 'Andhra-style masala fried fish', price: '₹349', veg: false },
    { name: 'Veg Spring Rolls', desc: 'Crispy rolls with vegetable filling', price: '₹199', veg: true },
    { name: 'Mutton Seekh Kebab', desc: 'Minced mutton skewers with aromatic spices', price: '₹399', veg: false },
    { name: 'Gobi Manchurian', desc: 'Indo-Chinese cauliflower fritters in tangy sauce', price: '₹249', veg: true },
  ],
  'Main Course': [
    { name: 'Butter Chicken', desc: 'Rich creamy tomato curry with tender chicken', price: '₹449', veg: false },
    { name: 'Dal Makhani', desc: 'Slow-cooked black lentils in buttery gravy', price: '₹299', veg: true },
    { name: 'Mutton Rogan Josh', desc: 'Kashmiri-style mutton in aromatic gravy', price: '₹599', veg: false },
    { name: 'Palak Paneer', desc: 'Cottage cheese in creamy spinach gravy', price: '₹329', veg: true },
    { name: 'Prawn Masala', desc: 'Coastal prawns in spicy onion-tomato masala', price: '₹549', veg: false },
    { name: 'Kadai Paneer', desc: 'Paneer with bell peppers in kadai masala', price: '₹349', veg: true },
  ],
  Biryani: [
    { name: 'Chicken Dum Biryani', desc: 'Hyderabadi-style with fragrant rice', price: '₹379', veg: false },
    { name: 'Mutton Biryani', desc: 'Slow-cooked with tender mutton pieces', price: '₹449', veg: false },
    { name: 'Veg Biryani', desc: 'Aromatic rice with seasonal vegetables', price: '₹299', veg: true },
    { name: 'Prawn Biryani', desc: 'Coastal-style with fresh prawns', price: '₹499', veg: false },
    { name: 'Egg Biryani', desc: 'Classic egg biryani with rich masala', price: '₹329', veg: false },
    { name: 'Special Royal Biryani', desc: "Chef's signature with premium spices", price: '₹649', veg: false },
  ],
  Desserts: [
    { name: 'Gulab Jamun', desc: 'Golden dumplings in rose-cardamom syrup', price: '₹199', veg: true },
    { name: 'Double Ka Meetha', desc: 'Hyderabadi bread pudding with cream', price: '₹249', veg: true },
    { name: 'Phirni', desc: 'Chilled rice pudding with pistachios', price: '₹179', veg: true },
    { name: 'Rasmalai', desc: 'Soft paneer discs in saffron milk', price: '₹229', veg: true },
  ],
  Beverages: [
    { name: 'Masala Chai', desc: 'Traditional spiced tea', price: '₹79', veg: true },
    { name: 'Fresh Lime Soda', desc: 'Sweet / salt / mixed', price: '₹99', veg: true },
    { name: 'Mango Lassi', desc: 'Thick mango yogurt drink', price: '₹149', veg: true },
    { name: 'Rose Sherbet', desc: 'Chilled rose-flavored drink', price: '₹129', veg: true },
    { name: 'Buttermilk', desc: 'Spiced traditional chaas', price: '₹89', veg: true },
  ],
};

const tabs = ['Starters', 'Main Course', 'Biryani', 'Desserts', 'Beverages'];

const MenuItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.04 }}
    className="group relative bg-bg-card/60 rounded-xl p-5 border border-gold/[0.06] hover:border-gold/25 transition-all duration-300 hover:-translate-y-0.5"
  >
    {/* Top row: indicator + name + price */}
    <div className="flex items-start justify-between gap-3 mb-2">
      <div className="flex items-center gap-2.5 min-w-0">
        <span
          className={`flex items-center justify-center w-5 h-5 rounded shrink-0 border ${
            item.veg
              ? 'border-green-500 text-green-500'
              : 'border-red-500 text-red-500'
          }`}
        >
          {item.veg ? (
            <IoLeaf size={11} />
          ) : (
            <GiMeat size={11} />
          )}
        </span>
        <h4 className="text-text font-medium text-[15px] leading-tight truncate">
          {item.name}
        </h4>
      </div>
      <span className="text-gold font-heading text-lg leading-tight whitespace-nowrap">
        {item.price}
      </span>
    </div>

    {/* Dotted line connector */}
    <div className="mx-7 mb-2 border-b border-dotted border-gold/15" />

    {/* Description */}
    <p className="text-text-muted text-[13px] leading-relaxed pl-[30px]">
      {item.desc}
    </p>
  </motion.div>
);

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Starters');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="menu" className="section-padding bg-bg-primary" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm uppercase tracking-[0.25em] font-medium font-body">
            Explore
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-text mt-4 mb-6">
            Our Menu
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex gap-2 flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer border ${
                  activeTab === tab
                    ? 'bg-gold/15 text-gold border-gold/40 shadow-[0_0_15px_rgba(212,168,83,0.1)]'
                    : 'text-text-muted border-bg-elevated hover:text-text hover:border-gold/20 bg-bg-card/40'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {menuData[activeTab].map((item, index) => (
              <MenuItem key={item.name} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Decorative note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-text-muted/60 text-xs mt-10 tracking-wide"
        >
          ✦ All prices inclusive of taxes • Jain options available on request ✦
        </motion.p>
      </div>
    </section>
  );
};

export default Menu;
