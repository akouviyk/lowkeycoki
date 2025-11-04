'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-midnight to-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-sand mb-6">
              Our Story
            </h2>
            
            <div className="space-y-4 text-sand/80 text-lg leading-relaxed">
              <p>
                Lowkey Coki started with a simple vision: bring premium hookah culture 
                to the most beautiful beach in the Caribbean. What began as a passion 
                project has grown into St. Thomas's favorite sunset destination.
              </p>
              
              <p>
                Located right on Coki Beach, we've created a unique space where island 
                vibes meet quality craftsmanship. Every flavor is carefully curated, 
                every session is an experience, and every sunset is unforgettable.
              </p>
              
              <p>
                Whether you're a local looking to unwind or a visitor seeking authentic 
                island nightlife, we're here to provide a lowkey escape with high-end 
                quality. Come for the hookah, stay for the vibes.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-3 text-gold"
            >
              <Heart className="fill-gold" size={24} />
              <p className="font-medium text-lg">
                Made with love in the USVI
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Location & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Location Card */}
            <div className="bg-sand rounded-lg p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-coral/20 rounded-lg">
                  <MapPin className="text-coral" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-midnight mb-2">
                    Find Us
                  </h3>
                  <p className="text-midnight/70">
                    Coki Beach<br />
                    St. Thomas, US Virgin Islands 00802
                  </p>
                </div>
              </div>
              
              <a
                href="https://maps.google.com/?q=Coki+Beach+St+Thomas"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-coral hover:bg-coral/90 text-white text-center py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get Directions
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-sand rounded-lg p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-teal/20 rounded-lg">
                  <Clock className="text-teal" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-midnight mb-4">
                    Hours
                  </h3>
                  <div className="space-y-2 text-midnight/70">
                    <div className="flex justify-between">
                      <span className="font-medium">Thursday - Sunday</span>
                      <span>4PM - 2AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Wednesday</span>
                      <span>5PM - 12AM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-midnight/60 mt-4 pt-4 border-t border-teal/20">
                Hours may vary during holidays and special events
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-sand rounded-lg p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/20 rounded-lg">
                  <Phone className="text-gold" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-midnight mb-2">
                    Contact
                  </h3>
                  <p className="text-midnight/70 mb-3">
                    <a href="tel:+13405551234" className="hover:text-coral transition-colors">
                      (340) 555-1234
                    </a>
                  </p>
                  <p className="text-midnight/70">
                    <a href="mailto:info@lowkeycoki.com" className="hover:text-coral transition-colors">
                      info@lowkeycoki.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="aspect-video bg-gradient-to-br from-teal to-midnight flex items-center justify-center">
            <div className="text-sand/50 text-center">
              <MapPin size={48} className="mx-auto mb-4" />
              <p>Interactive Map Placeholder</p>
              <p className="text-sm mt-2">Integrate Google Maps or Mapbox</p>
            </div>
            {/* Replace with actual map integration:
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876...."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
            */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
