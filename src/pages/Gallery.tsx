import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, PartyPopper } from 'lucide-react'

type Category = 'All' | 'Our Dishes' | 'Restaurant' | 'Happy Guests'

interface GalleryImage {
  src: string
  alt: string
  category: Exclude<Category, 'All'>
}

const galleryImages: GalleryImage[] = [
  { src: '/images/dish-1.jpg', alt: 'Signature dish beautifully plated', category: 'Our Dishes' },
  { src: '/images/guest-1.jpg', alt: 'Happy guests enjoying their meal', category: 'Happy Guests' },
  { src: '/images/shop-front.jpeg', alt: 'Prithi Cuisine shop front', category: 'Restaurant' },
  { src: '/images/dish-2.jpg', alt: 'Traditional Indian delicacy', category: 'Our Dishes' },
  { src: '/images/guest-2.jpg', alt: 'Guests celebrating a special occasion', category: 'Happy Guests' },
  { src: '/images/interior-1.jpg', alt: 'Elegant restaurant interior', category: 'Restaurant' },
  { src: '/images/dish-3.jpg', alt: 'Chef\'s special creation', category: 'Our Dishes' },
  { src: '/images/guest-3.jpg', alt: 'Family dinner at Prithi Cuisine', category: 'Happy Guests' },
  { src: '/images/gallery-1.jpg', alt: 'Exquisite culinary presentation', category: 'Our Dishes' },
  { src: '/images/guest-4.jpg', alt: 'Friends gathering over fine dining', category: 'Happy Guests' },
  { src: '/images/offer-1.png', alt: 'Special seasonal offering', category: 'Our Dishes' },
  { src: '/images/guest-5.jpg', alt: 'Birthday celebration at Prithi', category: 'Happy Guests' },
  { src: '/images/offer-2.png', alt: 'Featured dish of the day', category: 'Our Dishes' },
  { src: '/images/guest-6.jpg', alt: 'Guests enjoying the ambiance', category: 'Happy Guests' },
]

const categories: Category[] = ['All', 'Our Dishes', 'Restaurant', 'Happy Guests']

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Category>('All')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filteredImages =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
  }

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null)
  }, [])

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return prev === 0 ? filteredImages.length - 1 : prev - 1
    })
  }, [filteredImages.length])

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return prev === filteredImages.length - 1 ? 0 : prev + 1
    })
  }, [filteredImages.length])

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          goToPrev()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex, closeLightbox, goToPrev, goToNext])

  // Reset selected index when filter changes
  useEffect(() => {
    setSelectedIndex(null)
  }, [activeFilter])

  return (
    <section className="min-h-screen bg-prithi-dark">
      {/* Page Header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-prithi-purple/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-prithi-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-prithi-orange font-accent text-lg tracking-[0.3em] uppercase mb-4"
          >
            Visual Journey
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-prithi-white mb-6"
          >
            Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-accent text-xl sm:text-2xl text-prithi-gray max-w-2xl mx-auto italic"
          >
            A visual journey through Prithi Cuisine
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-prithi-orange to-transparent"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeFilter === category
                  ? 'text-white'
                  : 'text-prithi-gray hover:text-prithi-white bg-prithi-navy/50 hover:bg-prithi-navy border border-prithi-charcoal/50'
              }`}
            >
              {activeFilter === category && (
                <motion.div
                  layoutId="activeGalleryTab"
                  className="absolute inset-0 bg-gradient-to-r from-prithi-orange to-prithi-copper rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-prithi-navy aspect-[4/3]"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-prithi-darker/90 via-prithi-darker/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5">
                  <span className="inline-block self-start px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-prithi-orange/80 rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>
                  <p className="text-prithi-white text-sm mt-2 font-body">
                    {image.alt}
                  </p>
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-xl border border-prithi-charcoal/30 group-hover:border-prithi-orange/30 transition-colors duration-400 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-prithi-gray py-20 text-lg font-body"
          >
            No images found in this category.
          </motion.p>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && filteredImages[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-prithi-darker/95 backdrop-blur-md" />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-2 text-prithi-gray hover:text-prithi-white transition-colors duration-200 bg-prithi-charcoal/50 hover:bg-prithi-charcoal rounded-full backdrop-blur-sm"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrev()
              }}
              className="absolute left-4 sm:left-8 z-10 p-3 text-prithi-gray hover:text-prithi-white transition-colors duration-200 bg-prithi-charcoal/50 hover:bg-prithi-charcoal rounded-full backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 sm:right-8 z-10 p-3 text-prithi-gray hover:text-prithi-white transition-colors duration-200 bg-prithi-charcoal/50 hover:bg-prithi-charcoal rounded-full backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={filteredImages[selectedIndex].src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 max-w-5xl w-full mx-4 sm:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image caption */}
              <div className="mt-4 text-center">
                <p className="text-prithi-white font-body text-sm sm:text-base">
                  {filteredImages[selectedIndex].alt}
                </p>
                <p className="text-prithi-gray text-xs mt-1 uppercase tracking-wider">
                  {filteredImages[selectedIndex].category} &middot; {selectedIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Private Events CTA */}
      <div className="relative py-20 overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-prithi-dark via-prithi-navy/30 to-prithi-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-prithi-orange/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <div className="p-6 sm:p-10 lg:p-14 rounded-2xl border border-prithi-charcoal/50 bg-prithi-navy/30 backdrop-blur-sm">
            <PartyPopper className="mx-auto text-prithi-orange mb-4 sm:mb-6" size={36} />

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-prithi-white mb-3 sm:mb-4">
              Want to see your celebration here?
            </h2>

            <p className="font-body text-prithi-gray text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto">
              Host your private events, birthdays, anniversaries, and corporate gatherings at Prithi Cuisine. Let us make your occasion truly special.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-prithi-orange to-prithi-copper text-white font-semibold rounded-full hover:shadow-lg hover:shadow-prithi-orange/25 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
