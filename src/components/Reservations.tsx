'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual Firebase/Stripe integration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
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
    <section
      id="reserve"
      className="py-20 bg-gradient-to-b from-teal/10 to-midnight"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-sand mb-6">
              Reserve Your Spot
            </h2>
            <p className="text-sand/80 text-lg mb-8 leading-relaxed">
              Secure your beach hookah experience. Limited spots available
              nightly. Deposits hold your reservation and ensure the best
              seating.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-coral/20 rounded-lg">
                  <Calendar className="text-coral" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-sand text-lg mb-1">
                    Open Daily
                  </h4>
                  <p className="text-sand/70">
                    4PM - 2AM (Thu-Sun), 5PM - 12AM (Mon-Wed)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/20 rounded-lg">
                  <Users className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-sand text-lg mb-1">
                    Groups Welcome
                  </h4>
                  <p className="text-sand/70">
                    Accommodate parties of 2-12 people
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal/40 rounded-lg">
                  <Clock className="text-sand" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-sand text-lg mb-1">
                    Flexible Sessions
                  </h4>
                  <p className="text-sand/70">
                    2-4 hour experiences, walk-ins based on availability
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-coral/10 border border-coral/30 rounded-lg">
              <p className="text-sand text-sm leading-relaxed">
                <span className="font-semibold">Deposit Policy:</span> A $20
                deposit per person secures your reservation and is applied to
                your final bill. Cancellations require 24-hour notice for
                refund.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
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
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-midnight font-medium mb-2 text-sm">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-3 text-teal/50"
                      size={20}
                    />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                      placeholder="Miguel Bastemonte"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-midnight font-medium mb-2 text-sm">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-3 text-teal/50"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-midnight font-medium mb-2 text-sm">
                  Phone *
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-3 text-teal/50"
                    size={20}
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                    placeholder="(340) 555-0123"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-midnight font-medium mb-2 text-sm">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-midnight font-medium mb-2 text-sm">
                    Time *
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  >
                    <option value="">Select</option>
                    <option value="4pm">4:00 PM</option>
                    <option value="5pm">5:00 PM</option>
                    <option value="6pm">6:00 PM</option>
                    <option value="7pm">7:00 PM</option>
                    <option value="8pm">8:00 PM</option>
                    <option value="9pm">9:00 PM</option>
                    <option value="10pm">10:00 PM</option>
                  </select>
                </div>

                {/* Party Size */}
                <div>
                  <label className="block text-midnight font-medium mb-2 text-sm">
                    Guests *
                  </label>
                  <select
                    name="partySize"
                    required
                    value={formData.partySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  >
                    {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-midnight font-medium mb-2 text-sm">
                  Special Requests
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all resize-none"
                  placeholder="Birthday celebration, dietary restrictions, seating preferences..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-coral hover:bg-coral/90 text-white py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm"
                >
                  ✓ Reservation confirmed! Check your email for details.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
