'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/lowkeycoki',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/lowkeycoki',
      label: 'Facebook',
    },
  ];

  const quickLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reserve', href: '#reserve' },
    { label: 'Private Events', href: '#contact' },
  ];

  return (
    <footer className="bg-midnight text-sand border-t border-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              LOWKEY COKI
            </motion.h3>
            <p className="text-sand/70 text-sm leading-relaxed mb-4">
              Premium beach hookah lounge at Coki Beach, St. Thomas. Where
              sunset meet island vibes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-teal/20 rounded-lg hover:bg-coral/20 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sand/70 hover:text-coral transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-sand/70">
              <div>
                <p className="font-medium text-sand">Thu - Sun</p>
                <p>4PM - 2AM</p>
              </div>
              <div>
                <p className="font-medium text-sand">Mon - Wed</p>
                <p>5PM - 12AM</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-sand/70">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-gold" />
                <span>
                  Coki Beach
                  <br />
                  St. Thomas, USVI 00802
                </span>
              </div>
              <div className="flex items-center gap-2 text-sand/70">
                <Phone size={18} className="text-gold" />
                <a
                  href="tel:+13405551234"
                  className="hover:text-coral transition-colors"
                >
                  (340) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-2 text-sand/70">
                <Mail size={18} className="text-gold" />
                <a
                  href="mailto:info@lowkeycoki.com"
                  className="hover:text-coral transition-colors"
                >
                  info@lowkeycoki.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-teal/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sand/60">
            <p>© {currentYear} Lowkey Coki. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-coral transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-coral transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Age Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-sand/50">
            Must be 18+ to use hookah services. Please enjoy responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
