import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiCheckCircle, FiX } from 'react-icons/fi';
import interiorImg from '../assets/images/gallery-interior.png';

const timeOptions = [];
for (let h = 12; h <= 22; h++) {
  for (let m = 0; m < 60; m += 30) {
    if (h === 22 && m === 30) break;
    const hour12 = h > 12 ? h - 12 : h;
    const period = h >= 12 ? 'PM' : 'AM';
    const minutes = m === 0 ? '00' : '30';
    timeOptions.push(`${hour12}:${minutes} ${period}`);
  }
}

const guestOptions = [...Array(9)].map((_, i) => `${i + 1}`).concat('10+');

const initialForm = {
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  requests: '',
};

export default function Reservation() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setShowSuccess(true);
    setForm(initialForm);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="reservation" className="section-padding bg-bg-primary">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase font-body">
            Book A Table
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-text mt-4">
            Reserve Your Experience
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT — Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            noValidate
          >
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`input-gold ${errors.name ? '!border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`input-gold ${errors.phone ? '!border-red-500' : ''}`}
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
              )}
            </div>

            {/* Date */}
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="input-gold"
            />

            {/* Time */}
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              className="input-gold"
            >
              <option value="">Select Time</option>
              {timeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            {/* Number of Guests */}
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="input-gold"
            >
              <option value="">Number of Guests</option>
              {guestOptions.map((g) => (
                <option key={g} value={g}>
                  {g} {g === '1' ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>

            {/* Special Requests */}
            <textarea
              name="requests"
              value={form.requests}
              onChange={handleChange}
              placeholder="Special Requests (optional)"
              rows={3}
              className="input-gold resize-none"
            />

            {/* Submit */}
            <button type="submit" className="btn-gold w-full justify-center mt-2">
              <FiCalendar className="text-lg" />
              Reserve Now
            </button>
          </motion.form>

          {/* RIGHT — Image + Info */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Interior Image */}
            <img
              src={interiorImg}
              alt="Royal Spice restaurant interior"
              className="w-full rounded-xl gold-glow object-cover aspect-[4/3]"
            />

            {/* Operating Hours Card */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-heading text-gold text-xl mb-4 flex items-center gap-2">
                <FiClock className="text-gold-light" />
                Opening Hours
              </h3>

              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Monday – Friday</span>
                  <span className="text-text">11:00 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Saturday – Sunday</span>
                  <span className="text-text">10:00 AM – 11:30 PM</span>
                </div>
                <div className="gold-divider my-1" />
                <div className="flex justify-between items-center">
                  <span className="text-gold font-semibold">Happy Hours</span>
                  <span className="text-gold-light font-medium">4:00 PM – 7:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-bg-elevated border border-gold/30 rounded-xl px-6 py-4 shadow-2xl max-w-sm"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <FiCheckCircle className="text-gold text-2xl shrink-0" />
            <p className="text-text text-sm leading-snug">
              Thank you! We'll confirm your reservation shortly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-text-muted hover:text-text transition-colors shrink-0"
            >
              <FiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
