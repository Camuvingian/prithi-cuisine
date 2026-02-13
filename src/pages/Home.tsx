import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Star,
  Phone,
  Clock,
  MapPin,
  UtensilsCrossed,
  Flame,
  Award,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const featuredDishes = [
  {
    name: "Prithi Tikka Masala",
    price: "£11.45",
    image: "/images/dish-1.jpg",
    description:
      "Tender chicken tikka bathed in our signature creamy masala sauce, infused with hand-ground Kashmiri spices.",
  },
  {
    name: "Tandoori Mixed Grill",
    price: "£15.45",
    image: "/images/dish-2.jpg",
    description:
      "A sizzling platter of chicken tikka, lamb chops, seekh kebab, and tandoori prawns from our clay oven.",
  },
  {
    name: "Non-Vegetable Thali",
    price: "£17.95",
    image: "/images/dish-3.jpg",
    description:
      "A grand selection of curries, tandoori meats, rice, naan, sides, and dessert served on a traditional thali.",
  },
];

const testimonials = [
  {
    name: "James L.",
    rating: 5,
    text: "An absolutely exquisite dining experience. The Tandoori Mixed Grill was cooked to perfection and the spices were beautifully balanced. Best Indian restaurant in Surbiton without a doubt.",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "We visit Prithi every week for their Banquet Night and it never disappoints. The flavours are authentic, the staff are wonderful, and the atmosphere is always warm and welcoming.",
  },
  {
    name: "David R.",
    rating: 5,
    text: "From the moment you walk in, you know this place is special. The chef clearly takes immense pride in every dish. The slow-cooked lamb curry is something I dream about.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ============================================================ */}
      {/*  1. HERO SECTION                                             */}
      {/* ============================================================ */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/shop-front.jpeg"
            alt="Prithi Cuisine restaurant front"
            className="h-full w-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-prithi-darker/80 via-prithi-dark/70 to-prithi-darker/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-heading text-5xl font-bold tracking-tight text-prithi-white sm:text-6xl md:text-7xl lg:text-9xl"
          >
            <span className="text-glow">prithi</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-3 sm:mt-4 font-accent text-base font-medium tracking-widest text-prithi-orange uppercase sm:text-xl md:text-2xl lg:text-3xl"
          >
            Contemporary Bangladeshi &amp; Indian Cuisine
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mx-auto mt-4 sm:mt-6 max-w-xl font-body text-base text-prithi-gray sm:text-lg"
          >
            Surbiton's finest dining experience — where heritage flavours meet
            modern artistry.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-prithi-blue px-6 py-3 sm:px-8 sm:py-3.5 font-body text-sm font-semibold tracking-wide text-white uppercase shadow-lg shadow-prithi-blue/30 transition-all duration-300 hover:bg-prithi-purple hover:shadow-prithi-purple/40 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <UtensilsCrossed className="h-4 w-4" />
              View Our Menu
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-prithi-gold/60 bg-transparent px-6 py-3 sm:px-8 sm:py-3.5 font-body text-sm font-semibold tracking-wide text-prithi-gold uppercase transition-all duration-300 hover:bg-prithi-gold/10 hover:border-prithi-gold hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Phone className="h-4 w-4" />
              Book a Table
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="h-8 w-8 text-prithi-gray/60" />
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  2. ABOUT PREVIEW SECTION                                    */}
      {/* ============================================================ */}
      <section className="relative bg-prithi-dark py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
            >
              <p className="font-accent text-sm font-medium tracking-[0.3em] text-prithi-orange uppercase">
                Discover
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-prithi-white sm:text-4xl lg:text-5xl">
                Our Story
              </h2>
              <div className="line-separator mt-4 mb-8" />
              <p className="font-body text-base sm:text-lg leading-relaxed text-prithi-gray">
                Nestled in the heart of Surbiton, Prithi Cuisine draws on
                generations of culinary heritage from Bangladesh and the Indian
                subcontinent. Our kitchen honours the time-honoured traditions of
                clay oven roasting, open flame cooking, and hand-ground Kashmiri
                spice blends — techniques passed down through our family for
                decades.
              </p>
              <p className="mt-4 font-body text-base sm:text-lg leading-relaxed text-prithi-gray">
                Every dish tells a story of passion, patience, and the pursuit of
                flavour. From the fiery depths of our tandoor to the slow-simmered
                richness of our signature curries, we invite you to taste the
                difference that dedication makes.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wide text-prithi-neon uppercase transition-colors duration-300 hover:text-prithi-gold group"
              >
                Learn More
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.2}
              className="relative"
            >
              <div className="neon-border overflow-hidden rounded-2xl">
                <img
                  src="/images/interior-1.jpg"
                  alt="Inside Prithi Cuisine restaurant"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-prithi-blue/20 to-prithi-purple/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. FEATURED DISHES SECTION                                  */}
      {/* ============================================================ */}
      <section className="relative bg-prithi-darker py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="text-center"
          >
            <p className="font-accent text-sm font-medium tracking-[0.3em] text-prithi-orange uppercase">
              From Our Kitchen
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-prithi-white sm:text-4xl lg:text-5xl">
              Signature Dishes
            </h2>
            <div className="line-separator mx-auto mt-4 mb-4" />
            <p className="mx-auto max-w-2xl font-body text-base sm:text-lg text-prithi-gray">
              Crafted with passion and the finest ingredients, each dish is a
              celebration of authentic flavour.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((dish, i) => (
              <motion.div
                key={dish.name}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i * 0.15}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl bg-prithi-navy shadow-lg shadow-black/30 transition-shadow duration-500 hover:shadow-prithi-blue/20 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-prithi-navy via-transparent to-transparent" />
                  {/* Price badge */}
                  <span className="absolute top-4 right-4 rounded-full bg-prithi-orange/90 px-4 py-1.5 font-body text-sm font-bold text-white shadow-md backdrop-blur-sm">
                    {dish.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-prithi-white">
                    {dish.name}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-prithi-gray">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View full menu link */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="mt-12 text-center"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-prithi-blue/50 bg-prithi-blue/10 px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-prithi-neon uppercase transition-all duration-300 hover:bg-prithi-blue/20 hover:border-prithi-blue hover:scale-105"
            >
              <UtensilsCrossed className="h-4 w-4" />
              Explore Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. BANQUET / SPECIAL OFFERS SECTION                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-prithi-blue/20 via-prithi-purple/20 to-prithi-orange/20" />
        <div className="absolute inset-0 bg-prithi-dark/80" />

        {/* Decorative blurs */}
        <div className="absolute -top-32 -left-32 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-prithi-blue/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-prithi-orange/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-prithi-orange/20 px-5 py-2 font-body text-sm font-semibold text-prithi-amber uppercase tracking-wider">
              <Flame className="h-4 w-4" />
              Special Offer
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15}
            className="mt-6 sm:mt-8 font-heading text-3xl font-bold text-prithi-white sm:text-4xl lg:text-6xl"
          >
            Banquet Night{" "}
            <span className="text-glow-orange">Every Wednesday</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.3}
            className="mx-auto mt-4 sm:mt-6 max-w-2xl font-body text-base sm:text-lg lg:text-xl leading-relaxed text-prithi-light-gray"
          >
            Create your own{" "}
            <span className="font-semibold text-prithi-gold">
              4-course meal
            </span>{" "}
            from our menu — starters, mains, sides, and desserts tailored to
            your taste.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.4}
            className="mt-4 font-heading text-4xl font-bold text-prithi-gold sm:text-5xl lg:text-6xl"
          >
            Only £15.95
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.5}
            className="mt-6 flex flex-col items-center gap-3 text-sm text-prithi-gray"
          >
            <p className="font-body">
              <span className="text-prithi-neon">10% off</span> collection
              orders over £10 &bull;{" "}
              <span className="text-prithi-neon">Free delivery</span> on orders
              over £15
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.6}
            className="mt-10"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-prithi-orange px-10 py-4 font-body text-sm font-bold tracking-wide text-white uppercase shadow-lg shadow-prithi-orange/30 transition-all duration-300 hover:bg-prithi-copper hover:shadow-prithi-copper/40 hover:scale-105"
            >
              View Our Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. CHEF SECTION                                             */}
      {/* ============================================================ */}
      <section className="relative bg-prithi-dark py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Kitchen image */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              className="relative order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-prithi-navy to-prithi-charcoal">
                <img
                  src="/images/gallery-1.jpg"
                  alt="Exquisite culinary presentation at Prithi Cuisine"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-prithi-orange/20 to-prithi-amber/10" />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.1}
              className="order-1 lg:order-2"
            >
              <p className="font-accent text-sm font-medium tracking-[0.3em] text-prithi-orange uppercase">
                The Heart of Prithi
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-prithi-white sm:text-4xl lg:text-5xl">
                Our Chef's Craft
              </h2>
              <div className="line-separator mt-4 mb-8" />
              <p className="font-body text-base sm:text-lg leading-relaxed text-prithi-gray">
                Behind every extraordinary dish stands a chef driven by
                passion and precision. At Prithi, our kitchen is led by a
                culinary artisan who has spent years perfecting the delicate
                balance of Bangladeshi and Indian flavours.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  {
                    title: "Hand-Ground Spice Blends",
                    desc: "Each spice blend is prepared fresh daily, stone-ground to release maximum aroma and depth.",
                  },
                  {
                    title: "48-Hour Marinated Tandoori",
                    desc: "Our meats are marinated for up to 48 hours in yoghurt and spices before meeting the searing heat of the tandoor.",
                  },
                  {
                    title: "Slow-Cooked Curries",
                    desc: "Simmered low and slow, our curries develop rich, layered flavours that simply cannot be rushed.",
                  },
                  {
                    title: "Artisanal Clay Oven Breads",
                    desc: "From naan to paratha, our breads are hand-stretched and baked to order in our traditional clay oven.",
                  },
                ].map((item, idx) => (
                  <motion.li
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.2 + idx * 0.1}
                    className="flex gap-4"
                  >
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-prithi-orange/20 text-prithi-amber">
                      <Flame className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="font-heading text-base font-bold text-prithi-cream">
                        {item.title}
                      </h4>
                      <p className="mt-1 font-body text-sm leading-relaxed text-prithi-gray">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. TESTIMONIALS / AWARDS SECTION                            */}
      {/* ============================================================ */}
      <section className="relative bg-prithi-darker py-14 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="text-center"
          >
            <p className="font-accent text-sm font-medium tracking-[0.3em] text-prithi-orange uppercase">
              Recognition
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-prithi-white sm:text-4xl lg:text-5xl">
              Awards &amp; Reviews
            </h2>
            <div className="line-separator mx-auto mt-4 mb-4" />
          </motion.div>

          {/* Award image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            className="mx-auto mt-12 flex justify-center"
          >
            <div className="relative overflow-hidden rounded-2xl neon-border">
              <img
                src="/images/award.jpg"
                alt="Prithi Cuisine award"
                className="max-h-72 w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Testimonials grid */}
          <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i * 0.15}
                className="relative rounded-2xl bg-prithi-navy/60 p-6 sm:p-8 shadow-lg shadow-black/20 backdrop-blur-sm border border-prithi-charcoal/50"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="h-5 w-5 fill-prithi-amber text-prithi-amber"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 font-body text-base leading-relaxed text-prithi-light-gray italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <p className="mt-6 font-heading text-sm font-bold text-prithi-cream">
                  &mdash; {t.name}
                </p>

                {/* Decorative quote mark */}
                <span className="absolute top-4 right-6 font-heading text-6xl leading-none text-prithi-blue/10 select-none">
                  "
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. FINAL CTA SECTION                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-prithi-dark py-14 sm:py-20 lg:py-32">
        {/* Decorative blurs */}
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-prithi-blue/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-prithi-purple/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <h2 className="font-heading text-3xl font-bold text-prithi-white sm:text-4xl lg:text-6xl">
              Ready to Experience{" "}
              <span className="text-glow">Prithi</span>?
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15}
            className="mx-auto mt-4 sm:mt-6 max-w-xl font-body text-base sm:text-lg text-prithi-gray"
          >
            Reserve your table today or give us a call. We look forward to
            welcoming you.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.3}
            className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-prithi-blue px-8 py-3.5 sm:px-10 sm:py-4 font-body text-sm font-bold tracking-wide text-white uppercase shadow-lg shadow-prithi-blue/30 transition-all duration-300 hover:bg-prithi-purple hover:shadow-prithi-purple/40 hover:scale-105 w-full sm:w-auto justify-center"
            >
              Book a Table
            </Link>
            <a
              href="tel:02083990030"
              className="inline-flex items-center gap-2 rounded-full border border-prithi-gold/60 bg-transparent px-8 py-3.5 sm:px-10 sm:py-4 font-body text-sm font-bold tracking-wide text-prithi-gold uppercase transition-all duration-300 hover:bg-prithi-gold/10 hover:border-prithi-gold hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Phone className="h-4 w-4" />
              020 8399 0030
            </a>
          </motion.div>

          {/* Quick info */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.5}
            className="mx-auto mt-10 sm:mt-14 grid max-w-2xl gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3"
          >
            <div className="flex flex-col items-center gap-2 rounded-xl bg-prithi-navy/40 p-5 border border-prithi-charcoal/40">
              <Clock className="h-5 w-5 text-prithi-neon" />
              <p className="font-body text-xs font-semibold tracking-wider text-prithi-light-gray uppercase">
                Opening Hours
              </p>
              <p className="font-body text-sm text-prithi-gray text-center">
                Mon–Sun
                <br />
                5:30 PM – 11:00 PM
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-xl bg-prithi-navy/40 p-5 border border-prithi-charcoal/40">
              <MapPin className="h-5 w-5 text-prithi-neon" />
              <p className="font-body text-xs font-semibold tracking-wider text-prithi-light-gray uppercase">
                Location
              </p>
              <p className="font-body text-sm text-prithi-gray text-center">
                285 Ewell Rd
                <br />
                Surbiton KT6 7AB
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-xl bg-prithi-navy/40 p-5 border border-prithi-charcoal/40">
              <Award className="h-5 w-5 text-prithi-neon" />
              <p className="font-body text-xs font-semibold tracking-wider text-prithi-light-gray uppercase">
                Award Winning
              </p>
              <p className="font-body text-sm text-prithi-gray text-center">
                Surbiton's Premier
                <br />
                Indian Restaurant
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
