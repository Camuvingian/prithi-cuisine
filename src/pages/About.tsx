import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf, BookOpen, Heart, Award, PartyPopper, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' as const },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
}

const values = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description:
      'Every dish begins with the finest seasonal produce and whole spices, sourced daily to ensure vibrant flavour and unmatched quality.',
  },
  {
    icon: BookOpen,
    title: 'Authentic Recipes',
    description:
      'Rooted in generations of Bangladeshi and Indian culinary heritage, our recipes honour time-tested traditions passed down through family kitchens.',
  },
  {
    icon: Heart,
    title: 'Warm Hospitality',
    description:
      'From the moment you step through our doors, expect genuine warmth, attentive service, and an atmosphere that feels like coming home.',
  },
]

const certificates = [
  { src: '/images/award.jpg', alt: 'Excellence Award' },
  { src: '/images/certificate.jpg', alt: 'Quality Certificate' },
  { src: '/images/certificate-2.jpg', alt: 'Hygiene Certificate' },
]

export default function About() {
  return (
    <div className="bg-prithi-dark">
      {/* ─── Page Header ─── */}
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[350px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/shop-front.jpeg"
          alt="Prithi Cuisine restaurant front"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-prithi-darker/60 via-prithi-dark/70 to-prithi-dark" />

        <div className="relative z-10 text-center px-4">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-accent text-prithi-orange text-lg sm:text-xl tracking-widest uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-prithi-white text-glow"
          >
            About Prithi
          </motion.h1>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 w-24 h-0.5 mx-auto bg-gradient-to-r from-prithi-blue to-prithi-purple rounded-full"
          />
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="relative py-14 sm:py-20 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 -left-20 w-60 h-60 sm:-left-40 sm:w-80 sm:h-80 bg-prithi-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-60 h-60 sm:-right-40 sm:w-80 sm:h-80 bg-prithi-orange/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <p className="font-accent text-prithi-orange text-lg tracking-widest uppercase mb-3">
                Who We Are
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-prithi-white mb-6 sm:mb-8">
                A Taste of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-prithi-blue to-prithi-purple">
                  Tradition
                </span>
              </h2>

              <div className="space-y-5 text-prithi-gray leading-relaxed text-base sm:text-lg font-body">
                <p>
                  Prithi specialises in Bangladeshi and sub-continent Indian cuisine, bringing the
                  soul of South Asian home cooking to every plate. Our kitchen is built around the
                  age-old craft of clay ovens and open-flame cooking, methods that unlock depth and
                  character no modern shortcut can replicate.
                </p>
                <p>
                  We draw on the rich traditions of Kashmiri spice work and balti cooking, layering
                  aromatic spices with care and precision. Each dish tells a story of heritage --
                  from slow-roasted tandoori meats to delicately balanced curries that have warmed
                  generations of families.
                </p>
                <p>
                  Quality is at the heart of everything we do. We prepare every component from
                  scratch with the freshest ingredients, ensuring each visit delivers the distinct,
                  authentic flavours of home-cooked South Asian cuisine.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden neon-border">
                <img
                  src="/images/interior-1.jpg"
                  alt="Inside Prithi Cuisine"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prithi-dark/60 via-transparent to-transparent" />
              </div>

              {/* Decorative corner accents */}
              <div className="hidden sm:block absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-prithi-purple/40 rounded-tr-xl" />
              <div className="hidden sm:block absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-prithi-orange/40 rounded-bl-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Our Chef ─── */}
      <section className="relative py-14 sm:py-20 lg:py-32 bg-prithi-darker/50 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-prithi-purple/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Kitchen/Food Image */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="relative order-2 lg:order-1"
            >
              {/* Purple glow behind the image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-prithi-purple/20 rounded-full blur-[80px]" />

              <div className="relative rounded-2xl overflow-hidden neon-border">
                <img
                  src="/images/dish-2.jpg"
                  alt="Tandoori specialities at Prithi Cuisine"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prithi-dark/60 via-transparent to-transparent" />
              </div>

              {/* Decorative corner accents */}
              <div className="hidden sm:block absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-prithi-purple/40 rounded-tr-xl" />
              <div className="hidden sm:block absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-prithi-orange/40 rounded-bl-xl" />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="order-1 lg:order-2"
            >
              <p className="font-accent text-prithi-orange text-lg tracking-widest uppercase mb-3">
                The Heart of Our Kitchen
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-prithi-white mb-6 sm:mb-8">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-prithi-purple to-prithi-neon">
                  Chef
                </span>
              </h2>

              <div className="space-y-5 text-prithi-gray leading-relaxed text-base sm:text-lg font-body">
                <p>
                  Behind every unforgettable dish at Prithi stands an experienced head chef whose
                  passion for sub-continent cuisine spans decades of dedicated craft. Trained in the
                  traditions of Bangladeshi and North Indian kitchens, our chef brings an
                  uncompromising commitment to authenticity.
                </p>
                <p>
                  Each spice blend is hand-ground in-house, releasing volatile oils and aromatics
                  that pre-ground alternatives simply cannot match. Our famed tandoori specialities
                  are marinated for a minimum of 48 hours, allowing layers of flavour to permeate
                  every fibre.
                </p>
                <p>
                  From slow-cooked curries that simmer for hours to artisanal clay oven breads baked
                  to order, every element of the menu reflects a philosophy of refinement and
                  precision.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-8 pl-6 border-l-2 border-prithi-purple/50">
                <p className="font-accent text-xl sm:text-2xl text-prithi-neon italic">
                  "Cooking is refinement and precision -- it is the patience to let time and fire do
                  what no shortcut ever could."
                </p>
                <p className="mt-3 text-sm text-prithi-gray uppercase tracking-wider">
                  -- Head Chef, Prithi Cuisine
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Our Values ─── */}
      <section className="py-14 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-10 sm:mb-16"
          >
            <p className="font-accent text-prithi-orange text-lg tracking-widest uppercase mb-3">
              What Drives Us
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-prithi-white">
              Our Values
            </h2>
            <div className="mt-6 mx-auto w-20 h-0.5 bg-gradient-to-r from-prithi-blue to-prithi-purple rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={i}
                  className="group relative p-8 rounded-2xl bg-prithi-navy/50 border border-prithi-charcoal/50 hover:border-prithi-purple/30 transition-all duration-500 text-center"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-prithi-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-prithi-blue/20 to-prithi-purple/20 flex items-center justify-center border border-prithi-purple/20 group-hover:border-prithi-purple/40 transition-colors duration-500">
                      <Icon className="w-7 h-7 text-prithi-neon" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-prithi-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-prithi-gray leading-relaxed text-sm sm:text-base">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Awards & Certificates ─── */}
      <section className="py-14 sm:py-20 lg:py-32 bg-prithi-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-10 sm:mb-16"
          >
            <p className="font-accent text-prithi-orange text-lg tracking-widest uppercase mb-3">
              Our Achievements
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-prithi-white">
              Recognised Excellence
            </h2>
            <div className="mt-6 mx-auto w-20 h-0.5 bg-gradient-to-r from-prithi-orange to-prithi-amber rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.alt}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={i}
                className="group relative rounded-2xl overflow-hidden neon-border"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prithi-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-prithi-gold" />
                    <p className="font-heading text-lg text-prithi-white font-semibold">
                      {cert.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Private Events ─── */}
      <section className="relative py-14 sm:py-20 lg:py-32 overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-prithi-purple/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-prithi-orange/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative rounded-3xl overflow-hidden neon-border"
          >
            {/* Inner gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-prithi-navy via-prithi-charcoal/80 to-prithi-navy" />

            <div className="relative z-10 py-10 sm:py-16 px-5 sm:px-8 lg:px-16 text-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-gradient-to-br from-prithi-orange/20 to-prithi-amber/20 flex items-center justify-center border border-prithi-orange/20">
                  <PartyPopper className="w-6 h-6 text-prithi-gold" />
                </div>
              </motion.div>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="font-accent text-prithi-orange text-lg tracking-widest uppercase mb-3"
              >
                Celebrate With Us
              </motion.p>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold text-prithi-white mb-4 sm:mb-6"
              >
                Host Your Private Events{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-prithi-orange to-prithi-amber">
                  & Parties
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className="max-w-2xl mx-auto text-prithi-gray text-base sm:text-lg leading-relaxed mb-10"
              >
                Whether it is a birthday gathering, a family function, or a milestone celebration,
                Prithi offers an intimate and elegant setting to make your occasion truly special.
                Let us craft a bespoke dining experience your guests will remember.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-prithi-orange to-prithi-copper text-white font-semibold rounded-full hover:shadow-lg hover:shadow-prithi-orange/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
