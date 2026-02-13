import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarDays,
  Sparkles,
  PartyPopper,
  Truck,
  ShoppingBag,
  CheckCircle,
  Loader2,
  AlertCircle,
} from 'lucide-react'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const },
  }),
}

const inputClasses =
  'w-full bg-prithi-navy border border-prithi-charcoal rounded-lg px-4 py-3 text-prithi-white placeholder:text-prithi-gray focus:border-prithi-purple focus:ring-1 focus:ring-prithi-purple/50 focus:outline-none transition-all duration-300'

const labelClasses = 'block text-sm text-prithi-gray mb-1.5 font-medium'

const openingHours = [
  { day: 'Sunday', hours: '12:00 - 2:30 PM & 6:00 - 11:00 PM' },
  { day: 'Monday - Thursday', hours: '6:00 PM - 11:00 PM' },
  { day: 'Friday - Saturday', hours: '6:00 PM - 11:30 PM' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    requests: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!WEB3FORMS_KEY) {
      setError('Reservation system is not configured. Please call us to book.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Reservation: ${formData.name} - ${formData.date} at ${formData.time}`,
          from_name: 'Prithi Cuisine Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          guests: formData.guests,
          special_requests: formData.requests || 'None',
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Network error. Please try again or call us on 020 8399 0030.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-prithi-dark">
      {/* ───────── Page Header ───────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-prithi-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-prithi-orange/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-prithi-orange text-sm font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles size={14} />
            Get in Touch
            <Sparkles size={14} />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-prithi-white mb-4"
          >
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-prithi-orange to-prithi-amber">
              &
            </span>{' '}
            Reservations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-accent text-xl text-prithi-gray italic max-w-xl mx-auto"
          >
            We'd love to hear from you
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-8 w-24 h-0.5 bg-gradient-to-r from-prithi-orange via-prithi-amber to-prithi-orange"
          />
        </div>
      </section>

      {/* ───────── Two-Column Layout ───────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* ───── Left: Reservation Form ───── */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="neon-border rounded-2xl bg-prithi-darker/80 backdrop-blur-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-prithi-orange to-prithi-copper flex items-center justify-center">
                  <CalendarDays size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-prithi-white">
                    Reserve a Table
                  </h2>
                  <p className="text-sm text-prithi-gray">
                    Book your dining experience
                  </p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-5">
                    <CheckCircle size={36} className="text-green-400" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-prithi-white mb-2">
                    Reservation Received!
                  </h3>
                  <p className="text-prithi-gray max-w-sm mb-6">
                    Thank you, {formData.name || 'Guest'}! We'll confirm your
                    reservation for{' '}
                    <span className="text-prithi-orange font-medium">
                      {formData.guests || '—'} guest
                      {formData.guests !== '1' ? 's' : ''}
                    </span>{' '}
                    shortly via email or phone.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        date: '',
                        time: '',
                        guests: '',
                        requests: '',
                      })
                    }}
                    className="text-sm text-prithi-purple hover:text-prithi-neon transition-colors underline underline-offset-4"
                  >
                    Make another reservation
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={inputClasses}
                    />
                  </div>

                  {/* Email & Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        required
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7XXX XXX XXX"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Date, Time, Guests row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="date" className={labelClasses}>
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className={`${inputClasses} [color-scheme:dark]`}
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className={labelClasses}>
                        Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className={`${inputClasses} [color-scheme:dark]`}
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className={labelClasses}>
                        Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className={`${inputClasses} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={String(n)}>
                            {n} {n === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                        <option value="10+">10+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="requests" className={labelClasses}>
                      Special Requests
                    </label>
                    <textarea
                      id="requests"
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      placeholder="Any dietary requirements, celebrations, seating preferences..."
                      rows={4}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 text-sm">
                      <AlertCircle size={16} className="shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-prithi-orange to-prithi-copper text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-prithi-orange/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Confirm Reservation'
                    )}
                  </button>

                  <p className="text-xs text-prithi-gray text-center">
                    We'll get back to you within 2 hours to confirm your booking.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* ───── Right: Contact Info & Map ───── */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="rounded-2xl bg-prithi-darker/80 backdrop-blur-sm border border-prithi-charcoal/60 p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-prithi-white mb-6">
                Contact Details
              </h2>

              <ul className="space-y-5">
                {/* Address */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-prithi-orange/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-prithi-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-prithi-gray mb-0.5">Address</p>
                    <p className="text-prithi-cream leading-relaxed">
                      285 Ewell Rd, Surbiton
                      <br />
                      KT6 7AB, United Kingdom
                    </p>
                  </div>
                </li>

                {/* Phone Numbers */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-prithi-blue/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-prithi-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-prithi-gray mb-0.5">Phone</p>
                    <a
                      href="tel:+442083990030"
                      className="block text-prithi-cream hover:text-prithi-orange transition-colors"
                    >
                      +44 20 8399 0030
                    </a>
                    <a
                      href="tel:+442083993904"
                      className="block text-prithi-cream hover:text-prithi-orange transition-colors"
                    >
                      +44 20 8399 3904
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-prithi-purple/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-prithi-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-prithi-gray mb-0.5">Email</p>
                    <a
                      href="mailto:contactus@prithicuisine.com"
                      className="text-prithi-cream hover:text-prithi-orange transition-colors"
                    >
                      contactus@prithicuisine.com
                    </a>
                  </div>
                </li>

                {/* Opening Hours */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-prithi-amber/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-prithi-amber" />
                  </div>
                  <div>
                    <p className="text-sm text-prithi-gray mb-2">Opening Hours</p>
                    <ul className="space-y-1.5">
                      {openingHours.map((item) => (
                        <li key={item.day} className="flex justify-between gap-6 text-sm">
                          <span className="text-prithi-gray whitespace-nowrap">
                            {item.day}
                          </span>
                          <span className="text-prithi-cream whitespace-nowrap">
                            {item.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="rounded-2xl overflow-hidden border border-prithi-charcoal/60"
            >
              <div className="px-6 pt-5 pb-3 bg-prithi-darker/80">
                <h3 className="font-heading text-lg font-semibold text-prithi-white flex items-center gap-2">
                  <MapPin size={18} className="text-prithi-orange" />
                  Find Us
                </h3>
              </div>
              <iframe
                title="Prithi Cuisine Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.0!2d-0.1900!3d51.3940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876070be0a71591%3A0x7e3a4b4e78b0a64f!2s285+Ewell+Rd%2C+Surbiton+KT6+7AB!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="rounded-xl bg-prithi-darker/80 border border-prithi-charcoal/60 p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <Truck size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-prithi-white text-sm mb-1">
                    Free Home Delivery
                  </p>
                  <p className="text-xs text-prithi-gray leading-relaxed">
                    On all orders over &pound;15 within our delivery area
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-prithi-darker/80 border border-prithi-charcoal/60 p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-prithi-orange/10 flex items-center justify-center shrink-0">
                  <ShoppingBag size={20} className="text-prithi-orange" />
                </div>
                <div>
                  <p className="font-semibold text-prithi-white text-sm mb-1">
                    10% Off Collection
                  </p>
                  <p className="text-xs text-prithi-gray leading-relaxed">
                    Discount on all collection orders over &pound;10
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── Private Events Section ───────── */}
      <section className="relative overflow-hidden">
        {/* Decorative gradient top edge */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-prithi-purple/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl bg-gradient-to-br from-prithi-navy via-prithi-darker to-prithi-navy border border-prithi-charcoal/60 p-8 sm:p-12 text-center overflow-hidden"
          >
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-prithi-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-prithi-purple/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-prithi-orange/20 to-prithi-amber/20 mb-6">
                <PartyPopper size={30} className="text-prithi-orange" />
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-prithi-white mb-4">
                Private Events
              </h2>
              <p className="text-prithi-gray max-w-2xl mx-auto mb-3 leading-relaxed">
                Host your parties, birthdays, anniversaries, and private functions at Prithi
                Cuisine. Our team will work with you to create a memorable dining
                experience tailored to your occasion.
              </p>
              <p className="text-prithi-cream font-medium mb-8">
                Call us to discuss your requirements
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+442083990030"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-prithi-orange to-prithi-copper text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-prithi-orange/25 transition-all duration-300 hover:scale-105"
                >
                  <Phone size={18} />
                  020 8399 0030
                </a>
                <a
                  href="mailto:contactus@prithicuisine.com"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-prithi-charcoal text-prithi-cream font-semibold rounded-lg hover:border-prithi-purple/50 hover:bg-prithi-purple/5 transition-all duration-300"
                >
                  <Mail size={18} />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
