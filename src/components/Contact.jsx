import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IoLocationSharp, IoCall, IoMail, IoTime } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

const contactCards = [
  {
    icon: IoLocationSharp,
    title: 'Address',
    lines: ['Royal Spice Restaurant', '47-11-16, Diamond Park Road', 'Dwaraka Nagar, Visakhapatnam 530016'],
  },
  {
    icon: IoCall,
    title: 'Phone',
    lines: ['+91 98765 43210', '+91 89123 45678'],
  },
  {
    icon: IoMail,
    title: 'Email',
    lines: ['reservations@royalspice.in'],
  },
  {
    icon: IoTime,
    title: 'Business Hours',
    lines: ['Mon-Fri: 11 AM – 11 PM', 'Sat-Sun: 10 AM – 11:30 PM'],
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className="section-padding bg-bg-primary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase font-body">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-text mt-3 mb-5">
            Contact Us
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT — Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <iframe
              title="Royal Spice Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              className="w-full h-80 lg:h-full min-h-[400px] rounded-xl border border-gold/20"
              style={{ filter: 'grayscale(0.3) brightness(0.85)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* RIGHT — Contact Info Cards + CTAs */}
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="glass-card rounded-xl p-5 flex items-start gap-4 gold-glow-hover transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="text-gold text-2xl mt-0.5 shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="font-heading text-text text-lg mb-1">{card.title}</h4>
                    {card.lines.map((line, i) => (
                      <p key={i} className="text-text-muted text-sm leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 mt-4" variants={itemVariants}>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-wa text-white font-semibold py-3.5 px-6 rounded-md inline-flex items-center justify-center gap-2.5 text-sm uppercase tracking-wide transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919876543210"
                className="btn-outline justify-center"
              >
                <IoCall className="text-lg" />
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
