import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-prithi-darker/95 backdrop-blur-md shadow-lg shadow-prithi-purple/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-prithi-blue text-glow tracking-wide">
                prithi
              </span>
              <span className="hidden sm:block text-xs text-prithi-gray uppercase tracking-[0.3em] mt-2">
                cuisine
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-prithi-white'
                      : 'text-prithi-gray hover:text-prithi-white'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-prithi-blue to-prithi-purple"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+442083990030"
                className="hidden lg:flex items-center gap-2 text-prithi-gray hover:text-prithi-orange transition-colors text-sm"
              >
                <Phone size={14} />
                020 8399 0030
              </a>
              <Link
                to="/contact"
                className="hidden md:inline-flex px-6 py-2.5 bg-gradient-to-r from-prithi-orange to-prithi-copper text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-prithi-orange/25 transition-all duration-300 hover:scale-105"
              >
                Book a Table
              </Link>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden text-prithi-white p-2"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-prithi-darker/98 backdrop-blur-lg md:hidden pt-16"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-heading font-semibold tracking-wider ${
                      location.pathname === link.path
                        ? 'text-prithi-orange'
                        : 'text-prithi-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-prithi-orange to-prithi-copper text-white font-semibold rounded-full"
                >
                  Book a Table
                </Link>
              </motion.div>
              <motion.a
                href="tel:+442083990030"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 text-prithi-gray mt-4"
              >
                <Phone size={16} />
                020 8399 0030
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
