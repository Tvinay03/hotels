import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiX } from 'react-icons/fi';

import heroBg from '../assets/images/hero-bg.png';
import galleryInterior from '../assets/images/gallery-interior.png';
import galleryFoodSpread from '../assets/images/gallery-food-spread.png';
import galleryKitchen from '../assets/images/gallery-kitchen.png';
import dishBiryani from '../assets/images/dish-biryani.png';
import aboutRestaurant from '../assets/images/about-restaurant.png';

const galleryItems = [
  { src: heroBg, caption: 'Main Dining Hall', span: true, height: 'h-80' },
  { src: galleryInterior, caption: 'Private Dining', span: false, height: 'h-64' },
  { src: galleryFoodSpread, caption: 'Royal Feast', span: false, height: 'h-64' },
  { src: galleryKitchen, caption: 'Live Kitchen', span: false, height: 'h-80' },
  { src: dishBiryani, caption: 'Signature Biryani', span: false, height: 'h-64' },
  { src: aboutRestaurant, caption: 'Our Heritage', span: true, height: 'h-80' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-body font-medium">
            Visual Feast
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-text mt-4 mb-6">
            Our Gallery
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden relative cursor-pointer group ${item.height} ${
                item.span ? 'md:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item)}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-400 flex items-center justify-center">
                <span className="text-gold font-heading text-xl md:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-center px-4">
                  {item.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-text hover:text-gold transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={32} />
            </button>

            {/* Image */}
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-4xl w-full max-h-[85vh] object-contain mx-auto rounded-lg"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <motion.p
              className="absolute bottom-8 left-0 right-0 text-center text-gold font-heading text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {selectedImage.caption}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
