'use client'

import { motion } from 'framer-motion'
import { Calendar, Music, Ticket } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Sunset Sessions',
    dj: 'DJ Tropicana',
    date: 'Every Friday',
    time: '6PM - 11PM',
    description: 'Tropical beats as the sun dips into the Caribbean',
    image: '/event-sunset.jpg',
    capacity: 50,
    ticketsSold: 32,
  },
  {
    id: 2,
    title: 'Beach Beats Saturday',
    dj: 'DJ Wave Rider',
    date: 'Every Saturday',
    time: '8PM - 2AM',
    description: 'Island vibes and signature hookah flavors under the stars',
    image: '/event-beach.jpg',
    capacity: 60,
    ticketsSold: 45,
  },
  {
    id: 3,
    title: 'Chill Sundays',
    dj: 'Live Acoustic',
    date: 'Every Sunday',
    time: '4PM - 9PM',
    description: 'Laid-back grooves and premium flavors',
    image: '/event-chill.jpg',
    capacity: 40,
    ticketsSold: 18,
  },
]

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-midnight to-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-sand mb-4">
            Live Events & DJs
          </h2>
          <p className="text-sand/80 text-lg max-w-2xl mx-auto">
            Experience the best of island nightlife with live music, signature hookah, and ocean views
          </p>
          <div className="h-1 w-24 bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-midnight/60 backdrop-blur-sm rounded-lg overflow-hidden border border-teal/20 hover:border-coral/50 transition-all duration-300 shadow-xl"
            >
              {/* Event Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-teal to-midnight flex items-center justify-center">
                <Music className="text-sand/30" size={64} />
                {/* Replace with actual image: <Image src={event.image} alt={event.title} fill className="object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
              </div>

              {/* Event Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-sand mb-2">
                    {event.title}
                  </h3>
                  <p className="text-coral font-medium flex items-center gap-2">
                    <Music size={16} />
                    {event.dj}
                  </p>
                </div>

                <p className="text-sand/70 text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-sand/80">
                  <p className="flex items-center gap-2">
                    <Calendar size={16} className="text-gold" />
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Ticket size={16} className="text-gold" />
                    {event.time}
                  </p>
                </div>

                {/* Capacity Bar */}
                <div className="pt-2">
                  <div className="flex justify-between text-xs text-sand/60 mb-1">
                    <span>Spots Available</span>
                    <span>{event.capacity - event.ticketsSold} / {event.capacity}</span>
                  </div>
                  <div className="w-full bg-teal/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-coral to-gold h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.ticketsSold / event.capacity) * 100}%` }}
                    />
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-coral hover:bg-coral/90 text-white py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 mt-4">
                  Reserve Spot
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/events"
            className="inline-block border-2 border-sand text-sand px-8 py-3 rounded-full hover:bg-sand hover:text-midnight transition-all duration-300 font-medium"
          >
            View All Events
          </a>
        </motion.div>
      </div>
    </section>
  )
}
