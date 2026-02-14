import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Phone, Flame, Truck, Star } from 'lucide-react'
import { menuData, type MenuCategory } from '../data/menu'

// ── animation variants ─────────────────────────────────────────────
const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

// ── helpers ────────────────────────────────────────────────────────
function formatPrice(price: number): string {
  return `£${price.toFixed(2)}`
}

function SpiceDots({ level }: { level: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 ml-1.5">
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={`inline-block w-1.5 h-1.5 rounded-full ${
            i < level ? 'bg-prithi-copper' : 'bg-prithi-charcoal'
          }`}
        />
      ))}
    </span>
  )
}

// ── component ──────────────────────────────────────────────────────
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [tabBarStuck, setTabBarStuck] = useState(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const tabBarRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const isClickScrolling = useRef(false)

  // ── sticky detection ───────────────────────────────────────────
  useEffect(() => {
    const sentinel = tabBarRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => setTabBarStuck(!entry.isIntersecting),
      { threshold: 1, rootMargin: '-1px 0px 0px 0px' },
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  // ── section observer ───────────────────────────────────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionRefs.current.forEach((section, index) => {
      if (!section) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isClickScrolling.current) {
            setActiveCategory(index)
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
      )
      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // ── scroll active tab into view (horizontal only) ──────────────
  useEffect(() => {
    const tab = tabRefs.current[activeCategory]
    const container = tab?.parentElement
    if (tab && container) {
      const scrollLeft = tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }, [activeCategory])

  // ── click handler for tab navigation ───────────────────────────
  const scrollToSection = useCallback((index: number) => {
    setActiveCategory(index)
    isClickScrolling.current = true

    const section = sectionRefs.current[index]
    if (section) {
      const yOffset = -140
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }

    // Re-enable observer-driven updates after scroll settles
    setTimeout(() => {
      isClickScrolling.current = false
    }, 900)
  }, [])

  return (
    <div className="min-h-screen bg-prithi-dark">
      {/* ── Page Header ───────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-prithi-purple/8 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-prithi-orange/6 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {/* Decorative top line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-prithi-orange to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-accent text-prithi-orange text-lg tracking-widest uppercase mb-4"
          >
            Discover Our Flavours
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-prithi-white leading-tight"
          >
            Our Menu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="font-accent text-xl sm:text-2xl text-prithi-gray mt-5 italic"
          >
            Contemporary Bangladeshi & Indian Cuisine
          </motion.p>

          {/* Decorative bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' as const }}
            className="w-40 h-px bg-gradient-to-r from-transparent via-prithi-purple to-transparent mx-auto mt-8"
          />
        </div>
      </section>

      {/* ── Banquet Banner ────────────────────────────────────── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-5xl mx-auto px-4 mb-12"
      >
        <div className="relative overflow-hidden rounded-2xl border border-prithi-orange/20 bg-gradient-to-r from-prithi-orange/5 via-prithi-copper/10 to-prithi-orange/5">
          {/* shimmer accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-prithi-orange/5 to-transparent animate-pulse" />
          <div className="relative px-6 py-6 sm:py-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Star size={18} className="text-prithi-gold" />
              <span className="font-accent text-sm tracking-widest uppercase text-prithi-gold">
                Special Offer
              </span>
              <Star size={18} className="text-prithi-gold" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-prithi-cream">
              Banquet Night Every Wednesday{' '}
              <span className="text-glow-orange text-prithi-orange">&mdash; £15.95</span>
            </h3>
            <p className="text-prithi-gray mt-2 text-sm sm:text-base">
              Create your own 4-course meal &bull; Starter, Main, Side & Rice or Naan
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Sticky Category Navigation ────────────────────────── */}
      <div ref={tabBarRef} className="h-px" />
      <nav
        className={`sticky top-[64px] sm:top-[80px] z-30 transition-all duration-300 ${
          tabBarStuck
            ? 'bg-prithi-darker/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-prithi-charcoal/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2 sm:py-3 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuData.map((category: MenuCategory, index: number) => (
              <button
                key={category.name}
                ref={(el) => { tabRefs.current[index] = el }}
                onClick={() => scrollToSection(index)}
                className={`whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shrink-0 ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-prithi-orange to-prithi-copper text-white shadow-md shadow-prithi-orange/20'
                    : 'text-prithi-gray hover:text-prithi-white hover:bg-prithi-charcoal/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Menu Sections ─────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-24">
        {menuData.map((category: MenuCategory, catIndex: number) => (
          <div
            key={category.name}
            ref={(el) => { sectionRefs.current[catIndex] = el }}
            className="mb-16 scroll-mt-40"
          >
            {/* Category heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="h-px flex-1 bg-gradient-to-r from-prithi-orange/40 to-transparent" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-prithi-cream shrink-0">
                  {category.name}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-prithi-orange/40 to-transparent" />
              </div>
              {category.description && (
                <p className="text-center font-accent text-prithi-gray italic text-base sm:text-lg">
                  {category.description}
                </p>
              )}
            </motion.div>

            {/* Items grid */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1"
            >
              {category.items.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="group flex flex-col py-3 px-3 -mx-3 rounded-lg hover:bg-prithi-navy/40 transition-colors duration-200"
                >
                  {/* Top row: name, dots, price */}
                  <div className="flex items-baseline gap-1 sm:gap-2">
                    <span className="font-body text-sm sm:text-[15px] font-medium text-prithi-white group-hover:text-prithi-cream transition-colors shrink-0 max-w-[55%] sm:max-w-none truncate sm:overflow-visible sm:text-clip sm:whitespace-normal">
                      {item.name}
                    </span>

                    {/* Badges inline with name */}
                    {item.isPopular && (
                      <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-prithi-gold/15 text-prithi-gold border border-prithi-gold/25 shrink-0">
                        Popular
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="inline-flex items-center text-prithi-copper shrink-0">
                        <Flame size={12} />
                        {item.spiceLevel && <SpiceDots level={item.spiceLevel} />}
                      </span>
                    )}

                    {/* Dotted line filler */}
                    <span className="flex-1 border-b border-dotted border-prithi-charcoal min-w-[12px] sm:min-w-[20px] translate-y-[-3px]" />

                    {/* Price */}
                    <span className="font-body text-sm sm:text-[15px] font-semibold text-prithi-orange shrink-0">
                      {formatPrice(item.price)}
                    </span>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-prithi-gray mt-0.5 leading-relaxed pl-0">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-20 border-t border-prithi-charcoal/50"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-prithi-orange/6 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-prithi-cream mb-4">
            Ready to Order?
          </h2>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-prithi-orange to-transparent mx-auto mb-6" />

          <p className="text-prithi-gray mb-8 max-w-md mx-auto">
            Call us to place your order for collection or delivery. We look forward to serving you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:+442083990030"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-prithi-orange to-prithi-copper text-white font-semibold rounded-full hover:shadow-lg hover:shadow-prithi-orange/25 transition-all duration-300 hover:scale-105"
            >
              <Phone size={18} />
              020 8399 0030
            </a>
            <a
              href="tel:+442083993904"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-prithi-charcoal text-prithi-cream rounded-full hover:border-prithi-orange/40 hover:bg-prithi-navy/40 transition-all duration-300"
            >
              <Phone size={18} />
              020 8399 3904
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-prithi-gray">
            <Truck size={16} className="text-prithi-orange" />
            <span>
              Free delivery on orders over £15 &bull; 10% off collection over £10
            </span>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
