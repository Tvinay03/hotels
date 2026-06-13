import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaYoutube />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
  ];

  return (
    <footer className="bg-bg-card">
      <div className="gold-divider" />

      <div className="py-16 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="font-heading text-2xl text-gold-gradient mb-4">
              Royal Spice
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Crafting authentic Indian culinary experiences since 2008. Where
              tradition meets taste in the heart of Visakhapatnam.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-text-muted hover:text-gold transition text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4">Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-gold transition text-sm block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <IoLocationSharp className="text-gold shrink-0" />
                <span>47-3-16, Dwaraka Nagar, Visakhapatnam, AP 530016</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <IoCall className="text-gold shrink-0" />
                <span>+91 891 234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <IoMail className="text-gold shrink-0" />
                <span>info@royalspice.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bg-elevated mt-12 pt-8 text-center">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Royal Spice Restaurant, Visakhapatnam. All Rights Reserved.
          </p>
          <p className="text-text-muted text-xs mt-2">
            Crafted with ❤️ for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
