'use client'

import { motion } from 'framer-motion'
import { Sparkles, Flame, Wind } from 'lucide-react'

const menuCategories = [
  {
    title: 'Signature Flavors',
    icon: Sparkles,
    items: [
      { name: 'Caribbean Sunset', price: '$35', description: 'Mango, passion fruit & coconut blend', popular: true },
      { name: 'Island Paradise', price: '$35', description: 'Pineapple, guava & mint fusion', popular: true },
      { name: 'Tropical Storm', price: '$35', description: 'Dragon fruit, lychee & lime' },
      { name: 'Beach Breeze', price: '$35', description: 'Watermelon, cucumber & mint' },
    ],
  },
  {
    title: 'Classic Collection',
    icon: Flame,
    items: [
      { name: 'Double Apple', price: '$30', description: 'Traditional sweet red apple' },
      { name: 'Mint Chill', price: '$30', description: 'Pure cooling mint' },
      { name: 'Grape Escape', price: '$30', description: 'Rich purple grape' },
      { name: 'Peach Pleasure', price: '$30', description: 'Sweet Georgia peach' },
    ],
  },
  {
    title: 'Premium Blends',
    icon: Wind,
    items: [
      { name: 'VIP Reserve', price: '$45', description: 'Exotic blend with gold leaf accent', popular: true },
      { name: 'Sunset Gold', price: '$45', description: 'Premium tropical fusion' },
      { name: 'Ocean Mist', price: '$40', description: 'Blueberry, mint & cream' },
    ],
  },
]

const packages = [
  {
    name: 'Beach Session',
    price: '$85',
    duration: '2 hours',
    features: ['Choice of flavor', 'Premium coals', 'Refreshments included', 'Beach seating'],
  },
  {
    name: 'VIP Experience',
    price: '$150',
    duration: '3 hours',
    features: ['Any premium blend', 'Priority seating', 'Bottle service', 'Photo package', 'DJ shoutout'],
    featured: true,
  },
  {
    name: 'Private Party',
    price: '$400',
    duration: '4 hours',
    features: ['Full area reservation', 'Unlimited flavor swaps', 'Dedicated server', 'Custom playlist', 'Photo & video'],
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-sand">
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
            Menu & Flavors
          </h2>
          <p className="text-midnight/70 text-lg max-w-2xl mx-auto">
            Premium hookah crafted with the finest tobacco and natural ingredients
          </p>
          <div className="h-1 w-24 bg-coral mx-auto mt-6" />
        </motion.div>

        {/* Flavors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border border-teal/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-teal/10 rounded-lg">
                    <IconComponent className="text-teal" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-midnight">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                      className="border-b border-teal/10 pb-4 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-midnight">{item.name}</h4>
                          {item.popular && (
                            <span className="text-xs bg-coral text-white px-2 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <span className="font-bold text-teal">{item.price}</span>
                      </div>
                      <p className="text-sm text-midnight/60">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-midnight mb-3">
              Packages & Experiences
            </h3>
            <p className="text-midnight/70">
              Complete experiences for individuals and groups
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative bg-white rounded-lg p-8 shadow-lg ${
                  pkg.featured
                    ? 'border-2 border-coral ring-4 ring-coral/20'
                    : 'border border-teal/10'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-coral text-white px-4 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-midnight mb-2">{pkg.name}</h4>
                  <div className="text-4xl font-bold text-teal mb-1">{pkg.price}</div>
                  <p className="text-midnight/60 text-sm">{pkg.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-midnight/70 text-sm">
                      <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  pkg.featured
                    ? 'bg-coral text-white hover:bg-coral/90'
                    : 'border-2 border-teal text-teal hover:bg-teal hover:text-white'
                }`}>
                  Book {pkg.name}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
