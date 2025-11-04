'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual implementation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-midnight mb-4">
            Private Events
          </h2>
          <p className="text-midnight/70 text-lg max-w-2xl mx-auto">
            Host your celebration with us. Birthdays, bachelor parties,
            corporate events, and more. Let's create something unforgettable.
          </p>
          <div className="h-1 w-24 bg-coral mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-midnight mb-6">
                Why Choose Us for Your Event
              </h3>

              <div className="space-y-4">
                {[
                  'Exclusive beach venue with stunning sunset views',
                  'Custom hookah flavor menus for your group',
                  'Professional DJ and sound system available',
                  'Dedicated event coordinator',
                  'Flexible packages for groups of 10-50 people',
                  'Photo and video services available',
                  'Catering partnerships for food & drinks',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <svg
                      className="w-6 h-6 text-coral flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-midnight/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-lg p-6 shadow-lg space-y-4">
              <h4 className="text-xl font-bold text-midnight mb-4">
                Get In Touch
              </h4>

              <div className="flex items-center gap-3 text-midnight/70">
                <Phone className="text-teal" size={20} />
                <a
                  href="tel:+13405551234"
                  className="hover:text-coral transition-colors"
                >
                  (340) 555-1234
                </a>
              </div>

              <div className="flex items-center gap-3 text-midnight/70">
                <Mail className="text-teal" size={20} />
                <a
                  href="mailto:events@lowkeycoki.com"
                  className="hover:text-coral transition-colors"
                >
                  events@lowkeycoki.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-midnight/70">
                <MessageSquare className="text-teal" size={20} />
                <span>DM us on Instagram @lowkeycoki</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-coral/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-coral mb-1">500+</div>
                <div className="text-xs text-midnight/70">Events Hosted</div>
              </div>
              <div className="bg-teal/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-teal mb-1">5★</div>
                <div className="text-xs text-midnight/70">Average Rating</div>
              </div>
              <div className="bg-gold/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-gold mb-1">50</div>
                <div className="text-xs text-midnight/70">Max Capacity</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-2xl p-8 space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-midnight mb-2">
                  Request Information
                </h3>
                <p className="text-midnight/60 text-sm">
                  Fill out the form and we'll get back to you within 24 hours
                </p>
              </div>

              <div>
                <label className="block text-midnight font-medium mb-2 text-sm">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  placeholder="Marcus Wallace"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-midnight font-medium mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-midnight font-medium mb-2 text-sm">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                    placeholder="(340) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label className="block text-midnight font-medium mb-2 text-sm">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="bachelor">Bachelor/Bachelorette Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding Related</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other Celebration</option>
                </select>
              </div>

              <div>
                <label className="block text-midnight font-medium mb-2 text-sm">
                  Tell Us About Your Event *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all resize-none"
                  placeholder="Date, number of guests, special requests, budget range..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-coral hover:bg-coral/90 text-white py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm text-center"
                >
                  ✓ Thank you! We'll reach out within 24 hours.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
