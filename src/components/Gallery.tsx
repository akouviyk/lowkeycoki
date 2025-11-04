'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const galleryImages = [
  { id: 1, category: 'hookah', alt: 'Premium hookah setup on beach', src: '/gallery/hookah-1.jpg' },
  { id: 2, category: 'sunset', alt: 'Sunset view from Coki Beach', src: '/gallery/sunset-1.jpg' },
  { id: 3, category: 'events', alt: 'Live DJ performance', src: '/gallery/dj-1.jpg' },
  { id: 4, category: 'hookah', alt: 'Signature flavor smoke', src: '/gallery/smoke-1.jpg' },
  { id: 5, category: 'beach', alt: 'Beach seating area', src: '/gallery/beach-1.jpg' },
  { id: 6, category: 'events', alt: 'Night party atmosphere', src: '/gallery/party-1.jpg' },
  { id: 7, category: 'sunset', alt: 'Golden hour vibes', src: '/gallery/sunset-2.jpg' },
  { id: 8, category: 'hookah', alt: 'Premium bowl preparation', src: '/gallery/hookah-2.jpg' },
  { id: 9, category: 'beach', alt: 'Ocean view seating', src: '/gallery/beach-2.jpg' },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'hookah', label: 'Hookah' },
  { id: 'sunset', label: 'Sunset' },
  { id: 'events', label: 'Events' },
  { id: 'beach', label: 'Beach' },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-midnight mb-4">
            Gallery
          </h2>
          <p className="text-midnight/70 text-lg max-w-2xl mx-auto">
            Experience the vibe through our lens
          </p>
          <div className="h-1 w-24 bg-coral mx-auto mt-6" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-coral text-white shadow-lg'
                  : 'bg-white text-midnight hover:bg-teal hover:text-white border border-teal/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square bg-gradient-to-br from-teal to-midnight rounded-lg overflow-hidden cursor-pointer shadow-lg group"
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Placeholder - Replace with actual Cloudflare Images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-sand/30 text-xs text-center p-4">
                    {image.alt}
                  </div>
                </div>
                {/* <Image src={image.src} alt={image.alt} fill className="object-cover" loading="lazy" /> */}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-sand text-sm font-medium p-4">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-midnight/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full aspect-video bg-gradient-to-br from-teal to-midnight rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-sand hover:text-coral transition-colors"
                >
                  <X size={32} />
                </button>

                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-sand/50">
                  {galleryImages.find(img => img.id === selectedImage)?.alt}
                </div>
                {/* <Image 
                  src={galleryImages.find(img => img.id === selectedImage)?.src || ''} 
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                  fill
                  className="object-contain"
                /> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-midnight/70 mb-4">Follow us for daily vibes</p>
          <a
            href="https://instagram.com/lowkeycoki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-coral to-gold text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @lowkeycoki
          </a>
        </motion.div>
      </div>
    </section>
  )
}
